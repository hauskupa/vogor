// Dropbox í vafranum: innskráning (OAuth með PKCE), möppur, upphal og opnir
// hlekkir. Notað af Vogor-spilaranum (vogorPlayer.js) og birtingarsíðunum
// (nafir/birta.js, nafir/dropboxValja.js).
//
// App key er opinber; ekkert leyndarmál fer í gegnum þennan kóða. Innskráningin
// er geymd í vafranum (refresh token) svo hún dugi á milli heimsókna.
//
// Í Dropbox App Console þarf appið:
//   Permissions: files.metadata.read, files.content.read (spilarinn),
//                files.content.write og sharing.write/sharing.read (birtingarsíðurnar)
//   Redirect URIs: hver síða sem skráir inn, t.d. https://www.vogorrecords.com/nafir/birta
// Bætist heimild við þarf að skrá sig inn aftur; þá kemur villan missing_scope.

export const APP_KEY = "rpghdz4ncwxr449";
const STAKT_HAMARK = 150 * 1024 * 1024; // files/upload tekur mest 150 MB í einu
const BUTUR = 32 * 1024 * 1024;

const geyma = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const lesa = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const gleyma = (k) => { try { localStorage.removeItem(k); } catch (e) {} };

function slembi() {
  const a = new Uint8Array(32);
  crypto.getRandomValues(a);
  return Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
}

function b64url(buf) {
  let s = "";
  new Uint8Array(buf).forEach((b) => (s += String.fromCharCode(b)));
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// Dropbox-API-Arg er HTTP-haus og má bara innihalda ASCII; íslenskir stafir fara sem \uXXXX
function hausJson(obj) {
  return JSON.stringify(obj).replace(/[\u007f-￿]/g, (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));
}

// Villa frá Dropbox með .tag svo kallandi geti brugðist við (t.d. missing_scope)
function villa(texti, status) {
  let summary = texti;
  try { summary = JSON.parse(texti).error_summary || texti; } catch (e) {}
  const e = new Error(summary);
  e.status = status;
  e.vantarHeimild = /missing_scope/.test(summary);
  e.utrunnid = status === 401 && !e.vantarHeimild;
  return e;
}

// geymsla: forskeyti í localStorage. Spilarinn notar "rs" (eldri lyklar hans halda sér).
export function createDropbox({ appKey = APP_KEY, geymsla = "rs" } = {}) {
  const K = { refresh: geymsla + "_refresh", verifier: geymsla + "_verifier", state: geymsla + "_state" };
  let token = null;
  let rennurUt = 0;
  let rot = null; // Dropbox-API-Path-Root í team space

  const tilBaka = () => location.origin + location.pathname;

  async function innskra() {
    const verifier = slembi();
    const state = slembi();
    geyma(K.verifier, verifier);
    geyma(K.state, state);
    const challenge = b64url(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier)));
    const slod =
      "https://www.dropbox.com/oauth2/authorize" +
      "?client_id=" + encodeURIComponent(appKey) +
      "&response_type=code&token_access_type=offline" +
      "&code_challenge=" + challenge + "&code_challenge_method=S256" +
      "&state=" + state +
      "&redirect_uri=" + encodeURIComponent(tilBaka());
    // Dropbox leyfir ekki innskráningu inni í iframe
    try { window.top.location.href = slod; } catch (e) { location.href = slod; }
  }

  async function tokenBeidni(params) {
    const r = await fetch("https://api.dropboxapi.com/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ client_id: appKey, ...params }).toString(),
    });
    const d = await r.json();
    if (!r.ok) throw new Error(d.error_description || d.error || "Dropbox-innskráning mistókst");
    token = d.access_token;
    rennurUt = Date.now() + Math.max(0, d.expires_in - 60) * 1000;
    return d;
  }

  // Kallað við ræsingu síðunnar: ef komið er til baka úr innskráningu er kóðanum
  // skipt fyrir token og hann tekinn úr slóðinni. Skilar true ef það gerðist.
  async function ljukaInnskraningu() {
    const slod = new URL(location.href);
    const code = slod.searchParams.get("code");
    if (!code) return false;
    const state = slod.searchParams.get("state");
    const vaent = lesa(K.state);
    slod.searchParams.delete("code");
    slod.searchParams.delete("state");
    try { history.replaceState(history.state, "", slod.href); } catch (e) {}
    // Spilarinn sendi ekki state áður; annars verður það að passa
    if (vaent && state !== vaent) throw new Error("Innskráningin passaði ekki við þessa síðu. Reyndu aftur.");
    const d = await tokenBeidni({
      code,
      grant_type: "authorization_code",
      code_verifier: lesa(K.verifier) || "",
      redirect_uri: tilBaka(),
    });
    gleyma(K.verifier);
    gleyma(K.state);
    if (d.refresh_token) geyma(K.refresh, d.refresh_token);
    return true;
  }

  async function saekjaToken() {
    if (token && Date.now() < rennurUt) return token;
    const refresh = lesa(K.refresh);
    if (!refresh) throw new Error("Ekki tengt við Dropbox");
    await tokenBeidni({ grant_type: "refresh_token", refresh_token: refresh });
    return token;
  }

  function utskra() {
    gleyma(K.refresh);
    token = null;
    rennurUt = 0;
    rot = null;
  }

  async function hausar(skrar) {
    const h = { Authorization: "Bearer " + (await saekjaToken()) };
    // Í team space þarf að beina skráaköllum á rótina, annars sést bara persónulega svæðið
    if (rot && skrar) h["Dropbox-API-Path-Root"] = rot;
    return h;
  }

  async function api(endpoint, body) {
    const h = await hausar(endpoint.startsWith("files/"));
    h["Content-Type"] = "application/json";
    const r = await fetch("https://api.dropboxapi.com/2/" + endpoint, {
      method: "POST",
      headers: h,
      body: body === null ? "null" : JSON.stringify(body),
    });
    if (!r.ok) throw villa(await r.text(), r.status);
    return r.json();
  }

  // Reikningurinn; stillir líka rótina ef notandinn er í team space
  async function reikningur() {
    const acc = await api("users/get_current_account", null);
    const ri = acc.root_info;
    if (ri && ri.root_namespace_id && ri.home_namespace_id && ri.root_namespace_id !== ri.home_namespace_id) {
      rot = JSON.stringify({ ".tag": "root", root: ri.root_namespace_id });
    }
    return acc;
  }

  async function listi(slod) {
    let r = await api("files/list_folder", { path: slod, recursive: false });
    let allt = r.entries;
    while (r.has_more) {
      r = await api("files/list_folder/continue", { cursor: r.cursor });
      allt = allt.concat(r.entries);
    }
    return allt;
  }

  // Sendir eitt kall á content-endapunkt með framvindu (fetch gefur enga framvindu á upphali)
  async function sendaInnihald(endpoint, arg, gogn, framvinda) {
    const h = await hausar(true);
    return new Promise((leysa, hafna) => {
      const x = new XMLHttpRequest();
      x.open("POST", "https://content.dropboxapi.com/2/" + endpoint);
      Object.entries(h).forEach(([k, v]) => x.setRequestHeader(k, v));
      x.setRequestHeader("Content-Type", "application/octet-stream");
      x.setRequestHeader("Dropbox-API-Arg", hausJson(arg));
      if (framvinda) x.upload.onprogress = (e) => e.lengthComputable && framvinda(e.loaded);
      x.onload = () => (x.status < 300 ? leysa(x.responseText ? JSON.parse(x.responseText) : null) : hafna(villa(x.responseText, x.status)));
      x.onerror = () => hafna(new Error("Ekkert samband við Dropbox."));
      x.send(gogn);
    });
  }

  // Hleður skrá upp í möppuna. Nafnið breytist ef skrá með sama nafni er til.
  // framvinda(hlutfall 0..1). Skilar lýsigögnum skrárinnar (path_display o.fl.).
  async function hlada(skra, mappa, framvinda = () => {}) {
    const slod = mappa.replace(/\/$/, "") + "/" + skra.name;
    const commit = { path: slod, mode: "add", autorename: true, mute: false };
    if (skra.size <= STAKT_HAMARK) {
      return sendaInnihald("files/upload", commit, skra, (n) => framvinda(n / skra.size));
    }
    // Stærri skrár fara í bútum
    let stada = 0;
    const lota = await sendaInnihald("files/upload_session/start", { close: false }, skra.slice(0, BUTUR), (n) => framvinda(n / skra.size));
    stada = Math.min(BUTUR, skra.size);
    while (skra.size - stada > BUTUR) {
      const fra = stada;
      await sendaInnihald("files/upload_session/append_v2", { cursor: { session_id: lota.session_id, offset: fra }, close: false },
        skra.slice(fra, fra + BUTUR), (n) => framvinda((fra + n) / skra.size));
      stada += BUTUR;
    }
    const fra = stada;
    return sendaInnihald("files/upload_session/finish", { cursor: { session_id: lota.session_id, offset: fra }, commit },
      skra.slice(fra), (n) => framvinda((fra + n) / skra.size));
  }

  // Opinn hlekkur á skrá („Anyone with the link“). Notar þann sem er til ef hann er til.
  async function hlekkur(slod) {
    try {
      const r = await api("sharing/create_shared_link_with_settings", {
        path: slod,
        settings: { requested_visibility: "public", audience: "public", access: "viewer" },
      });
      return r.url;
    } catch (e) {
      if (!/shared_link_already_exists/.test(e.message)) throw e;
      const r = await api("sharing/list_shared_links", { path: slod, direct_only: true });
      const opinn = r.links.find((l) => !l.link_permissions || l.link_permissions.resolved_visibility?.[".tag"] === "public") || r.links[0];
      if (!opinn) throw e;
      return opinn.url;
    }
  }

  // Smámyndir af myndum (Dropbox býr ekki til smámyndir af myndböndum)
  async function smamyndir(slodir) {
    const ut = {};
    // Dropbox tekur mest 25 í hverju kalli
    for (let i = 0; i < slodir.length; i += 25) {
      const hluti = slodir.slice(i, i + 25);
      const h = await hausar(true);
      h["Content-Type"] = "application/json";
      const svar = await fetch("https://content.dropboxapi.com/2/files/get_thumbnail_batch", {
        method: "POST",
        headers: h,
        body: JSON.stringify({ entries: hluti.map((p) => ({ path: p, format: "jpeg", size: "w128h128", mode: "fitone_bestfit" })) }),
      });
      if (!svar.ok) throw villa(await svar.text(), svar.status);
      (await svar.json()).entries.forEach((e, j) => {
        if (e[".tag"] === "success") ut[hluti[j]] = "data:image/jpeg;base64," + e.thumbnail;
      });
    }
    return ut;
  }

  return {
    tengdur: () => !!lesa(K.refresh),
    innskra,
    ljukaInnskraningu,
    utskra,
    api,
    reikningur,
    listi,
    hlada,
    hlekkur,
    smamyndir,
  };
}
