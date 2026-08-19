// src/albumMixerData.js
// Les plötugögn út úr DOM-inu svo Webflow CMS geti stýrt spilaranum.
//
// Væntanleg uppbygging (Collection List Wrapper = [data-mixer-songs],
// Collection Item = [data-song]):
//
//   <div data-album-mixer data-album-title="Nafir" data-main-channels="4">
//     <div data-mixer-songs>
//       <div data-song
//            data-song-title="Nafir"
//            data-song-side="A"
//            data-song-index="1"
//            data-stem-1="https://..."  data-stem-1-label="Pulse"
//            data-stem-2="https://..."  data-stem-2-label="Weight"
//            data-stem-3="https://..."  data-stem-3-label="Frame"
//            data-stem-4="https://..."  data-stem-4-label="Air"
//            data-stem-5="https://..."  data-stem-5-label="Rödd"></div>
//     </div>
//   </div>
//
// Rásir umfram data-main-channels (sjálfgefið 4) fá hlutverkið "aux".
// Það má yfirtaka með data-stem-N-role="main" eða "aux".

export const MAX_CHANNELS = 6;
const DEFAULT_MAIN_CHANNELS = 4;

function attr(element, name) {
  return String(element?.getAttribute(name) || "").trim();
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/þ/g, "th")
    .replace(/ð/g, "d")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readStemUrl(element) {
  return (
    attr(element, "data-stem-url") ||
    attr(element, "data-stem") ||
    attr(element, "href") ||
    attr(element, "src")
  );
}

// (a) flöt attribute á laginu sjálfu: data-stem-1 ... data-stem-6
function readFlatStems(songEl) {
  const stems = [];

  for (let slot = 1; slot <= MAX_CHANNELS; slot += 1) {
    const url = attr(songEl, `data-stem-${slot}`);
    if (!url) continue;

    stems.push({
      slot,
      url,
      label: attr(songEl, `data-stem-${slot}-label`),
      short: attr(songEl, `data-stem-${slot}-short`),
      role: attr(songEl, `data-stem-${slot}-role`).toLowerCase(),
    });
  }

  // stuttleið fyrir aukarásina þegar hún er sér CMS-svæði
  const auxUrl = attr(songEl, "data-aux");
  if (auxUrl) {
    stems.push({
      slot: MAX_CHANNELS + 1,
      url: auxUrl,
      label: attr(songEl, "data-aux-label"),
      short: attr(songEl, "data-aux-short"),
      role: "aux",
    });
  }

  return stems;
}

// (b) barnaelement: <a data-stem href="..." data-stem-label="Pulse">
function readChildStems(songEl) {
  return Array.from(songEl.querySelectorAll("[data-stem]"))
    .map((element, index) => ({
      slot: index + 1,
      url: readStemUrl(element),
      label: attr(element, "data-stem-label") || element.textContent?.trim() || "",
      short: attr(element, "data-stem-short"),
      role: attr(element, "data-stem-role").toLowerCase(),
    }))
    .filter((stem) => stem.url);
}

// Gildi sem eiga við alla plötuna, sett á [data-album-mixer].
// Lag má yfirtaka stakan strimil með sínu eigin data-stem-N-<suffix>.
// Lesið af listanum fyrst og svo af container. Þannig má annaðhvort setja
// gildin sem custom attribute í Webflow-panelnum eða láta þau fylgja með í
// sama HTML-embed og lagalistann.
function readDefaultSlotText(elements, suffix) {
  const values = new Map();

  const firstMatch = (name) => {
    for (const element of elements) {
      const value = attr(element, name);
      if (value) return value;
    }
    return "";
  };

  for (let slot = 1; slot <= MAX_CHANNELS; slot += 1) {
    const value = firstMatch(`data-stem-${slot}-${suffix}`);
    if (value) values.set(slot, value);
  }

  const auxValue = firstMatch(`data-aux-${suffix}`);
  if (auxValue) values.set(MAX_CHANNELS + 1, auxValue);

  return values;
}

function readSong(songEl, index, mainChannels, defaults) {
  const title = attr(songEl, "data-song-title") || songEl.textContent?.trim() || "";
  if (!title) return null;

  // Tóm CMS-svæði skila tómum attribute — þau eru síuð burt hér, og
  // hlutverkin reiknuð eftir á svo eyður í slot-númerum rugli ekki röðinni.
  const rawStems = readFlatStems(songEl);
  const stems = (rawStems.length ? rawStems : readChildStems(songEl))
    .filter((stem) => stem.url)
    .slice(0, MAX_CHANNELS);

  if (!stems.length) return null;

  const sideRaw = attr(songEl, "data-song-side").toUpperCase();
  const sideIndex = Number.parseInt(attr(songEl, "data-song-index"), 10);

  return {
    id: attr(songEl, "data-song-id") || slugify(title) || `song-${index + 1}`,
    title,
    side: sideRaw === "B" ? "B" : "A",
    sideIndex: Number.isFinite(sideIndex) ? sideIndex : index + 1,
    tracks: stems.map((stem, stemIndex) => {
      // Sjálfgefin gildi hanga á slot-númerinu, ekki stöðu strimilsins,
      // svo data-stem-3-label eigi alltaf við data-stem-3.
      const label = stem.label || defaults.labels.get(stem.slot) || "";
      const short = stem.short || defaults.shorts.get(stem.slot) || "";

      // Hlutverkið er fest við slot-númerið þegar það er gefið, svo AUX haldist
      // á sinni rás þótt stem vanti annars staðar og strimlarnir þjappist.
      const role = stem.role || defaults.roles.get(stem.slot) || "";

      return {
        id: `track-${stemIndex + 1}`,
        title: label || `Track ${stemIndex + 1}`,
        label,
        short,
        role: role === "aux" || (role !== "main" && stemIndex >= mainChannels) ? "aux" : "main",
        url: stem.url,
      };
    }),
  };
}

export function readSongsFromDom(container) {
  if (!container) return null;

  const list = container.querySelector("[data-mixer-songs]");
  if (!list) return null;

  const sources = [list, container];

  const parsedMain = Number.parseInt(
    attr(list, "data-main-channels") || attr(container, "data-main-channels"),
    10
  );
  const mainChannels =
    Number.isFinite(parsedMain) && parsedMain > 0 ? parsedMain : DEFAULT_MAIN_CHANNELS;

  const defaults = {
    labels: readDefaultSlotText(sources, "label"),
    shorts: readDefaultSlotText(sources, "short"),
    roles: readDefaultSlotText(sources, "role"),
  };

  const songs = Array.from(list.querySelectorAll("[data-song]"))
    .map((songEl, index) => readSong(songEl, index, mainChannels, defaults))
    .filter(Boolean);

  if (!songs.length) {
    console.warn("album-mixer: [data-mixer-songs] fannst en engin gild lög í honum");
    return null;
  }

  return songs;
}
