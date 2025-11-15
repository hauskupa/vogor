// src/asleep.js

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

  // --- Place flies from JSON config ---
  function applyFlyPositions() {
    const perSong = new Map();

    tracks.forEach((t) => {
      if (!t.songId) return;
      if (!perSong.has(t.songId)) perSong.set(t.songId, []);
      perSong.get(t.songId).push(t.el);
    });

    perSong.forEach((els, songId) => {
      const cfg = FLY_POSITIONS[songId];
      if (!cfg) return;

      els.forEach((el, idx) => {
        const pos = cfg[idx];
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
