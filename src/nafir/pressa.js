// Promo-kóðar: pressusíða í Nafir-lúkkinu. Límt í Embed-element á /nafir/press
// (noindex, ekki í valmynd). API bendir á /exec-slóð Apps Script-deploymentsins
// (sjá LESTU.md).
//
// Efnið (bio, lagalisti, textar, credits) er afrit: bio er ENGLISH — press og
// ÍSLENSKA — pressa úr nafir/docs/bio.md, lagalisti úr release.yml, textar úr
// textar.md, credits úr bandcamp.md.
// Breytist það þar þarf að uppfæra það hér líka.
//
// Síðan er á íslensku og ensku. Allur texti sem er til á báðum málum stendur
// tvisvar, með data-mal="en" og data-mal="is", og CSS sýnir þann sem passar við
// data-mal á .vpp. Alt-textar eru í data-alt-en / data-alt-is. Málið ræðst af,
// í þessari röð: ?mal=is|en í slóðinni, vali lesandans á rofanum (localStorage),
// máli póstsins sem kóðinn fór með (bakendinn skilar mal), annars ensku.
// Dymo-miðarnir (|ABOUT| o.s.frv.) eru eins á báðum málum.
//
// Forsíðan er sótt beint af Bandcamp. Ef forsíðunni er skipt út þar breytist
// slóðin; þá þarf að uppfæra src og niðurhalshlekkina hér. Hljómsveitarmyndin
// er í Assets í Webflow; frumskrárnar eru í nafir/photo/.
//
// Scriptið leitar að data-promo-eigindum á ALLRI síðunni:
// data-promo-state="loading | ok | invalid | error"   sýnt eftir stöðu
// data-promo="name"       nafn viðtakanda (texti)
// data-promo="code"       niðurhalskóðinn (texti)
// data-promo="listen"     <a> á private stream
// data-promo="download"   <a> á Bandcamp með kóðann fylltan inn
//
// Embed: <div data-nafir="pressa"></div> og dist/nafir.js FEST Á COMMIT
// (@<sha>), því miðlar eru með hlekkina. Sjá LESTU.md.
import { API } from "./sameiginlegt.js";

import MARKUP from "./pressa.html";

export function pressa(rot) {
  rot.innerHTML = MARKUP;


  var params = new URLSearchParams(location.search);
  var k = (params.get("k") || "").trim().toLowerCase();
  // ?preview=1: eigin skoðun, telst hvorki sem opnun né smellur
  var forskodun = params.has("preview");

  function all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  // Mál síðunnar: ?mal= > val lesandans á rofanum > mál póstsins (frá bakenda) > enska
  var MAL_LYKILL = "nafir-press-mal";
  var rot = document.querySelector(".vpp");
  function gildMal(m) { return m === "is" || m === "en" ? m : ""; }
  function geymtMal() { try { return gildMal(localStorage.getItem(MAL_LYKILL)); } catch (e) { return ""; } }
  var validMal = gildMal(params.get("mal")) || geymtMal();

  function setjaMal(mal) {
    rot.setAttribute("data-mal", mal);
    rot.setAttribute("lang", mal);
    rot.removeAttribute("data-mal-bidur");
    all("[data-mal-val]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-mal-val") === mal));
    });
    all("[data-alt-" + mal + "]").forEach(function (img) { img.alt = img.getAttribute("data-alt-" + mal); });
  }

  all("[data-mal-val]").forEach(function (b) {
    b.addEventListener("click", function () {
      validMal = b.getAttribute("data-mal-val");
      try { localStorage.setItem(MAL_LYKILL, validMal); } catch (e) {}
      setjaMal(validMal);
    });
  });

  // Ekkert svar frá bakenda (ógildur kóði eða villa): mál vafrans ræður
  function malVafrans() { return /^is\b/i.test(navigator.language || "") ? "is" : "en"; }

  if (validMal) setjaMal(validMal);
  // Textinn er falinn meðan beðið er eftir máli; lengur en þetta bíður hann ekki
  setTimeout(function () { if (rot.hasAttribute("data-mal-bidur")) setjaMal(malVafrans()); }, 4000);

  function stada(nafn) {
    all("[data-promo-state]").forEach(function (n) {
      n.hidden = n.getAttribute("data-promo-state") !== nafn;
    });
  }

  function kalla(body, keepalive) {
    return fetch(API, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body),
      keepalive: !!keepalive
    });
  }

  function tengja(nafn, href, hvad) {
    all('[data-promo="' + nafn + '"]').forEach(function (a) {
      a.href = href;
      if (forskodun) return;
      a.addEventListener("click", function () {
        kalla({ action: "smellur", k: k, hvad: hvad }, true).catch(function () {});
      });
    });
  }

  // Lokastaða, og mál ef lesandinn hefur ekki valið: annað hvort póstsins eða vafrans
  function ljuka(nafn, mal) {
    if (rot.hasAttribute("data-mal-bidur")) setjaMal(gildMal(mal) || malVafrans());
    stada(nafn);
  }

  if (!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(k)) {
    ljuka("invalid");
    return;
  }

  stada("loading");
  kalla({ action: "pressa", k: k, forskodun: forskodun })
    .then(function (r) { return r.json(); })
    .then(function (r) {
      if (!r.ok) {
        // villa = eitthvað brotnaði í Apps Script; engin villa = kóðinn er ekki gildur
        ljuka(r.villa ? "error" : "invalid");
        return;
      }
      all('[data-promo="name"]').forEach(function (n) { n.textContent = r.vidtakandi; });
      all('[data-promo="code"]').forEach(function (n) { n.textContent = r.kodi; });
      tengja("listen", r.stream, "hlusta");
      tengja("download", r.download, "saekja");
      // Eldri bakendi skilar ekki mal: þá enska, eins og áður
      ljuka("ok", r.mal || "en");
    })
    .catch(function () { ljuka("error"); });
}
