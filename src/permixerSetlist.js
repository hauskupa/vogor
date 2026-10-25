// src/permixerSetlist.js
//
// Tónleikaröð, kynningar og nótur frá æfingum fyrir æfingasíðuna. Gögnin búa
// í Google Sheet bandsins og koma í gegnum Apps Script (í private hub-repo-inu,
// per-jolatonleikar/yfirlestur/appscript/Lagalisti.js).
//
// Aðgangur er lykill í slóðinni, ?k=<lykill>. Hann er sá sami og á
// /per/auglysingar og geymist í vafranum undir sama heiti, svo sá sem hefur
// opnað annan hlekkinn fær lagalistann á hinni síðunni líka. Án lykils virkar
// æfingasíðan eins og áður, í röð CMS-listans.

import { geymt, geyma, lesaLykil, kalla } from "./adgangur.js";

const API =
  "https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec";
const KEY_STORE = "per-yfirlestur-lykill";
const WHO_STORE = "per-yfirlestur-hver";

// Lykill úr slóðinni (?k=) gengur fyrir þeim geymda og er tekinn úr henni
export function readKey() {
  const { lykill, nyr } = lesaLykil("k", KEY_STORE);
  return { key: lykill, fresh: nyr };
}

export const who = {
  get: () => geymt(WHO_STORE),
  set: (name) => geyma(WHO_STORE, name),
};

export async function call(key, request) {
  const data = await kalla(API, { ...request, k: key });
  if (data.rangurLykill) {
    // Ógildur lykill má ekki sitja eftir í vafranum
    geyma(KEY_STORE, "");
    const err = new Error("Hlekkurinn gildir ekki.");
    err.badKey = true;
    throw err;
  }
  return data;
}

// "3:20" -> 200; annað -> null
export function lengthSeconds(text) {
  const m = /^(\d{1,2}):(\d\d)$/.exec((text || "").trim());
  return m ? Number(m[1]) * 60 + Number(m[2]) : null;
}

// "2026-10-21 14:02:11" -> "21. okt kl. 14:02"
const MONTHS = ["jan", "feb", "mar", "apr", "maí", "jún", "júl", "ágú", "sep", "okt", "nóv", "des"];
export function shortStamp(text) {
  const m = /^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(text || "");
  return m ? `${Number(m[3])}. ${MONTHS[Number(m[2]) - 1]} kl. ${m[4]}` : "";
}
