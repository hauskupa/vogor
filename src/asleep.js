// src/asleep.js

// smá helper hér líka (sama og í multitrackplayer.js)
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

  // --- DROPA DEFAULTI VIÐ FYRSTU INTERACTION ---

  let hasUserInteractedWithStems = false;

  function handleFirstStemInteraction() {
    if (hasUserInteractedWithStems) return;
    hasUserInteractedWithStems = true;

    dropDefault();          // stoppa default stereo
    ensureStarted();        // byrja multitrack stems muted & in sync
  }

  // hookum okkur á alla stems – bara fyrsta clickið skiptir máli
  tracks.forEach((track) => {
    track.el.addEventListener("click", handleFirstStemInteraction, {
      once: true,
    });
  });

  // drepa default líka ef user ýtir á stop
  const stopBtn = container.querySelector("[data-mt-stop]");
  stopBtn?.addEventListener("click", () => {
    dropDefault();
  });

  console.log("asleep: default mix + interaction hook ready");
}
