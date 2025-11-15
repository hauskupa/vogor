import { setupMixer } from "./mixer.js";
import { setupAwake } from "./awake.js";
import { setupPlayer } from "./player.js";
import { setupMultitrackPlayer } from "./multitrackplayer.js";
import { setupAsleepArtwork } from "./asleep.js";

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

  // Global player
  if (document.querySelector("[data-player]")) {
    console.log("Found [data-player], initializing player...");
    setupPlayer();
  }

  // Multitrack + Asleep artwork
  if (document.querySelector("[data-multitrack-player]")) {
    console.log("Found [data-multitrack-player], initializing multitrack...");
    const mt = setupMultitrackPlayer(document);  // engine
    setupAsleepArtwork(mt);                      // song-switching & visuals
  }
});
