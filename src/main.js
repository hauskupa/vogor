// Hleðsla vefsins (dist/main.js, sett inn site-wide í Webflow).
//
// main.js er bara hleðslan: hún finnur hvaða virkni síðan notar og sækir
// hana úr dist/sidur/ á sama commit, svo gestir sæki aðeins kóða sem síðan
// þarf. Ein skrá á hverja virkni (src/sidur/*.js); kóði sem fleiri en ein
// deila (t.d. stemEngine.js) fer í chunk-skrá sem þær sækja saman.

const SKRA = document.currentScript ? document.currentScript.src : "";
const GRUNNUR = SKRA
  ? SKRA.replace(/[^/]*$/, "sidur/")
  : "https://cdn.jsdelivr.net/gh/hauskupa/vogor@main/dist/sidur/";

// [velja sem finnst á síðunni, skrá í dist/sidur/]
const VIRKNI = [
  // Gamli mixerinn: [data-mixer] er líka á 4track-síðunum, en rásir á hann
  // ([data-track-url]) eru bara á /mixer og /permixer
  ["[data-track-url]", "mixer"],
  ["[data-pm-song]", "permixer"],
  ["[data-awake]", "awake"],
  ["[data-player]", "player"],
  ["[data-album-mixer]", "albumMixer"],
  ["[data-vogor-player]", "vogorPlayer"],
  ["[data-multitrack-player]", "multitrack"],
];

function raesa() {
  VIRKNI.forEach(([velja, nafn]) => {
    if (!document.querySelector(velja)) return;
    import(GRUNNUR + nafn + ".js")
      .then((m) => m.default())
      .catch((err) => console.error(`vogor: ${nafn} hlóðst ekki`, err));
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", raesa);
else raesa();
