// Nafir build 983424 (2026-10-22T21:36:23.505Z)
(()=>{var At=`/* Nafir-s\xED\xF0urnar: yfirlit bandsins (.vst) og birtingars\xED\xF0an (.vbt).\r
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
`;var Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABK2lDQ1BJQ0MgUHJvZmlsZQAAeJyVkT9Lw0AYh5+LouKgFUQcHDKJgmKjDmZMq4ggWKtD2635Q5TSJFyuaj+Eo1sHF3c/gZOj4KD4CfwGilMHuUTI4FD6LPfcj5f37t4Do+zsVw6MEnQjJeuHFbPRbJnTr0wxQUbbSxOnVjvWHsVRwD9+PhB6fdvUvRiPWS+RChgC236QeiDKQOdaJQrEAFh0O5k/apfn9SqIZ2AuzP1du5v7p3bZaLZAfOv6MHNjJuuT+4p2Fdzoc6nGSV9ehhfKtGzbNh0/dgPzrJ+qoJuaR5EXyySWbRX4QH6/jIW8UE9szbLtvfUx3z0S/Q+5fZ1m8xVLL0VW4PXk1Z8KY2f0vugxWIaTB5gcFtnuLdxvwPxdka1aUNqCp8EvwMZP/XkTGdQAAAkJSURBVHjaBcHJjl3XdQDQffpz29dWR7JKRVEUZUmG4ViwJs7ACdL8RwIE/jUPMs3EgBHACALEUgDHUSRDJEWx+nrdfe92p9s7a7Hf/Ppzc3ppiqKWYtXsVfK7fXO12QOwhCg4JwYAwBA4ZwCMAI/zQkn+7eP+etcqxurCvr3f/dMvbTumr2/VyWIy+hFiaClnAFIGRyl0fecR0bu+P1CIR7kZU4op1LmdZrXW3AJiSpqDYrzxqfX4tDbzadm2/VTAvZKaw4uFnufAtItIGuj9wRmKMiVGKXYhAmLFotBMkAjOF4VhzHIQTQgUOSXctX2u2K/O50CEwGcoDTEvxfnE/LDrXj+4yymAFOh6YLBPWPA++CQlwHa9efLBJQClbte1EZHyzD728cNpnUvugZwLXUJB9Paxvd31XxwVp9OCoUgJtm0fa73I1e9+6DCOmKJk3BOLREjAEMWnH55hUQsi8GNdFIXUA7Kv39wJH54fzQDRO284t1pVWpxXph3df13vqsKeVsX9vu2GMWestPKzD6YxBOecVUJJIQTTgnEgCUyWWSa5SBET0dOLS7ndvdo0F4tpndlDcMt6BgRZpmLvb7f7nz01Rm3/8G6FICqjLuosEhJyjclKRghMMG00S4iIgCi+eH7GlJpNaptnhTUJOQVX5tl8MkEibWxRl0WuXcA8My5i46OVYje4ZnDLTAvBGheBgVRsd3Db1gkOjIsizzJjGBHXRjPO3dArBvsRc82dc1pKxtjAeDktOGFmVZ2bAeHseHE0qUyeX85qRnC173cuVpkmxro+WiEYYwTMu8gABjfGGCT5FBR2PLJ+yIpq045911d5po0sOVOMlBH7NhzXNhHc94EbM+UEwXNMd4OzCqTkglQYhplRCZErxYXgTAffMQbSt12f6PLiYzK02m2MkALYNNMQY8aBIwEwK1nTO2SggIQRY+Q203kviqiEYDGilIJrpaMnxjmDSck638YQhQAOiDMIYnfnu/FuvSsY5ZnmTOxbt9oPWsrcCj+MPCUew2kuJUAEMEpHhsgQmUoJKUTOBCPQnBiGfTOG/iBYohj5QAQhrHY324frQittdVUXXDKj2NQqI9hufRj7UTHGkIiLSmtLhCmWmXHOIwMlBY/JaDZfVL0LzRhaHwaPY4jtGGQboxZUlIUU/Lvrh3ldHktZl6pGdbdugcF90wcGV1ePg/fLujzKzejiEOIQqVDcu1HUed+PLMKrTxdfrs7afkSPPhERZpkUXz5b9EQnZf7y4vSrqxWkWGU2JQJgzTA6F5bL6X++vf63//6f1w/br3+4VQrO57O73v3H97fN6LXgk9w4Hy8mdrbMfvJ0NomkZZ1Zq4FOMsV9ojrLLOHpLPvF5dn72w0hCqVer/blZHLvEgL8+qcvPnn29Mkk74b++/td54IA6Pr+vtn/5X7rU5rmhgAyq99/d/PVm/19jFufmLY360H86vzY5ryQ1AK8fP7BH795r3J9Opvc7ppvbm6UtXOtS2sWi3kb8MmsfHUyn0p+uagT583ovEvPFpOjPOMMz0/st3++9dJsvXu33nYJreLy4mTKoPMxZT5ux8RyHZrd5jFfH4bTcvLydJkxGAZXc3i1LGfZ7Nhmj83hD29uq9xeTCc7E1xMxuon04x7TyHm0r6QHK3auL7Thkc2emmMzp7lcnh4OHly7FAcS5clfLduNvtxJN7HuNu3S62jw/0Qv7pe/+sfv1kduo9nhaG07rppJc6mWaaExLR6XFejm0hxapUjEn//aiGJoZDnp0utxKDyq95bhIvFZOXifdMRYKE4EK36vu36u3b439uHrhsWk4IH93p7+PKjk786n9097OZHlsf053fbA3BP6QC8CST+5ZefExcrx1gS8zp/tpAHZq+33UVVXJ4ulaIu4KKwjKDOsrO63IfU+TB6/+K4vG3Di+PZP3x+IZEMD1wRaH22KFquxkRdoqVioioyz+Jffwj9PnXZ4otP7O0BVwdcFkJpzYSYKFlnejkpHlvHBGcI8zK/PD0Z3GiN+psXk9McuhFynvKaA3JbmvO5+WBpXh5nr84y+ds/vfu7z5b/vMhERD1Zh1AttOdC5pOceZJMFLl6t2kMZwLxvl3dtWtM/OBViPjhkbEydlHe927OfRpEM6R9F9uQXIyAaXBRLjO1d9ljL/dBlC27en339kbtutBjNVXiqFTbXfuXm+35PM+pP2M//GLeEolIbNPnyqoLjtv16sf71Njq4U1732KuRW645mIMCPlERkqa871/clJ99/XDcQIYg5eMdp2rZ5MfN61M8dOPziohDh3JbrwECIL/qRWXFZ1pNxxuU6qeT8uth6Nc7WKyAkolJeOZsVTUEkAI6NClLSuVfHzfVG3qzqpiOwSIG2SCM+iH0TEVxvbn0nlPCmjq+LeBjwWvJNuQefQKMLQ+WiUkJA2YkHGtPBKPxDPqz+13//doH0eBnJo+vVs3Y4jrtofgAiSKYd/trZn8mGZvqHgvy1cnNpC+xlJVM0FpKQdDjoCFBI4pEDKlGP2AwYtpaeZ5FuXpqGeC6YCJcbY+jJnRLqZvfrzRnDfdcLPerfbdtatu4uJxZP/+yH9/KyaTkmWLx5HfHtL1AEakn+W7Mz1UtC9Yp+I2G++lYNQRvx3gZrud5ubIKM7gcpkTOWPFIZP3TSsBRh9zJTbtuKK0sfy6EwurTox+vQ1j4JzbEb3k8aPCbRyOETFSxhA5yhSJU/jby2rP5lf7bjwMFwLuUNz1o2sOJ7VeD8kIfpZVrQ9rSF0QRGmR8X/87Gml1fXNmjOmpFCSDyE54ol4wvi2oYdMVzJK4OSjCFH1h02duGZs45NMNOVi0GazdyPjbULGUQIeWWUxVDw+P84XpX3/eKi04QIjUm5MDYMAyICuMTZWcAQAI5EIgCQQS8Eww4EGxr7v+sgo5zwlJIyFkpXgixBLxE6kFEeZhEQqhDyqjaR0s2mU5B/PSpm2GfKksejZzT6aqZQIEBPGGDCGGJFzNuNwLmGTMCZaSPYuwBJwlujlT14U1hQ296Epp4Wy5aui3F5dNYcmZgZNVhUt7KmQchTwyOiTfPI+uv8HxIutAeRDZhQAAAAASUVORK5CYII=";var Ft="https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec",Dt="https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec",ht=new URLSearchParams(location.search).has("prufa")?Dt:Ft,bt=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"];function mt(S){return fetch(ht,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(S)}).then(function(b){return b.json()})}function e(S,b,L){var o=document.createElement(S);return b&&(o.className=b),L!=null&&(o.textContent=L),o}function ut(S,b,L){var o=e("a",b,L);return o.href=S,o.target="_blank",o.rel="noopener",o}function kt(S,b){try{b?localStorage.setItem(S,b):localStorage.removeItem(S)}catch{}}function Ct(S){try{return localStorage.getItem(S)||""}catch{return""}}function Ut(S,b){function L(){b.textContent="Afrita\xF0",b.classList.add("vst-afritad"),setTimeout(function(){b.textContent=b.getAttribute("data-merki"),b.classList.remove("vst-afritad")},1500)}function o(){var T=e("textarea");T.value=S,T.setAttribute("readonly",""),T.style.position="fixed",T.style.opacity="0",document.body.appendChild(T),T.select();try{document.execCommand("copy")&&L()}catch{}document.body.removeChild(T)}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(S).then(L,o):o()}function jt(S,b){var L=e("button","vst-afrita",b||"Afrita");return L.type="button",L.setAttribute("data-merki",L.textContent),L.addEventListener("click",function(){Ut(S,L)}),L}function vt(S){try{var b=new URL(S);return/(^|\.)dropbox\.com$/.test(b.hostname)?(b.searchParams.delete("dl"),b.searchParams.set("raw","1"),b.href):S}catch{return S}}function Pt(S){var b=/\.([a-z0-9]+)$/i.exec(String(S||"").split(/[?#]/)[0]),L=b?b[1].toLowerCase():"";return{e:L,t:/^(jpe?g|png|gif|webp)$/.test(L)?"mynd":/^(mp4|mov|m4v)$/.test(L)?"myndband":""}}function Ht(){Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'),function(b){b.parentNode.removeChild(b)});var S=document.createElement("link");S.rel="icon",S.type="image/png",S.href=Tt,document.head.appendChild(S)}var Bt=`<div class="vst">
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
</div>`;function Mt(S){S.innerHTML=Bt;var b="vogor-band-key",L="vogor-band-nafn",o={Loki\u00F0:"done","\xCD vinnslu":"work",B\u00ED\u00F0ur:"hold"},T=["\xD3byrja\xF0","\xCD vinnslu","B\xED\xF0ur","Loki\xF0"],X={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"};function x(a){return S.querySelector('[data-st="'+a+'"]')}function B(a){Array.prototype.forEach.call(S.querySelectorAll("[data-st-state]"),function(i){i.hidden=i.getAttribute("data-st-state")!==a})}var K=new URLSearchParams(location.search).get("b")||"";if(!K)try{K=localStorage.getItem(b)||""}catch{}function I(a){var i=/^(\d{4})-(\d\d)-(\d\d)$/.exec(a||"");return i?new Date(Number(i[1]),Number(i[2])-1,Number(i[3])):null}function N(a){var i=I(a);return i?i.getDate()+". "+bt[i.getMonth()]:a||""}var Z=new Date;Z.setHours(0,0,0,0);function W(a){var i=I(a);return i?Math.round((i-Z)/864e5):null}function $(a,i,l){var p=W(i);p!=null&&(x("dagar-"+a).textContent=p>0?p:"0",x("texti-"+a).textContent=p>1?"dagar \xED "+l:p===1?"dagur \xED "+l:p===0?l+" \xED dag":l+" komi\xF0")}function F(a){var i=a.stada==="Loki\xF0",l=W(a.frestur),p=!i&&l!=null&&l<0,d=e("li",i?"vst-lokid":p?"vst-seint":""),k=e("span","vst-led"+(p?" vst-led--late":o[a.stada]?" vst-led--"+o[a.stada]:""));k.title=p?a.stada+", komi\xF0 fram yfir frest":a.stada,d.appendChild(k);var v=e("span","vst-verk",a.verk);a.notur&&!i&&v.appendChild(e("small","",a.notur)),d.appendChild(v);var j=e("span","vst-val");return j.appendChild(z(a,"stada",T,"Sta\xF0a verksins: ")),j.appendChild(z(a,"hver",[""].concat(A.band||[]),"Hver \xE1 verki\xF0: ")),d.appendChild(j),d.appendChild(e("span","vst-frestur",N(a.frestur))),d}function z(a,i,l,p){var d=e("select");return d.setAttribute("aria-label",p+a.verk),l.indexOf(a[i])===-1&&(l=l.concat([a[i]])),l.forEach(function(k){var v=e("option","",k||"Enginn");v.value=k,d.appendChild(v)}),d.value=a[i],d.addEventListener("change",function(){w(a,i,d)}),d}function w(a,i,l){var p={action:"bandBreyta",b:K,rod:a.rod,verk:a.verk};p[i]=l.value,l.disabled=!0,x("skilabod").textContent="",mt(p).then(function(d){if(!d.ok)throw new Error(d.villa||"Hlekkurinn gildir ekki lengur.");a.hver=d.hver,a.stada=d.stada}).catch(function(d){x("skilabod").textContent="T\xF3kst ekki a\xF0 vista: "+(d.message==="Failed to fetch"?"ekkert samband.":d.message)}).then(function(){tt(A)})}var A={};function tt(a){A=a,$("preorder",a.preorder,"pre-order"),$("utgafa",a.utgafa,"\xFAtg\xE1fu");var i=a.verkefni.length,l=a.verkefni.filter(function(f){return f.stada==="Loki\xF0"}).length;x("hlutfall").textContent=l+" / "+i;var p=x("maelir");p.textContent="",p.setAttribute("aria-label",l+" af "+i+" verkum loki\xF0");for(var d=0;d<i;d++)p.appendChild(e("span",d<l?"on":""));var k=x("naest");k.textContent="",a.verkefni.filter(function(f){return f.stada!=="Loki\xF0"&&I(f.frestur)}).sort(function(f,h){return I(f.frestur)-I(h.frestur)}).slice(0,7).forEach(function(f){k.appendChild(F(f))}),k.children.length||k.appendChild(e("li","","Ekkert \xE1 dagskr\xE1 me\xF0 fresti."));var v=x("hopar"),j={};Array.prototype.forEach.call(v.children,function(f){j[f.getAttribute("data-flokkur")]=f.open}),v.textContent="";var t=[],n={};a.verkefni.forEach(function(f){var h=f.flokkur||"Anna\xF0";n[h]||(n[h]=[],t.push(h)),n[h].push(f)}),t.forEach(function(f){var h=n[f],H=h.filter(function(c){return c.stada==="Loki\xF0"}).length,R=e("details","vst-group");R.setAttribute("data-flokkur",f),R.open=f in j?j[f]:H<h.length;var lt=e("summary");lt.appendChild(e("span","",f)),lt.appendChild(e("span","",H+"/"+h.length)),R.appendChild(lt);var it=e("ul");h.forEach(function(c){it.appendChild(F(c))}),R.appendChild(it),v.appendChild(R)});var r=x("pressa");r.textContent="";var s=null,y=a.pressa.some(function(f){return f.flokkur});if(a.pressa.forEach(function(f){if(y&&(f.flokkur||"")!==s){s=f.flokkur||"";var h=e("tr","vst-flokkur"),H=e("th","",s||"\xD3flokka\xF0");H.colSpan=7,h.appendChild(H),r.appendChild(h)}var R=e("tr",X[f.stada||"Sent"]?"vst-st-"+X[f.stada||"Sent"]:"");R.appendChild(e("td","",f.midill)),R.appendChild(e("td","",f.stada||"Sent")),R.appendChild(e("td","",f.hver||"\u2013")),R.appendChild(e("td","",N(f.sent)||"\u2013")),R.appendChild(e("td","",f.opnad?N(f.opnad)+(f.opnanir>1?" ("+f.opnanir+"\xD7)":""):"\u2013")),R.appendChild(e("td","",N(f.hlusta)||"\u2013")),R.appendChild(e("td","",N(f.saekja)||"\u2013")),r.appendChild(R)}),!a.pressa.length){var m=e("td","","Enginn \xE1 markh\xF3pslistanum enn\xFE\xE1.");m.colSpan=7,r.appendChild(e("tr")).appendChild(m)}rt(a.band||[]),ot(a.meta),_(a.efni||[]),a.stream?x("stream").href=a.stream:x("stream").hidden=!0,x("uppfaert").textContent=a.uppfaert}var st=/\.(jpe?g|png|gif|webp)$/i,ft=/\.(mp4|mov|m4v|webm)$/i,g="Samf\xE9lagsmi\xF0lar",u=["Dr\xF6g","Sam\xFEykkt","P\xF3sta\xF0","Sleppa"],P={P\u00F3sta\u00F0:"postad",Sleppa:"sleppa"};function E(a){try{var i=new URL(a);return{nafn:decodeURIComponent(i.pathname.split("/").pop()||""),dropbox:/(^|\.)dropbox\.com$/.test(i.hostname),u:i}}catch{return{nafn:"",dropbox:!1,u:null}}}function U(a){var i=E(a.slod),l=e("div","vst-slod");if(st.test(i.nafn)){var p=e("img","vst-mynd");p.src=vt(a.slod),p.alt=a.heiti||"",p.loading="lazy";var d=ut(a.slod);d.appendChild(p),l.appendChild(d),l.appendChild(ut(a.slod,"vst-afrita","Opna \xED fullri st\xE6r\xF0"))}else if(i.dropbox){var k=/\/fo\//.test(i.u.pathname)?"Mappa \xED Dropbox":(ft.test(i.nafn)?"Myndband: ":"Dropbox: ")+i.nafn;l.appendChild(ut(a.slod,"",k))}else l.appendChild(ut(a.slod,"",a.slod.replace(/^https?:\/\/(www\.)?/,"")));return l.appendChild(jt(a.slod,"Afrita hlekk")),l}function C(a,i){var l=e("button","vst-afrita"+(i?" "+i:""),a);return l.type="button",l}function D(a){return a.b=K,mt(a).catch(function(i){return{ok:!1,villa:i.message==="Failed to fetch"?"Ekkert samband.":i.message}})}function Q(){return x("eg").value}function Y(a,i){for(var l=A.efni||[],p=0;p<l.length;p++)l[p].id===a.id&&(l[p]=a);var d=q(a);return i.parentNode.replaceChild(d,i),d}function q(a){var i=a.flokkur===g,l=!/^md-/.test(a.id),p=e("article","vst-but"+(i&&P[a.stada]?" vst-but-"+P[a.stada]:"")),d=e("div","vst-but-haus");d.appendChild(e("span","vst-but-heiti",a.heiti||"\xC1n heitis"));var k=e("span","vst-but-hlid");if(a.birta){var v=W(a.birta),j=a.stada==="P\xF3sta\xF0"||a.stada==="Sleppa",t=i&&!j&&v!=null&&v<0;k.appendChild(e("span","vst-but-birta"+(v===0?" vst-idag":"")+(t?" vst-but-seint":""),v===0?"\xCD dag":N(a.birta)+(t?", ekki p\xF3sta\xF0":""))),v!=null&&v<0&&(!i||j)&&p.classList.add("vst-but-lidid")}if(i&&l&&a.birta){var n=e("select");n.setAttribute("aria-label","Sta\xF0a f\xE6rslunnar "+(a.heiti||"")),u.forEach(function(h){var H=e("option","",h);H.value=h,n.appendChild(H)}),n.value=a.stada||u[0],n.addEventListener("change",function(){if(!Q()){n.value=a.stada,V(p,"Veldu hver \xFE\xFA ert efst \xED Efni.");return}n.disabled=!0,D({action:"bandEfniVista",id:a.id,hver:Q(),reitir:{stada:n.value}}).then(function(h){h.ok?Y(h.but,p):(n.disabled=!1,n.value=a.stada,V(p,h.villa))})}),k.appendChild(n)}if(l){var r=C("Breyta","vst-but-takki");r.addEventListener("click",function(){nt(a,p)}),k.appendChild(r)}d.appendChild(k),p.appendChild(d);var s=A.meta?A.meta.faerslur.filter(function(h){return h.efni===a.id}):[];if(s.length){var y=e("p","vst-but-meta");s.forEach(function(h){y.appendChild(ut(h.hlekkur,"",h.midill+": "+(h.na!=null?"n\xE1 "+h.na+", ":"")+h.vidbrogd+" vi\xF0br\xF6g\xF0"))}),p.appendChild(y)}a.slod&&p.appendChild(U(a));var m=[["is","\xCDslenska"],["en","English"]].filter(function(h){return a[h[0]]});if(m.length){var f=e("div","vst-maltextar");m.forEach(function(h){var H=e("div","vst-maltexti");m.length>1&&H.appendChild(e("span","vst-mal",h[1])),H.appendChild(e("pre","vst-texti",a[h[0]])),H.appendChild(jt(a[h[0]])),f.appendChild(H)}),p.appendChild(f)}return a.notur&&p.appendChild(e("p","vst-but-notur",a.notur)),a.breyttAf&&a.breytt&&p.appendChild(e("p","vst-but-breytt","S\xED\xF0ast breytt af "+a.breyttAf+", "+N(a.breytt.slice(0,10))+" kl. "+a.breytt.slice(11,16))),p}function V(a,i){var l=a.querySelector(".vst-msg")||a.appendChild(e("p","vst-small vst-msg"));l.textContent=i||""}function nt(a,i){var l=a.flokkur===g,p=a,d=e("form","vst-but vst-form vst-but-form");d.appendChild(e("span","vst-but-heiti","Breyta: "+(a.heiti||"\xC1n heitis")));function k(m,f,h,H,R,lt){var it=e("label","",m),c=e(h,R||"");return h==="input"&&(c.type=f==="birta"?"date":"text"),c.name=f,c.value=H||"",it.appendChild(c),lt&&it.appendChild(e("small","",lt)),it}d.appendChild(k("Heiti","heiti","input",a.heiti));var v=e("div","vst-form-rod");if(v.appendChild(k("Birta","birta","input",a.birta)),l){var j=e("label","","Sta\xF0a"),t=e("select");t.name="stada",u.forEach(function(m){var f=e("option","",m);f.value=m,t.appendChild(f)}),t.value=a.stada||u[0],j.appendChild(t),v.appendChild(j)}d.appendChild(v),d.appendChild(k("\xCDslenska","is","textarea",a.is)),d.appendChild(k("English","en","textarea",a.en)),d.appendChild(k("Mynd e\xF0a myndband","slod","input",a.slod,"","Dropbox-hlekkur \xE1 skr\xE1na e\xF0a m\xF6ppuna, e\xF0a sl\xF3\xF0 \xE1 mynd.")),d.appendChild(k("N\xF3tur","notur","textarea",a.notur,"vst-stutt","Hva\xF0a mynd fylgir, hvar \xE1 a\xF0 p\xF3sta, o.s.frv."));var n=e("div","vst-form-takkar"),r=C("Vista");r.type="submit";var s=C("H\xE6tta vi\xF0","vst-but-takki");n.appendChild(r),n.appendChild(s),d.appendChild(n);var y=d.appendChild(e("p","vst-small vst-msg"));s.addEventListener("click",function(){Y(p,d)}),d.addEventListener("submit",function(m){if(m.preventDefault(),y.textContent="",!Q()){y.textContent="Veldu hver \xFE\xFA ert efst \xED Efni.";return}var f={};["heiti","birta","stada","is","en","slod","notur"].forEach(function(h){d.elements[h]&&(f[h]=d.elements[h].value)}),r.disabled=!0,r.textContent="Vista...",D({action:"bandEfniVista",id:a.id,hver:Q(),breytt:p.breytt,reitir:f}).then(function(h){if(r.disabled=!1,r.textContent="Vista",h.ok){Y(h.but,d);return}h.arekstur&&h.but&&(p=h.but),y.textContent=h.villa||"T\xF3kst ekki a\xF0 vista."})}),i.parentNode.replaceChild(d,i),d.elements.heiti.focus()}function at(a,i){return(a.birta?1:0)-(i.birta?1:0)||(a.birta<i.birta?-1:a.birta>i.birta?1:0)}var pt="vogor-efni-opid";function _(a){var i=x("efni");if(x("efni-kafli").hidden=!a.length,!!a.length&&!i.querySelector(".vst-but-form")){var l={};try{l=JSON.parse(localStorage.getItem(pt)||"{}")||{}}catch{}i.textContent="";var p=[],d={};a.forEach(function(k){var v=k.flokkur||"Anna\xF0";d[v]||(d[v]=[],p.push(v)),d[v].push(k)}),p.forEach(function(k){var v=e("details","vst-group");v.open=!!l[k];var j=e("summary");j.appendChild(e("span","",k));var t=String(d[k].length);if(k===g){var n=d[k].filter(function(m){return m.birta&&m.stada!=="Sleppa"}),r=n.filter(function(m){return m.stada==="P\xF3sta\xF0"}).length;t=r+"/"+n.length+" p\xF3sta\xF0ar",d[k].sort(at)}j.appendChild(e("span","",t)),v.appendChild(j);var s=e("div","vst-efni");if(d[k].forEach(function(m){s.appendChild(q(m))}),k===g){var y=C("N\xFD f\xE6rsla","vst-but-takki");y.addEventListener("click",function(){if(!Q()){y.textContent="Veldu fyrst hver \xFE\xFA ert";return}y.disabled=!0,D({action:"bandEfniNytt",hver:Q(),flokkur:g}).then(function(m){if(y.disabled=!1,!m.ok){y.textContent=m.villa||"T\xF3kst ekki";return}A.efni.push(m.but);var f=q(m.but);s.insertBefore(f,y),nt(m.but,f)})}),s.appendChild(y)}v.appendChild(s),v.addEventListener("toggle",function(){l[k]=v.open;try{localStorage.setItem(pt,JSON.stringify(l))}catch{}}),i.appendChild(v)})}}function ot(a){if(x("meta-kafli").hidden=!a,!!a){var i=a.fylgjendur||{},l=x("fylgjendur");l.textContent="",[["fb","Facebook"],["ig","Instagram"]].forEach(function(v){if(i[v[0]]!=null){var j=e("div","vst-count");j.appendChild(e("span","vst-counter",String(i[v[0]])));var t=i[v[0]+"Breyting"];j.appendChild(e("span","","fylgjendur \xE1 "+v[1]+(t!=null?" ("+(t>=0?"+":"")+t+" fr\xE1 "+N(i.fra)+")":""))),l.appendChild(j)}});var p={};(A.efni||[]).forEach(function(v){p[v.id]=v.heiti});var d=x("meta");if(d.textContent="",a.faerslur.forEach(function(v){var j=e("tr");j.appendChild(e("td","",N(v.birt.slice(0,10))+" "+v.birt.slice(11,16))),j.appendChild(e("td","",v.midill)),j.appendChild(e("td","",v.tegund));var t=e("td","vst-meta-texti"),n=p[v.efni]?p[v.efni]:v.texti||v.tegund;t.appendChild(v.hlekkur?ut(v.hlekkur,"",n):e("span","",n)),t.title=v.texti,j.appendChild(t),[v.na,v.ahorf,v.vidbrogd].forEach(function(r){j.appendChild(e("td","vst-tala",r==null?"\u2013":String(r)))}),d.appendChild(j)}),!a.faerslur.length){var k=e("td","","Engar f\xE6rslur fundust fr\xE1 1. okt\xF3ber.");k.colSpan=7,d.appendChild(e("tr")).appendChild(k)}x("meta-sott").textContent=a.sott||"aldrei"}}function rt(a){var i=x("eg"),l=i.value;if(!l)try{l=localStorage.getItem(L)||""}catch{}i.textContent="",[""].concat(a.filter(function(p){return p!=="Allir"})).forEach(function(p){var d=e("option","",p||"Veldu nafn");d.value=p,i.appendChild(d)}),i.value=a.indexOf(l)!==-1?l:""}x("eg").addEventListener("change",function(){try{localStorage.setItem(L,this.value)}catch{}});function J(){return mt({action:"bandStada",b:K}).then(function(a){if(a.rangurLykill){B("invalid");return}if(!a.ok){x("villa").textContent=a.villa||"\xD3\xFEekkt villa.",B("error");return}try{localStorage.setItem(b,K)}catch{}tt(a),B("ok")}).catch(function(){B("error")})}if(x("uppfaera").addEventListener("click",function(){var a=this;a.disabled=!0,J().then(function(){a.disabled=!1})}),!K){B("invalid");return}B("loading"),J()}var Vt=`<div class="vbt">
  <div class="vbt-head">
    <div class="vst-dymo vst-dymo--red">|NAFIR|BIRTA|</div>
    <div class="vst-count"><span class="vst-counter" data-bt="naesta">--</span><span data-bt="naesta-texti">ekkert \xED bi\xF0r\xF6\xF0</span></div>
  </div>

  <form class="vbt-gate" data-bt="gate" hidden>
    <p>Leynior\xF0 stj\xF3rns\xED\xF0unnar:</p>
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
</div>`;function It(S){S.innerHTML=Vt;var b="vogor-promo-key",L="vogor-birta-mal",o={Birt:"ok","Prufa \xED lagi":"ok",T\u00EDmasett:"bid",Prufa:"prufa","B\xED\xF0ur Instagram":"bid",Sendi:"bid",Villa:"villa",\u00D3v\u00EDst:"villa",\u00DAtrunni\u00F0:"villa"},T=["T\xEDmasett","Prufa","B\xED\xF0ur Instagram"],X=["Facebook","Instagram","Instagram Story","Facebook Story"];function x(g){return S.querySelector('[data-bt="'+g+'"]')}var B=Ct(b);function K(g,u){var P=Object.assign({action:g,key:B},u||{});return mt(P).then(function(E){return E.rangtLeyniord&&(B="",kt(b,""),I("gate")),E}).catch(function(E){return{ok:!1,villa:E.message==="Failed to fetch"?"Ekkert samband.":E.message}})}function I(g){x("gate").hidden=g!=="gate",x("hledur").hidden=g!=="hledur",x("app").hidden=g!=="app"}function N(g){return g?new Date(g.replace(" ","T")+":00Z"):null}function Z(g){var u=N(g);return u?u.getUTCDate()+". "+bt[u.getUTCMonth()]+" "+g.slice(11,16):""}function W(g){var u=Math.round((N(g)-Date.now())/6e4);if(u<=0)return"n\xFAna";if(u<60)return u+" m\xEDn";if(u<2880)return Math.floor(u/60)+" klst "+u%60+" m\xEDn";var P=Math.round(u/1440);return P+(P===1?" dag":" daga")}function $(g){var u=Math.round((N(g)-Date.now())/6e4);return u<60?Math.max(u,0)+" m\xEDn":u<2880?Math.round(u/60)+" klst":Math.round(u/1440)+" dagar"}var F={},z={};function w(g){return K("birtingar").then(function(u){if(!u.ok){u.rangtLeyniord||(I("gate"),x("gate-villa").textContent=u.villa||"N\xE1\xF0i ekki \xED g\xF6gnin.");return}F=u,g===!0?tt():A(),I("app")})}function A(){tt();var g=x("faerslur");g.textContent="",F.faerslur.slice().sort(function(u,P){return u.birta.localeCompare(P.birta)}).forEach(function(u){g.appendChild(ft(u))})}function tt(){var g={};F.faerslur.forEach(function(C){g[C.id]=C.heiti});var u=F.birtingar.filter(function(C){return T.indexOf(C.stada)!==-1}).sort(function(C,D){return C.timi.localeCompare(D.timi)}),P=F.birtingar.filter(function(C){return T.indexOf(C.stada)===-1&&C.stada!=="H\xE6tt vi\xF0"}).sort(function(C,D){return D.timi.localeCompare(C.timi)}).slice(0,15),E=x("rod");E.textContent="",u.concat(P).forEach(function(C){var D=e("li",T.indexOf(C.stada)===-1?"vbt-buid":"");D.appendChild(e("span","vst-led vst-led--"+(o[C.stada]||""))),D.appendChild(e("span","vbt-timi",Z(C.timi))),D.appendChild(e("span","",C.midill));var Q=e("span","vbt-heiti",(C.prufa?"Prufa: ":"")+(g[C.efni]||C.efni)),Y=e("small");if(C.stada==="Birt"&&C.nidurstada){var q=e("a","","Birt, opna f\xE6rsluna");q.href=C.nidurstada,q.target="_blank",q.rel="noopener",Y.appendChild(q)}else Y.textContent=C.stada==="T\xEDmasett"?"Fer \xFAt eftir "+W(C.timi):C.stada+(C.nidurstada?": "+C.nidurstada:"");Q.appendChild(Y),D.appendChild(Q),T.indexOf(C.stada)!==-1?D.appendChild(st(C)):D.appendChild(e("span")),E.appendChild(D)}),E.children.length||E.appendChild(e("li","","Ekkert \xED bi\xF0r\xF6\xF0 enn\xFE\xE1."));var U=u.filter(function(C){return!C.prufa})[0];x("naesta").textContent=U?$(U.timi):"--",x("naesta-texti").textContent=U?"\xED n\xE6stu birtingu":"ekkert \xED bi\xF0r\xF6\xF0",x("sott").textContent=F.nu}function st(g){var u=e("button","vbt-btn vbt-btn--ljos","H\xE6tta vi\xF0");return u.type="button",u.addEventListener("click",function(){u.disabled=!0,K("birtingHaetta",{id:g.id}).then(function(P){P.ok?(F.birtingar=P.birtingar,tt()):(u.disabled=!1,alert(P.villa))})}),u}function ft(g){var u=z[g.id]||(z[g.id]={}),P=g.stada==="P\xF3sta\xF0",E=e("article","vbt-kort"+(P?" vbt-kort--postad":"")),U=e("div","vbt-kort-haus");U.appendChild(e("b","",g.heiti));var C=N(g.birta+" 00:00");U.appendChild(e("span","vbt-merki",C.getUTCDate()+". "+bt[C.getUTCMonth()]+" \xB7 "+g.stada)),E.appendChild(U);var D=e("div","vbt-forsk"),Q=e("div","vbt-skipta"),Y="Instagram";["Instagram","Facebook","Story"].forEach(function(c){var M=e("button","",c);M.type="button",M.addEventListener("click",function(){Y=c,R()}),Q.appendChild(M)}),D.appendChild(Q);var q=e("div");D.appendChild(q),E.appendChild(D);var V=e("form","vbt-stjorn"),nt=e("div","vbt-midlar"),at={};X.forEach(function(c){var M=e("label"),O=e("input");O.type="checkbox",O.checked=u[c]!==void 0?u[c]:!/ Story$/.test(c),at[c]=O,M.appendChild(O),M.appendChild(document.createTextNode(c)),nt.appendChild(M),O.addEventListener("change",function(){u[c]=O.checked,R()})}),V.appendChild(nt);var pt=e("label","","Texti"),_=e("select");[["en","English"],["is","\xCDslenska"],["baedi","\xCDslenska og enska"]].forEach(function(c){var M=e("option","",c[1]);M.value=c[0],_.appendChild(M)}),_.value=u.mal||Ct(L)||"en",pt.appendChild(_),V.appendChild(pt);var ot=e("label","","Textinn sem fer \xFAt "),rt=e("span","vbt-teljari");ot.appendChild(rt);var J=e("textarea");ot.appendChild(J),V.appendChild(ot);function a(){J.value=_.value==="is"?g.is:_.value==="en"?g.en:[g.is,g.en].filter(Boolean).join(`

`),u.texti=J.value,R()}_.addEventListener("change",function(){u.mal=_.value,kt(L,_.value),a()}),J.addEventListener("input",function(){u.texti=J.value,R()});var i=e("label","","Mynd e\xF0a myndband"),l=e("input");l.value=u.mynd!=null?u.mynd:g.slod||"",l.placeholder="Dropbox-hlekkur \xE1 .jpg e\xF0a .mp4",i.appendChild(l),V.appendChild(i),l.addEventListener("input",function(){u.mynd=l.value}),l.addEventListener("change",R);var p=e("div","vbt-tvo"),d=e("label","","Dagur"),k=e("input");k.type="date",k.value=u.dagur||g.birta,k.addEventListener("change",function(){u.dagur=k.value,R()}),d.appendChild(k);var v=e("label","","Klukkan"),j=e("input");j.type="time",j.value=u.klukka||"12:00",j.addEventListener("change",function(){u.klukka=j.value,R()}),v.appendChild(j),p.appendChild(d),p.appendChild(v),V.appendChild(p);var t=e("p","vbt-adv");V.appendChild(t);var n=e("div","vbt-takkar"),r=e("button","vbt-btn","T\xEDmasetja");r.type="submit";var s=e("button","vbt-btn vbt-btn--ljos","Prufa");s.type="button",n.appendChild(r),n.appendChild(s),V.appendChild(n);var y=e("p","vbt-msg"+(u.skilabod?" vbt-msg--ok":""),u.skilabod||"");u.skilabod="",V.appendChild(y);var m=F.birtingar.filter(function(c){return c.efni===g.id&&c.stada!=="H\xE6tt vi\xF0"});if(m.length){var f=e("ul","vbt-fyrri");m.forEach(function(c){var M=e("li");M.appendChild(e("span","vst-led vst-led--"+(o[c.stada]||""))),M.appendChild(document.createTextNode((c.prufa?"Prufa \xE1 ":"")+c.midill+": "+c.stada+(c.stada==="T\xEDmasett"?" "+Z(c.timi):""))),f.appendChild(M)}),V.appendChild(f)}var h=F.meta?F.meta.faerslur.filter(function(c){return c.efni===g.id}):[];h.forEach(function(c){V.appendChild(e("p","vbt-teljari",c.midill+": "+(c.na!=null?"n\xE1 "+c.na+", ":"")+(c.ahorf!=null?"\xE1horf "+c.ahorf+", ":"")+c.vidbrogd+" vi\xF0br\xF6g\xF0"))}),E.appendChild(V);function H(){return X.filter(function(c){return at[c].checked})}function R(){Array.prototype.forEach.call(Q.children,function(Lt){Lt.setAttribute("aria-pressed",String(Lt.textContent===Y))});var c=Pt(l.value),M=at.Instagram.checked;rt.textContent=J.value.length+(M?" / 2200":"")+" stafir"+(M?", "+(J.value.match(/#[^\s#]+/g)||[]).length+" / 30 myllumerki":""),rt.classList.toggle("vbt-of",M&&J.value.length>2200);var O=[];H().length||O.push("Veldu a\xF0 minnsta kosti einn mi\xF0il."),M&&!l.value&&O.push("Instagram \xFEarf mynd e\xF0a myndband."),l.value&&!c.t&&O.push("Sl\xF3\xF0in \xFEarf a\xF0 enda \xE1 .jpg, .png e\xF0a .mp4 (Dropbox-hlekkur \xE1 skr\xE1na sj\xE1lfa, ekki m\xF6ppu)."),M&&c.t==="mynd"&&!/^jpe?g$/.test(c.e)&&O.push("Instagram tekur bara JPG-myndir."),M&&/instagram\.com|ffm\.to|https?:\/\//.test(J.value)&&O.push("Hlekkir virka ekki \xED texta \xE1 Instagram; skrifa\xF0u \u201Ehlekkur \xED bio\u201C.");var dt=at["Instagram Story"].checked||at["Facebook Story"].checked;if(dt&&!l.value&&O.push("Story \xFEarf mynd e\xF0a myndband."),at["Instagram Story"].checked&&c.t==="mynd"&&!/^jpe?g$/.test(c.e)&&O.push("Instagram Story tekur bara JPG-myndir."),dt&&O.push("Textinn fer ekki me\xF0 \xED Story; hann \xFEarf a\xF0 vera \xED myndinni sj\xE1lfri (9:16)."),t.textContent=O.join(" "),q.textContent="",Y==="Story"){q.appendChild(lt(c));return}var G=Y==="Facebook",et=e("div","vbt-sima"+(G?" vbt-sima--fb":"")),xt=e("div","vbt-sima-haus");xt.appendChild(e("i"));var St=e("span","",G?"Stafr\xE6nn H\xE1kon":"stafraennhakon");G&&St.appendChild(e("small","",Z(k.value+" "+(j.value||"12:00")))),xt.appendChild(St),et.appendChild(xt);var ct=e("div","vbt-sima-texti"),Et=G?J.value:J.value.split(`
`)[0].slice(0,125);G||ct.appendChild(e("b","","stafraennhakon")),ct.appendChild(document.createTextNode(Et)),!G&&J.value.length>Et.length&&ct.appendChild(e("span","vbt-meira","\u2026 meira")),G&&et.appendChild(ct);var yt=e("div","vbt-sima-mynd");if(c.t==="mynd"){var wt=e("img");wt.src=vt(l.value),wt.alt="",yt.appendChild(wt)}else if(c.t==="myndband"){var gt=e("video");gt.src=vt(l.value),gt.muted=!0,gt.controls=!0,gt.preload="metadata",yt.appendChild(gt)}else yt.textContent=l.value?"Sl\xF3\xF0 sem er hvorki mynd n\xE9 myndband":"Engin mynd";(l.value||!G)&&et.appendChild(yt),G||(et.appendChild(e("div","vbt-sima-takkar","\u2661 \u25EF \u27A4")),et.appendChild(ct)),q.appendChild(et)}function lt(c){var M=e("div","vbt-sima vbt-sima--story"),O=e("div","vbt-sima-mynd");if(c.t==="mynd"){var dt=e("img");dt.src=vt(l.value),dt.alt="",O.appendChild(dt)}else if(c.t==="myndband"){var G=e("video");G.src=vt(l.value),G.muted=!0,G.controls=!0,G.preload="metadata",O.appendChild(G)}else O.textContent="Engin mynd";M.appendChild(O);var et=e("div","vbt-sima-haus");return et.appendChild(e("i")),et.appendChild(e("span","","stafraennhakon")),M.appendChild(et),M}function it(c){y.textContent="",y.classList.remove("vbt-msg--ok");var M=c?s:r,O=H(),dt=O.join(" og ");!c&&!confirm("T\xEDmasetja \u201E"+g.heiti+"\u201C \xE1 "+dt+" "+Z(k.value+" "+j.value)+`?

F\xE6rslan fer \xFAt sj\xE1lfkrafa. \xDEa\xF0 m\xE1 h\xE6tta vi\xF0 \xED bi\xF0r\xF6\xF0inni \xFEanga\xF0 til.`)||(M.disabled=!0,K("birtingVista",{efni:g.id,midlar:O,timi:k.value+" "+j.value,texti:J.value,mynd:l.value.trim(),prufa:c}).then(function(G){if(M.disabled=!1,!G.ok){y.textContent=G.villa||"T\xF3kst ekki.";return}F.birtingar=G.birtingar,u.skilabod=c?"Prufan er komin \xED bi\xF0r\xF6\xF0ina efst. Ni\xF0ursta\xF0an s\xE9st \xFEar innan 5 m\xEDn\xFAtna; ekkert er birt.":"T\xEDmasett. F\xE6rslan s\xE9st \xED bi\xF0r\xF6\xF0inni efst og m\xE1 h\xE6tta vi\xF0 \xFEar.",A()}))}return V.addEventListener("submit",function(c){c.preventDefault(),it(!1)}),s.addEventListener("click",function(){it(!0)}),u.texti!=null?(J.value=u.texti,R()):a(),E}x("gate").addEventListener("submit",function(g){g.preventDefault(),B=x("lykill").value.trim(),kt(b,B),x("gate-villa").textContent="",I("hledur"),w()}),x("uppfaera").addEventListener("click",function(){w()}),x("utskra").addEventListener("click",function(){B="",kt(b,""),I("gate")}),setInterval(function(){B&&!x("app").hidden&&w(!0)},6e4),B?(I("hledur"),w()):I("gate")}var Kt=`<div class="vp" id="vp-admin">
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
</div>`;function zt(S){S.innerHTML=Kt;var b="vogor-promo-key",L={en:{pressa:`Your personal promo page (stream, download, press kit):
{pressa}

Direct links:
`,beint:`Listen (private stream): {stream}
Download: {download} (MP3, FLAC or WAV)`},is:{pressa:`\xDE\xEDn pers\xF3nulega promo-s\xED\xF0a (streymi, ni\xF0urhal, pressuefni):
{pressa}

Beinir hlekkir:
`,beint:`Hlusta (loka\xF0 streymi): {stream}
S\xE6kja: {download} (MP3, FLAC e\xF0a WAV)`}};function o(t){return document.getElementById(t)}var T={},X=null;function x(){try{return localStorage.getItem(b)||""}catch{return""}}function B(t){try{t?localStorage.setItem(b,t):localStorage.removeItem(b)}catch{}}var K=x();function I(t,n){var r=Object.assign({action:t,key:K},n||{});return fetch(ht,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(r)}).then(function(s){return s.json()}).then(function(s){if(s.rangtLeyniord&&(K="",B(""),N(!1)),!s.ok)throw new Error(s.villa||"\xD3\xFEekkt villa");return s})}function N(t){o("vp-gate").hidden=t,o("vp-app").hidden=!t}function Z(t){return{pressa:T.press_page?T.press_page+"?k="+t:"",stream:T.private_stream||"",download:T.redeem?T.redeem+"?code="+t:""}}function W(t,n){return t.replace(/\{(\w+)\}/g,function(r,s){return n[s]})}function $(t,n){X=t;var r=Z(t.kodi),s=L[o("vp-mal").value];o("vp-titill").textContent=t.vidtakandi+": "+t.kodi+(n?" ("+n+")":""),o("vp-blokk").value=(r.pressa?W(s.pressa,r):"")+W(s.beint,r),o("vp-afrita-hlekk").hidden=!r.pressa,o("vp-forskodun").hidden=!r.pressa,r.pressa&&(o("vp-forskodun").href=r.pressa+"&preview=1"),o("vp-nidurstada").hidden=!1}function F(t,n){navigator.clipboard.writeText(t).then(function(){var r=n.textContent;n.textContent="Afrita\xF0",setTimeout(function(){n.textContent=r},1500)})}function z(t,n){var r=document.createElement("td");r.textContent=n||"-",t.appendChild(r)}function w(t){T=t.stillingar||{},o("vp-samtals").textContent=t.linur.length+" \xFAthluta\xF0, "+t.lausir+" lausir af "+t.alls;var n=o("vp-tafla").tBodies[0];n.textContent="",t.linur.forEach(function(r){var s=document.createElement("tr");z(s,r.vidtakandi),z(s,r.kodi),z(s,r.uthlutad),z(s,r.opnadSidast),z(s,r.opnanir?String(r.opnanir):""),z(s,r.hlusta),z(s,r.saekja),s.addEventListener("click",function(){$(r)}),n.appendChild(s)})}function A(){return I("stada").then(w).catch(function(t){o("vp-samtals").textContent="Villa: "+t.message})}var tt=["midill","tengilidur","netfang","flokkur","leid","fra","hver","mal","stada","efni","meginmal","notur"],st={leid:"P\xF3stur",mal:"en",stada:"Dr\xF6g"},ft={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"},g=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,u=/\[(BLOKK|PRESSUHLEKKUR)\]/,P=null;function E(t){return o("vp-p-"+t)}function U(t){o("vp-p-status").textContent=t||""}function C(t){return t?t.slice(0,10):""}function D(t,n){t.options.length||n.forEach(function(r){var s=document.createElement("option");s.value=r,s.textContent=r||"\u2013",t.appendChild(s)})}function Q(t,n){var r=Array.prototype.some.call(t.options,function(y){return y.value===n});if(!r){var s=document.createElement("option");s.value=n,s.textContent=n,t.appendChild(s)}t.value=n}function Y(t){T=t.stillingar||T,D(E("stada"),t.stodur),D(E("hver"),[""].concat(t.band)),D(E("flokkur"),[""].concat(t.flokkar||[]));var n={};t.postar.forEach(function(m){n[m.stada]=(n[m.stada]||0)+1});var r=t.stodur.filter(function(m){return n[m]}).map(function(m){return n[m]+" "+m.toLowerCase()});o("vp-postar-samtals").textContent=t.postar.length?t.postar.length+" vi\xF0takendur: "+r.join(", "):"Enginn vi\xF0takandi skr\xE1\xF0ur enn";var s=o("vp-postar").tBodies[0];s.textContent="";var y=null;t.postar.forEach(function(m){if((m.flokkur||"")!==y){y=m.flokkur||"";var f=document.createElement("tr");f.className="vp-flokkur";var h=document.createElement("th");h.colSpan=7,h.textContent=y||"\xD3flokka\xF0",f.appendChild(h),s.appendChild(f)}var H=document.createElement("tr");ft[m.stada]&&(H.className="vp-st-"+ft[m.stada]),z(H,m.midill),z(H,m.stada),z(H,m.hver),z(H,m.leid),z(H,m.sent),z(H,m.opnad?C(m.opnad)+(m.opnanir>1?" ("+m.opnanir+"\xD7)":""):""),z(H,C(m.hlusta)),H.addEventListener("click",function(){J(m)}),s.appendChild(H)})}function q(){return I("postar").then(Y).catch(function(t){o("vp-postar-samtals").textContent="Villa: "+t.message})}function V(){var t=P||{};o("vp-post-titill").textContent=t.id?t.midill+(t.kodi?" \xB7 k\xF3\xF0i "+t.kodi:" \xB7 enginn k\xF3\xF0i"):"N\xFDr vi\xF0takandi",o("vp-p-gefa").hidden=!!t.kodi;var n=t.kodi?Z(t.kodi).pressa:"";o("vp-p-forskodun").hidden=!n,n&&(o("vp-p-forskodun").href=n+"&preview=1");var r=E("leid").value==="P\xF3stur";o("vp-p-opna").textContent=r?"Opna \xED p\xF3stforriti":"Afrita og opna sl\xF3\xF0",o("vp-p-eml").hidden=!r}function nt(t){for(var n="",r=0;r<t.length;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function at(t,n){if(/^[\x20-\x7e]*$/.test(n))return t+": "+n;var r=new TextEncoder,s=[],y=[];return Array.from(n).forEach(function(m){var f=Array.from(r.encode(m));y.length+f.length>39&&(s.push("=?UTF-8?B?"+nt(y)+"?="),y=[]),y=y.concat(f)}),y.length&&s.push("=?UTF-8?B?"+nt(y)+"?="),t+": "+s.join(`\r
 `)}function pt(t,n,r,s){var y=["To: "+t];g.test(n)&&y.push("From: "+n),y.push(at("Subject",r)),y.push("X-Unsent: 1","MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64");var m=nt(new TextEncoder().encode(s.replace(/\r?\n/g,`\r
`)));return y.join(`\r
`)+`\r
\r
`+m.replace(/(.{76})/g,`$1\r
`)+`\r
`}function _(t,n,r){var s=URL.createObjectURL(new Blob([n],{type:r})),y=document.createElement("a");y.href=s,y.download=t,document.body.appendChild(y),y.click(),y.remove(),setTimeout(function(){URL.revokeObjectURL(s)},1e3)}var ot={};function rt(t){tt.forEach(function(n){var r=E(n),s=t[n]||st[n]||"";r.tagName==="SELECT"?Q(r,s):r.value=s,ot[n]=r.value})}function J(t){P=t,rt(t),U(p()?"Hlekkir vi\xF0takandans eru komnir inn \xED textann. \u201EVista\u201C geymir hann \xFEannig.":""),V(),o("vp-post").hidden=!1,o("vp-post").scrollIntoView({block:"nearest"})}function a(){var t=!(P&&P.id),n={};return tt.forEach(function(r){var s=E(r).value;(t||s!==ot[r])&&(n[r]=s)}),n}function i(){var t=a();return P&&P.id&&(t.id=P.id),U("Vista..."),I("postVista",{post:t}).then(function(n){return P=n.postar[0],rt(P),p(),V(),U("Vista\xF0"),q().then(function(){return P})})}function l(){var t=E("meginmal").value;if(!u.test(t))return t;var n=P&&P.kodi;if(!n)return null;var r=Z(n),s=L[E("mal").value]||L.en,y=(r.pressa?W(s.pressa,r):"")+W(s.beint,r);return t.split("[BLOKK]").join(y).split("[PRESSUHLEKKUR]").join(r.pressa)}function p(){var t=l();return t===null||t===E("meginmal").value?!1:(E("meginmal").value=t,!0)}function d(t){var n=l();if(n===null){U("Gef\xF0u k\xF3\xF0a fyrst: p\xF3sturinn notar [BLOKK] e\xF0a [PRESSUHLEKKUR].");return}t(n)}function k(t){U("Villa: "+t.message)}function v(t,n){t.disabled=!0,n().catch(k).then(function(){t.disabled=!1})}o("vp-post-nyr").addEventListener("click",function(){J({})}),o("vp-p-loka").addEventListener("click",function(){P=null,o("vp-post").hidden=!0}),E("leid").addEventListener("change",V),o("vp-post").addEventListener("submit",function(t){t.preventDefault(),v(o("vp-p-vista"),i)}),o("vp-p-gefa").addEventListener("click",function(){v(this,function(){return i().then(function(t){return I("postGefa",{id:t.id})}).then(function(t){T=t.stillingar||T,P=t.post,V();var n=t.nyr?"N\xFDr k\xF3\xF0i: "+t.post.kodi:"Mi\xF0illinn \xE1tti k\xF3\xF0a fyrir: "+t.post.kodi,r=p();return(r?i():Promise.resolve()).then(function(){return U(n+(r?". Hlekkirnir eru komnir inn \xED textann.":"")),Promise.all([A(),q()])})})})}),o("vp-p-opna").addEventListener("click",function(){var t=this;d(function(n){var r=E("netfang").value.trim(),s=E("fra").value;if(E("leid").value!=="P\xF3stur"){F(n,t);var y=/^https?:\/\//i.test(r)?r:"";y&&window.open(y,"_blank","noopener"),U(y?"Meginm\xE1li\xF0 er afrita\xF0 og sl\xF3\xF0in opnu\xF0.":"Meginm\xE1li\xF0 er afrita\xF0. Engin sl\xF3\xF0 er skr\xE1\xF0.");return}if(!g.test(r)){U("Netfang vantar e\xF0a er ekki gilt.");return}var m="mailto:"+r+"?subject="+encodeURIComponent(E("efni").value)+"&body="+encodeURIComponent(n.replace(/\r?\n/g,`\r
`));U((s?"Sendu fr\xE1 "+s+". ":"")+(m.length>1900?"Langur p\xF3stur: ef meginm\xE1li\xF0 kemur klippt inn, nota\xF0u \u201ES\xE6kja sem dr\xF6g\u201C e\xF0a \u201EAfrita meginm\xE1l\u201C.":"")),location.href=m})}),o("vp-p-eml").addEventListener("click",function(){d(function(t){var n=E("netfang").value.trim();if(!g.test(n)){U("Netfang vantar e\xF0a er ekki gilt.");return}var r="Nafir - "+E("midill").value.trim().replace(/[\\/:*?"<>|]+/g," ")+".eml";_(r,pt(n,E("fra").value,E("efni").value,t),"message/rfc822"),U("Opna\xF0u skr\xE1na "+r+": h\xFAn \xE1 a\xF0 opnast sem \xF3sendur p\xF3stur \xED p\xF3stforritinu.")})}),o("vp-p-afrita-efni").addEventListener("click",function(){F(E("efni").value,this)}),o("vp-p-afrita-meginmal").addEventListener("click",function(){var t=this;d(function(n){F(n,t)})}),o("vp-p-sent").addEventListener("click",function(){v(this,function(){return i().then(function(t){return I("postStada",{id:t.id,stada:"Sent"})}).then(function(t){return P=t.post,rt(t.post),V(),U("Merkt sent "+t.post.sent),q()})})});function j(){return Promise.all([A(),q()])}o("vp-gate").addEventListener("submit",function(t){t.preventDefault(),K=o("vp-key").value.trim(),B(K),o("vp-key").value="",N(!0),j()}),o("vp-gefa").addEventListener("submit",function(t){t.preventDefault();var n=o("vp-gefa-btn"),r=o("vp-status");n.disabled=!0,r.textContent="S\xE6ki k\xF3\xF0a...",I("gefa",{vidtakandi:o("vp-nafn").value,netfang:o("vp-netfang").value}).then(function(s){return T=s.stillingar||T,$(s.lina,s.nyr?"n\xFDr k\xF3\xF0i":"\xE1tti k\xF3\xF0a fyrir"),r.textContent="",o("vp-nafn").value="",o("vp-netfang").value="",A()}).catch(function(s){r.textContent="Villa: "+s.message}).then(function(){n.disabled=!1})}),o("vp-mal").addEventListener("change",function(){X&&$(X)}),o("vp-afrita-blokk").addEventListener("click",function(){F(o("vp-blokk").value,this)}),o("vp-afrita-hlekk").addEventListener("click",function(){F(Z(X.kodi).pressa,this)}),o("vp-uppfaera").addEventListener("click",j),o("vp-flytja-btn").addEventListener("click",function(){var t=this;t.disabled=!0,I("flytjaInn",{texti:o("vp-innflutningur").value}).then(function(n){return o("vp-innflutningur").value="B\xE6tti vi\xF0 "+n.nyir+" k\xF3\xF0um (sett "+n.sett+"). Alls "+n.alls+".",A()}).catch(function(n){o("vp-innflutningur").value="Villa: "+n.message}).then(function(){t.disabled=!1})}),N(!!K),K&&j()}var Jt=`<div class="vpp" data-mal-bidur>
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
</div>`;function Rt(x){x.innerHTML=Jt;var b=new URLSearchParams(location.search),L=(b.get("k")||"").trim().toLowerCase(),o=b.has("preview");function T(w){return Array.prototype.slice.call(document.querySelectorAll(w))}var X="nafir-press-mal",x=document.querySelector(".vpp");function B(w){return w==="is"||w==="en"?w:""}function K(){try{return B(localStorage.getItem(X))}catch{return""}}var I=B(b.get("mal"))||K();function N(w){x.setAttribute("data-mal",w),x.setAttribute("lang",w),x.removeAttribute("data-mal-bidur"),T("[data-mal-val]").forEach(function(A){A.setAttribute("aria-pressed",String(A.getAttribute("data-mal-val")===w))}),T("[data-alt-"+w+"]").forEach(function(A){A.alt=A.getAttribute("data-alt-"+w)})}T("[data-mal-val]").forEach(function(w){w.addEventListener("click",function(){I=w.getAttribute("data-mal-val");try{localStorage.setItem(X,I)}catch{}N(I)})});function Z(){return/^is\b/i.test(navigator.language||"")?"is":"en"}I&&N(I),setTimeout(function(){x.hasAttribute("data-mal-bidur")&&N(Z())},4e3);function W(w){T("[data-promo-state]").forEach(function(A){A.hidden=A.getAttribute("data-promo-state")!==w})}function $(w,A){return fetch(ht,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(w),keepalive:!!A})}function F(w,A,tt){T('[data-promo="'+w+'"]').forEach(function(st){st.href=A,!o&&st.addEventListener("click",function(){$({action:"smellur",k:L,hvad:tt},!0).catch(function(){})})})}function z(w,A){x.hasAttribute("data-mal-bidur")&&N(B(A)||Z()),W(w)}if(!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(L)){z("invalid");return}W("loading"),$({action:"pressa",k:L,forskodun:o}).then(function(w){return w.json()}).then(function(w){if(!w.ok){z(w.villa?"error":"invalid");return}T('[data-promo="name"]').forEach(function(A){A.textContent=w.vidtakandi}),T('[data-promo="code"]').forEach(function(A){A.textContent=w.kodi}),F("listen",w.stream,"hlusta"),F("download",w.download,"saekja"),z("ok",w.mal||"en")}).catch(function(){z("error")})}var Gt={stada:Mt,birta:It,stjorn:zt,pressa:Rt},qt={stada:!0,birta:!0,pressa:!0};function Ot(){let S=document.querySelectorAll("[data-nafir]");if(S.length){if(!document.getElementById("nafir-css")){let b=document.createElement("style");b.id="nafir-css",b.textContent=At,document.head.appendChild(b)}Ht(),S.forEach(function(b){let L=b.getAttribute("data-nafir"),o=Gt[L];!o||b.hasAttribute("data-nafir-raest")||(b.setAttribute("data-nafir-raest",""),qt[L]&&document.body.classList.add("nafir-beige"),o(b))})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ot):Ot();})();
//# sourceMappingURL=nafir.js.map
