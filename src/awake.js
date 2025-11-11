// src/awake.js
import { Howl } from "howler";

export function setupAwake() {
  console.log("Awake setup init");

  // Þarft bara að passa að IDs í Webflow passi við þessi nöfn
  const tracksConfig = {
    awake: "https://dl.dropbox.com/s/ajrpw05bpy6k04a/awakevoiceover.mp3?dl=0",
    afterthefall:
      "https://dl.dropbox.com/s/jtgblwgqdceko0o/AfterTheFallvoiceMix.mp3?dl=0",
    theitem:
      "https://dl.dropbox.com/s/3q6zt8luk06z947/TheItemVoiceover.mp3?dl=0",
    security:
      "https://dl.dropbox.com/s/0nu90bt8mlcb9c9/NinjaVoiceover.mp3?dl=0",
    held: "https://dl.dropbox.com/s/2j5d0q78r37wu03/HeldVoiceMix.mp3?dl=0",
    xray: "https://dl.dropbox.com/s/mz6nrkeyufoq3lv/xrayvoiceover.mp3?dl=0",
    threepins:
      "https://dl.dropbox.com/s/teb2ezmwdhw6nwe/threepinsvoiceover.mp3?dl=0",
    vortex:
      "https://dl.dropbox.com/s/gjpxggldxcukt8r/vortexvoiceover.mp3?dl=0",
    contractor:
      "https://dl.dropbox.com/s/ub6pn27ftr6x77l/thecontractorvoiceover.mp3?dl=0",
    cousin:
      "https://dl.dropbox.com/s/l7qrt3l79rd8uax/cousinvoiceover.mp3?dl=0",
    tjornarp:
      "https://dl.dropbox.com/s/v2w956c82t8caqh/tjornarpvoiceover.mp3?dl=0",
  };

  const howls = {};

  // Búum til Howl fyrir hvert lag
  for (const [key, url] of Object.entries(tracksConfig)) {
    howls[key] = new Howl({
      src: [url],
      volume: 0.5,
    });
  }

  function clampVolume(v) {
    if (v < 0) return 0;
    if (v > 1) return 1;
    return v;
  }

  function bindTrackControls(name) {
    const howl = howls[name];
    if (!howl) return;

    const playBtn = document.getElementById(`${name}-play`);
    const pauseBtn = document.getElementById(`${name}-pause`);
    const stopBtn = document.getElementById(`${name}-stop`);
    const volUpBtn = document.getElementById(`${name}-volup`);
    const volDownBtn = document.getElementById(`${name}-voldown`);

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        howl.play();
      });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        howl.pause();
      });
    }

    if (stopBtn) {
      stopBtn.addEventListener("click", () => {
        howl.stop();
      });
    }

    if (volUpBtn) {
      volUpBtn.addEventListener("click", () => {
        const v = clampVolume(howl.volume() + 0.1);
        howl.volume(v);
      });
    }

    if (volDownBtn) {
      volDownBtn.addEventListener("click", () => {
        const v = clampVolume(howl.volume() - 0.1);
        howl.volume(v);
      });
    }
  }

  // Binda alla trackana
  Object.keys(tracksConfig).forEach(bindTrackControls);

  // Global stop – alveg eins og í gamla kóðanum
  const globalStopSelectors = [".next", ".prev", ".awakemenuhidden"];
  const globalStopElements = document.querySelectorAll(
    globalStopSelectors.join(", ")
  );

  if (globalStopElements.length) {
    globalStopElements.forEach((el) => {
      el.addEventListener("click", () => {
        Object.values(howls).forEach((h) => h.stop());
      });
    });
  }

  console.log("Awake setup ready");
}
