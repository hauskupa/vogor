// src/asleep.js
import { FLY_SLOTS, SONG_LAYOUT } from "./asleepPositions.js";

// ----------------------------
// Fade helper
// ----------------------------
function fadeVolume(audio, target, duration = 500) {
  const steps = 30;
  const stepTime = duration / steps;
  const start = audio.volume;
  const delta = target - start;
  let i = 0;

  const timer = setInterval(() => {
    i++;
    audio.volume = start + (delta * (i / steps));
    if (i >= steps) {
      audio.volume = target;
      clearInterval(timer);
    }
  }, stepTime);
}

// ----------------------------
// Stem nafn úr data / file
// ----------------------------
function getStemName(track) {
  // 1) Webflow data-mt-stem ef til
  const fromAttr = track.el.dataset.mtStem;
  if (fromAttr) return fromAttr;

  // 2) Reikna úr slóð
  const url = track.el.dataset.mtAudio || track.audio?.src || "";
  if (!url) return "Stem";

  let filename = url.split("/").pop() || "";
  let base = filename.replace(/\.[^/.]+$/, ""); // taka .mp3 o.fl. af

  // "Mars18_DRUMS" -> "DRUMS" o.s.frv.
  base = base.replace(/^(Mars|Palli|Agust|Siggi)[0-9\-_]*/i, "");
  base = base.replace(/[_-]+/g, " ").trim();

  if (!base) base = "Stem";

  return base.charAt(0).toUpperCase() + base.slice(1);
}

// ----------------------------
// MAIN
// ----------------------------
export function setupAsleepArtwork(multitrack) {
  if (!multitrack) return;

  const { container, tracks, ensureStarted } = multitrack;

  const uiSong = container.querySelector("[data-mt-activesong]");
  const uiStem = container.querySelector("[data-mt-activestem]");
  const waveWrapper = container.querySelector(".asleep-wave-wrapper");

  // -----------------------------------------
  // Reiknum stem-nöfn einu sinni
  // -----------------------------------------
  tracks.forEach((track) => {
    track.stemName = getStemName(track);
  });

  // -----------------------------------------
  // Position á triggerum
  // -----------------------------------------
  function applyFlyPositions() {
    const perSong = new Map();

    tracks.forEach((t) => {
      if (!t.songId) return;
      if (!perSong.has(t.songId)) perSong.set(t.songId, []);
      perSong.get(t.songId).push(t.el);
    });

    perSong.forEach((els, songId) => {
      const layout = SONG_LAYOUT[songId];
      if (!layout) return;

      const start = layout.slotStart;
      const count = layout.count;

      for (let i = 0; i < els.length; i++) {
        const slot = FLY_SLOTS[start + i];
        if (!slot) continue;

        const el = els[i];
        el.removeAttribute("style");

        el.style.position = "absolute";
        el.style.left = slot.x * 100 + "%";
        el.style.top = slot.y * 100 + "%";
        el.style.pointerEvents = "auto";
      }
    });
  }

  applyFlyPositions();

  // -----------------------------------------
  // Default piano drone
  // -----------------------------------------
  const defaultEl = container.querySelector("[data-mt-default]");
  const defaultUrl = defaultEl?.dataset.mtDefault || "";
  let defaultAudio = null;
  let defaultActive = false;

  if (defaultUrl) {
    defaultAudio = new Audio(defaultUrl);
    defaultAudio.loop = true;
    defaultAudio.volume = 1;

    defaultAudio
      .play()
      .then(() => {
        defaultActive = true;
        console.log("asleep: default mix playing");
      })
      .catch((err) => {
        console.warn("asleep: autoplay default failed", err);
      });
  }

  function dropDefault() {
    if (!defaultActive || !defaultAudio) return;

    fadeVolume(defaultAudio, 0, 500);
    setTimeout(() => {
      defaultAudio.pause();
      defaultAudio.currentTime = 0;
    }, 550);

    defaultActive = false;
    console.log("asleep: default mix stopped");
  }

  // -----------------------------------------
  // Status UI helpers
  // -----------------------------------------
  function setActiveSong(songId) {
    if (uiSong) uiSong.textContent = songId || "–";
  }

  function setActiveStem(stem) {
    if (uiStem) uiStem.textContent = stem || "–";
  }

  // -----------------------------------------
  // Highlight allt lag á hover
  // -----------------------------------------
  function highlightSong(songId) {
    tracks.forEach((t) => {
      if (t.songId === songId) t.el.classList.add("song-hover");
      else t.el.classList.remove("song-hover");
    });
  }

  function clearSongHighlight() {
    tracks.forEach((t) => t.el.classList.remove("song-hover"));
  }

  // -----------------------------------------
  // Fyrsta interaction → drepa drone + kveikja á waveform
  // -----------------------------------------
  let hasUserInteractedWithStems = false;

  function handleFirstStemInteraction() {
    if (hasUserInteractedWithStems) return;
    hasUserInteractedWithStems = true;

    dropDefault();
    ensureStarted();

    if (waveWrapper) {
      waveWrapper.classList.add("is-playing");
    }
  }

  // -----------------------------------------
  // Bindings per track
  // -----------------------------------------
  tracks.forEach((track) => {
    const el = track.el;

    // Fyrsti click → drepa drone + start waveform
    el.addEventListener("click", handleFirstStemInteraction);

    // Update status text
    el.addEventListener("click", () => {
      setActiveSong(track.songId);
      setActiveStem(track.stemName);
    });

    // Hover highlight fyrir allt lag
    el.addEventListener("mouseenter", () => highlightSong(track.songId));
    el.addEventListener("mouseleave", clearSongHighlight);
  });

  // -----------------------------------------
  // Stop takki: drepa drone + stoppa fake waveform
  // -----------------------------------------
  const stopBtn = container.querySelector("[data-mt-stop]");
  stopBtn?.addEventListener("click", () => {
    dropDefault();
    if (waveWrapper) {
      waveWrapper.classList.remove("is-playing");
    }
  });

  console.log("asleep: artwork ready (slots + status + fake waveform)");
}
