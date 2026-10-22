// Nafir build 309588 (2026-10-22T21:58:29.672Z)
(()=>{var Tt=`/* Nafir-s\xED\xF0urnar: yfirlit bandsins (.vst) og birtingars\xED\xF0an (.vbt).\r
   Sprauta\xF0 inn af src/nafir/index.js. Grunnurinn (beige t\xE6ki\xF0, Dymo-mi\xF0ar,\r
   lj\xF3s, teljarar) heitir vst-* og er sameiginlegur. */\r
  /* Sami grunnur og /nafir: beige t\xE6ki\xF0, d\xF6kkir skj\xE1ir, Dymo-mi\xF0ar */\r
  body.nafir-beige { background-color: #d0c3aa; }\r
\r
  .vst { color: var(--black-800, #2e2e2e); font-family: "Open Sans", sans-serif; font-size: 1rem; font-weight: 400; line-height: 1.5; padding: 0 1rem 5rem; display: grid; gap: 2rem; }\r
  .vst [hidden] { display: none !important; }\r
  .vst p, .vst ul { margin: 0; }\r
  .vst ul { list-style: none; padding: 0; }\r
  .vst-body { display: grid; gap: 3rem; }\r
  .vst-small { font-size: .875rem; }\r
\r
  .vst-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem 2rem; flex-wrap: wrap; }\r
  .vst-dymo { font-family: Dymo, Arial, sans-serif; font-size: 1.625rem; line-height: 1.4; color: var(--black-800, #2e2e2e); user-select: none; margin-bottom: .75rem; }\r
  .vst-head .vst-dymo { margin-bottom: 0; }\r
  .vst-dymo--red { color: var(--vogor-red, #75161c); font-size: 2rem; }\r
  .vst-counts { display: flex; flex-wrap: wrap; gap: .75rem 1.5rem; }\r
  .vst-count { display: flex; align-items: center; gap: .6rem; text-transform: uppercase; font-size: .6875rem; font-weight: 700; letter-spacing: .12em; }\r
  .vst-counter { display: inline-flex; align-items: center; justify-content: center; min-width: 3rem; background: #3d3c3c; color: #fff; border-radius: 4px; padding: .25rem .6rem; font-weight: 800; font-size: 1rem; letter-spacing: .2em; text-indent: .2em; font-variant-numeric: tabular-nums; }\r
\r
  .vst-status { display: flex; align-items: center; gap: .6rem; text-transform: uppercase; font-size: .75rem; font-weight: 700; letter-spacing: .12em; margin-bottom: .5rem; }\r
  .vst-led { flex: 0 0 auto; display: inline-block; width: .75rem; height: .75rem; border-radius: 50%; border: 1px solid #2e2e2e80; background: #8d877a; }\r
  .vst-led--done { background: var(--play-green, #18e91c); box-shadow: 0 0 6px var(--play-green, #18e91c); }\r
  .vst-led--work { background: #f2b632; box-shadow: 0 0 6px #f2b63299; }\r
  .vst-led--hold { background: var(--vogor-blue, #85a8ac); }\r
  .vst-led--late { background: var(--stopp-red, #fc0000); box-shadow: 0 0 6px #fc000080; }\r
  .vst-led--wait { background: #f2b632; animation: vst-blink 1s steps(2, start) infinite; }\r
  @keyframes vst-blink { to { visibility: hidden; } }\r
  @media (prefers-reduced-motion: reduce) { .vst-led--wait { animation: none; } }\r
\r
  .vst-screen { background-color: #494747; background-image: linear-gradient(#ffffff14, #ffffff05 10%, #0000000a); border-radius: .5rem; padding: 1.25rem 1.5rem 1.5rem; color: #fff; display: grid; gap: .75rem; box-shadow: inset 0 1px #ffffff1f, 0 1px 2px #0003; }\r
  .vst-screen-row { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }\r
  .vst-screen-label { text-transform: uppercase; font-size: .6875rem; font-weight: 700; letter-spacing: .15em; }\r
  .vst-screen-value { font-weight: 800; font-size: 1.25rem; letter-spacing: .08em; font-variant-numeric: tabular-nums; }\r
  .vst-meter { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 3px; height: 1.25rem; }\r
  .vst-meter span { background: #2b2824; border-radius: 1px; }\r
  .vst-meter span.on { background: var(--play-green, #18e91c); box-shadow: 0 0 5px #18e91c80; }\r
\r
  .vst-list li, .vst-group li { display: grid; grid-template-columns: .75rem minmax(0, 1fr) auto 4.5rem; gap: .25rem .9rem; align-items: baseline; padding: .55rem 0; border-bottom: 1px solid #2e2e2e40; }\r
  .vst-list li > .vst-led, .vst-group li > .vst-led { align-self: center; }\r
  .vst-verk { font-weight: 600; }\r
  .vst-verk small { display: block; font-weight: 400; font-size: .8125rem; opacity: .85; }\r
  .vst-hver, .vst-frestur { font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; }\r
  /* Sta\xF0a og eigandi verks: tveir fellilistar hli\xF0 vi\xF0 hli\xF0 */\r
  .vst-val { display: grid; grid-template-columns: 7.75rem 7rem; gap: .5rem; align-items: center; }\r
  .vst select { width: 100%; min-width: 0; padding: .2rem .25rem; font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; color: inherit; background-color: transparent; border: 1px solid #2e2e2e40; border-radius: 3px; cursor: pointer; }\r
  .vst select:hover { border-color: #2e2e2e; background-color: #ffffff40; }\r
  .vst select:disabled { opacity: .5; cursor: default; }\r
  .vst-hint { margin-bottom: .5rem; }\r
  .vst-msg { color: #a30d0d; font-weight: 600; }\r
  .vst-msg:empty { display: none; }\r
  .vst-frestur { text-align: right; white-space: nowrap; }\r
  .vst-seint .vst-frestur { color: #a30d0d; font-weight: 700; }\r
  .vst-lokid .vst-verk { font-weight: 400; opacity: .6; text-decoration: line-through; text-decoration-thickness: 1px; }\r
  .vst-lokid .vst-val, .vst-lokid .vst-frestur { opacity: .6; }\r
\r
  .vst-groups { display: grid; gap: .5rem; }\r
  .vst-group summary { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; cursor: pointer; list-style: none; padding: .6rem 0; border-bottom: 2px solid #2e2e2e; text-transform: uppercase; font-size: .8125rem; font-weight: 800; letter-spacing: .12em; }\r
  .vst-group summary::-webkit-details-marker { display: none; }\r
  .vst-group summary span:last-child { font-family: "Courier Prime", Courier, monospace; font-weight: 400; letter-spacing: 0; }\r
  .vst-group summary span:first-child::after { content: " +"; opacity: .55; }\r
  .vst-group[open] summary span:first-child::after { content: " \u2013"; }\r
  .vst-group ul { margin-bottom: 1rem; }\r
\r
  .vst-scroll { overflow-x: auto; }\r
  .vst-table { border-collapse: collapse; width: 100%; margin-bottom: .75rem; }\r
  .vst-table th { text-align: left; text-transform: uppercase; font-size: .625rem; font-weight: 700; letter-spacing: .15em; padding: .4rem .75rem .4rem 0; border-bottom: 2px solid #2e2e2e; white-space: nowrap; }\r
  .vst-table td { padding: .5rem .75rem .5rem 0; border-bottom: 1px solid #2e2e2e40; font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; white-space: nowrap; }\r
  .vst-table td:first-child { font-family: "Open Sans", sans-serif; font-weight: 600; }\r
  .vst-table tr.vst-flokkur th { padding-top: 1.25rem; border-bottom: 1px solid #2e2e2e; }\r
  /* Sta\xF0a p\xF3sts: gr\xE6nt sent, dekkra gr\xE6nt svara\xF0, rautt skoppa\xF0i, f\xF6lna\xF0 sleppt */\r
  .vst-table tr.vst-st-sent td { background: rgba(40, 160, 50, .16); }\r
  .vst-table tr.vst-st-svarad td { background: rgba(40, 160, 50, .34); }\r
  .vst-table tr.vst-st-skoppadi td { background: rgba(200, 30, 30, .14); }\r
  .vst-table tr.vst-st-sleppt td { opacity: .45; text-decoration: line-through; text-decoration-thickness: 1px; }\r
  .vst-table td:first-child { padding-left: .5rem; }\r
  .vst-table th:first-child { padding-left: .5rem; }\r
\r
  /* Efni: einn b\xFAtur per kort, \xEDslenska og enska hli\xF0 vi\xF0 hli\xF0 */\r
  .vst-efni { display: grid; gap: 1rem; margin: .75rem 0 1.25rem; }\r
  .vst-but { border: 1px solid #2e2e2e40; border-radius: .375rem; padding: .9rem 1rem 1rem; background: #ffffff26; display: grid; gap: .6rem; }\r
  .vst-but-haus { display: flex; justify-content: space-between; align-items: baseline; gap: .5rem 1rem; flex-wrap: wrap; }\r
  .vst-but-heiti { font-weight: 700; }\r
  .vst-but-birta { font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; white-space: nowrap; }\r
  .vst-but-birta.vst-idag { color: #a30d0d; font-weight: 700; }\r
  .vst-but-lidid { opacity: .6; }\r
  .vst-but-notur { font-size: .8125rem; opacity: .85; white-space: pre-wrap; }\r
  .vst-maltextar { display: grid; grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); gap: .75rem; }\r
  .vst-maltexti { display: grid; gap: .4rem; align-content: start; }\r
  .vst-mal { text-transform: uppercase; font-size: .625rem; font-weight: 700; letter-spacing: .15em; }\r
  .vst-texti { margin: 0; white-space: pre-wrap; overflow-wrap: anywhere; font-family: inherit; font-size: .875rem; line-height: 1.55; background: #ffffff59; border-radius: .25rem; padding: .6rem .75rem; max-height: 16rem; overflow-y: auto; }\r
  .vst-slod { display: flex; align-items: center; gap: .5rem .75rem; flex-wrap: wrap; font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; overflow-wrap: anywhere; }\r
  .vst-slod a { color: inherit; }\r
  .vst-mynd { display: block; max-width: 12rem; max-height: 8rem; border-radius: .25rem; box-shadow: 0 1px 3px #0004; }\r
  .vst .vst-afrita { justify-self: start; display: inline-block; padding: .3rem .8rem; background: #494848; color: #fff; border: 0; border-radius: .25rem; font-family: "Open Sans", sans-serif; font-size: .6875rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; text-decoration: none; cursor: pointer; }\r
  .vst .vst-afrita:hover { background: #3d3c3c; }\r
  .vst .vst-afrita.vst-afritad { background: #1f7a24; }\r
\r
  /* F\xE6rslur: sta\xF0a, breyta og n\xFD f\xE6rsla */\r
  .vst-eg { display: flex; align-items: center; gap: .5rem; margin-bottom: .75rem; }\r
  .vst-eg select { width: auto; }\r
  .vst-but-hlid { display: flex; align-items: center; gap: .5rem .75rem; flex-wrap: wrap; }\r
  .vst-but-hlid select { width: auto; }\r
  .vst-but-postad { background: rgba(40, 160, 50, .16); }\r
  .vst-but-sleppa { opacity: .5; }\r
  .vst-but-seint { color: #a30d0d; font-weight: 700; }\r
  .vst-but-breytt { font-size: .75rem; opacity: .7; }\r
  .vst .vst-but-takki { background: transparent; color: inherit; border: 1px solid #2e2e2e80; }\r
  .vst .vst-but-takki:hover { background: #ffffff59; }\r
  .vst-form { display: grid; gap: .6rem; }\r
  .vst-form label { display: grid; gap: .2rem; font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; }\r
  .vst-form input, .vst-form textarea { font: inherit; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 400; color: inherit; background: #ffffff8c; border: 1px solid #2e2e2e40; border-radius: .25rem; padding: .45rem .6rem; width: 100%; box-sizing: border-box; }\r
  .vst-form textarea { min-height: 9rem; resize: vertical; line-height: 1.5; }\r
  .vst-form textarea.vst-stutt { min-height: 3.5rem; }\r
  .vst-form-rod { display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: .6rem; }\r
  .vst-form-takkar { display: flex; gap: .5rem; flex-wrap: wrap; align-items: center; }\r
  .vst-form small { font-weight: 400; text-transform: none; letter-spacing: 0; opacity: .8; }\r
  .vst-meta-texti { max-width: 24rem; overflow: hidden; text-overflow: ellipsis; }\r
  .vst-meta-texti a { color: inherit; }\r
  .vst-table td.vst-tala { text-align: right; }\r
  .vst-but-meta { display: flex; flex-wrap: wrap; gap: .25rem 1rem; font-family: "Courier Prime", Courier, monospace; font-size: .875rem; }\r
  .vst-but-meta a { color: inherit; }\r
\r
  .vst-foot { display: grid; gap: 1.25rem; }\r
  .vst-legend { display: flex; flex-wrap: wrap; gap: .5rem 1.5rem; font-size: .8125rem; }\r
  .vst-legend li { display: flex; align-items: center; gap: .5rem; }\r
  .vst-keys { display: flex; flex-wrap: wrap; gap: .75rem; }\r
  .vst .vst-key { display: inline-flex; align-items: center; justify-content: center; min-height: 3rem; padding: .5rem 1.5rem; background-color: #494848; color: #fff; border: 0; border-radius: .25rem; box-shadow: 2px 2px 11px #5f5f5fed; text-decoration: none; text-transform: uppercase; font-family: inherit; font-size: .8125rem; font-weight: 700; letter-spacing: .15em; cursor: pointer; }\r
  .vst .vst-key:hover { background-color: #3d3c3c; }\r
  .vst .vst-key:active { transform: translateY(1px); box-shadow: 1px 1px 5px #5f5f5fed; }\r
  .vst .vst-key:disabled { opacity: .6; cursor: default; }\r
  .vst a:focus-visible, .vst button:focus-visible, .vst summary:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }\r
\r
  @media (max-width: 767px) {\r
    .vst-dymo--red { font-size: 1.5rem; }\r
    .vst-list li, .vst-group li { grid-template-columns: .75rem minmax(0, 1fr) auto; }\r
    .vst-val { grid-column: 2 / -1; grid-row: 2; grid-template-columns: repeat(2, minmax(0, 9rem)); margin-top: .15rem; }\r
    .vst-frestur { grid-column: 3; grid-row: 1; }\r
  }\r
\r
  /* ---------- Birtingars\xED\xF0an ---------- */\r
  .vbt { color: #2e2e2e; font-family: "Open Sans", sans-serif; font-size: 1rem; line-height: 1.5; padding: 0 1rem 5rem; display: grid; gap: 2rem; }\r
  .vbt [hidden] { display: none !important; }\r
  .vbt p, .vbt ul { margin: 0; }\r
  .vbt ul { list-style: none; padding: 0; }\r
  .vbt a { color: inherit; }\r
  .vbt-app { display: grid; gap: 3rem; }\r
  .vbt-small { font-size: .875rem; }\r
  .vbt-hint { margin-bottom: 1rem; }\r
  .vbt-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem 2rem; flex-wrap: wrap; }\r
  .vbt-head .vst-dymo { margin-bottom: 0; }\r
  .vst-led--ok { background: #18e91c; box-shadow: 0 0 6px #18e91c; }\r
  .vst-led--bid { background: #f2b632; box-shadow: 0 0 6px #f2b63299; }\r
  .vst-led--villa { background: #fc0000; box-shadow: 0 0 6px #fc000080; }\r
  .vst-led--prufa { background: #85a8ac; }\r
\r
  .vbt-gate { display: flex; flex-wrap: wrap; gap: .75rem; align-items: center; }\r
  .vbt-gate input { font: inherit; padding: .4rem .6rem; border: 1px solid #2e2e2e60; border-radius: .25rem; background: #ffffff8c; }\r
  .vbt-msg { color: #a30d0d; font-weight: 600; font-size: .875rem; }\r
  .vbt-msg:empty { display: none; }\r
  .vbt-msg--ok { color: #1f7a24; }\r
  .vbt .vbt-btn { display: inline-block; padding: .45rem 1rem; background: #494848; color: #fff; border: 0; border-radius: .25rem; font: inherit; font-size: .75rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; cursor: pointer; }\r
  .vbt .vbt-btn:hover { background: #3d3c3c; }\r
  .vbt .vbt-btn:disabled { opacity: .5; cursor: default; }\r
  .vbt .vbt-btn--ljos { background: transparent; color: inherit; border: 1px solid #2e2e2e80; }\r
  .vbt .vbt-btn--ljos:hover { background: #ffffff59; }\r
  .vbt-link { background: none; border: 0; padding: 0; font: inherit; color: inherit; text-decoration: underline; cursor: pointer; }\r
\r
  .vbt-rod li { display: grid; grid-template-columns: .75rem 7.5rem 8rem minmax(0, 1fr) auto; gap: .25rem .9rem; align-items: center; padding: .55rem 0; border-bottom: 1px solid #2e2e2e40; }\r
  .vbt-rod .vbt-timi { font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; }\r
  .vbt-rod .vbt-heiti { font-weight: 600; min-width: 0; }\r
  .vbt-rod .vbt-heiti small { display: block; font-weight: 400; font-size: .8125rem; overflow-wrap: anywhere; }\r
  .vbt-rod .vbt-buid { opacity: .65; }\r
\r
  .vbt-listi { display: grid; gap: 1.5rem; }\r
  .vbt-kort { border: 1px solid #2e2e2e40; border-radius: .5rem; padding: 1rem; background: #ffffff26; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 1.25rem; }\r
  .vbt-kort--postad { background: rgba(40, 160, 50, .12); }\r
  .vbt-kort-haus { grid-column: 1 / -1; display: flex; justify-content: space-between; gap: .5rem 1rem; flex-wrap: wrap; align-items: baseline; }\r
  .vbt-kort-haus b { font-size: 1.0625rem; }\r
  .vbt-merki { font-family: "Courier Prime", Courier, monospace; font-size: .875rem; }\r
  .vbt-stjorn { display: grid; gap: .7rem; align-content: start; }\r
  .vbt-stjorn label { display: grid; gap: .2rem; font-size: .6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; }\r
  .vbt-stjorn input, .vbt-stjorn select, .vbt-stjorn textarea { font: inherit; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 400; color: inherit; background: #ffffff8c; border: 1px solid #2e2e2e40; border-radius: .25rem; padding: .4rem .55rem; width: 100%; box-sizing: border-box; }\r
  .vbt-stjorn textarea { min-height: 10rem; resize: vertical; line-height: 1.5; }\r
  .vbt-tvo { display: grid; grid-template-columns: 1fr 1fr; gap: .6rem; }\r
  .vbt-midlar { display: flex; gap: 1.25rem; flex-wrap: wrap; font-size: .9375rem; }\r
  .vbt-midlar label { display: flex; flex-direction: row; align-items: center; gap: .4rem; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 600; }\r
  .vbt-midlar input { width: auto; }\r
  .vbt-teljari { font-family: "Courier Prime", Courier, monospace; font-size: .8125rem; font-weight: 400; letter-spacing: 0; text-transform: none; opacity: .8; }\r
  .vbt-teljari.vbt-of { color: #a30d0d; font-weight: 700; opacity: 1; }\r
  .vbt-adv { font-size: .8125rem; color: #8a4b00; font-weight: 600; }\r
  .vbt-adv:empty { display: none; }\r
  .vbt-takkar { display: flex; gap: .5rem; flex-wrap: wrap; align-items: center; }\r
  .vbt-fyrri { display: grid; gap: .3rem; font-size: .8125rem; }\r
  .vbt-fyrri li { display: flex; gap: .5rem; align-items: center; flex-wrap: wrap; }\r
\r
  /* Forsko\xF0un: einfaldar eftirmyndir af f\xE6rslu \xE1 Instagram og Facebook */\r
  .vbt-forsk { display: grid; gap: .75rem; align-content: start; }\r
  .vbt-skipta { display: flex; gap: .4rem; }\r
  .vbt-skipta button { font: inherit; font-size: .6875rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: .25rem .6rem; border: 1px solid #2e2e2e80; border-radius: 1rem; background: transparent; color: inherit; cursor: pointer; }\r
  .vbt-skipta button[aria-pressed="true"] { background: #2e2e2e; color: #fff; }\r
  .vbt-sima { background: #fff; color: #111; border-radius: .75rem; box-shadow: 0 2px 10px #0003; overflow: hidden; max-width: 22rem; font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: .8125rem; line-height: 1.35; }\r
  .vbt-sima-haus { display: flex; align-items: center; gap: .5rem; padding: .55rem .7rem; font-weight: 600; }\r
  .vbt-sima-haus i { width: 1.75rem; height: 1.75rem; border-radius: 50%; background: #75161c; flex: 0 0 auto; }\r
  .vbt-sima-haus small { display: block; font-weight: 400; color: #65676b; font-size: .6875rem; }\r
  .vbt-sima-mynd { background: #ddd; display: grid; place-items: center; color: #777; aspect-ratio: 4 / 5; overflow: hidden; }\r
  .vbt-sima-mynd img, .vbt-sima-mynd video { width: 100%; height: 100%; object-fit: cover; display: block; }\r
  .vbt-sima--fb .vbt-sima-mynd { aspect-ratio: auto; min-height: 8rem; }\r
  .vbt-sima--fb .vbt-sima-mynd img, .vbt-sima--fb .vbt-sima-mynd video { height: auto; max-height: 26rem; object-fit: contain; }\r
  .vbt-sima-texti { padding: .55rem .7rem .7rem; white-space: pre-wrap; overflow-wrap: anywhere; }\r
  .vbt-sima-texti b { margin-right: .3rem; }\r
  .vbt-sima-texti span.vbt-meira { color: #737373; }\r
  .vbt-sima--story { position: relative; max-width: 15rem; background: #111; }\r
  .vbt-sima--story .vbt-sima-mynd { aspect-ratio: 9 / 16; background: #222; color: #aaa; }\r
  .vbt-sima--story .vbt-sima-haus { position: absolute; top: 0; left: 0; right: 0; color: #fff; background: linear-gradient(#0008, transparent); }\r
  .vbt-sima-takkar { padding: .45rem .7rem 0; font-size: 1.05rem; letter-spacing: .4rem; }\r
\r
  @media (max-width: 767px) {\r
    .vbt-kort { grid-template-columns: 1fr; }\r
    .vbt-rod li { grid-template-columns: .75rem 1fr auto; }\r
    .vbt-rod .vbt-heiti { grid-column: 2 / -1; }\r
  }\r
\r
  /* ---------- Pressus\xED\xF0an (.vpp) ---------- */\r
  /* Sami grunnur og /nafir: beige t\xE6ki\xF0, d\xF6kkir skj\xE1ir, Dymo-mi\xF0ar */\r
\r
  .vpp { color: var(--black-800, #2e2e2e); font-family: "Open Sans", sans-serif; font-size: 1rem; font-weight: 400; line-height: 1.6; padding: 0 1rem 5rem; display: grid; gap: 3rem; }\r
  .vpp [hidden], [data-promo-state][hidden] { display: none !important; }\r
  /* Tv\xF6 m\xE1l: enska nema data-mal="is" s\xE9 \xE1 .vpp. Me\xF0an be\xF0i\xF0 er eftir m\xE1li\r
     vi\xF0takandans er textinn falinn svo enskan blikki ekki \xE1 undan \xEDslenskunni */\r
  .vpp:not([data-mal="is"]) [data-mal="is"], .vpp[data-mal="is"] [data-mal="en"] { display: none !important; }\r
  .vpp[data-mal-bidur] [data-mal] { visibility: hidden; }\r
\r
  .vpp-head-right { display: flex; align-items: center; gap: .75rem; }\r
  .vpp-mal { display: flex; border-radius: 4px; overflow: hidden; border: 1px solid #3d3c3c; }\r
  .vpp-mal button { appearance: none; border: 0; margin: 0; background: transparent; color: #3d3c3c; font: inherit; font-size: .75rem; font-weight: 800; letter-spacing: .15em; text-indent: .15em; padding: .25rem .6rem; cursor: pointer; }\r
  .vpp-mal button[aria-pressed="true"] { background: #3d3c3c; color: #fff; }\r
  .vpp-mal button:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }\r
  .vpp p, .vpp h1, .vpp ol, .vpp ul, .vpp dl, .vpp dd { margin: 0; }\r
  .vpp a { color: inherit; }\r
\r
  .vpp-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }\r
  .vpp-dymo { font-family: Dymo, Arial, sans-serif; font-size: 1.625rem; line-height: 1.4; font-weight: 400; color: var(--black-800, #2e2e2e); user-select: none; margin-bottom: .75rem; }\r
  .vpp-head .vpp-dymo { margin-bottom: 0; }\r
  .vpp-dymo--red { color: var(--vogor-red, #75161c); font-size: 2rem; }\r
  .vpp-counter { display: inline-flex; align-items: center; justify-content: center; background: #3d3c3c; color: #fff; border-radius: 4px; padding: .25rem .75rem; font-weight: 800; letter-spacing: .3em; text-indent: .3em; font-size: .875rem; }\r
  .vpp-counter--code { letter-spacing: .15em; text-indent: .15em; margin-left: .25rem; }\r
\r
  .vpp-top { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 2.5rem; align-items: start; }\r
  .vpp-screen { background-color: #494747; background-image: linear-gradient(#ffffff14, #ffffff05 10%, #0000000a); border-radius: .5rem; padding: clamp(.75rem, 3vw, 1.75rem); box-shadow: inset 0 1px #ffffff1f, 0 1px 2px #0003; }\r
  .vpp-screen img { display: block; width: 100%; height: auto; border-radius: 2px; }\r
\r
  .vpp-info { display: grid; gap: 1.25rem; }\r
  .vpp-artist { text-transform: uppercase; letter-spacing: .2em; font-weight: 700; font-size: .875rem; }\r
  .vpp-title { font-size: clamp(3rem, 8vw, 4.5rem); line-height: 1; font-weight: 800; letter-spacing: -.02em; margin-top: -.75rem; }\r
\r
  .vpp-meta { display: grid; gap: .35rem; font-family: "Courier Prime", Courier, monospace; }\r
  .vpp-meta > div { display: flex; gap: 1rem; border-bottom: 1px solid #2e2e2e40; padding-bottom: .35rem; }\r
  .vpp-meta dt { flex: 0 0 6.5rem; font-family: "Open Sans", sans-serif; text-transform: uppercase; font-size: .625rem; font-weight: 700; letter-spacing: .15em; align-self: center; }\r
\r
  .vpp-personal { display: grid; gap: .75rem; padding-top: .5rem; }\r
  .vpp-personal > div { display: grid; gap: .75rem; }\r
  .vpp-status { display: flex; align-items: center; gap: .6rem; text-transform: uppercase; font-size: .75rem; font-weight: 700; letter-spacing: .12em; }\r
  .vpp-led { flex: 0 0 auto; width: .75rem; height: .75rem; border-radius: 50%; border: 1px solid #2e2e2e80; background: #6b665c; }\r
  .vpp-led--ok { background: var(--play-green, #18e91c); box-shadow: 0 0 8px var(--play-green, #18e91c); }\r
  .vpp-led--stop { background: var(--stopp-red, #fc0000); box-shadow: 0 0 8px #fc000080; }\r
  .vpp-led--wait { background: #f2b632; animation: vpp-blink 1s steps(2, start) infinite; }\r
  @keyframes vpp-blink { to { visibility: hidden; } }\r
  @media (prefers-reduced-motion: reduce) { .vpp-led--wait { animation: none; } }\r
\r
  .vpp-keys { display: flex; flex-wrap: wrap; gap: .75rem; }\r
  .vpp a.vpp-key { flex: 1 1 8rem; display: flex; align-items: center; justify-content: center; min-height: 3rem; padding: .5rem 1rem; background-color: #494848; color: #fff; border-radius: .25rem; box-shadow: 2px 2px 11px #5f5f5fed; text-decoration: none; text-transform: uppercase; font-size: .8125rem; font-weight: 700; letter-spacing: .15em; transition: transform .08s, box-shadow .08s; }\r
  .vpp a.vpp-key:hover { background-color: #3d3c3c; }\r
  .vpp a.vpp-key:active { transform: translateY(1px); box-shadow: 1px 1px 5px #5f5f5fed; }\r
  .vpp a:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }\r
  .vpp-note, .vpp-small { font-size: .875rem; }\r
\r
  .vpp-prose { display: grid; gap: 1rem; max-width: 42rem; }\r
  .vpp-quote { margin: 0; padding-left: 1rem; border-left: 2px solid #2e2e2e40; font-style: italic; }\r
  .vpp-quote footer { margin-top: .5rem; font-style: normal; font-family: "Courier Prime", Courier, monospace; font-size: .85em; }\r
  .vpp-quote footer::before { content: "\u2014 "; }\r
  .vpp-quote--kit { font-size: .9375rem; margin-bottom: 2rem; }\r
  .vpp-sides { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.5rem; align-items: start; }\r
  .vpp-tracks, .vpp-credits, .vpp-links { list-style: none; padding: 0; font-family: "Courier Prime", Courier, monospace; }\r
  .vpp-tracks { counter-reset: vpp-track calc(var(--start, 1) - 1); }\r
  .vpp-tracks[start="5"] { --start: 5; }\r
  .vpp-tracks li { counter-increment: vpp-track; border-bottom: 1px solid #2e2e2e40; }\r
  /* Hvert lag er details-element: lagalistinn er l\xEDka textabla\xF0i\xF0 */\r
  .vpp-tracks summary { display: flex; justify-content: space-between; gap: 1rem; padding: .4rem 0; cursor: pointer; list-style: none; }\r
  .vpp-tracks summary::-webkit-details-marker { display: none; }\r
  .vpp-tracks summary span:first-child::before { content: counter(vpp-track) ". "; }\r
  .vpp-tracks summary span:first-child::after { content: " +"; opacity: .55; }\r
  .vpp-tracks details[open] summary span:first-child::after { content: " \u2013"; }\r
  .vpp summary:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }\r
  .vpp-lyric { display: grid; gap: .75rem; padding: .25rem 0 1rem 1.75rem; font-family: "Open Sans", sans-serif; font-size: .875rem; }\r
  .vpp-hint { margin-top: -2rem; }\r
  .vpp-credits li, .vpp-links li { border-bottom: 1px solid #2e2e2e40; padding: .4rem 0; }\r
  .vpp-credits li > span, .vpp-links li > span { display: block; font-family: "Open Sans", sans-serif; font-size: .8125rem; opacity: .8; }\r
  .vpp-credits + .vpp-small { margin-top: 1rem; }\r
  .vpp-links { margin-bottom: 2rem; }\r
  .vpp-photo { display: block; width: 100%; height: auto; border-radius: 2px; margin-bottom: .75rem; }\r
\r
  @media (max-width: 767px) {\r
    .vpp { gap: 2.25rem; }\r
    .vpp-top, .vpp-sides { grid-template-columns: minmax(0, 1fr); gap: 1.75rem; }\r
    .vpp-dymo--red { font-size: 1.5rem; }\r
  }\r
\r
  /* ---------- Stj\xF3rns\xED\xF0an (.vp): \xFAtlit Webflow-s\xED\xF0unnar, enginn beige grunnur ---------- */\r
  .vp { max-width: 60rem; margin: 0 auto; display: grid; gap: 1rem; font: inherit; }\r
  .vp #vp-app { display: grid; gap: 1rem; }\r
  .vp [hidden] { display: none !important; }\r
  .vp-card { border: 1px solid rgba(128, 128, 128, .4); border-radius: 8px; padding: 1rem; display: grid; gap: .75rem; }\r
  .vp-row { display: flex; flex-wrap: wrap; gap: .75rem; align-items: end; }\r
  .vp-between { justify-content: space-between; align-items: center; }\r
  .vp label { display: grid; gap: .25rem; font-size: .85em; flex: 1 1 12rem; }\r
  .vp input, .vp select, .vp textarea { font: inherit; padding: .5rem; border: 1px solid rgba(128, 128, 128, .6); border-radius: 4px; width: 100%; box-sizing: border-box; background: transparent; color: inherit; }\r
  .vp textarea { font-family: ui-monospace, Consolas, monospace; font-size: .85em; }\r
  .vp button { font: inherit; padding: .5rem 1rem; border: 1px solid currentColor; border-radius: 4px; background: transparent; color: inherit; cursor: pointer; justify-self: start; }\r
  .vp button:disabled { opacity: .5; cursor: default; }\r
  .vp-scroll { overflow-x: auto; }\r
  .vp table { border-collapse: collapse; width: 100%; font-size: .85em; }\r
  .vp th, .vp td { text-align: left; padding: .4rem .6rem; border-bottom: 1px solid rgba(128, 128, 128, .3); white-space: nowrap; }\r
  .vp tbody tr { cursor: pointer; }\r
  .vp tbody tr:hover { background: rgba(128, 128, 128, .12); }\r
  /* Sta\xF0a l\xEDnu: h\xE1lfgagns\xE6ir litir svo \xFEeir virki \xE1 lj\xF3sum og d\xF6kkum bakgrunni */\r
  .vp tbody tr.vp-st-sent { background: rgba(40, 180, 60, .13); }\r
  .vp tbody tr.vp-st-svarad { background: rgba(40, 180, 60, .3); }\r
  .vp tbody tr.vp-st-skoppadi { background: rgba(220, 40, 40, .15); }\r
  .vp tbody tr.vp-st-sleppt { opacity: .45; }\r
  .vp tbody tr.vp-st-sent:hover, .vp tbody tr.vp-st-svarad:hover, .vp tbody tr.vp-st-skoppadi:hover { filter: brightness(1.1); }\r
  .vp tbody tr.vp-flokkur { cursor: default; }\r
  .vp tbody tr.vp-flokkur:hover { background: none; }\r
  .vp tr.vp-flokkur th { padding-top: 1rem; font-size: .8em; text-transform: uppercase; letter-spacing: .08em; border-bottom: 2px solid rgba(128, 128, 128, .6); }\r
  .vp-status { font-size: .85em; }\r
  .vp a { align-self: center; }\r
  /* Webflow feitletrar label, og reitirnir erfa \xFEa\xF0 me\xF0 font: inherit */\r
  .vp input, .vp select, .vp textarea { font-weight: 400; }\r
  #vp-post textarea#vp-p-meginmal { font-family: inherit; font-size: 1em; line-height: 1.5; }\r
  .vp details form { display: grid; gap: .75rem; }\r
  .vp summary { cursor: pointer; }\r
  /* Fimm fellilistar \xED einni r\xF6\xF0 \xED sta\xF0 \xFEess a\xF0 s\xE1 s\xED\xF0asti detti ni\xF0ur */\r
  #vp-post .vp-row label { flex-basis: 8rem; }\r
`;var Pt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABK2lDQ1BJQ0MgUHJvZmlsZQAAeJyVkT9Lw0AYh5+LouKgFUQcHDKJgmKjDmZMq4ggWKtD2635Q5TSJFyuaj+Eo1sHF3c/gZOj4KD4CfwGilMHuUTI4FD6LPfcj5f37t4Do+zsVw6MEnQjJeuHFbPRbJnTr0wxQUbbSxOnVjvWHsVRwD9+PhB6fdvUvRiPWS+RChgC236QeiDKQOdaJQrEAFh0O5k/apfn9SqIZ2AuzP1du5v7p3bZaLZAfOv6MHNjJuuT+4p2Fdzoc6nGSV9ehhfKtGzbNh0/dgPzrJ+qoJuaR5EXyySWbRX4QH6/jIW8UE9szbLtvfUx3z0S/Q+5fZ1m8xVLL0VW4PXk1Z8KY2f0vugxWIaTB5gcFtnuLdxvwPxdka1aUNqCp8EvwMZP/XkTGdQAAAkJSURBVHjaBcHJjl3XdQDQffpz29dWR7JKRVEUZUmG4ViwJs7ACdL8RwIE/jUPMs3EgBHACALEUgDHUSRDJEWx+nrdfe92p9s7a7Hf/Ppzc3ppiqKWYtXsVfK7fXO12QOwhCg4JwYAwBA4ZwCMAI/zQkn+7eP+etcqxurCvr3f/dMvbTumr2/VyWIy+hFiaClnAFIGRyl0fecR0bu+P1CIR7kZU4op1LmdZrXW3AJiSpqDYrzxqfX4tDbzadm2/VTAvZKaw4uFnufAtItIGuj9wRmKMiVGKXYhAmLFotBMkAjOF4VhzHIQTQgUOSXctX2u2K/O50CEwGcoDTEvxfnE/LDrXj+4yymAFOh6YLBPWPA++CQlwHa9efLBJQClbte1EZHyzD728cNpnUvugZwLXUJB9Paxvd31XxwVp9OCoUgJtm0fa73I1e9+6DCOmKJk3BOLREjAEMWnH55hUQsi8GNdFIXUA7Kv39wJH54fzQDRO284t1pVWpxXph3df13vqsKeVsX9vu2GMWestPKzD6YxBOecVUJJIQTTgnEgCUyWWSa5SBET0dOLS7ndvdo0F4tpndlDcMt6BgRZpmLvb7f7nz01Rm3/8G6FICqjLuosEhJyjclKRghMMG00S4iIgCi+eH7GlJpNaptnhTUJOQVX5tl8MkEibWxRl0WuXcA8My5i46OVYje4ZnDLTAvBGheBgVRsd3Db1gkOjIsizzJjGBHXRjPO3dArBvsRc82dc1pKxtjAeDktOGFmVZ2bAeHseHE0qUyeX85qRnC173cuVpkmxro+WiEYYwTMu8gABjfGGCT5FBR2PLJ+yIpq045911d5po0sOVOMlBH7NhzXNhHc94EbM+UEwXNMd4OzCqTkglQYhplRCZErxYXgTAffMQbSt12f6PLiYzK02m2MkALYNNMQY8aBIwEwK1nTO2SggIQRY+Q203kviqiEYDGilIJrpaMnxjmDSck638YQhQAOiDMIYnfnu/FuvSsY5ZnmTOxbt9oPWsrcCj+MPCUew2kuJUAEMEpHhsgQmUoJKUTOBCPQnBiGfTOG/iBYohj5QAQhrHY324frQittdVUXXDKj2NQqI9hufRj7UTHGkIiLSmtLhCmWmXHOIwMlBY/JaDZfVL0LzRhaHwaPY4jtGGQboxZUlIUU/Lvrh3ldHktZl6pGdbdugcF90wcGV1ePg/fLujzKzejiEOIQqVDcu1HUed+PLMKrTxdfrs7afkSPPhERZpkUXz5b9EQnZf7y4vSrqxWkWGU2JQJgzTA6F5bL6X++vf63//6f1w/br3+4VQrO57O73v3H97fN6LXgk9w4Hy8mdrbMfvJ0NomkZZ1Zq4FOMsV9ojrLLOHpLPvF5dn72w0hCqVer/blZHLvEgL8+qcvPnn29Mkk74b++/td54IA6Pr+vtn/5X7rU5rmhgAyq99/d/PVm/19jFufmLY360H86vzY5ryQ1AK8fP7BH795r3J9Opvc7ppvbm6UtXOtS2sWi3kb8MmsfHUyn0p+uagT583ovEvPFpOjPOMMz0/st3++9dJsvXu33nYJreLy4mTKoPMxZT5ux8RyHZrd5jFfH4bTcvLydJkxGAZXc3i1LGfZ7Nhmj83hD29uq9xeTCc7E1xMxuon04x7TyHm0r6QHK3auL7Thkc2emmMzp7lcnh4OHly7FAcS5clfLduNvtxJN7HuNu3S62jw/0Qv7pe/+sfv1kduo9nhaG07rppJc6mWaaExLR6XFejm0hxapUjEn//aiGJoZDnp0utxKDyq95bhIvFZOXifdMRYKE4EK36vu36u3b439uHrhsWk4IH93p7+PKjk786n9097OZHlsf053fbA3BP6QC8CST+5ZefExcrx1gS8zp/tpAHZq+33UVVXJ4ulaIu4KKwjKDOsrO63IfU+TB6/+K4vG3Di+PZP3x+IZEMD1wRaH22KFquxkRdoqVioioyz+Jffwj9PnXZ4otP7O0BVwdcFkJpzYSYKFlnejkpHlvHBGcI8zK/PD0Z3GiN+psXk9McuhFynvKaA3JbmvO5+WBpXh5nr84y+ds/vfu7z5b/vMhERD1Zh1AttOdC5pOceZJMFLl6t2kMZwLxvl3dtWtM/OBViPjhkbEydlHe927OfRpEM6R9F9uQXIyAaXBRLjO1d9ljL/dBlC27en339kbtutBjNVXiqFTbXfuXm+35PM+pP2M//GLeEolIbNPnyqoLjtv16sf71Njq4U1732KuRW645mIMCPlERkqa871/clJ99/XDcQIYg5eMdp2rZ5MfN61M8dOPziohDh3JbrwECIL/qRWXFZ1pNxxuU6qeT8uth6Nc7WKyAkolJeOZsVTUEkAI6NClLSuVfHzfVG3qzqpiOwSIG2SCM+iH0TEVxvbn0nlPCmjq+LeBjwWvJNuQefQKMLQ+WiUkJA2YkHGtPBKPxDPqz+13//doH0eBnJo+vVs3Y4jrtofgAiSKYd/trZn8mGZvqHgvy1cnNpC+xlJVM0FpKQdDjoCFBI4pEDKlGP2AwYtpaeZ5FuXpqGeC6YCJcbY+jJnRLqZvfrzRnDfdcLPerfbdtatu4uJxZP/+yH9/KyaTkmWLx5HfHtL1AEakn+W7Mz1UtC9Yp+I2G++lYNQRvx3gZrud5ubIKM7gcpkTOWPFIZP3TSsBRh9zJTbtuKK0sfy6EwurTox+vQ1j4JzbEb3k8aPCbRyOETFSxhA5yhSJU/jby2rP5lf7bjwMFwLuUNz1o2sOJ7VeD8kIfpZVrQ9rSF0QRGmR8X/87Gml1fXNmjOmpFCSDyE54ol4wvi2oYdMVzJK4OSjCFH1h02duGZs45NMNOVi0GazdyPjbULGUQIeWWUxVDw+P84XpX3/eKi04QIjUm5MDYMAyICuMTZWcAQAI5EIgCQQS8Eww4EGxr7v+sgo5zwlJIyFkpXgixBLxE6kFEeZhEQqhDyqjaR0s2mU5B/PSpm2GfKksejZzT6aqZQIEBPGGDCGGJFzNuNwLmGTMCZaSPYuwBJwlujlT14U1hQ296Epp4Wy5aui3F5dNYcmZgZNVhUt7KmQchTwyOiTfPI+uv8HxIutAeRDZhQAAAAASUVORK5CYII=";var Dt="https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec",Ut="https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec",kt=new URLSearchParams(location.search).has("prufa")?Ut:Dt,yt=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"];function ct(j){return fetch(kt,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(j)}).then(function(g){return g.json()})}function e(j,g,E){var o=document.createElement(j);return g&&(o.className=g),E!=null&&(o.textContent=E),o}function pt(j,g,E){var o=e("a",g,E);return o.href=j,o.target="_blank",o.rel="noopener",o}function gt(j,g){try{g?localStorage.setItem(j,g):localStorage.removeItem(j)}catch{}}function jt(j){try{return localStorage.getItem(j)||""}catch{return""}}function Bt(j,g){function E(){g.textContent="Afrita\xF0",g.classList.add("vst-afritad"),setTimeout(function(){g.textContent=g.getAttribute("data-merki"),g.classList.remove("vst-afritad")},1500)}function o(){var T=e("textarea");T.value=j,T.setAttribute("readonly",""),T.style.position="fixed",T.style.opacity="0",document.body.appendChild(T),T.select();try{document.execCommand("copy")&&E()}catch{}document.body.removeChild(T)}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(j).then(E,o):o()}function St(j,g){var E=e("button","vst-afrita",g||"Afrita");return E.type="button",E.setAttribute("data-merki",E.textContent),E.addEventListener("click",function(){Bt(j,E)}),E}function ut(j){try{var g=new URL(j);return/(^|\.)dropbox\.com$/.test(g.hostname)?(g.searchParams.delete("dl"),g.searchParams.set("raw","1"),g.href):j}catch{return j}}function Ht(j){var g=/\.([a-z0-9]+)$/i.exec(String(j||"").split(/[?#]/)[0]),E=g?g[1].toLowerCase():"";return{e:E,t:/^(jpe?g|png|gif|webp)$/.test(E)?"mynd":/^(mp4|mov|m4v)$/.test(E)?"myndband":""}}function Mt(){Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'),function(g){g.parentNode.removeChild(g)});var j=document.createElement("link");j.rel="icon",j.type="image/png",j.href=Pt,document.head.appendChild(j)}var Vt=`<div class="vst">
  <div class="vst-head">
    <div class="vst-dymo vst-dymo--red">|NAFIR|YFIRLIT|</div>
    <div class="vst-counts">
      <div class="vst-count"><span class="vst-counter" data-st="dagar-preorder">--</span><span data-st="texti-preorder">dagar \xED pre-order</span></div>
      <div class="vst-count"><span class="vst-counter" data-st="dagar-utgafa">--</span><span data-st="texti-utgafa">dagar \xED \xFAtg\xE1fu</span></div>
    </div>
  </div>

  <p class="vst-status" data-st-state="loading"><span class="vst-led vst-led--wait"></span>S\xE6ki st\xF6\xF0una</p>

  <div data-st-state="invalid" hidden>
    <p class="vst-status"><span class="vst-led vst-led--late"></span>Hlekk vantar</p>
    <p>\xDEessi s\xED\xF0a opnast me\xF0 hlekknum sem \xD3li sendi \xE1 bandi\xF0. Biddu hann um hlekkinn ef \xFE\xFA finnur hann ekki.</p>
  </div>

  <div data-st-state="error" hidden>
    <p class="vst-status"><span class="vst-led vst-led--late"></span>N\xE1\xF0i ekki \xED st\xF6\xF0una</p>
    <p data-st="villa">Pr\xF3fa\xF0u a\xF0 endurhla\xF0a s\xED\xF0una.</p>
  </div>

  <div class="vst-body" data-st-state="ok" hidden>
    <section class="vst-screen">
      <div class="vst-screen-row">
        <span class="vst-screen-label">Verk loki\xF0</span>
        <span class="vst-screen-value" data-st="hlutfall"></span>
      </div>
      <div class="vst-meter" data-st="maelir" role="img"></div>
    </section>

    <section>
      <div class="vst-dymo">|N\xC6ST|\xC1|DAGSKR\xC1|</div>
      <p class="vst-small vst-hint">Breyttu st\xF6\xF0u verks e\xF0a hver \xE1 \xFEa\xF0 me\xF0 fellilistunum. Breytingin vistast strax.</p>
      <p class="vst-small vst-msg" data-st="skilabod" role="status"></p>
      <ul class="vst-list" data-st="naest"></ul>
    </section>

    <section data-st="meta-kafli" hidden>
      <div class="vst-dymo">|FACEBOOK|INSTAGRAM|</div>
      <div class="vst-counts vst-hint" data-st="fylgjendur"></div>
      <div class="vst-scroll">
        <table class="vst-table">
          <thead><tr><th>Birt</th><th>Mi\xF0ill</th><th>Tegund</th><th>Texti</th><th>N\xE1</th><th>\xC1horf</th><th>Vi\xF0br\xF6g\xF0</th></tr></thead>
          <tbody data-st="meta"></tbody>
        </table>
      </div>
      <p class="vst-small">S\xF3tt af s\xED\xF0unni og Instagram \xE1 6 t\xEDma fresti, s\xED\xF0ast <span data-st="meta-sott"></span>. N\xE1 er hve margir s\xE1u f\xE6rsluna, vi\xF0br\xF6g\xF0 eru l\xEDkar, umm\xE6li, deilingar og vistanir. Stories lifa \xED s\xF3larhring og sj\xE1st h\xE9r ef \xFE\xE6r n\xE1\xF0ust.</p>
    </section>

    <section data-st="efni-kafli" hidden>
      <div class="vst-dymo">|EFNI|</div>
      <p class="vst-small vst-hint">Textar, hlekkir og myndir til a\xF0 deila. Smelltu \xE1 hnapp til a\xF0 afrita. F\xE6rslur \xE1 samf\xE9lagsmi\xF0la m\xE1 laga h\xE9r og merkja \xFEegar \xFE\xE6r eru farnar \xFAt. Bio og lagatextar eru laga\xF0ir hj\xE1 \xD3la.</p>
      <label class="vst-small vst-eg">Hver ert \xFE\xFA? <select data-st="eg"></select></label>
      <div class="vst-groups" data-st="efni"></div>
    </section>

    <section>
      <div class="vst-dymo">|\xD6LL|VERKEFNI|</div>
      <div class="vst-groups" data-st="hopar"></div>
    </section>

    <section>
      <div class="vst-dymo">|PRESSA|</div>
      <div class="vst-scroll">
        <table class="vst-table">
          <thead><tr><th>Mi\xF0ill</th><th>Sta\xF0a</th><th>Hver</th><th>Sent</th><th>Opna\xF0i s\xED\xF0una</th><th>Hlusta\xF0i</th><th>S\xF3tti</th></tr></thead>
          <tbody data-st="pressa"></tbody>
        </table>
      </div>
      <p class="vst-small">Markh\xF3purinn: mi\xF0lar sem vi\xF0 \xE6tlum a\xF0 senda \xE1 og \xFEeir sem hafa \xFEegar fengi\xF0 p\xF3st. Opnun, hlustun og ni\xF0urhal sj\xE1st hj\xE1 \xFEeim sem fengu pers\xF3nulegan hlekk \xE1 pressus\xED\xF0una.</p>
    </section>

    <section class="vst-foot">
      <ul class="vst-legend">
        <li><span class="vst-led vst-led--done"></span>Loki\xF0</li>
        <li><span class="vst-led vst-led--work"></span>\xCD vinnslu</li>
        <li><span class="vst-led vst-led--hold"></span>B\xED\xF0ur</li>
        <li><span class="vst-led"></span>\xD3byrja\xF0</li>
        <li><span class="vst-led vst-led--late"></span>Komi\xF0 fram yfir frest</li>
      </ul>
      <div class="vst-keys">
        <a class="vst-key" data-st="stream" target="_blank" rel="noopener">Hlusta \xE1 pl\xF6tuna</a>
        <button class="vst-key" type="button" data-st="uppfaera">Uppf\xE6ra</button>
      </div>
      <p class="vst-small">S\xF3tt <span data-st="uppfaert"></span>. Frestum, heitum og n\xFDjum verkum er breytt \xED Sheet-inu hj\xE1 \xD3la.</p>
    </section>
  </div>
</div>`;function It(j){j.innerHTML=Vt;var g="vogor-band-key",E="vogor-band-nafn",o={Loki\u00F0:"done","\xCD vinnslu":"work",B\u00ED\u00F0ur:"hold"},T=["\xD3byrja\xF0","\xCD vinnslu","B\xED\xF0ur","Loki\xF0"],X={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"};function y(t){return j.querySelector('[data-st="'+t+'"]')}function N(t){Array.prototype.forEach.call(j.querySelectorAll("[data-st-state]"),function(i){i.hidden=i.getAttribute("data-st-state")!==t})}var D=new URLSearchParams(location.search).get("b")||"";if(!D)try{D=localStorage.getItem(g)||""}catch{}function F(t){var i=/^(\d{4})-(\d\d)-(\d\d)$/.exec(t||"");return i?new Date(Number(i[1]),Number(i[2])-1,Number(i[3])):null}function z(t){var i=F(t);return i?i.getDate()+". "+yt[i.getMonth()]:t||""}var q=new Date;q.setHours(0,0,0,0);function G(t){var i=F(t);return i?Math.round((i-q)/864e5):null}function $(t,i,m){var s=G(i);s!=null&&(y("dagar-"+t).textContent=s>0?s:"0",y("texti-"+t).textContent=s>1?"dagar \xED "+m:s===1?"dagur \xED "+m:s===0?m+" \xED dag":m+" komi\xF0")}function Y(t){var i=t.stada==="Loki\xF0",m=G(t.frestur),s=!i&&m!=null&&m<0,p=e("li",i?"vst-lokid":s?"vst-seint":""),x=e("span","vst-led"+(s?" vst-led--late":o[t.stada]?" vst-led--"+o[t.stada]:""));x.title=s?t.stada+", komi\xF0 fram yfir frest":t.stada,p.appendChild(x);var u=e("span","vst-verk",t.verk);t.notur&&!i&&u.appendChild(e("small","",t.notur)),p.appendChild(u);var P=e("span","vst-val");return P.appendChild(L(t,"stada",T,"Sta\xF0a verksins: ")),P.appendChild(L(t,"hver",[""].concat(S.band||[]),"Hver \xE1 verki\xF0: ")),p.appendChild(P),p.appendChild(e("span","vst-frestur",z(t.frestur))),p}function L(t,i,m,s){var p=e("select");return p.setAttribute("aria-label",s+t.verk),m.indexOf(t[i])===-1&&(m=m.concat([t[i]])),m.forEach(function(x){var u=e("option","",x||"Enginn");u.value=x,p.appendChild(u)}),p.value=t[i],p.addEventListener("change",function(){C(t,i,p)}),p}function C(t,i,m){var s={action:"bandBreyta",b:D,rod:t.rod,verk:t.verk};s[i]=m.value,m.disabled=!0,y("skilabod").textContent="",ct(s).then(function(p){if(!p.ok)throw new Error(p.villa||"Hlekkurinn gildir ekki lengur.");t.hver=p.hver,t.stada=p.stada}).catch(function(p){y("skilabod").textContent="T\xF3kst ekki a\xF0 vista: "+(p.message==="Failed to fetch"?"ekkert samband.":p.message)}).then(function(){nt(S)})}var S={};function nt(t){S=t,$("preorder",t.preorder,"pre-order"),$("utgafa",t.utgafa,"\xFAtg\xE1fu");var i=t.verkefni.length,m=t.verkefni.filter(function(f){return f.stada==="Loki\xF0"}).length;y("hlutfall").textContent=m+" / "+i;var s=y("maelir");s.textContent="",s.setAttribute("aria-label",m+" af "+i+" verkum loki\xF0");for(var p=0;p<i;p++)s.appendChild(e("span",p<m?"on":""));var x=y("naest");x.textContent="",t.verkefni.filter(function(f){return f.stada!=="Loki\xF0"&&F(f.frestur)}).sort(function(f,c){return F(f.frestur)-F(c.frestur)}).slice(0,7).forEach(function(f){x.appendChild(Y(f))}),x.children.length||x.appendChild(e("li","","Ekkert \xE1 dagskr\xE1 me\xF0 fresti."));var u=y("hopar"),P={};Array.prototype.forEach.call(u.children,function(f){P[f.getAttribute("data-flokkur")]=f.open}),u.textContent="";var a=[],n={};t.verkefni.forEach(function(f){var c=f.flokkur||"Anna\xF0";n[c]||(n[c]=[],a.push(c)),n[c].push(f)}),a.forEach(function(f){var c=n[f],M=c.filter(function(et){return et.stada==="Loki\xF0"}).length,B=e("details","vst-group");B.setAttribute("data-flokkur",f),B.open=f in P?P[f]:M<c.length;var Q=e("summary");Q.appendChild(e("span","",f)),Q.appendChild(e("span","",M+"/"+c.length)),B.appendChild(Q);var lt=e("ul");c.forEach(function(et){lt.appendChild(Y(et))}),B.appendChild(lt),u.appendChild(B)});var r=y("pressa");r.textContent="";var l=null,b=t.pressa.some(function(f){return f.flokkur});if(t.pressa.forEach(function(f){if(b&&(f.flokkur||"")!==l){l=f.flokkur||"";var c=e("tr","vst-flokkur"),M=e("th","",l||"\xD3flokka\xF0");M.colSpan=7,c.appendChild(M),r.appendChild(c)}var B=e("tr",X[f.stada||"Sent"]?"vst-st-"+X[f.stada||"Sent"]:"");B.appendChild(e("td","",f.midill)),B.appendChild(e("td","",f.stada||"Sent")),B.appendChild(e("td","",f.hver||"\u2013")),B.appendChild(e("td","",z(f.sent)||"\u2013")),B.appendChild(e("td","",f.opnad?z(f.opnad)+(f.opnanir>1?" ("+f.opnanir+"\xD7)":""):"\u2013")),B.appendChild(e("td","",z(f.hlusta)||"\u2013")),B.appendChild(e("td","",z(f.saekja)||"\u2013")),r.appendChild(B)}),!t.pressa.length){var v=e("td","","Enginn \xE1 markh\xF3pslistanum enn\xFE\xE1.");v.colSpan=7,r.appendChild(e("tr")).appendChild(v)}st(t.band||[]),W(t.meta),mt(t.efni||[]),t.stream?y("stream").href=t.stream:y("stream").hidden=!0,y("uppfaert").textContent=t.uppfaert}var rt=/\.(jpe?g|png|gif|webp)$/i,vt=/\.(mp4|mov|m4v|webm)$/i,tt="Samf\xE9lagsmi\xF0lar",h=["Dr\xF6g","Sam\xFEykkt","P\xF3sta\xF0","Sleppa"],d={P\u00F3sta\u00F0:"postad",Sleppa:"sleppa"};function A(t){try{var i=new URL(t);return{nafn:decodeURIComponent(i.pathname.split("/").pop()||""),dropbox:/(^|\.)dropbox\.com$/.test(i.hostname),u:i}}catch{return{nafn:"",dropbox:!1,u:null}}}function H(t){var i=A(t.slod),m=e("div","vst-slod");if(rt.test(i.nafn)){var s=e("img","vst-mynd");s.src=ut(t.slod),s.alt=t.heiti||"",s.loading="lazy";var p=pt(t.slod);p.appendChild(s),m.appendChild(p),m.appendChild(pt(t.slod,"vst-afrita","Opna \xED fullri st\xE6r\xF0"))}else if(i.dropbox){var x=/\/fo\//.test(i.u.pathname)?"Mappa \xED Dropbox":(vt.test(i.nafn)?"Myndband: ":"Dropbox: ")+i.nafn;m.appendChild(pt(t.slod,"",x))}else m.appendChild(pt(t.slod,"",t.slod.replace(/^https?:\/\/(www\.)?/,"")));return m.appendChild(St(t.slod,"Afrita hlekk")),m}function Z(t,i){var m=e("button","vst-afrita"+(i?" "+i:""),t);return m.type="button",m}function w(t){return t.b=D,ct(t).catch(function(i){return{ok:!1,villa:i.message==="Failed to fetch"?"Ekkert samband.":i.message}})}function R(){return y("eg").value}function _(t,i){for(var m=S.efni||[],s=0;s<m.length;s++)m[s].id===t.id&&(m[s]=t);var p=J(t);return i.parentNode.replaceChild(p,i),p}function J(t){var i=t.flokkur===tt,m=!/^md-/.test(t.id),s=e("article","vst-but"+(i&&d[t.stada]?" vst-but-"+d[t.stada]:"")),p=e("div","vst-but-haus");p.appendChild(e("span","vst-but-heiti",t.heiti||"\xC1n heitis"));var x=e("span","vst-but-hlid");if(t.birta){var u=G(t.birta),P=t.stada==="P\xF3sta\xF0"||t.stada==="Sleppa",a=i&&!P&&u!=null&&u<0;x.appendChild(e("span","vst-but-birta"+(u===0?" vst-idag":"")+(a?" vst-but-seint":""),u===0?"\xCD dag":z(t.birta)+(a?", ekki p\xF3sta\xF0":""))),u!=null&&u<0&&(!i||P)&&s.classList.add("vst-but-lidid")}if(i&&m&&t.birta){var n=e("select");n.setAttribute("aria-label","Sta\xF0a f\xE6rslunnar "+(t.heiti||"")),h.forEach(function(c){var M=e("option","",c);M.value=c,n.appendChild(M)}),n.value=t.stada||h[0],n.addEventListener("change",function(){if(!R()){n.value=t.stada,K(s,"Veldu hver \xFE\xFA ert efst \xED Efni.");return}n.disabled=!0,w({action:"bandEfniVista",id:t.id,hver:R(),reitir:{stada:n.value}}).then(function(c){c.ok?_(c.but,s):(n.disabled=!1,n.value=t.stada,K(s,c.villa))})}),x.appendChild(n)}if(m){var r=Z("Breyta","vst-but-takki");r.addEventListener("click",function(){U(t,s)}),x.appendChild(r)}p.appendChild(x),s.appendChild(p);var l=S.meta?S.meta.faerslur.filter(function(c){return c.efni===t.id}):[];if(l.length){var b=e("p","vst-but-meta");l.forEach(function(c){b.appendChild(pt(c.hlekkur,"",c.midill+": "+(c.na!=null?"n\xE1 "+c.na+", ":"")+c.vidbrogd+" vi\xF0br\xF6g\xF0"))}),s.appendChild(b)}t.slod&&s.appendChild(H(t));var v=[["is","\xCDslenska"],["en","English"]].filter(function(c){return t[c[0]]});if(v.length){var f=e("div","vst-maltextar");v.forEach(function(c){var M=e("div","vst-maltexti");v.length>1&&M.appendChild(e("span","vst-mal",c[1])),M.appendChild(e("pre","vst-texti",t[c[0]])),M.appendChild(St(t[c[0]])),f.appendChild(M)}),s.appendChild(f)}return t.notur&&s.appendChild(e("p","vst-but-notur",t.notur)),t.breyttAf&&t.breytt&&s.appendChild(e("p","vst-but-breytt","S\xED\xF0ast breytt af "+t.breyttAf+", "+z(t.breytt.slice(0,10))+" kl. "+t.breytt.slice(11,16))),s}function K(t,i){var m=t.querySelector(".vst-msg")||t.appendChild(e("p","vst-small vst-msg"));m.textContent=i||""}function U(t,i){var m=t.flokkur===tt,s=t,p=e("form","vst-but vst-form vst-but-form");p.appendChild(e("span","vst-but-heiti","Breyta: "+(t.heiti||"\xC1n heitis")));function x(v,f,c,M,B,Q){var lt=e("label","",v),et=e(c,B||"");return c==="input"&&(et.type=f==="birta"?"date":"text"),et.name=f,et.value=M||"",lt.appendChild(et),Q&&lt.appendChild(e("small","",Q)),lt}p.appendChild(x("Heiti","heiti","input",t.heiti));var u=e("div","vst-form-rod");if(u.appendChild(x("Birta","birta","input",t.birta)),m){var P=e("label","","Sta\xF0a"),a=e("select");a.name="stada",h.forEach(function(v){var f=e("option","",v);f.value=v,a.appendChild(f)}),a.value=t.stada||h[0],P.appendChild(a),u.appendChild(P)}p.appendChild(u),p.appendChild(x("\xCDslenska","is","textarea",t.is)),p.appendChild(x("English","en","textarea",t.en)),p.appendChild(x("Mynd e\xF0a myndband","slod","input",t.slod,"","Dropbox-hlekkur \xE1 skr\xE1na e\xF0a m\xF6ppuna, e\xF0a sl\xF3\xF0 \xE1 mynd.")),p.appendChild(x("N\xF3tur","notur","textarea",t.notur,"vst-stutt","Hva\xF0a mynd fylgir, hvar \xE1 a\xF0 p\xF3sta, o.s.frv."));var n=e("div","vst-form-takkar"),r=Z("Vista");r.type="submit";var l=Z("H\xE6tta vi\xF0","vst-but-takki");n.appendChild(r),n.appendChild(l),p.appendChild(n);var b=p.appendChild(e("p","vst-small vst-msg"));l.addEventListener("click",function(){_(s,p)}),p.addEventListener("submit",function(v){if(v.preventDefault(),b.textContent="",!R()){b.textContent="Veldu hver \xFE\xFA ert efst \xED Efni.";return}var f={};["heiti","birta","stada","is","en","slod","notur"].forEach(function(c){p.elements[c]&&(f[c]=p.elements[c].value)}),r.disabled=!0,r.textContent="Vista...",w({action:"bandEfniVista",id:t.id,hver:R(),breytt:s.breytt,reitir:f}).then(function(c){if(r.disabled=!1,r.textContent="Vista",c.ok){_(c.but,p);return}c.arekstur&&c.but&&(s=c.but),b.textContent=c.villa||"T\xF3kst ekki a\xF0 vista."})}),i.parentNode.replaceChild(p,i),p.elements.heiti.focus()}function ft(t,i){return(t.birta?1:0)-(i.birta?1:0)||(t.birta<i.birta?-1:t.birta>i.birta?1:0)}var at="vogor-efni-opid";function mt(t){var i=y("efni");if(y("efni-kafli").hidden=!t.length,!!t.length&&!i.querySelector(".vst-but-form")){var m={};try{m=JSON.parse(localStorage.getItem(at)||"{}")||{}}catch{}i.textContent="";var s=[],p={};t.forEach(function(x){var u=x.flokkur||"Anna\xF0";p[u]||(p[u]=[],s.push(u)),p[u].push(x)}),s.forEach(function(x){var u=e("details","vst-group");u.open=!!m[x];var P=e("summary");P.appendChild(e("span","",x));var a=String(p[x].length);if(x===tt){var n=p[x].filter(function(v){return v.birta&&v.stada!=="Sleppa"}),r=n.filter(function(v){return v.stada==="P\xF3sta\xF0"}).length;a=r+"/"+n.length+" p\xF3sta\xF0ar",p[x].sort(ft)}P.appendChild(e("span","",a)),u.appendChild(P);var l=e("div","vst-efni");if(p[x].forEach(function(v){l.appendChild(J(v))}),x===tt){var b=Z("N\xFD f\xE6rsla","vst-but-takki");b.addEventListener("click",function(){if(!R()){b.textContent="Veldu fyrst hver \xFE\xFA ert";return}b.disabled=!0,w({action:"bandEfniNytt",hver:R(),flokkur:tt}).then(function(v){if(b.disabled=!1,!v.ok){b.textContent=v.villa||"T\xF3kst ekki";return}S.efni.push(v.but);var f=J(v.but);l.insertBefore(f,b),U(v.but,f)})}),l.appendChild(b)}u.appendChild(l),u.addEventListener("toggle",function(){m[x]=u.open;try{localStorage.setItem(at,JSON.stringify(m))}catch{}}),i.appendChild(u)})}}function W(t){if(y("meta-kafli").hidden=!t,!!t){var i=t.fylgjendur||{},m=y("fylgjendur");m.textContent="",[["fb","Facebook"],["ig","Instagram"]].forEach(function(u){if(i[u[0]]!=null){var P=e("div","vst-count");P.appendChild(e("span","vst-counter",String(i[u[0]])));var a=i[u[0]+"Breyting"];P.appendChild(e("span","","fylgjendur \xE1 "+u[1]+(a!=null?" ("+(a>=0?"+":"")+a+" fr\xE1 "+z(i.fra)+")":""))),m.appendChild(P)}});var s={};(S.efni||[]).forEach(function(u){s[u.id]=u.heiti});var p=y("meta");if(p.textContent="",t.faerslur.forEach(function(u){var P=e("tr");P.appendChild(e("td","",z(u.birt.slice(0,10))+" "+u.birt.slice(11,16))),P.appendChild(e("td","",u.midill)),P.appendChild(e("td","",u.tegund));var a=e("td","vst-meta-texti"),n=s[u.efni]?s[u.efni]:u.texti||u.tegund;a.appendChild(u.hlekkur?pt(u.hlekkur,"",n):e("span","",n)),a.title=u.texti,P.appendChild(a),[u.na,u.ahorf,u.vidbrogd].forEach(function(r){P.appendChild(e("td","vst-tala",r==null?"\u2013":String(r)))}),p.appendChild(P)}),!t.faerslur.length){var x=e("td","","Engar f\xE6rslur fundust fr\xE1 1. okt\xF3ber.");x.colSpan=7,p.appendChild(e("tr")).appendChild(x)}y("meta-sott").textContent=t.sott||"aldrei"}}function st(t){var i=y("eg"),m=i.value;if(!m)try{m=localStorage.getItem(E)||""}catch{}i.textContent="",[""].concat(t.filter(function(s){return s!=="Allir"})).forEach(function(s){var p=e("option","",s||"Veldu nafn");p.value=s,i.appendChild(p)}),i.value=t.indexOf(m)!==-1?m:""}y("eg").addEventListener("change",function(){try{localStorage.setItem(E,this.value)}catch{}});function ot(){return ct({action:"bandStada",b:D}).then(function(t){if(t.rangurLykill){N("invalid");return}if(!t.ok){y("villa").textContent=t.villa||"\xD3\xFEekkt villa.",N("error");return}try{localStorage.setItem(g,D)}catch{}nt(t),N("ok")}).catch(function(){N("error")})}if(y("uppfaera").addEventListener("click",function(){var t=this;t.disabled=!0,ot().then(function(){t.disabled=!1})}),!D){N("invalid");return}N("loading"),ot()}var Kt=`<div class="vbt">
  <div class="vbt-head">
    <div class="vst-dymo vst-dymo--red">|NAFIR|BIRTA|</div>
    <div class="vst-count"><span class="vst-counter" data-bt="naesta">--</span><span data-bt="naesta-texti">ekkert \xED bi\xF0r\xF6\xF0</span></div>
  </div>

  <form class="vbt-gate" data-bt="gate" hidden>
    <p>Lykilor\xF0 (e\xF0a opna\xF0u hlekkinn sem \xD3li sendi \xFE\xE9r):</p>
    <input type="password" data-bt="lykill" autocomplete="current-password">
    <button class="vbt-btn" type="submit">Opna</button>
    <p class="vbt-msg" data-bt="gate-villa"></p>
  </form>

  <p class="vst-status" data-bt="hledur"><span class="vst-led vst-led--wait"></span>S\xE6ki</p>

  <div class="vbt-app" data-bt="app" hidden>
    <section>
      <div class="vst-dymo">|BIDROD|</div>
      <ul class="vbt-rod" data-bt="rod"></ul>
      <p class="vbt-small">Nafir Meta sko\xF0ar bi\xF0r\xF6\xF0ina \xE1 5 m\xEDn\xFAtna fresti, svo f\xE6rsla fer \xFAt \xED s\xED\xF0asta lagi 5 m\xEDn\xFAtum eftir t\xEDmann. Prufa birtir ekkert: Facebook f\xE6r \xF3birta f\xE6rslu sem s\xE9st bara \xED Business Suite, og Instagram sannreynir bara myndina og textann.</p>
    </section>

    <section>
      <div class="vst-dymo">|FAERSLUR|</div>
      <p class="vbt-small vbt-hint">Textunum er breytt \xE1 <a data-bt="yfirlit" href="/nafir/stada" target="_blank" rel="noopener">yfirliti bandsins</a>. H\xE9r velur\xF0u hva\xF0a texti fer \xE1 hvorn mi\xF0il, og textann m\xE1 laga fyrir \xFEessa birtingu \xE1n \xFEess a\xF0 breyta f\xE6rslunni.</p>
      <div class="vbt-listi" data-bt="faerslur"></div>
    </section>

    <p class="vbt-small">S\xF3tt <span data-bt="sott"></span>. <button class="vbt-link" type="button" data-bt="uppfaera">Uppf\xE6ra</button> \xB7 <button class="vbt-link" type="button" data-bt="utskra">Skr\xE1 \xFAt</button></p>
  </div>
</div>`;function zt(j){j.innerHTML=Kt;var g="vogor-promo-key",E="vogor-birta-mal",o={Birt:"ok","Prufa \xED lagi":"ok",T\u00EDmasett:"bid",Prufa:"prufa","B\xED\xF0ur Instagram":"bid",Sendi:"bid",Villa:"villa",\u00D3v\u00EDst:"villa",\u00DAtrunni\u00F0:"villa"},T=["T\xEDmasett","Prufa","B\xED\xF0ur Instagram"],X=["Facebook","Instagram","Instagram Story","Facebook Story"];function y(h){return j.querySelector('[data-bt="'+h+'"]')}var N=jt(g),D=new URLSearchParams(location.search);if(D.get("l")){N=D.get("l").trim(),gt(g,N),D.delete("l");try{history.replaceState(null,"",location.pathname+(D.toString()?"?"+D:"")+location.hash)}catch{}}function F(h,d){var A=Object.assign({action:h,key:N},d||{});return ct(A).then(function(H){return H.rangtLeyniord&&(N="",gt(g,""),z("gate")),H}).catch(function(H){return{ok:!1,villa:H.message==="Failed to fetch"?"Ekkert samband.":H.message}})}function z(h){y("gate").hidden=h!=="gate",y("hledur").hidden=h!=="hledur",y("app").hidden=h!=="app"}function q(h){return h?new Date(h.replace(" ","T")+":00Z"):null}function G(h){var d=q(h);return d?d.getUTCDate()+". "+yt[d.getUTCMonth()]+" "+h.slice(11,16):""}function $(h){var d=Math.round((q(h)-Date.now())/6e4);if(d<=0)return"n\xFAna";if(d<60)return d+" m\xEDn";if(d<2880)return Math.floor(d/60)+" klst "+d%60+" m\xEDn";var A=Math.round(d/1440);return A+(A===1?" dag":" daga")}function Y(h){var d=Math.round((q(h)-Date.now())/6e4);return d<60?Math.max(d,0)+" m\xEDn":d<2880?Math.round(d/60)+" klst":Math.round(d/1440)+" dagar"}var L={},C={};function S(h){return F("birtingar").then(function(d){if(!d.ok){d.rangtLeyniord||(z("gate"),y("gate-villa").textContent=d.villa||"N\xE1\xF0i ekki \xED g\xF6gnin.");return}L=d,h===!0?rt():nt(),z("app")})}function nt(){rt();var h=y("faerslur");h.textContent="",L.faerslur.slice().sort(function(d,A){return d.birta.localeCompare(A.birta)}).forEach(function(d){h.appendChild(tt(d))})}function rt(){var h={};L.faerslur.forEach(function(w){h[w.id]=w.heiti});var d=L.birtingar.filter(function(w){return T.indexOf(w.stada)!==-1}).sort(function(w,R){return w.timi.localeCompare(R.timi)}),A=L.birtingar.filter(function(w){return T.indexOf(w.stada)===-1&&w.stada!=="H\xE6tt vi\xF0"}).sort(function(w,R){return R.timi.localeCompare(w.timi)}).slice(0,15),H=y("rod");H.textContent="",d.concat(A).forEach(function(w){var R=e("li",T.indexOf(w.stada)===-1?"vbt-buid":"");R.appendChild(e("span","vst-led vst-led--"+(o[w.stada]||""))),R.appendChild(e("span","vbt-timi",G(w.timi))),R.appendChild(e("span","",w.midill));var _=e("span","vbt-heiti",(w.prufa?"Prufa: ":"")+(h[w.efni]||w.efni)),J=e("small");if(w.stada==="Birt"&&w.nidurstada){var K=e("a","","Birt, opna f\xE6rsluna");K.href=w.nidurstada,K.target="_blank",K.rel="noopener",J.appendChild(K)}else J.textContent=(w.stada==="T\xEDmasett"?"Fer \xFAt eftir "+$(w.timi):w.stada+(w.nidurstada?": "+w.nidurstada:""))+(w.hver&&w.hver!==L.eg?" \xB7 "+w.hver:"");_.appendChild(J),R.appendChild(_),T.indexOf(w.stada)!==-1?R.appendChild(vt(w)):R.appendChild(e("span")),H.appendChild(R)}),H.children.length||H.appendChild(e("li","","Ekkert \xED bi\xF0r\xF6\xF0 enn\xFE\xE1."));var Z=d.filter(function(w){return!w.prufa})[0];y("naesta").textContent=Z?Y(Z.timi):"--",y("naesta-texti").textContent=Z?"\xED n\xE6stu birtingu":"ekkert \xED bi\xF0r\xF6\xF0",y("sott").textContent=L.nu+(L.eg?", innskr\xE1\xF0(ur): "+L.eg:"")}function vt(h){var d=e("button","vbt-btn vbt-btn--ljos","H\xE6tta vi\xF0");return d.type="button",d.addEventListener("click",function(){d.disabled=!0,F("birtingHaetta",{id:h.id}).then(function(A){A.ok?(L.birtingar=A.birtingar,rt()):(d.disabled=!1,alert(A.villa))})}),d}function tt(h){var d=C[h.id]||(C[h.id]={}),A=h.stada==="P\xF3sta\xF0",H=e("article","vbt-kort"+(A?" vbt-kort--postad":"")),Z=e("div","vbt-kort-haus");Z.appendChild(e("b","",h.heiti));var w=q(h.birta+" 00:00");Z.appendChild(e("span","vbt-merki",w.getUTCDate()+". "+yt[w.getUTCMonth()]+" \xB7 "+h.stada)),H.appendChild(Z);var R=e("div","vbt-forsk"),_=e("div","vbt-skipta"),J="Instagram";["Instagram","Facebook","Story"].forEach(function(k){var I=e("button","",k);I.type="button",I.addEventListener("click",function(){J=k,Q()}),_.appendChild(I)}),R.appendChild(_);var K=e("div");R.appendChild(K),H.appendChild(R);var U=e("form","vbt-stjorn"),ft=e("div","vbt-midlar"),at={};X.forEach(function(k){var I=e("label"),O=e("input");O.type="checkbox",O.checked=d[k]!==void 0?d[k]:!/ Story$/.test(k),at[k]=O,I.appendChild(O),I.appendChild(document.createTextNode(k)),ft.appendChild(I),O.addEventListener("change",function(){d[k]=O.checked,Q()})}),U.appendChild(ft);var mt=e("label","","Texti"),W=e("select");[["en","English"],["is","\xCDslenska"],["baedi","\xCDslenska og enska"]].forEach(function(k){var I=e("option","",k[1]);I.value=k[0],W.appendChild(I)}),W.value=d.mal||jt(E)||"en",mt.appendChild(W),U.appendChild(mt);var st=e("label","","Textinn sem fer \xFAt "),ot=e("span","vbt-teljari");st.appendChild(ot);var t=e("textarea");st.appendChild(t),U.appendChild(st);function i(){t.value=W.value==="is"?h.is:W.value==="en"?h.en:[h.is,h.en].filter(Boolean).join(`

`),d.texti=t.value,Q()}W.addEventListener("change",function(){d.mal=W.value,gt(E,W.value),i()}),t.addEventListener("input",function(){d.texti=t.value,Q()});var m=e("label","","Mynd e\xF0a myndband"),s=e("input");s.value=d.mynd!=null?d.mynd:h.slod||"",s.placeholder="Dropbox-hlekkur \xE1 .jpg e\xF0a .mp4",m.appendChild(s),U.appendChild(m),s.addEventListener("input",function(){d.mynd=s.value}),s.addEventListener("change",Q);var p=e("div","vbt-tvo"),x=e("label","","Dagur"),u=e("input");u.type="date",u.value=d.dagur||h.birta,u.addEventListener("change",function(){d.dagur=u.value,Q()}),x.appendChild(u);var P=e("label","","Klukkan"),a=e("input");a.type="time",a.value=d.klukka||"12:00",a.addEventListener("change",function(){d.klukka=a.value,Q()}),P.appendChild(a),p.appendChild(x),p.appendChild(P),U.appendChild(p);var n=e("p","vbt-adv");U.appendChild(n);var r=e("div","vbt-takkar"),l=e("button","vbt-btn","T\xEDmasetja");l.type="submit";var b=e("button","vbt-btn vbt-btn--ljos","Prufa");b.type="button",r.appendChild(l),r.appendChild(b),U.appendChild(r);var v=e("p","vbt-msg"+(d.skilabod?" vbt-msg--ok":""),d.skilabod||"");d.skilabod="",U.appendChild(v);var f=L.birtingar.filter(function(k){return k.efni===h.id&&k.stada!=="H\xE6tt vi\xF0"});if(f.length){var c=e("ul","vbt-fyrri");f.forEach(function(k){var I=e("li");I.appendChild(e("span","vst-led vst-led--"+(o[k.stada]||""))),I.appendChild(document.createTextNode((k.prufa?"Prufa \xE1 ":"")+k.midill+": "+k.stada+(k.stada==="T\xEDmasett"?" "+G(k.timi):""))),c.appendChild(I)}),U.appendChild(c)}var M=L.meta?L.meta.faerslur.filter(function(k){return k.efni===h.id}):[];M.forEach(function(k){U.appendChild(e("p","vbt-teljari",k.midill+": "+(k.na!=null?"n\xE1 "+k.na+", ":"")+(k.ahorf!=null?"\xE1horf "+k.ahorf+", ":"")+k.vidbrogd+" vi\xF0br\xF6g\xF0"))}),H.appendChild(U);function B(){return X.filter(function(k){return at[k].checked})}function Q(){Array.prototype.forEach.call(_.children,function(At){At.setAttribute("aria-pressed",String(At.textContent===J))});var k=Ht(s.value),I=at.Instagram.checked;ot.textContent=t.value.length+(I?" / 2200":"")+" stafir"+(I?", "+(t.value.match(/#[^\s#]+/g)||[]).length+" / 30 myllumerki":""),ot.classList.toggle("vbt-of",I&&t.value.length>2200);var O=[];B().length||O.push("Veldu a\xF0 minnsta kosti einn mi\xF0il."),I&&!s.value&&O.push("Instagram \xFEarf mynd e\xF0a myndband."),s.value&&!k.t&&O.push("Sl\xF3\xF0in \xFEarf a\xF0 enda \xE1 .jpg, .png e\xF0a .mp4 (Dropbox-hlekkur \xE1 skr\xE1na sj\xE1lfa, ekki m\xF6ppu)."),I&&k.t==="mynd"&&!/^jpe?g$/.test(k.e)&&O.push("Instagram tekur bara JPG-myndir."),I&&/instagram\.com|ffm\.to|https?:\/\//.test(t.value)&&O.push("Hlekkir virka ekki \xED texta \xE1 Instagram; skrifa\xF0u \u201Ehlekkur \xED bio\u201C.");var dt=at["Instagram Story"].checked||at["Facebook Story"].checked;if(dt&&!s.value&&O.push("Story \xFEarf mynd e\xF0a myndband."),at["Instagram Story"].checked&&k.t==="mynd"&&!/^jpe?g$/.test(k.e)&&O.push("Instagram Story tekur bara JPG-myndir."),dt&&O.push("Textinn fer ekki me\xF0 \xED Story; hann \xFEarf a\xF0 vera \xED myndinni sj\xE1lfri (9:16)."),n.textContent=O.join(" "),K.textContent="",J==="Story"){K.appendChild(lt(k));return}var V=J==="Facebook",it=e("div","vbt-sima"+(V?" vbt-sima--fb":"")),wt=e("div","vbt-sima-haus");wt.appendChild(e("i"));var Et=e("span","",V?"Stafr\xE6nn H\xE1kon":"stafraennhakon");V&&Et.appendChild(e("small","",G(u.value+" "+(a.value||"12:00")))),wt.appendChild(Et),it.appendChild(wt);var ht=e("div","vbt-sima-texti"),Lt=V?t.value:t.value.split(`
`)[0].slice(0,125);V||ht.appendChild(e("b","","stafraennhakon")),ht.appendChild(document.createTextNode(Lt)),!V&&t.value.length>Lt.length&&ht.appendChild(e("span","vbt-meira","\u2026 meira")),V&&it.appendChild(ht);var xt=e("div","vbt-sima-mynd");if(k.t==="mynd"){var Ct=e("img");Ct.src=ut(s.value),Ct.alt="",xt.appendChild(Ct)}else if(k.t==="myndband"){var bt=e("video");bt.src=ut(s.value),bt.muted=!0,bt.controls=!0,bt.preload="metadata",xt.appendChild(bt)}else xt.textContent=s.value?"Sl\xF3\xF0 sem er hvorki mynd n\xE9 myndband":"Engin mynd";(s.value||!V)&&it.appendChild(xt),V||(it.appendChild(e("div","vbt-sima-takkar","\u2661 \u25EF \u27A4")),it.appendChild(ht)),K.appendChild(it)}function lt(k){var I=e("div","vbt-sima vbt-sima--story"),O=e("div","vbt-sima-mynd");if(k.t==="mynd"){var dt=e("img");dt.src=ut(s.value),dt.alt="",O.appendChild(dt)}else if(k.t==="myndband"){var V=e("video");V.src=ut(s.value),V.muted=!0,V.controls=!0,V.preload="metadata",O.appendChild(V)}else O.textContent="Engin mynd";I.appendChild(O);var it=e("div","vbt-sima-haus");return it.appendChild(e("i")),it.appendChild(e("span","","stafraennhakon")),I.appendChild(it),I}function et(k){v.textContent="",v.classList.remove("vbt-msg--ok");var I=k?b:l,O=B(),dt=O.join(" og ");!k&&!confirm("T\xEDmasetja \u201E"+h.heiti+"\u201C \xE1 "+dt+" "+G(u.value+" "+a.value)+`?

F\xE6rslan fer \xFAt sj\xE1lfkrafa. \xDEa\xF0 m\xE1 h\xE6tta vi\xF0 \xED bi\xF0r\xF6\xF0inni \xFEanga\xF0 til.`)||(I.disabled=!0,F("birtingVista",{efni:h.id,midlar:O,timi:u.value+" "+a.value,texti:t.value,mynd:s.value.trim(),prufa:k}).then(function(V){if(I.disabled=!1,!V.ok){v.textContent=V.villa||"T\xF3kst ekki.";return}L.birtingar=V.birtingar,d.skilabod=k?"Prufan er komin \xED bi\xF0r\xF6\xF0ina efst. Ni\xF0ursta\xF0an s\xE9st \xFEar innan 5 m\xEDn\xFAtna; ekkert er birt.":"T\xEDmasett. F\xE6rslan s\xE9st \xED bi\xF0r\xF6\xF0inni efst og m\xE1 h\xE6tta vi\xF0 \xFEar.",nt()}))}return U.addEventListener("submit",function(k){k.preventDefault(),et(!1)}),b.addEventListener("click",function(){et(!0)}),d.texti!=null?(t.value=d.texti,Q()):i(),H}y("gate").addEventListener("submit",function(h){h.preventDefault(),N=y("lykill").value.trim(),gt(g,N),y("gate-villa").textContent="",z("hledur"),S()}),y("uppfaera").addEventListener("click",function(){S()}),y("utskra").addEventListener("click",function(){N="",gt(g,""),z("gate")}),setInterval(function(){N&&!y("app").hidden&&S(!0)},6e4),N?(z("hledur"),S()):z("gate")}var Jt=`<div class="vp" id="vp-admin">
  <form class="vp-card" id="vp-gate" hidden>
    <label>Leynior\xF0
      <input type="password" id="vp-key" autocomplete="current-password" required>
    </label>
    <button type="submit">Opna</button>
  </form>

  <div id="vp-app" hidden>
    <!-- P\xF3star: markh\xF3purinn og pitch-p\xF3starnir, \xFAr P\xF3star-flipanum \xED Sheet-inu -->
    <div class="vp-card">
      <div class="vp-row vp-between">
        <strong id="vp-postar-samtals">S\xE6ki p\xF3sta...</strong>
        <button type="button" id="vp-post-nyr">N\xFDr vi\xF0takandi</button>
      </div>
      <div class="vp-scroll">
        <table id="vp-postar">
          <thead>
            <tr>
              <th>Mi\xF0ill</th><th>Sta\xF0a</th><th>Hver</th><th>Lei\xF0</th><th>Sent</th>
              <th>Opna\xF0</th><th>Hlusta\xF0</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <small>Smelltu \xE1 l\xEDnu til a\xF0 opna p\xF3stinn.</small>
    </div>

    <form class="vp-card" id="vp-post" hidden>
      <div class="vp-row vp-between">
        <strong id="vp-post-titill"></strong>
        <button type="button" id="vp-p-loka">Loka</button>
      </div>
      <div class="vp-row">
        <label>Mi\xF0ill
          <input type="text" id="vp-p-midill" required>
        </label>
        <label>Tengili\xF0ur
          <input type="text" id="vp-p-tengilidur">
        </label>
        <label>Netfang e\xF0a sl\xF3\xF0
          <input type="text" id="vp-p-netfang">
        </label>
        <label>Flokkur
          <select id="vp-p-flokkur"></select>
        </label>
      </div>
      <div class="vp-row">
        <label>Lei\xF0
          <select id="vp-p-leid">
            <option>P\xF3stur</option>
            <option>Facebook</option>
            <option>Ey\xF0ubla\xF0</option>
            <option>Anna\xF0</option>
          </select>
        </label>
        <label>Senda fr\xE1
          <select id="vp-p-fra">
            <option value="">\u2013</option>
            <option>vogorrecords@vogorrecords.com</option>
            <option>shakon@shakon.com</option>
            <option>Eigi\xF0 netfang</option>
          </select>
        </label>
        <label>Hver sendir
          <select id="vp-p-hver"></select>
        </label>
        <label>M\xE1l
          <select id="vp-p-mal">
            <option value="en">English</option>
            <option value="is">\xCDslenska</option>
          </select>
        </label>
        <label>Sta\xF0a
          <select id="vp-p-stada"></select>
        </label>
      </div>
      <label>Efni
        <input type="text" id="vp-p-efni">
      </label>
      <label>Meginm\xE1l
        <textarea id="vp-p-meginmal" rows="18"></textarea>
      </label>
      <small>[BLOKK] og [PRESSUHLEKKUR] v\xEDkja fyrir hlekkjum vi\xF0takandans um lei\xF0 og hann f\xE6r k\xF3\xF0a. \xDEa\xF0 sem stendur h\xE9r er \xFEa\xF0 sem fer \xFAt.</small>
      <label>N\xF3tur
        <textarea id="vp-p-notur" rows="2"></textarea>
      </label>
      <div class="vp-row">
        <button type="submit" id="vp-p-vista">Vista</button>
        <button type="button" id="vp-p-gefa">Gefa k\xF3\xF0a</button>
        <button type="button" id="vp-p-opna">Opna \xED p\xF3stforriti</button>
        <button type="button" id="vp-p-eml">S\xE6kja sem dr\xF6g (.eml)</button>
        <button type="button" id="vp-p-afrita-efni">Afrita efni</button>
        <button type="button" id="vp-p-afrita-meginmal">Afrita meginm\xE1l</button>
        <button type="button" id="vp-p-sent">Merkja sent</button>
        <a id="vp-p-forskodun" target="_blank" rel="noopener">Forsko\xF0a s\xED\xF0una</a>
      </div>
      <span class="vp-status" id="vp-p-status" role="status"></span>
    </form>

    <!-- Eldri lei\xF0in: k\xF3\xF0i \xE1n p\xF3sts. P\xF3star f\xE1 k\xF3\xF0a \xED ritlinum h\xE9r fyrir ofan -->
    <details class="vp-card">
      <summary>Gefa k\xF3\xF0a \xE1n p\xF3sts</summary>
      <form id="vp-gefa">
        <div class="vp-row">
          <label>Vi\xF0takandi
            <input type="text" id="vp-nafn" placeholder="A Closer Listen" required>
          </label>
          <label>Netfang (valfrj\xE1lst)
            <input type="email" id="vp-netfang" placeholder="info@acloserlisten.com">
          </label>
          <label>M\xE1l
            <select id="vp-mal">
              <option value="en">English</option>
              <option value="is">\xCDslenska</option>
            </select>
          </label>
        </div>
        <button type="submit" id="vp-gefa-btn">Gefa k\xF3\xF0a</button>
        <span class="vp-status" id="vp-status" role="status"></span>
      </form>
    </details>

    <div class="vp-card" id="vp-nidurstada" hidden>
      <strong id="vp-titill"></strong>
      <textarea id="vp-blokk" rows="9" readonly></textarea>
      <div class="vp-row">
        <button type="button" id="vp-afrita-blokk">Afrita blokk</button>
        <button type="button" id="vp-afrita-hlekk">Afrita pressuhlekk</button>
        <a id="vp-forskodun" target="_blank" rel="noopener">Forsko\xF0a s\xED\xF0una</a>
      </div>
    </div>

    <div class="vp-card">
      <div class="vp-row vp-between">
        <strong id="vp-samtals">S\xE6ki st\xF6\xF0u...</strong>
        <button type="button" id="vp-uppfaera">Uppf\xE6ra</button>
      </div>
      <div class="vp-scroll">
        <table id="vp-tafla">
          <thead>
            <tr>
              <th>Vi\xF0takandi</th><th>K\xF3\xF0i</th><th>\xDAthluta\xF0</th><th>Opna\xF0 s\xED\xF0ast</th>
              <th>Opnanir</th><th>Hlusta</th><th>S\xE6kja</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <small>Smelltu \xE1 l\xEDnu til a\xF0 sj\xE1 blokkina aftur. \u201ES\xE6kja\u201C er smellur \xE1 ni\xF0urhalshnappinn \xE1 pressus\xED\xF0unni.</small>
    </div>

    <details class="vp-card">
      <summary>Flytja inn k\xF3\xF0a fr\xE1 Bandcamp</summary>
      <p>L\xEDmdu innihald export-skr\xE1rinnar (CSV) h\xE9r. K\xF3\xF0ar sem eru \xFEegar til eru ekki tv\xEDteknir.</p>
      <textarea id="vp-innflutningur" rows="6"></textarea>
      <button type="button" id="vp-flytja-btn">Flytja inn</button>
    </details>
  </div>
</div>`;function Rt(j){j.innerHTML=Jt;var g="vogor-promo-key",E={en:{pressa:`Your personal promo page (stream, download, press kit):
{pressa}

Direct links:
`,beint:`Listen (private stream): {stream}
Download: {download} (MP3, FLAC or WAV)`},is:{pressa:`\xDE\xEDn pers\xF3nulega promo-s\xED\xF0a (streymi, ni\xF0urhal, pressuefni):
{pressa}

Beinir hlekkir:
`,beint:`Hlusta (loka\xF0 streymi): {stream}
S\xE6kja: {download} (MP3, FLAC e\xF0a WAV)`}};function o(a){return document.getElementById(a)}var T={},X=null;function y(){try{return localStorage.getItem(g)||""}catch{return""}}function N(a){try{a?localStorage.setItem(g,a):localStorage.removeItem(g)}catch{}}var D=y();function F(a,n){var r=Object.assign({action:a,key:D},n||{});return fetch(kt,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(r)}).then(function(l){return l.json()}).then(function(l){if(l.rangtLeyniord&&(D="",N(""),z(!1)),!l.ok)throw new Error(l.villa||"\xD3\xFEekkt villa");return l})}function z(a){o("vp-gate").hidden=a,o("vp-app").hidden=!a}function q(a){return{pressa:T.press_page?T.press_page+"?k="+a:"",stream:T.private_stream||"",download:T.redeem?T.redeem+"?code="+a:""}}function G(a,n){return a.replace(/\{(\w+)\}/g,function(r,l){return n[l]})}function $(a,n){X=a;var r=q(a.kodi),l=E[o("vp-mal").value];o("vp-titill").textContent=a.vidtakandi+": "+a.kodi+(n?" ("+n+")":""),o("vp-blokk").value=(r.pressa?G(l.pressa,r):"")+G(l.beint,r),o("vp-afrita-hlekk").hidden=!r.pressa,o("vp-forskodun").hidden=!r.pressa,r.pressa&&(o("vp-forskodun").href=r.pressa+"&preview=1"),o("vp-nidurstada").hidden=!1}function Y(a,n){navigator.clipboard.writeText(a).then(function(){var r=n.textContent;n.textContent="Afrita\xF0",setTimeout(function(){n.textContent=r},1500)})}function L(a,n){var r=document.createElement("td");r.textContent=n||"-",a.appendChild(r)}function C(a){T=a.stillingar||{},o("vp-samtals").textContent=a.linur.length+" \xFAthluta\xF0, "+a.lausir+" lausir af "+a.alls;var n=o("vp-tafla").tBodies[0];n.textContent="",a.linur.forEach(function(r){var l=document.createElement("tr");L(l,r.vidtakandi),L(l,r.kodi),L(l,r.uthlutad),L(l,r.opnadSidast),L(l,r.opnanir?String(r.opnanir):""),L(l,r.hlusta),L(l,r.saekja),l.addEventListener("click",function(){$(r)}),n.appendChild(l)})}function S(){return F("stada").then(C).catch(function(a){o("vp-samtals").textContent="Villa: "+a.message})}var nt=["midill","tengilidur","netfang","flokkur","leid","fra","hver","mal","stada","efni","meginmal","notur"],rt={leid:"P\xF3stur",mal:"en",stada:"Dr\xF6g"},vt={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"},tt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,h=/\[(BLOKK|PRESSUHLEKKUR)\]/,d=null;function A(a){return o("vp-p-"+a)}function H(a){o("vp-p-status").textContent=a||""}function Z(a){return a?a.slice(0,10):""}function w(a,n){a.options.length||n.forEach(function(r){var l=document.createElement("option");l.value=r,l.textContent=r||"\u2013",a.appendChild(l)})}function R(a,n){var r=Array.prototype.some.call(a.options,function(b){return b.value===n});if(!r){var l=document.createElement("option");l.value=n,l.textContent=n,a.appendChild(l)}a.value=n}function _(a){T=a.stillingar||T,w(A("stada"),a.stodur),w(A("hver"),[""].concat(a.band)),w(A("flokkur"),[""].concat(a.flokkar||[]));var n={};a.postar.forEach(function(v){n[v.stada]=(n[v.stada]||0)+1});var r=a.stodur.filter(function(v){return n[v]}).map(function(v){return n[v]+" "+v.toLowerCase()});o("vp-postar-samtals").textContent=a.postar.length?a.postar.length+" vi\xF0takendur: "+r.join(", "):"Enginn vi\xF0takandi skr\xE1\xF0ur enn";var l=o("vp-postar").tBodies[0];l.textContent="";var b=null;a.postar.forEach(function(v){if((v.flokkur||"")!==b){b=v.flokkur||"";var f=document.createElement("tr");f.className="vp-flokkur";var c=document.createElement("th");c.colSpan=7,c.textContent=b||"\xD3flokka\xF0",f.appendChild(c),l.appendChild(f)}var M=document.createElement("tr");vt[v.stada]&&(M.className="vp-st-"+vt[v.stada]),L(M,v.midill),L(M,v.stada),L(M,v.hver),L(M,v.leid),L(M,v.sent),L(M,v.opnad?Z(v.opnad)+(v.opnanir>1?" ("+v.opnanir+"\xD7)":""):""),L(M,Z(v.hlusta)),M.addEventListener("click",function(){ot(v)}),l.appendChild(M)})}function J(){return F("postar").then(_).catch(function(a){o("vp-postar-samtals").textContent="Villa: "+a.message})}function K(){var a=d||{};o("vp-post-titill").textContent=a.id?a.midill+(a.kodi?" \xB7 k\xF3\xF0i "+a.kodi:" \xB7 enginn k\xF3\xF0i"):"N\xFDr vi\xF0takandi",o("vp-p-gefa").hidden=!!a.kodi;var n=a.kodi?q(a.kodi).pressa:"";o("vp-p-forskodun").hidden=!n,n&&(o("vp-p-forskodun").href=n+"&preview=1");var r=A("leid").value==="P\xF3stur";o("vp-p-opna").textContent=r?"Opna \xED p\xF3stforriti":"Afrita og opna sl\xF3\xF0",o("vp-p-eml").hidden=!r}function U(a){for(var n="",r=0;r<a.length;r++)n+=String.fromCharCode(a[r]);return btoa(n)}function ft(a,n){if(/^[\x20-\x7e]*$/.test(n))return a+": "+n;var r=new TextEncoder,l=[],b=[];return Array.from(n).forEach(function(v){var f=Array.from(r.encode(v));b.length+f.length>39&&(l.push("=?UTF-8?B?"+U(b)+"?="),b=[]),b=b.concat(f)}),b.length&&l.push("=?UTF-8?B?"+U(b)+"?="),a+": "+l.join(`\r
 `)}function at(a,n,r,l){var b=["To: "+a];tt.test(n)&&b.push("From: "+n),b.push(ft("Subject",r)),b.push("X-Unsent: 1","MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64");var v=U(new TextEncoder().encode(l.replace(/\r?\n/g,`\r
`)));return b.join(`\r
`)+`\r
\r
`+v.replace(/(.{76})/g,`$1\r
`)+`\r
`}function mt(a,n,r){var l=URL.createObjectURL(new Blob([n],{type:r})),b=document.createElement("a");b.href=l,b.download=a,document.body.appendChild(b),b.click(),b.remove(),setTimeout(function(){URL.revokeObjectURL(l)},1e3)}var W={};function st(a){nt.forEach(function(n){var r=A(n),l=a[n]||rt[n]||"";r.tagName==="SELECT"?R(r,l):r.value=l,W[n]=r.value})}function ot(a){d=a,st(a),H(s()?"Hlekkir vi\xF0takandans eru komnir inn \xED textann. \u201EVista\u201C geymir hann \xFEannig.":""),K(),o("vp-post").hidden=!1,o("vp-post").scrollIntoView({block:"nearest"})}function t(){var a=!(d&&d.id),n={};return nt.forEach(function(r){var l=A(r).value;(a||l!==W[r])&&(n[r]=l)}),n}function i(){var a=t();return d&&d.id&&(a.id=d.id),H("Vista..."),F("postVista",{post:a}).then(function(n){return d=n.postar[0],st(d),s(),K(),H("Vista\xF0"),J().then(function(){return d})})}function m(){var a=A("meginmal").value;if(!h.test(a))return a;var n=d&&d.kodi;if(!n)return null;var r=q(n),l=E[A("mal").value]||E.en,b=(r.pressa?G(l.pressa,r):"")+G(l.beint,r);return a.split("[BLOKK]").join(b).split("[PRESSUHLEKKUR]").join(r.pressa)}function s(){var a=m();return a===null||a===A("meginmal").value?!1:(A("meginmal").value=a,!0)}function p(a){var n=m();if(n===null){H("Gef\xF0u k\xF3\xF0a fyrst: p\xF3sturinn notar [BLOKK] e\xF0a [PRESSUHLEKKUR].");return}a(n)}function x(a){H("Villa: "+a.message)}function u(a,n){a.disabled=!0,n().catch(x).then(function(){a.disabled=!1})}o("vp-post-nyr").addEventListener("click",function(){ot({})}),o("vp-p-loka").addEventListener("click",function(){d=null,o("vp-post").hidden=!0}),A("leid").addEventListener("change",K),o("vp-post").addEventListener("submit",function(a){a.preventDefault(),u(o("vp-p-vista"),i)}),o("vp-p-gefa").addEventListener("click",function(){u(this,function(){return i().then(function(a){return F("postGefa",{id:a.id})}).then(function(a){T=a.stillingar||T,d=a.post,K();var n=a.nyr?"N\xFDr k\xF3\xF0i: "+a.post.kodi:"Mi\xF0illinn \xE1tti k\xF3\xF0a fyrir: "+a.post.kodi,r=s();return(r?i():Promise.resolve()).then(function(){return H(n+(r?". Hlekkirnir eru komnir inn \xED textann.":"")),Promise.all([S(),J()])})})})}),o("vp-p-opna").addEventListener("click",function(){var a=this;p(function(n){var r=A("netfang").value.trim(),l=A("fra").value;if(A("leid").value!=="P\xF3stur"){Y(n,a);var b=/^https?:\/\//i.test(r)?r:"";b&&window.open(b,"_blank","noopener"),H(b?"Meginm\xE1li\xF0 er afrita\xF0 og sl\xF3\xF0in opnu\xF0.":"Meginm\xE1li\xF0 er afrita\xF0. Engin sl\xF3\xF0 er skr\xE1\xF0.");return}if(!tt.test(r)){H("Netfang vantar e\xF0a er ekki gilt.");return}var v="mailto:"+r+"?subject="+encodeURIComponent(A("efni").value)+"&body="+encodeURIComponent(n.replace(/\r?\n/g,`\r
`));H((l?"Sendu fr\xE1 "+l+". ":"")+(v.length>1900?"Langur p\xF3stur: ef meginm\xE1li\xF0 kemur klippt inn, nota\xF0u \u201ES\xE6kja sem dr\xF6g\u201C e\xF0a \u201EAfrita meginm\xE1l\u201C.":"")),location.href=v})}),o("vp-p-eml").addEventListener("click",function(){p(function(a){var n=A("netfang").value.trim();if(!tt.test(n)){H("Netfang vantar e\xF0a er ekki gilt.");return}var r="Nafir - "+A("midill").value.trim().replace(/[\\/:*?"<>|]+/g," ")+".eml";mt(r,at(n,A("fra").value,A("efni").value,a),"message/rfc822"),H("Opna\xF0u skr\xE1na "+r+": h\xFAn \xE1 a\xF0 opnast sem \xF3sendur p\xF3stur \xED p\xF3stforritinu.")})}),o("vp-p-afrita-efni").addEventListener("click",function(){Y(A("efni").value,this)}),o("vp-p-afrita-meginmal").addEventListener("click",function(){var a=this;p(function(n){Y(n,a)})}),o("vp-p-sent").addEventListener("click",function(){u(this,function(){return i().then(function(a){return F("postStada",{id:a.id,stada:"Sent"})}).then(function(a){return d=a.post,st(a.post),K(),H("Merkt sent "+a.post.sent),J()})})});function P(){return Promise.all([S(),J()])}o("vp-gate").addEventListener("submit",function(a){a.preventDefault(),D=o("vp-key").value.trim(),N(D),o("vp-key").value="",z(!0),P()}),o("vp-gefa").addEventListener("submit",function(a){a.preventDefault();var n=o("vp-gefa-btn"),r=o("vp-status");n.disabled=!0,r.textContent="S\xE6ki k\xF3\xF0a...",F("gefa",{vidtakandi:o("vp-nafn").value,netfang:o("vp-netfang").value}).then(function(l){return T=l.stillingar||T,$(l.lina,l.nyr?"n\xFDr k\xF3\xF0i":"\xE1tti k\xF3\xF0a fyrir"),r.textContent="",o("vp-nafn").value="",o("vp-netfang").value="",S()}).catch(function(l){r.textContent="Villa: "+l.message}).then(function(){n.disabled=!1})}),o("vp-mal").addEventListener("change",function(){X&&$(X)}),o("vp-afrita-blokk").addEventListener("click",function(){Y(o("vp-blokk").value,this)}),o("vp-afrita-hlekk").addEventListener("click",function(){Y(q(X.kodi).pressa,this)}),o("vp-uppfaera").addEventListener("click",P),o("vp-flytja-btn").addEventListener("click",function(){var a=this;a.disabled=!0,F("flytjaInn",{texti:o("vp-innflutningur").value}).then(function(n){return o("vp-innflutningur").value="B\xE6tti vi\xF0 "+n.nyir+" k\xF3\xF0um (sett "+n.sett+"). Alls "+n.alls+".",S()}).catch(function(n){o("vp-innflutningur").value="Villa: "+n.message}).then(function(){a.disabled=!1})}),z(!!D),D&&P()}var Gt=`<div class="vpp" data-mal-bidur>
  <div class="vpp-head">
    <div class="vpp-dymo vpp-dymo--red">|NAFIR|PROMO|COPY|</div>
    <div class="vpp-head-right">
      <div class="vpp-mal" role="group" aria-label="Tungum\xE1l / Language">
        <button type="button" data-mal-val="is" lang="is" aria-pressed="false">\xCDS</button>
        <button type="button" data-mal-val="en" lang="en" aria-pressed="false">EN</button>
      </div>
      <div class="vpp-counter">VR046</div>
    </div>
  </div>

  <div class="vpp-top">
    <div class="vpp-screen">
      <img src="https://f4.bcbits.com/img/a3515151154_10.jpg" width="1200" height="1200"
           alt="Nafir cover: a sunlit workshop wall covered in painted portraits, with guitars and a drum kit in front of it"
           data-alt-en="Nafir cover: a sunlit workshop wall covered in painted portraits, with guitars and a drum kit in front of it"
           data-alt-is="Umslag Nafir: s\xF3lbjartur veggur \xED vinnustofu, \xFEakinn m\xE1lu\xF0um andlitsmyndum, og g\xEDtarar og trommusett fyrir framan">
    </div>

    <div class="vpp-info">
      <p class="vpp-artist">Stafr\xE6nn H\xE1kon</p>
      <h1 class="vpp-title">Nafir</h1>

      <dl class="vpp-meta">
        <div><dt><span data-mal="en">Label</span><span data-mal="is">\xDAtg\xE1fa</span></dt><dd>Vogor Records</dd></div>
        <div><dt><span data-mal="en">Release</span><span data-mal="is">Dagsetning</span></dt><dd><span data-mal="en">27 November 2026</span><span data-mal="is">27. n\xF3vember 2026</span></dd></div>
        <div><dt><span data-mal="en">Pre-order</span><span data-mal="is">Forsala</span></dt><dd><span data-mal="en">30 October 2026</span><span data-mal="is">30. okt\xF3ber 2026</span></dd></div>
        <div><dt><span data-mal="en">Length</span><span data-mal="is">Lengd</span></dt><dd><span data-mal="en">8 songs, 30 minutes</span><span data-mal="is">8 l\xF6g, 30 m\xEDn\xFAtur</span></dd></div>
      </dl>

      <div class="vpp-personal">
        <div data-promo-state="loading">
          <p class="vpp-status"><span class="vpp-led vpp-led--wait"></span><span data-mal="en">Loading your links</span><span data-mal="is">S\xE6ki hlekki..</span></p>
        </div>

        <div data-promo-state="ok" hidden>
          <p class="vpp-status"><span class="vpp-led vpp-led--ok"></span><span data-mal="en">Promo copy for</span><span data-mal="is">Kynningareintak fyrir</span><span data-promo="name"></span></p>
          <div class="vpp-keys">
            <a class="vpp-key" data-promo="listen" target="_blank" rel="noopener"><span data-mal="en">Listen</span><span data-mal="is">Hlusta</span></a>
            <a class="vpp-key" data-promo="download" target="_blank" rel="noopener"><span data-mal="en">Download</span><span data-mal="is">S\xE6kja</span></a>
          </div>
          <p class="vpp-note"><span data-mal="en">Download as MP3, FLAC or WAV. Your code is already filled in:</span><span data-mal="is">S\xE6kja sem MP3, FLAC e\xF0a WAV. K\xF3\xF0inn \xFEinn er \xFEegar fylltur inn:</span>
            <span class="vpp-counter vpp-counter--code" data-promo="code"></span></p>
          <p class="vpp-note"><span data-mal="en">Please don't share before 27 November 2026.</span><span data-mal="is">Vinsamlegast ekki deila fyrir 27. n\xF3vember 2026.</span></p>
        </div>

        <div data-promo-state="invalid" hidden>
          <p class="vpp-status"><span class="vpp-led vpp-led--stop"></span><span data-mal="en">Personal link needed</span><span data-mal="is">Hlekkinn \xFEinn vantar...</span></p>
          <p class="vpp-note" data-mal="en">The stream and download open with the personal link from the email you received. Reply to that email and we'll send you a new one.</p>
          <p class="vpp-note" data-mal="is">Streymi og ni\xF0urhal opnast me\xF0 \xFE\xEDnum hlekk sem \xFE\xFA f\xE9kkst sent \xED vefp\xF3sti. Svara\xF0u \xFEeim p\xF3sti og vi\xF0 sendum \xFE\xE9r n\xFDjan.</p>
        </div>

        <div data-promo-state="error" hidden>
          <p class="vpp-status"><span class="vpp-led vpp-led--stop"></span><span data-mal="en">Couldn't load your links</span><span data-mal="is">Ekki t\xF3kst a\xF0 s\xE6kja hlekkina</span></p>
          <p class="vpp-note" data-mal="en">Please reload the page, or reply to the email you received.</p>
          <p class="vpp-note" data-mal="is">Endurhla\xF0a s\xED\xF0una, e\xF0a svara\xF0u p\xF3stinum sem \xFE\xFA f\xE9kkst.</p>
        </div>
      </div>
    </div>
  </div>

  <section class="vpp-section">
    <div class="vpp-dymo">|ABOUT|</div>
    <div class="vpp-prose" data-mal="is" lang="is">
      <p><strong>Nafir</strong> \xE1 uppt\xF6k s\xEDn \xED heims\xF3kn til \xC1rna \xDE\xF3rs \xC1rnasonar \xED Tj\xF6rnarp \xED Sv\xED\xFEj\xF3\xF0. \xCD vinnustofu \xC1rna, B-h\xFAsinu, ur\xF0u lausleg dr\xF6g a\xF0 pl\xF6tunni a\xF0 veruleika. \xDEar skapa\xF0ist \xE1kve\xF0inn hlj\xF3\xF0grunnur sem var\xF0 svo a\xF0 rau\xF0ri l\xEDnu \xED gegnum pl\xF6tuna.</p>
      <p>Kassabassi og l\xE1gt str\xF6mma\xF0ur nylon-g\xEDtar ur\xF0u a\xF0 einskonar grunnt\xF3ni sem einkenndi l\xF6gin. Bassi \xC1rna \xDE\xF3rs og trommur R\xF3berts M\xE1s Run\xF3lfssonar fl\xE9ttast saman \xED hryggjars\xFAlu laganna, sem allt anna\xF0 hv\xEDlir \xE1. \xC1 l\xE1gstemmdan grunninn bygg\xF0i hlj\xF3msveitin l\xF6gin sm\xE1m saman og heildarsvipur t\xF3k a\xF0 myndast. \xDEegar hinn einkennandi fl\xE6\xF0andi g\xEDtarhlj\xF3mur, sem lengi hefur veri\xF0 st\xF3r hluti af hlj\xF3\xF0heimi Stafr\xE6ns H\xE1kons, var or\xF0inn hluti af l\xF6gunum t\xF3ku \xFEau \xE1 sig kunnuglegan brag. G\xEDtarl\xEDnur \xD3lafs og L\xE1rusar tala saman og vefjast hvor um a\xF0ra eins og lifandi skepnur sem mynda st\xF3ra heild.</p>
      <p>\xC1 <strong>Nafir</strong> st\xEDgur Magn\xFAs Freyr G\xEDslason fram sem texta- og lagah\xF6fundur sveitarinnar. Hr\xE1ar skissur hans voru unnar \xE1fram og fullm\xF3ta\xF0ar af sveitinni \xED sameiningu. R\xF6dd hans ver\xF0ur sem samofinn vefur sem lei\xF0ir pl\xF6tuna til enda. Magn\xFAs syngur alfari\xF0 \xE1 \xEDslensku og textarnir f\xE6rast \xE1 milli hversdagslegra sm\xE1atri\xF0a, h\xFAmors, n\xE1ndar og einhvers enn dularfyllra, en s\xF6ngurinn helst ofinn inn \xED t\xF3nlistina frekar en a\xF0 sitja ofan \xE1 henni. <strong>Nafir</strong> er fyrsta plata Stafr\xE6ns H\xE1kons me\xF0 s\xF6ng fr\xE1 upphafi til enda.</p>
      <blockquote class="vpp-quote"><p>\u201EL\xF6gin \xE1 Nafir eru samin \xE1 t\xEDmabili sem einkenndist af \xF3kyrr\xF0, efa og h\xF6fnun, en l\xEDka \xFEeirri uppg\xF6tvun a\xF0 f\xE1tt skiptir n\xF3gu miklu m\xE1li til a\xF0 l\xE1ta s\xE9r l\xED\xF0a illa yfir \xFEv\xED. \xDEa\xF0 sem amar a\xF0 er oft sj\xE1lfskapa\xF0 og minna m\xE1l en \xFEa\xF0 vir\xF0ist \xED augnablikinu. \xDEa\xF0 er hvort sem er enginn a\xF0 sp\xE1 svo miki\xF0 \xED manni, allir eru uppteknir af \xFEv\xED hva\xF0 \xF6\xF0rum finnst um \xFE\xE1. Nafir eru \xFEessar ystu nafir sem ma\xF0ur getur sta\xF0i\xF0 \xE1 alveg a\xF0 \xE1st\xE6\xF0ulausu. En \xFEa\xF0 er allavega gott \xFAts\xFDni \xFEa\xF0an.\u201C</p><footer>Magn\xFAs Freyr G\xEDslason</footer></blockquote>
      <p>Platan var tekin upp \xED Vogor Studios, fyrir utan bassann sem \xC1rni \xDE\xF3r t\xF3k upp \xED vinnustofunni \xED Tj\xF6rnarp. \xD3lafur Josephsson hlj\xF3\xF0blanda\xF0i pl\xF6tuna h\xE6gt og r\xF3lega, me\xF0 hl\xE9um yfir r\xFAmt \xE1r, og leyf\xF0i l\xF6gunum a\xF0 finna sitt eigi\xF0 jafnv\xE6gi milli l\xE1gstemmdrar n\xE1lgunar og \xFEunga.</p>
      <p>\xC1tta l\xF6g \xE1 r\xFAmum h\xE1lft\xEDma. <strong>Nafir</strong> er hl\xFD, n\xE1l\xE6g og l\xE1gstemmd \xED grunninn, me\xF0 st\xE6rri, andr\xFAmsloftskenndum hlj\xF3\xF0heimi Stafr\xE6ns H\xE1kons sem opnast sm\xE1m saman utan um hana.</p>
    </div>
    <div class="vpp-prose" data-mal="en" lang="en">
      <p><strong>Nafir</strong> began during a visit to \xC1rni \xDE\xF3r \xC1rnason\u2019s workshop in Tj\xF6rnarp, Sweden. A weekend of demoing ideas turned into a sound that became the foundation for the record.</p>
      <p>Acoustic bass replaced electric bass, while a gently strummed acoustic guitar became a bed beneath the drums. \xC1rni \xDE\xF3r\u2019s bass and R\xF3bert M\xE1r Run\xF3lfsson\u2019s drums lock together into the backbone of the songs, the part everything else rests on. Around that quieter, understated foundation, Stafr\xE6nn H\xE1kon gradually built the songs outward, bringing in the atmospheric guitar sound that has long been part of the band\u2019s identity. \xD3lafur\u2019s and L\xE1rus\u2019s guitar lines talk to each other and wind around one another like organic beings, becoming part of a wider texture.</p>
      <p>On <strong>Nafir</strong>, Magn\xFAs Freyr G\xEDslason steps forward as the band\u2019s lyricist and songwriter. His rough sketches were developed further and shaped by the band together. His voice becomes a constant thread through the record from beginning to end. Sung entirely in Icelandic, the lyrics shift between everyday detail, humour, intimacy, something darker and even mysterious, while the singing stays woven into the music rather than sitting above it. It is the first Stafr\xE6nn H\xE1kon record with vocals from start to finish.</p>
      <blockquote class="vpp-quote"><p>\u201CThe songs on Nafir were written during a period of unrest, doubt and rejection, but also with the realisation that very little is worth making yourself miserable over. The things that bother us are often of our own making, and less of a big deal than they seem at the time. Nobody\u2019s thinking about you that much anyway, everyone\u2019s busy wondering what other people think of them. Nafir refers to those edges we sometimes find ourselves standing on for no good reason. At least the view is good.\u201D</p><footer>Magn\xFAs Freyr G\xEDslason</footer></blockquote>
      <p>The album was recorded largely at Vogor Studios, with \xC1rni \xDE\xF3r recording his bass parts in Tj\xF6rnarp. \xD3lafur Josephsson mixed the record slowly, on and off, over the course of a year, letting the songs find their own balance between restraint and weight.</p>
      <p>Eight songs and just over half an hour, <strong>Nafir</strong> is warm, close and understated at its core, with the wider atmospheric sound of Stafr\xE6nn H\xE1kon gradually opening around it.</p>
    </div>
  </section>

  <section class="vpp-section vpp-sides">
    <div>
      <div class="vpp-dymo">|SIDE|A|</div>
      <ol class="vpp-tracks">
        <li><details>
          <summary><span>Nafir</span><span>3:25</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>H\xFAn l\xE6tur renna \xED ba\xF0<br>h\xFAn veit a\xF0 \xFEa\xF0 er eitthva\xF0 a\xF0<br>\xC9g fylgist grunlaus me\xF0,<br>me\xF0 b\xE1\xF0ar hendurnar<br>H\xFAn lei\xF0ir mig \xE1 betri sta\xF0<br>\xFEv\xED \xE9g \xFEurfti \xFEa\xF0</p>
            <p>H\xFAn kyndir kuldann burt<br>h\xFAn finnur \xFEegar er napurt<br>\xC9g fylgist \xFE\xF6gull me\xF0,<br>me\xF0 b\xE1\xF0ar f\xE6turnar<br>H\xFAn l\xE6tur mig hlaupa af sta\xF0<br>N\xFA er allt upphita\xF0</p>
            <p>H\xFAn leysir vandam\xE1l<br>Me\xF0 taugar eins og st\xE1l<br>H\xFAn leysir vandam\xE1l<br>H\xFAn r\xE6ktar stundum k\xE1l<br>H\xFAn leysir vandam\xE1l<br>Tendrar fallegt b\xE1l</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>\xD3minni</span><span>4:24</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>Veit, \xE9g \xE1 allt<br>\xE9g fann \xFEa\xF0 \xED dag.<br>Veit, hva\xF0 er a\xF0<br>\xC9g skapa\xF0i \xFEa\xF0.</p>
            <p>\xC9g mun deyfa, tilfinningarnar.<br>Myndi deyja, til a\xF0 finna \xFE\xE6r.</p>
            <p>Hey, \xFEa\xF0 er kalt<br>\xE9g fann \xFEa\xF0 \xED dag.<br>Hey, hva\xF0 me\xF0 \xFEa\xF0<br>orsaka\xF0i \xFEa\xF0.</p>
            <p>\xC9g vil teygja<br>eiga stundina<br>\xC9g finn eitthva\xF0<br>Tre\xF0 \xFEv\xED svo \xED kaf</p>
            <p>\xC9g \xE1 n\xFDja sk\xF3, n\xFDja sk\xF3<br>En \xE9g hef gengi\xF0 n\xF3g, gengi\xF0 n\xF3g<br>\xDE\xF3 a\xF0 dyrnar, dyrnar<br>Standi galopnar, galopnar</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>Dj\xE1kninn</span><span>3:31</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>H\xFAn veipar \xED innisk\xF3m<br>og leitar a\xF0 n\xFDjum t\xF3n<br>\xC9g reika inn\xED sk\xF3g<br>\xE9g raula \xFAt \xED t\xF3m</p>
            <p>Heilir, h\xE1lfir, sleipir, sm\xE1ir, veikir, h\xE1\xF0ir, steypir, s\xE1ir<br>Hugmyndir, fr\xE1veita, innisk\xF3r, hj\xE1veita.<br>Kveikir, b\xE1li\xF0, steikir, s\xE1lir, leysir, m\xE1li\xF0, kveikir, b\xE1li\xF0<br>Heildarmynd, steypiba\xF0, nor\xF0anvind, heyri \xFEa\xF0</p>
            <p>\xDEa\xF0 heyrist h\xE1tt \xED vindinum<br>\xDEa\xF0 leynist f\xE1tt i huganum</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>F\xEDn</span><span>3:24</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>Dj\xF6full er h\xFAn g\xF3\xF0<br>Dj\xF6full er h\xFAn f\xEDn<br>H\xFAn er st\xFAlkan m\xEDn<br>Semur stundum lj\xF3\xF0<br>Drekkur stundum v\xEDn<br>H\xFAn er st\xFAlkan m\xEDn</p>
          </div>
        </details></li>
      </ol>
    </div>
    <div>
      <div class="vpp-dymo">|SIDE|B|</div>
      <ol class="vpp-tracks" start="5">
        <li><details>
          <summary><span>Jafnari</span><span>3:14</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>Holdi\xF0 hla\xF0i\xF0<br>svona l\xED\xF0ur m\xE9r oft \xED lendunum<br>Foldin falin<br>\xFEetta lifandi loft \xED lungunum</p>
            <p>\xC9g glefsa oft \xED ney\xF0<br>Hugsa allt of seint<br>Gli\xF0nar lei\xF0in grei\xF0<br>Ekki vera rei\xF0</p>
            <p>Holdi\xF0 hla\xF0i\xF0<br>svona l\xED\xF0ur m\xE9r oft \xED lendunum<br>Foldin falin<br>\xFEetta lifandi loft \xED lungunum</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>L\xEDnurnar</span><span>4:38</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>\xC9g teikna, reyni a\xF0 r\xE1\xF0a \xED l\xEDnurnar<br>\xC9g reikna, er a\xF0 m\xE6la g\xF6turnar<br>Vi\xF0 dyrnar, stend og b\xED\xF0 en ekkert svar<br>\xDEa\xF0 kviknar, lj\xF3s en engin b\xED\xF0ur \xFEar</p>
            <p>En eitt, l\xEDti\xF0 svar<br>\xDEa\xF0 leysir \xFErautina<br>\xCD eitt, andartak<br>\xC9g g\xE6ti fundi\xF0 \xFEa\xF0</p>
            <p>\xC9g reika, er a\xF0 horfa \xE1 stj\xF6rnurnar<br>\xC9g ry\xF0a, er a\xF0 gefa upp \xF6ndina<br>\xC9g hrasa, er a\xF0 missa f\xE6turnar<br>\xDE\xFA svarar, r\xE9ttir m\xE9r svo h\xF6ndina</p>
            <p>En eitt, l\xEDti\xF0 svar<br>\xDEa\xF0 leysir \xFErautina<br>\xCD eitt, andartak<br>\xC9g g\xE6ti fundi\xF0 \xFEa\xF0</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>K\xFAbein</span><span>3:18</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>\xC9g veit ekki hva\xF0<br>\xE9g er \xF3skrifa\xF0 bla\xF0<br>Legg af sta\xF0 engin veit, enginn veit<br>\xC9g veit ekki hva\xF0<br>\xE9g l\xE6t renna \xED ba\xF0<br>Legg af sta\xF0<br>engin veit, enginn veit</p>
            <p>\xCD dimman dal, m\xE1 \xE9g lei\xF0a \xFEig heim<br>\xCD dimman dal, og \xE9g rata \xFEessa lei\xF0<br>\xCD dimman dal, komdu heim komdu heim<br>\xCD dimman dal, komdu heim</p>
            <p>\xC9g s\xE1 \xFEig \xED dag<br>en skildi ekki hva\xF0<br>Hva\xF0 er a\xF0<br>engin veit, enginn veit<br>\xC9g veit ekki hva\xF0<br>en l\xE6t reyna \xE1 \xFEa\xF0<br>Legg af sta\xF0<br>engin veit, enginn veit</p>
            <p>\xCD dimman dal, viltu lei\xF0a mig heim<br>\xCD dimman dal, og \xE9g rata ekki heim<br>\xCD dimman dal, f\xF6rum heim f\xF6rum heim<br>\xCD dimman dal, f\xF6rum heim</p>
          </div>
        </details></li>
        <li><details>
          <summary><span>Mask\xEDna</span><span>4:22</span></summary>
          <div class="vpp-lyric" lang="is">
            <p>H\xFAn tifar eins og l\xEDtil mask\xEDna<br>Og hreyfir alla st\xF3ru v\xEDsana<br>Eins og j\xF6r\xF0in sn\xFDst \xED kringum \xFE\xFAfuna<br>H\xFAn vefur m\xE9r um fingur s\xE9r eins og s\xEDrena</p>
            <p>H\xFAn teymir heilan her<br>Me\xF0 t\xE1r \xE1 vanga s\xE9r<br>H\xFAn syrgir heilan her<br>H\xFAn er ei lengur h\xE9r<br>Me\xF0 himinskautum fer</p>
            <p>Eins og nor\xF0urstjarna v\xEDsar lei\xF0ina<br>H\xFAn er var\xF0an yfir dimma hei\xF0ina<br>Jar\xF0\xFDta \xE1 gr\xFDtta lei\xF0ina<br>H\xFAn heldur m\xE9r \xED \xF6rmum s\xE9r eins og hafalda</p>
            <p>H\xFAn teymir heilan her<br>Me\xF0 t\xE1r \xE1 vanga s\xE9r<br>H\xFAn syrgir heilan her<br>H\xFAn er ei lengur h\xE9r<br>Me\xF0 himinskautum fer</p>
          </div>
        </details></li>
      </ol>
    </div>
  </section>

  <p class="vpp-small vpp-hint"><span data-mal="en">Select a song to read its lyrics. All lyrics are in Icelandic.</span><span data-mal="is">Veldu lag til a\xF0 lesa textann.</span></p>

  <section class="vpp-section vpp-sides">
    <div>
      <div class="vpp-dymo">|CREDITS|</div>
      <ul class="vpp-credits">
        <li>\xC1rni \xDE\xF3r \xC1rnason<span data-mal="en">acoustic bass</span><span data-mal="is">kassabassi</span></li>
        <li>L\xE1rus Sigur\xF0sson<span data-mal="en">electric guitar</span><span data-mal="is">rafg\xEDtar</span></li>
        <li>Magn\xFAs Freyr G\xEDslason<span data-mal="en">vocals</span><span data-mal="is">s\xF6ngur</span></li>
        <li>\xD3lafur Josephsson<span data-mal="en">guitar, nylon-string guitar, piano, organ, percussion, drums on \xD3minni</span><span data-mal="is">g\xEDtar, kassag\xEDtar, p\xEDan\xF3, orgel, slagverk, trommur \xED laginu \xD3minni</span></li>
        <li>R\xF3bert M\xE1r Run\xF3lfsson<span data-mal="en">drums</span><span data-mal="is">trommur</span></li>
        <li>N\xF3i Steinn Einarsson<span data-mal="en">drums on L\xEDnurnar and Mask\xEDna</span><span data-mal="is">trommur \xED l\xF6gunum L\xEDnurnar og Mask\xEDna</span></li>
        <li>Fjalar Sigur\xF0sson<span data-mal="en">tuba on Mask\xEDna</span><span data-mal="is">t\xFAba \xED laginu Mask\xEDna</span></li>
      </ul>
      <p class="vpp-small" data-mal="en">Demos recorded at B-h\xFAsi\xF0, Tj\xF6rnarp. Recorded at Vogor Studios; bass recorded by \xC1rni \xDE\xF3r in Tj\xF6rnarp. Mixed by \xD3lafur Josephsson. Mastered by Justin Pizzoferrato at Sonelab. Artwork by \xC1rni \xDE\xF3r \xC1rnason.</p>
      <p class="vpp-small" data-mal="is">Prufuuppt\xF6kur \xED B-h\xFAsinu, Tj\xF6rnarp. Teki\xF0 upp \xED Vogor Studios; \xC1rni \xDE\xF3r t\xF3k bassann upp \xED Tj\xF6rnarp. Hlj\xF3\xF0bl\xF6ndun: \xD3lafur Josephsson. Hlj\xF3mj\xF6fnun: Justin Pizzoferrato \xED Sonelab. Umslag: \xC1rni \xDE\xF3r \xC1rnason.</p>
    </div>
    <div>
      <div class="vpp-dymo">|PRESS|KIT|</div>
      <a href="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5866a4e56a4ade30b085_shakon-live-tjornarp-press.jpg" target="_blank" rel="noopener"><img class="vpp-photo" src="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5864a44f525f940c8f37_shakon-live-tjornarp-web.jpg" width="2000" height="1110" loading="lazy"
           alt="Stafr\xE6nn H\xE1kon on a small stage in Tj\xF6rnarp: five musicians in front of a star map backdrop, the singer in the light at the centre"
           data-alt-en="Stafr\xE6nn H\xE1kon on a small stage in Tj\xF6rnarp: five musicians in front of a star map backdrop, the singer in the light at the centre"
           data-alt-is="Stafr\xE6nn H\xE1kon \xE1 litlu svi\xF0i \xED Tj\xF6rnarp: fimm t\xF3nlistarmenn fyrir framan stj\xF6rnukort, s\xF6ngvarinn \xED lj\xF3sinu fyrir mi\xF0ju"></a>
      <ul class="vpp-links">
        <li><a href="https://f4.bcbits.com/img/a3515151154_0.jpg" target="_blank" rel="noopener"><span data-mal="en">Cover art</span><span data-mal="is">Umslag</span>, 3000 \xD7 3000 (JPG, 5 MB)</a></li>
        <li><a href="https://f4.bcbits.com/img/a3515151154_10.jpg" target="_blank" rel="noopener"><span data-mal="en">Cover art</span><span data-mal="is">Umslag</span>, 1200 \xD7 1200 (JPG)</a></li>
        <li><a href="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5866a4e56a4ade30b085_shakon-live-tjornarp-press.jpg" target="_blank" rel="noopener"><span data-mal="en">Band photo</span><span data-mal="is">Hlj\xF3msveitarmynd</span>, 3119 \xD7 1731 (JPG, 1 MB)</a></li>
        <li><a href="https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5864a44f525f940c8f37_shakon-live-tjornarp-web.jpg" target="_blank" rel="noopener"><span data-mal="en">Band photo</span><span data-mal="is">Hlj\xF3msveitarmynd</span>, 2000 \xD7 1110 (JPG)</a>
          <span data-mal="en">Stafr\xE6nn H\xE1kon live in Tj\xF6rnarp, Sweden, 11 April 2025. Photo: Hj\xF6rleifur J\xF3nsson.</span>
          <span data-mal="is">Stafr\xE6nn H\xE1kon \xE1 t\xF3nleikum \xED Tj\xF6rnarp \xED Sv\xED\xFEj\xF3\xF0, 11. apr\xEDl 2025. Lj\xF3smynd: Hj\xF6rleifur J\xF3nsson.</span></li>
      </ul>
      <div class="vpp-dymo">|ARTWORK|</div>
      <!-- \xCDslenska \xFAtg\xE1fan er br\xE1\xF0abirg\xF0a\xFE\xFD\xF0ing (18. okt) \xFEar til \xC1rni \xDE\xF3r sam\xFEykkir e\xF0a lei\xF0r\xE9ttir.
           Sami texti er \xED nafir/docs/bio.md. -->
      <blockquote class="vpp-quote vpp-quote--kit" data-mal="is" lang="is"><p>\u201EPl\xF6tuumslagi\xF0 fyrir Nafir vann \xE9g \xED vinnustofunni minni, B-h\xFAsinu \xED Tj\xF6rnarp, \xFEar sem fyrstu lagahugmyndir pl\xF6tunnar kviknu\xF0u. Platan var \xFE\xE1 fullunnin, textarnir komnir og pl\xF6tuheiti\xF0 l\xEDka, og \xE9g vann verkin \xED spunafl\xE6\xF0i me\xF0 hana a\xF0 lei\xF0arlj\xF3si og leyf\xF0i einst\xF6kum myndum a\xF0 skarast og mynda st\xE6rri heild. \xC9g vildi a\xF0 lj\xF3smyndin fanga\xF0i andr\xFAmslofti\xF0 \xED B-h\xFAsinu, kyrr\xF0ina og hl\xFDjuna, eins og langri og eftirminnilegri uppt\xF6kulotu v\xE6ri n\xFDloki\xF0.\u201C</p><footer>\xC1rni \xDE\xF3r \xC1rnason</footer></blockquote>
      <blockquote class="vpp-quote vpp-quote--kit" data-mal="en" lang="en"><p>\u201CI created the cover artwork for Nafir in my workshop, B-h\xFAsi\xF0, in Tj\xF6rnarp, where the first ideas for the album originally took shape. Inspired by the finished music, lyrics and album title, I worked spontaneously, letting the individual pieces overlap and form a larger whole. I wanted the photograph to capture the atmosphere of the space, with a sense of warmth and stillness, as if a long and memorable session had just come to an end.\u201D</p><footer>\xC1rni \xDE\xF3r \xC1rnason</footer></blockquote>
      <div class="vpp-dymo">|CONTACT|</div>
      <p class="vpp-small">\xD3lafur Josephsson, Vogor Records<br>
        <a href="mailto:vogorrecords@vogorrecords.com">vogorrecords@vogorrecords.com</a></p>
    </div>
  </section>
</div>`;function Ot(y){y.innerHTML=Gt;var g=new URLSearchParams(location.search),E=(g.get("k")||"").trim().toLowerCase(),o=g.has("preview");function T(C){return Array.prototype.slice.call(document.querySelectorAll(C))}var X="nafir-press-mal",y=document.querySelector(".vpp");function N(C){return C==="is"||C==="en"?C:""}function D(){try{return N(localStorage.getItem(X))}catch{return""}}var F=N(g.get("mal"))||D();function z(C){y.setAttribute("data-mal",C),y.setAttribute("lang",C),y.removeAttribute("data-mal-bidur"),T("[data-mal-val]").forEach(function(S){S.setAttribute("aria-pressed",String(S.getAttribute("data-mal-val")===C))}),T("[data-alt-"+C+"]").forEach(function(S){S.alt=S.getAttribute("data-alt-"+C)})}T("[data-mal-val]").forEach(function(C){C.addEventListener("click",function(){F=C.getAttribute("data-mal-val");try{localStorage.setItem(X,F)}catch{}z(F)})});function q(){return/^is\b/i.test(navigator.language||"")?"is":"en"}F&&z(F),setTimeout(function(){y.hasAttribute("data-mal-bidur")&&z(q())},4e3);function G(C){T("[data-promo-state]").forEach(function(S){S.hidden=S.getAttribute("data-promo-state")!==C})}function $(C,S){return fetch(kt,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(C),keepalive:!!S})}function Y(C,S,nt){T('[data-promo="'+C+'"]').forEach(function(rt){rt.href=S,!o&&rt.addEventListener("click",function(){$({action:"smellur",k:E,hvad:nt},!0).catch(function(){})})})}function L(C,S){y.hasAttribute("data-mal-bidur")&&z(N(S)||q()),G(C)}if(!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(E)){L("invalid");return}G("loading"),$({action:"pressa",k:E,forskodun:o}).then(function(C){return C.json()}).then(function(C){if(!C.ok){L(C.villa?"error":"invalid");return}T('[data-promo="name"]').forEach(function(S){S.textContent=C.vidtakandi}),T('[data-promo="code"]').forEach(function(S){S.textContent=C.kodi}),Y("listen",C.stream,"hlusta"),Y("download",C.download,"saekja"),L("ok",C.mal||"en")}).catch(function(){L("error")})}var qt={stada:It,birta:zt,stjorn:Rt,pressa:Ot},Zt={stada:!0,birta:!0,pressa:!0};function Nt(){let j=document.querySelectorAll("[data-nafir]");if(j.length){if(!document.getElementById("nafir-css")){let g=document.createElement("style");g.id="nafir-css",g.textContent=Tt,document.head.appendChild(g)}Mt(),j.forEach(function(g){let E=g.getAttribute("data-nafir"),o=qt[E];!o||g.hasAttribute("data-nafir-raest")||(g.setAttribute("data-nafir-raest",""),Zt[E]&&document.body.classList.add("nafir-beige"),o(g))})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Nt):Nt();})();
//# sourceMappingURL=nafir.js.map
