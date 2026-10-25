import { build } from "esbuild";
import { mkdirSync, readdirSync, copyFileSync, readFileSync, writeFileSync } from "fs";

mkdirSync("dist", { recursive: true });

// Enginn tímastimpill í skránum: sami kóði gefur sömu skrá, og commit-ið
// segir hvaða útgáfa er á vefnum (npm run webflow)

// Build JS
await build({
  entryPoints: ["src/main.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "iife",
  target: ["es2019"],
  outfile: "dist/main.js",
  // permixer.js sprautar CSS-inu sínu inn sjálft
  loader: { ".css": "text" },
});

// Nafir-síðurnar (yfirlit bandsins, birtingar): sér skrá svo main.js stækki
// ekki fyrir alla gesti. CSS-ið er í skránni og sprautast inn. Sjá src/nafir/index.js
await build({
  entryPoints: ["src/nafir/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "iife",
  target: ["es2019"],
  outfile: "dist/nafir.js",
  loader: { ".css": "text" },
});

// Hleðslan sem embed-in á Nafir-síðunum vísa á (fest á commit). Hún sækir
// dist/nafir.js á nýjasta commit, því jsDelivr @main getur verið langt á eftir
await build({
  entryPoints: ["src/nafir/hledsla.js"],
  bundle: false,
  minify: true,
  format: "iife",
  target: ["es2019"],
  outfile: "dist/nafir-hledsla.js",
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
  `${lame}\n${workerBundle.outputFiles[0].text}`
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

console.log("Búið. Eftir commit og push: npm run webflow");
