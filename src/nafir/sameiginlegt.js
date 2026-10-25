// Sameiginlegt fyrir Nafir-síðurnar: bakendinn, smiðir, afritun, Dropbox og favicon.
import { FAVICON } from "./favicon.js";
import { kalla } from "../adgangur.js";

export { geyma, geymt as saekjaG, lesaLykil, EKKERT_SAMBAND } from "../adgangur.js";

// Apps Script-bakendinn (vinnusvaedi/vogor-releases/promo/appscript). ?prufa=1
// aftan á slóðinni talar við prufu-deploymentið í stað þess lifandi
const LIFANDI = "https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec";
const PRUFA = "https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec";
export const API = new URLSearchParams(location.search).has("prufa") ? PRUFA : LIFANDI;

export const MANUDIR = ["jan", "feb", "mar", "apr", "maí", "jún", "júl", "ágú", "sep", "okt", "nóv", "des"];

// Vogor vél (vinnusvaedi/vogor-releases/vel): birtingar fyrir verkefni í Verkefni.js
export const VEL = "https://script.google.com/macros/s/AKfycbzhu2dxScQqe5HT7wZZpdpOntDxWffkgORO0n7YH9fLs0K39h9g6LVUUXICe6F93iI2/exec";

// Kall á promo-bakendann, eða aðra slóð (t.d. VEL). Sjá adgangur.js
export function post(beidni, slod) {
  return kalla(slod || API, beidni);
}

export function ny(tag, cls, texti) {
  var n = document.createElement(tag);
  if (cls) n.className = cls;
  if (texti != null) n.textContent = texti;
  return n;
}

export function hlekkur(slod, cls, texti) {
  var a = ny("a", cls, texti);
  a.href = slod;
  a.target = "_blank";
  a.rel = "noopener";
  return a;
}


// Afritar texta á klemmuspjaldið. execCommand er varaleið fyrir vafra sem
// leyfa ekki clipboard-API
export function afrita(texti, takki) {
  // Upprunalegi textinn, svo hann komi aftur þótt smellt sé tvisvar í röð
  if (!takki.hasAttribute("data-merki")) takki.setAttribute("data-merki", takki.textContent);
  function tokst() {
    takki.textContent = "Afritað";
    takki.classList.add("vst-afritad");
    setTimeout(function () { takki.textContent = takki.getAttribute("data-merki"); takki.classList.remove("vst-afritad"); }, 1500);
  }
  function vara() {
    var t = ny("textarea");
    t.value = texti;
    t.setAttribute("readonly", "");
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    try { if (document.execCommand("copy")) tokst(); } catch (e) {}
    document.body.removeChild(t);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texti).then(tokst, vara);
  } else {
    vara();
  }
}

export function afritaTakki(texti, merki) {
  var takki = ny("button", "vst-afrita", merki || "Afrita");
  takki.type = "button";
  takki.setAttribute("data-merki", takki.textContent);
  takki.addEventListener("click", function () { afrita(texti, takki); });
  return takki;
}

// Dropbox-hlekkur opnar vefsíðu; raw=1 skilar skránni sjálfri, svo hún sést sem mynd
export function hrar(slod) {
  try {
    var u = new URL(slod);
    if (!/(^|\.)dropbox\.com$/.test(u.hostname)) return slod;
    u.searchParams.delete("dl");
    u.searchParams.set("raw", "1");
    return u.href;
  } catch (e) { return slod; }
}

// Tegund skrár eftir endingu: { e: "jpg", t: "mynd" | "myndband" | "" }
export function skraTegund(slod) {
  var m = /\.([a-z0-9]+)$/i.exec(String(slod || "").split(/[?#]/)[0]);
  var e = m ? m[1].toLowerCase() : "";
  return { e: e, t: /^(jpe?g|png|gif|webp)$/.test(e) ? "mynd" : /^(mp4|mov|m4v)$/.test(e) ? "myndband" : "" };
}

// Hauskúpan af koverinu í stað favicons vefsins (Webflow leyfir bara eitt fyrir allan vefinn)
export function setjaFavicon() {
  Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'), function (l) { l.parentNode.removeChild(l); });
  var l = document.createElement("link");
  l.rel = "icon";
  l.type = "image/png";
  l.href = FAVICON;
  document.head.appendChild(l);
}

// Leiðarstikan efst á síðum verkefnisins, svo hægt sé að hoppa á milli án þess
// að muna slóðirnar. Lyklarnir eru geymdir í vafranum, svo hlekkirnir þurfa þá ekki.
const LEIDIR = {
  nafir: [["Yfirlit", "/nafir/stada"], ["Birta", "/nafir/birta"], ["Mixer", "/nafir/4track"]],
  per: [["Auglýsingar", "/per/auglysingar"], ["Birta", "/per/birta"], ["Æfing", "/per/jolamixer"]],
};

export function leidir(verkefni) {
  var listi = LEIDIR[verkefni] || LEIDIR.nafir;
  var nuna = location.pathname.replace(/\/$/, "");
  var nav = ny("nav", "vogor-leidir");
  nav.setAttribute("aria-label", "Síður verkefnisins");
  listi.forEach(function (l) {
    var a = ny("a", "", "|" + l[0].toUpperCase().replace(/ /g, "|") + "|");
    a.href = l[1];
    if (l[1] === nuna) a.setAttribute("aria-current", "page");
    nav.appendChild(a);
  });
  return nav;
}
