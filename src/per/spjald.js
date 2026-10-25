// Smáauglýsingaspjaldið hjá Per. Eina útgáfan af markupinu: yfirlestrarsíðan
// (yfirlestur.js) teiknar forskoðunina með þessu, og smaauglysingar.py í
// per-jolatonleikar/spjold/ teiknar PNG-in með því gegnum dist/per-spjald.js.
// Útlitið er í spjald.css.

// Lengri texti fær minna letur svo úrklippan haldist innan spjaldsins
export const LANGT = 260;

const HVAR = "Tónabíó · laugardaginn 12.&nbsp;desember kl.&nbsp;20";

export function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// „kl. 20“ og „12. desember“ brotna ekki milli lína
function heilt(s) {
  return esc(s).replace(/(kl\.|\b\d+\.) (?=[a-záðéíóúýþæö\d])/g, "$1&nbsp;");
}

// Fyrsta setningin er feitletruð, eins og í smáauglýsingum
function feitletra(s) {
  const m = /[.?!] /.exec(s);
  if (!m) return heilt(s);
  return "<b>" + heilt(s.slice(0, m.index + 1)) + "</b> " + heilt(s.slice(m.index + 2));
}

// a: { flokkur, meginmal, undirskrift, heimild }.
// saga: Stories-útgáfan (9:16), þá með plakatið (slóð) í bakgrunni.
export function spjald(a, { saga = false, plakat = "" } = {}) {
  const meginmal = String(a.meginmal || "").trim();
  const undirskrift = String(a.undirskrift || "").trim();
  const heimild = String(a.heimild || "").trim();
  const still = saga && plakat ? ` style="--plakat: url('${esc(plakat)}')"` : "";
  return (
    `<div class="spj${saga ? " spj--saga" : ""}"${still}>` +
    '<div class="urklippa">' +
    '<div class="haus">Smáauglýsingar <small>Aðventa 2026</small></div>' +
    `<div class="flokkur">${esc(a.flokkur)}</div>` +
    '<div class="rammi">' +
    `<p class="meginmal${meginmal.length >= LANGT ? " meginmal--langt" : ""}">${feitletra(meginmal)}</p>` +
    (undirskrift ? `<p class="undirskrift">${esc(undirskrift)}</p>` : "") +
    "</div>" +
    (heimild ? `<p class="heimild">${esc(heimild)}</p>` : "") +
    `<div class="hvar-saga">${HVAR}</div>` +
    "</div>" +
    '<div class="merki"><div class="per">Per: Segulsvið</div><div class="stund">Aðventustund</div>' +
    `<div class="hvar">${HVAR}</div></div>` +
    "</div>"
  );
}
