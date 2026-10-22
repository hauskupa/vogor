// Nafir-síðurnar á vogorrecords.com. Byggt í dist/nafir.js (npm run build).
//
// Embed í Webflow, eins á öllum síðum nema nafnið. Hleðslan (hledsla.js) er
// fest á commit og sækir þessa skrá festa á nýjasta commit á main:
//   <div data-nafir="stada"></div>
//   <script src="https://cdn.jsdelivr.net/gh/hauskupa/vogor@<sha>/dist/nafir-hledsla.js"></script>
//
// Síður: stada (/nafir/stada), birta (/nafir/birta), stjorn (stjórnsíðan),
// pressa (/nafir/press, FEST Á COMMIT: @<sha> í stað @main, því miðlar eru
// með hlekkina). CSS-ið fylgir með og er sprautað inn hér.
import css from "./nafir.css";
import { setjaFavicon } from "./sameiginlegt.js";
import { stada } from "./stada.js";
import { birta } from "./birta.js";
import { stjorn } from "./stjorn.js";
import { pressa } from "./pressa.js";

const SIDUR = { stada: stada, birta: birta, stjorn: stjorn, pressa: pressa };
// Síður í Nafir-lúkkinu (beige tækið). Stjórnsíðan heldur útliti Webflow-síðunnar
const BEIGE = { stada: true, birta: true, pressa: true };

function raesa() {
  const rot = document.querySelectorAll("[data-nafir]");
  if (!rot.length) return;
  if (!document.getElementById("nafir-css")) {
    const s = document.createElement("style");
    s.id = "nafir-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
  setjaFavicon();
  rot.forEach(function (el) {
    const nafn = el.getAttribute("data-nafir");
    const sida = SIDUR[nafn];
    if (!sida || el.hasAttribute("data-nafir-raest")) return;
    el.setAttribute("data-nafir-raest", "");
    if (BEIGE[nafn]) document.body.classList.add("nafir-beige");
    sida(el);
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", raesa);
else raesa();
