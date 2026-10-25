# vogor

Vefkóðinn á vogorrecords.com (Webflow). Repo-ið er **opið** og jsDelivr afhendir
`dist/` beint af GitHub, svo hér fer aldrei neitt leynilegt: engir lyklar, engar
slóðir á óútgefið efni. Útgáfuskjöl, bakendar (Apps Script) og efni eru í
hub-repo-inu (`vinnusvaedi/`, sjá `vogor-releases/` og `per-jolatonleikar/`).

## Uppbygging

- `src/main.js` er 670 bæta hleðsla sem Webflow setur inn site-wide. Hún sækir
  bara virkni síðunnar úr `dist/sidur/` (ein skrá á virkni, `src/sidur/*.js`) á
  sama commit. Kóði sem fleiri deila fer í `chunk-*.js`.
- `src/stemEngine.js` er **eina** vélin sem spilar mörg stem í takti: gamli
  mixerinn (`mixer.js`), æfingasíðan (`permixer.js`), album mixerinn
  (`albumMixerEngine.js` + `albumMixer.js`) og /asleep (`multitrackplayer.js`).
  Rásir bíða hver eftir annarri, rek er mælt gegn miðgildi og leiðrétt með
  playbackRate, hik stoppar allar. Breyting þar snertir fjórar síður.
- `src/adgangur.js`: lykill í slóð (persónulegur hlekkur), geymsla í vafranum og
  köll á Apps Script. Allar síður sem tala við Sheet nota þetta.
- `src/nafir/` → `dist/nafir.js`: Nafir-síðurnar (stada, birta, stjorn, pressa)
  og Per-yfirlesturinn (`src/per/yfirlestur.js`). HTML síðnanna er í `*.html`.
- `src/per/spjald.js` + `spjald.css`: smáauglýsingaspjald Per, eina útgáfan.
  `dist/per-spjald.js` er fyrir PNG-teikningu í
  `per-jolatonleikar/spjold/smaauglysingar.py`.
- `workers/audio-proxy/`: Cloudflare-worker sem album mixerinn sækir Dropbox-hljóð
  í gegnum (bara Dropbox-hlekkir leyfðir). Á **stafraennhakon@gmail.com**-reikningnum
  (ekki shakon); `account_id` er fest í `wrangler.toml`. Uppfært með
  `npx wrangler deploy` í möppunni.

## Að setja breytingu í loftið

1. `npm run build`, commit, push. `dist/` er í git (jsDelivr les það).
2. `npm run webflow`: ber vefinn saman við HEAD. Segir „Ekkert að gera“ eða prentar
   fjórar línur (3 CSS + `main.js`, allar á sama commit) sem Ólafur límir í
   Webflow, Site settings → Custom code, og publish-ar.
3. Nafir- og Per-síðurnar þurfa ekkert: embed-in hlaða `dist/nafir-hledsla.js`
   (fest á commit), sem sækir `dist/nafir.js` á nýjasta commit á main. **Push á
   main fer því strax í loftið þar.** Prófa á grein fyrst og opna síðuna með
   `?nafir=<sha>`. Undantekning: pressusíðan er föst á commit (miðlar eru með hlekkina).

`@main` er ekki notað: jsDelivr getur verið klukkutímum á eftir með það og purge
lagar það ekki.

## Gildrur

- Tvær tölvur. `git pull` fyrst. `.gitattributes` festir LF svo build skili sömu
  skrá á báðum (CSS fer inn í JS sem texti).
- `rmSync` á möppu eyðir engu á þessari vél (slóð með Ó); build eyðir
  `dist/sidur/` skrá fyrir skrá.
- `.gitignore` útilokar `*.csv`, `DROPBOX_AUDIO_LINKS.md`, `albummixer-*.html` og
  `nafir-webflow-embed.html`: þær báru hlekki á óútgefin stem og búa nú í
  `vogor-releases/nafir/web/mixer/`.

## Prófanir

Engar sjálfvirkar prófanir í repo-inu. Það sem hefur virkað: Playwright
(`playwright-core`) með uppsettu Chrome, keyra **lifandi** síðurnar á
vogorrecords.com en grípa beiðnir á `cdn.jsdelivr.net/gh/hauskupa/vogor@…/dist/…`
og svara með `dist/` úr vinnumöppunni (eða `git show main:dist/…` til
samanburðar). Fyrir samstillingu: grípa `window.Audio` í init-script og mæla
mesta mun á `currentTime` milli rása í spilun; hægt net með CDP
`Network.emulateNetworkConditions`. Nafir/Per-síðurnar má prófa gegn alvöru
bakendanum með lyklunum í `.env`-skránum í hub-repo-inu, en bara aðgerðir sem lesa.
