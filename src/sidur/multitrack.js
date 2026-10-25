// Multitrack-spilarinn og Asleep-myndverkið ([data-multitrack-player])
import { setupMultitrackPlayer } from "../multitrackplayer.js";
import { setupAsleepArtwork } from "../asleep.js";

export default function () {
  const mt = setupMultitrackPlayer(document);
  setupAsleepArtwork(mt);
}
