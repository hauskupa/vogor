// src/asleep.js
import { FLY_SLOTS, SONG_LAYOUT } from "./asleepPositions.js";

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

export function setupAsleepArtwork(multitrack) {
  if (!multitrack) return;

  const { container, tracks, ensureStarted } = multitrack;

  // -----------------------------------------------------------
  // 🔥 PLACE ALL TRIGGERS USING FLY_SLOTS + SONG_LAYOUT
  // -----------------------------------------------------------
  function applyFlyPositions() {
    const perSong = new Map();

    // Group tracks by songId (Mars, Palli, Agust, Siggi)
    tracks.forEach(t => {
      if (!t.songId) return;
      if (!perSong.has(t.songId)) perSong.set(t.songId, []);
      perSong.get(t.songId).push(t.el);
    });

    // Apply slot ranges
    perSong.forEach((els, songId) => {
      const layout = SONG_LAYOUT[songId];
      if (!layout) return;

      const start = layout.slotStart;
      const count = layout.count;

      for (let i = 0; i < els.length; i++) {
        const slot = FLY_SLOTS[start + i];
        if (!slot) continue;

        const el = els[i];

        // Remove ALL old inline styles so Webflow junk vanishes
        el.removeAttribute("style");

        // Apply new absolute placement
        el.style.position = "absolute";
        el.style.left = (slot.x * 100) + "%";
        el.style.top  = (slot.y * 100) + "%";
        el.style.pointerEvents = "auto"; // just to be 100% safe
      }
    });
  }

  applyFlyPositions();

  // -----------------------------------------------------------
  // 🔊 DEFAULT MIX (piano drone)
  // -----------------------------------------------------------
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

  // -----------------------------------------------------------
  // 🎛 FIRST STEM INTERACTION DROPS DEFAULT MIX
  // -----------------------------------------------------------
  let hasUserInteractedWithStems = false;

  function handleFirstStemInteraction() {
    if (hasUserInteractedWithStems) return;
    hasUserInteractedWithStems = true;

    dropDefault();
    ensureStarted();
  }

  tracks.forEach((track) => {
    track.el.addEventListener("click", handleFirstStemInteraction, {
      once: true,
    });
  });

  const stopBtn = container.querySelector("[data-mt-stop]");
  stopBtn?.addEventListener("click", () => dropDefault());

  console.log("asleep: default mix + fly positions ready");
}
