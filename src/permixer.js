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

import { createStemEngine } from "./stemEngine.js";
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

function parseStems(text) {
  const stems = [];
  const seen = new Set();
  const re = /([^\s:,;][^:,;\n]*?)\s*:\s*(https?:\/\/[^\s,;]+)/g;
  let m;
  while ((m = re.exec(text || ""))) {
    const name = clean(m[1]);
    let id = slugify(name) || `stem-${stems.length + 1}`;
    while (seen.has(id)) id += "-2";
    seen.add(id);
    stems.push({ id, name, url: m[2] });
  }
  return stems;
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

    return { id, title, stems: parseStems(el.getAttribute("data-pm-stems")), sections };
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

  app.innerHTML = `
    <nav class="pm-songs" aria-label="Lagalisti">
      <ol>${songs
        .map(
          (s, i) => `<li><button type="button" data-pm-pick="${esc(s.id)}">
            <span class="pm-num">${String(i + 1).padStart(2, "0")}</span>
            <span>${esc(s.title)}</span></button></li>`
        )
        .join("")}</ol>
    </nav>
    <main class="pm-main">
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
      <div class="pm-structure" data-pm-el="structure"></div>
      <div class="pm-toolbar">
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

  function renderSong() {
    const song = current;
    app.querySelectorAll("[data-pm-pick]").forEach((b) => {
      b.setAttribute("aria-current", b.dataset.pmPick === song.id ? "true" : "false");
    });
    els.title.textContent = song.title;
    els.play.disabled = !song.stems.length;
    els.note.hidden = !!song.stems.length;
    els.note.textContent = "Engin stem fyrir þetta lag — bara hljómar og texti.";
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
    history.replaceState(null, "", `#${next.id}`);
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

  app.addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target || !app.contains(target)) return;
    const d = target.dataset;

    if (d.pmPick) pick(d.pmPick);
    else if (d.pmEl === "play") togglePlay();
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

  app.addEventListener("input", (e) => {
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

  // Bil = play/pause, nema verið sé að skrifa í textareit
  document.addEventListener("keydown", (e) => {
    if (e.code !== "Space" || e.repeat) return;
    if (e.target.closest?.("textarea, select, [contenteditable], input:not([type=range])")) return;
    e.preventDefault();
    togglePlay();
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
  console.log(`permixer: ${songs.length} lög`);
}
