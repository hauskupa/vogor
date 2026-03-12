import { createAlbumMixerEngine } from "./albumMixerEngine.js";
import { albumMixerSongs } from "./albumMixerSongs.js";

function normalizeAudioUrl(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url, window.location.href);

    // Keep Dropbox share links in markup/docs, but stream from the direct host.
    if (parsed.hostname === "www.dropbox.com") {
      parsed.hostname = "dl.dropboxusercontent.com";
    }

    return parsed.toString();
  } catch {
    return url;
  }
}

function formatTime(value) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
  const minutes = Math.floor(safeValue / 60);
  const seconds = Math.floor(safeValue % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function formatTapeCounter(value) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
  return String(Math.floor(safeValue) % 1000).padStart(3, "0");
}

function formatDbFromLinear(value) {
  if (value <= 0.0001) return "-inf dB";
  const db = 20 * Math.log10(value);
  if (Math.abs(db) < 0.05) return "0 dB";
  return `${db > 0 ? "+" : ""}${db.toFixed(1)} dB`;
}

function formatDriveValue(value) {
  const db = (value / 2) * 12;
  if (db < 0.05) return "0 dB";
  return `+${db.toFixed(1)} dB`;
}

function formatEqValue(value) {
  const db = value * 12;
  if (Math.abs(db) < 0.05) return "0 dB";
  return `${db > 0 ? "+" : ""}${db.toFixed(1)} dB`;
}

function formatConsoleScale(value) {
  return (value * 10).toFixed(1);
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function getTrackSlotId(index) {
  return `track${index + 1}`;
}

function compareSongsBySide(a, b) {
  const sideCompare = String(a.side || "A").localeCompare(String(b.side || "A"));
  if (sideCompare !== 0) return sideCompare;
  const indexCompare = (a.sideIndex || 0) - (b.sideIndex || 0);
  if (indexCompare !== 0) return indexCompare;
  return 0;
}

function buildSideMetadata(songs, durationMap) {
  const byId = new Map();
  const sideSongs = new Map();
  const orderedSongs = [...songs].sort(compareSongsBySide);

  orderedSongs.forEach((song) => {
    const side = song.side || "A";
    const list = sideSongs.get(side) || [];
    list.push(song);
    sideSongs.set(side, list);
  });

  sideSongs.forEach((list, side) => {
    let elapsed = 0;
    list.forEach((song, index) => {
      const duration = durationMap.get(song.id) || 0;
      const cueNumber = song.sideIndex || index + 1;
      byId.set(song.id, {
        ...song,
        side,
        cueNumber,
        cueLabel: `${side}${cueNumber}`,
        sideStart: elapsed,
        duration,
        sideTotal: 0,
      });
      elapsed += duration;
    });

    list.forEach((song) => {
      const meta = byId.get(song.id);
      if (meta) {
        meta.sideTotal = elapsed;
      }
    });
  });

  return { byId, sideSongs, orderedSongs };
}

function setDialValue(input, value, min, max) {
  const range = max - min || 1;
  const normalized = (value - min) / range;
  const turn = String(clamp01(normalized));
  input.style.setProperty("--turn", turn);
  input.parentElement?.style.setProperty("--turn", turn);
  input.closest(".tm4-dial, .tm4-knob-visual, .tm4-knob")?.style.setProperty("--turn", turn);
}

function setFaderVisualValue(input, value, min, max) {
  const range = max - min || 1;
  const normalized = clamp01((value - min) / range);
  input.style.setProperty("--fader-position", String(normalized));
  input
    .closest(".tm4-fader-visual, .tm4-fader-wrap, .tm4-master-strip")
    ?.style.setProperty("--fader-position", String(normalized));
}

function bindRangePointerState(host, input) {
  if (!host || !input || host.dataset.pointerBound === "true") return;
  host.dataset.pointerBound = "true";
  host.style.touchAction = "none";
  input.style.touchAction = "none";
}

function attachDialInteraction(dial, input, min, max, onChange) {
  let startY = 0;
  let startValue = 0;
  let dragging = false;

  function updateFromClientY(clientY) {
    const deltaY = startY - clientY;
    const range = max - min;
    const sensitivity = range / 220;
    const nextValue = Math.min(max, Math.max(min, startValue + deltaY * sensitivity));
    input.value = String(nextValue);
    setDialValue(input, nextValue, min, max);
    onChange(nextValue);
  }

  function onPointerMove(event) {
    if (!dragging) return;
    updateFromClientY(event.clientY);
  }

  function onPointerUp() {
    dragging = false;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }

  bindRangePointerState(dial, input);

  dial.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    dragging = true;
    startY = event.clientY;
    startValue = parseFloat(input.value);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  });

  dial.addEventListener("wheel", (event) => {
    event.preventDefault();
    const currentValue = parseFloat(input.value);
    const step = parseFloat(input.step || "0.01");
    const direction = event.deltaY < 0 ? 1 : -1;
    const nextValue = Math.min(max, Math.max(min, currentValue + direction * step));
    input.value = String(nextValue);
    setDialValue(input, nextValue, min, max);
    onChange(nextValue);
  });
}

function attachFaderInteraction(host, input, min, max, onChange) {
  let startY = 0;
  let startValue = 0;
  let dragging = false;

  function updateFromClientY(clientY) {
    const rect = host.getBoundingClientRect();
    const deltaY = startY - clientY;
    const range = max - min;
    const sensitivity = range / Math.max(rect.height || 180, 120);
    const nextValue = Math.min(max, Math.max(min, startValue + deltaY * sensitivity));
    input.value = String(nextValue);
    setFaderVisualValue(input, nextValue, min, max);
    onChange(nextValue);
  }

  function onPointerMove(event) {
    if (!dragging) return;
    event.preventDefault();
    updateFromClientY(event.clientY);
  }

  function onPointerUp() {
    dragging = false;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }

  bindRangePointerState(host, input);

  host.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    dragging = true;
    startY = event.clientY;
    startValue = parseFloat(input.value);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);
  });

  host.addEventListener("wheel", (event) => {
    event.preventDefault();
    const currentValue = parseFloat(input.value);
    const step = parseFloat(input.step || "0.01");
    const direction = event.deltaY < 0 ? 1 : -1;
    const nextValue = Math.min(max, Math.max(min, currentValue + direction * step));
    input.value = String(nextValue);
    setFaderVisualValue(input, nextValue, min, max);
    onChange(nextValue);
  });
}

function createKnob(labelText, input, normalizedValue, onChange) {
  const label = document.createElement("label");
  label.className = "tm4-knob";

  const title = document.createElement("span");
  title.textContent = labelText;

  const dial = document.createElement("span");
  dial.className = "tm4-dial";
  dial.appendChild(input);

  label.appendChild(title);
  label.appendChild(dial);
  const initialTurn = String(clamp01(normalizedValue));
  input.style.setProperty("--turn", initialTurn);
  dial.style.setProperty("--turn", initialTurn);

  attachDialInteraction(
    dial,
    input,
    parseFloat(input.min || "0"),
    parseFloat(input.max || "1"),
    onChange
  );

  return label;
}

function findControlInput(wrapper) {
  return wrapper?.querySelector('input[type="range"]') || null;
}

function findKnobVisual(wrapper) {
  if (!wrapper) return null;
  if (wrapper.matches(".tm4-dial, .tm4-knob-visual")) {
    return wrapper;
  }
  return wrapper.querySelector(".tm4-dial, .tm4-knob-visual");
}

function findReadoutTarget(wrapper) {
  if (!wrapper) return null;
  return wrapper.querySelector("[data-readout]") || wrapper.querySelector(".tm4-readout");
}

function setReadoutText(wrapper, fallbackNode, text) {
  const readoutEl = findReadoutTarget(wrapper);
  if (readoutEl) {
    readoutEl.textContent = text;
    return readoutEl;
  }

  if (fallbackNode) {
    fallbackNode.textContent = text;
    return fallbackNode;
  }

  return null;
}

function findFaderVisual(wrapper) {
  if (!wrapper) return null;
  if (wrapper.matches(".tm4-fader-visual")) {
    return wrapper;
  }
  return wrapper.querySelector(".tm4-fader-visual");
}

function cloneTrackStripTemplate(container) {
  const template = container.querySelector("[data-mixer-track-template]");
  if (!template) {
    return null;
  }

  let fragment = null;
  if (template instanceof HTMLTemplateElement) {
    fragment = template.content.cloneNode(true);
  } else {
    fragment = template.cloneNode(true);
  }

  const strip = fragment.querySelector(".tm4-strip");
  return strip instanceof HTMLElement ? strip : null;
}

function getSongs() {
  return albumMixerSongs
    .map((song, index) => ({
      ...song,
      side: song.side || "A",
      sideIndex: Number.isFinite(song.sideIndex) ? song.sideIndex : index + 1,
      tracks: (song.tracks || [])
        .map((track, index) => ({
          id: track.id || `track-${index + 1}`,
          title: track.title || `Track ${index + 1}`,
          url: normalizeAudioUrl(track.url || ""),
        }))
        .filter((track) => track.url),
    }))
    .filter((song) => song.id && song.tracks.length === 4);
}

export function setupAlbumMixer(root = document) {
  const container = root.querySelector("[data-album-mixer]");
  if (!container) return null;

  const songs = getSongs();
  if (!songs.length) {
    console.warn("album-mixer: no valid 4-track songs found");
    return null;
  }

  const engine = createAlbumMixerEngine({ songs });

  const sideAList = container.querySelector("[data-mixer-side-a]");
  const sideBList = container.querySelector("[data-mixer-side-b]");
  const titleEl = container.querySelector("[data-mixer-current-song]");
  const cassetteTitleEl = container.querySelector("[data-mixer-cassette-title]");
  const cassetteTimeEl = container.querySelector("[data-mixer-cassette-time]");
  const cassetteSideEl = container.querySelector("[data-mixer-current-side]");
  const cassetteEl = container.querySelector("[data-cassette]");
  const tracksEl = container.querySelector("[data-mixer-track-controls]");
  const seekEl = container.querySelector("[data-mixer-seek]");
  const counterEl = container.querySelector("[data-mixer-counter]");
  const timeEl = container.querySelector("[data-mixer-time]");
  const masterEl = container.querySelector("[data-mixer-master]");
  const masterValueEl = container.querySelector("[data-mixer-master-value]");
  const pitchKnobEl = container.querySelector("[data-mixer-pitch-knob]");
  const pitchValueEl = container.querySelector("[data-mixer-pitch-value]");
  const prevBtn = container.querySelector("[data-mixer-prev]");
  const nextBtn = container.querySelector("[data-mixer-next]");
  let meterFrame = 0;
  const navAudio = new Audio("https://audiocdn.epidemicsound.com/lqmp3/01KJCP9BWYZXJ0JTZ1Z4XRKVC4.mp3");
  navAudio.preload = "auto";
  const durationMap = new Map();
  let sideMeta = buildSideMetadata(songs, durationMap);

  function updateSideMetadata() {
    sideMeta = buildSideMetadata(songs, durationMap);
  }

  function getCurrentSongIndex() {
    const { currentSongId } = engine.getState();
    const index = songs.findIndex((song) => song.id === currentSongId);
    return index >= 0 ? index : 0;
  }

  function rememberSongDuration(songId, duration) {
    if (!songId || !Number.isFinite(duration) || duration <= 0) return;
    const previous = durationMap.get(songId);
    if (previous && Math.abs(previous - duration) < 0.01) return;
    durationMap.set(songId, duration);
    updateSideMetadata();
  }

  function loadSongMetadata(song) {
    const firstTrack = song?.tracks?.[0];
    if (!firstTrack?.url || durationMap.has(song.id)) return;

    const probe = new Audio(firstTrack.url);
    probe.preload = "metadata";

    const commitDuration = () => {
      rememberSongDuration(song.id, probe.duration);
    };

    probe.addEventListener("loadedmetadata", commitDuration, { once: true });
    probe.addEventListener("durationchange", commitDuration, { once: true });
  }

  songs.forEach(loadSongMetadata);

  async function navigateSong(direction) {
    const { currentSongId, currentTime } = engine.getState();
    const currentMeta = sideMeta.byId.get(currentSongId);
    let targetSong = null;

    if (direction < 0 && currentTime > 3) {
      engine.seek(0);
      syncTimeline();
      return;
    }

    if (currentMeta) {
      const currentSideSongs = sideMeta.sideSongs.get(currentMeta.side) || [];
      const sideIndex = currentSideSongs.findIndex((song) => song.id === currentSongId);
      const nextSideSong = currentSideSongs[sideIndex + direction];

      if (nextSideSong) {
        targetSong = nextSideSong;
      } else {
        const orderedIndex = sideMeta.orderedSongs.findIndex((song) => song.id === currentSongId);
        const wrappedIndex =
          (orderedIndex + direction + sideMeta.orderedSongs.length) % sideMeta.orderedSongs.length;
        targetSong = sideMeta.orderedSongs[wrappedIndex];
      }
    }

    if (!targetSong) {
      const currentIndex = getCurrentSongIndex();
      const nextIndex = (currentIndex + direction + songs.length) % songs.length;
      targetSong = songs[nextIndex];
    }
    const { isPlaying } = engine.getState();

    try {
      navAudio.currentTime = 0;
      const promise = navAudio.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {});
      }
    } catch {}

    await engine.loadSong(targetSong.id, { autoplay: isPlaying });
    renderTrackControls();
    syncSongButtons();
  }

  function renderSongLists() {
    [sideAList, sideBList].forEach((list) => {
      if (list) list.innerHTML = "";
    });

    songs.forEach((song) => {
      const button = document.createElement("button");
      button.type = "button";
      const meta = sideMeta.byId.get(song.id);
      button.textContent = meta ? `${meta.cueLabel} ${song.title}` : song.title;
      button.dataset.songId = song.id;
      button.className = "tm4-song-button";
      button.addEventListener("click", async () => {
        await engine.loadSong(song.id);
        renderTrackControls();
        syncSongButtons();
      });

      if (song.side === "B") {
        sideBList?.appendChild(button);
      } else {
        sideAList?.appendChild(button);
      }
    });
  }

  function syncSongButtons() {
    const { currentSongId } = engine.getState();
    container.querySelectorAll("[data-song-id]").forEach((button) => {
      button.toggleAttribute("data-active", button.dataset.songId === currentSongId);
    });
  }

  function renderTrackControls() {
    if (!tracksEl) return;

    const { song } = engine.getState();
    tracksEl.innerHTML = "";

    if (!song) return;

    titleEl && (titleEl.textContent = song.title);

    song.tracks.forEach((track, trackIndex) => {
      const trackSlotId = getTrackSlotId(trackIndex);
      const strip = cloneTrackStripTemplate(container) || document.createElement("section");
      if (!strip.classList.contains("tm4-strip")) {
        strip.className = "tm4-strip";
      }

      const title = strip.querySelector("[data-track-title]") || document.createElement("div");
      title.className = "tm4-strip-title";
      title.textContent = track.title;

      const scale = strip.querySelector(".tm4-strip-scale") || document.createElement("div");
      scale.className = "tm4-strip-scale";

      const gain = document.createElement("input");
      gain.type = "range";
      gain.min = "0";
      gain.max = "2";
      gain.step = "0.01";
      gain.value = String(track.gain ?? 0);
      const onGainChange = (nextValue) => {
        setDialValue(gain, nextValue, 0, 2);
        engine.setTrackGain(track.id, nextValue);
        setReadoutText(gainLabel, gainValue, formatDriveValue(nextValue));
      };
      gain.addEventListener("input", (event) => {
        onGainChange(parseFloat(event.target.value));
      });

      const pan = document.createElement("input");
      pan.type = "range";
      pan.min = "-1";
      pan.max = "1";
      pan.step = "0.01";
      pan.value = String(track.pan ?? 0);
      const onPanChange = (nextValue) => {
        setDialValue(pan, nextValue, -1, 1);
        engine.setTrackPan(track.id, nextValue);
        setReadoutText(
          panLabel,
          panValue,
          nextValue === 0 ? "C" : nextValue < 0 ? `L${Math.abs(nextValue).toFixed(1)}` : `R${nextValue.toFixed(1)}`
        );
      };
      pan.addEventListener("input", (event) => {
        onPanChange(parseFloat(event.target.value));
      });

      const eqHigh = document.createElement("input");
      eqHigh.type = "range";
      eqHigh.min = "-1";
      eqHigh.max = "1";
      eqHigh.step = "0.01";
      eqHigh.value = String(track.eqHigh ?? 0);
      const onEqHighChange = (nextValue) => {
        setDialValue(eqHigh, nextValue, -1, 1);
        engine.setTrackEqHigh(track.id, nextValue);
        setReadoutText(eqHighLabel, eqHighValue, formatEqValue(nextValue));
      };
      eqHigh.addEventListener("input", (event) => {
        onEqHighChange(parseFloat(event.target.value));
      });

      const eqLow = document.createElement("input");
      eqLow.type = "range";
      eqLow.min = "-1";
      eqLow.max = "1";
      eqLow.step = "0.01";
      eqLow.value = String(track.eqLow ?? 0);
      const onEqLowChange = (nextValue) => {
        setDialValue(eqLow, nextValue, -1, 1);
        engine.setTrackEqLow(track.id, nextValue);
        setReadoutText(eqLowLabel, eqLowValue, formatEqValue(nextValue));
      };
      eqLow.addEventListener("input", (event) => {
        onEqLowChange(parseFloat(event.target.value));
      });

      const fader = document.createElement("input");
      fader.type = "range";
      fader.min = "0";
      fader.max = "1";
      fader.step = "0.01";
      fader.value = String(track.fader ?? 0.7);
      fader.className = "tm4-fader";
      fader.addEventListener("input", (event) => {
        const nextValue = parseFloat(event.target.value);
        setFaderVisualValue(fader, nextValue, 0, 1);
        engine.setTrackFader(track.id, nextValue);
        levelValue.textContent = formatConsoleScale(nextValue);
      });

      const gainValue = document.createElement("span");
      gainValue.className = "tm4-readout";
      gainValue.textContent = formatDriveValue(track.gain ?? 0);

      const panValue = document.createElement("span");
      panValue.className = "tm4-readout";
      panValue.textContent = track.pan ? (track.pan < 0 ? `L${Math.abs(track.pan).toFixed(1)}` : `R${track.pan.toFixed(1)}`) : "C";

      const eqHighValue = document.createElement("span");
      eqHighValue.className = "tm4-readout";
      eqHighValue.textContent = formatEqValue(track.eqHigh ?? 0);

      const eqLowValue = document.createElement("span");
      eqLowValue.className = "tm4-readout";
      eqLowValue.textContent = formatEqValue(track.eqLow ?? 0);

      const levelValue = document.createElement("span");
      levelValue.className = "tm4-readout";
      levelValue.textContent = formatConsoleScale(track.fader ?? 0.7);

      const controls = strip.querySelector(".tm4-strip-controls") || document.createElement("div");
      controls.className = "tm4-strip-controls";

      const gainLabel =
        controls.querySelector('[data-control="gain"]') || createKnob("Gain", gain, (track.gain ?? 0) / 2, onGainChange);
      const eqHighLabel =
        controls.querySelector('[data-control="eq-high"]') ||
        createKnob("EQ Hi", eqHigh, ((track.eqHigh ?? 0) + 1) / 2, onEqHighChange);
      const eqLowLabel =
        controls.querySelector('[data-control="eq-low"]') ||
        createKnob("EQ Lo", eqLow, ((track.eqLow ?? 0) + 1) / 2, onEqLowChange);
      const panLabel =
        controls.querySelector('[data-control="pan"]') || createKnob("Pan", pan, ((track.pan ?? 0) + 1) / 2, onPanChange);

      const bindKnob = (label, inputEl, valueEl, value, min, max) => {
        const dialEl = findKnobVisual(label);
        const existingInput = findControlInput(label);

        if (existingInput && existingInput !== inputEl) {
          existingInput.replaceWith(inputEl);
        } else if (dialEl && !existingInput) {
          dialEl.appendChild(inputEl);
        }

        if (!setReadoutText(label, valueEl, valueEl.textContent)) {
          label.appendChild(valueEl);
        }

        setDialValue(inputEl, value, min, max);
      };

      bindKnob(gainLabel, gain, gainValue, track.gain ?? 0, 0, 2);
      bindKnob(eqHighLabel, eqHigh, eqHighValue, track.eqHigh ?? 0, -1, 1);
      bindKnob(eqLowLabel, eqLow, eqLowValue, track.eqLow ?? 0, -1, 1);
      bindKnob(panLabel, pan, panValue, track.pan ?? 0, -1, 1);

      if (!controls.contains(gainLabel)) controls.appendChild(gainLabel);
      if (!controls.contains(eqHighLabel)) controls.appendChild(eqHighLabel);
      if (!controls.contains(eqLowLabel)) controls.appendChild(eqLowLabel);
      if (!controls.contains(panLabel)) controls.appendChild(panLabel);

      const faderLabel = strip.querySelector(".tm4-fader-wrap") || document.createElement("label");
      faderLabel.className = "tm4-fader-wrap";
      if (!faderLabel.querySelector(":scope > span")) {
        const faderTitle = document.createElement("span");
        faderTitle.textContent = "Level";
        faderLabel.prepend(faderTitle);
      }
      const existingFader = faderLabel.querySelector("input");
      const existingLevelReadout = faderLabel.querySelector(".tm4-readout");
      if (existingFader && existingFader !== fader) {
        existingFader.replaceWith(fader);
      } else if (!existingFader) {
        faderLabel.appendChild(fader);
      }
      if (existingLevelReadout && existingLevelReadout !== levelValue) {
        existingLevelReadout.replaceWith(levelValue);
      } else if (!existingLevelReadout) {
        faderLabel.appendChild(levelValue);
      }
      setFaderVisualValue(fader, track.fader ?? 0.7, 0, 1);
      const faderVisual = findFaderVisual(faderLabel) || faderLabel;
      attachFaderInteraction(faderVisual, fader, 0, 1, (nextValue) => {
        engine.setTrackFader(track.id, nextValue);
        levelValue.textContent = formatConsoleScale(nextValue);
      });

      if (!strip.contains(title)) strip.appendChild(title);
      if (!strip.contains(scale)) strip.appendChild(scale);
      if (!strip.contains(controls)) strip.appendChild(controls);
      if (!strip.contains(faderLabel)) strip.appendChild(faderLabel);

      tracksEl.appendChild(strip);
    });
  }

  function syncTimeline() {
    const { currentSongId, currentTime, duration, song } = engine.getState();
    rememberSongDuration(currentSongId, duration);
    const currentMeta = sideMeta.byId.get(currentSongId);
    const progress = duration > 0 ? Math.min(currentTime / duration, 1) : 0;
    const leftScale = 1 - progress * 0.35;
    const rightScale = 0.65 + progress * 0.35;
    const sideElapsed = (currentMeta?.sideStart || 0) + currentTime;
    const sideTotal = currentMeta?.sideTotal || duration || 0;
    const cueLabel = currentMeta?.cueLabel || song?.side || "-";

    if (seekEl) {
      seekEl.max = String(duration || 0);
      seekEl.value = String(Math.min(currentTime, duration || 0));
    }
    if (timeEl) {
      timeEl.textContent = `${cueLabel} ${formatTime(sideElapsed)} / ${formatTime(sideTotal)}`;
    }
    if (counterEl) {
      counterEl.textContent = formatTapeCounter(sideElapsed);
    }
    if (cassetteTimeEl) {
      cassetteTimeEl.textContent = `${cueLabel} ${formatTime(sideElapsed)} / ${formatTime(sideTotal)}`;
    }
    container.style.setProperty("--left-reel-scale", String(leftScale));
    container.style.setProperty("--right-reel-scale", String(rightScale));
  }

  function syncTransportState() {
    const { isPlaying, pitch, song } = engine.getState();
    const currentMeta = sideMeta.byId.get(song?.id || "");
    container.classList.toggle("is-playing", Boolean(isPlaying));
    cassetteEl?.classList.toggle("is-playing", Boolean(isPlaying));
    container.style.setProperty("--pitch-rate", String(pitch || 1));
    if (cassetteTitleEl) {
      cassetteTitleEl.textContent = song?.title || "No Tape";
    }
    if (cassetteSideEl) {
      cassetteSideEl.textContent = currentMeta?.cueLabel || song?.side || "-";
    }
    if (titleEl) {
      titleEl.textContent = currentMeta ? `${currentMeta.cueLabel} ${song?.title || ""}`.trim() : song?.title || "Loading...";
    }
  }

  container.querySelector("[data-mixer-play]")?.addEventListener("click", async () => {
    try {
      await engine.play();
    } catch (error) {
      console.warn("album-mixer: play request failed", error);
    }
  });

  container.querySelector("[data-mixer-pause]")?.addEventListener("click", () => {
    engine.pause();
  });

  container.querySelector("[data-mixer-stop]")?.addEventListener("click", () => {
    engine.stop();
  });

  prevBtn?.addEventListener("click", async () => {
    await navigateSong(-1);
  });

  nextBtn?.addEventListener("click", async () => {
    await navigateSong(1);
  });

  seekEl?.addEventListener("input", (event) => {
    engine.seek(parseFloat(event.target.value));
  });

  masterEl?.addEventListener("input", (event) => {
    const value = parseFloat(event.target.value);
    setFaderVisualValue(masterEl, value, 0, 1);
    engine.setMasterVolume(value);
    if (masterValueEl) {
      masterValueEl.textContent = formatConsoleScale(value);
    }
  });
  if (masterEl) {
    const masterHost = findFaderVisual(masterEl.closest(".tm4-fader-wrap, .tm4-master-strip")) || masterEl;
    attachFaderInteraction(masterHost, masterEl, 0, 1, (value) => {
      engine.setMasterVolume(value);
      if (masterValueEl) {
        masterValueEl.textContent = formatConsoleScale(value);
      }
    });
  }

  if (pitchKnobEl) {
    const existingPitchInput = findControlInput(pitchKnobEl);
    const pitchInput = existingPitchInput || document.createElement("input");
    pitchInput.type = "range";
    pitchInput.min = "0.75";
    pitchInput.max = "1.25";
    pitchInput.step = "0.005";
    pitchInput.value = String(engine.getState().pitch);

    const onPitchChange = (value) => {
      setDialValue(pitchInput, value, 0.75, 1.25);
      engine.setPitch(value);
      if (pitchValueEl) {
        pitchValueEl.textContent = `${Math.round(value * 100)}%`;
      }
    };

    pitchInput.addEventListener("input", (event) => {
      onPitchChange(parseFloat(event.target.value));
    });
    if (existingPitchInput) {
      const pitchVisual = findKnobVisual(pitchKnobEl) || pitchKnobEl;
      setDialValue(pitchInput, engine.getState().pitch, 0.75, 1.25);
      attachDialInteraction(pitchVisual, pitchInput, 0.75, 1.25, onPitchChange);
    } else {
      const pitchKnob = createKnob(
        "Pitch",
        pitchInput,
        (engine.getState().pitch - 0.75) / 0.5,
        onPitchChange
      );
      pitchKnobEl.innerHTML = "";
      pitchKnobEl.appendChild(pitchKnob);
    }
  }

  engine.addEventListener("songchange", () => {
    renderTrackControls();
    renderSongLists();
    syncSongButtons();
    syncTimeline();
    syncTransportState();
  });

  engine.addEventListener("timeupdate", () => {
    syncTimeline();
  });

  engine.addEventListener("playstatechange", () => {
    syncTransportState();
  });

  engine.addEventListener("pitchchange", () => {
    syncTransportState();
  });

  function updateMeters() {
    const levels = engine.getMeterLevels();
    levels.forEach(({ level }, trackIndex) => {
      const trackSlotId = getTrackSlotId(trackIndex);
      const el = container.querySelector(`[data-track-meter="${trackSlotId}"] .tm4-meter-fill`);
      if (!el) return;
      el.style.setProperty("--level", String(level));
    });
    meterFrame = window.requestAnimationFrame(updateMeters);
  }

  renderSongLists();
  renderTrackControls();
  syncTimeline();
  syncTransportState();
  if (pitchValueEl) {
    pitchValueEl.textContent = `${Math.round(engine.getState().pitch * 100)}%`;
  }
  if (masterValueEl) {
    masterValueEl.textContent = formatConsoleScale(engine.getState().masterVolume);
  }
  if (masterEl) {
    setFaderVisualValue(masterEl, engine.getState().masterVolume, 0, 1);
  }
  engine.loadSong(songs[0].id);
  meterFrame = window.requestAnimationFrame(updateMeters);

  return {
    container,
    engine,
    destroy() {
      if (meterFrame) {
        window.cancelAnimationFrame(meterFrame);
      }
    },
  };
}
