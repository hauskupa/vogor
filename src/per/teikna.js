// dist/per-spjald.js: spjaldið fyrir PNG-teikningu í smaauglysingar.py.
// Python skrifar HTML-síðu sem hleður þessa skrá og kallar
//   perSpjald.teikna({ flokkur, meginmal, ... }, { saga, plakat })
// og headless Edge tekur mynd. Sama markup og CSS og yfirlestrarsíðan.
import { spjald } from "./spjald.js";
import css from "./spjald.css";

window.perSpjald = {
  teikna(a, valkostir) {
    const s = document.createElement("style");
    s.textContent = css;
    document.head.appendChild(s);
    document.body.innerHTML = spjald(a, valkostir);
  },
};
