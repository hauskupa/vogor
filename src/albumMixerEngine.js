function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function createTapeCurve(amount = 0) {
  const samples = 2048;
  const curve = new Float32Array(samples);
  const drive = clamp(amount, 0, 1);
  const k = 4 + drive * 24;

  for (let i = 0; i < samples; i += 1) {
    const x = (i / (samples - 1)) * 2 - 1;
    curve[i] = ((1 + k) * x) / (1 + k * Math.abs(x));
  }

  return curve;
}

export function createAlbumMixerEngine({ songs = [] } = {}) {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  const audioContext = AudioContextCtor ? new AudioContextCtor() : null;
  const eventTarget = new EventTarget();
  const masterGain = audioContext ? audioContext.createGain() : null;
  const songMap = new Map();

  if (masterGain) {
    masterGain.gain.value = 0.7;
    masterGain.connect(audioContext.destination);
  }

  let currentSongId = null;
  let isPlaying = false;
  let timeTimer = null;
  let resyncTimer = null;
  let playRequestId = 0;
  let currentPitch = 1;

  function emit(type, detail = {}) {
    eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
  }

  function buildTrack(track, index) {
    const audio = new Audio(track.url);
    audio.crossOrigin = "anonymous";
    audio.preload = "auto";
    audio.preservesPitch = false;
    audio.mozPreservesPitch = false;
    audio.webkitPreservesPitch = false;

    if (!audioContext || !masterGain) {
      return {
        ...track,
        audio,
        index,
        gain: 0,
        pan: 0,
        fader: 0.7,
        nodes: null,
      };
    }

    const source = audioContext.createMediaElementSource(audio);
    const gainNode = audioContext.createGain();
    const colorInNode = audioContext.createGain();
    const compressorNode = audioContext.createDynamicsCompressor();
    const toneNode = audioContext.createBiquadFilter();
    const saturatorNode = audioContext.createWaveShaper();
    const makeupNode = audioContext.createGain();
    const panNode = audioContext.createStereoPanner();
    const faderNode = audioContext.createGain();
    const analyserNode = audioContext.createAnalyser();

    gainNode.gain.value = 1;
    colorInNode.gain.value = 1;
    compressorNode.threshold.value = -20;
    compressorNode.knee.value = 20;
    compressorNode.ratio.value = 1.8;
    compressorNode.attack.value = 0.01;
    compressorNode.release.value = 0.08;
    toneNode.type = "lowpass";
    toneNode.frequency.value = 17000;
    toneNode.Q.value = 0.0001;
    saturatorNode.curve = createTapeCurve(0.06);
    saturatorNode.oversample = "2x";
    makeupNode.gain.value = 1;
    panNode.pan.value = 0;
    faderNode.gain.value = 1;
    analyserNode.fftSize = 256;
    analyserNode.smoothingTimeConstant = 0.82;

    source.connect(gainNode);
    gainNode.connect(colorInNode);
    colorInNode.connect(compressorNode);
    compressorNode.connect(toneNode);
    toneNode.connect(saturatorNode);
    saturatorNode.connect(makeupNode);
    makeupNode.connect(panNode);
    panNode.connect(faderNode);
    faderNode.connect(masterGain);
    faderNode.connect(analyserNode);

    return {
      ...track,
      audio,
      index,
      gain: 0,
      pan: 0,
      fader: 0.7,
      nodes: {
        source,
        gainNode,
        colorInNode,
        compressorNode,
        toneNode,
        saturatorNode,
        makeupNode,
        panNode,
        faderNode,
        analyserNode,
      },
      _driftEMA: undefined,
      _nudgeTimeout: null,
    };
  }

  songs.forEach((song) => {
    songMap.set(song.id, {
      ...song,
      tracks: song.tracks.map((track, index) => buildTrack(track, index)),
    });
  });

  function getCurrentSong() {
    return currentSongId ? songMap.get(currentSongId) || null : null;
  }

  function getCurrentTracks() {
    return getCurrentSong()?.tracks || [];
  }

  function emitTimeUpdate() {
    const first = getCurrentTracks()[0];
    emit("timeupdate", {
      songId: currentSongId,
      currentTime: first?.audio.currentTime || 0,
      duration: first?.audio.duration || 0,
    });
  }

  function startTimeLoop() {
    stopTimeLoop();
    timeTimer = window.setInterval(() => {
      emitTimeUpdate();
    }, 200);
  }

  function stopTimeLoop() {
    if (timeTimer) {
      window.clearInterval(timeTimer);
      timeTimer = null;
    }
  }

  function resetTrackNudge(track) {
    if (track?._nudgeTimeout) {
      window.clearTimeout(track._nudgeTimeout);
      track._nudgeTimeout = null;
    }
    if (track?.audio) {
      track.audio.playbackRate = currentPitch;
    }
    track._driftEMA = undefined;
  }

  function stopResyncLoop() {
    if (resyncTimer) {
      window.clearInterval(resyncTimer);
      resyncTimer = null;
    }
    getCurrentTracks().forEach(resetTrackNudge);
  }

  function resyncCurrentSong() {
    const tracks = getCurrentTracks();
    const masterTrack = tracks[0];
    const master = masterTrack?.audio;
    if (!master || master.paused) return;

    const masterTime = master.currentTime;
    const EMA_ALPHA = 0.25;
    const SMALL_TOL = 0.05;
    const SEEK_TOL = 0.25;
    const NUDGE_RATE = 0.02;
    const NUDGE_DURATION = 600;

    tracks.slice(1).forEach((track) => {
      const audio = track.audio;
      if (!audio || audio.paused) return;

      let measured = audio.currentTime - masterTime;
      if (!Number.isFinite(measured)) measured = 0;

      track._driftEMA =
        typeof track._driftEMA === "number"
          ? EMA_ALPHA * measured + (1 - EMA_ALPHA) * track._driftEMA
          : measured;

      const drift = track._driftEMA;

      if (Math.abs(drift) <= SMALL_TOL) {
        resetTrackNudge(track);
        return;
      }

      if (Math.abs(drift) >= SEEK_TOL) {
        audio.currentTime = masterTime;
        resetTrackNudge(track);
        return;
      }

      const direction = drift > 0 ? 1 : -1;
      audio.playbackRate = currentPitch - direction * NUDGE_RATE;

      if (track._nudgeTimeout) {
        window.clearTimeout(track._nudgeTimeout);
      }

      track._nudgeTimeout = window.setTimeout(() => {
        audio.playbackRate = currentPitch;
        track._nudgeTimeout = null;
      }, NUDGE_DURATION);
    });
  }

  function startResyncLoop() {
    stopResyncLoop();
    if (!currentSongId) return;
    resyncTimer = window.setInterval(() => {
      resyncCurrentSong();
    }, 800);
  }

  async function ensureContext() {
    if (!audioContext) return;
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }
  }

  function stopSong(song) {
    if (!song) return;
    playRequestId += 1;
    song.tracks.forEach((track) => {
      track.audio.pause();
      track.audio.currentTime = 0;
      resetTrackNudge(track);
    });
  }

  async function loadSong(songId, { autoplay = false } = {}) {
    const nextSong = songMap.get(songId);
    if (!nextSong) return null;

    const shouldResume = autoplay || isPlaying;

    if (currentSongId && currentSongId !== songId) {
      stopSong(getCurrentSong());
    }

    currentSongId = songId;
    emit("songchange", { songId, song: nextSong });
    emitTimeUpdate();

    if (shouldResume) {
      await play();
    }

    return nextSong;
  }

  async function play() {
    const requestId = ++playRequestId;

    if (!currentSongId) {
      const firstSong = songs[0];
      if (!firstSong) return;
      await loadSong(firstSong.id);
    }

    const tracks = getCurrentTracks();
    if (!tracks.length) return;

    await ensureContext();

    const startAt = tracks[0].audio.currentTime || 0;
    const results = await Promise.allSettled(
      tracks.map(async (track) => {
        if (Math.abs(track.audio.currentTime - startAt) > 0.05) {
          track.audio.currentTime = startAt;
        }
        track.audio.playbackRate = currentPitch;
        await track.audio.play();
        return track.id;
      })
    );

    if (requestId !== playRequestId) return;

    results.forEach((result, index) => {
      if (result.status !== "rejected") return;

      const reasonName = result.reason?.name || null;
      if (reasonName === "AbortError") return;

      console.warn("album-mixer: track play failed", {
        trackId: tracks[index]?.id || null,
        songId: currentSongId,
        error: reasonName,
        message: result.reason?.message || String(result.reason),
      });
    });

    const anyStarted = results.some((result) => result.status === "fulfilled");
    if (!anyStarted) {
      throw new Error(`album-mixer: no tracks started for song ${currentSongId}`);
    }

    isPlaying = true;
    startTimeLoop();
    startResyncLoop();
    emit("playstatechange", { isPlaying, songId: currentSongId });
    emitTimeUpdate();
  }

  function pause() {
    playRequestId += 1;
    getCurrentTracks().forEach((track) => {
      track.audio.pause();
    });
    isPlaying = false;
    stopTimeLoop();
    stopResyncLoop();
    emit("playstatechange", { isPlaying, songId: currentSongId });
  }

  function stop() {
    playRequestId += 1;
    stopSong(getCurrentSong());
    isPlaying = false;
    stopTimeLoop();
    stopResyncLoop();
    emit("playstatechange", { isPlaying, songId: currentSongId });
    emitTimeUpdate();
  }

  function seek(time) {
    const safeTime = Math.max(0, time || 0);
    getCurrentTracks().forEach((track) => {
      track.audio.currentTime = safeTime;
    });
    emitTimeUpdate();
  }

  function setMasterVolume(value) {
    const nextValue = clamp(value, 0, 1);
    if (masterGain) {
      masterGain.gain.value = nextValue;
    }
    emit("masterchange", { value: nextValue });
  }

  function setPitch(value) {
    currentPitch = clamp(value, 0.85, 1.15);
    getCurrentTracks().forEach((track) => {
      if (!track._nudgeTimeout) {
        track.audio.playbackRate = currentPitch;
      }
    });
    emit("pitchchange", { value: currentPitch, songId: currentSongId });
  }

  function getMeterLevels() {
    return getCurrentTracks().map((track) => {
      const analyserNode = track.nodes?.analyserNode;
      if (!analyserNode) {
        return {
          trackId: track.id,
          level: 0,
        };
      }

      const data = new Uint8Array(analyserNode.frequencyBinCount);
      analyserNode.getByteTimeDomainData(data);

      let sumSquares = 0;
      for (let i = 0; i < data.length; i += 1) {
        const centered = (data[i] - 128) / 128;
        sumSquares += centered * centered;
      }

      const rms = Math.sqrt(sumSquares / data.length);
      return {
        trackId: track.id,
        level: clamp(rms * 2.8, 0, 1),
      };
    });
  }

  function updateTrackValue(trackId, key, value) {
    const track = getCurrentTracks().find((item) => item.id === trackId);
    if (!track) return;

    if (key === "gain") {
      track.gain = clamp(value, 0, 2);
      if (track.nodes && audioContext) {
        const drive = track.gain / 2;
        const inputGain = 1 + drive * 1.5;
        const outputTrim = 1 / (1 + drive * 0.45);
        const toneFrequency = 17000 - drive * 2500;
        const threshold = -20 - drive * 6;
        const ratio = 1.8 + drive * 2.2;
        const knee = 20 - drive * 4;

        // Gain is a color stage; level stays on the fader.
        track.nodes.gainNode.gain.setValueAtTime(1, audioContext.currentTime);
        track.nodes.colorInNode.gain.setValueAtTime(inputGain, audioContext.currentTime);
        track.nodes.compressorNode.threshold.setValueAtTime(threshold, audioContext.currentTime);
        track.nodes.compressorNode.ratio.setValueAtTime(ratio, audioContext.currentTime);
        track.nodes.compressorNode.knee.setValueAtTime(knee, audioContext.currentTime);
        track.nodes.makeupNode.gain.setValueAtTime(outputTrim, audioContext.currentTime);
        track.nodes.toneNode.frequency.setValueAtTime(toneFrequency, audioContext.currentTime);
        track.nodes.saturatorNode.curve = createTapeCurve(0.06 + drive * 0.34);
      }
    }

    if (key === "pan") {
      track.pan = clamp(value, -1, 1);
      track.nodes?.panNode.pan.setValueAtTime(track.pan, audioContext.currentTime);
    }

    if (key === "fader") {
      track.fader = clamp(value, 0, 1);
      track.nodes?.faderNode.gain.setValueAtTime(track.fader, audioContext.currentTime);
    }

    emit("trackchange", {
      songId: currentSongId,
      trackId,
      gain: track.gain,
      pan: track.pan,
      fader: track.fader,
    });
  }

  function getState() {
    const song = getCurrentSong();
    const first = song?.tracks[0];
    return {
      currentSongId,
      isPlaying,
      currentTime: first?.audio.currentTime || 0,
      duration: first?.audio.duration || 0,
      masterVolume: masterGain?.gain.value ?? 1,
      pitch: currentPitch,
      song,
    };
  }

  return {
    addEventListener: (...args) => eventTarget.addEventListener(...args),
    removeEventListener: (...args) => eventTarget.removeEventListener(...args),
    getSongs: () => songs.map((song) => ({ ...song })),
    getState,
    loadSong,
    play,
    pause,
    stop,
    seek,
    setMasterVolume,
    setPitch,
    getMeterLevels,
    setTrackGain: (trackId, value) => updateTrackValue(trackId, "gain", value),
    setTrackPan: (trackId, value) => updateTrackValue(trackId, "pan", value),
    setTrackFader: (trackId, value) => updateTrackValue(trackId, "fader", value),
  };
}
