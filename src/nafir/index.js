// Nafir-síðurnar á vogorrecords.com. Byggt í dist/nafir.js (npm run build).
//
// Embed í Webflow, eins á öllum síðum nema nafnið:
//   <div data-nafir="stada"></div>
//   <script src="https://cdn.jsdelivr.net/gh/hauskupa/vogor@main/dist/nafir.js"></script>
//
// CSS-ið fylgir með og er sprautað inn hér, svo ekkert annað þarf að hlaða.
import css from "./nafir.css";
import { setjaFavicon } from "./sameiginlegt.js";
import { stada } from "./stada.js";
import { birta } from "./birta.js";

const SIDUR = { stada: stada, birta: birta };

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
    const sida = SIDUR[el.getAttribute("data-nafir")];
    if (!sida || el.hasAttribute("data-nafir-raest")) return;
    el.setAttribute("data-nafir-raest", "");
    sida(el);
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", raesa);
else raesa();
