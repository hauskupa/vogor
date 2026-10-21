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

const API =
  "https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec";
const KEY_STORE = "per-yfirlestur-lykill";
const WHO_STORE = "per-yfirlestur-hver";

function stored(name) {
  try {
    return localStorage.getItem(name) || "";
  } catch {
    return "";
  }
}

function store(name, value) {
  try {
    localStorage.setItem(name, value);
  } catch {
    // Einkagluggi eða lokað fyrir geymslu: virkar áfram, man bara ekki
  }
}

// Lykill úr slóðinni gengur fyrir þeim geymda. Hann er tekinn úr slóðinni
// strax svo hann fari ekki með ef slóðinni er deilt.
export function readKey() {
  const url = new URL(location.href);
  const fromUrl = url.searchParams.get("k");
  if (fromUrl) {
    url.searchParams.delete("k");
    try {
      // Full slóð, því <base> á síðunni myndi annars breyta afstæðri slóð
      history.replaceState(history.state, "", url.href);
    } catch {
      // Lykillinn situr þá eftir í slóðinni; skiptir ekki máli fyrir virknina
    }
    return { key: fromUrl, fresh: true };
  }
  return { key: stored(KEY_STORE), fresh: false };
}

export function rememberKey(key) {
  store(KEY_STORE, key);
}

export const who = {
  get: () => stored(WHO_STORE),
  set: (name) => store(WHO_STORE, name),
};

export async function call(key, request) {
  const res = await fetch(API, {
    method: "POST",
    // text/plain sleppur CORS-forspurn, sem Apps Script svarar ekki
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ ...request, k: key }),
  });
  const data = await res.json();
  if (data.rangurLykill) {
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
