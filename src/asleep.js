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

  const uiSong = container.querySelector("[data-mt-activesong]");
  const uiStem = container.querySelector("[data-mt-activestem]");


  // -----------------------------------------------------------
  // 🎨 PLACE TRIGGERS USING SLOT MAP
  // -----------------------------------------------------------
  function applyFlyPositions() {
    const perSong = new Map();

    tracks.forEach(t => {
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
        el.style.left = (slot.x * 100) + "%";
        el.style.top  = (slot.y * 100) + "%";
        el.style.pointerEvents = "auto";
      }
    });
  }

  applyFlyPositions();


  // -----------------------------------------------------------
  // 🌫 DEFAULT DRONE MIX
  // -----------------------------------------------------------

  const defaultEl = container.querySelector("[data-mt-default]");
  const defaultUrl = defaultEl?.dataset.mtDefault || "";
  let defaultAudio = null;
  let defaultActive = false;

  if (defaultUrl) {
    defaultAudio = new Audio(defaultUrl);
    defaultAudio.loop = true;
    defaultAudio.volume = 1;

    defaultAudio.play().then(() => {
      defaultActive = true;
    }).catch(() => {});
  }

  function dropDefault() {
    if (!defaultActive || !defaultAudio) return;

    fadeVolume(defaultAudio, 0, 500);
    setTimeout(() => {
      defaultAudio.pause();
      defaultAudio.currentTime = 0;
    }, 550);

    defaultActive = false;
  }


  // -----------------------------------------------------------
  // 🎛 STATUS UI HELPERS
  // -----------------------------------------------------------

  function setActiveSong(songId) {
    if (uiSong) uiSong.textContent = songId || "–";
  }

  function setActiveStem(stemName) {
    if (uiStem) uiStem.textContent = stemName || "–";
  }


  // -----------------------------------------------------------
  // ✨ INTERACTION BEHAVIOR
  // -----------------------------------------------------------

  let hasUserInteractedWithStems = false;

  function handleFirstStemInteraction() {
    if (hasUserInteractedWithStems) return;
    hasUserInteractedWithStems = true;

    dropDefault();
    ensureStarted();
  }


  // 🟩 Highlight everything belonging to a song
  function highlightSong(songId) {
    tracks.forEach(t => {
      if (t.songId === songId) {
        t.el.classList.add("song-hover");
      } else {
        t.el.classList.remove("song-hover");
      }
    });
  }

  function clearSongHighlight() {
    tracks.forEach(t => t.el.classList.remove("song-hover"));
  }

  // -----------------------------------------------------------
  // 🔔 TRACK CLICK + HOVER BINDINGS
  // -----------------------------------------------------------
  tracks.forEach((track) => {
    const el = track.el;

    // 🔊 first click kills drone
    el.addEventListener("click", handleFirstStemInteraction);

    // 🎧 click → show active status
    el.addEventListener("click", () => {
      setActiveSong(track.songId);
      setActiveStem(track.stemName || el.textContent);
    });

    // ✨ hover → highlight whole song
    el.addEventListener("mouseenter", () => {
      highlightSong(track.songId);
    });

    el.addEventListener("mouseleave", clearSongHighlight);
  });


  // -----------------------------------------------------------
  // 🟥 STOP BUTTON KILLS DEFAULT MIX
  // -----------------------------------------------------------
  const stopBtn = container.querySelector("[data-mt-stop]");
  stopBtn?.addEventListener("click", () => dropDefault());
}
