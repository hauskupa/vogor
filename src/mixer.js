// src/mixer.js
//
// Gamli mixerinn á /permixer: hvert lag í CMS-listanum er [data-song] með
// eigin play-takka, framvindustiku og rásastrimlum ([data-track-url]).
// Spilun og samstilling eru í stemEngine.js; hér er bara DOM-ið tengt.

import { createStemEngine } from "./stemEngine.js";

export function setupMixer() {
  const engine = createStemEngine();
  const views = new Map(); // songId -> { button, progress, dragging }

  document.querySelectorAll("[data-song]").forEach((el) => {
    const songId = el.getAttribute("data-song");
    const trackEls = Array.from(el.querySelectorAll("[data-track-url]")).filter((t) =>
      (t.getAttribute("data-track-url") || "").trim()
    );
    if (!songId || !trackEls.length) return;

    const tracks = trackEls.map((t) => {
      const volume = t.querySelector("[data-volume-control]");
      const pan = t.querySelector("[data-pan-control]");
      return {
        id: t.getAttribute("data-track-id"),
        url: t.getAttribute("data-track-url").trim(),
        volume: volume ? parseFloat(volume.value) : 1,
        pan: pan ? parseFloat(pan.value) : 0,
      };
    });
    const song = engine.define({ id: songId, tracks });

    const view = {
      button: el.querySelector("[data-play-button]"),
      progress: el.querySelector("[data-progress-bar]"),
      dragging: false,
    };
    views.set(songId, view);

    trackEls.forEach((t, i) => {
      const trackId = tracks[i].id;
      const state = song.tracks[i];

      t.querySelector("[data-volume-control]")?.addEventListener("input", (e) => {
        engine.setTrack(songId, trackId, { volume: parseFloat(e.target.value) });
      });
      t.querySelector("[data-pan-control]")?.addEventListener("input", (e) => {
        engine.setTrack(songId, trackId, { pan: parseFloat(e.target.value) });
      });

      const mute = t.querySelector("[data-mute-button]");
      mute?.addEventListener("click", () => {
        engine.setTrack(songId, trackId, { muted: !state.muted });
        mute.classList.toggle("mute-active", state.muted);
      });

      const solo = t.querySelector("[data-solo-button]");
      solo?.addEventListener("click", () => {
        engine.setTrack(songId, trackId, { soloed: !state.soloed });
        solo.classList.toggle("solo-active", state.soloed);
      });
    });

    view.button?.addEventListener("click", () => {
      if (engine.isPlaying(songId)) engine.pause(songId);
      else engine.play(songId);
    });

    if (view.progress) {
      view.progress.addEventListener("input", () => {
        view.dragging = true;
      });
      view.progress.addEventListener("change", (e) => {
        view.dragging = false;
        const { duration } = engine.getSong(songId);
        if (duration) engine.seek((parseFloat(e.target.value) / 100) * duration, songId);
      });
    }
  });

  engine.on("state", ({ songId, state }) => {
    const button = views.get(songId)?.button;
    if (!button) return;
    button.classList.toggle("playing", state === "playing");
    button.classList.toggle("loading", state === "loading");
  });

  engine.on("time", ({ songId, time, duration }) => {
    const view = views.get(songId);
    if (!view?.progress || view.dragging || !duration) return;
    view.progress.value = (time / duration) * 100;
  });

  console.log(`mixer: ready (${views.size} songs, synced)`);
}
