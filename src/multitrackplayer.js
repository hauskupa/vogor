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

  const tracks = []; // { id, songId, el, audio }

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
      // drift helpers fyrir resync
      _driftEMA: undefined,
      _nudgeTimeout: null,
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

  // -----------------------------------------------------------
  // Resync helper – heldur lögunum þokkalega í sync
  // -----------------------------------------------------------
  let resyncTimer = null;

  function resyncSong(songId) {
    const songTracks = tracks.filter((t) => t.songId === songId);
    if (!songTracks.length) return;

    // veljum master track: ef eitthvað er active → það, annars fyrsta
    let masterTrack =
      songTracks.find((t) => t.el.classList.contains("is-active")) ||
      songTracks[0];
    const master = masterTrack && masterTrack.audio;
    if (!master || master.paused) return;

    const masterTime = master.currentTime;

    // stillingar – sama og þú varst með áður
    const EMA_ALPHA = 0.25; // smoothing
    const SMALL_TOL = 0.05; // < 50ms -> sleppum
    const SEEK_TOL = 0.25;  // > 250ms -> hard seek
    const NUDGE_RATE = 0.02; // +/- 2%
    const NUDGE_DURATION = 600; // ms

    songTracks.forEach((t) => {
      if (t === masterTrack) return;
      const a = t.audio;
      if (!a || a.paused) return;

      let measured = a.currentTime - masterTime;
      if (!Number.isFinite(measured)) measured = 0;

      if (typeof t._driftEMA === "undefined") t._driftEMA = measured;
      else t._driftEMA =
        EMA_ALPHA * measured + (1 - EMA_ALPHA) * t._driftEMA;

      const drift = t._driftEMA;

      // lítið misræmi -> tryggjum að playbackRate sé 1 og hættum
      if (Math.abs(drift) <= SMALL_TOL) {
        if (t._nudgeTimeout) {
          clearTimeout(t._nudgeTimeout);
          t._nudgeTimeout = null;
        }
        try {
          if (a.playbackRate !== 1) a.playbackRate = 1;
        } catch (e) {}
        return;
      }

      // stórt misræmi -> hard seek
      if (Math.abs(drift) >= SEEK_TOL) {
        try {
          a.currentTime = masterTime;
        } catch (e) {}
        t._driftEMA = 0;
        if (t._nudgeTimeout) {
          clearTimeout(t._nudgeTimeout);
          t._nudgeTimeout = null;
        }
        try {
          a.playbackRate = 1;
        } catch (e) {}
        return;
      }

      // miðlungs misræmi -> mjúk nudge
      const sign = drift > 0 ? 1 : -1;
      const targetRate = 1 - sign * NUDGE_RATE; // 0.98 eða 1.02

      try {
        if (a.playbackRate !== targetRate) a.playbackRate = targetRate;
      } catch (e) {}

      if (t._nudgeTimeout) clearTimeout(t._nudgeTimeout);
      t._nudgeTimeout = setTimeout(() => {
        try {
          a.playbackRate = 1;
        } catch (e) {}
        t._nudgeTimeout = null;
      }, NUDGE_DURATION);
    });
  }

  function startResyncLoop(songId) {
    stopResyncLoop();
    if (!songId) return;
    resyncTimer = setInterval(() => {
      try {
        resyncSong(songId);
      } catch (e) {
        console.warn("multitrack: resync error", e);
      }
    }, 800);
  }

  function stopResyncLoop() {
    if (resyncTimer) {
      clearInterval(resyncTimer);
      resyncTimer = null;
    }
    // endurstillum playbackRate á öllum
    tracks.forEach((t) => {
      if (t._nudgeTimeout) {
        clearTimeout(t._nudgeTimeout);
        t._nudgeTimeout = null;
      }
      try {
        t.audio.playbackRate = 1;
      } catch (e) {}
      t._driftEMA = undefined;
    });
  }

  // -----------------------------------------------------------
  // Spilun
  // -----------------------------------------------------------
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
    tracks.forEach((t) => {
      const { audio, el } = t;
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0;
      el.classList.remove("is-active");
    });
    isPlaying = false;
    isStarted = false;
    currentSongId = null;
    stopResyncLoop();

    // UI event fyrir asleep.js
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

    // skipta um lag -> reset allt
    if (track.songId && currentSongId && track.songId !== currentSongId) {
      tracks.forEach((t) => {
        t.audio.pause();
        t.audio.currentTime = 0;
        t.audio.volume = 0;
        t.el.classList.remove("is-active");
      });
      isPlaying = false;
      isStarted = false;
      stopResyncLoop();
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

    // Resync per lag – ef enginn stem active í þessu lagi -> stop
    if (currentSongId) {
      const anyActiveInSong = tracks.some(
        (t) =>
          t.songId === currentSongId &&
          t.el.classList.contains("is-active")
      );
      if (anyActiveInSong) startResyncLoop(currentSongId);
      else stopResyncLoop();
    } else {
      stopResyncLoop();
    }
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
    if (currentSongId) startResyncLoop(currentSongId);
  });

  pauseBtn?.addEventListener("click", () => {
    pauseAll();
    // við látum resync halda áfram – þannig að þegar play kemur aftur
    // þá er drift ekki búið að versna meðan í pause
  });

  stopBtn?.addEventListener("click", () => {
    stopAll();
  });

  console.log("multitrack: ready (with resync)");

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
