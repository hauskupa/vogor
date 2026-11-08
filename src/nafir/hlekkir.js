// Hlekkjasíðan: bio-hlekkurinn á Instagram (/nafir/links). Opin, enginn lykill.
//
// Instagram leyfir ekki hlekki í færslum og API-ið getur hvorki breytt bio né
// sett link-sticker. Þessi síða er því fasti hlekkurinn í bio: föstu hlekkirnir
// eru í hlekkir.html, og efst kemur hlekkurinn úr nýjustu birtu færslunni,
// sóttur úr Vogor vél (doGet ?hlekkir=nafir í vogor-releases/vel/Code.js).
// Færslurnar á Instagram segja þá alltaf bara „Link in bio“.
//
// data-fra="YYYY-MM-DD" / data-til="YYYY-MM-DD" á hvaða elementi sem er: sýnt
// frá og með þeim degi / fram að honum (t.d. pre-save → listen 27. nóv).
//
// Embed í Webflow (síðan /nafir/links). Hlekkirnir inni í div-inu eru varaleið
// ef scriptið hleðst ekki; þeim er skipt út fyrir síðuna:
//   <div data-nafir="hlekkir" data-verkefni="nafir"><a href="https://ffm.to/nafir">Nafir</a></div>
//   <script src="https://cdn.jsdelivr.net/gh/hauskupa/vogor@<sha>/dist/nafir-hledsla.js"></script>
import { VEL, ny } from "./sameiginlegt.js";
import MARKUP from "./hlekkir.html";

// Hlekkur án https://, www. og / í lokin, til samanburðar og til að sýna
function stutt(slod) {
  return String(slod).replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "");
}

export function hlekkir(rot) {
  rot.innerHTML = MARKUP;

  var idag = new Date().toLocaleDateString("sv-SE", { timeZone: "Atlantic/Reykjavik" });
  Array.prototype.forEach.call(rot.querySelectorAll("[data-fra], [data-til]"), function (el) {
    var fra = el.getAttribute("data-fra"), til = el.getAttribute("data-til");
    if ((fra && idag < fra) || (til && idag >= til)) el.remove();
  });

  var rauf = rot.querySelector('[data-vhl="nytt"]');
  var verkefni = rot.getAttribute("data-verkefni") || "nafir";

  function tomt() { rauf.remove(); }

  fetch(VEL + "?hlekkir=" + encodeURIComponent(verkefni))
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (d) {
      var n = d && d.ok && d.nyjast;
      if (!n || !/^https:\/\//.test(n.slod)) return tomt();
      // Sami hlekkur og fastur hnappur: hann fer upp í stað þess að standa tvisvar
      Array.prototype.forEach.call(rot.querySelectorAll(".vhl-hlekkur"), function (a) {
        if (stutt(a.href) === stutt(n.slod)) a.remove();
      });
      var a = ny("a", "vhl-nytt");
      a.href = n.slod;
      a.appendChild(ny("span", "vhl-nytt-merki", "|NEW|"));
      a.appendChild(ny("span", "vhl-nytt-titill", n.titill || "Latest"));
      a.appendChild(ny("span", "vhl-nytt-slod", stutt(n.slod)));
      rauf.appendChild(a);
      rauf.classList.add("vhl-nytt-rauf--komin");
    })
    .catch(tomt);
}
