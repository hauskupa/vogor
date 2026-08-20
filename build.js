import { build } from "esbuild";
import { mkdirSync, readdirSync, copyFileSync, readFileSync, writeFileSync } from "fs";

mkdirSync("dist", { recursive: true });

// Time-stamp bara fyrir comment/debug
const v = Date.now().toString().slice(-6);

// Build JS
await build({
  entryPoints: ["src/main.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "iife",
  target: ["es2019"],
  outfile: "dist/main.js",
  banner: {
    js: `// Build version: ${v} (${new Date().toISOString()})`,
  },
});

// MP3-kóðarinn er 156 kB og á ekkert erindi í main.js — hann sækist bara
// þegar einhver flytur út. lame.min.js skilgreinir `lamejs` sem global, svo
// hún er límd framan við worker-kóðann í stað þess að vera import-uð
// (module-inngangur lamejs er brotinn: "MPEGMode is not defined").
const lame = readFileSync("node_modules/lamejs/lame.min.js", "utf8");
const workerBundle = await build({
  entryPoints: ["src/mp3worker.js"],
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2019"],
  write: false,
});
writeFileSync(
  "dist/mp3worker.js",
  `// Build version: ${v} (${new Date().toISOString()})\n${lame}\n${workerBundle.outputFiles[0].text}`
);

// CSS + LRC yfir í dist
for (const f of readdirSync("src")) {
  if (
    f.endsWith(".css") ||
    f.endsWith(".lrc") ||
    f.endsWith(".svg") ||
    f.endsWith(".png")
  ) {
    copyFileSync(`src/${f}`, `dist/${f}`);
  }
}

// Info bara fyrir þig í terminal
const USER = "hauskupa";
const REPO = "vogor";
const REF = "main";

console.log("\nUse in Webflow (set once, keep forever):");
for (const f of readdirSync("dist")) {
  if (f.endsWith(".css")) {
    console.log(
      `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/${USER}/${REPO}@${REF}/dist/${f}">`
    );
  }
}
console.log(
  `<script src="https://cdn.jsdelivr.net/gh/${USER}/${REPO}@${REF}/dist/main.js" defer></script>`
);
