import{a as zt}from"./chunk-IQVD34ZK.js";import"./chunk-FW4363Y4.js";function it(s){try{return localStorage.getItem(s)||""}catch{return""}}function U(s,o){try{o?localStorage.setItem(s,o):localStorage.removeItem(s)}catch{}}function At(s,o){let m=new URL(location.href),l=(m.searchParams.get(s)||"").trim();if(!l)return{lykill:it(o),nyr:!1};U(o,l),m.searchParams.delete(s);try{history.replaceState(history.state,"",m.href)}catch{}return{lykill:l,nyr:!0}}var Gt="Ekkert samband.";function Tt(s,o){return fetch(s,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(o)}).then(m=>m.json().catch(()=>{throw new Error("Bakendinn svara\xF0i ekki eins og hann \xE1 a\xF0 gera.")}),()=>{throw new Error(Gt)})}var Ut="https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec",Mt="per-yfirlestur-lykill",Ct="per-yfirlestur-hver";function jt(){let{lykill:s,nyr:o}=At("k",Mt);return{key:s,fresh:o}}var N={get:()=>it(Ct),set:s=>U(Ct,s)};async function V(s,o){let m=await Tt(Ut,{...o,k:s});if(m.rangurLykill){U(Mt,"");let l=new Error("Hlekkurinn gildir ekki.");throw l.badKey=!0,l}return m}function Nt(s){let o=/^(\d{1,2}):(\d\d)$/.exec((s||"").trim());return o?Number(o[1])*60+Number(o[2]):null}var Vt=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"];function ot(s){let o=/^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(s||"");return o?`${Number(o[3])}. ${Vt[Number(o[2])-1]} kl. ${o[4]}`:""}var Ot=`/* \xC6fingas\xED\xF0an (permixer.js). Sprauta\xF0 inn \xFAr JS, allt undir .pm */

.pm {
  --pm-bg: #111;
  --pm-fg: #ececec;
  --pm-muted: #8c8c8c;
  --pm-line: #2a2a2a;
  --pm-accent: #f2a33a;
  --pm-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) 320px;
  gap: 48px;
  /* Fyllir gluggann; Webflow-umgj\xF6r\xF0in m\xE1 ekki takmarka breiddina heldur */
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 40px 32px 80px;
  background: var(--pm-bg);
  color: var(--pm-fg);
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
}

.pm *,
.pm *::before,
.pm *::after {
  box-sizing: inherit;
}

.pm button {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.pm button:disabled {
  cursor: default;
  opacity: 0.35;
}

.pm button:focus-visible,
.pm input:focus-visible {
  outline: 2px solid var(--pm-accent);
  outline-offset: 2px;
}

.pm input[type="range"] {
  accent-color: var(--pm-accent);
  margin: 0;
  cursor: pointer;
}

.pm [hidden] {
  display: none !important;
}

/* Lagalisti. Allur d\xE1lkurinn er festur \xED einu lagi (ekki bara <ol>), annars
   skrunar \u201EUtan lagalista\u201C upp yfir listann. Hann skrunar sj\xE1lfur ef hann er
   h\xE6rri en glugginn. */
.pm-songs {
  position: sticky;
  top: 24px;
  align-self: start;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  overscroll-behavior: contain;
  min-width: 0;
}

.pm-songs ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pm-songs button {
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 6px 0;
  text-align: left;
  font-size: 14px;
  line-height: 1.35;
  color: var(--pm-muted);
}

.pm-songs button:hover,
.pm-songs button[aria-current="true"] {
  color: var(--pm-fg);
}

.pm-songs button[aria-current="true"] .pm-num {
  color: var(--pm-accent);
}

.pm-num {
  font-family: var(--pm-mono);
  font-size: 12px;
  padding-top: 2px;
  flex: none;
}

/* T\xF3nleikar\xF6\xF0in (me\xF0 lykli) */
.pm-songs-head {
  display: grid;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--pm-line);
  font-size: 13px;
  color: var(--pm-muted);
}

.pm-total {
  font-family: var(--pm-mono);
  color: var(--pm-fg);
}

.pm-total small {
  color: var(--pm-muted);
  font-size: 11px;
}

.pm-who select,
.pm-per textarea,
.pm-per input {
  font: inherit;
  color: var(--pm-fg);
  background: #1b1b1b;
  border: 1px solid var(--pm-line);
  border-radius: 4px;
}

.pm-who select {
  margin-left: 6px;
  padding: 2px 4px;
}

.pm-songs-head .pm-link {
  justify-self: start;
}

.pm-songs li {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pm-songs li > button {
  flex: 1;
  min-width: 0;
}

.pm-songs-sub {
  margin: 20px 0 4px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-songs ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pm-order {
  display: flex;
  gap: 2px;
  flex: none;
}

.pm-order button {
  width: 26px;
  height: 26px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1;
}

/* Dregi\xF0 til \xED \u201EBreyta r\xF6\xF0\u201C: haldfangi\xF0 tekur vi\xF0 snertingu svo s\xED\xF0an
   skruni ekki \xE1 me\xF0an */
.pm-grip {
  flex: none;
  align-self: stretch;
  display: grid;
  place-items: center;
  width: 18px;
  color: var(--pm-muted);
  cursor: grab;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}

.pm-grip svg {
  width: 10px;
  height: 16px;
  fill: currentColor;
}

.pm-grip:hover {
  color: var(--pm-fg);
}

.pm-songs.is-dragging {
  user-select: none;
  -webkit-user-select: none;
  cursor: grabbing;
}

/* \xDAr fl\xE6\xF0inu, sta\xF0sett mi\xF0a\xF0 vi\xF0 .pm-songs (top \xFAr JS) */
.pm-songs li.is-dragging {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  background: #1f1f1f;
  border-radius: 4px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
}

.pm-songs li.is-dragging .pm-grip {
  color: var(--pm-accent);
  cursor: grabbing;
}

.pm-songs li.pm-drop {
  border: 1px dashed var(--pm-accent);
  border-radius: 4px;
  opacity: 0.5;
}

.pm-order-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  font-size: 13px;
}

.pm-save {
  padding: 6px 14px !important;
  border-radius: 4px;
  background: var(--pm-accent) !important;
  color: var(--pm-bg) !important;
  font-weight: 600;
}

.pm-status {
  margin: 0;
  width: 100%;
  font-size: 13px;
  color: var(--pm-muted);
}

.pm-status.is-warning {
  color: var(--pm-accent);
}

/* Fyrra og n\xE6sta lag */
.pm-step {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 13px;
  color: var(--pm-muted);
}

.pm-step button:hover {
  color: var(--pm-fg);
}

.pm-step-right {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
}

.pm-stage-open {
  padding: 3px 10px !important;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  color: var(--pm-fg) !important;
}

.pm-stage-open:hover {
  border-color: var(--pm-accent) !important;
}

/* Kynning og n\xF3tur */
.pm-per {
  display: grid;
  gap: 14px;
  margin-top: 24px;
  padding: 16px;
  border: 1px solid var(--pm-line);
  border-radius: 6px;
}

.pm-intro summary {
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-intro[open] summary {
  margin-bottom: 8px;
  color: var(--pm-fg);
}

.pm-field {
  display: grid;
  gap: 6px;
}

.pm-field > span,
.pm-length {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-per textarea {
  width: 100%;
  padding: 8px 10px;
  line-height: 1.5;
  resize: vertical;
}

.pm-per input {
  width: 5em;
  margin-left: 6px;
  padding: 4px 6px;
  font-family: var(--pm-mono);
}

.pm-per-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
}

.pm-per-foot .pm-status {
  width: auto;
  flex: 1;
}

/* Spilari */
.pm-title {
  margin: 0 0 20px;
  font-size: 32px;
  line-height: 1.15;
  font-weight: 700;
  color: var(--pm-fg);
}

.pm-transport {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pm-play {
  width: 44px;
  height: 44px;
  flex: none;
  border-radius: 50%;
  border: 1px solid var(--pm-fg) !important;
  display: grid;
  place-items: center;
}

.pm-play svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.pm-play .pm-icon-pause,
.pm-play[data-state="playing"] .pm-icon-play {
  display: none;
}

.pm-play[data-state="playing"] .pm-icon-pause {
  display: block;
}

.pm-play[data-state="playing"] {
  background: var(--pm-fg);
  color: var(--pm-bg);
}

.pm-play[data-state="loading"] {
  animation: pm-pulse 1s ease-in-out infinite;
}

@keyframes pm-pulse {
  50% {
    opacity: 0.4;
  }
}

.pm-time {
  font-family: var(--pm-mono);
  font-size: 13px;
  color: var(--pm-muted);
  white-space: nowrap;
  min-width: 92px;
}

.pm-seek {
  flex: 1;
  min-width: 0;
}

.pm-note {
  margin: 16px 0 0;
  font-size: 14px;
  color: var(--pm-muted);
}

/* Uppbygging */
.pm-structure {
  --pm-progress: 0%;
  position: relative;
  display: flex;
  gap: 3px;
  margin-top: 28px;
}

.pm-structure::after {
  content: "";
  position: absolute;
  left: var(--pm-progress);
  top: 0;
  height: 3px;
  width: 2px;
  background: var(--pm-fg);
  pointer-events: none;
}

.pm-seg {
  flex: 1 1 0;
  min-width: 0;
  border-top: 3px solid var(--pm-line) !important;
  padding-top: 6px !important;
  text-align: left;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--pm-muted);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button.pm-seg:hover {
  color: var(--pm-fg);
}

.pm-seg.is-current {
  border-top-color: var(--pm-accent) !important;
  color: var(--pm-fg);
}

/* S\xFDn og transpose */
.pm-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--pm-line);
  font-size: 13px;
}

.pm-views {
  display: flex;
  gap: 16px;
}

.pm-views button {
  color: var(--pm-muted);
}

.pm-views button[aria-pressed="true"] {
  color: var(--pm-fg);
  text-decoration: underline;
  text-underline-offset: 5px;
}

.pm-transpose {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--pm-mono);
}

.pm-transpose button {
  width: 28px;
  height: 28px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1;
}

.pm-transpose span {
  min-width: 56px;
  text-align: center;
}

/* Kaflar */
.pm-section {
  padding: 24px 0;
  border-bottom: 1px solid var(--pm-line);
}

.pm-section-head {
  display: flex;
  gap: 12px;
  align-items: baseline;
  text-align: left;
}

.pm-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

button.pm-section-head:hover .pm-label,
.pm-section.is-current .pm-label {
  color: var(--pm-accent);
}

.pm-start {
  font-family: var(--pm-mono);
  font-size: 12px;
  color: var(--pm-muted);
}

.pm-chords {
  margin-top: 8px;
  font-family: var(--pm-mono);
  font-size: 16px;
  font-weight: 600;
  color: var(--pm-fg);
}

.pm-lyrics {
  margin-top: 12px;
  font-size: 18px;
  line-height: 1.65;
  color: var(--pm-fg);
}

.pm-lyrics > * {
  margin: 0 0 0.8em;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

.pm-lyrics h5,
.pm-lyrics strong {
  font-size: 13px;
  color: var(--pm-muted);
  font-weight: 500;
}

.pm-sections[data-view="chords"] .pm-lyrics,
.pm-sections[data-view="lyrics"] .pm-chords {
  display: none;
}

/* Mixer */
.pm-mixer {
  position: sticky;
  top: 24px;
  align-self: start;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  overflow-x: hidden;
  /* Pl\xE1ss fyrir skrunstikuna fr\xE1 byrjun, svo h\xFAn leggist ekki yfir sle\xF0ana */
  scrollbar-gutter: stable;
  padding-right: 6px;
  min-width: 0;
}

.pm-mixer-head > *,
.pm-strip > * {
  min-width: 0;
}

.pm-mixer-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 13px;
  color: var(--pm-muted);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--pm-line);
}

.pm-link {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.pm-group-name {
  margin: 20px 0 6px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-strip {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  grid-template-areas:
    "name m s"
    "vol vol pan";
  gap: 6px 6px;
  align-items: center;
  padding: 8px 0;
}

.pm-strip.is-silent .pm-strip-name,
.pm-strip.is-silent .pm-vol {
  opacity: 0.4;
}

.pm-strip-name {
  grid-area: name;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pm-ms {
  width: 26px;
  height: 26px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 4px;
  font-family: var(--pm-mono);
  font-size: 11px;
  color: var(--pm-muted) !important;
}

.pm-ms[data-pm-mute] {
  grid-area: m;
}

.pm-ms[data-pm-solo] {
  grid-area: s;
}

.pm-ms[data-pm-mute][aria-pressed="true"] {
  background: var(--pm-fg);
  border-color: var(--pm-fg) !important;
  color: var(--pm-bg) !important;
}

.pm-ms[data-pm-solo][aria-pressed="true"] {
  background: var(--pm-accent);
  border-color: var(--pm-accent) !important;
  color: var(--pm-bg) !important;
}

.pm-vol {
  grid-area: vol;
  width: 100%;
}

.pm-pan {
  grid-area: pan;
  width: 56px;
}

.pm input.pm-vol,
.pm input.pm-pan {
  accent-color: #b5b5b5;
}

@media (max-width: 1100px) {
  .pm {
    grid-template-columns: 220px minmax(0, 1fr);
  }

  .pm-mixer {
    grid-column: 1 / -1;
    position: static;
    max-height: none;
  }
}

@media (max-width: 700px) {
  .pm {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: 24px 16px 64px;
  }

  .pm-songs {
    position: relative;
    max-height: none;
    overflow: visible;
  }
}

/* Svi\xF0shamur (iPad \xE1 stat\xEDfi): bara hlj\xF3mar og texti, yfir allri s\xED\xF0unni.
   Er beint undir <body>, ekki inni \xED .pm, svo Webflow-umgj\xF6r\xF0in trufli ekki. */
html.pm-stage-on,
html.pm-stage-on body {
  overflow: hidden !important;
  /* L\xE1r\xE9tt strok \xE1 ekki a\xF0 ver\xF0a \u201Etil baka\u201C \xED vafranum */
  overscroll-behavior: none;
}

.pm-stage {
  --pm-fg: #f5f5f5;
  --pm-muted: #8c8c8c;
  --pm-line: #262626;
  --pm-accent: #f2a33a;
  --pm-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  position: fixed;
  inset: 0;
  z-index: 2147483000;
  display: flex;
  flex-direction: column;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  background: #000;
  color: var(--pm-fg);
  line-height: 1.3;
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;
}

.pm-stage[hidden],
.pm-stage [hidden] {
  display: none !important;
}

.pm-stage *,
.pm-stage *::before,
.pm-stage *::after {
  box-sizing: border-box;
}

.pm-stage button {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.pm-stage-head {
  flex: none;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 16px 10px 24px;
  border-bottom: 1px solid var(--pm-line);
  font-size: 15px;
  color: var(--pm-muted);
  white-space: nowrap;
}

.pm-stage-pos {
  font-family: var(--pm-mono);
  font-size: 13px;
}

.pm-stage-title {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 24px;
  font-weight: 700;
  color: var(--pm-fg);
}

.pm-stage-tr {
  flex: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pm-stage-tr button {
  width: 40px;
  height: 40px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 6px;
  font-size: 20px !important;
  line-height: 1;
  color: var(--pm-muted) !important;
}

.pm-stage-tr button:active {
  border-color: var(--pm-accent) !important;
  color: var(--pm-fg) !important;
}

.pm-stage-key {
  min-width: 4.5em;
  text-align: center;
  font-family: var(--pm-mono);
  font-weight: 600;
  color: var(--pm-accent);
}

.pm-stage-next {
  margin-left: auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pm-stage-close {
  flex: none;
  width: 40px;
  height: 40px;
  border: 1px solid var(--pm-line) !important;
  border-radius: 50%;
  font-size: 22px !important;
  line-height: 1;
  color: var(--pm-muted) !important;
}

.pm-stage-main {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
}

/* Letri\xF0 (font-size) og d\xE1lkafj\xF6ldinn koma \xFAr JS svo lagi\xF0 passi \xE1 skj\xE1inn */
/* touch-action \xFEarf l\xEDka h\xE9r: skrunsv\xE6\xF0i hunsar \xFEa\xF0 sem foreldri\xF0 segir, og
   \xFE\xE1 tekur vafrinn l\xE1r\xE9tta stroki\xF0 \xED sta\xF0 JS */
.pm-stage-body,
.pm-stage-edge {
  touch-action: pan-y;
}

.pm-stage-body {
  flex: 1;
  min-width: 0;
  overflow: auto;
  overscroll-behavior: contain;
  padding: 0.6em 5vw 0.4em;
  column-fill: auto;
  column-gap: 2.5em;
  column-rule: 1px solid var(--pm-line);
}

.pm-stage .pm-section {
  padding: 0 0 0.75em;
  border: 0;
  break-inside: avoid;
}

.pm-stage .pm-section-head {
  display: block;
}

.pm-stage .pm-label {
  font-size: max(11px, 0.5em);
  letter-spacing: 0.1em;
  color: var(--pm-muted);
}

.pm-stage .pm-section.is-current .pm-label {
  color: var(--pm-muted);
}

.pm-stage .pm-chords {
  margin-top: 0.1em;
  font-size: 0.85em;
  font-weight: 600;
  color: var(--pm-accent);
}

.pm-stage .pm-lyrics {
  margin-top: 0.15em;
  font-size: 1em;
  line-height: 1.3;
}

.pm-stage .pm-lyrics > * {
  margin: 0 0 0.45em;
}

.pm-stage .pm-lyrics > :last-child {
  margin-bottom: 0;
}

.pm-stage .pm-lyrics h5,
.pm-stage .pm-lyrics strong {
  font-size: 0.6em;
}

.pm-stage-empty {
  margin: 0;
  color: var(--pm-muted);
}

/* Br\xFAnirnar: smellur fer \xE1 fyrra/n\xE6sta lag */
.pm-stage-edge {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10%;
  min-width: 56px;
}

.pm-stage-edge[data-pm-st-step="-1"] {
  left: 0;
}

.pm-stage-edge[data-pm-st-step="1"] {
  right: 0;
}

.pm-stage-edge span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 56px;
  line-height: 1;
  color: var(--pm-fg);
  opacity: 0.12;
}

.pm-stage-edge[data-pm-st-step="-1"] span {
  left: 10px;
}

.pm-stage-edge[data-pm-st-step="1"] span {
  right: 10px;
}

.pm-stage-edge:active span {
  opacity: 0.4;
}
`;var qt=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Rt={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},Yt=[["Taktur",/drum|kick|snare|perc|trommu|slagverk|bass/],["Kassag\xEDtarar",/acoustic|akust|kassa/],["Rafg\xEDtarar",/guit|gítar|gitar|gtr/],["Hlj\xF3mbor\xF0",/piano|píanó|keys|organ|orgel|synth|rhodes|hljómb/],["S\xF6ngur",/vocal|vox|voice|söng|rödd|kór|choir|backing/],["Bl\xE1stur",/trombone|trumpet|sax|horn|básún|trompet|brass|blást/],["Anna\xF0",/.*/]],Wt=["Taktur","Rafg\xEDtarar","Kassag\xEDtarar","Hlj\xF3mbor\xF0","S\xF6ngur","Bl\xE1stur","Anna\xF0"],_t=`<svg viewBox="0 0 10 16" aria-hidden="true">${[3,8,13].map(s=>`<circle cx="2.5" cy="${s}" r="1.5"/><circle cx="7.5" cy="${s}" r="1.5"/>`).join("")}</svg>`,Ht="pm-lagalisti",Pt="pm-transpose",Qt=[["both","B\xE6\xF0i"],["chords","Hlj\xF3mar"],["lyrics","Texti"]];function z(s){return(s||"").replace(/[​-‏﻿]/g,"").trim()}var Zt={\u00F0:"d",\u00FE:"th",\u00E6:"ae",\u00F6:"o"};function pt(s){return z(s).toLowerCase().replace(/[ðþæö]/g,o=>Zt[o]).normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Xt(s){let o=[],m=/([^\s:,;][^:,;\n]*?)\s*:\s*(https?:\/\/[^\s,;]+)/g,l;for(;l=m.exec(s.getAttribute("data-pm-stems")||"");)o.push([z(l[1]),l[2]]);Array.from(s.attributes).forEach(h=>{let i=z(h.value);h.name.startsWith("data-stem-")&&/^https?:\/\//.test(i)&&o.push([h.name.slice(10),i])});let x=new Set;return o.map(([h,i],M)=>{let w=pt(h)||`stem-${M+1}`;for(;x.has(w);)w+="-2";return x.add(w),{id:w,name:h,url:i}})}function te(s){let o=s.split(":").map(Number);return!o.length||o.some(m=>!Number.isFinite(m))?null:o.reduce((m,l)=>m*60+l,0)}function ee(s){return z(s).split(/[\s,;]+/).filter(Boolean).map(te)}function ae(s){return Array.from(s.querySelectorAll("[data-chords]")).map(o=>{let m=o.parentElement,l=z(o.getAttribute("data-chords")||o.textContent),x=m.querySelector(".w-richtext"),h=!!z(x?.textContent);if(!l&&!h)return null;let i=z(m.querySelector(".kafli-repeat")?.lastElementChild?.textContent);return{label:z(m.querySelector("h1, h2, h3, h4")?.textContent),chords:l,repeat:/^\d+$/.test(i)?Number(i):null,lyrics:h?x:null,start:null}}).filter(Boolean)}function ne(){return Array.from(document.querySelectorAll("[data-pm-song]")).map((s,o)=>{let m=s.closest(".w-dyn-item")||s.parentElement,l=z(s.getAttribute("data-pm-title"))||z(m.querySelector("h1, h2")?.textContent)||`Lag ${o+1}`,x=pt(s.getAttribute("data-pm-song"))||pt(l)||`lag-${o+1}`,h=ae(m),i=ee(s.getAttribute("data-pm-times"));return h.forEach((M,w)=>{M.start=i[w]??null}),{id:x,title:l,stems:Xt(s),sections:h}})}function f(s){return String(s).replace(/[&<>"']/g,o=>`&#${o.charCodeAt(0)};`)}function P(s){if(!Number.isFinite(s))return"0:00";let o=Math.max(0,Math.floor(s));return`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")}`}function re(s){let o=s.replace(/([a-zA-Zþæöðáéíóúý])(\d+)$/,"$1 $2");return o.charAt(0).toUpperCase()+o.slice(1)}function se(s){let o=s.name.toLowerCase();return Yt.find(([,m])=>m.test(o))[0]}function Bt(s,o){return s.split("/").map(m=>{let l=m.match(/^([A-G])([#b]?)(.*)$/);if(!l)return m;let x=Rt[l[1]+l[2]]||l[1]+l[2],h=qt.indexOf(x);return h<0?m:qt[((h+o)%12+12)%12]+l[3]}).join("/")}function ie(s,o){return o?s.split(/(\s+|-+)/).map(m=>/^(\s+|-+)?$/.test(m)?m:Bt(m,o)).join(""):s}function oe(s){for(let o of s.sections){let m=o.chords.match(/[A-G][#b]?/);if(m)return Rt[m[0]]||m[0]}return null}function pe(){let s=ne();if(!s.length)return;if(!document.querySelector("style[data-pm-style]")){let t=document.createElement("style");t.setAttribute("data-pm-style",""),t.textContent=Ot,document.head.appendChild(t)}let o=document.querySelector("[data-pm-song]").closest(".w-dyn-list"),m=document.querySelector("[data-pm-app]");m||(m=document.createElement("div"),(o||document.body).before(m)),o&&(o.hidden=!0),m.classList.add("pm");let l=zt();s.forEach(t=>{l.define({id:t.id,tracks:t.stems.map(({id:e,url:a})=>({id:e,url:a}))})});let x=new Map;try{Object.entries(JSON.parse(localStorage.getItem(Pt)||"{}")).forEach(([t,e])=>{Number.isInteger(e)&&e&&x.set(t,e)})}catch{}let h="both",i=s.find(t=>`#${t.id}`===location.hash)||s[0],M=!1,w=-1,O=new Map(s.map(t=>[t.id,t])),u=null,g=null,A=null,T=!1,q=new Map;m.innerHTML=`
    <nav class="pm-songs" aria-label="Lagalisti" data-pm-el="nav"></nav>
    <main class="pm-main">
      <div class="pm-step" data-pm-el="step">
        <button type="button" data-pm-step="-1"></button>
        <span class="pm-step-right">
          <button type="button" data-pm-step="1"></button>
          <button type="button" class="pm-stage-open" data-pm-el="stage-open">Svi\xF0shamur</button>
        </span>
      </div>
      <h1 class="pm-title" data-pm-el="title"></h1>
      <div class="pm-transport">
        <button type="button" class="pm-play" data-pm-el="play" aria-label="Spila">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="pm-icon-play"><path d="M8 5v14l11-7z"/></svg>
          <svg viewBox="0 0 24 24" aria-hidden="true" class="pm-icon-pause"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
        </button>
        <span class="pm-time" data-pm-el="time">0:00 / 0:00</span>
        <input type="range" class="pm-seek" data-pm-el="seek" min="0" max="1000" value="0" aria-label="Sta\xF0setning \xED laginu">
      </div>
      <p class="pm-note" data-pm-el="note" hidden></p>
      <form class="pm-per" data-pm-el="per" hidden>
        <details class="pm-intro" data-pm-el="intro-box">
          <summary>Kynning <span data-pm-el="intro-hint"></span></summary>
          <textarea data-pm-field="kynning" rows="8" aria-label="Kynning \xE1 undan laginu"></textarea>
        </details>
        <label class="pm-field">
          <span>N\xF3tur fr\xE1 \xE6fingum</span>
          <textarea data-pm-field="notur" rows="2" placeholder="T.d. styttum outro, N\xF3i telur inn, n\xFD l\xEDna \xED \xF6\xF0ru erindi"></textarea>
        </label>
        <div class="pm-per-foot">
          <label class="pm-length">Lengd <input data-pm-field="lengd" placeholder="m:ss" size="5"></label>
          <button type="submit" class="pm-save" data-pm-el="save">Vista</button>
          <p class="pm-status" data-pm-el="status" aria-live="polite"></p>
        </div>
      </form>
      <div class="pm-structure" data-pm-el="structure"></div>
      <div class="pm-toolbar" data-pm-el="toolbar">
        <div class="pm-views" role="group" aria-label="S\xFDn">${Qt.map(([t,e])=>`<button type="button" data-pm-view="${t}">${e}</button>`).join("")}</div>
        <div class="pm-transpose">
          <button type="button" data-pm-transpose="-1" aria-label="L\xE6kka um h\xE1lft\xF3n">\u2212</button>
          <span data-pm-el="key"></span>
          <button type="button" data-pm-transpose="1" aria-label="H\xE6kka um h\xE1lft\xF3n">+</button>
        </div>
      </div>
      <div class="pm-sections" data-pm-el="sections"></div>
    </main>
    <aside class="pm-mixer" aria-label="Mixer">
      <div class="pm-mixer-head">
        <span data-pm-el="count"></span>
        <button type="button" class="pm-link" data-pm-el="reset">Endurstilla</button>
      </div>
      <div data-pm-el="strips"></div>
    </aside>`;let b=t=>m.querySelector(`[data-pm-el="${t}"]`),p={nav:b("nav"),step:b("step"),per:b("per"),introBox:b("intro-box"),introHint:b("intro-hint"),save:b("save"),status:b("status"),toolbar:b("toolbar"),title:b("title"),play:b("play"),time:b("time"),seek:b("seek"),note:b("note"),structure:b("structure"),key:b("key"),sections:b("sections"),count:b("count"),reset:b("reset"),strips:b("strips")};function C(t=i){return l.getSong(t.id)?.duration||0}function It(t,e){let a=t.sections.slice(e+1).find(n=>n.start!==null);return a?a.start:C(t)}function $(t){return u?.rows.get(t)?.lag||O.get(t)?.title||t}function J(){if(!u)return{listed:s.map(e=>e.id),other:[]};let t=g||u.order;return{listed:t,other:s.map(e=>e.id).filter(e=>!t.includes(e))}}function L(){let{listed:t,other:e}=J(),a=!!g,n=(d,v)=>{let y=t.indexOf(d),k=a?y===-1?`<span class="pm-order"><button type="button" data-pm-add="${f(d)}" aria-label="Setja ${f($(d))} \xE1 listann">+</button></span>`:`<span class="pm-order">
              <button type="button" data-pm-move="${f(d)}" data-pm-by="-1" ${y===0?"disabled":""} aria-label="F\xE6ra ${f($(d))} upp">\u2191</button>
              <button type="button" data-pm-move="${f(d)}" data-pm-by="1" ${y===t.length-1?"disabled":""} aria-label="F\xE6ra ${f($(d))} ni\xF0ur">\u2193</button>
              <button type="button" data-pm-remove="${f(d)}" aria-label="Taka ${f($(d))} af listanum">\xD7</button>
            </span>`:"";return`<li>${a?`<span class="pm-grip" data-pm-grip="${f(d)}" title="Draga til" aria-hidden="true">${_t}</span>`:""}<button type="button" data-pm-pick="${f(d)}" aria-current="${d===i.id}">
          <span class="pm-num">${v===null?"\u2013":String(v+1).padStart(2,"0")}</span>
          <span>${f($(d))}</span></button>${k}</li>`},r="";if(u){let d=t.map(k=>Nt(u.rows.get(k)?.lengd)),v=d.filter(k=>k===null).length,y=d.reduce((k,B)=>k+(B||0),0);r=`<div class="pm-songs-head">
          <span class="pm-total">${t.length} l\xF6g \xB7 ${P(y)}${v?` <small>(${v} \xE1n lengdar)</small>`:""}</span>
          <label class="pm-who">\xC9g er <select data-pm-who>
            <option value="">veldu</option>
            ${u.names.map(k=>`<option ${k===N.get()?"selected":""}>${f(k)}</option>`).join("")}
          </select></label>
          ${a?"":'<button type="button" class="pm-link" data-pm-order="edit">Breyta r\xF6\xF0</button>'}
        </div>`}let c=a?`<div class="pm-order-foot">
          <button type="button" class="pm-save" data-pm-order="save">Vista r\xF6\xF0</button>
          <button type="button" class="pm-link" data-pm-order="cancel">H\xE6tta vi\xF0</button>
          <p class="pm-status" data-pm-el="order-status" aria-live="polite"></p>
        </div>`:"";A=null,p.nav.classList.remove("is-dragging"),p.nav.classList.toggle("is-editing",a),p.nav.innerHTML=`${r}
      <ol>${t.filter(d=>O.has(d)).map(d=>n(d,t.indexOf(d))).join("")}</ol>
      ${e.length?`<p class="pm-songs-sub">Utan lagalista</p><ul>${e.map(d=>n(d,null)).join("")}</ul>`:""}
      ${c}`}function Y(){let{listed:t}=J(),e=t.indexOf(i.id);return e===-1?[null,null]:[t[e-1]||null,t[e+1]||null]}function W(){let[t,e]=Y(),[a,n]=p.step.querySelectorAll("[data-pm-step]");a.hidden=!u||!t,n.hidden=!u||!e,a.dataset.pmTarget=t||"",n.dataset.pmTarget=e||"",a.textContent=t?`\u2190 ${$(t)}`:"",n.textContent=e?`N\xE6st: ${$(e)} \u2192`:""}let _=["kynning","notur","lengd"],I=t=>p.per.querySelector(`[data-pm-field="${t}"]`);function K(t=i.id){return u?.rows.get(t)||null}function lt(){let t=K();return t?_.filter(e=>I(e).value!==(t[e]||"")):[]}function Q(t){let e=K();if(p.per.hidden=!e,!e)return;let a=q.get(i.id)||e;_.forEach(n=>{I(n).value=a[n]||""}),p.introHint.textContent=e.kynning.trim()?"":"(engin enn)",R(t)}function R(t){let e=K(),a=lt();a.length?q.set(i.id,Object.fromEntries(_.map(n=>[n,I(n).value]))):q.delete(i.id),p.save.disabled=!a.length,p.status.classList.toggle("is-warning",!!t||a.length>0),p.status.textContent=t||(a.length?"\xD3vista\xF0ar breytingar":e.breytt&&e.breyttAf?`S\xED\xF0ast vista\xF0 ${ot(e.breytt)} af ${e.breyttAf}`:"")}function Z(){let t=i;L(),W(),Q(),p.title.textContent=$(t.id),p.play.disabled=!t.stems.length,p.note.hidden=!!t.stems.length,p.note.textContent=t.missing?"Ekki komi\xF0 \xED mixerinn: bara kynning og n\xF3tur.":"Engin stem fyrir \xFEetta lag \u2014 bara hlj\xF3mar og texti.",p.toolbar.hidden=!t.sections.length,w=-1,mt(),X(),ut(),gt(),D(l.getTime(t.id)),T&&at()}function mt(){let t=i,a=!!C(t)&&t.sections.some(n=>n.start!==null);p.structure.hidden=!t.sections.length,p.structure.innerHTML=t.sections.map((n,r)=>{let c=a&&n.start!==null?Math.max(1,It(t,r)-n.start):1,d=a&&n.start!==null?"button":"div";return`<${d} ${d==="button"?'type="button"':""} class="pm-seg" data-pm-seg="${r}"
          style="flex-grow:${c}"><span>${f(n.label||`Kafli ${r+1}`)}</span></${d}>`}).join("")}function X(){dt(p.sections,i,!0),m.querySelectorAll("[data-pm-view]").forEach(t=>{t.setAttribute("aria-pressed",t.dataset.pmView===h?"true":"false")})}function dt(t,e,a){let n=x.get(e.id)||0;t.dataset.view=h,t.innerHTML="",e.sections.forEach((r,c)=>{let d=document.createElement("section");d.className="pm-section",d.dataset.pmSection=c;let v=a&&r.start!==null&&e.stems.length;if(d.innerHTML=`
        <${v?'button type="button"':"div"} class="pm-section-head" ${v?`data-pm-jump="${c}"`:""}>
          <span class="pm-label">${f(r.label||`Kafli ${c+1}`)}${r.repeat?` \xD7${r.repeat}`:""}</span>
          ${r.start!==null?`<span class="pm-start">${P(r.start)}</span>`:""}
        </${v?"button":"div"}>
        ${r.chords?`<div class="pm-chords">${f(ie(r.chords,n))}</div>`:""}`,r.lyrics){let y=document.createElement("div");y.className="pm-lyrics",y.append(...Array.from(r.lyrics.cloneNode(!0).childNodes)),d.appendChild(y)}t.appendChild(d)})}function ct(t){let e=x.get(i.id)||0,a=oe(i),n=e>0?`+${e}`:e<0?`${e}`:"";return a?`${Bt(a,e)}${n?` (${n})`:""}`:n||t}function ut(){p.key.textContent=ct("T\xF3nn")}function gt(){let t=i,e=l.getSong(t.id);if(!t.stems.length){p.strips.innerHTML="",p.count.textContent="Engar r\xE1sir",p.reset.hidden=!0;return}p.reset.hidden=!1;let a=new Map;t.stems.forEach((n,r)=>{let c=se(n);a.has(c)||a.set(c,[]),a.get(c).push({stem:n,track:e.tracks[r]})}),p.strips.innerHTML=Wt.filter(n=>a.has(n)).map(n=>`<div class="pm-group"><div class="pm-group-name">${n}</div>${a.get(n).map(({stem:r,track:c})=>`<div class="pm-strip" data-pm-strip="${f(r.id)}">
              <span class="pm-strip-name">${f(re(r.name))}</span>
              <button type="button" class="pm-ms" data-pm-mute aria-pressed="${c.muted}" aria-label="\xDEagga ${f(r.name)}">M</button>
              <button type="button" class="pm-ms" data-pm-solo aria-pressed="${c.soloed}" aria-label="S\xF3l\xF3 ${f(r.name)}">S</button>
              <input type="range" class="pm-vol" data-pm-vol min="0" max="1" step="0.01" value="${c.volume}" aria-label="Styrkur ${f(r.name)}">
              <input type="range" class="pm-pan" data-pm-pan min="-1" max="1" step="0.01" value="${c.pan}" aria-label="Pan ${f(r.name)}">
            </div>`).join("")}</div>`).join(""),ft()}function ft(){let t=l.getSong(i.id);if(!t)return;let e=t.tracks.some(n=>n.soloed),a=0;t.tracks.forEach(n=>{let r=p.strips.querySelector(`[data-pm-strip="${CSS.escape(n.id)}"]`),c=n.muted||e&&!n.soloed;c||(a+=1),r&&(r.classList.toggle("is-silent",c),r.querySelector("[data-pm-mute]").setAttribute("aria-pressed",n.muted),r.querySelector("[data-pm-solo]").setAttribute("aria-pressed",n.soloed))}),p.count.textContent=`${a} af ${t.tracks.length} r\xE1sum`}function D(t){let e=C();p.time.textContent=`${P(t)} / ${P(e)}`,M||(p.seek.value=e?Math.round(t/e*1e3):0),p.structure.style.setProperty("--pm-progress",e?`${t/e*100}%`:"0%");let a=-1;i.sections.forEach((n,r)=>{n.start!==null&&t>=n.start&&(a=r)}),a!==w&&(w=a,m.querySelectorAll("[data-pm-seg], [data-pm-section]").forEach(n=>{let r=Number(n.dataset.pmSeg??n.dataset.pmSection);n.classList.toggle("is-current",r===a)}))}function tt(t){let e=s.find(r=>r.id===t);if(!e||e===i)return;let a=l.isPlaying(i.id);i=e;let n=new URL(location.href);n.hash=e.id,history.replaceState(history.state,"",n.href),e.stems.length?a?l.play(e.id):l.select(e.id):l.pause(),Z()}function ht(){i.stems.length&&(l.isPlaying(i.id)?l.pause(i.id):l.play(i.id))}function bt(t){let e=i.sections[t]?.start;e!=null&&(l.isPlaying(i.id)?l.seek(e,i.id):(l.seek(e,i.id),l.play(i.id)))}function xt(t){let e=(((x.get(i.id)||0)+t+6)%12+12)%12-6;e?x.set(i.id,e):x.delete(i.id);try{localStorage.setItem(Pt,JSON.stringify(Object.fromEntries(x)))}catch{}X(),ut(),w=-1,D(l.getTime(i.id))}function F(t){let e=Y()[t<0?0:1];e&&tt(e)}function vt(t){let e=new Map(t.map(a=>[a.id,a]));t.forEach(a=>{if(O.has(a.id))return;let n={id:a.id,title:a.lag,stems:[],sections:[],missing:!0};s.push(n),O.set(a.id,n)}),u={...u,rows:e,order:t.filter(a=>a.rod!==null).map(a=>a.id)}}async function Kt(){let{key:t,fresh:e}=jt();if(!t)return;let a=n=>{u={key:t,names:n.nofn},vt(n.log),!location.hash&&u.order.length&&!l.isPlaying(i.id)&&(i=O.get(u.order[0])),Z()};try{let n=await V(t,{action:"lagalisti"});if(!n.ok)throw new Error(n.villa);a(n);try{localStorage.setItem(Ht,JSON.stringify({nofn:n.nofn,log:n.log,kl:Date.now()}))}catch{}}catch(n){let r=null;try{r=!n.badKey&&JSON.parse(localStorage.getItem(Ht)||"null")}catch{}if(r?.log){a(r),p.note.hidden=!1;let c=new Date(r.kl),d=y=>String(y).padStart(2,"0"),v=`${c.getFullYear()}-${d(c.getMonth()+1)}-${d(c.getDate())} ${d(c.getHours())}:${d(c.getMinutes())}`;p.note.textContent=`N\xE1\xF0i ekki \xED n\xFDjustu t\xF3nleikar\xF6\xF0ina; s\xFDni r\xF6\xF0ina eins og h\xFAn var ${ot(v)}.`;return}(e||n.badKey)&&(p.note.hidden=!1,p.note.textContent=n.badKey?"Hlekkurinn gildir ekki, svo t\xF3nleikar\xF6\xF0in s\xE9st ekki. Biddu \xD3la um n\xFDjan.":"N\xE1\xF0i ekki \xED t\xF3nleikar\xF6\xF0ina. Reyndu a\xF0 endurhla\xF0a s\xED\xF0una.")}}async function Dt(){let t=K(),e=lt();if(!t||!e.length)return;if(!N.get()){R("Veldu fyrst hver \xFE\xFA ert, efst \xED lagalistanum.");return}let a=i.id,n=Object.fromEntries(e.map(r=>[r,I(r).value]));p.save.disabled=!0,p.status.textContent="Vista \u2026";try{let r=await V(u.key,{action:"lagVista",id:a,hver:N.get(),breytt:t.breytt,reitir:n});if(r.arekstur){u.rows.set(a,r.lag),i.id===a&&R(r.villa);return}if(!r.ok)throw new Error(r.villa);u.rows.set(a,r.lag),q.delete(a),i.id===a&&Q(),L()}catch(r){i.id===a&&R(`T\xF3kst ekki a\xF0 vista. ${r.message}`)}}function G(t){let e=m.querySelector('[data-pm-el="order-status"]');e&&(e.textContent=t)}async function Ft(){if(!N.get()){G("Veldu fyrst hver \xFE\xFA ert.");return}let t=u.order,e=g;if(e.join(`
`)===t.join(`
`)){g=null,L();return}G("Vista \u2026");try{let a=await V(u.key,{action:"rodVista",hver:N.get(),adur:t,rod:e.map(n=>({id:n,lag:$(n)}))});if(!a.ok&&!a.arekstur)throw new Error(a.villa);vt(a.log),g=a.arekstur?[...u.order]:null,L(),W(),q.has(i.id)||Q(),a.arekstur&&G(a.villa)}catch(a){G(`T\xF3kst ekki a\xF0 vista. ${a.message}`)}}m.addEventListener("click",t=>{let e=t.target.closest("button");if(!e||!m.contains(e))return;let a=e.dataset;if(a.pmPick)tt(a.pmPick);else if(a.pmTarget)tt(a.pmTarget);else if(a.pmEl==="stage-open")wt(!0);else if(a.pmOrder==="edit")g=[...u.order],L();else if(a.pmOrder==="cancel")g=null,L(),W();else if(a.pmOrder==="save")Ft();else if(a.pmMove){let n=g.indexOf(a.pmMove),r=n+Number(a.pmBy);n!==-1&&r>=0&&r<g.length&&([g[n],g[r]]=[g[r],g[n]],L(),m.querySelector(`[data-pm-move="${CSS.escape(a.pmMove)}"][data-pm-by="${a.pmBy}"]:not(:disabled)`)?.focus())}else if(a.pmRemove)g=g.filter(n=>n!==a.pmRemove),L();else if(a.pmAdd)g=[...g,a.pmAdd],L();else if(a.pmEl==="play")ht();else if(a.pmSeg!==void 0)bt(Number(a.pmSeg));else if(a.pmJump!==void 0)bt(Number(a.pmJump));else if(a.pmView)h=a.pmView,X(),w=-1,D(l.getTime(i.id));else if(a.pmTranspose)xt(Number(a.pmTranspose));else if(a.pmEl==="reset")l.resetMix(i.id),gt();else if(a.pmMute!==void 0||a.pmSolo!==void 0){let n=e.closest("[data-pm-strip]").dataset.pmStrip,r=l.getSong(i.id).tracks.find(d=>d.id===n),c=a.pmMute!==void 0?"muted":"soloed";l.setTrack(i.id,n,{[c]:!r[c]}),ft()}});function yt(t){let{li:e,ph:a,offset:n}=A,r=p.nav,c=r.getBoundingClientRect();t<c.top+32?r.scrollTop-=12:t>c.bottom-32&&(r.scrollTop+=12),e.style.top=`${t-c.top+r.scrollTop-n}px`;let d=r.querySelector("ol"),y=[...r.querySelectorAll("ol > li, .pm-songs-sub, ul > li")].filter(k=>k!==e&&k!==a).find(k=>{let B=k.getBoundingClientRect();return t<B.top+B.height/2});y?y.matches(".pm-songs-sub")?d.append(a):y.previousElementSibling!==a&&y.before(a):(r.querySelector("ul")||d).append(a)}p.nav.addEventListener("pointerdown",t=>{let e=t.target.closest("[data-pm-grip]");if(!e||!g||A||t.button!==0)return;t.preventDefault();let a=e.closest("li"),n=a.getBoundingClientRect(),r=document.createElement("li");r.className="pm-drop",r.style.height=`${n.height}px`,a.after(r),A={li:a,ph:r,id:e.dataset.pmGrip,offset:t.clientY-n.top,pointer:t.pointerId},e.setPointerCapture(t.pointerId),a.classList.add("is-dragging"),p.nav.classList.add("is-dragging"),yt(t.clientY)}),p.nav.addEventListener("pointermove",t=>{A&&t.pointerId===A.pointer&&yt(t.clientY)});function kt(t){if(!A||t.pointerId!==A.pointer)return;let{li:e,ph:a,id:n}=A;t.type==="pointerup"&&p.nav.contains(a)&&(g=[...p.nav.querySelectorAll("ol > li")].filter(c=>c!==e).map(c=>c===a?n:c.querySelector("[data-pm-grip]")?.dataset.pmGrip).filter(Boolean).concat(g.filter(c=>!O.has(c)))),L()}p.nav.addEventListener("pointerup",kt),p.nav.addEventListener("pointercancel",kt);let et="pm-svidshamur",S=document.createElement("div");S.className="pm-stage",S.hidden=!0,S.setAttribute("role","dialog"),S.setAttribute("aria-label","Svi\xF0shamur"),S.innerHTML=`
    <div class="pm-stage-head">
      <span class="pm-stage-pos" data-pm-st="pos"></span>
      <span class="pm-stage-title" data-pm-st="title"></span>
      <span class="pm-stage-tr" role="group" aria-label="Transpose">
        <button type="button" data-pm-st-tr="-1" aria-label="L\xE6kka um h\xE1lft\xF3n">\u2212</button>
        <span class="pm-stage-key" data-pm-st="key"></span>
        <button type="button" data-pm-st-tr="1" aria-label="H\xE6kka um h\xE1lft\xF3n">+</button>
      </span>
      <span class="pm-stage-next" data-pm-st="next"></span>
      <button type="button" class="pm-stage-close" data-pm-st="close" aria-label="Loka svi\xF0sham">\xD7</button>
    </div>
    <div class="pm-stage-main">
      <div class="pm-stage-body pm-sections" data-pm-st="body"></div>
      <button type="button" class="pm-stage-edge" data-pm-st="prev" data-pm-st-step="-1" aria-label="Fyrra lag"><span>\u2039</span></button>
      <button type="button" class="pm-stage-edge" data-pm-st="next-edge" data-pm-st-step="1" aria-label="N\xE6sta lag"><span>\u203A</span></button>
    </div>`,document.body.appendChild(S);let E=Object.fromEntries([...S.querySelectorAll("[data-pm-st]")].map(t=>[t.dataset.pmSt.replace(/-(\w)/g,(e,a)=>a.toUpperCase()),t]));function at(){let{listed:t}=J(),e=t.indexOf(i.id),[a,n]=Y();E.pos.textContent=e===-1?"\u2013":`${String(e+1).padStart(2,"0")} / ${t.length}`,E.title.textContent=$(i.id),E.key.textContent=ct("\xB10"),E.next.textContent=n?`N\xE6st: ${$(n)}`:e===t.length-1?"S\xED\xF0asta lag":"",E.prev.hidden=!a,E.nextEdge.hidden=!n,dt(E.body,i,!1),i.sections.length?nt():(E.body.innerHTML='<p class="pm-stage-empty">Engir hlj\xF3mar e\xF0a texti komnir fyrir \xFEetta lag.</p>',E.body.style.columnCount=1,E.body.style.fontSize="24px")}function nt(){let t=E.body,e=()=>t.scrollHeight<=t.clientHeight+1&&t.scrollWidth<=t.clientWidth+1,a=t.clientWidth>t.clientHeight*1.1?[1,2,3]:[1,2],n={size:12,cols:1};a.forEach(r=>{t.style.columnCount=r;let c=12,d=64;for(;d-c>.5;){let v=(c+d)/2;t.style.fontSize=`${v}px`,e()?c=v:d=v}c>n.size*1.08&&(n={size:c,cols:r})}),t.style.columnCount=n.cols,t.style.fontSize=`${Math.floor(n.size)}px`,t.scrollTop=0,t.scrollLeft=0}let H=null;async function rt(){if(!(!T||H||!navigator.wakeLock||document.visibilityState!=="visible"))try{H=await navigator.wakeLock.request("screen"),H.addEventListener("release",()=>{H=null})}catch{}}document.addEventListener("visibilitychange",rt);function wt(t){T=!0;try{localStorage.setItem(et,"1")}catch{}if(S.hidden=!1,document.documentElement.classList.add("pm-stage-on"),t){let e=document.documentElement;try{(e.requestFullscreen||e.webkitRequestFullscreen)?.call(e)?.catch?.(()=>{})}catch{}}$t(),rt(),at(),document.fonts?.ready.then(()=>T&&nt())}function St(){T=!1;try{localStorage.removeItem(et)}catch{}S.hidden=!0,document.documentElement.classList.remove("pm-stage-on"),H?.release().catch(()=>{}),H=null;try{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.webkitFullscreenElement&&document.webkitExitFullscreen()}catch{}history.state?.pmStage&&history.back()}function $t(){if(history.state?.pmStage)return;let t=new URL(location.href);t.hash=i.id,history.pushState({...history.state,pmStage:!0},"",t.href)}window.addEventListener("popstate",()=>{if(T)$t();else if(location.hash!==`#${i.id}`){let t=new URL(location.href);t.hash=i.id,history.replaceState(history.state,"",t.href)}});let st=!1;window.addEventListener("resize",()=>{!T||st||(st=!0,requestAnimationFrame(()=>{st=!1,T&&nt()}))});let j=null,Et=0;S.addEventListener("pointerdown",t=>{j={x:t.clientX,y:t.clientY,id:t.pointerId},rt()}),S.addEventListener("pointerup",t=>{if(!j||t.pointerId!==j.id)return;let e=t.clientX-j.x,a=t.clientY-j.y;j=null,Math.abs(e)>60&&Math.abs(e)>2*Math.abs(a)&&(Et=performance.now(),F(e<0?1:-1))}),S.addEventListener("pointercancel",()=>{j=null}),S.addEventListener("click",t=>{if(performance.now()-Et<500)return;let e=t.target.closest("button");e&&(e.dataset.pmSt==="close"?St():e.dataset.pmStStep?F(Number(e.dataset.pmStStep)):e.dataset.pmStTr&&(xt(Number(e.dataset.pmStTr)),at()))}),p.per.addEventListener("submit",t=>{t.preventDefault(),Dt()}),m.addEventListener("change",t=>{t.target.matches("[data-pm-who]")&&N.set(t.target.value)}),window.addEventListener("beforeunload",t=>{q.size&&(t.preventDefault(),t.returnValue="")}),m.addEventListener("input",t=>{if(t.target.closest("[data-pm-field]")){R();return}let e=t.target.closest("[data-pm-strip]");if(e){let a=t.target.matches("[data-pm-vol]")?"volume":"pan";l.setTrack(i.id,e.dataset.pmStrip,{[a]:parseFloat(t.target.value)})}else t.target===p.seek&&(M=!0,p.time.textContent=`${P(p.seek.value/1e3*C())} / ${P(C())}`)}),p.seek.addEventListener("change",()=>{M=!1;let t=C();t&&l.seek(p.seek.value/1e3*t,i.id)});let Lt={ArrowLeft:-1,ArrowUp:-1,PageUp:-1,ArrowRight:1,ArrowDown:1,PageDown:1};document.addEventListener("keydown",t=>{if(!(t.repeat||t.altKey||t.ctrlKey||t.metaKey)){if(T){Lt[t.key]?(t.preventDefault(),F(Lt[t.key])):t.key==="Escape"?St():t.code==="Space"&&t.preventDefault();return}if(t.code==="Space"){if(t.target.closest?.("textarea, select, [contenteditable], input:not([type=range])"))return;t.preventDefault(),ht()}else if((t.key==="ArrowLeft"||t.key==="ArrowRight")&&u&&!g){if(t.target.closest?.("textarea, select, input, [contenteditable]"))return;t.preventDefault(),F(t.key==="ArrowLeft"?-1:1)}}}),l.on("state",({songId:t,state:e})=>{t===i.id&&(p.play.dataset.state=e,p.play.setAttribute("aria-label",e==="playing"?"Gera hl\xE9":"Spila"))}),l.on("time",({songId:t,time:e})=>{t===i.id&&(p.structure.dataset.duration!==String(C())&&(p.structure.dataset.duration=String(C()),mt(),w=-1),D(e))}),Z();try{localStorage.getItem(et)&&wt(!1)}catch{}Kt(),console.log(`permixer: ${s.length} l\xF6g`)}export{pe as default};
//# sourceMappingURL=permixer.js.map
