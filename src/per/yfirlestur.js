// Yfirlestur smáauglýsinga Per á vogorrecords.com/per/auglysingar (noindex,
// ekki í valmynd). Svenni les yfir og lagar; spjaldið breytist um leið og
// allar breytingar skrást í Sheet-ið „Per Aðventustund“.
//
// Embed í Webflow (hleðslan sækir dist/nafir.js á nýjasta commit):
//   <div data-nafir="yfirlestur" data-verkefni="per"></div>
//   <script src="https://cdn.jsdelivr.net/gh/hauskupa/vogor@<sha>/dist/nafir-hledsla.js"></script>
//
// Bakendinn er Apps Script í hub-repo-inu (per-jolatonleikar/yfirlestur/
// appscript/Code.js). Síðan opnast með ?k=<PER_KEY>; sami lykill og
// æfingasíðan notar (permixerSetlist.js), geymdur undir sama heiti.
import { lesaLykil, geyma, geymt, kalla } from "../adgangur.js";
import { spjald, esc } from "./spjald.js";
import MARKUP from "./yfirlestur.html";
import spjaldCss from "./spjald.css";
import siduCss from "./yfirlestur.css";

const API = "https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec";
const LYKILL = "per-yfirlestur-lykill";
const HVER = "per-yfirlestur-hver";
const LETUR = "https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&family=Yellowtail&display=swap";
const DAGAR = ["sun", "mán", "þri", "mið", "fim", "fös", "lau"];
const MANUDIR = ["jan", "feb", "mar", "apr", "maí", "jún", "júl", "ágú", "sep", "okt", "nóv", "des"];
const REITIR = ["flokkur", "meginmal", "undirskrift", "heimild", "postur", "birta", "stada", "athugasemd"];

function setjaStil() {
  if (document.getElementById("per-yfirlestur-css")) return;
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = LETUR;
  document.head.appendChild(l);
  const s = document.createElement("style");
  s.id = "per-yfirlestur-css";
  s.textContent = spjaldCss + "\n" + siduCss;
  document.head.appendChild(s);
}

function ny(tag, cls, texti) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (texti != null) n.textContent = texti;
  return n;
}

function dagsetning(s) {
  const m = /^(\d{4})-(\d\d)-(\d\d)$/.exec(s || "");
  if (!m) return "";
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return DAGAR[d.getDay()] + " " + d.getDate() + ". " + MANUDIR[d.getMonth()];
}

function stuttTimi(s) {
  const m = /^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(s || "");
  return m ? Number(m[3]) + ". " + MANUDIR[Number(m[2]) - 1] + " kl. " + m[4] : "";
}

export function yfirlestur(rot) {
  setjaStil();
  rot.innerHTML = MARKUP;

  const q = (nafn) => rot.querySelector('[data-yl="' + nafn + '"]');
  const { lykill } = lesaLykil("k", LYKILL);
  let hver = geymt(HVER);
  let gogn = { auglysingar: [], stodur: [], nofn: [] };
  const oVistad = {}; // nafn -> true ef reitirnir eru aðrir en það sem er vistað

  function stada(texti, villa) {
    const p = q("stada");
    p.hidden = !texti;
    p.textContent = texti || "";
    p.classList.toggle("yl-villa", !!villa);
  }

  function kallaBakenda(beidni) {
    return kalla(API, { ...beidni, k: lykill }).then((r) => {
      // Ógildur lykill má ekki sitja eftir í vafranum
      if (r.rangurLykill) geyma(LYKILL, "");
      return r;
    });
  }

  // Spjaldið er 1080 punktar; minnkað að breidd dálksins
  function stilla(box) {
    const spj = box.querySelector(".spj");
    if (!spj) {
      box.style.height = "";
      return;
    }
    const s = box.clientWidth / 1080;
    box.style.height = Math.round(1350 * s) + "px";
    spj.style.transform = "scale(" + s + ")";
  }
  const skali = typeof ResizeObserver === "function" ? new ResizeObserver((f) => f.forEach((x) => stilla(x.target))) : null;

  function teiknaHver() {
    const box = q("hver");
    box.hidden = false;
    while (box.children.length > 1) box.removeChild(box.lastChild);
    gogn.nofn.forEach((nafn) => {
      const b = ny("button", "yl-hnappur", nafn);
      b.type = "button";
      b.setAttribute("aria-pressed", String(nafn === hver));
      b.addEventListener("click", () => {
        hver = nafn;
        geyma(HVER, nafn);
        teiknaHver();
      });
      box.appendChild(b);
    });
  }

  function reitur(merki, inn, skyring) {
    const l = ny("label");
    l.appendChild(document.createTextNode(merki));
    if (skyring) l.appendChild(ny("small", "", skyring));
    l.appendChild(inn);
    return l;
  }

  function auglysing(a) {
    let vistad = a; // það sem er í Sheet-inu
    const art = ny("article", "yl-augl");
    const haus = ny("div", "yl-augl-haus");
    const titill = ny("h2");
    const dags = ny("span", "yl-dags");
    const merki = ny("span", "yl-merki");
    haus.append(dags, titill, merki);
    art.appendChild(haus);

    const efni = ny("div", "yl-augl-efni");
    const box = ny("div", "yl-forskodun");
    box.setAttribute("aria-label", "Forskoðun spjaldsins");
    efni.appendChild(box);

    const form = ny("form", "yl-form");
    const inn = {};
    function svid(f, tag, gerd) {
      const n = ny(tag);
      if (gerd) n.type = gerd;
      if (tag === "textarea") n.rows = f === "meginmal" ? 7 : f === "postur" ? 5 : 2;
      inn[f] = n;
      return n;
    }
    form.appendChild(reitur("Flokkur", svid("flokkur", "input", "text")));
    const meginmalL = reitur("Auglýsingin", svid("meginmal", "textarea"), "Fyrsta setningin verður feitletruð");
    form.appendChild(meginmalL);
    const tvennt = ny("div", "yl-tvennt");
    tvennt.appendChild(reitur("Undirskrift", svid("undirskrift", "input", "text"), "Neðst til hægri, má vera tóm"));
    tvennt.appendChild(reitur("Smátt letur undir", svid("heimild", "input", "text"), "Má vera tómt"));
    form.appendChild(tvennt);
    form.appendChild(reitur("Texti með póstinum", svid("postur", "textarea"), "Fer á Facebook og Instagram með myndinni"));
    const tvennt2 = ny("div", "yl-tvennt");
    tvennt2.appendChild(reitur("Fer í loftið", svid("birta", "input", "date")));
    const sel = svid("stada", "select");
    gogn.stodur.forEach((s) => {
      const o = ny("option", "", s);
      o.value = s;
      sel.appendChild(o);
    });
    tvennt2.appendChild(reitur("Staða", sel));
    form.appendChild(tvennt2);
    form.appendChild(reitur("Athugasemd", svid("athugasemd", "textarea"), "Til Óla, fer ekki á spjaldið"));

    const adgerdir = ny("div", "yl-adgerdir");
    const vista = ny("button", "yl-hnappur yl-hnappur--adal", "Vista");
    vista.type = "submit";
    const aftur = ny("button", "yl-hnappur", "Afturkalla");
    aftur.type = "button";
    const skilabod = ny("p");
    skilabod.setAttribute("aria-live", "polite");
    adgerdir.append(vista, aftur, skilabod);
    form.appendChild(adgerdir);
    efni.appendChild(form);
    art.appendChild(efni);

    function gildi() {
      const g = {};
      REITIR.forEach((f) => (g[f] = inn[f].value));
      return g;
    }
    function breytt() {
      const g = gildi();
      return REITIR.filter((f) => g[f] !== (vistad[f] || ""));
    }
    function uppfaera(skilabodTexti) {
      const g = gildi();
      titill.textContent = g.flokkur || vistad.nafn;
      dags.textContent = dagsetning(g.birta) || "Engin dagsetning";
      merki.textContent = g.stada;
      merki.setAttribute("data-stada", g.stada);
      // Flokkurinn Póstur fær ekkert spjald: textinn sést eins og hann fer á Facebook
      const bara = g.flokkur.trim() === "Póstur";
      meginmalL.hidden = tvennt.hidden = bara;
      box.innerHTML = bara
        ? '<div class="yl-posttexti"><small>Póstur án spjalds' + (g.athugasemd.trim() ? ". " + esc(g.athugasemd.trim()) : "") + "</small>" + esc(g.postur) + "</div>"
        : spjald(g);
      stilla(box);
      const b = breytt();
      oVistad[vistad.nafn] = b.length > 0;
      vista.disabled = aftur.disabled = !b.length;
      if (skilabodTexti) {
        skilabod.textContent = skilabodTexti;
        skilabod.className = "";
      } else if (b.length) {
        skilabod.textContent = "Óvistaðar breytingar";
        skilabod.className = "yl-obreytt";
      } else {
        skilabod.textContent = vistad.breytt && vistad.breyttAf ? "Síðast vistað " + stuttTimi(vistad.breytt) + " af " + vistad.breyttAf : "";
        skilabod.className = "";
      }
    }
    function fylla(x) {
      REITIR.forEach((f) => (inn[f].value = x[f] || ""));
    }

    fylla(a);
    REITIR.forEach((f) => {
      inn[f].addEventListener(f === "stada" || f === "birta" ? "change" : "input", () => uppfaera());
    });
    aftur.addEventListener("click", () => {
      fylla(vistad);
      uppfaera();
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!hver) {
        uppfaera("Veldu fyrst hver þú ert, efst á síðunni.");
        skilabod.className = "yl-obreytt";
        q("hver").scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      const reitir = {};
      breytt().forEach((f) => (reitir[f] = inn[f].value));
      vista.disabled = aftur.disabled = true;
      skilabod.textContent = "Vista …";
      kallaBakenda({ action: "vista", nafn: vistad.nafn, hver, breytt: vistad.breytt, reitir })
        .then((r) => {
          if (r.arekstur) {
            // Einhver annar vistaði á meðan: nýja útgáfan verður grunnurinn, textinn í reitunum heldur sér
            vistad = r.auglysing;
            uppfaera(r.villa);
            skilabod.className = "yl-obreytt";
            return;
          }
          if (!r.ok) throw new Error(r.rangurLykill ? "Hlekkurinn gildir ekki lengur." : r.villa);
          vistad = r.auglysing;
          fylla(vistad);
          uppfaera();
        })
        .catch((err) => {
          uppfaera("Tókst ekki að vista. " + err.message);
          skilabod.className = "yl-obreytt";
        });
    });

    if (skali) skali.observe(box);
    // Teiknað þegar greinin er komin á síðuna, annars er breiddin 0
    setTimeout(uppfaera, 0);
    return art;
  }

  function teikna() {
    const listi = q("listi");
    listi.innerHTML = "";
    const rod = (a) => a.birta || "9999";
    const rodud = gogn.auglysingar.slice().sort((a, b) => (rod(a) < rod(b) ? -1 : rod(a) > rod(b) ? 1 : 0));
    rodud.forEach((a) => listi.appendChild(auglysing(a)));
    stada(rodud.length ? "" : "Engar auglýsingar komnar inn ennþá.");
  }

  window.addEventListener("beforeunload", (e) => {
    if (Object.values(oVistad).some(Boolean)) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
  // Letrið hleðst eftir á; forskoðanirnar eru teiknaðar aftur þegar það er komið
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => rot.querySelectorAll(".yl-forskodun").forEach(stilla));
  }

  if (!lykill) {
    stada("Þessi síða opnast með hlekknum sem Óli sendi. Biddu hann um hlekkinn.", true);
    return;
  }
  kallaBakenda({ action: "lesa" })
    .then((r) => {
      if (!r.ok) {
        stada(r.rangurLykill ? "Hlekkurinn gildir ekki. Biddu Óla um nýjan." : "Villa: " + r.villa, true);
        return;
      }
      gogn = r;
      if (gogn.nofn.indexOf(hver) === -1) hver = "";
      teiknaHver();
      teikna();
    })
    .catch((err) => stada(err.message + " Reyndu að endurhlaða síðuna.", true));
}
