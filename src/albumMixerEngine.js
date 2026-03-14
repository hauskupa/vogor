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
  let endedSongId = null;
  let endCheckTimer = null;
  let bufferingTimer = null;
  let bufferingTrackIds = new Set();
  let isRecoveringBuffer = false;
  let recoveryTime = 0;

  function emit(type, detail = {}) {
    eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
  }

  function clearEndCheck() {
    if (endCheckTimer) {
      window.clearTimeout(endCheckTimer);
      endCheckTimer = null;
    }
  }

  function clearBufferingTimer() {
    if (bufferingTimer) {
      window.clearTimeout(bufferingTimer);
      bufferingTimer = null;
    }
  }

  function getTrackRemaining(track) {
    const audio = track?.audio;
    if (!audio || !Number.isFinite(audio.duration) || audio.duration <= 0) {
      return Number.POSITIVE_INFINITY;
    }
    return Math.max(0, audio.duration - (audio.currentTime || 0));
  }

  function isTrackNearEnd(track, tolerance = 0.18) {
    const audio = track?.audio;
    if (!audio) return true;
    if (audio.ended) return true;
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return false;
    return audio.currentTime >= Math.max(0, audio.duration - tolerance);
  }

  function hasBufferedAhead(audio, minimumAhead = 0.35) {
    if (!audio) return false;
    const { buffered, currentTime } = audio;
    for (let i = 0; i < buffered.length; i += 1) {
      const start = buffered.start(i);
      const end = buffered.end(i);
      if (currentTime >= start && currentTime <= end) {
        return end - currentTime >= minimumAhead;
      }
    }
    return false;
  }

  function clearTrackBuffering(trackId) {
    if (!trackId) return;
    if (!bufferingTrackIds.has(trackId)) return;
    bufferingTrackIds.delete(trackId);
  }

  function clearBufferingState() {
    clearBufferingTimer();
    bufferingTrackIds.clear();
    isRecoveringBuffer = false;
    recoveryTime = 0;
    emit("bufferingchange", { isBuffering: false, songId: currentSongId });
  }

  async function tryRecoverFromBuffering() {
    if (!isRecoveringBuffer || !currentSongId) return;

    const tracks = getCurrentTracks();
    if (!tracks.length) {
      clearBufferingState();
      return;
    }

    const allReady = tracks.every((track) => {
      const { audio } = track;
      if (!audio) return true;
      if (isTrackNearEnd(track, 0.2)) return true;
      return audio.readyState >= 3 && hasBufferedAhead(audio, 0.25);
    });

    if (!allReady) {
      bufferingTimer = window.setTimeout(() => {
        tryRecoverFromBuffering().catch(() => {});
      }, 220);
      return;
    }

    clearBufferingTimer();

    const resumeAt = Math.max(
      0,
      Math.min(
        recoveryTime,
        ...tracks
          .map((track) => {
            const duration = track.audio?.duration;
            return Number.isFinite(duration) && duration > 0 ? Math.max(0, duration - 0.2) : recoveryTime;
          })
      )
    );

    await Promise.allSettled(
      tracks.map(async (track) => {
        if (!track.audio) return;
        track.audio.currentTime = resumeAt;
        track.audio.playbackRate = currentPitch;
        await track.audio.play();
      })
    );

    isRecoveringBuffer = false;
    recoveryTime = 0;
    startTimeLoop();
    startResyncLoop();
    emit("bufferingchange", { isBuffering: false, songId: currentSongId });
  }

  function beginBufferRecovery(trackId) {
    if (!currentSongId || !isPlaying) return;

    bufferingTrackIds.add(trackId);

    if (isRecoveringBuffer) return;
    isRecoveringBuffer = true;
    recoveryTime = getCurrentTracks()[0]?.audio.currentTime || 0;
    stopTimeLoop();
    stopResyncLoop();
    getCurrentTracks().forEach((track) => {
      track.audio.pause();
      resetTrackNudge(track);
    });
    emit("bufferingchange", { isBuffering: true, songId: currentSongId });
    bufferingTimer = window.setTimeout(() => {
      tryRecoverFromBuffering().catch(() => {});
    }, 220);
  }

  function handleTrackEnded(songId) {
    if (!songId || currentSongId !== songId || endedSongId === songId) return;

    const tracks = getCurrentTracks();
    if (!tracks.length) return;

    const allEnded = tracks.every((track) => isTrackNearEnd(track, 0.14));
    const longestRemaining = tracks.reduce(
      (max, track) => Math.max(max, getTrackRemaining(track)),
      0
    );

    if (!allEnded || longestRemaining > 0.2) return;

    clearEndCheck();
    endCheckTimer = window.setTimeout(() => {
      endCheckTimer = null;

      const freshTracks = getCurrentTracks();
      if (!freshTracks.length || currentSongId !== songId || endedSongId === songId) {
        return;
      }

      const stillEnded = freshTracks.every((track) => isTrackNearEnd(track, 0.12));
      if (!stillEnded) return;

      endedSongId = songId;
      isPlaying = false;
      stopTimeLoop();
      stopResyncLoop();
      emit("playstatechange", { isPlaying, songId: currentSongId });
      emit("songended", { songId: currentSongId, song: getCurrentSong() });
    }, 120);
  }

  function buildTrack(track, index, songId) {
    const audio = new Audio(track.url);
    audio.crossOrigin = "anonymous";
    audio.preload = "auto";
    audio.preservesPitch = false;
    audio.mozPreservesPitch = false;
    audio.webkitPreservesPitch = false;
    audio.addEventListener("ended", () => {
      handleTrackEnded(songId);
    });
    audio.addEventListener("waiting", () => {
      audio.dataset.tm4Buffering = "true";
      beginBufferRecovery(track.id);
    });
    audio.addEventListener("stalled", () => {
      audio.dataset.tm4Buffering = "true";
      beginBufferRecovery(track.id);
    });
    audio.addEventListener("seeking", () => {
      audio.dataset.tm4Buffering = "true";
    });
    ["canplaythrough", "playing", "seeked", "timeupdate"].forEach((eventName) => {
      audio.addEventListener(eventName, () => {
        if (hasBufferedAhead(audio, 0.2) || audio.readyState >= 3) {
          delete audio.dataset.tm4Buffering;
          clearTrackBuffering(track.id);
          if (isRecoveringBuffer) {
            clearBufferingTimer();
            bufferingTimer = window.setTimeout(() => {
              tryRecoverFromBuffering().catch(() => {});
            }, 120);
          }
        }
      });
    });

    if (!audioContext || !masterGain) {
      return {
        ...track,
        audio,
        index,
        gain: 0,
        eqLow: 0,
        eqHigh: 0,
        pan: 0,
        fader: 0.7,
        nodes: null,
      };
    }

    const source = audioContext.createMediaElementSource(audio);
    const gainNode = audioContext.createGain();
    const colorInNode = audioContext.createGain();
    const compressorNode = audioContext.createDynamicsCompressor();
    const eqLowNode = audioContext.createBiquadFilter();
    const eqHighNode = audioContext.createBiquadFilter();
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
    eqLowNode.type = "lowshelf";
    eqLowNode.frequency.value = 180;
    eqLowNode.gain.value = 0;
    eqHighNode.type = "highshelf";
    eqHighNode.frequency.value = 3200;
    eqHighNode.gain.value = 0;
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
    compressorNode.connect(eqLowNode);
    eqLowNode.connect(eqHighNode);
    eqHighNode.connect(toneNode);
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
      eqLow: 0,
      eqHigh: 0,
      pan: 0,
      fader: 0.7,
      nodes: {
        source,
        gainNode,
        colorInNode,
        compressorNode,
        eqLowNode,
        eqHighNode,
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
      tracks: song.tracks.map((track, index) => buildTrack(track, index, song.id)),
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
    if (master.dataset.tm4Buffering === "true" && !hasBufferedAhead(master, 0.2)) return;

    const masterTime = master.currentTime;
    const EMA_ALPHA = 0.25;
    const SMALL_TOL = 0.04;
    const SEEK_TOL = 0.25;
    const NUDGE_RATE = 0.0125;
    const NUDGE_DURATION = 420;
    const EDGE_GUARD = 0.75;
    const masterRemaining = getTrackRemaining(masterTrack);

    if (masterTime < 0.35 || masterRemaining < EDGE_GUARD) {
      tracks.slice(1).forEach(resetTrackNudge);
      return;
    }

    tracks.slice(1).forEach((track) => {
      const audio = track.audio;
      if (!audio || audio.paused) return;
      if (audio.dataset.tm4Buffering === "true" && !hasBufferedAhead(audio, 0.2)) {
        resetTrackNudge(track);
        return;
      }
      if (getTrackRemaining(track) < EDGE_GUARD) {
        resetTrackNudge(track);
        return;
      }

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
    }, 900);
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
    clearEndCheck();
    clearBufferingState();
    song.tracks.forEach((track) => {
      track.audio.pause();
      track.audio.currentTime = 0;
      delete track.audio.dataset.tm4Buffering;
      resetTrackNudge(track);
    });
  }

  async function loadSong(songId, { autoplay = false } = {}) {
    const nextSong = songMap.get(songId);
    if (!nextSong) return null;

    const shouldResume = autoplay || isPlaying;
    endedSongId = null;
    clearEndCheck();
    clearBufferingState();

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
    endedSongId = null;
    clearEndCheck();
    clearBufferingState();

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
    endedSongId = null;
    clearEndCheck();
    clearBufferingState();
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
    endedSongId = null;
    clearEndCheck();
    clearBufferingState();
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
    currentPitch = clamp(value, 0.75, 1.25);
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

    if (key === "eqLow") {
      track.eqLow = clamp(value, -1, 1);
      track.nodes?.eqLowNode.gain.setValueAtTime(track.eqLow * 12, audioContext.currentTime);
    }

    if (key === "eqHigh") {
      track.eqHigh = clamp(value, -1, 1);
      track.nodes?.eqHighNode.gain.setValueAtTime(track.eqHigh * 12, audioContext.currentTime);
    }

    if (key === "fader") {
      track.fader = clamp(value, 0, 1);
      track.nodes?.faderNode.gain.setValueAtTime(track.fader, audioContext.currentTime);
    }

    emit("trackchange", {
      songId: currentSongId,
      trackId,
      gain: track.gain,
      eqLow: track.eqLow,
      eqHigh: track.eqHigh,
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
    setTrackEqLow: (trackId, value) => updateTrackValue(trackId, "eqLow", value),
    setTrackEqHigh: (trackId, value) => updateTrackValue(trackId, "eqHigh", value),
    setTrackPan: (trackId, value) => updateTrackValue(trackId, "pan", value),
    setTrackFader: (trackId, value) => updateTrackValue(trackId, "fader", value),
  };
}
