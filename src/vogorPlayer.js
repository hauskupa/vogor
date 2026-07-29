// Vogor spilarinn — les hljóðskrár beint úr Dropbox-möppu gegnum OAuth (PKCE).
//
// Markup í Webflow þarf ytri eining með [data-vogor-player]; allar innri
// einingar finnast gegnum data-vp="nafn" svo ekkert rekist á id í síðunni.
//
// Stillingar má setja á rótina og breyta í Webflow án þess að byggja upp á nýtt:
//   data-app-key="..."   Dropbox app key (opinber — óhætt í markup)
//   data-folder="/Mixes" sjálfgefin mappa
//
// App key er opinber; app secret og token koma hvergi nálægt þessum kóða.

const APP_KEY_FALLBACK = "rpghdz4ncwxr449";
const AUDIO_EXT = /\.(mp3|wav|m4a|aac|ogg|flac)$/i;

export function setupVogorPlayer(root) {
  root = root || document.querySelector("[data-vogor-player]");
  if (!root) return null;

  const APP_KEY = root.dataset.appKey || APP_KEY_FALLBACK;
  const DEFAULT_FOLDER = root.dataset.folder || "";

  const el = (name) => root.querySelector(`[data-vp="${name}"]`);
  const audio = el("audio");

  let tracks = [];
  let currentId = null;
  let accessToken = null;
  let tokenExp = 0;
  let pathRootHeader = null; // sett ef notandinn er í team space

  // --- localStorage hjálparar (virka aðeins á hýstri síðu, ekki í forskoðun) ---
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const read = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const unstore = (k) => { try { localStorage.removeItem(k); } catch (e) {} };

  function showError(name, msg) {
    const e = el(name);
    if (!e) return;
    e.textContent = msg;
    e.classList.add("is-open");
  }
  function clearError(name) {
    const e = el(name);
    if (e) e.classList.remove("is-open");
  }

  function fmt(s) {
    if (!isFinite(s)) return "–:––";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ":" + (sec < 10 ? "0" : "") + sec;
  }

  // ================= OAuth PKCE =================

  const redirectUri = () => location.origin + location.pathname;

  function randVerifier() {
    const a = new Uint8Array(48);
    crypto.getRandomValues(a);
    return Array.prototype.map
      .call(a, (b) => ("0" + b.toString(16)).slice(-2))
      .join("");
  }

  function b64url(buf) {
    const bytes = new Uint8Array(buf);
    let s = "";
    for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function sha256b64url(str) {
    return crypto.subtle
      .digest("SHA-256", new TextEncoder().encode(str))
      .then(b64url);
  }

  function startLogin() {
    clearError("loginErr");
    if (!APP_KEY) {
      showError("loginErr", "Vantar app key — sjá leiðbeiningar.");
      return;
    }
    const verifier = randVerifier();
    store("rs_verifier", verifier);
    sha256b64url(verifier).then((challenge) => {
      const url =
        "https://www.dropbox.com/oauth2/authorize" +
        "?client_id=" + encodeURIComponent(APP_KEY) +
        "&response_type=code" +
        "&token_access_type=offline" +
        "&code_challenge=" + challenge +
        "&code_challenge_method=S256" +
        "&redirect_uri=" + encodeURIComponent(redirectUri());
      // Dropbox leyfir ekki innskráningu inni í iframe — förum upp á topp
      try { window.top.location.href = url; } catch (e) { location.href = url; }
    });
  }

  function tokenRequest(params) {
    return fetch("https://api.dropboxapi.com/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(params).toString(),
    }).then((r) =>
      r.json().then((d) => {
        if (!r.ok) throw new Error(d.error_description || d.error || "OAuth villa");
        return d;
      })
    );
  }

  function exchangeCode(code) {
    return tokenRequest({
      code: code,
      grant_type: "authorization_code",
      code_verifier: read("rs_verifier") || "",
      client_id: APP_KEY,
      redirect_uri: redirectUri(),
    }).then((d) => {
      unstore("rs_verifier");
      if (d.refresh_token) store("rs_refresh", d.refresh_token);
      accessToken = d.access_token;
      tokenExp = Date.now() + Math.max(0, d.expires_in - 60) * 1000;
    });
  }

  function getToken() {
    if (accessToken && Date.now() < tokenExp) return Promise.resolve(accessToken);
    const refresh = read("rs_refresh");
    if (!refresh) return Promise.reject(new Error("Ekki tengt"));
    return tokenRequest({
      grant_type: "refresh_token",
      refresh_token: refresh,
      client_id: APP_KEY,
    }).then((d) => {
      accessToken = d.access_token;
      tokenExp = Date.now() + Math.max(0, d.expires_in - 60) * 1000;
      return accessToken;
    });
  }

  function logout() {
    unstore("rs_refresh");
    accessToken = null;
    tokenExp = 0;
    tracks = [];
    currentId = null;
    audio.pause();
    audio.removeAttribute("src");
    render();
    updateNow();
    updatePanels(false);
  }

  // ================= Dropbox API =================

  function api(endpoint, body) {
    return getToken().then((token) => {
      const headers = {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      };
      // Í team space þarf að beina köllunum á rótarnafnrýmið,
      // annars sést bara persónulega svæðið og path/not_found kemur
      if (pathRootHeader && endpoint.indexOf("files/") === 0) {
        headers["Dropbox-API-Path-Root"] = pathRootHeader;
      }
      return fetch("https://api.dropboxapi.com/2/" + endpoint, {
        method: "POST",
        headers: headers,
        body: body === null ? "null" : JSON.stringify(body),
      }).then((r) => {
        if (!r.ok) {
          return r.text().then((t) => {
            let msg = t;
            try { msg = JSON.parse(t).error_summary || t; } catch (e) {}
            throw new Error(msg);
          });
        }
        return r.json();
      });
    });
  }

  function listAllEntries(path) {
    let entries = [];
    function page(res) {
      entries = entries.concat(res.entries);
      if (res.has_more) {
        return api("files/list_folder/continue", { cursor: res.cursor }).then(page);
      }
      return entries;
    }
    return api("files/list_folder", { path: path, recursive: false }).then(page);
  }

  function normalizeFolder(input) {
    input = (input || "").trim();
    if (/^https?:\/\//i.test(input)) {
      try {
        const u = new URL(input);
        let p = u.pathname.replace(/^\/home(\/|$)/, "/");
        try { p = decodeURIComponent(p); } catch (e) {}
        input = p;
      } catch (e) {}
    }
    if (input && input[0] !== "/") input = "/" + input;
    if (input === "/") input = "";
    if (input.length > 1 && input[input.length - 1] === "/") input = input.slice(0, -1);
    return input;
  }

  function loadFolder() {
    clearError("err");
    const folder = normalizeFolder(el("folder").value);
    const btn = el("loadFolder");
    btn.disabled = true;
    btn.textContent = "Sæki...";

    listAllEntries(folder)
      .then((entries) => {
        const files = entries.filter(
          (e) => e[".tag"] === "file" && AUDIO_EXT.test(e.name)
        );
        if (!files.length) throw new Error("Engar hljóðskrár fundust í þessari möppu.");
        return Promise.all(
          files.map((f) =>
            api("files/get_temporary_link", { path: f.path_lower }).then((res) => ({
              url: res.link,
              name: f.name.replace(AUDIO_EXT, ""),
              dur: NaN,
            }))
          )
        );
      })
      .then((newTracks) => {
        store("rs_folder", folder);
        tracks = applySavedOrder(newTracks);
        // Halda spilun gangandi ef sama lag finnst áfram (eftir endurhleðslu hlekkja)
        currentId = null;
        tracks.forEach(probeDuration);
        render();
        updateNow();
      })
      .catch((err) => {
        showError("err", "Villa: " + err.message);
      })
      .then(() => {
        btn.disabled = false;
        btn.textContent = "Sækja lög";
      });
  }

  // Röðin er vistuð á nafni laganna og lifir endurhleðslur af
  function applySavedOrder(list) {
    const saved = (read("rs_order") || "").split("\n").filter(Boolean);
    list.sort((a, b) => {
      const ia = saved.indexOf(a.name);
      const ib = saved.indexOf(b.name);
      if (ia === -1 && ib === -1) return a.name.localeCompare(b.name, "is");
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
    return list;
  }

  function saveOrder() {
    store("rs_order", tracks.map((t) => t.name).join("\n"));
  }

  function probeDuration(t) {
    const probe = new Audio();
    probe.preload = "metadata";
    probe.src = t.url;
    probe.addEventListener("loadedmetadata", () => {
      t.dur = probe.duration;
      render();
    });
  }

  // ================= UI =================

  function updatePanels(connected) {
    el("loginPanel").style.display = connected ? "none" : "block";
    el("folderPanel").style.display = connected ? "block" : "none";
    if (!connected) return Promise.resolve();
    el("folder").value = read("rs_folder") || DEFAULT_FOLDER || "";
    return api("users/get_current_account", null)
      .then((acc) => {
        const acct = el("acct");
        acct.textContent = "Tengt sem ";
        const b = document.createElement("b");
        b.textContent = acc.name.display_name;
        acct.appendChild(b);
        const ri = acc.root_info;
        if (ri && ri.root_namespace_id && ri.home_namespace_id &&
            ri.root_namespace_id !== ri.home_namespace_id) {
          pathRootHeader = JSON.stringify({
            ".tag": "root",
            root: ri.root_namespace_id,
          });
        }
      })
      .catch(() => {
        el("acct").textContent = "Tengt við Dropbox";
      });
  }

  // ================= Möppuvafri =================

  let bCur = "";

  function parentPath(p) {
    const i = p.lastIndexOf("/");
    return i <= 0 ? "" : p.substring(0, i);
  }

  function bItem(label, cls, onClick) {
    const d = document.createElement("div");
    d.className = "vp-bitem" + (cls ? " " + cls : "");
    d.textContent = label;
    if (onClick) d.addEventListener("click", onClick);
    return d;
  }

  function openBrowser(path) {
    el("browser").classList.add("is-open");
    bCur = path;
    el("bpath").textContent = path || "/ (rót)";
    el("buse").textContent = "";
    const items = el("bitems");
    items.innerHTML = "";
    items.appendChild(bItem("Sæki...", "is-dim"));

    listAllEntries(path)
      .then((entries) => {
        items.innerHTML = "";
        if (path) {
          items.appendChild(bItem("⬑ ..", "", () => openBrowser(parentPath(path))));
        }
        const folders = entries
          .filter((e) => e[".tag"] === "folder")
          .sort((a, b) => a.name.localeCompare(b.name, "is"));
        folders.forEach((f) => {
          items.appendChild(
            bItem("📁 " + f.name, "", () =>
              openBrowser(f.path_display || path + "/" + f.name)
            )
          );
        });
        if (!folders.length) items.appendChild(bItem("Engar undirmöppur", "is-dim"));
        const audioCount = entries.filter(
          (e) => e[".tag"] === "file" && AUDIO_EXT.test(e.name)
        ).length;
        el("buse").textContent = "✓ Nota þessa möppu (" + audioCount + " hljóðskrár)";
      })
      .catch((err) => {
        if (path) { openBrowser(""); return; } // fall til baka í rótina
        items.innerHTML = "";
        items.appendChild(bItem("Villa: " + err.message, "is-dim"));
      });
  }

  // ================= Listi =================

  function render() {
    const list = el("list");
    list.innerHTML = "";
    el("listhead").classList.toggle("is-active", tracks.length > 0);
    el("player").classList.toggle("is-active", tracks.length > 0);
    if (!tracks.length) return;

    tracks.forEach((t, i) => {
      const li = document.createElement("li");
      li.className = "vp-track" + (t.url === currentId ? " is-playing" : "");
      li.draggable = true;
      li.dataset.index = i;
      li.innerHTML =
        '<span class="vp-grip" aria-hidden="true">⠿</span>' +
        '<span class="vp-num"></span>' +
        '<span class="vp-led" aria-hidden="true"></span>' +
        '<span class="vp-name"></span>' +
        '<span class="vp-dur"></span>' +
        '<button class="vp-mv" data-mv="up" title="Færa upp" aria-label="Færa upp">▲</button>' +
        '<button class="vp-mv" data-mv="down" title="Færa niður" aria-label="Færa niður">▼</button>';
      li.querySelector(".vp-num").textContent = i + 1;
      li.querySelector(".vp-name").textContent = t.name;
      li.querySelector(".vp-dur").textContent = fmt(t.dur);

      li.querySelector(".vp-name").addEventListener("click", () => play(i));
      li.querySelector('[data-mv="up"]').addEventListener("click", (e) => {
        e.stopPropagation();
        move(i, i - 1);
      });
      li.querySelector('[data-mv="down"]').addEventListener("click", (e) => {
        e.stopPropagation();
        move(i, i + 1);
      });

      li.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", i);
        li.classList.add("is-dragging");
      });
      li.addEventListener("dragend", () => li.classList.remove("is-dragging"));
      li.addEventListener("dragover", (e) => e.preventDefault());
      li.addEventListener("drop", (e) => {
        e.preventDefault();
        const from = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const to = parseInt(li.dataset.index, 10);
        if (!isNaN(from) && !isNaN(to) && from !== to) move(from, to);
      });

      list.appendChild(li);
    });
  }

  function move(from, to) {
    if (to < 0 || to >= tracks.length) return;
    const item = tracks.splice(from, 1)[0];
    tracks.splice(to, 0, item);
    saveOrder();
    render();
  }

  const indexOfCurrent = () => tracks.findIndex((t) => t.url === currentId);

  function play(i) {
    if (i < 0 || i >= tracks.length) return;
    currentId = tracks[i].url;
    audio.src = currentId;
    audio.play();
    updateNow();
    render();
  }

  function updateNow() {
    const i = indexOfCurrent();
    const num = el("nowNum");
    const name = el("nowName");
    num.textContent = i >= 0 ? String(i + 1).padStart(2, "0") : "--";
    name.textContent = i >= 0 ? tracks[i].name : "";
  }

  // ================= Atburðir =================

  el("connect").addEventListener("click", startLogin);
  el("logout").addEventListener("click", logout);
  el("loadFolder").addEventListener("click", loadFolder);

  el("browseBtn").addEventListener("click", () => {
    const browser = el("browser");
    if (browser.classList.contains("is-open")) {
      browser.classList.remove("is-open");
      return;
    }
    openBrowser(normalizeFolder(el("folder").value));
  });

  el("buse").addEventListener("click", () => {
    el("folder").value = bCur || "/";
    el("browser").classList.remove("is-open");
    loadFolder();
  });

  el("playpause").addEventListener("click", () => {
    if (!audio.src && tracks.length) { play(0); return; }
    if (audio.paused) audio.play(); else audio.pause();
  });
  el("next").addEventListener("click", () => {
    const i = indexOfCurrent();
    play(i + 1 < tracks.length ? i + 1 : 0);
  });
  el("prev").addEventListener("click", () => {
    const i = indexOfCurrent();
    play(i > 0 ? i - 1 : 0);
  });

  audio.addEventListener("play", () => { el("playpause").textContent = "⏸"; });
  audio.addEventListener("pause", () => { el("playpause").textContent = "▶"; });
  audio.addEventListener("ended", () => {
    const i = indexOfCurrent();
    if (i + 1 < tracks.length) play(i + 1);
  });
  audio.addEventListener("timeupdate", () => {
    el("cur").textContent = fmt(audio.currentTime);
    el("tot").textContent = fmt(audio.duration);
    if (isFinite(audio.duration)) {
      el("seek").value = (audio.currentTime / audio.duration) * 100;
    }
  });
  el("seek").addEventListener("input", function () {
    if (isFinite(audio.duration)) {
      audio.currentTime = (this.value / 100) * audio.duration;
    }
  });

  el("copy").addEventListener("click", () => {
    const text = tracks.map((t, i) => i + 1 + ". " + t.name).join("\n");
    navigator.clipboard.writeText(text).then(() => {
      const toast = el("toast");
      toast.classList.add("is-open");
      setTimeout(() => toast.classList.remove("is-open"), 1600);
    });
  });

  // ================= Ræsing =================

  const code = new URLSearchParams(location.search).get("code");

  if (code) {
    // Komum til baka úr Dropbox-innskráningu
    exchangeCode(code)
      .then(() => {
        history.replaceState(null, "", location.pathname);
        return updatePanels(true);
      })
      .then(() => {
        if (read("rs_folder") || DEFAULT_FOLDER) loadFolder();
      })
      .catch((err) => {
        updatePanels(false);
        showError("loginErr", "Innskráning mistókst: " + err.message);
      });
  } else if (read("rs_refresh")) {
    // Þegar tengt — bíðum eftir aðgangsupplýsingum, sækjum svo
    updatePanels(true).then(() => {
      if (read("rs_folder") || DEFAULT_FOLDER) loadFolder();
    });
  } else {
    updatePanels(false);
  }

  return { play, loadFolder, logout, get tracks() { return tracks; } };
}
