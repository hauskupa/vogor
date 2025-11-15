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

  // --- PLACE FLIES FROM FLY_SLOTS + SONG_LAYOUT ---
  function applyFlyPositions() {
    if (!FLY_SLOTS || !FLY_SLOTS.length) {
      console.warn("asleep: no FLY_SLOTS defined");
      return;
    }

    const perSong = new Map();

    // group-um stems eftir laginu sem þau tilheyra (songId)
    tracks.forEach((t) => {
      if (!t.songId) return;
      if (!perSong.has(t.songId)) perSong.set(t.songId, []);
      perSong.get(t.songId).push(t.el);
    });

    perSong.forEach((els, songId) => {
      const layout = SONG_LAYOUT?.[songId];

      let slotIndexes;

      // ef við erum með explicit layout fyrir þetta lag og það dugir fyrir fjölda stems
      if (layout && layout.length >= els.length) {
        slotIndexes = layout.slice(0, els.length);
      } else {
        // fallback: notum bara fyrstu N slots
        slotIndexes = Array.from({ length: els.length }, (_, i) => i);
      }

      els.forEach((el, idx) => {
        const slotIndex = slotIndexes[idx];
        const pos = FLY_SLOTS[slotIndex];
        if (!pos) return;

        el.style.position = "absolute";
        el.style.left = pos.x * 100 + "%";
        el.style.top = pos.y * 100 + "%";
      });
    });
  }

  applyFlyPositions();

  // --- DEFAULT MIX ---

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

  // --- DROP DEFAULT ON FIRST STEM INTERACTION ---

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
  stopBtn?.addEventListener("click", () => {
    dropDefault();
  });

  console.log("asleep: default mix + fly positions ready");
}
