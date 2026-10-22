// Promo-kóðar: stjórnsíða. Límt í Embed-element á falinni Webflow-síðu.
// API bendir á /exec-slóð Apps Script-deploymentsins (sjá LESTU.md).
// Leyniorðið (ADMIN_KEY) er slegið inn á síðunni og geymt í vafranum, aldrei í kóðanum.
//
// Embed: <div data-nafir="stjorn"></div> og dist/nafir.js.
import { API } from "./sameiginlegt.js";

const MARKUP = "<div class=\"vp\" id=\"vp-admin\">\n  <form class=\"vp-card\" id=\"vp-gate\" hidden>\n    <label>Leyniorð\n      <input type=\"password\" id=\"vp-key\" autocomplete=\"current-password\" required>\n    </label>\n    <button type=\"submit\">Opna</button>\n  </form>\n\n  <div id=\"vp-app\" hidden>\n    <!-- Póstar: markhópurinn og pitch-póstarnir, úr Póstar-flipanum í Sheet-inu -->\n    <div class=\"vp-card\">\n      <div class=\"vp-row vp-between\">\n        <strong id=\"vp-postar-samtals\">Sæki pósta...</strong>\n        <button type=\"button\" id=\"vp-post-nyr\">Nýr viðtakandi</button>\n      </div>\n      <div class=\"vp-scroll\">\n        <table id=\"vp-postar\">\n          <thead>\n            <tr>\n              <th>Miðill</th><th>Staða</th><th>Hver</th><th>Leið</th><th>Sent</th>\n              <th>Opnað</th><th>Hlustað</th>\n            </tr>\n          </thead>\n          <tbody></tbody>\n        </table>\n      </div>\n      <small>Smelltu á línu til að opna póstinn.</small>\n    </div>\n\n    <form class=\"vp-card\" id=\"vp-post\" hidden>\n      <div class=\"vp-row vp-between\">\n        <strong id=\"vp-post-titill\"></strong>\n        <button type=\"button\" id=\"vp-p-loka\">Loka</button>\n      </div>\n      <div class=\"vp-row\">\n        <label>Miðill\n          <input type=\"text\" id=\"vp-p-midill\" required>\n        </label>\n        <label>Tengiliður\n          <input type=\"text\" id=\"vp-p-tengilidur\">\n        </label>\n        <label>Netfang eða slóð\n          <input type=\"text\" id=\"vp-p-netfang\">\n        </label>\n        <label>Flokkur\n          <select id=\"vp-p-flokkur\"></select>\n        </label>\n      </div>\n      <div class=\"vp-row\">\n        <label>Leið\n          <select id=\"vp-p-leid\">\n            <option>Póstur</option>\n            <option>Facebook</option>\n            <option>Eyðublað</option>\n            <option>Annað</option>\n          </select>\n        </label>\n        <label>Senda frá\n          <select id=\"vp-p-fra\">\n            <option value=\"\">–</option>\n            <option>vogorrecords@vogorrecords.com</option>\n            <option>shakon@shakon.com</option>\n            <option>Eigið netfang</option>\n          </select>\n        </label>\n        <label>Hver sendir\n          <select id=\"vp-p-hver\"></select>\n        </label>\n        <label>Mál\n          <select id=\"vp-p-mal\">\n            <option value=\"en\">English</option>\n            <option value=\"is\">Íslenska</option>\n          </select>\n        </label>\n        <label>Staða\n          <select id=\"vp-p-stada\"></select>\n        </label>\n      </div>\n      <label>Efni\n        <input type=\"text\" id=\"vp-p-efni\">\n      </label>\n      <label>Meginmál\n        <textarea id=\"vp-p-meginmal\" rows=\"18\"></textarea>\n      </label>\n      <small>[BLOKK] og [PRESSUHLEKKUR] víkja fyrir hlekkjum viðtakandans um leið og hann fær kóða. Það sem stendur hér er það sem fer út.</small>\n      <label>Nótur\n        <textarea id=\"vp-p-notur\" rows=\"2\"></textarea>\n      </label>\n      <div class=\"vp-row\">\n        <button type=\"submit\" id=\"vp-p-vista\">Vista</button>\n        <button type=\"button\" id=\"vp-p-gefa\">Gefa kóða</button>\n        <button type=\"button\" id=\"vp-p-opna\">Opna í póstforriti</button>\n        <button type=\"button\" id=\"vp-p-eml\">Sækja sem drög (.eml)</button>\n        <button type=\"button\" id=\"vp-p-afrita-efni\">Afrita efni</button>\n        <button type=\"button\" id=\"vp-p-afrita-meginmal\">Afrita meginmál</button>\n        <button type=\"button\" id=\"vp-p-sent\">Merkja sent</button>\n        <a id=\"vp-p-forskodun\" target=\"_blank\" rel=\"noopener\">Forskoða síðuna</a>\n      </div>\n      <span class=\"vp-status\" id=\"vp-p-status\" role=\"status\"></span>\n    </form>\n\n    <!-- Eldri leiðin: kóði án pósts. Póstar fá kóða í ritlinum hér fyrir ofan -->\n    <details class=\"vp-card\">\n      <summary>Gefa kóða án pósts</summary>\n      <form id=\"vp-gefa\">\n        <div class=\"vp-row\">\n          <label>Viðtakandi\n            <input type=\"text\" id=\"vp-nafn\" placeholder=\"A Closer Listen\" required>\n          </label>\n          <label>Netfang (valfrjálst)\n            <input type=\"email\" id=\"vp-netfang\" placeholder=\"info@acloserlisten.com\">\n          </label>\n          <label>Mál\n            <select id=\"vp-mal\">\n              <option value=\"en\">English</option>\n              <option value=\"is\">Íslenska</option>\n            </select>\n          </label>\n        </div>\n        <button type=\"submit\" id=\"vp-gefa-btn\">Gefa kóða</button>\n        <span class=\"vp-status\" id=\"vp-status\" role=\"status\"></span>\n      </form>\n    </details>\n\n    <div class=\"vp-card\" id=\"vp-nidurstada\" hidden>\n      <strong id=\"vp-titill\"></strong>\n      <textarea id=\"vp-blokk\" rows=\"9\" readonly></textarea>\n      <div class=\"vp-row\">\n        <button type=\"button\" id=\"vp-afrita-blokk\">Afrita blokk</button>\n        <button type=\"button\" id=\"vp-afrita-hlekk\">Afrita pressuhlekk</button>\n        <a id=\"vp-forskodun\" target=\"_blank\" rel=\"noopener\">Forskoða síðuna</a>\n      </div>\n    </div>\n\n    <div class=\"vp-card\">\n      <div class=\"vp-row vp-between\">\n        <strong id=\"vp-samtals\">Sæki stöðu...</strong>\n        <button type=\"button\" id=\"vp-uppfaera\">Uppfæra</button>\n      </div>\n      <div class=\"vp-scroll\">\n        <table id=\"vp-tafla\">\n          <thead>\n            <tr>\n              <th>Viðtakandi</th><th>Kóði</th><th>Úthlutað</th><th>Opnað síðast</th>\n              <th>Opnanir</th><th>Hlusta</th><th>Sækja</th>\n            </tr>\n          </thead>\n          <tbody></tbody>\n        </table>\n      </div>\n      <small>Smelltu á línu til að sjá blokkina aftur. „Sækja“ er smellur á niðurhalshnappinn á pressusíðunni.</small>\n    </div>\n\n    <details class=\"vp-card\">\n      <summary>Flytja inn kóða frá Bandcamp</summary>\n      <p>Límdu innihald export-skrárinnar (CSV) hér. Kóðar sem eru þegar til eru ekki tvíteknir.</p>\n      <textarea id=\"vp-innflutningur\" rows=\"6\"></textarea>\n      <button type=\"button\" id=\"vp-flytja-btn\">Flytja inn</button>\n    </details>\n  </div>\n</div>";

export function stjorn(rot) {
  rot.innerHTML = MARKUP;

  var LYKILL = "vogor-promo-key";

  // Hlekkirnir standa framarlega í línunni: póstforrit brjóta línur við 72 stafi,
  // og þá á brotið að lenda á eftir hlekknum en ekki inni í honum
  var BLOKK = {
    en: {
      pressa: "Your personal promo page (stream, download, press kit):\n{pressa}\n\nDirect links:\n",
      beint: "Listen (private stream): {stream}\nDownload: {download} (MP3, FLAC or WAV)"
    },
    is: {
      pressa: "Þín persónulega promo-síða (streymi, niðurhal, pressuefni):\n{pressa}\n\nBeinir hlekkir:\n",
      beint: "Hlusta (lokað streymi): {stream}\nSækja: {download} (MP3, FLAC eða WAV)"
    }
  };

  function el(id) { return document.getElementById(id); }
  var stillingar = {};
  var valin = null;

  function lesaLykil() {
    try { return localStorage.getItem(LYKILL) || ""; } catch (e) { return ""; }
  }
  function vistaLykil(v) {
    try { v ? localStorage.setItem(LYKILL, v) : localStorage.removeItem(LYKILL); } catch (e) {}
  }
  var key = lesaLykil();

  function kalla(action, data) {
    var body = Object.assign({ action: action, key: key }, data || {});
    return fetch(API, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body)
    })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (r.rangtLeyniord) {
          key = "";
          vistaLykil("");
          syna(false);
        }
        if (!r.ok) throw new Error(r.villa || "Óþekkt villa");
        return r;
      });
  }

  function syna(innskradur) {
    el("vp-gate").hidden = innskradur;
    el("vp-app").hidden = !innskradur;
  }

  function hlekkir(kodi) {
    return {
      pressa: stillingar.press_page ? stillingar.press_page + "?k=" + kodi : "",
      stream: stillingar.private_stream || "",
      download: stillingar.redeem ? stillingar.redeem + "?code=" + kodi : ""
    };
  }

  function fylla(snid, h) {
    return snid.replace(/\{(\w+)\}/g, function (_, k) { return h[k]; });
  }

  function synaBlokk(lina, athugasemd) {
    valin = lina;
    var h = hlekkir(lina.kodi);
    var t = BLOKK[el("vp-mal").value];
    el("vp-titill").textContent = lina.vidtakandi + ": " + lina.kodi + (athugasemd ? " (" + athugasemd + ")" : "");
    el("vp-blokk").value = (h.pressa ? fylla(t.pressa, h) : "") + fylla(t.beint, h);
    el("vp-afrita-hlekk").hidden = !h.pressa;
    el("vp-forskodun").hidden = !h.pressa;
    // &preview=1 svo eigin skoðun teljist ekki sem opnun hjá viðtakanda
    if (h.pressa) el("vp-forskodun").href = h.pressa + "&preview=1";
    el("vp-nidurstada").hidden = false;
  }

  function afrita(texti, hnappur) {
    navigator.clipboard.writeText(texti).then(function () {
      var adur = hnappur.textContent;
      hnappur.textContent = "Afritað";
      setTimeout(function () { hnappur.textContent = adur; }, 1500);
    });
  }

  function reitur(tr, texti) {
    var td = document.createElement("td");
    td.textContent = texti || "-";
    tr.appendChild(td);
  }

  function teikna(r) {
    stillingar = r.stillingar || {};
    el("vp-samtals").textContent = r.linur.length + " úthlutað, " + r.lausir + " lausir af " + r.alls;
    var tbody = el("vp-tafla").tBodies[0];
    tbody.textContent = "";
    r.linur.forEach(function (lina) {
      var tr = document.createElement("tr");
      reitur(tr, lina.vidtakandi);
      reitur(tr, lina.kodi);
      reitur(tr, lina.uthlutad);
      reitur(tr, lina.opnadSidast);
      reitur(tr, lina.opnanir ? String(lina.opnanir) : "");
      reitur(tr, lina.hlusta);
      reitur(tr, lina.saekja);
      tr.addEventListener("click", function () { synaBlokk(lina); });
      tbody.appendChild(tr);
    });
  }

  function uppfaera() {
    return kalla("stada").then(teikna).catch(function (err) {
      el("vp-samtals").textContent = "Villa: " + err.message;
    });
  }

  // ---------- Póstar ----------

  var P_REITIR = ["midill", "tengilidur", "netfang", "flokkur", "leid", "fra", "hver", "mal", "stada", "efni", "meginmal", "notur"];
  var P_SJALFGEFID = { leid: "Póstur", mal: "en", stada: "Drög" };
  // Litur línu í listanum eftir stöðu; hinar stöðurnar eru ólitaðar
  var STADA_LITUR = { "Sent": "sent", "Svarað": "svarad", "Skoppaði": "skoppadi", "Sleppt": "sleppt" };
  var NETFANG = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var STADGENGILL = /\[(BLOKK|PRESSUHLEKKUR)\]/;
  var valinnPostur = null;   // pósturinn sem er opinn; tómur hlutur ef hann er nýr

  function pEl(f) { return el("vp-p-" + f); }
  function postStatus(texti) { el("vp-p-status").textContent = texti || ""; }
  function dags(t) { return t ? t.slice(0, 10) : ""; }

  function valkostir(sel, gildi) {
    if (sel.options.length) return;
    gildi.forEach(function (g) {
      var o = document.createElement("option");
      o.value = g;
      o.textContent = g || "–";
      sel.appendChild(o);
    });
  }

  // Gildi sem er ekki á listanum (slegið beint inn í Sheet-ið) fær að standa
  function setjaVal(sel, v) {
    var til = Array.prototype.some.call(sel.options, function (o) { return o.value === v; });
    if (!til) {
      var o = document.createElement("option");
      o.value = v;
      o.textContent = v;
      sel.appendChild(o);
    }
    sel.value = v;
  }

  function teiknaPosta(r) {
    stillingar = r.stillingar || stillingar;
    valkostir(pEl("stada"), r.stodur);
    valkostir(pEl("hver"), [""].concat(r.band));
    valkostir(pEl("flokkur"), [""].concat(r.flokkar || []));

    var talning = {};
    r.postar.forEach(function (p) { talning[p.stada] = (talning[p.stada] || 0) + 1; });
    var yfirlit = r.stodur
      .filter(function (s) { return talning[s]; })
      .map(function (s) { return talning[s] + " " + s.toLowerCase(); });
    el("vp-postar-samtals").textContent = r.postar.length
      ? r.postar.length + " viðtakendur: " + yfirlit.join(", ")
      : "Enginn viðtakandi skráður enn";

    var tbody = el("vp-postar").tBodies[0];
    tbody.textContent = "";
    // Bakendinn raðar eftir flokki; fyrirsagnarlína þar sem nýr flokkur byrjar
    var flokkur = null;
    r.postar.forEach(function (p) {
      if ((p.flokkur || "") !== flokkur) {
        flokkur = p.flokkur || "";
        var haus = document.createElement("tr");
        haus.className = "vp-flokkur";
        var th = document.createElement("th");
        th.colSpan = 7;
        th.textContent = flokkur || "Óflokkað";
        haus.appendChild(th);
        tbody.appendChild(haus);
      }
      var tr = document.createElement("tr");
      if (STADA_LITUR[p.stada]) tr.className = "vp-st-" + STADA_LITUR[p.stada];
      reitur(tr, p.midill);
      reitur(tr, p.stada);
      reitur(tr, p.hver);
      reitur(tr, p.leid);
      reitur(tr, p.sent);
      reitur(tr, p.opnad ? dags(p.opnad) + (p.opnanir > 1 ? " (" + p.opnanir + "×)" : "") : "");
      reitur(tr, dags(p.hlusta));
      tr.addEventListener("click", function () { opnaPost(p); });
      tbody.appendChild(tr);
    });
  }

  function saekjaPosta() {
    return kalla("postar").then(teiknaPosta).catch(function (err) {
      el("vp-postar-samtals").textContent = "Villa: " + err.message;
    });
  }

  function postHaus() {
    var p = valinnPostur || {};
    el("vp-post-titill").textContent = p.id
      ? p.midill + (p.kodi ? " · kóði " + p.kodi : " · enginn kóði")
      : "Nýr viðtakandi";
    el("vp-p-gefa").hidden = !!p.kodi;
    var pressa = p.kodi ? hlekkir(p.kodi).pressa : "";
    el("vp-p-forskodun").hidden = !pressa;
    if (pressa) el("vp-p-forskodun").href = pressa + "&preview=1";
    var postur = pEl("leid").value === "Póstur";
    el("vp-p-opna").textContent = postur ? "Opna í póstforriti" : "Afrita og opna slóð";
    el("vp-p-eml").hidden = !postur;
  }

  function b64(bytes) {
    var s = "";
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s);
  }

  // Haus með öðru en ASCII fer sem RFC 2047 "encoded words". 39 bæti í hverju
  // halda línunni innan 76 stafa með nafni haussins fremst
  function emlHaus(nafn, gildi) {
    if (/^[\x20-\x7e]*$/.test(gildi)) return nafn + ": " + gildi;
    var enc = new TextEncoder();
    var ord = [];
    var bitar = [];
    Array.from(gildi).forEach(function (stafur) {
      var b = Array.from(enc.encode(stafur));
      if (bitar.length + b.length > 39) {
        ord.push("=?UTF-8?B?" + b64(bitar) + "?=");
        bitar = [];
      }
      bitar = bitar.concat(b);
    });
    if (bitar.length) ord.push("=?UTF-8?B?" + b64(bitar) + "?=");
    return nafn + ": " + ord.join("\r\n ");
  }

  // Póstur sem skrá. X-Unsent biður póstforritið að opna hann sem ósendan póst,
  // og From velur sendanda ef póstforritið er með þann reikning
  function emlSkra(til, fra, efni, meginmal) {
    var hausar = ["To: " + til];
    if (NETFANG.test(fra)) hausar.push("From: " + fra);
    hausar.push(emlHaus("Subject", efni));
    hausar.push("X-Unsent: 1", "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8", "Content-Transfer-Encoding: base64");
    var kodad = b64(new TextEncoder().encode(meginmal.replace(/\r?\n/g, "\r\n")));
    return hausar.join("\r\n") + "\r\n\r\n" + kodad.replace(/(.{76})/g, "$1\r\n") + "\r\n";
  }

  function saekjaSkra(nafn, innihald, tegund) {
    var slod = URL.createObjectURL(new Blob([innihald], { type: tegund }));
    var a = document.createElement("a");
    a.href = slod;
    a.download = nafn;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(slod); }, 1000);
  }

  // Gildin eins og þau komu úr Sheet-inu. Vistun sendir bara reiti sem hafa
  // breyst síðan, svo opinn ritill skrifi ekki yfir það sem Claude eða annar
  // hefur sett inn á sömu línu á meðan
  var upphaf = {};

  function fyllaForm(p) {
    P_REITIR.forEach(function (f) {
      var n = pEl(f);
      var v = p[f] || P_SJALFGEFID[f] || "";
      if (n.tagName === "SELECT") setjaVal(n, v); else n.value = v;
      upphaf[f] = n.value;
    });
  }

  function opnaPost(p) {
    valinnPostur = p;
    fyllaForm(p);
    postStatus(fyllaIRitli() ? "Hlekkir viðtakandans eru komnir inn í textann. „Vista“ geymir hann þannig." : "");
    postHaus();
    el("vp-post").hidden = false;
    el("vp-post").scrollIntoView({ block: "nearest" });
  }

  // Nýr póstur sendir alla reiti; póstur sem er til sendir bara þá sem breyttust
  function lesaPost() {
    var nyr = !(valinnPostur && valinnPostur.id);
    var post = {};
    P_REITIR.forEach(function (f) {
      var v = pEl(f).value;
      if (nyr || v !== upphaf[f]) post[f] = v;
    });
    return post;
  }

  // Vistar breytingarnar í forminu og sýnir póstinn eins og hann er í Sheet-inu á eftir
  function vistaPost() {
    var post = lesaPost();
    if (valinnPostur && valinnPostur.id) post.id = valinnPostur.id;
    postStatus("Vista...");
    return kalla("postVista", { post: post }).then(function (r) {
      valinnPostur = r.postar[0];
      fyllaForm(valinnPostur);
      fyllaIRitli();
      postHaus();
      postStatus("Vistað");
      return saekjaPosta().then(function () { return valinnPostur; });
    });
  }

  // Meginmálið með kóða viðtakandans fylltan inn. null ef kóðann vantar
  function tilbuidMeginmal() {
    var texti = pEl("meginmal").value;
    if (!STADGENGILL.test(texti)) return texti;
    var kodi = valinnPostur && valinnPostur.kodi;
    if (!kodi) return null;
    var h = hlekkir(kodi);
    var t = BLOKK[pEl("mal").value] || BLOKK.en;
    var blokk = (h.pressa ? fylla(t.pressa, h) : "") + fylla(t.beint, h);
    return texti.split("[BLOKK]").join(blokk).split("[PRESSUHLEKKUR]").join(h.pressa);
  }

  // Þegar viðtakandinn á kóða sýnir ritillinn póstinn eins og hann fer út:
  // staðgenglarnir víkja fyrir hlekkjunum. Skilar true ef textinn breyttist
  function fyllaIRitli() {
    var fyllt = tilbuidMeginmal();
    if (fyllt === null || fyllt === pEl("meginmal").value) return false;
    pEl("meginmal").value = fyllt;
    return true;
  }

  function medMeginmali(fn) {
    var meginmal = tilbuidMeginmal();
    if (meginmal === null) {
      postStatus("Gefðu kóða fyrst: pósturinn notar [BLOKK] eða [PRESSUHLEKKUR].");
      return;
    }
    fn(meginmal);
  }

  function postVilla(err) { postStatus("Villa: " + err.message); }

  // Keyrir fn með hnappinn óvirkan á meðan, svo tvísmellur sendi ekki tvær beiðnir
  function medHnappi(btn, fn) {
    btn.disabled = true;
    fn().catch(postVilla).then(function () { btn.disabled = false; });
  }

  el("vp-post-nyr").addEventListener("click", function () { opnaPost({}); });
  el("vp-p-loka").addEventListener("click", function () {
    valinnPostur = null;
    el("vp-post").hidden = true;
  });
  pEl("leid").addEventListener("change", postHaus);

  el("vp-post").addEventListener("submit", function (e) {
    e.preventDefault();
    medHnappi(el("vp-p-vista"), vistaPost);
  });

  el("vp-p-gefa").addEventListener("click", function () {
    medHnappi(this, function () {
      return vistaPost()
        .then(function (p) { return kalla("postGefa", { id: p.id }); })
        .then(function (r) {
          stillingar = r.stillingar || stillingar;
          valinnPostur = r.post;
          postHaus();
          var bod = r.nyr ? "Nýr kóði: " + r.post.kodi : "Miðillinn átti kóða fyrir: " + r.post.kodi;
          // Hlekkirnir fara strax inn í textann og hann er vistaður þannig
          var fyllt = fyllaIRitli();
          return (fyllt ? vistaPost() : Promise.resolve()).then(function () {
            postStatus(bod + (fyllt ? ". Hlekkirnir eru komnir inn í textann." : ""));
            return Promise.all([uppfaera(), saekjaPosta()]);
          });
        });
    });
  });

  el("vp-p-opna").addEventListener("click", function () {
    var btn = this;
    medMeginmali(function (meginmal) {
      var til = pEl("netfang").value.trim();
      var fra = pEl("fra").value;
      if (pEl("leid").value !== "Póstur") {
        afrita(meginmal, btn);
        var slod = /^https?:\/\//i.test(til) ? til : "";
        if (slod) window.open(slod, "_blank", "noopener");
        postStatus(slod ? "Meginmálið er afritað og slóðin opnuð." : "Meginmálið er afritað. Engin slóð er skráð.");
        return;
      }
      if (!NETFANG.test(til)) {
        postStatus("Netfang vantar eða er ekki gilt.");
        return;
      }
      var mailto = "mailto:" + til +
        "?subject=" + encodeURIComponent(pEl("efni").value) +
        "&body=" + encodeURIComponent(meginmal.replace(/\r?\n/g, "\r\n"));
      // Windows klippir langa mailto-hlekki; þá eru .eml-skráin og afritun varaleiðirnar
      postStatus((fra ? "Sendu frá " + fra + ". " : "") +
        (mailto.length > 1900 ? "Langur póstur: ef meginmálið kemur klippt inn, notaðu „Sækja sem drög“ eða „Afrita meginmál“." : ""));
      location.href = mailto;
    });
  });

  el("vp-p-eml").addEventListener("click", function () {
    medMeginmali(function (meginmal) {
      var til = pEl("netfang").value.trim();
      if (!NETFANG.test(til)) {
        postStatus("Netfang vantar eða er ekki gilt.");
        return;
      }
      var nafn = "Nafir - " + pEl("midill").value.trim().replace(/[\\/:*?"<>|]+/g, " ") + ".eml";
      saekjaSkra(nafn, emlSkra(til, pEl("fra").value, pEl("efni").value, meginmal), "message/rfc822");
      postStatus("Opnaðu skrána " + nafn + ": hún á að opnast sem ósendur póstur í póstforritinu.");
    });
  });

  el("vp-p-afrita-efni").addEventListener("click", function () { afrita(pEl("efni").value, this); });
  el("vp-p-afrita-meginmal").addEventListener("click", function () {
    var btn = this;
    medMeginmali(function (meginmal) { afrita(meginmal, btn); });
  });

  el("vp-p-sent").addEventListener("click", function () {
    medHnappi(this, function () {
      return vistaPost()
        .then(function (p) { return kalla("postStada", { id: p.id, stada: "Sent" }); })
        .then(function (r) {
          valinnPostur = r.post;
          fyllaForm(r.post);
          postHaus();
          postStatus("Merkt sent " + r.post.sent);
          return saekjaPosta();
        });
    });
  });

  function saekjaAllt() { return Promise.all([uppfaera(), saekjaPosta()]); }

  el("vp-gate").addEventListener("submit", function (e) {
    e.preventDefault();
    key = el("vp-key").value.trim();
    vistaLykil(key);
    el("vp-key").value = "";
    syna(true);
    saekjaAllt();
  });

  el("vp-gefa").addEventListener("submit", function (e) {
    e.preventDefault();
    var btn = el("vp-gefa-btn");
    var status = el("vp-status");
    btn.disabled = true;
    status.textContent = "Sæki kóða...";
    kalla("gefa", { vidtakandi: el("vp-nafn").value, netfang: el("vp-netfang").value })
      .then(function (r) {
        stillingar = r.stillingar || stillingar;
        synaBlokk(r.lina, r.nyr ? "nýr kóði" : "átti kóða fyrir");
        status.textContent = "";
        el("vp-nafn").value = "";
        el("vp-netfang").value = "";
        return uppfaera();
      })
      .catch(function (err) { status.textContent = "Villa: " + err.message; })
      .then(function () { btn.disabled = false; });
  });

  el("vp-mal").addEventListener("change", function () { if (valin) synaBlokk(valin); });
  el("vp-afrita-blokk").addEventListener("click", function () { afrita(el("vp-blokk").value, this); });
  el("vp-afrita-hlekk").addEventListener("click", function () { afrita(hlekkir(valin.kodi).pressa, this); });
  el("vp-uppfaera").addEventListener("click", saekjaAllt);

  el("vp-flytja-btn").addEventListener("click", function () {
    var btn = this;
    btn.disabled = true;
    kalla("flytjaInn", { texti: el("vp-innflutningur").value })
      .then(function (r) {
        el("vp-innflutningur").value = "Bætti við " + r.nyir + " kóðum (sett " + r.sett + "). Alls " + r.alls + ".";
        return uppfaera();
      })
      .catch(function (err) { el("vp-innflutningur").value = "Villa: " + err.message; })
      .then(function () { btn.disabled = false; });
  });

  syna(!!key);
  if (key) saekjaAllt();
}
