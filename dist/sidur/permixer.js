import{a as Lt}from"./chunk-IQVD34ZK.js";import"./chunk-FW4363Y4.js";function st(s){try{return localStorage.getItem(s)||""}catch{return""}}function U(s,o){try{o?localStorage.setItem(s,o):localStorage.removeItem(s)}catch{}}function zt(s,o){let m=new URL(location.href),l=(m.searchParams.get(s)||"").trim();if(!l)return{lykill:st(o),nyr:!1};U(o,l),m.searchParams.delete(s);try{history.replaceState(history.state,"",m.href)}catch{}return{lykill:l,nyr:!0}}var It="Ekkert samband.";function At(s,o){return fetch(s,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(o)}).then(m=>m.json().catch(()=>{throw new Error("Bakendinn svara\xF0i ekki eins og hann \xE1 a\xF0 gera.")}),()=>{throw new Error(It)})}var Kt="https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec",Tt="per-yfirlestur-lykill",Ct="per-yfirlestur-hver";function Mt(){let{lykill:s,nyr:o}=zt("k",Tt);return{key:s,fresh:o}}var N={get:()=>st(Ct),set:s=>U(Ct,s)};async function V(s,o){let m=await At(Kt,{...o,k:s});if(m.rangurLykill){U(Tt,"");let l=new Error("Hlekkurinn gildir ekki.");throw l.badKey=!0,l}return m}function jt(s){let o=/^(\d{1,2}):(\d\d)$/.exec((s||"").trim());return o?Number(o[1])*60+Number(o[2]):null}var Gt=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"];function it(s){let o=/^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(s||"");return o?`${Number(o[3])}. ${Gt[Number(o[2])-1]} kl. ${o[4]}`:""}var Nt=`/* \xC6fingas\xED\xF0an (permixer.js). Sprauta\xF0 inn \xFAr JS, allt undir .pm */

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

.pm-stage-key {
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
`;var qt=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Ot={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},Vt=[["Taktur",/drum|kick|snare|perc|trommu|slagverk|bass/],["Kassag\xEDtarar",/acoustic|akust|kassa/],["Rafg\xEDtarar",/guit|gítar|gitar|gtr/],["Hlj\xF3mbor\xF0",/piano|píanó|keys|organ|orgel|synth|rhodes|hljómb/],["S\xF6ngur",/vocal|vox|voice|söng|rödd|kór|choir|backing/],["Bl\xE1stur",/trombone|trumpet|sax|horn|básún|trompet|brass|blást/],["Anna\xF0",/.*/]],Wt=["Taktur","Rafg\xEDtarar","Kassag\xEDtarar","Hlj\xF3mbor\xF0","S\xF6ngur","Bl\xE1stur","Anna\xF0"],Yt=`<svg viewBox="0 0 10 16" aria-hidden="true">${[3,8,13].map(s=>`<circle cx="2.5" cy="${s}" r="1.5"/><circle cx="7.5" cy="${s}" r="1.5"/>`).join("")}</svg>`,Ht="pm-lagalisti",Jt=[["both","B\xE6\xF0i"],["chords","Hlj\xF3mar"],["lyrics","Texti"]];function z(s){return(s||"").replace(/[​-‏﻿]/g,"").trim()}var _t={\u00F0:"d",\u00FE:"th",\u00E6:"ae",\u00F6:"o"};function ot(s){return z(s).toLowerCase().replace(/[ðþæö]/g,o=>_t[o]).normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function Qt(s){let o=[],m=/([^\s:,;][^:,;\n]*?)\s*:\s*(https?:\/\/[^\s,;]+)/g,l;for(;l=m.exec(s.getAttribute("data-pm-stems")||"");)o.push([z(l[1]),l[2]]);Array.from(s.attributes).forEach(h=>{let i=z(h.value);h.name.startsWith("data-stem-")&&/^https?:\/\//.test(i)&&o.push([h.name.slice(10),i])});let y=new Set;return o.map(([h,i],M)=>{let w=ot(h)||`stem-${M+1}`;for(;y.has(w);)w+="-2";return y.add(w),{id:w,name:h,url:i}})}function Zt(s){let o=s.split(":").map(Number);return!o.length||o.some(m=>!Number.isFinite(m))?null:o.reduce((m,l)=>m*60+l,0)}function Xt(s){return z(s).split(/[\s,;]+/).filter(Boolean).map(Zt)}function te(s){return Array.from(s.querySelectorAll("[data-chords]")).map(o=>{let m=o.parentElement,l=z(o.getAttribute("data-chords")||o.textContent),y=m.querySelector(".w-richtext"),h=!!z(y?.textContent);if(!l&&!h)return null;let i=z(m.querySelector(".kafli-repeat")?.lastElementChild?.textContent);return{label:z(m.querySelector("h1, h2, h3, h4")?.textContent),chords:l,repeat:/^\d+$/.test(i)?Number(i):null,lyrics:h?y:null,start:null}}).filter(Boolean)}function ee(){return Array.from(document.querySelectorAll("[data-pm-song]")).map((s,o)=>{let m=s.closest(".w-dyn-item")||s.parentElement,l=z(s.getAttribute("data-pm-title"))||z(m.querySelector("h1, h2")?.textContent)||`Lag ${o+1}`,y=ot(s.getAttribute("data-pm-song"))||ot(l)||`lag-${o+1}`,h=te(m),i=Xt(s.getAttribute("data-pm-times"));return h.forEach((M,w)=>{M.start=i[w]??null}),{id:y,title:l,stems:Qt(s),sections:h}})}function f(s){return String(s).replace(/[&<>"']/g,o=>`&#${o.charCodeAt(0)};`)}function B(s){if(!Number.isFinite(s))return"0:00";let o=Math.max(0,Math.floor(s));return`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")}`}function ae(s){let o=s.replace(/([a-zA-Zþæöðáéíóúý])(\d+)$/,"$1 $2");return o.charAt(0).toUpperCase()+o.slice(1)}function ne(s){let o=s.name.toLowerCase();return Vt.find(([,m])=>m.test(o))[0]}function Bt(s,o){return s.split("/").map(m=>{let l=m.match(/^([A-G])([#b]?)(.*)$/);if(!l)return m;let y=Ot[l[1]+l[2]]||l[1]+l[2],h=qt.indexOf(y);return h<0?m:qt[((h+o)%12+12)%12]+l[3]}).join("/")}function re(s,o){return o?s.split(/(\s+|-+)/).map(m=>/^(\s+|-+)?$/.test(m)?m:Bt(m,o)).join(""):s}function se(s){for(let o of s.sections){let m=o.chords.match(/[A-G][#b]?/);if(m)return Ot[m[0]]||m[0]}return null}function ie(){let s=ee();if(!s.length)return;if(!document.querySelector("style[data-pm-style]")){let t=document.createElement("style");t.setAttribute("data-pm-style",""),t.textContent=Nt,document.head.appendChild(t)}let o=document.querySelector("[data-pm-song]").closest(".w-dyn-list"),m=document.querySelector("[data-pm-app]");m||(m=document.createElement("div"),(o||document.body).before(m)),o&&(o.hidden=!0),m.classList.add("pm");let l=Lt();s.forEach(t=>{l.define({id:t.id,tracks:t.stems.map(({id:a,url:e})=>({id:a,url:e}))})});let y=new Map,h="both",i=s.find(t=>`#${t.id}`===location.hash)||s[0],M=!1,w=-1,q=new Map(s.map(t=>[t.id,t])),u=null,g=null,A=null,C=!1,H=new Map;m.innerHTML=`
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
        <div class="pm-views" role="group" aria-label="S\xFDn">${Jt.map(([t,a])=>`<button type="button" data-pm-view="${t}">${a}</button>`).join("")}</div>
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
    </aside>`;let b=t=>m.querySelector(`[data-pm-el="${t}"]`),p={nav:b("nav"),step:b("step"),per:b("per"),introBox:b("intro-box"),introHint:b("intro-hint"),save:b("save"),status:b("status"),toolbar:b("toolbar"),title:b("title"),play:b("play"),time:b("time"),seek:b("seek"),note:b("note"),structure:b("structure"),key:b("key"),sections:b("sections"),count:b("count"),reset:b("reset"),strips:b("strips")};function T(t=i){return l.getSong(t.id)?.duration||0}function Pt(t,a){let e=t.sections.slice(a+1).find(n=>n.start!==null);return e?e.start:T(t)}function $(t){return u?.rows.get(t)?.lag||q.get(t)?.title||t}function W(){if(!u)return{listed:s.map(a=>a.id),other:[]};let t=g||u.order;return{listed:t,other:s.map(a=>a.id).filter(a=>!t.includes(a))}}function L(){let{listed:t,other:a}=W(),e=!!g,n=(d,x)=>{let v=t.indexOf(d),k=e?v===-1?`<span class="pm-order"><button type="button" data-pm-add="${f(d)}" aria-label="Setja ${f($(d))} \xE1 listann">+</button></span>`:`<span class="pm-order">
              <button type="button" data-pm-move="${f(d)}" data-pm-by="-1" ${v===0?"disabled":""} aria-label="F\xE6ra ${f($(d))} upp">\u2191</button>
              <button type="button" data-pm-move="${f(d)}" data-pm-by="1" ${v===t.length-1?"disabled":""} aria-label="F\xE6ra ${f($(d))} ni\xF0ur">\u2193</button>
              <button type="button" data-pm-remove="${f(d)}" aria-label="Taka ${f($(d))} af listanum">\xD7</button>
            </span>`:"";return`<li>${e?`<span class="pm-grip" data-pm-grip="${f(d)}" title="Draga til" aria-hidden="true">${Yt}</span>`:""}<button type="button" data-pm-pick="${f(d)}" aria-current="${d===i.id}">
          <span class="pm-num">${x===null?"\u2013":String(x+1).padStart(2,"0")}</span>
          <span>${f($(d))}</span></button>${k}</li>`},r="";if(u){let d=t.map(k=>jt(u.rows.get(k)?.lengd)),x=d.filter(k=>k===null).length,v=d.reduce((k,R)=>k+(R||0),0);r=`<div class="pm-songs-head">
          <span class="pm-total">${t.length} l\xF6g \xB7 ${B(v)}${x?` <small>(${x} \xE1n lengdar)</small>`:""}</span>
          <label class="pm-who">\xC9g er <select data-pm-who>
            <option value="">veldu</option>
            ${u.names.map(k=>`<option ${k===N.get()?"selected":""}>${f(k)}</option>`).join("")}
          </select></label>
          ${e?"":'<button type="button" class="pm-link" data-pm-order="edit">Breyta r\xF6\xF0</button>'}
        </div>`}let c=e?`<div class="pm-order-foot">
          <button type="button" class="pm-save" data-pm-order="save">Vista r\xF6\xF0</button>
          <button type="button" class="pm-link" data-pm-order="cancel">H\xE6tta vi\xF0</button>
          <p class="pm-status" data-pm-el="order-status" aria-live="polite"></p>
        </div>`:"";A=null,p.nav.classList.remove("is-dragging"),p.nav.classList.toggle("is-editing",e),p.nav.innerHTML=`${r}
      <ol>${t.filter(d=>q.has(d)).map(d=>n(d,t.indexOf(d))).join("")}</ol>
      ${a.length?`<p class="pm-songs-sub">Utan lagalista</p><ul>${a.map(d=>n(d,null)).join("")}</ul>`:""}
      ${c}`}function Y(){let{listed:t}=W(),a=t.indexOf(i.id);return a===-1?[null,null]:[t[a-1]||null,t[a+1]||null]}function J(){let[t,a]=Y(),[e,n]=p.step.querySelectorAll("[data-pm-step]");e.hidden=!u||!t,n.hidden=!u||!a,e.dataset.pmTarget=t||"",n.dataset.pmTarget=a||"",e.textContent=t?`\u2190 ${$(t)}`:"",n.textContent=a?`N\xE6st: ${$(a)} \u2192`:""}let _=["kynning","notur","lengd"],D=t=>p.per.querySelector(`[data-pm-field="${t}"]`);function F(t=i.id){return u?.rows.get(t)||null}function pt(){let t=F();return t?_.filter(a=>D(a).value!==(t[a]||"")):[]}function Q(t){let a=F();if(p.per.hidden=!a,!a)return;let e=H.get(i.id)||a;_.forEach(n=>{D(n).value=e[n]||""}),p.introHint.textContent=a.kynning.trim()?"":"(engin enn)",P(t)}function P(t){let a=F(),e=pt();e.length?H.set(i.id,Object.fromEntries(_.map(n=>[n,D(n).value]))):H.delete(i.id),p.save.disabled=!e.length,p.status.classList.toggle("is-warning",!!t||e.length>0),p.status.textContent=t||(e.length?"\xD3vista\xF0ar breytingar":a.breytt&&a.breyttAf?`S\xED\xF0ast vista\xF0 ${it(a.breytt)} af ${a.breyttAf}`:"")}function Z(){let t=i;L(),J(),Q(),p.title.textContent=$(t.id),p.play.disabled=!t.stems.length,p.note.hidden=!!t.stems.length,p.note.textContent=t.missing?"Ekki komi\xF0 \xED mixerinn: bara kynning og n\xF3tur.":"Engin stem fyrir \xFEetta lag \u2014 bara hlj\xF3mar og texti.",p.toolbar.hidden=!t.sections.length,w=-1,lt(),X(),ct(),ut(),I(l.getTime(t.id)),C&&yt()}function lt(){let t=i,e=!!T(t)&&t.sections.some(n=>n.start!==null);p.structure.hidden=!t.sections.length,p.structure.innerHTML=t.sections.map((n,r)=>{let c=e&&n.start!==null?Math.max(1,Pt(t,r)-n.start):1,d=e&&n.start!==null?"button":"div";return`<${d} ${d==="button"?'type="button"':""} class="pm-seg" data-pm-seg="${r}"
          style="flex-grow:${c}"><span>${f(n.label||`Kafli ${r+1}`)}</span></${d}>`}).join("")}function X(){mt(p.sections,i,!0),m.querySelectorAll("[data-pm-view]").forEach(t=>{t.setAttribute("aria-pressed",t.dataset.pmView===h?"true":"false")})}function mt(t,a,e){let n=y.get(a.id)||0;t.dataset.view=h,t.innerHTML="",a.sections.forEach((r,c)=>{let d=document.createElement("section");d.className="pm-section",d.dataset.pmSection=c;let x=e&&r.start!==null&&a.stems.length;if(d.innerHTML=`
        <${x?'button type="button"':"div"} class="pm-section-head" ${x?`data-pm-jump="${c}"`:""}>
          <span class="pm-label">${f(r.label||`Kafli ${c+1}`)}${r.repeat?` \xD7${r.repeat}`:""}</span>
          ${r.start!==null?`<span class="pm-start">${B(r.start)}</span>`:""}
        </${x?"button":"div"}>
        ${r.chords?`<div class="pm-chords">${f(re(r.chords,n))}</div>`:""}`,r.lyrics){let v=document.createElement("div");v.className="pm-lyrics",v.append(...Array.from(r.lyrics.cloneNode(!0).childNodes)),d.appendChild(v)}t.appendChild(d)})}function dt(t){let a=y.get(i.id)||0,e=se(i),n=a>0?`+${a}`:a<0?`${a}`:"";return e?`${Bt(e,a)}${n?` (${n})`:""}`:n||t}function ct(){p.key.textContent=dt("T\xF3nn")}function ut(){let t=i,a=l.getSong(t.id);if(!t.stems.length){p.strips.innerHTML="",p.count.textContent="Engar r\xE1sir",p.reset.hidden=!0;return}p.reset.hidden=!1;let e=new Map;t.stems.forEach((n,r)=>{let c=ne(n);e.has(c)||e.set(c,[]),e.get(c).push({stem:n,track:a.tracks[r]})}),p.strips.innerHTML=Wt.filter(n=>e.has(n)).map(n=>`<div class="pm-group"><div class="pm-group-name">${n}</div>${e.get(n).map(({stem:r,track:c})=>`<div class="pm-strip" data-pm-strip="${f(r.id)}">
              <span class="pm-strip-name">${f(ae(r.name))}</span>
              <button type="button" class="pm-ms" data-pm-mute aria-pressed="${c.muted}" aria-label="\xDEagga ${f(r.name)}">M</button>
              <button type="button" class="pm-ms" data-pm-solo aria-pressed="${c.soloed}" aria-label="S\xF3l\xF3 ${f(r.name)}">S</button>
              <input type="range" class="pm-vol" data-pm-vol min="0" max="1" step="0.01" value="${c.volume}" aria-label="Styrkur ${f(r.name)}">
              <input type="range" class="pm-pan" data-pm-pan min="-1" max="1" step="0.01" value="${c.pan}" aria-label="Pan ${f(r.name)}">
            </div>`).join("")}</div>`).join(""),gt()}function gt(){let t=l.getSong(i.id);if(!t)return;let a=t.tracks.some(n=>n.soloed),e=0;t.tracks.forEach(n=>{let r=p.strips.querySelector(`[data-pm-strip="${CSS.escape(n.id)}"]`),c=n.muted||a&&!n.soloed;c||(e+=1),r&&(r.classList.toggle("is-silent",c),r.querySelector("[data-pm-mute]").setAttribute("aria-pressed",n.muted),r.querySelector("[data-pm-solo]").setAttribute("aria-pressed",n.soloed))}),p.count.textContent=`${e} af ${t.tracks.length} r\xE1sum`}function I(t){let a=T();p.time.textContent=`${B(t)} / ${B(a)}`,M||(p.seek.value=a?Math.round(t/a*1e3):0),p.structure.style.setProperty("--pm-progress",a?`${t/a*100}%`:"0%");let e=-1;i.sections.forEach((n,r)=>{n.start!==null&&t>=n.start&&(e=r)}),e!==w&&(w=e,m.querySelectorAll("[data-pm-seg], [data-pm-section]").forEach(n=>{let r=Number(n.dataset.pmSeg??n.dataset.pmSection);n.classList.toggle("is-current",r===e)}))}function tt(t){let a=s.find(r=>r.id===t);if(!a||a===i)return;let e=l.isPlaying(i.id);i=a;let n=new URL(location.href);n.hash=a.id,history.replaceState(history.state,"",n.href),a.stems.length?e?l.play(a.id):l.select(a.id):l.pause(),Z()}function ft(){i.stems.length&&(l.isPlaying(i.id)?l.pause(i.id):l.play(i.id))}function ht(t){let a=i.sections[t]?.start;a!=null&&(l.isPlaying(i.id)?l.seek(a,i.id):(l.seek(a,i.id),l.play(i.id)))}function K(t){let a=Y()[t<0?0:1];a&&tt(a)}function bt(t){let a=new Map(t.map(e=>[e.id,e]));t.forEach(e=>{if(q.has(e.id))return;let n={id:e.id,title:e.lag,stems:[],sections:[],missing:!0};s.push(n),q.set(e.id,n)}),u={...u,rows:a,order:t.filter(e=>e.rod!==null).map(e=>e.id)}}async function Rt(){let{key:t,fresh:a}=Mt();if(!t)return;let e=n=>{u={key:t,names:n.nofn},bt(n.log),!location.hash&&u.order.length&&!l.isPlaying(i.id)&&(i=q.get(u.order[0])),Z()};try{let n=await V(t,{action:"lagalisti"});if(!n.ok)throw new Error(n.villa);e(n);try{localStorage.setItem(Ht,JSON.stringify({nofn:n.nofn,log:n.log,kl:Date.now()}))}catch{}}catch(n){let r=null;try{r=!n.badKey&&JSON.parse(localStorage.getItem(Ht)||"null")}catch{}if(r?.log){e(r),p.note.hidden=!1;let c=new Date(r.kl),d=v=>String(v).padStart(2,"0"),x=`${c.getFullYear()}-${d(c.getMonth()+1)}-${d(c.getDate())} ${d(c.getHours())}:${d(c.getMinutes())}`;p.note.textContent=`N\xE1\xF0i ekki \xED n\xFDjustu t\xF3nleikar\xF6\xF0ina; s\xFDni r\xF6\xF0ina eins og h\xFAn var ${it(x)}.`;return}(a||n.badKey)&&(p.note.hidden=!1,p.note.textContent=n.badKey?"Hlekkurinn gildir ekki, svo t\xF3nleikar\xF6\xF0in s\xE9st ekki. Biddu \xD3la um n\xFDjan.":"N\xE1\xF0i ekki \xED t\xF3nleikar\xF6\xF0ina. Reyndu a\xF0 endurhla\xF0a s\xED\xF0una.")}}async function Dt(){let t=F(),a=pt();if(!t||!a.length)return;if(!N.get()){P("Veldu fyrst hver \xFE\xFA ert, efst \xED lagalistanum.");return}let e=i.id,n=Object.fromEntries(a.map(r=>[r,D(r).value]));p.save.disabled=!0,p.status.textContent="Vista \u2026";try{let r=await V(u.key,{action:"lagVista",id:e,hver:N.get(),breytt:t.breytt,reitir:n});if(r.arekstur){u.rows.set(e,r.lag),i.id===e&&P(r.villa);return}if(!r.ok)throw new Error(r.villa);u.rows.set(e,r.lag),H.delete(e),i.id===e&&Q(),L()}catch(r){i.id===e&&P(`T\xF3kst ekki a\xF0 vista. ${r.message}`)}}function G(t){let a=m.querySelector('[data-pm-el="order-status"]');a&&(a.textContent=t)}async function Ft(){if(!N.get()){G("Veldu fyrst hver \xFE\xFA ert.");return}let t=u.order,a=g;if(a.join(`
`)===t.join(`
`)){g=null,L();return}G("Vista \u2026");try{let e=await V(u.key,{action:"rodVista",hver:N.get(),adur:t,rod:a.map(n=>({id:n,lag:$(n)}))});if(!e.ok&&!e.arekstur)throw new Error(e.villa);bt(e.log),g=e.arekstur?[...u.order]:null,L(),J(),H.has(i.id)||Q(),e.arekstur&&G(e.villa)}catch(e){G(`T\xF3kst ekki a\xF0 vista. ${e.message}`)}}m.addEventListener("click",t=>{let a=t.target.closest("button");if(!a||!m.contains(a))return;let e=a.dataset;if(e.pmPick)tt(e.pmPick);else if(e.pmTarget)tt(e.pmTarget);else if(e.pmEl==="stage-open")kt(!0);else if(e.pmOrder==="edit")g=[...u.order],L();else if(e.pmOrder==="cancel")g=null,L(),J();else if(e.pmOrder==="save")Ft();else if(e.pmMove){let n=g.indexOf(e.pmMove),r=n+Number(e.pmBy);n!==-1&&r>=0&&r<g.length&&([g[n],g[r]]=[g[r],g[n]],L(),m.querySelector(`[data-pm-move="${CSS.escape(e.pmMove)}"][data-pm-by="${e.pmBy}"]:not(:disabled)`)?.focus())}else if(e.pmRemove)g=g.filter(n=>n!==e.pmRemove),L();else if(e.pmAdd)g=[...g,e.pmAdd],L();else if(e.pmEl==="play")ft();else if(e.pmSeg!==void 0)ht(Number(e.pmSeg));else if(e.pmJump!==void 0)ht(Number(e.pmJump));else if(e.pmView)h=e.pmView,X(),w=-1,I(l.getTime(i.id));else if(e.pmTranspose)y.set(i.id,(y.get(i.id)||0)+Number(e.pmTranspose)),X(),ct(),w=-1,I(l.getTime(i.id));else if(e.pmEl==="reset")l.resetMix(i.id),ut();else if(e.pmMute!==void 0||e.pmSolo!==void 0){let n=a.closest("[data-pm-strip]").dataset.pmStrip,r=l.getSong(i.id).tracks.find(d=>d.id===n),c=e.pmMute!==void 0?"muted":"soloed";l.setTrack(i.id,n,{[c]:!r[c]}),gt()}});function xt(t){let{li:a,ph:e,offset:n}=A,r=p.nav,c=r.getBoundingClientRect();t<c.top+32?r.scrollTop-=12:t>c.bottom-32&&(r.scrollTop+=12),a.style.top=`${t-c.top+r.scrollTop-n}px`;let d=r.querySelector("ol"),v=[...r.querySelectorAll("ol > li, .pm-songs-sub, ul > li")].filter(k=>k!==a&&k!==e).find(k=>{let R=k.getBoundingClientRect();return t<R.top+R.height/2});v?v.matches(".pm-songs-sub")?d.append(e):v.previousElementSibling!==e&&v.before(e):(r.querySelector("ul")||d).append(e)}p.nav.addEventListener("pointerdown",t=>{let a=t.target.closest("[data-pm-grip]");if(!a||!g||A||t.button!==0)return;t.preventDefault();let e=a.closest("li"),n=e.getBoundingClientRect(),r=document.createElement("li");r.className="pm-drop",r.style.height=`${n.height}px`,e.after(r),A={li:e,ph:r,id:a.dataset.pmGrip,offset:t.clientY-n.top,pointer:t.pointerId},a.setPointerCapture(t.pointerId),e.classList.add("is-dragging"),p.nav.classList.add("is-dragging"),xt(t.clientY)}),p.nav.addEventListener("pointermove",t=>{A&&t.pointerId===A.pointer&&xt(t.clientY)});function vt(t){if(!A||t.pointerId!==A.pointer)return;let{li:a,ph:e,id:n}=A;t.type==="pointerup"&&p.nav.contains(e)&&(g=[...p.nav.querySelectorAll("ol > li")].filter(c=>c!==a).map(c=>c===e?n:c.querySelector("[data-pm-grip]")?.dataset.pmGrip).filter(Boolean).concat(g.filter(c=>!q.has(c)))),L()}p.nav.addEventListener("pointerup",vt),p.nav.addEventListener("pointercancel",vt);let et="pm-svidshamur",S=document.createElement("div");S.className="pm-stage",S.hidden=!0,S.setAttribute("role","dialog"),S.setAttribute("aria-label","Svi\xF0shamur"),S.innerHTML=`
    <div class="pm-stage-head">
      <span class="pm-stage-pos" data-pm-st="pos"></span>
      <span class="pm-stage-title" data-pm-st="title"></span>
      <span class="pm-stage-key" data-pm-st="key"></span>
      <span class="pm-stage-next" data-pm-st="next"></span>
      <button type="button" class="pm-stage-close" data-pm-st="close" aria-label="Loka svi\xF0sham">\xD7</button>
    </div>
    <div class="pm-stage-main">
      <div class="pm-stage-body pm-sections" data-pm-st="body"></div>
      <button type="button" class="pm-stage-edge" data-pm-st="prev" data-pm-st-step="-1" aria-label="Fyrra lag"><span>\u2039</span></button>
      <button type="button" class="pm-stage-edge" data-pm-st="next-edge" data-pm-st-step="1" aria-label="N\xE6sta lag"><span>\u203A</span></button>
    </div>`,document.body.appendChild(S);let E=Object.fromEntries([...S.querySelectorAll("[data-pm-st]")].map(t=>[t.dataset.pmSt.replace(/-(\w)/g,(a,e)=>e.toUpperCase()),t]));function yt(){let{listed:t}=W(),a=t.indexOf(i.id),[e,n]=Y();E.pos.textContent=a===-1?"\u2013":`${String(a+1).padStart(2,"0")} / ${t.length}`,E.title.textContent=$(i.id),E.key.textContent=dt(""),E.next.textContent=n?`N\xE6st: ${$(n)}`:a===t.length-1?"S\xED\xF0asta lag":"",E.prev.hidden=!e,E.nextEdge.hidden=!n,mt(E.body,i,!1),i.sections.length?at():(E.body.innerHTML='<p class="pm-stage-empty">Engir hlj\xF3mar e\xF0a texti komnir fyrir \xFEetta lag.</p>',E.body.style.columnCount=1,E.body.style.fontSize="24px")}function at(){let t=E.body,a=()=>t.scrollHeight<=t.clientHeight+1&&t.scrollWidth<=t.clientWidth+1,e=t.clientWidth>t.clientHeight*1.1?[1,2,3]:[1,2],n={size:12,cols:1};e.forEach(r=>{t.style.columnCount=r;let c=12,d=64;for(;d-c>.5;){let x=(c+d)/2;t.style.fontSize=`${x}px`,a()?c=x:d=x}c>n.size*1.08&&(n={size:c,cols:r})}),t.style.columnCount=n.cols,t.style.fontSize=`${Math.floor(n.size)}px`,t.scrollTop=0,t.scrollLeft=0}let O=null;async function nt(){if(!(!C||O||!navigator.wakeLock||document.visibilityState!=="visible"))try{O=await navigator.wakeLock.request("screen"),O.addEventListener("release",()=>{O=null})}catch{}}document.addEventListener("visibilitychange",nt);function kt(t){C=!0;try{localStorage.setItem(et,"1")}catch{}if(S.hidden=!1,document.documentElement.classList.add("pm-stage-on"),t){let a=document.documentElement;try{(a.requestFullscreen||a.webkitRequestFullscreen)?.call(a)?.catch?.(()=>{})}catch{}}St(),nt(),yt(),document.fonts?.ready.then(()=>C&&at())}function wt(){C=!1;try{localStorage.removeItem(et)}catch{}S.hidden=!0,document.documentElement.classList.remove("pm-stage-on"),O?.release().catch(()=>{}),O=null;try{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.webkitFullscreenElement&&document.webkitExitFullscreen()}catch{}history.state?.pmStage&&history.back()}function St(){if(history.state?.pmStage)return;let t=new URL(location.href);t.hash=i.id,history.pushState({...history.state,pmStage:!0},"",t.href)}window.addEventListener("popstate",()=>{if(C)St();else if(location.hash!==`#${i.id}`){let t=new URL(location.href);t.hash=i.id,history.replaceState(history.state,"",t.href)}});let rt=!1;window.addEventListener("resize",()=>{!C||rt||(rt=!0,requestAnimationFrame(()=>{rt=!1,C&&at()}))});let j=null,$t=0;S.addEventListener("pointerdown",t=>{j={x:t.clientX,y:t.clientY,id:t.pointerId},nt()}),S.addEventListener("pointerup",t=>{if(!j||t.pointerId!==j.id)return;let a=t.clientX-j.x,e=t.clientY-j.y;j=null,Math.abs(a)>60&&Math.abs(a)>2*Math.abs(e)&&($t=performance.now(),K(a<0?1:-1))}),S.addEventListener("pointercancel",()=>{j=null}),S.addEventListener("click",t=>{if(performance.now()-$t<500)return;let a=t.target.closest("button");a&&(a.dataset.pmSt==="close"?wt():a.dataset.pmStStep&&K(Number(a.dataset.pmStStep)))}),p.per.addEventListener("submit",t=>{t.preventDefault(),Dt()}),m.addEventListener("change",t=>{t.target.matches("[data-pm-who]")&&N.set(t.target.value)}),window.addEventListener("beforeunload",t=>{H.size&&(t.preventDefault(),t.returnValue="")}),m.addEventListener("input",t=>{if(t.target.closest("[data-pm-field]")){P();return}let a=t.target.closest("[data-pm-strip]");if(a){let e=t.target.matches("[data-pm-vol]")?"volume":"pan";l.setTrack(i.id,a.dataset.pmStrip,{[e]:parseFloat(t.target.value)})}else t.target===p.seek&&(M=!0,p.time.textContent=`${B(p.seek.value/1e3*T())} / ${B(T())}`)}),p.seek.addEventListener("change",()=>{M=!1;let t=T();t&&l.seek(p.seek.value/1e3*t,i.id)});let Et={ArrowLeft:-1,ArrowUp:-1,PageUp:-1,ArrowRight:1,ArrowDown:1,PageDown:1};document.addEventListener("keydown",t=>{if(!(t.repeat||t.altKey||t.ctrlKey||t.metaKey)){if(C){Et[t.key]?(t.preventDefault(),K(Et[t.key])):t.key==="Escape"?wt():t.code==="Space"&&t.preventDefault();return}if(t.code==="Space"){if(t.target.closest?.("textarea, select, [contenteditable], input:not([type=range])"))return;t.preventDefault(),ft()}else if((t.key==="ArrowLeft"||t.key==="ArrowRight")&&u&&!g){if(t.target.closest?.("textarea, select, input, [contenteditable]"))return;t.preventDefault(),K(t.key==="ArrowLeft"?-1:1)}}}),l.on("state",({songId:t,state:a})=>{t===i.id&&(p.play.dataset.state=a,p.play.setAttribute("aria-label",a==="playing"?"Gera hl\xE9":"Spila"))}),l.on("time",({songId:t,time:a})=>{t===i.id&&(p.structure.dataset.duration!==String(T())&&(p.structure.dataset.duration=String(T()),lt(),w=-1),I(a))}),Z();try{localStorage.getItem(et)&&kt(!1)}catch{}Rt(),console.log(`permixer: ${s.length} l\xF6g`)}export{ie as default};
//# sourceMappingURL=permixer.js.map
