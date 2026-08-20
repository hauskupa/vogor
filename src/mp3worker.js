// src/mp3worker.js
// Keyrir í Web Worker. Build-skrefið límir lame.min.js framan við þessa skrá,
// svo `lamejs` er global hér. Sjá build.js.
//
// Inn:  { left: Float32Array, right: Float32Array, sampleRate, bitrate }
// Út:   { type: "progress", ratio } … og að lokum { type: "done", mp3: Uint8Array }

const BLOCK = 1152; // ein MP3-rammastærð

function toInt16(source, offset, length, target) {
  for (let i = 0; i < length; i += 1) {
    // Keðjan getur farið yfir ±1 þegar faderar eru keyrðir upp. Án þessarar
    // klippingar veltur talan við umbreytingu í Int16 og skilar bresti.
    const sample = Math.max(-1, Math.min(1, source[offset + i] || 0));
    target[i] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
  }
}

self.onmessage = (event) => {
  const { left, right, sampleRate, bitrate } = event.data || {};

  try {
    if (typeof lamejs === "undefined") {
      throw new Error("lamejs vantar í worker-skrána");
    }

    const channels = right ? 2 : 1;
    const encoder = new lamejs.Mp3Encoder(channels, sampleRate, bitrate);
    const total = left.length;
    const chunks = [];
    let size = 0;

    const bufL = new Int16Array(BLOCK);
    const bufR = channels === 2 ? new Int16Array(BLOCK) : null;
    let lastReported = 0;

    for (let offset = 0; offset < total; offset += BLOCK) {
      const length = Math.min(BLOCK, total - offset);

      toInt16(left, offset, length, bufL);
      if (bufR) toInt16(right, offset, length, bufR);

      const viewL = length === BLOCK ? bufL : bufL.subarray(0, length);
      const viewR = bufR ? (length === BLOCK ? bufR : bufR.subarray(0, length)) : null;

      const encoded = viewR
        ? encoder.encodeBuffer(viewL, viewR)
        : encoder.encodeBuffer(viewL);

      if (encoded.length) {
        chunks.push(encoded);
        size += encoded.length;
      }

      const ratio = offset / total;
      if (ratio - lastReported >= 0.02) {
        lastReported = ratio;
        self.postMessage({ type: "progress", ratio });
      }
    }

    const tail = encoder.flush();
    if (tail.length) {
      chunks.push(tail);
      size += tail.length;
    }

    const mp3 = new Uint8Array(size);
    let cursor = 0;
    for (const chunk of chunks) {
      mp3.set(chunk, cursor);
      cursor += chunk.length;
    }

    self.postMessage({ type: "done", mp3 }, [mp3.buffer]);
  } catch (error) {
    self.postMessage({ type: "error", message: error?.message || String(error) });
  }
};
