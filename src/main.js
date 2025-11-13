import { setupMixer } from "./mixer.js";
import { setupAwake } from "./awake.js";
import { setupPlayer } from "./player.js";
import { setupMultitrackPlayer } from "./multitrackplayer.js";

console.log("main.js loaded");   // 👈 BÆTA ÞESSU INN

document.addEventListener("DOMContentLoaded", () => {
  console.log("main: DOMContentLoaded");   // og þessu, nice að hafa
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

  // Global player (Soðkaffi o.fl.)
  if (document.querySelector("[data-player]")) {
    console.log("Found [data-player], initializing player...");
    setupPlayer();
  }

  // 🔊 Multitrack player
  if (document.querySelector("[data-multitrack-player]")) {
    console.log("Found [data-multitrack-player], initializing multitrack...");
    setupMultitrackPlayer();
  }
});
