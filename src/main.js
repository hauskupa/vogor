import { setupMixer } from "./mixer.js";
import { setupAwake } from "./awake.js";

document.addEventListener("DOMContentLoaded", () => {
  // Mixer
  if (document.querySelector("[data-mixer]")) {
    console.log("Found mixer element, initializing...");
    setupMixer();
  }

  // Awake
  if (document.querySelector("[data-awake]")) {
    console.log("Found awake element, initializing...");
    setupAwake();
  }
});
