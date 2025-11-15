// src/asleep.js
export function setupAsleepArtwork(multitrack) {
  if (!multitrack) return;

  const { container, tracks } = multitrack;

  // --- DEFAULT MIX ---

  const defaultEl = container.querySelector("[data-mt-default]");
  const defaultUrl = defaultEl?.dataset.mtDefault || "";
  let defaultAudio = null;
  let defaultActive = false;

  if (defaultUrl) {
    defaultAudio = new Audio(defaultUrl);
    defaultAudio.loop = true;
    defaultAudio.volume = 1;

    // reyna að starta – ef browser blokkar, er það bara hljóðlaust
    defaultAudio.play().then(() => {
      defaultActive = true;
      console.log("asleep: default mix playing");
    }).catch((err) => {
      console.warn("asleep: autoplay default failed", err);
    });
  }

  function dropDefault() {
    if (!defaultActive || !defaultAudio) return;
    defaultAudio.pause();
    defaultAudio.currentTime = 0;
    defaultActive = false;
    console.log("asleep: default mix stopped");
  }

  // --- DROPA DEFAULTI VIÐ FYRSTU INTERACTION ---

  let hasUserInteractedWithStems = false;

  function handleFirstStemInteraction() {
    if (hasUserInteractedWithStems) return;
    hasUserInteractedWithStems = true;
    dropDefault();
  }

  // hookum okkur á alla stems
  tracks.forEach((track) => {
    track.el.addEventListener("click", handleFirstStemInteraction, { once: true });
  });

  // ef þú vilt líka drepa default ef user ýtir á stop:
  const stopBtn = container.querySelector("[data-mt-stop]");
  stopBtn?.addEventListener("click", () => {
    dropDefault();
  });

  console.log("asleep: default mix + interaction hook ready");
}
