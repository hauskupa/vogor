// Nafir build 678137 (2026-10-22T20:57:58.986Z)
(()=>{var Et=`/* Nafir-s\xED\xF0urnar: yfirlit bandsins (.vst) og birtingars\xED\xF0an (.vbt).\r
   Sprauta\xF0 inn af src/nafir/index.js. Grunnurinn (beige t\xE6ki\xF0, Dymo-mi\xF0ar,\r
   lj\xF3s, teljarar) heitir vst-* og er sameiginlegur. */\r
  /* Sami grunnur og /nafir: beige t\xE6ki\xF0, d\xF6kkir skj\xE1ir, Dymo-mi\xF0ar */\r
  body { background-color: #d0c3aa; }\r
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
  .vbt-rod li { display: grid; grid-template-columns: .75rem 7.5rem 5.5rem minmax(0, 1fr) auto; gap: .25rem .9rem; align-items: center; padding: .55rem 0; border-bottom: 1px solid #2e2e2e40; }\r
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
  .vbt-sima-takkar { padding: .45rem .7rem 0; font-size: 1.05rem; letter-spacing: .4rem; }\r
\r
  @media (max-width: 767px) {\r
    .vbt-kort { grid-template-columns: 1fr; }\r
    .vbt-rod li { grid-template-columns: .75rem 1fr auto; }\r
    .vbt-rod .vbt-heiti { grid-column: 2 / -1; }\r
  }\r
`;var At="data:image/png;base64,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";var Mt="https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec",Pt="https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec",Dt=new URLSearchParams(location.search).has("prufa")?Pt:Mt,dt=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"];function $(m){return fetch(Dt,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(m)}).then(function(u){return u.json()})}function e(m,u,y){var P=document.createElement(m);return u&&(P.className=u),y!=null&&(P.textContent=y),P}function W(m,u,y){var P=e("a",u,y);return P.href=m,P.target="_blank",P.rel="noopener",P}function lt(m,u){try{u?localStorage.setItem(m,u):localStorage.removeItem(m)}catch{}}function kt(m){try{return localStorage.getItem(m)||""}catch{return""}}function Ot(m,u){function y(){u.textContent="Afrita\xF0",u.classList.add("vst-afritad"),setTimeout(function(){u.textContent=u.getAttribute("data-merki"),u.classList.remove("vst-afritad")},1500)}function P(){var R=e("textarea");R.value=m,R.setAttribute("readonly",""),R.style.position="fixed",R.style.opacity="0",document.body.appendChild(R),R.select();try{document.execCommand("copy")&&y()}catch{}document.body.removeChild(R)}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(m).then(y,P):P()}function yt(m,u){var y=e("button","vst-afrita",u||"Afrita");return y.type="button",y.setAttribute("data-merki",y.textContent),y.addEventListener("click",function(){Ot(m,y)}),y}function pt(m){try{var u=new URL(m);return/(^|\.)dropbox\.com$/.test(u.hostname)?(u.searchParams.delete("dl"),u.searchParams.set("raw","1"),u.href):m}catch{return m}}function jt(m){var u=/\.([a-z0-9]+)$/i.exec(String(m||"").split(/[?#]/)[0]),y=u?u[1].toLowerCase():"";return{e:y,t:/^(jpe?g|png|gif|webp)$/.test(y)?"mynd":/^(mp4|mov|m4v)$/.test(y)?"myndband":""}}function Lt(){Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'),function(u){u.parentNode.removeChild(u)});var m=document.createElement("link");m.rel="icon",m.type="image/png",m.href=At,document.head.appendChild(m)}var Ft=`<div class="vst">
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
</div>`;function St(m){m.innerHTML=Ft;var u="vogor-band-key",y="vogor-band-nafn",P={Loki\u00F0:"done","\xCD vinnslu":"work",B\u00ED\u00F0ur:"hold"},R=["\xD3byrja\xF0","\xCD vinnslu","B\xED\xF0ur","Loki\xF0"],L={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"};function h(t){return m.querySelector('[data-st="'+t+'"]')}function Z(t){Array.prototype.forEach.call(m.querySelectorAll("[data-st-state]"),function(a){a.hidden=a.getAttribute("data-st-state")!==t})}var F=new URLSearchParams(location.search).get("b")||"";if(!F)try{F=localStorage.getItem(u)||""}catch{}function Q(t){var a=/^(\d{4})-(\d\d)-(\d\d)$/.exec(t||"");return a?new Date(Number(a[1]),Number(a[2])-1,Number(a[3])):null}function H(t){var a=Q(t);return a?a.getDate()+". "+dt[a.getMonth()]:t||""}var ft=new Date;ft.setHours(0,0,0,0);function tt(t){var a=Q(t);return a?Math.round((a-ft)/864e5):null}function U(t,a,o){var s=tt(a);s!=null&&(h("dagar-"+t).textContent=s>0?s:"0",h("texti-"+t).textContent=s>1?"dagar \xED "+o:s===1?"dagur \xED "+o:s===0?o+" \xED dag":o+" komi\xF0")}function et(t){var a=t.stada==="Loki\xF0",o=tt(t.frestur),s=!a&&o!=null&&o<0,r=e("li",a?"vst-lokid":s?"vst-seint":""),v=e("span","vst-led"+(s?" vst-led--late":P[t.stada]?" vst-led--"+P[t.stada]:""));v.title=s?t.stada+", komi\xF0 fram yfir frest":t.stada,r.appendChild(v);var i=e("span","vst-verk",t.verk);t.notur&&!a&&i.appendChild(e("small","",t.notur)),r.appendChild(i);var b=e("span","vst-val");return b.appendChild(Y(t,"stada",R,"Sta\xF0a verksins: ")),b.appendChild(Y(t,"hver",[""].concat(B.band||[]),"Hver \xE1 verki\xF0: ")),r.appendChild(b),r.appendChild(e("span","vst-frestur",H(t.frestur))),r}function Y(t,a,o,s){var r=e("select");return r.setAttribute("aria-label",s+t.verk),o.indexOf(t[a])===-1&&(o=o.concat([t[a]])),o.forEach(function(v){var i=e("option","",v||"Enginn");i.value=v,r.appendChild(i)}),r.value=t[a],r.addEventListener("change",function(){ut(t,a,r)}),r}function ut(t,a,o){var s={action:"bandBreyta",b:F,rod:t.rod,verk:t.verk};s[a]=o.value,o.disabled=!0,h("skilabod").textContent="",$(s).then(function(r){if(!r.ok)throw new Error(r.villa||"Hlekkurinn gildir ekki lengur.");t.hver=r.hver,t.stada=r.stada}).catch(function(r){h("skilabod").textContent="T\xF3kst ekki a\xF0 vista: "+(r.message==="Failed to fetch"?"ekkert samband.":r.message)}).then(function(){vt(B)})}var B={};function vt(t){B=t,U("preorder",t.preorder,"pre-order"),U("utgafa",t.utgafa,"\xFAtg\xE1fu");var a=t.verkefni.length,o=t.verkefni.filter(function(d){return d.stada==="Loki\xF0"}).length;h("hlutfall").textContent=o+" / "+a;var s=h("maelir");s.textContent="",s.setAttribute("aria-label",o+" af "+a+" verkum loki\xF0");for(var r=0;r<a;r++)s.appendChild(e("span",r<o?"on":""));var v=h("naest");v.textContent="",t.verkefni.filter(function(d){return d.stada!=="Loki\xF0"&&Q(d.frestur)}).sort(function(d,l){return Q(d.frestur)-Q(l.frestur)}).slice(0,7).forEach(function(d){v.appendChild(et(d))}),v.children.length||v.appendChild(e("li","","Ekkert \xE1 dagskr\xE1 me\xF0 fresti."));var i=h("hopar"),b={};Array.prototype.forEach.call(i.children,function(d){b[d.getAttribute("data-flokkur")]=d.open}),i.textContent="";var x=[],C={};t.verkefni.forEach(function(d){var l=d.flokkur||"Anna\xF0";C[l]||(C[l]=[],x.push(l)),C[l].push(d)}),x.forEach(function(d){var l=C[d],A=l.filter(function(w){return w.stada==="Loki\xF0"}).length,z=e("details","vst-group");z.setAttribute("data-flokkur",d),z.open=d in b?b[d]:A<l.length;var p=e("summary");p.appendChild(e("span","",d)),p.appendChild(e("span","",A+"/"+l.length)),z.appendChild(p);var g=e("ul");l.forEach(function(w){g.appendChild(et(w))}),z.appendChild(g),i.appendChild(z)});var E=h("pressa");E.textContent="";var I=null,T=t.pressa.some(function(d){return d.flokkur});if(t.pressa.forEach(function(d){if(T&&(d.flokkur||"")!==I){I=d.flokkur||"";var l=e("tr","vst-flokkur"),A=e("th","",I||"\xD3flokka\xF0");A.colSpan=7,l.appendChild(A),E.appendChild(l)}var z=e("tr",L[d.stada||"Sent"]?"vst-st-"+L[d.stada||"Sent"]:"");z.appendChild(e("td","",d.midill)),z.appendChild(e("td","",d.stada||"Sent")),z.appendChild(e("td","",d.hver||"\u2013")),z.appendChild(e("td","",H(d.sent)||"\u2013")),z.appendChild(e("td","",d.opnad?H(d.opnad)+(d.opnanir>1?" ("+d.opnanir+"\xD7)":""):"\u2013")),z.appendChild(e("td","",H(d.hlusta)||"\u2013")),z.appendChild(e("td","",H(d.saekja)||"\u2013")),E.appendChild(z)}),!t.pressa.length){var k=e("td","","Enginn \xE1 markh\xF3pslistanum enn\xFE\xE1.");k.colSpan=7,E.appendChild(e("tr")).appendChild(k)}O(t.band||[]),nt(t.meta),rt(t.efni||[]),t.stream?h("stream").href=t.stream:h("stream").hidden=!0,h("uppfaert").textContent=t.uppfaert}var ht=/\.(jpe?g|png|gif|webp)$/i,f=/\.(mp4|mov|m4v|webm)$/i,n="Samf\xE9lagsmi\xF0lar",S=["Dr\xF6g","Sam\xFEykkt","P\xF3sta\xF0","Sleppa"],M={P\u00F3sta\u00F0:"postad",Sleppa:"sleppa"};function q(t){try{var a=new URL(t);return{nafn:decodeURIComponent(a.pathname.split("/").pop()||""),dropbox:/(^|\.)dropbox\.com$/.test(a.hostname),u:a}}catch{return{nafn:"",dropbox:!1,u:null}}}function c(t){var a=q(t.slod),o=e("div","vst-slod");if(ht.test(a.nafn)){var s=e("img","vst-mynd");s.src=pt(t.slod),s.alt=t.heiti||"",s.loading="lazy";var r=W(t.slod);r.appendChild(s),o.appendChild(r),o.appendChild(W(t.slod,"vst-afrita","Opna \xED fullri st\xE6r\xF0"))}else if(a.dropbox){var v=/\/fo\//.test(a.u.pathname)?"Mappa \xED Dropbox":(f.test(a.nafn)?"Myndband: ":"Dropbox: ")+a.nafn;o.appendChild(W(t.slod,"",v))}else o.appendChild(W(t.slod,"",t.slod.replace(/^https?:\/\/(www\.)?/,"")));return o.appendChild(yt(t.slod,"Afrita hlekk")),o}function j(t,a){var o=e("button","vst-afrita"+(a?" "+a:""),t);return o.type="button",o}function G(t){return t.b=F,$(t).catch(function(a){return{ok:!1,villa:a.message==="Failed to fetch"?"Ekkert samband.":a.message}})}function N(){return h("eg").value}function K(t,a){for(var o=B.efni||[],s=0;s<o.length;s++)o[s].id===t.id&&(o[s]=t);var r=D(t);return a.parentNode.replaceChild(r,a),r}function D(t){var a=t.flokkur===n,o=!/^md-/.test(t.id),s=e("article","vst-but"+(a&&M[t.stada]?" vst-but-"+M[t.stada]:"")),r=e("div","vst-but-haus");r.appendChild(e("span","vst-but-heiti",t.heiti||"\xC1n heitis"));var v=e("span","vst-but-hlid");if(t.birta){var i=tt(t.birta),b=t.stada==="P\xF3sta\xF0"||t.stada==="Sleppa",x=a&&!b&&i!=null&&i<0;v.appendChild(e("span","vst-but-birta"+(i===0?" vst-idag":"")+(x?" vst-but-seint":""),i===0?"\xCD dag":H(t.birta)+(x?", ekki p\xF3sta\xF0":""))),i!=null&&i<0&&(!a||b)&&s.classList.add("vst-but-lidid")}if(a&&o&&t.birta){var C=e("select");C.setAttribute("aria-label","Sta\xF0a f\xE6rslunnar "+(t.heiti||"")),S.forEach(function(l){var A=e("option","",l);A.value=l,C.appendChild(A)}),C.value=t.stada||S[0],C.addEventListener("change",function(){if(!N()){C.value=t.stada,at(s,"Veldu hver \xFE\xFA ert efst \xED Efni.");return}C.disabled=!0,G({action:"bandEfniVista",id:t.id,hver:N(),reitir:{stada:C.value}}).then(function(l){l.ok?K(l.but,s):(C.disabled=!1,C.value=t.stada,at(s,l.villa))})}),v.appendChild(C)}if(o){var E=j("Breyta","vst-but-takki");E.addEventListener("click",function(){_(t,s)}),v.appendChild(E)}r.appendChild(v),s.appendChild(r);var I=B.meta?B.meta.faerslur.filter(function(l){return l.efni===t.id}):[];if(I.length){var T=e("p","vst-but-meta");I.forEach(function(l){T.appendChild(W(l.hlekkur,"",l.midill+": "+(l.na!=null?"n\xE1 "+l.na+", ":"")+l.vidbrogd+" vi\xF0br\xF6g\xF0"))}),s.appendChild(T)}t.slod&&s.appendChild(c(t));var k=[["is","\xCDslenska"],["en","English"]].filter(function(l){return t[l[0]]});if(k.length){var d=e("div","vst-maltextar");k.forEach(function(l){var A=e("div","vst-maltexti");k.length>1&&A.appendChild(e("span","vst-mal",l[1])),A.appendChild(e("pre","vst-texti",t[l[0]])),A.appendChild(yt(t[l[0]])),d.appendChild(A)}),s.appendChild(d)}return t.notur&&s.appendChild(e("p","vst-but-notur",t.notur)),t.breyttAf&&t.breytt&&s.appendChild(e("p","vst-but-breytt","S\xED\xF0ast breytt af "+t.breyttAf+", "+H(t.breytt.slice(0,10))+" kl. "+t.breytt.slice(11,16))),s}function at(t,a){var o=t.querySelector(".vst-msg")||t.appendChild(e("p","vst-small vst-msg"));o.textContent=a||""}function _(t,a){var o=t.flokkur===n,s=t,r=e("form","vst-but vst-form vst-but-form");r.appendChild(e("span","vst-but-heiti","Breyta: "+(t.heiti||"\xC1n heitis")));function v(k,d,l,A,z,p){var g=e("label","",k),w=e(l,z||"");return l==="input"&&(w.type=d==="birta"?"date":"text"),w.name=d,w.value=A||"",g.appendChild(w),p&&g.appendChild(e("small","",p)),g}r.appendChild(v("Heiti","heiti","input",t.heiti));var i=e("div","vst-form-rod");if(i.appendChild(v("Birta","birta","input",t.birta)),o){var b=e("label","","Sta\xF0a"),x=e("select");x.name="stada",S.forEach(function(k){var d=e("option","",k);d.value=k,x.appendChild(d)}),x.value=t.stada||S[0],b.appendChild(x),i.appendChild(b)}r.appendChild(i),r.appendChild(v("\xCDslenska","is","textarea",t.is)),r.appendChild(v("English","en","textarea",t.en)),r.appendChild(v("Mynd e\xF0a myndband","slod","input",t.slod,"","Dropbox-hlekkur \xE1 skr\xE1na e\xF0a m\xF6ppuna, e\xF0a sl\xF3\xF0 \xE1 mynd.")),r.appendChild(v("N\xF3tur","notur","textarea",t.notur,"vst-stutt","Hva\xF0a mynd fylgir, hvar \xE1 a\xF0 p\xF3sta, o.s.frv."));var C=e("div","vst-form-takkar"),E=j("Vista");E.type="submit";var I=j("H\xE6tta vi\xF0","vst-but-takki");C.appendChild(E),C.appendChild(I),r.appendChild(C);var T=r.appendChild(e("p","vst-small vst-msg"));I.addEventListener("click",function(){K(s,r)}),r.addEventListener("submit",function(k){if(k.preventDefault(),T.textContent="",!N()){T.textContent="Veldu hver \xFE\xFA ert efst \xED Efni.";return}var d={};["heiti","birta","stada","is","en","slod","notur"].forEach(function(l){r.elements[l]&&(d[l]=r.elements[l].value)}),E.disabled=!0,E.textContent="Vista...",G({action:"bandEfniVista",id:t.id,hver:N(),breytt:s.breytt,reitir:d}).then(function(l){if(E.disabled=!1,E.textContent="Vista",l.ok){K(l.but,r);return}l.arekstur&&l.but&&(s=l.but),T.textContent=l.villa||"T\xF3kst ekki a\xF0 vista."})}),a.parentNode.replaceChild(r,a),r.elements.heiti.focus()}function mt(t,a){return(t.birta?1:0)-(a.birta?1:0)||(t.birta<a.birta?-1:t.birta>a.birta?1:0)}var J="vogor-efni-opid";function rt(t){var a=h("efni");if(h("efni-kafli").hidden=!t.length,!!t.length&&!a.querySelector(".vst-but-form")){var o={};try{o=JSON.parse(localStorage.getItem(J)||"{}")||{}}catch{}a.textContent="";var s=[],r={};t.forEach(function(v){var i=v.flokkur||"Anna\xF0";r[i]||(r[i]=[],s.push(i)),r[i].push(v)}),s.forEach(function(v){var i=e("details","vst-group");i.open=!!o[v];var b=e("summary");b.appendChild(e("span","",v));var x=String(r[v].length);if(v===n){var C=r[v].filter(function(k){return k.birta&&k.stada!=="Sleppa"}),E=C.filter(function(k){return k.stada==="P\xF3sta\xF0"}).length;x=E+"/"+C.length+" p\xF3sta\xF0ar",r[v].sort(mt)}b.appendChild(e("span","",x)),i.appendChild(b);var I=e("div","vst-efni");if(r[v].forEach(function(k){I.appendChild(D(k))}),v===n){var T=j("N\xFD f\xE6rsla","vst-but-takki");T.addEventListener("click",function(){if(!N()){T.textContent="Veldu fyrst hver \xFE\xFA ert";return}T.disabled=!0,G({action:"bandEfniNytt",hver:N(),flokkur:n}).then(function(k){if(T.disabled=!1,!k.ok){T.textContent=k.villa||"T\xF3kst ekki";return}B.efni.push(k.but);var d=D(k.but);I.insertBefore(d,T),_(k.but,d)})}),I.appendChild(T)}i.appendChild(I),i.addEventListener("toggle",function(){o[v]=i.open;try{localStorage.setItem(J,JSON.stringify(o))}catch{}}),a.appendChild(i)})}}function nt(t){if(h("meta-kafli").hidden=!t,!!t){var a=t.fylgjendur||{},o=h("fylgjendur");o.textContent="",[["fb","Facebook"],["ig","Instagram"]].forEach(function(i){if(a[i[0]]!=null){var b=e("div","vst-count");b.appendChild(e("span","vst-counter",String(a[i[0]])));var x=a[i[0]+"Breyting"];b.appendChild(e("span","","fylgjendur \xE1 "+i[1]+(x!=null?" ("+(x>=0?"+":"")+x+" fr\xE1 "+H(a.fra)+")":""))),o.appendChild(b)}});var s={};(B.efni||[]).forEach(function(i){s[i.id]=i.heiti});var r=h("meta");if(r.textContent="",t.faerslur.forEach(function(i){var b=e("tr");b.appendChild(e("td","",H(i.birt.slice(0,10))+" "+i.birt.slice(11,16))),b.appendChild(e("td","",i.midill)),b.appendChild(e("td","",i.tegund));var x=e("td","vst-meta-texti"),C=s[i.efni]?s[i.efni]:i.texti||i.tegund;x.appendChild(i.hlekkur?W(i.hlekkur,"",C):e("span","",C)),x.title=i.texti,b.appendChild(x),[i.na,i.ahorf,i.vidbrogd].forEach(function(E){b.appendChild(e("td","vst-tala",E==null?"\u2013":String(E)))}),r.appendChild(b)}),!t.faerslur.length){var v=e("td","","Engar f\xE6rslur fundust fr\xE1 1. okt\xF3ber.");v.colSpan=7,r.appendChild(e("tr")).appendChild(v)}h("meta-sott").textContent=t.sott||"aldrei"}}function O(t){var a=h("eg"),o=a.value;if(!o)try{o=localStorage.getItem(y)||""}catch{}a.textContent="",[""].concat(t.filter(function(s){return s!=="Allir"})).forEach(function(s){var r=e("option","",s||"Veldu nafn");r.value=s,a.appendChild(r)}),a.value=t.indexOf(o)!==-1?o:""}h("eg").addEventListener("change",function(){try{localStorage.setItem(y,this.value)}catch{}});function it(){return $({action:"bandStada",b:F}).then(function(t){if(t.rangurLykill){Z("invalid");return}if(!t.ok){h("villa").textContent=t.villa||"\xD3\xFEekkt villa.",Z("error");return}try{localStorage.setItem(u,F)}catch{}vt(t),Z("ok")}).catch(function(){Z("error")})}if(h("uppfaera").addEventListener("click",function(){var t=this;t.disabled=!0,it().then(function(){t.disabled=!1})}),!F){Z("invalid");return}Z("loading"),it()}var Rt=`<div class="vbt">
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
</div>`;function It(m){m.innerHTML=Rt;var u="vogor-promo-key",y="vogor-birta-mal",P={Birt:"ok","Prufa \xED lagi":"ok",T\u00EDmasett:"bid",Prufa:"prufa","B\xED\xF0ur Instagram":"bid",Sendi:"bid",Villa:"villa",\u00D3v\u00EDst:"villa",\u00DAtrunni\u00F0:"villa"},R=["T\xEDmasett","Prufa","B\xED\xF0ur Instagram"];function L(f){return m.querySelector('[data-bt="'+f+'"]')}var h=kt(u);function Z(f,n){var S=Object.assign({action:f,key:h},n||{});return $(S).then(function(M){return M.rangtLeyniord&&(h="",lt(u,""),F("gate")),M}).catch(function(M){return{ok:!1,villa:M.message==="Failed to fetch"?"Ekkert samband.":M.message}})}function F(f){L("gate").hidden=f!=="gate",L("hledur").hidden=f!=="hledur",L("app").hidden=f!=="app"}function Q(f){return f?new Date(f.replace(" ","T")+":00Z"):null}function H(f){var n=Q(f);return n?n.getUTCDate()+". "+dt[n.getUTCMonth()]+" "+f.slice(11,16):""}function ft(f){var n=Math.round((Q(f)-Date.now())/6e4);if(n<=0)return"n\xFAna";if(n<60)return n+" m\xEDn";if(n<2880)return Math.floor(n/60)+" klst "+n%60+" m\xEDn";var S=Math.round(n/1440);return S+(S===1?" dag":" daga")}function tt(f){var n=Math.round((Q(f)-Date.now())/6e4);return n<60?Math.max(n,0)+" m\xEDn":n<2880?Math.round(n/60)+" klst":Math.round(n/1440)+" dagar"}var U={},et={};function Y(f){return Z("birtingar").then(function(n){if(!n.ok){n.rangtLeyniord||(F("gate"),L("gate-villa").textContent=n.villa||"N\xE1\xF0i ekki \xED g\xF6gnin.");return}U=n,f===!0?B():ut(),F("app")})}function ut(){B();var f=L("faerslur");f.textContent="",U.faerslur.slice().sort(function(n,S){return n.birta.localeCompare(S.birta)}).forEach(function(n){f.appendChild(ht(n))})}function B(){var f={};U.faerslur.forEach(function(c){f[c.id]=c.heiti});var n=U.birtingar.filter(function(c){return R.indexOf(c.stada)!==-1}).sort(function(c,j){return c.timi.localeCompare(j.timi)}),S=U.birtingar.filter(function(c){return R.indexOf(c.stada)===-1&&c.stada!=="H\xE6tt vi\xF0"}).sort(function(c,j){return j.timi.localeCompare(c.timi)}).slice(0,15),M=L("rod");M.textContent="",n.concat(S).forEach(function(c){var j=e("li",R.indexOf(c.stada)===-1?"vbt-buid":"");j.appendChild(e("span","vst-led vst-led--"+(P[c.stada]||""))),j.appendChild(e("span","vbt-timi",H(c.timi))),j.appendChild(e("span","",c.midill));var G=e("span","vbt-heiti",(c.prufa?"Prufa: ":"")+(f[c.efni]||c.efni)),N=e("small");if(c.stada==="Birt"&&c.nidurstada){var K=e("a","","Birt, opna f\xE6rsluna");K.href=c.nidurstada,K.target="_blank",K.rel="noopener",N.appendChild(K)}else N.textContent=c.stada==="T\xEDmasett"?"Fer \xFAt eftir "+ft(c.timi):c.stada+(c.nidurstada?": "+c.nidurstada:"");G.appendChild(N),j.appendChild(G),R.indexOf(c.stada)!==-1?j.appendChild(vt(c)):j.appendChild(e("span")),M.appendChild(j)}),M.children.length||M.appendChild(e("li","","Ekkert \xED bi\xF0r\xF6\xF0 enn\xFE\xE1."));var q=n.filter(function(c){return!c.prufa})[0];L("naesta").textContent=q?tt(q.timi):"--",L("naesta-texti").textContent=q?"\xED n\xE6stu birtingu":"ekkert \xED bi\xF0r\xF6\xF0",L("sott").textContent=U.nu}function vt(f){var n=e("button","vbt-btn vbt-btn--ljos","H\xE6tta vi\xF0");return n.type="button",n.addEventListener("click",function(){n.disabled=!0,Z("birtingHaetta",{id:f.id}).then(function(S){S.ok?(U.birtingar=S.birtingar,B()):(n.disabled=!1,alert(S.villa))})}),n}function ht(f){var n=et[f.id]||(et[f.id]={}),S=f.stada==="P\xF3sta\xF0",M=e("article","vbt-kort"+(S?" vbt-kort--postad":"")),q=e("div","vbt-kort-haus");q.appendChild(e("b","",f.heiti));var c=Q(f.birta+" 00:00");q.appendChild(e("span","vbt-merki",c.getUTCDate()+". "+dt[c.getUTCMonth()]+" \xB7 "+f.stada)),M.appendChild(q);var j=e("div","vbt-forsk"),G=e("div","vbt-skipta"),N="Instagram";["Instagram","Facebook"].forEach(function(p){var g=e("button","",p);g.type="button",g.addEventListener("click",function(){N=p,A()}),G.appendChild(g)}),j.appendChild(G);var K=e("div");j.appendChild(K),M.appendChild(j);var D=e("form","vbt-stjorn"),at=e("div","vbt-midlar"),_={};["Facebook","Instagram"].forEach(function(p){var g=e("label"),w=e("input");w.type="checkbox",w.checked=n[p]!==void 0?n[p]:!0,_[p]=w,g.appendChild(w),g.appendChild(document.createTextNode(p)),at.appendChild(g),w.addEventListener("change",function(){n[p]=w.checked,A()})}),D.appendChild(at);var mt=e("label","","Texti"),J=e("select");[["en","English"],["is","\xCDslenska"],["baedi","\xCDslenska og enska"]].forEach(function(p){var g=e("option","",p[1]);g.value=p[0],J.appendChild(g)}),J.value=n.mal||kt(y)||"en",mt.appendChild(J),D.appendChild(mt);var rt=e("label","","Textinn sem fer \xFAt "),nt=e("span","vbt-teljari");rt.appendChild(nt);var O=e("textarea");rt.appendChild(O),D.appendChild(rt);function it(){O.value=J.value==="is"?f.is:J.value==="en"?f.en:[f.is,f.en].filter(Boolean).join(`

`),n.texti=O.value,A()}J.addEventListener("change",function(){n.mal=J.value,lt(y,J.value),it()}),O.addEventListener("input",function(){n.texti=O.value,A()});var t=e("label","","Mynd e\xF0a myndband"),a=e("input");a.value=n.mynd!=null?n.mynd:f.slod||"",a.placeholder="Dropbox-hlekkur \xE1 .jpg e\xF0a .mp4",t.appendChild(a),D.appendChild(t),a.addEventListener("input",function(){n.mynd=a.value}),a.addEventListener("change",A);var o=e("div","vbt-tvo"),s=e("label","","Dagur"),r=e("input");r.type="date",r.value=n.dagur||f.birta,r.addEventListener("change",function(){n.dagur=r.value,A()}),s.appendChild(r);var v=e("label","","Klukkan"),i=e("input");i.type="time",i.value=n.klukka||"12:00",i.addEventListener("change",function(){n.klukka=i.value,A()}),v.appendChild(i),o.appendChild(s),o.appendChild(v),D.appendChild(o);var b=e("p","vbt-adv");D.appendChild(b);var x=e("div","vbt-takkar"),C=e("button","vbt-btn","T\xEDmasetja");C.type="submit";var E=e("button","vbt-btn vbt-btn--ljos","Prufa");E.type="button",x.appendChild(C),x.appendChild(E),D.appendChild(x);var I=e("p","vbt-msg"+(n.skilabod?" vbt-msg--ok":""),n.skilabod||"");n.skilabod="",D.appendChild(I);var T=U.birtingar.filter(function(p){return p.efni===f.id&&p.stada!=="H\xE6tt vi\xF0"});if(T.length){var k=e("ul","vbt-fyrri");T.forEach(function(p){var g=e("li");g.appendChild(e("span","vst-led vst-led--"+(P[p.stada]||""))),g.appendChild(document.createTextNode((p.prufa?"Prufa \xE1 ":"")+p.midill+": "+p.stada+(p.stada==="T\xEDmasett"?" "+H(p.timi):""))),k.appendChild(g)}),D.appendChild(k)}var d=U.meta?U.meta.faerslur.filter(function(p){return p.efni===f.id}):[];d.forEach(function(p){D.appendChild(e("p","vbt-teljari",p.midill+": "+(p.na!=null?"n\xE1 "+p.na+", ":"")+(p.ahorf!=null?"\xE1horf "+p.ahorf+", ":"")+p.vidbrogd+" vi\xF0br\xF6g\xF0"))}),M.appendChild(D);function l(){return["Facebook","Instagram"].filter(function(p){return _[p].checked})}function A(){Array.prototype.forEach.call(G.children,function(wt){wt.setAttribute("aria-pressed",String(wt.textContent===N))});var p=jt(a.value),g=_.Instagram.checked;nt.textContent=O.value.length+(g?" / 2200":"")+" stafir"+(g?", "+(O.value.match(/#[^\s#]+/g)||[]).length+" / 30 myllumerki":""),nt.classList.toggle("vbt-of",g&&O.value.length>2200);var w=[];l().length||w.push("Veldu a\xF0 minnsta kosti einn mi\xF0il."),g&&!a.value&&w.push("Instagram \xFEarf mynd e\xF0a myndband."),a.value&&!p.t&&w.push("Sl\xF3\xF0in \xFEarf a\xF0 enda \xE1 .jpg, .png e\xF0a .mp4 (Dropbox-hlekkur \xE1 skr\xE1na sj\xE1lfa, ekki m\xF6ppu)."),g&&p.t==="mynd"&&!/^jpe?g$/.test(p.e)&&w.push("Instagram tekur bara JPG-myndir."),g&&/instagram\.com|ffm\.to|https?:\/\//.test(O.value)&&w.push("Hlekkir virka ekki \xED texta \xE1 Instagram; skrifa\xF0u \u201Ehlekkur \xED bio\u201C."),b.textContent=w.join(" "),K.textContent="";var V=N==="Facebook",X=e("div","vbt-sima"+(V?" vbt-sima--fb":"")),bt=e("div","vbt-sima-haus");bt.appendChild(e("i"));var Ct=e("span","",V?"Stafr\xE6nn H\xE1kon":"stafraennhakon");V&&Ct.appendChild(e("small","",H(r.value+" "+(i.value||"12:00")))),bt.appendChild(Ct),X.appendChild(bt);var st=e("div","vbt-sima-texti"),xt=V?O.value:O.value.split(`
`)[0].slice(0,125);V||st.appendChild(e("b","","stafraennhakon")),st.appendChild(document.createTextNode(xt)),!V&&O.value.length>xt.length&&st.appendChild(e("span","vbt-meira","\u2026 meira")),V&&X.appendChild(st);var ct=e("div","vbt-sima-mynd");if(p.t==="mynd"){var gt=e("img");gt.src=pt(a.value),gt.alt="",ct.appendChild(gt)}else if(p.t==="myndband"){var ot=e("video");ot.src=pt(a.value),ot.muted=!0,ot.controls=!0,ot.preload="metadata",ct.appendChild(ot)}else ct.textContent=a.value?"Sl\xF3\xF0 sem er hvorki mynd n\xE9 myndband":"Engin mynd";(a.value||!V)&&X.appendChild(ct),V||(X.appendChild(e("div","vbt-sima-takkar","\u2661 \u25EF \u27A4")),X.appendChild(st)),K.appendChild(X)}function z(p){I.textContent="",I.classList.remove("vbt-msg--ok");var g=p?E:C,w=l(),V=w.join(" og ");!p&&!confirm("T\xEDmasetja \u201E"+f.heiti+"\u201C \xE1 "+V+" "+H(r.value+" "+i.value)+`?

F\xE6rslan fer \xFAt sj\xE1lfkrafa. \xDEa\xF0 m\xE1 h\xE6tta vi\xF0 \xED bi\xF0r\xF6\xF0inni \xFEanga\xF0 til.`)||(g.disabled=!0,Z("birtingVista",{efni:f.id,midlar:w,timi:r.value+" "+i.value,texti:O.value,mynd:a.value.trim(),prufa:p}).then(function(X){if(g.disabled=!1,!X.ok){I.textContent=X.villa||"T\xF3kst ekki.";return}U.birtingar=X.birtingar,n.skilabod=p?"Prufan er komin \xED bi\xF0r\xF6\xF0ina efst. Ni\xF0ursta\xF0an s\xE9st \xFEar innan 5 m\xEDn\xFAtna; ekkert er birt.":"T\xEDmasett. F\xE6rslan s\xE9st \xED bi\xF0r\xF6\xF0inni efst og m\xE1 h\xE6tta vi\xF0 \xFEar.",ut()}))}return D.addEventListener("submit",function(p){p.preventDefault(),z(!1)}),E.addEventListener("click",function(){z(!0)}),n.texti!=null?(O.value=n.texti,A()):it(),M}L("gate").addEventListener("submit",function(f){f.preventDefault(),h=L("lykill").value.trim(),lt(u,h),L("gate-villa").textContent="",F("hledur"),Y()}),L("uppfaera").addEventListener("click",function(){Y()}),L("utskra").addEventListener("click",function(){h="",lt(u,""),F("gate")}),setInterval(function(){h&&!L("app").hidden&&Y(!0)},6e4),h?(F("hledur"),Y()):F("gate")}var Ht={stada:St,birta:It};function Tt(){let m=document.querySelectorAll("[data-nafir]");if(m.length){if(!document.getElementById("nafir-css")){let u=document.createElement("style");u.id="nafir-css",u.textContent=Et,document.head.appendChild(u)}Lt(),m.forEach(function(u){let y=Ht[u.getAttribute("data-nafir")];!y||u.hasAttribute("data-nafir-raest")||(u.setAttribute("data-nafir-raest",""),y(u))})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt):Tt();})();
//# sourceMappingURL=nafir.js.map
