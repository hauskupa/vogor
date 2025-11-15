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

  // Við notum EINA control-settið (fyrsta sem finnst)
  const playBtn = container.querySelector("[data-mt-play]");
  const pauseBtn = container.querySelector("[data-mt-pause]");
  const stopBtn = container.querySelector("[data-mt-stop]");

  // Allir clickable stem-divar
  const triggerEls = Array.from(
    container.querySelectorAll("[data-mt-trigger]")
  );

  const tracks = []; // { el, audio, songId }

  triggerEls.forEach((el, index) => {
    const url = (el.dataset.mtAudio || "").trim();
    if (!url) {
      // tómt slot, engin rás – merkjum sem disabled og sleppum
      el.classList.add("is-disabled");
      return;
    }

    // Finna hvaða lag (song) þetta tilheyrir
    const trackWrapper = el.closest("[data-mt-track]");
    const songId = trackWrapper?.dataset.mtTrack || null;

    const audio = new Audio(url);
    audio.preload = "auto";
    audio.volume = 0;

    tracks.push({
      id: `t-${index}`,
      songId, // "Agust" / "Siggi" o.s.frv.
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
  let currentSongId = null; // Agust / Siggi / whatever


  function playAll() {
    tracks.forEach(({ audio }) => {
      if (audio.paused) {
        audio.play().catch((err) =>
          console.warn("multitrack: play failed", err)
        );
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
  }


  function ensureStarted() {
    if (!isStarted) {
      isStarted = true;
      playAll();
    }
  }

function toggleTrack(track) {
  // Ef við erum að fara í annað lag en það sem er í gangi:
  if (track.songId && currentSongId && track.songId !== currentSongId) {
    // 1) Stoppum allt og núllstillum
    tracks.forEach((t) => {
      t.audio.pause();
      t.audio.currentTime = 0;   // byrjun
      t.audio.volume = 0;
      t.el.classList.remove("is-active");
    });

    isPlaying = false;
    isStarted = false;
  }

  // Uppfæra currentSongId
  if (track.songId) {
    currentSongId = track.songId;
  }

  // Tryggjum að vélin sé farin í gang (spilar allar rásir muted)
  ensureStarted();
  if (!isPlaying) playAll();

  const isOn = track.audio.volume > 0.01;

  if (isOn) {
    fadeVolume(track.audio, 0, 300);   // fade out
  } else {
    fadeVolume(track.audio, 1, 300);   // fade in
  }

  track.el.classList.toggle("is-active", !isOn);
}


  // default behaviour: click á .mt-track togglar viðkomandi stem
  tracks.forEach((track) => {
    track.el.addEventListener("click", () => toggleTrack(track));
  });

  // global controls
  playBtn?.addEventListener("click", () => {
    ensureStarted();
    playAll();
  });

  pauseBtn?.addEventListener("click", () => {
    pauseAll();
  });

  stopBtn?.addEventListener("click", () => {
    stopAll();
  });

  console.log("multitrack: ready");

  // 🔹 Þetta API notum við seinna í sér "asleep.js"
  return {
    container,
    tracks,          // { el, audio, songId }
    playAll,
    pauseAll,
    stopAll,
    toggleTrack,
    ensureStarted,
  };
}
