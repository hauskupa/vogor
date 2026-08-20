// src/albumMixerExport.js
// Rendrar núverandi mix notandans offline og skilar MP3.
//
// Keðjan kemur úr albumMixerEngine.js svo útflutta mixið sé sama merki og
// heyrðist. Offline er það raunar nákvæmara: lifandi spilunin keyrir fimm
// aðskilin media elements og resync-lúppan nuddar playbackRate um ±1,25% til
// að halda þeim saman, en hér eru bufferarnir sample-læstir frá byrjun.

import { createChannelChain, applyChannelState, faderGain } from "./albumMixerEngine.js";

const SAMPLE_RATE = 44100;
const BYTES_PER_SECOND_PER_STEM = SAMPLE_RATE * 2 * 4; // stereo Float32

// Slóðin á main.js er tekin þegar bundleinn keyrir, svo worker-skráin finnist
// við hliðina á honum á jsDelivr.
const SCRIPT_SRC = typeof document !== "undefined" ? document.currentScript?.src || "" : "";

function resolveWorkerUrl(container) {
  const override = container?.getAttribute("data-mp3-worker");
  if (override) return override;
  if (SCRIPT_SRC) return SCRIPT_SRC.replace(/\/[^/]*$/, "/mp3worker.js");
  return "https://cdn.jsdelivr.net/gh/hauskupa/vogor@main/dist/mp3worker.js";
}

// Worker-skráin er á öðru léni en síðan, svo `new Worker(url)` er bannað.
// Hún er sótt og keyrð af blob-slóð í staðinn; jsDelivr sendir CORS-hausa.
async function createWorker(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Náði ekki í MP3-kóðarann (HTTP ${response.status})`);
  const source = await response.text();
  const blobUrl = URL.createObjectURL(new Blob([source], { type: "text/javascript" }));
  const worker = new Worker(blobUrl);
  URL.revokeObjectURL(blobUrl);
  return worker;
}

export function estimateExportMemory(durationSeconds, stemCount) {
  // Öll stemin afkóðuð samtímis, plús rendraða útkoman.
  return durationSeconds * BYTES_PER_SECOND_PER_STEM * (stemCount + 1);
}

// iOS fellir flipann þegjandi þegar minnið springur, svo það er skárra að
// neita en að láta síðuna hverfa í miðjum útflutningi.
export function canExportHere(durationSeconds, stemCount) {
  const needed = estimateExportMemory(durationSeconds, stemCount);
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isIOS) {
    return { ok: false, reason: "iOS ræður ekki við útflutninginn", needed };
  }
  if (typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 2) {
    return { ok: false, reason: "Tækið hefur of lítið minni", needed };
  }
  if (!window.OfflineAudioContext) {
    return { ok: false, reason: "Vafrinn styður ekki OfflineAudioContext", needed };
  }
  return { ok: true, needed };
}

export function writeId3(tags) {
  const frames = [];
  const encoder = new TextEncoder();

  for (const [id, value] of Object.entries(tags)) {
    if (!value) continue;
    // ISO-8859-1 er öruggasta kóðunin fyrir eldri spilara, en íslenskir
    // stafir lifa ekki af hana. UTF-16 með BOM er kóðun 1 í ID3v2.3.
    const utf16 = new Uint8Array(2 + value.length * 2 + 2);
    utf16[0] = 0xff;
    utf16[1] = 0xfe;
    for (let i = 0; i < value.length; i += 1) {
      const code = value.charCodeAt(i);
      utf16[2 + i * 2] = code & 0xff;
      utf16[3 + i * 2] = code >> 8;
    }
    const body = new Uint8Array(1 + utf16.length);
    body[0] = 1; // UTF-16 með BOM
    body.set(utf16, 1);

    const frame = new Uint8Array(10 + body.length);
    frame.set(encoder.encode(id), 0);
    const size = body.length;
    frame[4] = (size >> 24) & 0xff;
    frame[5] = (size >> 16) & 0xff;
    frame[6] = (size >> 8) & 0xff;
    frame[7] = size & 0xff;
    frame.set(body, 10);
    frames.push(frame);
  }

  const framesSize = frames.reduce((sum, frame) => sum + frame.length, 0);
  const header = new Uint8Array(10);
  header.set(encoder.encode("ID3"), 0);
  header[3] = 3; // v2.3
  header[4] = 0;
  header[5] = 0;
  // Synchsafe stærð: sjö bitar í hverju bæti.
  header[6] = (framesSize >> 21) & 0x7f;
  header[7] = (framesSize >> 14) & 0x7f;
  header[8] = (framesSize >> 7) & 0x7f;
  header[9] = framesSize & 0x7f;

  const out = new Uint8Array(10 + framesSize);
  out.set(header, 0);
  let cursor = 10;
  for (const frame of frames) {
    out.set(frame, cursor);
    cursor += frame.length;
  }
  return out;
}

async function fetchStems(tracks, onProgress) {
  let done = 0;
  return Promise.all(
    tracks.map(async (track) => {
      const response = await fetch(track.url);
      if (!response.ok) throw new Error(`Náði ekki í ${track.label || track.id}`);
      const data = await response.arrayBuffer();
      done += 1;
      onProgress(done / tracks.length);
      return data;
    })
  );
}

export async function renderMix({ tracks, masterPosition, pitch = 1, onProgress = () => {} }) {
  if (!tracks?.length) throw new Error("Engar rásir til að flytja út");

  onProgress({ phase: "fetch", ratio: 0 });
  const encoded = await fetchStems(tracks, (ratio) => onProgress({ phase: "fetch", ratio }));

  onProgress({ phase: "decode", ratio: 0 });
  // Afkóðun þarf samhengi; það er hent strax á eftir.
  const decodeContext = new OfflineAudioContext(2, SAMPLE_RATE, SAMPLE_RATE);
  const buffers = [];
  for (let i = 0; i < encoded.length; i += 1) {
    buffers.push(await decodeContext.decodeAudioData(encoded[i]));
    onProgress({ phase: "decode", ratio: (i + 1) / encoded.length });
  }

  const safePitch = Math.min(1.25, Math.max(0.75, pitch || 1));
  const longest = buffers.reduce((max, buffer) => Math.max(max, buffer.duration), 0);
  const frames = Math.ceil((longest / safePitch) * SAMPLE_RATE);

  onProgress({ phase: "render", ratio: 0 });
  const context = new OfflineAudioContext(2, frames, SAMPLE_RATE);
  const master = context.createGain();
  master.gain.value = faderGain(masterPosition);
  master.connect(context.destination);

  buffers.forEach((buffer, index) => {
    const track = tracks[index];
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = safePitch;

    const chain = createChannelChain(context);
    applyChannelState(chain.nodes, context, track);

    source.connect(chain.input);
    chain.output.connect(master);
    source.start(0);
  });

  const rendered = await context.startRendering();
  onProgress({ phase: "render", ratio: 1 });
  return rendered;
}

export async function exportMixToMp3({
  container,
  song,
  albumTitle,
  artist = "Stafrænn Hákon",
  tracks,
  masterPosition,
  pitch = 1,
  bitrate = 192,
  onProgress = () => {},
}) {
  const rendered = await renderMix({ tracks, masterPosition, pitch, onProgress });

  const left = rendered.getChannelData(0);
  const right = rendered.numberOfChannels > 1 ? rendered.getChannelData(1) : left;

  onProgress({ phase: "encode", ratio: 0 });
  const worker = await createWorker(resolveWorkerUrl(container));

  const mp3 = await new Promise((resolve, reject) => {
    worker.onmessage = (event) => {
      const message = event.data || {};
      if (message.type === "progress") {
        onProgress({ phase: "encode", ratio: message.ratio });
      } else if (message.type === "done") {
        resolve(message.mp3);
      } else if (message.type === "error") {
        reject(new Error(message.message));
      }
    };
    worker.onerror = (event) => reject(new Error(event.message || "MP3-kóðarinn brást"));

    // Afrit því bufferarnir eru fluttir yfir og verða ónothæfir hér á eftir.
    const l = new Float32Array(left);
    const r = new Float32Array(right);
    worker.postMessage(
      { left: l, right: r, sampleRate: SAMPLE_RATE, bitrate },
      [l.buffer, r.buffer]
    );
  }).finally(() => worker.terminate());

  const id3 = writeId3({
    TIT2: `${song?.title || "Mix"} (my mix)`,
    TPE1: artist,
    TALB: albumTitle || "",
    TCON: "Post-Rock",
    TSSE: "Vogor Studio 424",
  });

  const blob = new Blob([id3, mp3], { type: "audio/mpeg" });
  onProgress({ phase: "done", ratio: 1 });
  return blob;
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 30000);
}
