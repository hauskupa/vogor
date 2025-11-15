// asleep.js — FINAL VERSION
import { FLY_SLOTS, SONG_LAYOUT } from "./asleepPositions.js";

// ----------------------------------------------
// Fade helper
// ----------------------------------------------
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

// ----------------------------------------------
// Extract stem name
// ----------------------------------------------
function getStemName(track) {
  const fromAttr = track.el.dataset.mtStem;
  if (fromAttr) return fromAttr;

  const url = track.el.dataset.mtAudio || "";
  if (!url) return "Stem";

  let filename = url.split("/").pop();
  let base = filename.replace(/\.[^/.]+$/, "");

  base = base.replace(/^(Mars|Palli|Agust|Siggi)[0-9\-_]*/i, "");
  base = base.replace(/[_-]+/g, " ").trim();

  return base.charAt(0).toUpperCase() + base.slice(1);
}

// -----------------------------------------------------------
// MAIN
// -----------------------------------------------------------
export function setupAsleepArtwork(multitrack) {
  if (!multitrack) return;

  const { container, tracks, ensureStarted } = multitrack;

  const uiSong = container.querySelector("[data-mt-activesong]");
  const uiStem = container.querySelector("[data-mt-activestem]");

  // Make sure every track knows its stem name
  tracks.forEach(track => {
    track.stemName = getStemName(track);
  });

  // -------------------------------------------------------
  // Place triggers onto fly slots
  // -------------------------------------------------------
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

      els.forEach((el, idx) => {
        const slot = FLY_SLOTS[start + idx];
        if (!slot) return;

        el.removeAttribute("style");
        el.style.position = "absolute";
        el.style.left = (slot.x * 100) + "%";
        el.style.top = (slot.y * 100) + "%";
      });
    });
  }

  applyFlyPositions();

  // -------------------------------------------------------
  // Default drone
  // -------------------------------------------------------
  const defaultEl = container.querySelector("[data-mt-default]");
  const defaultUrl = defaultEl?.dataset.mtDefault || "";
  let defaultAudio = null;
  let defaultActive = false;

  if (defaultUrl) {
    defaultAudio = new Audio(defaultUrl);
    defaultAudio.loop = true;
    defaultAudio.volume = 1;

    defaultAudio.play().then(() => defaultActive = true).catch(() => {});
  }

  function dropDefault() {
    if (!defaultActive) return;
    fadeVolume(defaultAudio, 0, 500);
    setTimeout(() => {
      defaultAudio.pause();
      defaultAudio.currentTime = 0;
    }, 550);
    defaultActive = false;
  }

  // -------------------------------------------------------
  // UI helpers
  // -------------------------------------------------------
  function setActiveSong(songId) {
    if (uiSong) uiSong.textContent = songId || "–";
  }

  function setActiveStem(stem) {
    if (uiStem) uiStem.textContent = stem || "–";
  }

  // -------------------------------------------------------
  // Hover highlight behaviour
  // -------------------------------------------------------
  function highlightSong(songId) {
    tracks.forEach(t => {
      if (t.songId === songId) t.el.classList.add("song-hover");
      else t.el.classList.remove("song-hover");
    });
  }

  function clearSongHighlight() {
    tracks.forEach(t => t.el.classList.remove("song-hover"));
  }

  // Drop drone on first interaction
  let hasUserInteractedWithStems = false;
  function handleFirstStemInteraction() {
    if (hasUserInteractedWithStems) return;
    hasUserInteractedWithStems = true;

    dropDefault();
    ensureStarted();
  }
  // -------------------------------------------------------
  // 🔉 MINI WAVEFORM – gamaldags oscilloscope
  // -------------------------------------------------------
  const waveCanvas = container.querySelector("[data-waveform-canvas]");
  const waveCtx = waveCanvas?.getContext("2d");

  let audioCtx = null;
  let analyser = null;
  let dataArray = null;
  let waveRunning = false;
  let currentSource = null;

  function startWaveform(audioEl) {
    if (!waveCanvas || !waveCtx || !audioEl) {
      console.warn("asleep: no canvas or audioEl for waveform");
      return;
    }

    // resume audio context (Chrome policy)
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    // cleanup previous source
    try {
      if (currentSource) currentSource.disconnect();
    } catch (e) {
      // meh
    }

    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 1024;
    dataArray = new Uint8Array(analyser.fftSize);

    // IMPORTANT: createMediaElementSource má bara kalla einu sinni
    // þannig að við geymum source á audioEl sjálfum ef hann er ekki til.
    if (!audioEl._asleepSource) {
      audioEl._asleepSource = audioCtx.createMediaElementSource(audioEl);
    }

    currentSource = audioEl._asleepSource;
    currentSource.connect(analyser);
    analyser.connect(audioCtx.destination);

    waveRunning = true;
    renderWave();
    console.log("asleep: waveform started");
  }

  function stopWaveform() {
    waveRunning = false;
    if (waveCtx && waveCanvas) {
      waveCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);
    }
  }

  function renderWave() {
    if (!waveRunning || !analyser || !waveCtx || !waveCanvas) return;

    analyser.getByteTimeDomainData(dataArray);

    waveCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);
    waveCtx.lineWidth = 2;
    waveCtx.strokeStyle = "rgba(255,255,255,0.9)";

    waveCtx.beginPath();

    const slice = waveCanvas.width / dataArray.length;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      const v = dataArray[i] / 128.0 - 1.0;
      const y = v * 20 + waveCanvas.height / 2;

      if (i === 0) waveCtx.moveTo(x, y);
      else waveCtx.lineTo(x, y);

      x += slice;
    }

    waveCtx.stroke();
    requestAnimationFrame(renderWave);
  }

  // -------------------------------------------------------
  // Bind per-track events
  // -------------------------------------------------------
  tracks.forEach(track => {
    const el = track.el;

    el.addEventListener("click", handleFirstStemInteraction);

    el.addEventListener("click", () => {
      setActiveSong(track.songId);
      setActiveStem(track.stemName);

      // waveform notar FYRSTA stem í laginu
      const firstStem = tracks.find(t => t.songId === track.songId);
      if (firstStem?.audio) {
        startWaveform(firstStem.audio);
      }
    });

    el.addEventListener("mouseenter", () => highlightSong(track.songId));
    el.addEventListener("mouseleave", clearSongHighlight);
  });

  const stopBtn = container.querySelector("[data-mt-stop]");
  stopBtn?.addEventListener("click", () => {
    dropDefault();
    stopWaveform();
  });

}
