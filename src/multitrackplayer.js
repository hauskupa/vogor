// src/multitrackplayer.js
function fadeVolume(audio, target, duration = 300) {
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

export function setupMultitrackPlayer(root = document) {
  console.log("multitrack: init");

  const container = root.querySelector("[data-multitrack-player]");
  if (!container) {
    console.warn("multitrack: no [data-multitrack-player] found");
    return null;
  }

  const playBtn = container.querySelector("[data-mt-play]");
  const pauseBtn = container.querySelector("[data-mt-pause]");
  const stopBtn = container.querySelector("[data-mt-stop]");

  const triggerEls = Array.from(
    container.querySelectorAll("[data-mt-trigger]")
  );

  const tracks = []; // { el, audio, songId }

  triggerEls.forEach((el, index) => {
    const url = (el.dataset.mtAudio || "").trim();
    if (!url) {
      el.classList.add("is-disabled");
      return;
    }

    const trackWrapper = el.closest("[data-mt-track]");
    const songId = trackWrapper?.dataset.mtTrack || null;

    const audio = new Audio(url);
    audio.preload = "auto";
    audio.volume = 0;

    tracks.push({
      id: `t-${index}`,
      songId,
      el,
      audio,
    });
  });

  console.log(
    "multitrack: triggers =", triggerEls.length,
    "usable tracks =", tracks.length
  );

  if (!tracks.length) {
    console.warn("multitrack: no usable tracks found (check data-mt-audio)");
    return null;
  }

  let isStarted = false;
  let isPlaying = false;
  let currentSongId = null;

  function playAll() {
    tracks.forEach((track) => {
      const { audio, songId, el } = track;
      if (audio.paused) {
        audio.play().catch((err) => {
          console.warn("multitrack: play failed", {
            error: err && err.name,
            message: err && err.message,
            src: audio.src,
            songId,
            stem: el?.dataset?.mtStem || null,
          });
        });
      }
    });
    isPlaying = true;
  }

  function pauseAll() {
    tracks.forEach(({ audio }) => audio.pause());
    isPlaying = false;
  }

  function stopAll() {
    tracks.forEach(({ audio, el }) => {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0;
      el.classList.remove("is-active");
    });
    isPlaying = false;
    currentSongId = null;

    // UI events fyrir asleep.js
    window.dispatchEvent(
      new CustomEvent("mt:song:change", {
        detail: { songId: null },
      })
    );
    window.dispatchEvent(
      new CustomEvent("mt:stem:change", {
        detail: { songId: null, activeStems: [] },
      })
    );
  }

  function ensureStarted() {
    if (!isStarted) {
      isStarted = true;
      playAll();
    }
  }

  function emitActiveState() {
    const songId = currentSongId;
    const activeStems = tracks
      .filter((t) => !songId || t.songId === songId)
      .filter((t) => t.el.classList.contains("is-active"))
      .map((t) => t.el.dataset.mtStem || "Stem");

    window.dispatchEvent(
      new CustomEvent("mt:stem:change", {
        detail: { songId, activeStems },
      })
    );
  }

  function toggleTrack(track) {
    const prevSongId = currentSongId;

    if (track.songId && currentSongId && track.songId !== currentSongId) {
      // skipta um lag: stoppa allt + reset
      tracks.forEach((t) => {
        t.audio.pause();
        t.audio.currentTime = 0;
        t.audio.volume = 0;
        t.el.classList.remove("is-active");
      });
      isPlaying = false;
      isStarted = false;
    }

    if (track.songId) {
      currentSongId = track.songId;
    }

    ensureStarted();
    if (!isPlaying) playAll();

    const isOn = track.audio.volume > 0.01;

    if (isOn) {
      fadeVolume(track.audio, 0, 300);
    } else {
      fadeVolume(track.audio, 1, 300);
    }

    track.el.classList.toggle("is-active", !isOn);

    // Song-change event
    if (track.songId && track.songId !== prevSongId) {
      window.dispatchEvent(
        new CustomEvent("mt:song:change", {
          detail: { songId: track.songId },
        })
      );
    }

    // Stem-state event
    emitActiveState();
  }

  // default behaviour: click á .mt-track togglar stem
  tracks.forEach((track) => {
    track.el.addEventListener("click", () => toggleTrack(track));

    // hover events fyrir asleep.js (highlightSong)
    track.el.addEventListener("mouseenter", () => {
      if (!track.songId) return;
      window.dispatchEvent(
        new CustomEvent("mt:stem:hover", {
          detail: { songId: track.songId },
        })
      );
    });

    track.el.addEventListener("mouseleave", () => {
      window.dispatchEvent(new CustomEvent("mt:stem:leave"));
    });
  });

  // global controls
  playBtn?.addEventListener("click", () => {
    ensureStarted();
    playAll();
    emitActiveState();
  });

  pauseBtn?.addEventListener("click", () => {
    pauseAll();
  });

  stopBtn?.addEventListener("click", () => {
    stopAll();
  });

  console.log("multitrack: ready");

  // API fyrir asleep.js
  return {
    container,
    tracks,
    playAll,
    pauseAll,
    stopAll,
    toggleTrack,
    ensureStarted,
  };
}
