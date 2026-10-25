// src/permixer.js
//
// Æfingasíðan fyrir jólatónleikana: lagalisti, kaflar með hljómum og texta,
// og mixer fyrir stemin, allt á einni síðu.
//
// Gögnin koma úr CMS-lista á síðunni. Í hverju atriði er embed:
//   <div hidden data-pm-song="[Slug]" data-pm-title="[Name]"
//        data-pm-stems="[Rásir]" data-pm-times="[Kaflatímar]"></div>
// og kaflahólfin sem fyrir eru: hvert hólf er foreldri [data-chords] og
// geymir fyrirsögn (h2), texta (.w-richtext) og endurtekningar (.kafli-repeat).
// Rásir: "drums: https://…" á hverri línu. Kaflatímar: "0:00, 0:12, 0:58".
// Sjá WEBFLOW_PERMIXER.md.
//
// Með lykli (?k=…) bætist við tónleikaröð, kynningar og nótur frá æfingum úr
// Sheet-i bandsins (permixerSetlist.js). Án hans gildir röð CMS-listans.

import { createStemEngine } from "./stemEngine.js";
import { readKey, who, call, lengthSeconds, shortStamp } from "./permixerSetlist.js";
import css from "./permixer.css";

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLATS = { Db: "C#", Eb: "D#", Gb: "F#", Ab: "G#", Bb: "A#" };

// Fyrsta regla sem passar ræður (kassagítar á undan gítar); GROUP_ORDER
// er röðin í mixernum.
const GROUPS = [
  ["Taktur", /drum|kick|snare|perc|trommu|slagverk|bass/],
  ["Kassagítarar", /acoustic|akust|kassa/],
  ["Rafgítarar", /guit|gítar|gitar|gtr/],
  ["Hljómborð", /piano|píanó|keys|organ|orgel|synth|rhodes|hljómb/],
  ["Söngur", /vocal|vox|voice|söng|rödd|kór|choir|backing/],
  ["Blástur", /trombone|trumpet|sax|horn|básún|trompet|brass|blást/],
  ["Annað", /.*/],
];
const GROUP_ORDER = ["Taktur", "Rafgítarar", "Kassagítarar", "Hljómborð", "Söngur", "Blástur", "Annað"];

const VIEWS = [
  ["both", "Bæði"],
  ["chords", "Hljómar"],
  ["lyrics", "Texti"],
];

// -----------------------------------------------------------
// Lesið úr CMS
// -----------------------------------------------------------
function clean(text) {
  return (text || "").replace(/[​-‏﻿]/g, "").trim();
}

const ICELANDIC = { ð: "d", þ: "th", æ: "ae", ö: "o" };

function slugify(text) {
  return clean(text)
    .toLowerCase()
    .replace(/[ðþæö]/g, (c) => ICELANDIC[c])
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Stem koma úr data-pm-stems ("heiti: slóð" á línu) og/eða sér attribute
// á hverja rás, data-stem-<heiti>="slóð" (t.d. úr referenced item). Tóm
// gildi eru hunsuð.
function readStems(el) {
  const pairs = [];
  const re = /([^\s:,;][^:,;\n]*?)\s*:\s*(https?:\/\/[^\s,;]+)/g;
  let m;
  while ((m = re.exec(el.getAttribute("data-pm-stems") || ""))) {
    pairs.push([clean(m[1]), m[2]]);
  }
  Array.from(el.attributes).forEach((attr) => {
    const url = clean(attr.value);
    if (attr.name.startsWith("data-stem-") && /^https?:\/\//.test(url)) {
      pairs.push([attr.name.slice("data-stem-".length), url]);
    }
  });

  const seen = new Set();
  return pairs.map(([name, url], i) => {
    let id = slugify(name) || `stem-${i + 1}`;
    while (seen.has(id)) id += "-2";
    seen.add(id);
    return { id, name, url };
  });
}

function parseTime(token) {
  const parts = token.split(":").map(Number);
  if (!parts.length || parts.some((n) => !Number.isFinite(n))) return null;
  return parts.reduce((total, n) => total * 60 + n, 0);
}

function parseTimes(text) {
  return clean(text)
    .split(/[\s,;]+/)
    .filter(Boolean)
    .map(parseTime);
}

function readSections(item) {
  return Array.from(item.querySelectorAll("[data-chords]"))
    .map((chordsEl) => {
      const slot = chordsEl.parentElement;
      const chords = clean(chordsEl.getAttribute("data-chords") || chordsEl.textContent);
      const rte = slot.querySelector(".w-richtext");
      const hasLyrics = !!clean(rte?.textContent);
      if (!chords && !hasLyrics) return null;

      const repeatText = clean(slot.querySelector(".kafli-repeat")?.lastElementChild?.textContent);
      return {
        label: clean(slot.querySelector("h1, h2, h3, h4")?.textContent),
        chords,
        repeat: /^\d+$/.test(repeatText) ? Number(repeatText) : null,
        lyrics: hasLyrics ? rte : null,
        start: null,
      };
    })
    .filter(Boolean);
}

function readSongs() {
  return Array.from(document.querySelectorAll("[data-pm-song]")).map((el, index) => {
    const item = el.closest(".w-dyn-item") || el.parentElement;
    const title =
      clean(el.getAttribute("data-pm-title")) ||
      clean(item.querySelector("h1, h2")?.textContent) ||
      `Lag ${index + 1}`;
    const id = slugify(el.getAttribute("data-pm-song")) || slugify(title) || `lag-${index + 1}`;
    const sections = readSections(item);

    const times = parseTimes(el.getAttribute("data-pm-times"));
    sections.forEach((section, i) => {
      section.start = times[i] ?? null;
    });

    return { id, title, stems: readStems(el), sections };
  });
}

// -----------------------------------------------------------
// Hjálparföll
// -----------------------------------------------------------
function esc(text) {
  return String(text).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function stemLabel(name) {
  const spaced = name.replace(/([a-zA-Zþæöðáéíóúý])(\d+)$/, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function groupOf(stem) {
  const key = stem.name.toLowerCase();
  return GROUPS.find(([, re]) => re.test(key))[0];
}

function transposeChord(chord, steps) {
  return chord
    .split("/")
    .map((part) => {
      const m = part.match(/^([A-G])([#b]?)(.*)$/);
      if (!m) return part;
      const root = FLATS[m[1] + m[2]] || m[1] + m[2];
      const i = NOTES.indexOf(root);
      if (i < 0) return part;
      return NOTES[(((i + steps) % 12) + 12) % 12] + m[3];
    })
    .join("/");
}

function transposeLine(line, steps) {
  if (!steps) return line;
  return line
    .split(/(\s+|-+)/)
    .map((part) => (/^(\s+|-+)?$/.test(part) ? part : transposeChord(part, steps)))
    .join("");
}

function firstRoot(song) {
  for (const section of song.sections) {
    const m = section.chords.match(/[A-G][#b]?/);
    if (m) return FLATS[m[0]] || m[0];
  }
  return null;
}

// -----------------------------------------------------------
// Síðan
// -----------------------------------------------------------
export function setupPermixer() {
  const songs = readSongs();
  if (!songs.length) return;

  if (!document.querySelector("style[data-pm-style]")) {
    const style = document.createElement("style");
    style.setAttribute("data-pm-style", "");
    style.textContent = css;
    document.head.appendChild(style);
  }

  // CMS-listinn er bara gagnauppspretta; viðmótið fer í [data-pm-app]
  // eða beint á undan listanum ef það element vantar.
  const source = document.querySelector("[data-pm-song]").closest(".w-dyn-list");
  let app = document.querySelector("[data-pm-app]");
  if (!app) {
    app = document.createElement("div");
    (source || document.body).before(app);
  }
  if (source) source.hidden = true;
  app.classList.add("pm");

  const engine = createStemEngine();
  songs.forEach((song) => {
    engine.define({ id: song.id, tracks: song.stems.map(({ id, url }) => ({ id, url })) });
  });

  const transpose = new Map(); // songId -> hálftónar
  let view = "both";
  let current = songs.find((s) => `#${s.id}` === location.hash) || songs[0];
  let dragging = false;
  let activeSection = -1;

  const byId = new Map(songs.map((s) => [s.id, s]));
  // Lagalistinn úr Sheet-inu: { key, order: [id], rows: Map(id -> lína), names }
  let setlist = null;
  let editOrder = null; // röðin á meðan verið er að breyta henni
  const drafts = new Map(); // id -> óvistaðir reitir (kynning, nótur, lengd)

  app.innerHTML = `
    <nav class="pm-songs" aria-label="Lagalisti" data-pm-el="nav"></nav>
    <main class="pm-main">
      <div class="pm-step" data-pm-el="step" hidden>
        <button type="button" data-pm-step="-1"></button>
        <button type="button" data-pm-step="1"></button>
      </div>
      <h1 class="pm-title" data-pm-el="title"></h1>
      <div class="pm-transport">
        <button type="button" class="pm-play" data-pm-el="play" aria-label="Spila">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="pm-icon-play"><path d="M8 5v14l11-7z"/></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="pm-icon-pause"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
        </button>
        <span class="pm-time" data-pm-el="time">0:00 / 0:00</span>
        <input type="range" class="pm-seek" data-pm-el="seek" min="0" max="1000" value="0" aria-label="Staðsetning í laginu">
      </div>
      <p class="pm-note" data-pm-el="note" hidden></p>
      <form class="pm-per" data-pm-el="per" hidden>
        <details class="pm-intro" data-pm-el="intro-box">
          <summary>Kynning <span data-pm-el="intro-hint"></span></summary>
          <textarea data-pm-field="kynning" rows="8" aria-label="Kynning á undan laginu"></textarea>
        </details>
        <label class="pm-field">
          <span>Nótur frá æfingum</span>
          <textarea data-pm-field="notur" rows="2" placeholder="T.d. styttum outro, Nói telur inn, ný lína í öðru erindi"></textarea>
        </label>
        <div class="pm-per-foot">
          <label class="pm-length">Lengd <input data-pm-field="lengd" placeholder="m:ss" size="5"></label>
          <button type="submit" class="pm-save" data-pm-el="save">Vista</button>
          <p class="pm-status" data-pm-el="status" aria-live="polite"></p>
        </div>
      </form>
      <div class="pm-structure" data-pm-el="structure"></div>
      <div class="pm-toolbar" data-pm-el="toolbar">
        <div class="pm-views" role="group" aria-label="Sýn">${VIEWS.map(
          ([key, label]) => `<button type="button" data-pm-view="${key}">${label}</button>`
        ).join("")}</div>
        <div class="pm-transpose">
          <button type="button" data-pm-transpose="-1" aria-label="Lækka um hálftón">−</button>
          <span data-pm-el="key"></span>
          <button type="button" data-pm-transpose="1" aria-label="Hækka um hálftón">+</button>
        </div>
      </div>
      <div class="pm-sections" data-pm-el="sections"></div>
    </main>
    <aside class="pm-mixer" aria-label="Mixer">
      <div class="pm-mixer-head">
        <span data-pm-el="count"></span>
        <button type="button" class="pm-link" data-pm-el="reset">Endurstilla</button>
      </div>
      <div data-pm-el="strips"></div>
    </aside>`;

  const $ = (name) => app.querySelector(`[data-pm-el="${name}"]`);
  const els = {
    nav: $("nav"),
    step: $("step"),
    per: $("per"),
    introBox: $("intro-box"),
    introHint: $("intro-hint"),
    save: $("save"),
    status: $("status"),
    toolbar: $("toolbar"),
    title: $("title"),
    play: $("play"),
    time: $("time"),
    seek: $("seek"),
    note: $("note"),
    structure: $("structure"),
    key: $("key"),
    sections: $("sections"),
    count: $("count"),
    reset: $("reset"),
    strips: $("strips"),
  };

  // ---------------------------------------------------------
  // Teikning
  // ---------------------------------------------------------
  function duration(song = current) {
    return engine.getSong(song.id)?.duration || 0;
  }

  function sectionEnd(song, i) {
    const next = song.sections.slice(i + 1).find((s) => s.start !== null);
    return next ? next.start : duration(song);
  }

  // -- Lagalistinn --

  function titleOf(id) {
    return setlist?.rows.get(id)?.lag || byId.get(id)?.title || id;
  }

  // Lög á listanum í röð, og hin sem eru í CMS eða Sheet-inu en ekki á listanum
  function navGroups() {
    if (!setlist) return { listed: songs.map((s) => s.id), other: [] };
    const listed = editOrder || setlist.order;
    return { listed, other: songs.map((s) => s.id).filter((id) => !listed.includes(id)) };
  }

  function renderNav() {
    const { listed, other } = navGroups();
    const editing = !!editOrder;
    const item = (id, i) => {
      const at = listed.indexOf(id);
      const controls = !editing
        ? ""
        : at === -1
          ? `<span class="pm-order"><button type="button" data-pm-add="${esc(id)}" aria-label="Setja ${esc(titleOf(id))} á listann">+</button></span>`
          : `<span class="pm-order">
              <button type="button" data-pm-move="${esc(id)}" data-pm-by="-1" ${at === 0 ? "disabled" : ""} aria-label="Færa ${esc(titleOf(id))} upp">↑</button>
              <button type="button" data-pm-move="${esc(id)}" data-pm-by="1" ${at === listed.length - 1 ? "disabled" : ""} aria-label="Færa ${esc(titleOf(id))} niður">↓</button>
              <button type="button" data-pm-remove="${esc(id)}" aria-label="Taka ${esc(titleOf(id))} af listanum">×</button>
            </span>`;
      return `<li><button type="button" data-pm-pick="${esc(id)}" aria-current="${id === current.id}">
          <span class="pm-num">${i === null ? "–" : String(i + 1).padStart(2, "0")}</span>
          <span>${esc(titleOf(id))}</span></button>${controls}</li>`;
    };

    let head = "";
    if (setlist) {
      const lengths = listed.map((id) => lengthSeconds(setlist.rows.get(id)?.lengd));
      const missing = lengths.filter((s) => s === null).length;
      const total = lengths.reduce((sum, s) => sum + (s || 0), 0);
      head = `<div class="pm-songs-head">
          <span class="pm-total">${listed.length} lög · ${formatTime(total)}${missing ? ` <small>(${missing} án lengdar)</small>` : ""}</span>
          <label class="pm-who">Ég er <select data-pm-who>
            <option value="">veldu</option>
            ${setlist.names.map((n) => `<option ${n === who.get() ? "selected" : ""}>${esc(n)}</option>`).join("")}
          </select></label>
          ${editing ? "" : `<button type="button" class="pm-link" data-pm-order="edit">Breyta röð</button>`}
        </div>`;
    }
    const foot = editing
      ? `<div class="pm-order-foot">
          <button type="button" class="pm-save" data-pm-order="save">Vista röð</button>
          <button type="button" class="pm-link" data-pm-order="cancel">Hætta við</button>
          <p class="pm-status" data-pm-el="order-status" aria-live="polite"></p>
        </div>`
      : "";

    els.nav.classList.toggle("is-editing", editing);
    els.nav.innerHTML = `${head}
      <ol>${listed.filter((id) => byId.has(id)).map((id) => item(id, listed.indexOf(id))).join("")}</ol>
      ${other.length ? `<p class="pm-songs-sub">Utan lagalista</p><ul>${other.map((id) => item(id, null)).join("")}</ul>` : ""}
      ${foot}`;
  }

  // Fyrra og næsta lag í tónleikaröð
  function neighbours() {
    const { listed } = navGroups();
    const i = listed.indexOf(current.id);
    if (i === -1) return [null, null];
    return [listed[i - 1] || null, listed[i + 1] || null];
  }

  function renderStep() {
    const [prev, next] = neighbours();
    els.step.hidden = !setlist || (!prev && !next);
    const [back, fwd] = els.step.querySelectorAll("button");
    back.hidden = !prev;
    fwd.hidden = !next;
    back.dataset.pmTarget = prev || "";
    fwd.dataset.pmTarget = next || "";
    back.textContent = prev ? `← ${titleOf(prev)}` : "";
    fwd.textContent = next ? `Næst: ${titleOf(next)} →` : "";
  }

  // -- Kynning, nótur og lengd --

  const FIELDS = ["kynning", "notur", "lengd"];
  const field = (name) => els.per.querySelector(`[data-pm-field="${name}"]`);

  function savedRow(id = current.id) {
    return setlist?.rows.get(id) || null;
  }

  function changedFields() {
    const row = savedRow();
    if (!row) return [];
    return FIELDS.filter((f) => field(f).value !== (row[f] || ""));
  }

  function renderPer(message) {
    const row = savedRow();
    els.per.hidden = !row;
    if (!row) return;
    const draft = drafts.get(current.id) || row;
    FIELDS.forEach((f) => {
      field(f).value = draft[f] || "";
    });
    els.introHint.textContent = row.kynning.trim() ? "" : "(engin enn)";
    renderPerState(message);
  }

  function renderPerState(message) {
    const row = savedRow();
    const changed = changedFields();
    if (changed.length) drafts.set(current.id, Object.fromEntries(FIELDS.map((f) => [f, field(f).value])));
    else drafts.delete(current.id);
    els.save.disabled = !changed.length;
    els.status.classList.toggle("is-warning", !!message || changed.length > 0);
    els.status.textContent =
      message ||
      (changed.length
        ? "Óvistaðar breytingar"
        : row.breytt && row.breyttAf
          ? `Síðast vistað ${shortStamp(row.breytt)} af ${row.breyttAf}`
          : "");
  }

  function renderSong() {
    const song = current;
    renderNav();
    renderStep();
    renderPer();
    els.title.textContent = titleOf(song.id);
    els.play.disabled = !song.stems.length;
    els.note.hidden = !!song.stems.length;
    els.note.textContent = song.missing
      ? "Ekki komið í mixerinn: bara kynning og nótur."
      : "Engin stem fyrir þetta lag — bara hljómar og texti.";
    els.toolbar.hidden = !song.sections.length;
    activeSection = -1;
    renderStructure();
    renderSections();
    renderKey();
    renderStrips();
    renderTime(engine.getTime(song.id));
  }

  function renderStructure() {
    const song = current;
    const total = duration(song);
    const timed = !!total && song.sections.some((s) => s.start !== null);
    els.structure.hidden = !song.sections.length;
    els.structure.innerHTML = song.sections
      .map((s, i) => {
        const grow = timed && s.start !== null ? Math.max(1, sectionEnd(song, i) - s.start) : 1;
        const tag = timed && s.start !== null ? "button" : "div";
        return `<${tag} ${tag === "button" ? 'type="button"' : ""} class="pm-seg" data-pm-seg="${i}"
          style="flex-grow:${grow}"><span>${esc(s.label || `Kafli ${i + 1}`)}</span></${tag}>`;
      })
      .join("");
  }

  function renderSections() {
    const song = current;
    const steps = transpose.get(song.id) || 0;
    els.sections.dataset.view = view;
    els.sections.innerHTML = "";
    song.sections.forEach((s, i) => {
      const section = document.createElement("section");
      section.className = "pm-section";
      section.dataset.pmSection = i;
      const jump = s.start !== null && song.stems.length;
      section.innerHTML = `
        <${jump ? 'button type="button"' : "div"} class="pm-section-head" ${jump ? `data-pm-jump="${i}"` : ""}>
          <span class="pm-label">${esc(s.label || `Kafli ${i + 1}`)}${s.repeat ? ` ×${s.repeat}` : ""}</span>
          ${s.start !== null ? `<span class="pm-start">${formatTime(s.start)}</span>` : ""}
        </${jump ? "button" : "div"}>
        ${s.chords ? `<div class="pm-chords">${esc(transposeLine(s.chords, steps))}</div>` : ""}`;
      if (s.lyrics) {
        const lyrics = document.createElement("div");
        lyrics.className = "pm-lyrics";
        lyrics.append(...Array.from(s.lyrics.cloneNode(true).childNodes));
        section.appendChild(lyrics);
      }
      els.sections.appendChild(section);
    });
    app.querySelectorAll("[data-pm-view]").forEach((b) => {
      b.setAttribute("aria-pressed", b.dataset.pmView === view ? "true" : "false");
    });
  }

  function renderKey() {
    const steps = transpose.get(current.id) || 0;
    const root = firstRoot(current);
    const sign = steps > 0 ? `+${steps}` : steps < 0 ? `${steps}` : "";
    els.key.textContent = root ? `${transposeChord(root, steps)}${sign ? ` (${sign})` : ""}` : sign || "Tónn";
  }

  function renderStrips() {
    const song = current;
    const state = engine.getSong(song.id);
    if (!song.stems.length) {
      els.strips.innerHTML = "";
      els.count.textContent = "Engar rásir";
      els.reset.hidden = true;
      return;
    }
    els.reset.hidden = false;

    const groups = new Map();
    song.stems.forEach((stem, i) => {
      const group = groupOf(stem);
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group).push({ stem, track: state.tracks[i] });
    });

    els.strips.innerHTML = GROUP_ORDER.filter((name) => groups.has(name))
      .map(
        (name) => `<div class="pm-group"><div class="pm-group-name">${name}</div>${groups
          .get(name)
          .map(
            ({ stem, track }) => `<div class="pm-strip" data-pm-strip="${esc(stem.id)}">
              <span class="pm-strip-name">${esc(stemLabel(stem.name))}</span>
              <button type="button" class="pm-ms" data-pm-mute aria-pressed="${track.muted}" aria-label="Þagga ${esc(stem.name)}">M</button>
              <button type="button" class="pm-ms" data-pm-solo aria-pressed="${track.soloed}" aria-label="Sóló ${esc(stem.name)}">S</button>
              <input type="range" class="pm-vol" data-pm-vol min="0" max="1" step="0.01" value="${track.volume}" aria-label="Styrkur ${esc(stem.name)}">
              <input type="range" class="pm-pan" data-pm-pan min="-1" max="1" step="0.01" value="${track.pan}" aria-label="Pan ${esc(stem.name)}">
            </div>`
          )
          .join("")}</div>`
      )
      .join("");
    renderMixState();
  }

  function renderMixState() {
    const state = engine.getSong(current.id);
    if (!state) return;
    const anySolo = state.tracks.some((t) => t.soloed);
    let audible = 0;
    state.tracks.forEach((t) => {
      const strip = els.strips.querySelector(`[data-pm-strip="${CSS.escape(t.id)}"]`);
      const silent = t.muted || (anySolo && !t.soloed);
      if (!silent) audible += 1;
      if (!strip) return;
      strip.classList.toggle("is-silent", silent);
      strip.querySelector("[data-pm-mute]").setAttribute("aria-pressed", t.muted);
      strip.querySelector("[data-pm-solo]").setAttribute("aria-pressed", t.soloed);
    });
    els.count.textContent = `${audible} af ${state.tracks.length} rásum`;
  }

  function renderTime(time) {
    const total = duration();
    els.time.textContent = `${formatTime(time)} / ${formatTime(total)}`;
    if (!dragging) els.seek.value = total ? Math.round((time / total) * 1000) : 0;
    els.structure.style.setProperty("--pm-progress", total ? `${(time / total) * 100}%` : "0%");

    let active = -1;
    current.sections.forEach((s, i) => {
      if (s.start !== null && time >= s.start) active = i;
    });
    if (active !== activeSection) {
      activeSection = active;
      app.querySelectorAll("[data-pm-seg], [data-pm-section]").forEach((el) => {
        const i = Number(el.dataset.pmSeg ?? el.dataset.pmSection);
        el.classList.toggle("is-current", i === active);
      });
    }
  }

  // ---------------------------------------------------------
  // Aðgerðir
  // ---------------------------------------------------------
  function pick(songId) {
    const next = songs.find((s) => s.id === songId);
    if (!next || next === current) return;
    const wasPlaying = engine.isPlaying(current.id);
    current = next;
    // Full slóð: Webflow setur <base> á síðuna, svo "#lag" eitt og sér
    // myndi vísa á forsíðuna
    const url = new URL(location.href);
    url.hash = next.id;
    history.replaceState(history.state, "", url.href);
    if (next.stems.length) {
      if (wasPlaying) engine.play(next.id);
      else engine.select(next.id);
    } else {
      engine.pause();
    }
    renderSong();
  }

  function togglePlay() {
    if (!current.stems.length) return;
    if (engine.isPlaying(current.id)) engine.pause(current.id);
    else engine.play(current.id);
  }

  function jumpTo(i) {
    const start = current.sections[i]?.start;
    if (start === null || start === undefined) return;
    if (!engine.isPlaying(current.id)) {
      engine.seek(start, current.id);
      engine.play(current.id);
    } else {
      engine.seek(start, current.id);
    }
  }

  function step(by) {
    const target = neighbours()[by < 0 ? 0 : 1];
    if (target) pick(target);
  }

  // -- Lagalistinn úr Sheet-inu --

  function applySetlist(log) {
    const rows = new Map(log.map((row) => [row.id, row]));
    // Lög á listanum sem eru ekki komin í CMS fá tóma síðu með kynningu og nótum
    log.forEach((row) => {
      if (byId.has(row.id)) return;
      const song = { id: row.id, title: row.lag, stems: [], sections: [], missing: true };
      songs.push(song);
      byId.set(row.id, song);
    });
    setlist = { ...setlist, rows, order: log.filter((row) => row.rod !== null).map((row) => row.id) };
  }

  async function loadSetlist() {
    const { key, fresh } = readKey();
    if (!key) return;
    try {
      const r = await call(key, { action: "lagalisti" });
      if (!r.ok) throw new Error(r.villa);
      setlist = { key, names: r.nofn };
      applySetlist(r.log);
      // Án #lags í slóðinni byrjar síðan á fyrsta lagi kvöldsins. Stemin
      // hlaðast þegar ýtt er á play, eins og við fyrstu opnun.
      if (!location.hash && setlist.order.length && !engine.isPlaying(current.id)) {
        current = byId.get(setlist.order[0]);
      }
      renderSong();
    } catch (err) {
      // Æfingasíðan virkar áfram án listans; segja bara frá ef lykillinn var nýr
      if (fresh || err.badKey) {
        els.note.hidden = false;
        els.note.textContent = err.badKey
          ? "Hlekkurinn gildir ekki, svo tónleikaröðin sést ekki. Biddu Óla um nýjan."
          : "Náði ekki í tónleikaröðina. Reyndu að endurhlaða síðuna.";
      }
    }
  }

  async function saveSong() {
    const row = savedRow();
    const changed = changedFields();
    if (!row || !changed.length) return;
    if (!who.get()) {
      renderPerState("Veldu fyrst hver þú ert, efst í lagalistanum.");
      return;
    }
    const id = current.id;
    const reitir = Object.fromEntries(changed.map((f) => [f, field(f).value]));
    els.save.disabled = true;
    els.status.textContent = "Vista …";
    try {
      const r = await call(setlist.key, { action: "lagVista", id, hver: who.get(), breytt: row.breytt, reitir });
      if (r.arekstur) {
        // Einhver vistaði á meðan: nýja útgáfan verður grunnurinn, textinn í reitunum heldur sér
        setlist.rows.set(id, r.lag);
        if (current.id === id) renderPerState(r.villa);
        return;
      }
      if (!r.ok) throw new Error(r.villa);
      setlist.rows.set(id, r.lag);
      drafts.delete(id);
      if (current.id === id) renderPer();
      renderNav();
    } catch (err) {
      if (current.id === id) renderPerState(`Tókst ekki að vista. ${err.message}`);
    }
  }

  function orderStatus(text) {
    const p = app.querySelector('[data-pm-el="order-status"]');
    if (p) p.textContent = text;
  }

  async function saveOrder() {
    if (!who.get()) {
      orderStatus("Veldu fyrst hver þú ert.");
      return;
    }
    const before = setlist.order;
    const after = editOrder;
    if (after.join("\n") === before.join("\n")) {
      editOrder = null;
      renderNav();
      return;
    }
    orderStatus("Vista …");
    try {
      const r = await call(setlist.key, {
        action: "rodVista",
        hver: who.get(),
        adur: before,
        rod: after.map((id) => ({ id, lag: titleOf(id) })),
      });
      if (!r.ok && !r.arekstur) throw new Error(r.villa);
      applySetlist(r.log);
      editOrder = r.arekstur ? [...setlist.order] : null;
      renderNav();
      renderStep();
      // Reitir lagsins sem er opið lesnir úr nýju gögnunum, nema þar sé óvistað
      if (!drafts.has(current.id)) renderPer();
      if (r.arekstur) orderStatus(r.villa);
    } catch (err) {
      orderStatus(`Tókst ekki að vista. ${err.message}`);
    }
  }

  app.addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target || !app.contains(target)) return;
    const d = target.dataset;

    if (d.pmPick) pick(d.pmPick);
    else if (d.pmTarget) pick(d.pmTarget);
    else if (d.pmOrder === "edit") {
      editOrder = [...setlist.order];
      renderNav();
    } else if (d.pmOrder === "cancel") {
      editOrder = null;
      renderNav();
      renderStep();
    } else if (d.pmOrder === "save") saveOrder();
    else if (d.pmMove) {
      const i = editOrder.indexOf(d.pmMove);
      const j = i + Number(d.pmBy);
      if (i !== -1 && j >= 0 && j < editOrder.length) {
        [editOrder[i], editOrder[j]] = [editOrder[j], editOrder[i]];
        renderNav();
        app.querySelector(`[data-pm-move="${CSS.escape(d.pmMove)}"][data-pm-by="${d.pmBy}"]:not(:disabled)`)?.focus();
      }
    } else if (d.pmRemove) {
      editOrder = editOrder.filter((id) => id !== d.pmRemove);
      renderNav();
    } else if (d.pmAdd) {
      editOrder = [...editOrder, d.pmAdd];
      renderNav();
    } else if (d.pmEl === "play") togglePlay();
    else if (d.pmSeg !== undefined) jumpTo(Number(d.pmSeg));
    else if (d.pmJump !== undefined) jumpTo(Number(d.pmJump));
    else if (d.pmView) {
      view = d.pmView;
      renderSections();
      activeSection = -1;
      renderTime(engine.getTime(current.id));
    } else if (d.pmTranspose) {
      transpose.set(current.id, (transpose.get(current.id) || 0) + Number(d.pmTranspose));
      renderSections();
      renderKey();
      activeSection = -1;
      renderTime(engine.getTime(current.id));
    } else if (d.pmEl === "reset") {
      engine.resetMix(current.id);
      renderStrips();
    } else if (d.pmMute !== undefined || d.pmSolo !== undefined) {
      const id = target.closest("[data-pm-strip]").dataset.pmStrip;
      const track = engine.getSong(current.id).tracks.find((t) => t.id === id);
      const key = d.pmMute !== undefined ? "muted" : "soloed";
      engine.setTrack(current.id, id, { [key]: !track[key] });
      renderMixState();
    }
  });

  els.per.addEventListener("submit", (e) => {
    e.preventDefault();
    saveSong();
  });

  app.addEventListener("change", (e) => {
    if (e.target.matches("[data-pm-who]")) who.set(e.target.value);
  });

  window.addEventListener("beforeunload", (e) => {
    if (!drafts.size) return;
    e.preventDefault();
    e.returnValue = "";
  });

  app.addEventListener("input", (e) => {
    if (e.target.closest("[data-pm-field]")) {
      renderPerState();
      return;
    }
    const strip = e.target.closest("[data-pm-strip]");
    if (strip) {
      const key = e.target.matches("[data-pm-vol]") ? "volume" : "pan";
      engine.setTrack(current.id, strip.dataset.pmStrip, { [key]: parseFloat(e.target.value) });
    } else if (e.target === els.seek) {
      dragging = true;
      els.time.textContent = `${formatTime((els.seek.value / 1000) * duration())} / ${formatTime(duration())}`;
    }
  });

  els.seek.addEventListener("change", () => {
    dragging = false;
    const total = duration();
    if (total) engine.seek((els.seek.value / 1000) * total, current.id);
  });

  // Bil = play/pause, örvar = fyrra/næsta lag, nema verið sé að skrifa í reit
  document.addEventListener("keydown", (e) => {
    if (e.repeat || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.code === "Space") {
      if (e.target.closest?.("textarea, select, [contenteditable], input:not([type=range])")) return;
      e.preventDefault();
      togglePlay();
    } else if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && setlist && !editOrder) {
      // Sleðar nota örvarnar sjálfir
      if (e.target.closest?.("textarea, select, input, [contenteditable]")) return;
      e.preventDefault();
      step(e.key === "ArrowLeft" ? -1 : 1);
    }
  });

  engine.on("state", ({ songId, state }) => {
    if (songId !== current.id) return;
    els.play.dataset.state = state;
    els.play.setAttribute("aria-label", state === "playing" ? "Gera hlé" : "Spila");
  });

  engine.on("time", ({ songId, time }) => {
    if (songId !== current.id) return;
    if (els.structure.dataset.duration !== String(duration())) {
      els.structure.dataset.duration = String(duration());
      renderStructure();
      activeSection = -1;
    }
    renderTime(time);
  });

  renderSong();
  loadSetlist();
  console.log(`permixer: ${songs.length} lög`);
}
