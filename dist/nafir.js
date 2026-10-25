(()=>{var ue=`/* Nafir-s\xED\xF0urnar: yfirlit bandsins (.vst) og birtingars\xED\xF0an (.vbt).
   Sprauta\xF0 inn af src/nafir/index.js. Grunnurinn (beige t\xE6ki\xF0, Dymo-mi\xF0ar,
   lj\xF3s, teljarar) heitir vst-* og er sameiginlegur. */
  /* Sami grunnur og /nafir: beige t\xE6ki\xF0, d\xF6kkir skj\xE1ir, Dymo-mi\xF0ar */
  body.nafir-beige { background-color: #d0c3aa; }

  .vst { color: var(--black-800, #2e2e2e); font-family: "Open Sans", sans-serif; font-size: 1rem; font-weight: 400; line-height: 1.5; padding: 0 1rem 5rem; display: grid; gap: 2rem; }
  .vst [hidden] { display: none !important; }
  .vst p, .vst ul { margin: 0; }
  .vst ul { list-style: none; padding: 0; }
  .vst-body { display: grid; gap: 3rem; }
  .vst-small { font-size: .875rem; }

  .vst-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem 2rem; flex-wrap: wrap; }
  .vst-dymo { font-family: Dymo, Arial, sans-serif; font-size: 1.625rem; line-height: 1.4; color: var(--black-800, #2e2e2e); user-select: none; margin-bottom: .75rem; }
  .vst-head .vst-dymo { margin-bottom: 0; }
  .vst-dymo--red { color: var(--vogor-red, #75161c); font-size: 2rem; }
  .vst-counts { display: flex; flex-wrap: wrap; gap: .75rem 1.5rem; }
  .vst-count { display: flex; align-items: center; gap: .6rem; text-transform: uppercase; font-size: .6875rem; font-weight: 700; letter-spacing: .12em; }
  .vst-counter { display: inline-flex; align-items: center; justify-content: center; min-width: 3rem; background: #3d3c3c; color: #fff; border-radius: 4px; padding: .25rem .6rem; font-weight: 800; font-size: 1rem; letter-spacing: .2em; text-indent: .2em; font-variant-numeric: tabular-nums; }

  .vst-status { display: flex; align-items: center; gap: .6rem; text-transform: uppercase; font-size: .75rem; font-weight: 700; letter-spacing: .12em; margin-bottom: .5rem; }
  .vst-led { flex: 0 0 auto; display: inline-block; width: .75rem; height: .75rem; border-radius: 50%; border: 1px solid #2e2e2e80; background: #8d877a; }
  .vst-led--done { background: var(--play-green, #18e91c); box-shadow: 0 0 6px var(--play-green, #18e91c); }
  .vst-led--work { background: #f2b632; box-shadow: 0 0 6px #f2b63299; }
  .vst-led--hold { background: var(--vogor-blue, #85a8ac); }
  .vst-led--late { background: var(--stopp-red, #fc0000); box-shadow: 0 0 6px #fc000080; }
  .vst-led--wait { background: #f2b632; animation: vst-blink 1s steps(2, start) infinite; }
  @keyframes vst-blink { to { visibility: hidden; } }
  @media (prefers-reduced-motion: reduce) { .vst-led--wait { animation: none; } }

  .vst-screen { background-color: #494747; background-image: linear-gradient(#ffffff14, #ffffff05 10%, #0000000a); border-radius: .5rem; padding: 1.25rem 1.5rem 1.5rem; color: #fff; display: grid; gap: .75rem; box-shadow: inset 0 1px #ffffff1f, 0 1px 2px #0003; }
  .vst-screen-row { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
  .vst-screen-label { text-transform: uppercase; font-size: .6875rem; font-weight: 700; letter-spacing: .15em; }
  .vst-screen-value { font-weight: 800; font-size: 1.25rem; letter-spacing: .08em; font-variant-numeric: tabular-nums; }
  .vst-meter { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 3px; height: 1.25rem; }
  .vst-meter span { background: #2b2824; border-radius: 1px; }
  .vst-meter span.on { background: var(--play-green, #18e91c); box-shadow: 0 0 5px #18e91c80; }

  .vst-list li, .vst-group li { display: grid; grid-template-columns: .75rem minmax(0, 1fr) auto 4.5rem; gap: .25rem .9rem; align-items: baseline; padding: .55rem 0; border-bottom: 1px solid #2e2e2e40; }
  .vst-list li > .vst-led, .vst-group li > .vst-led { align-self: center; }
  .vst-verk { font-weight: 600; }
  .vst-verk small { display: block; font-weight: 400; font-size: .8125rem; opacity: .85; }
  .vst-hver, .vst-frestur { font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; }
  /* Sta\xF0a og eigandi verks: tveir fellilistar hli\xF0 vi\xF0 hli\xF0 */
  .vst-val { display: grid; grid-template-columns: 7.75rem 7rem; gap: .5rem; align-items: center; }
  .vst select { width: 100%; min-width: 0; padding: .2rem .25rem; font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; color: inherit; background-color: transparent; border: 1px solid #2e2e2e40; border-radius: 3px; cursor: pointer; }
  .vst select:hover { border-color: #2e2e2e; background-color: #ffffff40; }
  .vst select:disabled { opacity: .5; cursor: default; }
  .vst-hint { margin-bottom: .5rem; }
  .vst-msg { color: #a30d0d; font-weight: 600; }
  .vst-msg:empty { display: none; }
  .vst-frestur { text-align: right; white-space: nowrap; }
  .vst-seint .vst-frestur { color: #a30d0d; font-weight: 700; }
  .vst-lokid .vst-verk { font-weight: 400; opacity: .6; text-decoration: line-through; text-decoration-thickness: 1px; }
  .vst-lokid .vst-val, .vst-lokid .vst-frestur { opacity: .6; }

  .vst-groups { display: grid; gap: .5rem; }
  .vst-group summary { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; cursor: pointer; list-style: none; padding: .6rem 0; border-bottom: 2px solid #2e2e2e; text-transform: uppercase; font-size: .8125rem; font-weight: 800; letter-spacing: .12em; }
  .vst-group summary::-webkit-details-marker { display: none; }
  .vst-group summary span:last-child { font-family: "Courier Prime", Courier, monospace; font-weight: 400; letter-spacing: 0; }
  .vst-group summary span:first-child::after { content: " +"; opacity: .55; }
  .vst-group[open] summary span:first-child::after { content: " \u2013"; }
  .vst-group ul { margin-bottom: 1rem; }

  .vst-scroll { overflow-x: auto; }
  .vst-table { border-collapse: collapse; width: 100%; margin-bottom: .75rem; }
  .vst-table th { text-align: left; text-transform: uppercase; font-size: .625rem; font-weight: 700; letter-spacing: .15em; padding: .4rem .75rem .4rem 0; border-bottom: 2px solid #2e2e2e; white-space: nowrap; }
  .vst-table td { padding: .5rem .75rem .5rem 0; border-bottom: 1px solid #2e2e2e40; font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; white-space: nowrap; }
  .vst-table td:first-child { font-family: "Open Sans", sans-serif; font-weight: 600; }
  .vst-table tr.vst-flokkur th { padding-top: 1.25rem; border-bottom: 1px solid #2e2e2e; }
  /* Sta\xF0a p\xF3sts: gr\xE6nt sent, dekkra gr\xE6nt svara\xF0, rautt skoppa\xF0i, f\xF6lna\xF0 sleppt */
  .vst-table tr.vst-st-sent td { background: rgba(40, 160, 50, .16); }
  .vst-table tr.vst-st-svarad td { background: rgba(40, 160, 50, .34); }
  .vst-table tr.vst-st-skoppadi td { background: rgba(200, 30, 30, .14); }
  .vst-table tr.vst-st-sleppt td { opacity: .45; text-decoration: line-through; text-decoration-thickness: 1px; }
  .vst-table td:first-child { padding-left: .5rem; }
  .vst-table th:first-child { padding-left: .5rem; }

  /* Efni: einn b\xFAtur per kort, \xEDslenska og enska hli\xF0 vi\xF0 hli\xF0 */
  .vst-efni { display: grid; gap: 1rem; margin: .75rem 0 1.25rem; }
  .vst-but { border: 1px solid #2e2e2e40; border-radius: .375rem; padding: .9rem 1rem 1rem; background: #ffffff26; display: grid; gap: .6rem; }
  .vst-but-haus { display: flex; justify-content: space-between; align-items: baseline; gap: .5rem 1rem; flex-wrap: wrap; }
  .vst-but-heiti { font-weight: 700; }
  .vst-but-birta { font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; white-space: nowrap; }
  .vst-but-birta.vst-idag { color: #a30d0d; font-weight: 700; }
  .vst-but-lidid { opacity: .6; }
  .vst-but-notur { font-size: .8125rem; opacity: .85; white-space: pre-wrap; }
  .vst-maltextar { display: grid; grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); gap: .75rem; }
  .vst-maltexti { display: grid; gap: .4rem; align-content: start; }
  .vst-mal { text-transform: uppercase; font-size: .625rem; font-weight: 700; letter-spacing: .15em; }
  .vst-texti { margin: 0; white-space: pre-wrap; overflow-wrap: anywhere; font-family: inherit; font-size: .875rem; line-height: 1.55; background: #ffffff59; border-radius: .25rem; padding: .6rem .75rem; max-height: 16rem; overflow-y: auto; }
  .vst-slod { display: flex; align-items: center; gap: .5rem .75rem; flex-wrap: wrap; font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; overflow-wrap: anywhere; }
  .vst-slod a { color: inherit; }
  .vst-mynd { display: block; max-width: 12rem; max-height: 8rem; border-radius: .25rem; box-shadow: 0 1px 3px #0004; }
  .vst .vst-afrita { justify-self: start; display: inline-block; padding: .3rem .8rem; background: #494848; color: #fff; border: 0; border-radius: .25rem; font-family: "Open Sans", sans-serif; font-size: .6875rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; text-decoration: none; cursor: pointer; }
  .vst .vst-afrita:hover { background: #3d3c3c; }
  .vst .vst-afrita.vst-afritad { background: #1f7a24; }

  /* F\xE6rslur: sta\xF0a, breyta og n\xFD f\xE6rsla */
  .vst-eg { display: flex; align-items: center; gap: .5rem; margin-bottom: .75rem; }
  .vst-eg select { width: auto; }
  .vst-but-hlid { display: flex; align-items: center; gap: .5rem .75rem; flex-wrap: wrap; }
  .vst-but-hlid select { width: auto; }
  .vst-but-postad { background: rgba(40, 160, 50, .16); }
  .vst-but-sleppa { opacity: .5; }
  .vst-but-seint { color: #a30d0d; font-weight: 700; }
  .vst-but-breytt { font-size: .75rem; opacity: .7; }
  .vst .vst-but-takki { background: transparent; color: inherit; border: 1px solid #2e2e2e80; }
  .vst .vst-but-takki:hover { background: #ffffff59; }
  .vst-form { display: grid; gap: .6rem; }
  .vst-form label { display: grid; gap: .2rem; font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; }
  .vst-form input, .vst-form textarea { font: inherit; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 400; color: inherit; background: #ffffff8c; border: 1px solid #2e2e2e40; border-radius: .25rem; padding: .45rem .6rem; width: 100%; box-sizing: border-box; }
  .vst-form textarea { min-height: 9rem; resize: vertical; line-height: 1.5; }
  .vst-form textarea.vst-stutt { min-height: 3.5rem; }
  .vst-form-rod { display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: .6rem; }
  .vst-form-takkar { display: flex; gap: .5rem; flex-wrap: wrap; align-items: center; }
  .vst-form small { font-weight: 400; text-transform: none; letter-spacing: 0; opacity: .8; }
  .vst-meta-texti { max-width: 24rem; overflow: hidden; text-overflow: ellipsis; }
  .vst-meta-texti a { color: inherit; }
  .vst-table td.vst-tala { text-align: right; }
  .vst-but-meta { display: flex; flex-wrap: wrap; gap: .25rem 1rem; font-family: "Courier Prime", Courier, monospace; font-size: .875rem; }
  .vst-but-meta a { color: inherit; }

  .vst-foot { display: grid; gap: 1.25rem; }
  .vst-legend { display: flex; flex-wrap: wrap; gap: .5rem 1.5rem; font-size: .8125rem; }
  .vst-legend li { display: flex; align-items: center; gap: .5rem; }
  .vst-keys { display: flex; flex-wrap: wrap; gap: .75rem; }
  .vst .vst-key { display: inline-flex; align-items: center; justify-content: center; min-height: 3rem; padding: .5rem 1.5rem; background-color: #494848; color: #fff; border: 0; border-radius: .25rem; box-shadow: 2px 2px 11px #5f5f5fed; text-decoration: none; text-transform: uppercase; font-family: inherit; font-size: .8125rem; font-weight: 700; letter-spacing: .15em; cursor: pointer; }
  .vst .vst-key:hover { background-color: #3d3c3c; }
  .vst .vst-key:active { transform: translateY(1px); box-shadow: 1px 1px 5px #5f5f5fed; }
  .vst .vst-key:disabled { opacity: .6; cursor: default; }
  .vst a:focus-visible, .vst button:focus-visible, .vst summary:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }

  @media (max-width: 767px) {
    .vst-dymo--red { font-size: 1.5rem; }
    .vst-list li, .vst-group li { grid-template-columns: .75rem minmax(0, 1fr) auto; }
    .vst-val { grid-column: 2 / -1; grid-row: 2; grid-template-columns: repeat(2, minmax(0, 9rem)); margin-top: .15rem; }
    .vst-frestur { grid-column: 3; grid-row: 1; }
  }

  /* ---------- Birtingars\xED\xF0an ---------- */
  .vbt { color: #2e2e2e; font-family: "Open Sans", sans-serif; font-size: 1rem; line-height: 1.5; padding: 0 1rem 5rem; display: grid; gap: 2rem; }
  .vbt [hidden] { display: none !important; }
  .vbt p, .vbt ul { margin: 0; }
  .vbt ul { list-style: none; padding: 0; }
  .vbt a { color: inherit; }
  .vbt-app { display: grid; gap: 3rem; }
  .vbt-small { font-size: .875rem; }
  .vbt-hint { margin-bottom: 1rem; }
  .vbt-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem 2rem; flex-wrap: wrap; }
  .vbt-head .vst-dymo { margin-bottom: 0; }
  .vst-led--ok { background: #18e91c; box-shadow: 0 0 6px #18e91c; }
  .vst-led--bid { background: #f2b632; box-shadow: 0 0 6px #f2b63299; }
  .vst-led--villa { background: #fc0000; box-shadow: 0 0 6px #fc000080; }
  .vst-led--prufa { background: #85a8ac; }

  .vbt-gate { display: flex; flex-wrap: wrap; gap: .75rem; align-items: center; }
  .vbt-gate input { font: inherit; padding: .4rem .6rem; border: 1px solid #2e2e2e60; border-radius: .25rem; background: #ffffff8c; }
  .vbt-msg { color: #a30d0d; font-weight: 600; font-size: .875rem; }
  .vbt-msg:empty { display: none; }
  .vbt-msg--ok { color: #1f7a24; }
  .vbt .vbt-btn { display: inline-block; padding: .45rem 1rem; background: #494848; color: #fff; border: 0; border-radius: .25rem; font: inherit; font-size: .75rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; cursor: pointer; }
  .vbt .vbt-btn:hover { background: #3d3c3c; }
  .vbt .vbt-btn:disabled { opacity: .5; cursor: default; }
  .vbt .vbt-btn--ljos { background: transparent; color: inherit; border: 1px solid #2e2e2e80; }
  .vbt .vbt-btn--ljos:hover { background: #ffffff59; }
  .vbt-link { background: none; border: 0; padding: 0; font: inherit; color: inherit; text-decoration: underline; cursor: pointer; }

  .vbt-rod li { display: grid; grid-template-columns: .75rem 7.5rem 8rem minmax(0, 1fr) auto; gap: .25rem .9rem; align-items: center; padding: .55rem 0; border-bottom: 1px solid #2e2e2e40; }
  .vbt-rod .vbt-timi { font-family: "Courier Prime", Courier, monospace; font-size: .9375rem; }
  .vbt-rod .vbt-heiti { font-weight: 600; min-width: 0; }
  .vbt-rod .vbt-heiti small { display: block; font-weight: 400; font-size: .8125rem; overflow-wrap: anywhere; }
  .vbt-rod .vbt-buid { opacity: .65; }

  .vbt-listi { display: grid; gap: 1.5rem; }
  .vbt-kort { border: 1px solid #2e2e2e40; border-radius: .5rem; padding: 1rem; background: #ffffff26; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 1.25rem; }
  .vbt-kort--postad { background: rgba(40, 160, 50, .12); }
  .vbt-kort-haus { grid-column: 1 / -1; display: flex; justify-content: space-between; gap: .5rem 1rem; flex-wrap: wrap; align-items: baseline; }
  .vbt-kort-haus b { font-size: 1.0625rem; }
  .vbt-merki { font-family: "Courier Prime", Courier, monospace; font-size: .875rem; }
  .vbt-stjorn { display: grid; gap: .7rem; align-content: start; }
  .vbt-stjorn label { display: grid; gap: .2rem; font-size: .6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; }
  .vbt-stjorn input, .vbt-stjorn select, .vbt-stjorn textarea { font: inherit; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 400; color: inherit; background: #ffffff8c; border: 1px solid #2e2e2e40; border-radius: .25rem; padding: .4rem .55rem; width: 100%; box-sizing: border-box; }
  .vbt-stjorn textarea { min-height: 10rem; resize: vertical; line-height: 1.5; }
  .vbt-tvo { display: grid; grid-template-columns: 1fr 1fr; gap: .6rem; }
  .vbt-midlar { display: flex; gap: 1.25rem; flex-wrap: wrap; font-size: .9375rem; }
  .vbt-midlar label { display: flex; flex-direction: row; align-items: center; gap: .4rem; font-size: .9375rem; text-transform: none; letter-spacing: 0; font-weight: 600; }
  .vbt-midlar input { width: auto; }
  .vbt-teljari { font-family: "Courier Prime", Courier, monospace; font-size: .8125rem; font-weight: 400; letter-spacing: 0; text-transform: none; opacity: .8; }
  .vbt-teljari.vbt-of { color: #a30d0d; font-weight: 700; opacity: 1; }
  .vbt-adv { font-size: .8125rem; color: #8a4b00; font-weight: 600; }
  .vbt-adv:empty { display: none; }
  .vbt-takkar { display: flex; gap: .5rem; flex-wrap: wrap; align-items: center; }
  .vbt-fyrri { display: grid; gap: .3rem; font-size: .8125rem; }
  .vbt-fyrri li { display: flex; gap: .5rem; align-items: center; flex-wrap: wrap; }
  .vbt-yfirferd { display: grid; gap: .5rem; padding: .75rem; border: 1px dashed #2e2e2e80; border-radius: .375rem; background: #ffffff40; }
  .vbt .vbt-btn--stadfesta { justify-self: start; background: #1f7a24; }
  .vbt .vbt-btn--stadfesta:hover { background: #18611c; }

  /* Forsko\xF0un: einfaldar eftirmyndir af f\xE6rslu \xE1 Instagram og Facebook */
  .vbt-forsk { display: grid; gap: .75rem; align-content: start; }
  .vbt-skipta { display: flex; gap: .4rem; }
  .vbt-skipta button { font: inherit; font-size: .6875rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: .25rem .6rem; border: 1px solid #2e2e2e80; border-radius: 1rem; background: transparent; color: inherit; cursor: pointer; }
  .vbt-skipta button[aria-pressed="true"] { background: #2e2e2e; color: #fff; }
  .vbt-sima { background: #fff; color: #111; border-radius: .75rem; box-shadow: 0 2px 10px #0003; overflow: hidden; max-width: 22rem; font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: .8125rem; line-height: 1.35; }
  .vbt-sima-haus { display: flex; align-items: center; gap: .5rem; padding: .55rem .7rem; font-weight: 600; }
  .vbt-sima-haus i { width: 1.75rem; height: 1.75rem; border-radius: 50%; background: #75161c; flex: 0 0 auto; }
  .vbt-sima-haus small { display: block; font-weight: 400; color: #65676b; font-size: .6875rem; }
  .vbt-sima-mynd { background: #ddd; display: grid; place-items: center; color: #777; aspect-ratio: 4 / 5; overflow: hidden; }
  .vbt-sima-mynd img, .vbt-sima-mynd video { width: 100%; height: 100%; object-fit: cover; display: block; }
  .vbt-sima--fb .vbt-sima-mynd { aspect-ratio: auto; min-height: 8rem; }
  .vbt-sima--fb .vbt-sima-mynd img, .vbt-sima--fb .vbt-sima-mynd video { height: auto; max-height: 26rem; object-fit: contain; }
  .vbt-sima-texti { padding: .55rem .7rem .7rem; white-space: pre-wrap; overflow-wrap: anywhere; }
  .vbt-sima-texti b { margin-right: .3rem; }
  .vbt-sima-texti span.vbt-meira { color: #737373; }
  .vbt-sima--story { position: relative; max-width: 15rem; background: #111; }
  .vbt-sima--story .vbt-sima-mynd { aspect-ratio: 9 / 16; background: #222; color: #aaa; }
  .vbt-sima--story .vbt-sima-haus { position: absolute; top: 0; left: 0; right: 0; color: #fff; background: linear-gradient(#0008, transparent); }
  .vbt-sima-takkar { padding: .45rem .7rem 0; font-size: 1.05rem; letter-spacing: .4rem; }

  @media (max-width: 767px) {
    .vbt-kort { grid-template-columns: 1fr; }
    .vbt-rod li { grid-template-columns: .75rem 1fr auto; }
    .vbt-rod .vbt-heiti { grid-column: 2 / -1; }
  }

  /* ---------- Pressus\xED\xF0an (.vpp) ---------- */
  /* Sami grunnur og /nafir: beige t\xE6ki\xF0, d\xF6kkir skj\xE1ir, Dymo-mi\xF0ar */

  .vpp { color: var(--black-800, #2e2e2e); font-family: "Open Sans", sans-serif; font-size: 1rem; font-weight: 400; line-height: 1.6; padding: 0 1rem 5rem; display: grid; gap: 3rem; }
  .vpp [hidden], [data-promo-state][hidden] { display: none !important; }
  /* Tv\xF6 m\xE1l: enska nema data-mal="is" s\xE9 \xE1 .vpp. Me\xF0an be\xF0i\xF0 er eftir m\xE1li
     vi\xF0takandans er textinn falinn svo enskan blikki ekki \xE1 undan \xEDslenskunni */
  .vpp:not([data-mal="is"]) [data-mal="is"], .vpp[data-mal="is"] [data-mal="en"] { display: none !important; }
  .vpp[data-mal-bidur] [data-mal] { visibility: hidden; }

  .vpp-head-right { display: flex; align-items: center; gap: .75rem; }
  .vpp-mal { display: flex; border-radius: 4px; overflow: hidden; border: 1px solid #3d3c3c; }
  .vpp-mal button { appearance: none; border: 0; margin: 0; background: transparent; color: #3d3c3c; font: inherit; font-size: .75rem; font-weight: 800; letter-spacing: .15em; text-indent: .15em; padding: .25rem .6rem; cursor: pointer; }
  .vpp-mal button[aria-pressed="true"] { background: #3d3c3c; color: #fff; }
  .vpp-mal button:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }
  .vpp p, .vpp h1, .vpp ol, .vpp ul, .vpp dl, .vpp dd { margin: 0; }
  .vpp a { color: inherit; }

  .vpp-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .vpp-dymo { font-family: Dymo, Arial, sans-serif; font-size: 1.625rem; line-height: 1.4; font-weight: 400; color: var(--black-800, #2e2e2e); user-select: none; margin-bottom: .75rem; }
  .vpp-head .vpp-dymo { margin-bottom: 0; }
  .vpp-dymo--red { color: var(--vogor-red, #75161c); font-size: 2rem; }
  .vpp-counter { display: inline-flex; align-items: center; justify-content: center; background: #3d3c3c; color: #fff; border-radius: 4px; padding: .25rem .75rem; font-weight: 800; letter-spacing: .3em; text-indent: .3em; font-size: .875rem; }
  .vpp-counter--code { letter-spacing: .15em; text-indent: .15em; margin-left: .25rem; }

  .vpp-top { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 2.5rem; align-items: start; }
  .vpp-screen { background-color: #494747; background-image: linear-gradient(#ffffff14, #ffffff05 10%, #0000000a); border-radius: .5rem; padding: clamp(.75rem, 3vw, 1.75rem); box-shadow: inset 0 1px #ffffff1f, 0 1px 2px #0003; }
  .vpp-screen img { display: block; width: 100%; height: auto; border-radius: 2px; }

  .vpp-info { display: grid; gap: 1.25rem; }
  .vpp-artist { text-transform: uppercase; letter-spacing: .2em; font-weight: 700; font-size: .875rem; }
  .vpp-title { font-size: clamp(3rem, 8vw, 4.5rem); line-height: 1; font-weight: 800; letter-spacing: -.02em; margin-top: -.75rem; }

  .vpp-meta { display: grid; gap: .35rem; font-family: "Courier Prime", Courier, monospace; }
  .vpp-meta > div { display: flex; gap: 1rem; border-bottom: 1px solid #2e2e2e40; padding-bottom: .35rem; }
  .vpp-meta dt { flex: 0 0 6.5rem; font-family: "Open Sans", sans-serif; text-transform: uppercase; font-size: .625rem; font-weight: 700; letter-spacing: .15em; align-self: center; }

  .vpp-personal { display: grid; gap: .75rem; padding-top: .5rem; }
  .vpp-personal > div { display: grid; gap: .75rem; }
  .vpp-status { display: flex; align-items: center; gap: .6rem; text-transform: uppercase; font-size: .75rem; font-weight: 700; letter-spacing: .12em; }
  .vpp-led { flex: 0 0 auto; width: .75rem; height: .75rem; border-radius: 50%; border: 1px solid #2e2e2e80; background: #6b665c; }
  .vpp-led--ok { background: var(--play-green, #18e91c); box-shadow: 0 0 8px var(--play-green, #18e91c); }
  .vpp-led--stop { background: var(--stopp-red, #fc0000); box-shadow: 0 0 8px #fc000080; }
  .vpp-led--wait { background: #f2b632; animation: vpp-blink 1s steps(2, start) infinite; }
  @keyframes vpp-blink { to { visibility: hidden; } }
  @media (prefers-reduced-motion: reduce) { .vpp-led--wait { animation: none; } }

  .vpp-keys { display: flex; flex-wrap: wrap; gap: .75rem; }
  .vpp a.vpp-key { flex: 1 1 8rem; display: flex; align-items: center; justify-content: center; min-height: 3rem; padding: .5rem 1rem; background-color: #494848; color: #fff; border-radius: .25rem; box-shadow: 2px 2px 11px #5f5f5fed; text-decoration: none; text-transform: uppercase; font-size: .8125rem; font-weight: 700; letter-spacing: .15em; transition: transform .08s, box-shadow .08s; }
  .vpp a.vpp-key:hover { background-color: #3d3c3c; }
  .vpp a.vpp-key:active { transform: translateY(1px); box-shadow: 1px 1px 5px #5f5f5fed; }
  .vpp a:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }
  .vpp-note, .vpp-small { font-size: .875rem; }

  .vpp-prose { display: grid; gap: 1rem; max-width: 42rem; }
  .vpp-quote { margin: 0; padding-left: 1rem; border-left: 2px solid #2e2e2e40; font-style: italic; }
  .vpp-quote footer { margin-top: .5rem; font-style: normal; font-family: "Courier Prime", Courier, monospace; font-size: .85em; }
  .vpp-quote footer::before { content: "\u2014 "; }
  .vpp-quote--kit { font-size: .9375rem; margin-bottom: 2rem; }
  .vpp-sides { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.5rem; align-items: start; }
  .vpp-tracks, .vpp-credits, .vpp-links { list-style: none; padding: 0; font-family: "Courier Prime", Courier, monospace; }
  .vpp-tracks { counter-reset: vpp-track calc(var(--start, 1) - 1); }
  .vpp-tracks[start="5"] { --start: 5; }
  .vpp-tracks li { counter-increment: vpp-track; border-bottom: 1px solid #2e2e2e40; }
  /* Hvert lag er details-element: lagalistinn er l\xEDka textabla\xF0i\xF0 */
  .vpp-tracks summary { display: flex; justify-content: space-between; gap: 1rem; padding: .4rem 0; cursor: pointer; list-style: none; }
  .vpp-tracks summary::-webkit-details-marker { display: none; }
  .vpp-tracks summary span:first-child::before { content: counter(vpp-track) ". "; }
  .vpp-tracks summary span:first-child::after { content: " +"; opacity: .55; }
  .vpp-tracks details[open] summary span:first-child::after { content: " \u2013"; }
  .vpp summary:focus-visible { outline: 2px solid var(--vogor-red, #75161c); outline-offset: 2px; }
  .vpp-lyric { display: grid; gap: .75rem; padding: .25rem 0 1rem 1.75rem; font-family: "Open Sans", sans-serif; font-size: .875rem; }
  .vpp-hint { margin-top: -2rem; }
  .vpp-credits li, .vpp-links li { border-bottom: 1px solid #2e2e2e40; padding: .4rem 0; }
  .vpp-credits li > span, .vpp-links li > span { display: block; font-family: "Open Sans", sans-serif; font-size: .8125rem; opacity: .8; }
  .vpp-credits + .vpp-small { margin-top: 1rem; }
  .vpp-links { margin-bottom: 2rem; }
  .vpp-photo { display: block; width: 100%; height: auto; border-radius: 2px; margin-bottom: .75rem; }

  @media (max-width: 767px) {
    .vpp { gap: 2.25rem; }
    .vpp-top, .vpp-sides { grid-template-columns: minmax(0, 1fr); gap: 1.75rem; }
    .vpp-dymo--red { font-size: 1.5rem; }
  }

  /* ---------- Stj\xF3rns\xED\xF0an (.vp): \xFAtlit Webflow-s\xED\xF0unnar, enginn beige grunnur ---------- */
  .vp { max-width: 60rem; margin: 0 auto; display: grid; gap: 1rem; font: inherit; }
  .vp #vp-app { display: grid; gap: 1rem; }
  .vp [hidden] { display: none !important; }
  .vp-card { border: 1px solid rgba(128, 128, 128, .4); border-radius: 8px; padding: 1rem; display: grid; gap: .75rem; }
  .vp-row { display: flex; flex-wrap: wrap; gap: .75rem; align-items: end; }
  .vp-between { justify-content: space-between; align-items: center; }
  .vp label { display: grid; gap: .25rem; font-size: .85em; flex: 1 1 12rem; }
  .vp input, .vp select, .vp textarea { font: inherit; padding: .5rem; border: 1px solid rgba(128, 128, 128, .6); border-radius: 4px; width: 100%; box-sizing: border-box; background: transparent; color: inherit; }
  .vp textarea { font-family: ui-monospace, Consolas, monospace; font-size: .85em; }
  .vp button { font: inherit; padding: .5rem 1rem; border: 1px solid currentColor; border-radius: 4px; background: transparent; color: inherit; cursor: pointer; justify-self: start; }
  .vp button:disabled { opacity: .5; cursor: default; }
  .vp-scroll { overflow-x: auto; }
  .vp table { border-collapse: collapse; width: 100%; font-size: .85em; }
  .vp th, .vp td { text-align: left; padding: .4rem .6rem; border-bottom: 1px solid rgba(128, 128, 128, .3); white-space: nowrap; }
  .vp tbody tr { cursor: pointer; }
  .vp tbody tr:hover { background: rgba(128, 128, 128, .12); }
  /* Sta\xF0a l\xEDnu: h\xE1lfgagns\xE6ir litir svo \xFEeir virki \xE1 lj\xF3sum og d\xF6kkum bakgrunni */
  .vp tbody tr.vp-st-sent { background: rgba(40, 180, 60, .13); }
  .vp tbody tr.vp-st-svarad { background: rgba(40, 180, 60, .3); }
  .vp tbody tr.vp-st-skoppadi { background: rgba(220, 40, 40, .15); }
  .vp tbody tr.vp-st-sleppt { opacity: .45; }
  .vp tbody tr.vp-st-sent:hover, .vp tbody tr.vp-st-svarad:hover, .vp tbody tr.vp-st-skoppadi:hover { filter: brightness(1.1); }
  .vp tbody tr.vp-flokkur { cursor: default; }
  .vp tbody tr.vp-flokkur:hover { background: none; }
  .vp tr.vp-flokkur th { padding-top: 1rem; font-size: .8em; text-transform: uppercase; letter-spacing: .08em; border-bottom: 2px solid rgba(128, 128, 128, .6); }
  .vp-status { font-size: .85em; }
  .vp a { align-self: center; }
  /* Webflow feitletrar label, og reitirnir erfa \xFEa\xF0 me\xF0 font: inherit */
  .vp input, .vp select, .vp textarea { font-weight: 400; }
  #vp-post textarea#vp-p-meginmal { font-family: inherit; font-size: 1em; line-height: 1.5; }
  .vp details form { display: grid; gap: .75rem; }
  .vp summary { cursor: pointer; }
  /* Fimm fellilistar \xED einni r\xF6\xF0 \xED sta\xF0 \xFEess a\xF0 s\xE1 s\xED\xF0asti detti ni\xF0ur */
  #vp-post .vp-row label { flex-basis: 8rem; }

  /* ---------- Lei\xF0arstikan (sameiginlegt.js, leidir) ---------- */
  .vogor-leidir { display: flex; flex-wrap: wrap; gap: .5rem; margin: 0 0 1rem; }
  .vogor-leidir a { font-family: Dymo, Arial, sans-serif; font-size: 1.125rem; line-height: 1.3; padding: .15rem .55rem; border-radius: .2rem; background: #2e2e2e; color: #ece5d6; text-decoration: none; letter-spacing: .02em; box-shadow: 0 1px 0 #00000040; }
  .vogor-leidir a:hover { background: #4a4a4a; }
  .vogor-leidir a[aria-current="page"] { background: var(--vogor-red, #75161c); color: #fff; }
  .vogor-leidir a:focus-visible { outline: 2px solid #e9b64c; outline-offset: 2px; }

  /* ---------- Dropbox-glugginn \xE1 birtingars\xED\xF0unni (dropboxVelja.js) ---------- */
  .vbt-dbx-takkar { margin-top: -.3rem; }
  .vbt-dbx { width: min(36rem, calc(100vw - 2rem)); max-height: 80vh; padding: 1rem; border: 1px solid #2e2e2e60; border-radius: .5rem; background: #e6dcc7; color: #2e2e2e; font-family: "Open Sans", sans-serif; font-size: .9375rem; }
  .vbt-dbx::backdrop { background: #0000004d; }
  .vbt-dbx .vbt-link { background: none; border: 0; padding: 0; font: inherit; color: inherit; text-decoration: underline; cursor: pointer; }
  .vbt-dbx .vbt-small { font-size: .8125rem; margin: .25rem 0 .5rem; }
  .vbt-dbx .vbt-msg { color: #a30d0d; font-weight: 600; }
  .vbt-dbx-haus { display: flex; gap: 1rem; align-items: baseline; }
  .vbt-dbx-haus b { flex: 1; overflow-wrap: anywhere; }
  .vbt-dbx-listi { list-style: none; margin: 0; padding: 0; display: grid; gap: .25rem; overflow-y: auto; max-height: calc(80vh - 6rem); }
  .vbt-dbx-listi button { display: flex; align-items: center; gap: .75rem; width: 100%; text-align: left; font: inherit; color: inherit; background: #ffffff8c; border: 1px solid #2e2e2e30; border-radius: .3rem; padding: .35rem .5rem; cursor: pointer; }
  .vbt-dbx-listi button:hover:not(:disabled) { background: #fff; }
  .vbt-dbx-listi button:disabled { opacity: .45; cursor: default; }
  .vbt-dbx-thumb { flex: 0 0 3rem; height: 3rem; border-radius: .2rem; background: #2e2e2e center / cover no-repeat; color: #ece5d6; font-size: .6875rem; font-weight: 700; display: grid; place-items: center; }
  .vbt-dbx-nafn { min-width: 0; overflow-wrap: anywhere; }
  .vbt-dbx-nafn small { display: block; opacity: .7; font-size: .75rem; }
`;var fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABK2lDQ1BJQ0MgUHJvZmlsZQAAeJyVkT9Lw0AYh5+LouKgFUQcHDKJgmKjDmZMq4ggWKtD2635Q5TSJFyuaj+Eo1sHF3c/gZOj4KD4CfwGilMHuUTI4FD6LPfcj5f37t4Do+zsVw6MEnQjJeuHFbPRbJnTr0wxQUbbSxOnVjvWHsVRwD9+PhB6fdvUvRiPWS+RChgC236QeiDKQOdaJQrEAFh0O5k/apfn9SqIZ2AuzP1du5v7p3bZaLZAfOv6MHNjJuuT+4p2Fdzoc6nGSV9ehhfKtGzbNh0/dgPzrJ+qoJuaR5EXyySWbRX4QH6/jIW8UE9szbLtvfUx3z0S/Q+5fZ1m8xVLL0VW4PXk1Z8KY2f0vugxWIaTB5gcFtnuLdxvwPxdka1aUNqCp8EvwMZP/XkTGdQAAAkJSURBVHjaBcHJjl3XdQDQffpz29dWR7JKRVEUZUmG4ViwJs7ACdL8RwIE/jUPMs3EgBHACALEUgDHUSRDJEWx+nrdfe92p9s7a7Hf/Ppzc3ppiqKWYtXsVfK7fXO12QOwhCg4JwYAwBA4ZwCMAI/zQkn+7eP+etcqxurCvr3f/dMvbTumr2/VyWIy+hFiaClnAFIGRyl0fecR0bu+P1CIR7kZU4op1LmdZrXW3AJiSpqDYrzxqfX4tDbzadm2/VTAvZKaw4uFnufAtItIGuj9wRmKMiVGKXYhAmLFotBMkAjOF4VhzHIQTQgUOSXctX2u2K/O50CEwGcoDTEvxfnE/LDrXj+4yymAFOh6YLBPWPA++CQlwHa9efLBJQClbte1EZHyzD728cNpnUvugZwLXUJB9Paxvd31XxwVp9OCoUgJtm0fa73I1e9+6DCOmKJk3BOLREjAEMWnH55hUQsi8GNdFIXUA7Kv39wJH54fzQDRO284t1pVWpxXph3df13vqsKeVsX9vu2GMWestPKzD6YxBOecVUJJIQTTgnEgCUyWWSa5SBET0dOLS7ndvdo0F4tpndlDcMt6BgRZpmLvb7f7nz01Rm3/8G6FICqjLuosEhJyjclKRghMMG00S4iIgCi+eH7GlJpNaptnhTUJOQVX5tl8MkEibWxRl0WuXcA8My5i46OVYje4ZnDLTAvBGheBgVRsd3Db1gkOjIsizzJjGBHXRjPO3dArBvsRc82dc1pKxtjAeDktOGFmVZ2bAeHseHE0qUyeX85qRnC173cuVpkmxro+WiEYYwTMu8gABjfGGCT5FBR2PLJ+yIpq045911d5po0sOVOMlBH7NhzXNhHc94EbM+UEwXNMd4OzCqTkglQYhplRCZErxYXgTAffMQbSt12f6PLiYzK02m2MkALYNNMQY8aBIwEwK1nTO2SggIQRY+Q203kviqiEYDGilIJrpaMnxjmDSck638YQhQAOiDMIYnfnu/FuvSsY5ZnmTOxbt9oPWsrcCj+MPCUew2kuJUAEMEpHhsgQmUoJKUTOBCPQnBiGfTOG/iBYohj5QAQhrHY324frQittdVUXXDKj2NQqI9hufRj7UTHGkIiLSmtLhCmWmXHOIwMlBY/JaDZfVL0LzRhaHwaPY4jtGGQboxZUlIUU/Lvrh3ldHktZl6pGdbdugcF90wcGV1ePg/fLujzKzejiEOIQqVDcu1HUed+PLMKrTxdfrs7afkSPPhERZpkUXz5b9EQnZf7y4vSrqxWkWGU2JQJgzTA6F5bL6X++vf63//6f1w/br3+4VQrO57O73v3H97fN6LXgk9w4Hy8mdrbMfvJ0NomkZZ1Zq4FOMsV9ojrLLOHpLPvF5dn72w0hCqVer/blZHLvEgL8+qcvPnn29Mkk74b++/td54IA6Pr+vtn/5X7rU5rmhgAyq99/d/PVm/19jFufmLY360H86vzY5ryQ1AK8fP7BH795r3J9Opvc7ppvbm6UtXOtS2sWi3kb8MmsfHUyn0p+uagT583ovEvPFpOjPOMMz0/st3++9dJsvXu33nYJreLy4mTKoPMxZT5ux8RyHZrd5jFfH4bTcvLydJkxGAZXc3i1LGfZ7Nhmj83hD29uq9xeTCc7E1xMxuon04x7TyHm0r6QHK3auL7Thkc2emmMzp7lcnh4OHly7FAcS5clfLduNvtxJN7HuNu3S62jw/0Qv7pe/+sfv1kduo9nhaG07rppJc6mWaaExLR6XFejm0hxapUjEn//aiGJoZDnp0utxKDyq95bhIvFZOXifdMRYKE4EK36vu36u3b439uHrhsWk4IH93p7+PKjk786n9097OZHlsf053fbA3BP6QC8CST+5ZefExcrx1gS8zp/tpAHZq+33UVVXJ4ulaIu4KKwjKDOsrO63IfU+TB6/+K4vG3Di+PZP3x+IZEMD1wRaH22KFquxkRdoqVioioyz+Jffwj9PnXZ4otP7O0BVwdcFkJpzYSYKFlnejkpHlvHBGcI8zK/PD0Z3GiN+psXk9McuhFynvKaA3JbmvO5+WBpXh5nr84y+ds/vfu7z5b/vMhERD1Zh1AttOdC5pOceZJMFLl6t2kMZwLxvl3dtWtM/OBViPjhkbEydlHe927OfRpEM6R9F9uQXIyAaXBRLjO1d9ljL/dBlC27en339kbtutBjNVXiqFTbXfuXm+35PM+pP2M//GLeEolIbNPnyqoLjtv16sf71Njq4U1732KuRW645mIMCPlERkqa871/clJ99/XDcQIYg5eMdp2rZ5MfN61M8dOPziohDh3JbrwECIL/qRWXFZ1pNxxuU6qeT8uth6Nc7WKyAkolJeOZsVTUEkAI6NClLSuVfHzfVG3qzqpiOwSIG2SCM+iH0TEVxvbn0nlPCmjq+LeBjwWvJNuQefQKMLQ+WiUkJA2YkHGtPBKPxDPqz+13//doH0eBnJo+vVs3Y4jrtofgAiSKYd/trZn8mGZvqHgvy1cnNpC+xlJVM0FpKQdDjoCFBI4pEDKlGP2AwYtpaeZ5FuXpqGeC6YCJcbY+jJnRLqZvfrzRnDfdcLPerfbdtatu4uJxZP/+yH9/KyaTkmWLx5HfHtL1AEakn+W7Mz1UtC9Yp+I2G++lYNQRvx3gZrud5ubIKM7gcpkTOWPFIZP3TSsBRh9zJTbtuKK0sfy6EwurTox+vQ1j4JzbEb3k8aPCbRyOETFSxhA5yhSJU/jby2rP5lf7bjwMFwLuUNz1o2sOJ7VeD8kIfpZVrQ9rSF0QRGmR8X/87Gml1fXNmjOmpFCSDyE54ol4wvi2oYdMVzJK4OSjCFH1h02duGZs45NMNOVi0GazdyPjbULGUQIeWWUxVDw+P84XpX3/eKi04QIjUm5MDYMAyICuMTZWcAQAI5EIgCQQS8Eww4EGxr7v+sgo5zwlJIyFkpXgixBLxE6kFEeZhEQqhDyqjaR0s2mU5B/PSpm2GfKksejZzT6aqZQIEBPGGDCGGJFzNuNwLmGTMCZaSPYuwBJwlujlT14U1hQ296Epp4Wy5aui3F5dNYcmZgZNVhUt7KmQchTwyOiTfPI+uv8HxIutAeRDZhQAAAAASUVORK5CYII=";function vt(l){try{return localStorage.getItem(l)||""}catch{return""}}function ot(l,r){try{r?localStorage.setItem(l,r):localStorage.removeItem(l)}catch{}}function Ct(l,r){let f=new URL(location.href),i=(f.searchParams.get(l)||"").trim();if(!i)return{lykill:vt(r),nyr:!1};ot(r,i),f.searchParams.delete(l);try{history.replaceState(history.state,"",f.href)}catch{}return{lykill:i,nyr:!0}}var me="Ekkert samband.";function Ot(l,r){return fetch(l,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(r)}).then(f=>f.json().catch(()=>{throw new Error("Bakendinn svara\xF0i ekki eins og hann \xE1 a\xF0 gera.")}),()=>{throw new Error(me)})}var Ge="https://script.google.com/macros/s/AKfycbw_fE_lhJqAbaLME9HlFK0A5LG_VL502y0AeKwSyC6A_fmCnRonmV4fAMfD3Pllg-_b/exec",Je="https://script.google.com/macros/s/AKfycbyHTw5yNxSQ48jXRgyBaRf58Tfox5MirIsKOJS0VzXPeGCfsa3ceZ05FoUALRyaHD-W/exec",Kt=new URLSearchParams(location.search).has("prufa")?Je:Ge,Rt=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],ve="https://script.google.com/macros/s/AKfycbzhu2dxScQqe5HT7wZZpdpOntDxWffkgORO0n7YH9fLs0K39h9g6LVUUXICe6F93iI2/exec";function yt(l,r){return Ot(r||Kt,l)}function e(l,r,f){var i=document.createElement(l);return r&&(i.className=r),f!=null&&(i.textContent=f),i}function jt(l,r,f){var i=e("a",r,f);return i.href=l,i.target="_blank",i.rel="noopener",i}function St(l,r){r.hasAttribute("data-merki")||r.setAttribute("data-merki",r.textContent);function f(){r.textContent="Afrita\xF0",r.classList.add("vst-afritad"),setTimeout(function(){r.textContent=r.getAttribute("data-merki"),r.classList.remove("vst-afritad")},1500)}function i(){var L=e("textarea");L.value=l,L.setAttribute("readonly",""),L.style.position="fixed",L.style.opacity="0",document.body.appendChild(L),L.select();try{document.execCommand("copy")&&f()}catch{}document.body.removeChild(L)}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(f,i):i()}function Gt(l,r){var f=e("button","vst-afrita",r||"Afrita");return f.type="button",f.setAttribute("data-merki",f.textContent),f.addEventListener("click",function(){St(l,f)}),f}function Et(l){try{var r=new URL(l);return/(^|\.)dropbox\.com$/.test(r.hostname)?(r.searchParams.delete("dl"),r.searchParams.set("raw","1"),r.href):l}catch{return l}}function ge(l){var r=/\.([a-z0-9]+)$/i.exec(String(l||"").split(/[?#]/)[0]),f=r?r[1].toLowerCase():"";return{e:f,t:/^(jpe?g|png|gif|webp)$/.test(f)?"mynd":/^(mp4|mov|m4v)$/.test(f)?"myndband":""}}function he(){Array.prototype.forEach.call(document.querySelectorAll('link[rel~="icon"]'),function(r){r.parentNode.removeChild(r)});var l=document.createElement("link");l.rel="icon",l.type="image/png",l.href=fe,document.head.appendChild(l)}var ce={nafir:[["Yfirlit","/nafir/stada"],["Birta","/nafir/birta"],["Mixer","/nafir/4track"]],per:[["Augl\xFDsingar","/per/auglysingar"],["Birta","/per/birta"],["\xC6fing","/per/jolamixer"]]};function be(l){var r=ce[l]||ce.nafir,f=location.pathname.replace(/\/$/,""),i=e("nav","vogor-leidir");return i.setAttribute("aria-label","S\xED\xF0ur verkefnisins"),r.forEach(function(L){var G=e("a","","|"+L[0].toUpperCase().replace(/ /g,"|")+"|");G.href=L[1],L[1]===f&&G.setAttribute("aria-current","page"),i.appendChild(G)}),i}var ke=`<div class="vst">
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
</div>
`;function ye(l){l.innerHTML=ke;var r="vogor-band-key",f="vogor-band-nafn",i={Loki\u00F0:"done","\xCD vinnslu":"work",B\u00ED\u00F0ur:"hold"},L=["\xD3byrja\xF0","\xCD vinnslu","B\xED\xF0ur","Loki\xF0"],G={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"};function w(t){return l.querySelector('[data-st="'+t+'"]')}function Y(t){Array.prototype.forEach.call(l.querySelectorAll("[data-st-state]"),function(o){o.hidden=o.getAttribute("data-st-state")!==t})}var Z=Ct("b",r).lykill;function q(t){var o=/^(\d{4})-(\d\d)-(\d\d)$/.exec(t||"");return o?new Date(Number(o[1]),Number(o[2])-1,Number(o[3])):null}function _(t){var o=q(t);return o?o.getDate()+". "+Rt[o.getMonth()]:t||""}var J=new Date;J.setHours(0,0,0,0);function O(t){var o=q(t);return o?Math.round((o-J)/864e5):null}function U(t,o,b){var y=O(o);y!=null&&(w("dagar-"+t).textContent=y>0?y:"0",w("texti-"+t).textContent=y>1?"dagar \xED "+b:y===1?"dagur \xED "+b:y===0?b+" \xED dag":b+" komi\xF0")}function j(t){var o=t.stada==="Loki\xF0",b=O(t.frestur),y=!o&&b!=null&&b<0,m=e("li",o?"vst-lokid":y?"vst-seint":""),a=e("span","vst-led"+(y?" vst-led--late":i[t.stada]?" vst-led--"+i[t.stada]:""));a.title=y?t.stada+", komi\xF0 fram yfir frest":t.stada,m.appendChild(a);var n=e("span","vst-verk",t.verk);t.notur&&!o&&n.appendChild(e("small","",t.notur)),m.appendChild(n);var s=e("span","vst-val");return s.appendChild(A(t,"stada",L,"Sta\xF0a verksins: ")),s.appendChild(A(t,"hver",[""].concat(S.band||[]),"Hver \xE1 verki\xF0: ")),m.appendChild(s),m.appendChild(e("span","vst-frestur",_(t.frestur))),m}function A(t,o,b,y){var m=e("select");return m.setAttribute("aria-label",y+t.verk),b.indexOf(t[o])===-1&&(b=b.concat([t[o]])),b.forEach(function(a){var n=e("option","",a||"Enginn");n.value=a,m.appendChild(n)}),m.value=t[o],m.addEventListener("change",function(){k(t,o,m)}),m}function k(t,o,b){var y={action:"bandBreyta",b:Z,rod:t.rod,verk:t.verk};y[o]=b.value,b.disabled=!0,w("skilabod").textContent="",yt(y).then(function(m){if(!m.ok)throw new Error(m.villa||"Hlekkurinn gildir ekki lengur.");t.hver=m.hver,t.stada=m.stada}).catch(function(m){w("skilabod").textContent="T\xF3kst ekki a\xF0 vista. "+m.message}).then(function(){$(S)})}var S={};function $(t){S=t,U("preorder",t.preorder,"pre-order"),U("utgafa",t.utgafa,"\xFAtg\xE1fu");var o=t.verkefni.length,b=t.verkefni.filter(function(E){return E.stada==="Loki\xF0"}).length;w("hlutfall").textContent=b+" / "+o;var y=w("maelir");y.textContent="",y.setAttribute("aria-label",b+" af "+o+" verkum loki\xF0");for(var m=0;m<o;m++)y.appendChild(e("span",m<b?"on":""));var a=w("naest");a.textContent="",t.verkefni.filter(function(E){return E.stada!=="Loki\xF0"&&q(E.frestur)}).sort(function(E,P){return q(E.frestur)-q(P.frestur)}).slice(0,7).forEach(function(E){a.appendChild(j(E))}),a.children.length||a.appendChild(e("li","","Ekkert \xE1 dagskr\xE1 me\xF0 fresti."));var n=w("hopar"),s={};Array.prototype.forEach.call(n.children,function(E){s[E.getAttribute("data-flokkur")]=E.open}),n.textContent="";var v=[],C={};t.verkefni.forEach(function(E){var P=E.flokkur||"Anna\xF0";C[P]||(C[P]=[],v.push(P)),C[P].push(E)}),v.forEach(function(E){var P=C[E],V=P.filter(function(st){return st.stada==="Loki\xF0"}).length,nt=e("details","vst-group");nt.setAttribute("data-flokkur",E),nt.open=E in s?s[E]:V<P.length;var ut=e("summary");ut.appendChild(e("span","",E)),ut.appendChild(e("span","",V+"/"+P.length)),nt.appendChild(ut);var ft=e("ul");P.forEach(function(st){ft.appendChild(j(st))}),nt.appendChild(ft),n.appendChild(nt)});var I=w("pressa");I.textContent="";var B=null,tt=t.pressa.some(function(E){return E.flokkur});if(t.pressa.forEach(function(E){if(tt&&(E.flokkur||"")!==B){B=E.flokkur||"";var P=e("tr","vst-flokkur"),V=e("th","",B||"\xD3flokka\xF0");V.colSpan=7,P.appendChild(V),I.appendChild(P)}var nt=e("tr",G[E.stada||"Sent"]?"vst-st-"+G[E.stada||"Sent"]:"");nt.appendChild(e("td","",E.midill)),nt.appendChild(e("td","",E.stada||"Sent")),nt.appendChild(e("td","",E.hver||"\u2013")),nt.appendChild(e("td","",_(E.sent)||"\u2013")),nt.appendChild(e("td","",E.opnad?_(E.opnad)+(E.opnanir>1?" ("+E.opnanir+"\xD7)":""):"\u2013")),nt.appendChild(e("td","",_(E.hlusta)||"\u2013")),nt.appendChild(e("td","",_(E.saekja)||"\u2013")),I.appendChild(nt)}),!t.pressa.length){var R=e("td","","Enginn \xE1 markh\xF3pslistanum enn\xFE\xE1.");R.colSpan=7,I.appendChild(e("tr")).appendChild(R)}it(t.band||[]),X(t.meta),Q(t.efni||[]),t.stream?w("stream").href=t.stream:w("stream").hidden=!0,w("uppfaert").textContent=t.uppfaert}var at=/\.(jpe?g|png|gif|webp)$/i,d=/\.(mp4|mov|m4v|webm)$/i,c="Samf\xE9lagsmi\xF0lar",p=["Dr\xF6g","Sam\xFEykkt","P\xF3sta\xF0","Sleppa"],M={P\u00F3sta\u00F0:"postad",Sleppa:"sleppa"};function F(t){try{var o=new URL(t);return{nafn:decodeURIComponent(o.pathname.split("/").pop()||""),dropbox:/(^|\.)dropbox\.com$/.test(o.hostname),u:o}}catch{return{nafn:"",dropbox:!1,u:null}}}function T(t){var o=F(t.slod),b=e("div","vst-slod");if(at.test(o.nafn)){var y=e("img","vst-mynd");y.src=Et(t.slod),y.alt=t.heiti||"",y.loading="lazy";var m=jt(t.slod);m.appendChild(y),b.appendChild(m),b.appendChild(jt(t.slod,"vst-afrita","Opna \xED fullri st\xE6r\xF0"))}else if(o.dropbox){var a=/\/fo\//.test(o.u.pathname)?"Mappa \xED Dropbox":(d.test(o.nafn)?"Myndband: ":"Dropbox: ")+o.nafn;b.appendChild(jt(t.slod,"",a))}else b.appendChild(jt(t.slod,"",t.slod.replace(/^https?:\/\/(www\.)?/,"")));return b.appendChild(Gt(t.slod,"Afrita hlekk")),b}function D(t,o){var b=e("button","vst-afrita"+(o?" "+o:""),t);return b.type="button",b}function H(t){return t.b=Z,yt(t).catch(function(o){return{ok:!1,villa:o.message}})}function z(){return w("eg").value}function et(t,o){for(var b=S.efni||[],y=0;y<b.length;y++)b[y].id===t.id&&(b[y]=t);var m=dt(t);return o.parentNode.replaceChild(m,o),m}function dt(t){var o=t.flokkur===c,b=!/^md-/.test(t.id),y=e("article","vst-but"+(o&&M[t.stada]?" vst-but-"+M[t.stada]:"")),m=e("div","vst-but-haus");m.appendChild(e("span","vst-but-heiti",t.heiti||"\xC1n heitis"));var a=e("span","vst-but-hlid");if(t.birta){var n=O(t.birta),s=t.stada==="P\xF3sta\xF0"||t.stada==="Sleppa",v=o&&!s&&n!=null&&n<0;a.appendChild(e("span","vst-but-birta"+(n===0?" vst-idag":"")+(v?" vst-but-seint":""),n===0?"\xCD dag":_(t.birta)+(v?", ekki p\xF3sta\xF0":""))),n!=null&&n<0&&(!o||s)&&y.classList.add("vst-but-lidid")}if(o&&b&&t.birta){var C=e("select");C.setAttribute("aria-label","Sta\xF0a f\xE6rslunnar "+(t.heiti||"")),p.forEach(function(P){var V=e("option","",P);V.value=P,C.appendChild(V)}),C.value=t.stada||p[0],C.addEventListener("change",function(){if(!z()){C.value=t.stada,mt(y,"Veldu hver \xFE\xFA ert efst \xED Efni.");return}C.disabled=!0,H({action:"bandEfniVista",id:t.id,hver:z(),reitir:{stada:C.value}}).then(function(P){P.ok?et(P.but,y):(C.disabled=!1,C.value=t.stada,mt(y,P.villa))})}),a.appendChild(C)}if(b){var I=D("Breyta","vst-but-takki");I.addEventListener("click",function(){pt(t,y)}),a.appendChild(I)}m.appendChild(a),y.appendChild(m);var B=S.meta?S.meta.faerslur.filter(function(P){return P.efni===t.id}):[];if(B.length){var tt=e("p","vst-but-meta");B.forEach(function(P){tt.appendChild(jt(P.hlekkur,"",P.midill+": "+(P.na!=null?"n\xE1 "+P.na+", ":"")+P.vidbrogd+" vi\xF0br\xF6g\xF0"))}),y.appendChild(tt)}t.slod&&y.appendChild(T(t));var R=[["is","\xCDslenska"],["en","English"]].filter(function(P){return t[P[0]]});if(R.length){var E=e("div","vst-maltextar");R.forEach(function(P){var V=e("div","vst-maltexti");R.length>1&&V.appendChild(e("span","vst-mal",P[1])),V.appendChild(e("pre","vst-texti",t[P[0]])),V.appendChild(Gt(t[P[0]])),E.appendChild(V)}),y.appendChild(E)}return t.notur&&y.appendChild(e("p","vst-but-notur",t.notur)),t.breyttAf&&t.breytt&&y.appendChild(e("p","vst-but-breytt","S\xED\xF0ast breytt af "+t.breyttAf+", "+_(t.breytt.slice(0,10))+" kl. "+t.breytt.slice(11,16))),y}function mt(t,o){var b=t.querySelector(".vst-msg")||t.appendChild(e("p","vst-small vst-msg"));b.textContent=o||""}function pt(t,o){var b=t.flokkur===c,y=t,m=e("form","vst-but vst-form vst-but-form");m.appendChild(e("span","vst-but-heiti","Breyta: "+(t.heiti||"\xC1n heitis")));function a(R,E,P,V,nt,ut){var ft=e("label","",R),st=e(P,nt||"");return P==="input"&&(st.type=E==="birta"?"date":"text"),st.name=E,st.value=V||"",ft.appendChild(st),ut&&ft.appendChild(e("small","",ut)),ft}m.appendChild(a("Heiti","heiti","input",t.heiti));var n=e("div","vst-form-rod");if(n.appendChild(a("Birta","birta","input",t.birta)),b){var s=e("label","","Sta\xF0a"),v=e("select");v.name="stada",p.forEach(function(R){var E=e("option","",R);E.value=R,v.appendChild(E)}),v.value=t.stada||p[0],s.appendChild(v),n.appendChild(s)}m.appendChild(n),m.appendChild(a("\xCDslenska","is","textarea",t.is)),m.appendChild(a("English","en","textarea",t.en)),m.appendChild(a("Mynd e\xF0a myndband","slod","input",t.slod,"","Dropbox-hlekkur \xE1 skr\xE1na e\xF0a m\xF6ppuna, e\xF0a sl\xF3\xF0 \xE1 mynd.")),m.appendChild(a("N\xF3tur","notur","textarea",t.notur,"vst-stutt","Hva\xF0a mynd fylgir, hvar \xE1 a\xF0 p\xF3sta, o.s.frv."));var C=e("div","vst-form-takkar"),I=D("Vista");I.type="submit";var B=D("H\xE6tta vi\xF0","vst-but-takki");C.appendChild(I),C.appendChild(B),m.appendChild(C);var tt=m.appendChild(e("p","vst-small vst-msg"));B.addEventListener("click",function(){et(y,m)}),m.addEventListener("submit",function(R){if(R.preventDefault(),tt.textContent="",!z()){tt.textContent="Veldu hver \xFE\xFA ert efst \xED Efni.";return}var E={};["heiti","birta","stada","is","en","slod","notur"].forEach(function(P){m.elements[P]&&(E[P]=m.elements[P].value)}),I.disabled=!0,I.textContent="Vista...",H({action:"bandEfniVista",id:t.id,hver:z(),breytt:y.breytt,reitir:E}).then(function(P){if(I.disabled=!1,I.textContent="Vista",P.ok){et(P.but,m);return}P.arekstur&&P.but&&(y=P.but),tt.textContent=P.villa||"T\xF3kst ekki a\xF0 vista."})}),o.parentNode.replaceChild(m,o),m.elements.heiti.focus()}function g(t,o){return(t.birta?1:0)-(o.birta?1:0)||(t.birta<o.birta?-1:t.birta>o.birta?1:0)}var u="vogor-efni-opid";function Q(t){var o=w("efni");if(w("efni-kafli").hidden=!t.length,!!t.length&&!o.querySelector(".vst-but-form")){var b={};try{b=JSON.parse(localStorage.getItem(u)||"{}")||{}}catch{}o.textContent="";var y=[],m={};t.forEach(function(a){var n=a.flokkur||"Anna\xF0";m[n]||(m[n]=[],y.push(n)),m[n].push(a)}),y.forEach(function(a){var n=e("details","vst-group");n.open=!!b[a];var s=e("summary");s.appendChild(e("span","",a));var v=String(m[a].length);if(a===c){var C=m[a].filter(function(R){return R.birta&&R.stada!=="Sleppa"}),I=C.filter(function(R){return R.stada==="P\xF3sta\xF0"}).length;v=I+"/"+C.length+" p\xF3sta\xF0ar",m[a].sort(g)}s.appendChild(e("span","",v)),n.appendChild(s);var B=e("div","vst-efni");if(m[a].forEach(function(R){B.appendChild(dt(R))}),a===c){var tt=D("N\xFD f\xE6rsla","vst-but-takki");tt.addEventListener("click",function(){if(!z()){tt.textContent="Veldu fyrst hver \xFE\xFA ert";return}tt.disabled=!0,H({action:"bandEfniNytt",hver:z(),flokkur:c}).then(function(R){if(tt.disabled=!1,!R.ok){tt.textContent=R.villa||"T\xF3kst ekki";return}S.efni.push(R.but);var E=dt(R.but);B.insertBefore(E,tt),pt(R.but,E)})}),B.appendChild(tt)}n.appendChild(B),n.addEventListener("toggle",function(){b[a]=n.open;try{localStorage.setItem(u,JSON.stringify(b))}catch{}}),o.appendChild(n)})}}function X(t){if(w("meta-kafli").hidden=!t,!!t){var o=t.fylgjendur||{},b=w("fylgjendur");b.textContent="",[["fb","Facebook"],["ig","Instagram"]].forEach(function(n){if(o[n[0]]!=null){var s=e("div","vst-count");s.appendChild(e("span","vst-counter",String(o[n[0]])));var v=o[n[0]+"Breyting"];s.appendChild(e("span","","fylgjendur \xE1 "+n[1]+(v!=null?" ("+(v>=0?"+":"")+v+" fr\xE1 "+_(o.fra)+")":""))),b.appendChild(s)}});var y={};(S.efni||[]).forEach(function(n){y[n.id]=n.heiti});var m=w("meta");if(m.textContent="",t.faerslur.forEach(function(n){var s=e("tr");s.appendChild(e("td","",_(n.birt.slice(0,10))+" "+n.birt.slice(11,16))),s.appendChild(e("td","",n.midill)),s.appendChild(e("td","",n.tegund));var v=e("td","vst-meta-texti"),C=y[n.efni]?y[n.efni]:n.texti||n.tegund;v.appendChild(n.hlekkur?jt(n.hlekkur,"",C):e("span","",C)),v.title=n.texti,s.appendChild(v),[n.na,n.ahorf,n.vidbrogd].forEach(function(I){s.appendChild(e("td","vst-tala",I==null?"\u2013":String(I)))}),m.appendChild(s)}),!t.faerslur.length){var a=e("td","","Engar f\xE6rslur fundust fr\xE1 1. okt\xF3ber.");a.colSpan=7,m.appendChild(e("tr")).appendChild(a)}w("meta-sott").textContent=t.sott||"aldrei"}}function it(t){var o=w("eg"),b=o.value;b||(b=vt(f)),o.textContent="",[""].concat(t.filter(function(y){return y!=="Allir"})).forEach(function(y){var m=e("option","",y||"Veldu nafn");m.value=y,o.appendChild(m)}),o.value=t.indexOf(b)!==-1?b:""}w("eg").addEventListener("change",function(){ot(f,this.value)});function x(){return yt({action:"bandStada",b:Z}).then(function(t){if(t.rangurLykill){ot(r,""),Y("invalid");return}if(!t.ok){w("villa").textContent=t.villa||"\xD3\xFEekkt villa.",Y("error");return}$(t),Y("ok")}).catch(function(t){w("villa").textContent=t.message+" Pr\xF3fa\xF0u a\xF0 endurhla\xF0a s\xED\xF0una.",Y("error")})}if(w("uppfaera").addEventListener("click",function(){var t=this;t.disabled=!0,x().then(function(){t.disabled=!1})}),!Z){Y("invalid");return}Y("loading"),x()}var Ye="rpghdz4ncwxr449";var Jt=(l,r)=>{try{localStorage.setItem(l,r)}catch{}},Dt=l=>{try{return localStorage.getItem(l)}catch{return null}},qt=l=>{try{localStorage.removeItem(l)}catch{}};function xe(){let l=new Uint8Array(32);return crypto.getRandomValues(l),Array.from(l,r=>r.toString(16).padStart(2,"0")).join("")}function Ze(l){let r="";return new Uint8Array(l).forEach(f=>r+=String.fromCharCode(f)),btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Qe(l){return JSON.stringify(l).replace(/[\u007f-￿]/g,r=>"\\u"+r.charCodeAt(0).toString(16).padStart(4,"0"))}function Yt(l,r){let f=l;try{f=JSON.parse(l).error_summary||l}catch{}let i=new Error(f);return i.status=r,i.vantarHeimild=/missing_scope/.test(f),i.utrunnid=r===401&&!i.vantarHeimild,i}function we({appKey:l=Ye,geymsla:r="rs"}={}){let f={refresh:r+"_refresh",verifier:r+"_verifier",state:r+"_state"},i=null,L=0,G=null,w=()=>location.origin+location.pathname;async function Y(){let d=xe(),c=xe();Jt(f.verifier,d),Jt(f.state,c);let p=Ze(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(d))),M="https://www.dropbox.com/oauth2/authorize?client_id="+encodeURIComponent(l)+"&response_type=code&token_access_type=offline&code_challenge="+p+"&code_challenge_method=S256&state="+c+"&redirect_uri="+encodeURIComponent(w());try{window.top.location.href=M}catch{location.href=M}}async function Z(d){let c=await fetch("https://api.dropboxapi.com/oauth2/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({client_id:l,...d}).toString()}),p=await c.json();if(!c.ok)throw new Error(p.error_description||p.error||"Dropbox-innskr\xE1ning mist\xF3kst");return i=p.access_token,L=Date.now()+Math.max(0,p.expires_in-60)*1e3,p}async function q(){let d=new URL(location.href),c=d.searchParams.get("code");if(!c)return!1;let p=d.searchParams.get("state"),M=Dt(f.state);d.searchParams.delete("code"),d.searchParams.delete("state");try{history.replaceState(history.state,"",d.href)}catch{}if(M&&p!==M)throw new Error("Innskr\xE1ningin passa\xF0i ekki vi\xF0 \xFEessa s\xED\xF0u. Reyndu aftur.");let F=await Z({code:c,grant_type:"authorization_code",code_verifier:Dt(f.verifier)||"",redirect_uri:w()});return qt(f.verifier),qt(f.state),F.refresh_token&&Jt(f.refresh,F.refresh_token),!0}async function _(){if(i&&Date.now()<L)return i;let d=Dt(f.refresh);if(!d)throw new Error("Ekki tengt vi\xF0 Dropbox");return await Z({grant_type:"refresh_token",refresh_token:d}),i}function J(){qt(f.refresh),i=null,L=0,G=null}async function O(d){let c={Authorization:"Bearer "+await _()};return G&&d&&(c["Dropbox-API-Path-Root"]=G),c}async function U(d,c){let p=await O(d.startsWith("files/"));p["Content-Type"]="application/json";let M=await fetch("https://api.dropboxapi.com/2/"+d,{method:"POST",headers:p,body:c===null?"null":JSON.stringify(c)});if(!M.ok)throw Yt(await M.text(),M.status);return M.json()}async function j(){let d=await U("users/get_current_account",null),c=d.root_info;return c&&c.root_namespace_id&&c.home_namespace_id&&c.root_namespace_id!==c.home_namespace_id&&(G=JSON.stringify({".tag":"root",root:c.root_namespace_id})),d}async function A(d){let c=await U("files/list_folder",{path:d,recursive:!1}),p=c.entries;for(;c.has_more;)c=await U("files/list_folder/continue",{cursor:c.cursor}),p=p.concat(c.entries);return p}async function k(d,c,p,M){let F=await O(!0);return new Promise((T,D)=>{let H=new XMLHttpRequest;H.open("POST","https://content.dropboxapi.com/2/"+d),Object.entries(F).forEach(([z,et])=>H.setRequestHeader(z,et)),H.setRequestHeader("Content-Type","application/octet-stream"),H.setRequestHeader("Dropbox-API-Arg",Qe(c)),M&&(H.upload.onprogress=z=>z.lengthComputable&&M(z.loaded)),H.onload=()=>H.status<300?T(H.responseText?JSON.parse(H.responseText):null):D(Yt(H.responseText,H.status)),H.onerror=()=>D(new Error("Ekkert samband vi\xF0 Dropbox.")),H.send(p)})}async function S(d,c,p=()=>{}){let F={path:c.replace(/\/$/,"")+"/"+d.name,mode:"add",autorename:!0,mute:!1};if(d.size<=157286400)return k("files/upload",F,d,z=>p(z/d.size));let T=0,D=await k("files/upload_session/start",{close:!1},d.slice(0,33554432),z=>p(z/d.size));for(T=Math.min(33554432,d.size);d.size-T>33554432;){let z=T;await k("files/upload_session/append_v2",{cursor:{session_id:D.session_id,offset:z},close:!1},d.slice(z,z+33554432),et=>p((z+et)/d.size)),T+=33554432}let H=T;return k("files/upload_session/finish",{cursor:{session_id:D.session_id,offset:H},commit:F},d.slice(H),z=>p((H+z)/d.size))}async function $(d){try{return(await U("sharing/create_shared_link_with_settings",{path:d,settings:{requested_visibility:"public",audience:"public",access:"viewer"}})).url}catch(c){if(!/shared_link_already_exists/.test(c.message))throw c;let p=await U("sharing/list_shared_links",{path:d,direct_only:!0}),M=p.links.find(F=>!F.link_permissions||F.link_permissions.resolved_visibility?.[".tag"]==="public")||p.links[0];if(!M)throw c;return M.url}}async function at(d){let c={};for(let p=0;p<d.length;p+=25){let M=d.slice(p,p+25),F=await O(!0);F["Content-Type"]="application/json";let T=await fetch("https://content.dropboxapi.com/2/files/get_thumbnail_batch",{method:"POST",headers:F,body:JSON.stringify({entries:M.map(D=>({path:D,format:"jpeg",size:"w128h128",mode:"fitone_bestfit"}))})});if(!T.ok)throw Yt(await T.text(),T.status);(await T.json()).entries.forEach((D,H)=>{D[".tag"]==="success"&&(c[M[H]]="data:image/jpeg;base64,"+D.thumbnail)})}return c}return{tengdur:()=>!!Dt(f.refresh),innskra:Y,ljukaInnskraningu:q,utskra:J,api:U,reikningur:j,listi:A,hlada:S,hlekkur:$,smamyndir:at}}var Ce=/\.(jpe?g|png|mp4)$/i,je=/\.(jpe?g|png)$/i;function Xe(l){return l>1048576?(l/1048576).toFixed(1)+" MB":Math.round(l/1024)+" kB"}function Se({mappa:l}){let r=we(),f=null,i=null,L=r.ljukaInnskraningu().catch(d=>(console.warn("dropbox:",d.message),!1));function G(){return i||(i=L.then(async()=>r.tengdur()?(f=await r.reikningur(),f):null).catch(d=>{throw i=null,(d.vantarHeimild||d.utrunnid)&&r.utskra(),d})),i}let w=e("dialog","vbt-dbx"),Y=e("div","vbt-dbx-haus"),Z=e("b"),q=e("button","vbt-link","Upp");q.type="button";let _=e("button","vbt-link","Loka");_.type="button",Y.append(q,Z,_);let J=e("p","vbt-small"),O=e("ul","vbt-dbx-listi");w.append(Y,J,O),document.body.appendChild(w);let U=l,j=null;_.addEventListener("click",()=>w.close()),w.addEventListener("close",()=>j&&j(null)),q.addEventListener("click",()=>{U.split("/").length>2&&k(U.replace(/\/[^/]+$/,""))});function A(){let d=e("button","vbt-link","Skr\xE1 \xFAt");return d.type="button",d.addEventListener("click",()=>{r.utskra(),f=null,i=null,w.close()}),d}async function k(d){U=d,Z.textContent=d,q.hidden=d===l,O.textContent="",O.appendChild(e("li","vbt-small","S\xE6ki \u2026"));try{let c=await r.listi(d),p=c.filter(T=>T[".tag"]==="folder").sort((T,D)=>T.name.localeCompare(D.name)),M=c.filter(T=>T[".tag"]==="file").sort((T,D)=>D.server_modified.localeCompare(T.server_modified));O.textContent="",p.forEach(T=>{let D=e("li","vbt-dbx-mappa"),H=e("button","","\u{1F4C1} "+T.name);H.type="button",H.addEventListener("click",()=>k(T.path_display)),D.appendChild(H),O.appendChild(D)});let F=[];M.forEach(T=>{let D=Ce.test(T.name),H=e("li",D?"":"vbt-dbx-bannad"),z=e("button");z.type="button",z.disabled=!D;let et=e("span","vbt-dbx-thumb",je.test(T.name)?"":T.name.split(".").pop().toUpperCase());je.test(T.name)&&F.push([T.path_display,et]);let dt=e("span","vbt-dbx-nafn",T.name);dt.appendChild(e("small","",Xe(T.size)+" \xB7 "+T.server_modified.slice(0,10))),z.append(et,dt),D&&z.addEventListener("click",()=>$(T.path_display,z)),H.appendChild(z),O.appendChild(H)}),c.length||O.appendChild(e("li","vbt-small","Mappan er t\xF3m.")),r.smamyndir(F.map(T=>T[0])).then(T=>{F.forEach(([D,H])=>{T[D]&&(H.style.backgroundImage=`url(${T[D]})`)})}).catch(()=>{})}catch(c){O.textContent="",O.appendChild(e("li","vbt-msg",c.message))}}function S(d){return d.vantarHeimild?(r.utskra(),f=null,i=null,w.open&&w.close(),confirm("Dropbox \xFEarf n\xFDja innskr\xE1ningu svo s\xED\xF0an megi hla\xF0a upp og b\xFAa til hlekki. Skr\xE1 inn n\xFAna?")&&r.innskra(),!0):!1}async function $(d,c){c.disabled=!0,J.textContent="B\xFD til hlekk \u2026";try{let p=await r.hlekkur(d),M=j;j=null,w.close(),M(p)}catch(p){if(S(p))return;J.textContent="T\xF3kst ekki a\xF0 b\xFAa til hlekk: "+p.message,c.disabled=!1}}async function at(){try{if(await G())return!0}catch(d){if(r.tengdur())throw d}return confirm("Tengja Dropbox? \xDE\xFA fer\xF0 til Dropbox og kemur svo aftur hinga\xF0. Textinn \xED reitunum heldur s\xE9r.")&&await r.innskra(),!1}return{async velja(){return await at()?(J.textContent="Tengt sem "+f.name.display_name+". ",J.appendChild(A()),w.showModal(),k(l),new Promise(d=>j=d)):null},async hlada(d,c){if(!Ce.test(d.name))throw new Error("Bara .jpg, .png e\xF0a .mp4.");if(!await at())return null;try{let p=await r.hlada(d,l,M=>c("Hle\xF0 upp "+Math.round(M*100)+" %"));return c("B\xFD til hlekk \u2026"),await r.hlekkur(p.path_display)}catch(p){if(S(p))return null;throw p}}}}var Ee=`<div class="vbt">
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
      <p class="vbt-small">Tv\xF6 skref: \u201ESenda inn\u201C l\xE6tur Facebook og Instagram yfirfara myndina og textann (ekkert er birt), og \u201ESta\xF0festa og t\xEDmasetja\u201C opnast \xFEegar yfirfer\xF0in hefur sta\xF0ist. F\xE6rslan fer \xFAt \xED s\xED\xF0asta lagi 5 m\xEDn\xFAtum eftir t\xEDmann og \xFEa\xF0 m\xE1 h\xE6tta vi\xF0 h\xE9r \xFEanga\xF0 til.</p>
    </section>

    <section>
      <div class="vst-dymo">|FAERSLUR|</div>
      <p class="vbt-small vbt-hint">Textunum er breytt \xE1 <a data-bt="yfirlit" href="/nafir/stada" target="_blank" rel="noopener">yfirliti bandsins</a>. H\xE9r velur\xF0u hva\xF0a texti fer \xE1 hvorn mi\xF0il, og textann m\xE1 laga fyrir \xFEessa birtingu \xE1n \xFEess a\xF0 breyta f\xE6rslunni.</p>
      <div class="vbt-listi" data-bt="faerslur"></div>
    </section>

    <p class="vbt-small">S\xF3tt <span data-bt="sott"></span>. <button class="vbt-link" type="button" data-bt="uppfaera">Uppf\xE6ra</button> \xB7 <button class="vbt-link" type="button" data-bt="utskra">Skr\xE1 \xFAt</button></p>
  </div>
</div>
`;var $e={"":"/AUGLYSINGAR/SHAKON",per:"/AUGLYSINGAR/PER"};function Ae(l){l.innerHTML=Ee;var r=l.getAttribute("data-verkefni")||"",f=r?"vogor-birta-"+r:"vogor-promo-key",i="vogor-birta-mal",L={Birt:"ok","Prufa \xED lagi":"ok",T\u00EDmasett:"bid",Prufa:"prufa","B\xED\xF0ur Instagram":"bid",Sendi:"bid",Villa:"villa",\u00D3v\u00EDst:"villa",\u00DAtrunni\u00F0:"villa"},G=["T\xEDmasett","Prufa","B\xED\xF0ur Instagram"],w={Prufa:"\xCD yfirfer\xF0","Prufa \xED lagi":"Yfirfer\xF0 \xED lagi"};function Y(g){return g.prufa&&w[g.stada]||g.stada}var Z=["Facebook","Instagram","Instagram Story","Facebook Story"],q="Stafr\xE6nn H\xE1kon",_="stafraennhakon",J=["is","en"];function O(g){if(g){Z=g.midlar||Z,q=g.sidaNafn||q,_=g.igNafn||_,J=g.tungumal||J;var u=l.querySelector(".vbt-head .vst-dymo");u&&g.titill&&(u.textContent="|"+g.titill+"|BIRTA|");var Q=U("yfirlit");Q&&g.yfirlit&&(Q.href=g.yfirlit,Q.textContent="yfirlestrars\xED\xF0unni")}}function U(g){return l.querySelector('[data-bt="'+g+'"]')}var j=Se({mappa:l.getAttribute("data-dropbox-mappa")||$e[r]||"/AUGLYSINGAR"}),A=Ct("l",f).lykill;function k(g,u){var Q=Object.assign({action:g,key:A},u||{});return r&&(Q.verkefni=r),yt(Q,r?ve:null).then(function(X){return X.rangtLeyniord&&(A="",ot(f,""),S("gate")),X}).catch(function(X){return{ok:!1,villa:X.message}})}function S(g){U("gate").hidden=g!=="gate",U("hledur").hidden=g!=="hledur",U("app").hidden=g!=="app"}function $(g){return g?new Date(g.replace(" ","T")+":00Z"):null}function at(g){var u=$(g);return u?u.getUTCDate()+". "+Rt[u.getUTCMonth()]+" "+g.slice(11,16):""}function d(g){var u=Math.round(($(g)-Date.now())/6e4);if(u<=0)return"n\xFAna";if(u<60)return u+" m\xEDn";if(u<2880)return Math.floor(u/60)+" klst "+u%60+" m\xEDn";var Q=Math.round(u/1440);return Q+(Q===1?" dag":" daga")}function c(g){var u=Math.round(($(g)-Date.now())/6e4);return u<60?Math.max(u,0)+" m\xEDn":u<2880?Math.round(u/60)+" klst":Math.round(u/1440)+" dagar"}var p={},M="vogor-birta-drog",F={};try{F=JSON.parse(sessionStorage.getItem(M)||"{}")||{}}catch{}function T(){try{sessionStorage.setItem(M,JSON.stringify(F))}catch{}}var D=[];function H(g){return k("birtingar").then(function(u){if(!u.ok){u.rangtLeyniord||(S("gate"),U("gate-villa").textContent=u.villa||"N\xE1\xF0i ekki \xED g\xF6gnin.");return}p=u,O(u.verkefni),g===!0?et():z(),S("app")})}function z(){D=[],et();var g=U("faerslur");g.textContent="",p.faerslur.slice().sort(function(u,Q){return u.birta.localeCompare(Q.birta)}).forEach(function(u){g.appendChild(mt(u))})}function et(){var g={};p.faerslur.forEach(function(x){g[x.id]=x.heiti});var u=p.birtingar.filter(function(x){return G.indexOf(x.stada)!==-1}).sort(function(x,t){return x.timi.localeCompare(t.timi)}),Q=p.birtingar.filter(function(x){return G.indexOf(x.stada)===-1&&x.stada!=="H\xE6tt vi\xF0"}).sort(function(x,t){return t.timi.localeCompare(x.timi)}).slice(0,15),X=U("rod");X.textContent="",u.concat(Q).forEach(function(x){var t=e("li",G.indexOf(x.stada)===-1?"vbt-buid":"");t.appendChild(e("span","vst-led vst-led--"+(L[x.stada]||""))),t.appendChild(e("span","vbt-timi",at(x.timi))),t.appendChild(e("span","",x.midill));var o=e("span","vbt-heiti",(x.prufa?"Yfirfer\xF0: ":"")+(g[x.efni]||x.efni)),b=e("small");if(x.stada==="Birt"&&x.nidurstada){var y=e("a","","Birt, opna f\xE6rsluna");y.href=x.nidurstada,y.target="_blank",y.rel="noopener",b.appendChild(y)}else b.textContent=(x.stada==="T\xEDmasett"?"Fer \xFAt eftir "+d(x.timi):Y(x)+(x.nidurstada?": "+x.nidurstada:""))+(x.hver&&x.hver!==p.eg?" \xB7 "+x.hver:"");o.appendChild(b),t.appendChild(o),G.indexOf(x.stada)!==-1?t.appendChild(dt(x)):t.appendChild(e("span")),X.appendChild(t)}),X.children.length||X.appendChild(e("li","","Ekkert \xED bi\xF0r\xF6\xF0 enn\xFE\xE1."));var it=u.filter(function(x){return!x.prufa})[0];U("naesta").textContent=it?c(it.timi):"--",U("naesta-texti").textContent=it?"\xED n\xE6stu birtingu":"ekkert \xED bi\xF0r\xF6\xF0",U("sott").textContent=p.nu+(p.eg?", innskr\xE1\xF0(ur): "+p.eg:""),D.forEach(function(x){x()})}function dt(g){var u=e("button","vbt-btn vbt-btn--ljos","H\xE6tta vi\xF0");return u.type="button",u.addEventListener("click",function(){u.disabled=!0,k("birtingHaetta",{id:g.id}).then(function(Q){Q.ok?(p.birtingar=Q.birtingar,et()):(u.disabled=!1,alert(Q.villa))})}),u}function mt(g){var u=F[g.id]||(F[g.id]={}),Q=g.stada==="P\xF3sta\xF0",X=e("article","vbt-kort"+(Q?" vbt-kort--postad":"")),it=e("div","vbt-kort-haus");it.appendChild(e("b","",g.heiti));var x=$(g.birta+" 00:00");it.appendChild(e("span","vbt-merki",x.getUTCDate()+". "+Rt[x.getUTCMonth()]+" \xB7 "+g.stada)),X.appendChild(it);var t=e("div","vbt-forsk"),o=e("div","vbt-skipta"),b=Z.indexOf("Instagram")!==-1?"Instagram":"Facebook";["Instagram","Facebook","Story"].filter(function(h){return h!=="Instagram"||Z.indexOf("Instagram")!==-1}).forEach(function(h){var N=e("button","",h);N.type="button",N.addEventListener("click",function(){b=h,ct()}),o.appendChild(N)}),t.appendChild(o);var y=e("div");t.appendChild(y),X.appendChild(t);var m=e("form","vbt-stjorn"),a=e("div","vbt-midlar"),n={};Z.forEach(function(h){var N=e("label"),W=e("input");W.type="checkbox",W.checked=u[h]!==void 0?u[h]:!/ Story$/.test(h),n[h]=W,N.appendChild(W),N.appendChild(document.createTextNode(h)),a.appendChild(N),W.addEventListener("change",function(){u[h]=W.checked,ct()})}),m.appendChild(a);var s=e("label","","Texti"),v=e("select");[["en","English"],["is","\xCDslenska"],["baedi","\xCDslenska og enska"]].forEach(function(h){var N=e("option","",h[1]);N.value=h[0],v.appendChild(N)}),v.value=J.length===1?J[0]:u.mal||vt(i)||"en",s.hidden=J.length===1,s.appendChild(v),m.appendChild(s);var C=e("label","","Textinn sem fer \xFAt "),I=e("span","vbt-teljari");C.appendChild(I);var B=e("textarea");C.appendChild(B),m.appendChild(C);function tt(){B.value=v.value==="is"?g.is:v.value==="en"?g.en:[g.is,g.en].filter(Boolean).join(`

`),u.texti=B.value,ct()}v.addEventListener("change",function(){u.mal=v.value,ot(i,v.value),tt()}),B.addEventListener("input",function(){u.texti=B.value,ct()});var R=e("label","","Collab \xE1 Instagram ");R.appendChild(e("span","vbt-teljari","mest 3, a\xF0skilin me\xF0 kommu"));var E=e("input");E.value=u.collab||"",E.placeholder="t.d. magnus, arnithor",R.appendChild(E),m.appendChild(R),E.addEventListener("input",function(){u.collab=E.value,ct()});var P=e("label","","Mynd e\xF0a myndband"),V=e("input");V.value=u.mynd!=null?u.mynd:g.slod||"",V.placeholder="Dropbox-hlekkur \xE1 .jpg e\xF0a .mp4",P.appendChild(V),m.appendChild(P),V.addEventListener("input",function(){u.mynd=V.value}),V.addEventListener("change",ct);var nt=e("div","vbt-takkar vbt-dbx-takkar"),ut=e("button","vbt-btn vbt-btn--ljos","Velja \xFAr Dropbox");ut.type="button";var ft=e("button","vbt-btn vbt-btn--ljos","Hla\xF0a upp");ft.type="button";var st=e("input");st.type="file",st.accept=".jpg,.jpeg,.png,.mp4,image/jpeg,image/png,video/mp4",st.hidden=!0;var Lt=e("span","vbt-small");nt.append(ut,ft,st,Lt),m.appendChild(nt);function Qt(h){h&&(V.value=h,u.mynd=h,T(),ct())}function Xt(h){Lt.textContent="Dropbox: "+h.message}ut.addEventListener("click",function(){Lt.textContent="",j.velja().then(Qt,Xt)}),ft.addEventListener("click",function(){st.click()}),st.addEventListener("change",function(){var h=st.files[0];st.value="",h&&(ft.disabled=ut.disabled=!0,j.hlada(h,function(N){Lt.textContent=N}).then(function(N){Lt.textContent=N?h.name+" er komin \xE1 Dropbox":"",Qt(N)},Xt).then(function(){ft.disabled=ut.disabled=!1}))});var Bt=e("div","vbt-tvo"),Wt=e("label","","Dagur"),gt=e("input");gt.type="date",gt.value=u.dagur||g.birta,gt.addEventListener("change",function(){u.dagur=gt.value,ct()}),Wt.appendChild(gt);var $t=e("label","","Klukkan"),ht=e("input");ht.type="time",ht.value=u.klukka||"12:00",ht.addEventListener("change",function(){u.klukka=ht.value,ct()}),$t.appendChild(ht),Bt.appendChild(Wt),Bt.appendChild($t),m.appendChild(Bt);var te=e("p","vbt-adv");m.appendChild(te);var ee=e("div","vbt-takkar"),Tt=e("button","vbt-btn","Senda inn");Tt.type="submit",ee.appendChild(Tt),m.appendChild(ee);var It=e("div","vbt-yfirferd"),Ft=e("ul","vbt-fyrri"),ae=e("p","vbt-small"),wt=e("button","vbt-btn vbt-btn--stadfesta","Sta\xF0festa");wt.type="button",It.appendChild(Ft),It.appendChild(ae),It.appendChild(wt),m.appendChild(It);var At=e("p","vbt-msg"+(u.skilabod?" vbt-msg--ok":""),u.skilabod||"");u.skilabod="",m.appendChild(At);var ne=p.birtingar.filter(function(h){return h.efni===g.id&&!h.prufa&&h.stada!=="H\xE6tt vi\xF0"});if(ne.length){var re=e("ul","vbt-fyrri");ne.forEach(function(h){var N=e("li");N.appendChild(e("span","vst-led vst-led--"+(L[h.stada]||""))),N.appendChild(document.createTextNode(h.midill+": "+h.stada+(h.stada==="T\xEDmasett"?" "+at(h.timi):"")+(h.hver?" \xB7 "+h.hver:""))),re.appendChild(N)}),m.appendChild(re)}var Ve=p.meta?p.meta.faerslur.filter(function(h){return h.efni===g.id}):[];Ve.forEach(function(h){m.appendChild(e("p","vbt-teljari",h.midill+": "+(h.na!=null?"n\xE1 "+h.na+", ":"")+(h.ahorf!=null?"\xE1horf "+h.ahorf+", ":"")+h.vidbrogd+" vi\xF0br\xF6g\xF0"))}),X.appendChild(m);function bt(h){return!!(n[h]&&n[h].checked)}function Vt(){return Z.filter(function(h){return n[h].checked})}function ct(){Array.prototype.forEach.call(o.children,function(pe){pe.setAttribute("aria-pressed",String(pe.textContent===b))});var h=ge(V.value),N=bt("Instagram");I.textContent=B.value.length+(N?" / 2200":"")+" stafir"+(N?", "+(B.value.match(/#[^\s#]+/g)||[]).length+" / 30 myllumerki":""),I.classList.toggle("vbt-of",N&&B.value.length>2200);var W=[];Vt().length||W.push("Veldu a\xF0 minnsta kosti einn mi\xF0il."),N&&!V.value&&W.push("Instagram \xFEarf mynd e\xF0a myndband."),V.value&&!h.t&&W.push("Sl\xF3\xF0in \xFEarf a\xF0 enda \xE1 .jpg, .png e\xF0a .mp4 (Dropbox-hlekkur \xE1 skr\xE1na sj\xE1lfa, ekki m\xF6ppu)."),N&&h.t==="mynd"&&!/^jpe?g$/.test(h.e)&&W.push("Instagram tekur bara JPG-myndir."),N&&/instagram\.com|ffm\.to|https?:\/\//.test(B.value)&&W.push("Hlekkir virka ekki \xED texta \xE1 Instagram; skrifa\xF0u \u201Ehlekkur \xED bio\u201C."),R.hidden=!N,N&&zt().length>3&&W.push("Instagram leyfir mest 3 \xED collab.");var kt=bt("Instagram Story")||bt("Facebook Story");if(kt&&!V.value&&W.push("Story \xFEarf mynd e\xF0a myndband."),bt("Instagram Story")&&h.t==="mynd"&&!/^jpe?g$/.test(h.e)&&W.push("Instagram Story tekur bara JPG-myndir."),kt&&W.push("Textinn fer ekki me\xF0 \xED Story; hann \xFEarf a\xF0 vera \xED myndinni sj\xE1lfri (9:16)."),te.textContent=W.join(" "),T(),se(),y.textContent="",b==="Story"){y.appendChild(_e(h));return}var K=b==="Facebook",lt=e("div","vbt-sima"+(K?" vbt-sima--fb":"")),Pt=e("div","vbt-sima-haus");Pt.appendChild(e("i"));var oe=!K&&N?zt():[],le=e("span","",K?q:_+(oe.length?" og "+oe.join(", "):""));K&&le.appendChild(e("small","",at(gt.value+" "+(ht.value||"12:00")))),Pt.appendChild(le),lt.appendChild(Pt);var Ht=e("div","vbt-sima-texti"),de=K?B.value:B.value.split(`
`)[0].slice(0,125);K||Ht.appendChild(e("b","",_)),Ht.appendChild(document.createTextNode(de)),!K&&B.value.length>de.length&&Ht.appendChild(e("span","vbt-meira","\u2026 meira")),K&&lt.appendChild(Ht);var Nt=e("div","vbt-sima-mynd");if(h.t==="mynd"){var _t=e("img");_t.src=Et(V.value),_t.alt="",Nt.appendChild(_t)}else if(h.t==="myndband"){var Mt=e("video");Mt.src=Et(V.value),Mt.muted=!0,Mt.controls=!0,Mt.preload="metadata",Nt.appendChild(Mt)}else Nt.textContent=V.value?"Sl\xF3\xF0 sem er hvorki mynd n\xE9 myndband":"Engin mynd";(V.value||!K)&&lt.appendChild(Nt),K||(lt.appendChild(e("div","vbt-sima-takkar","\u2661 \u25EF \u27A4")),lt.appendChild(Ht)),y.appendChild(lt)}function _e(h){var N=e("div","vbt-sima vbt-sima--story"),W=e("div","vbt-sima-mynd");if(h.t==="mynd"){var kt=e("img");kt.src=Et(V.value),kt.alt="",W.appendChild(kt)}else if(h.t==="myndband"){var K=e("video");K.src=Et(V.value),K.muted=!0,K.controls=!0,K.preload="metadata",W.appendChild(K)}else W.textContent="Engin mynd";N.appendChild(W);var lt=e("div","vbt-sima-haus");return lt.appendChild(e("i")),lt.appendChild(e("span","",bt("Instagram Story")||!bt("Facebook Story")?_:q)),N.appendChild(lt),N}function zt(){return E.value.split(/[\s,;]+/).map(function(h){return h.replace(/^@/,"").trim().toLowerCase()}).filter(Boolean)}function ie(){return JSON.stringify([Vt(),B.value,V.value.trim(),bt("Instagram")?zt():[]])}function se(){var h=u.hopur?p.birtingar.filter(function(K){return K.id.indexOf(u.hopur+"-")===0}):[];if(It.hidden=!h.length,Tt.textContent=h.length?"Senda inn aftur":"Senda inn",!!h.length){Ft.textContent="",h.forEach(function(K){var lt=e("li");lt.appendChild(e("span","vst-led vst-led--"+(L[K.stada]||"")));var Pt=K.stada!=="Prufa"&&K.stada!=="B\xED\xF0ur Instagram";lt.appendChild(document.createTextNode(K.midill+": "+Y(K)+(Pt&&K.nidurstada?" ("+K.nidurstada+")":""))),Ft.appendChild(lt)});var N=ie()!==u.snid,W=h.every(function(K){return K.stada==="Prufa \xED lagi"}),kt=h.some(function(K){return["Villa","\xD3v\xEDst","\xDAtrunni\xF0","H\xE6tt vi\xF0"].indexOf(K.stada)!==-1});wt.hidden=!W||N,wt.textContent="Sta\xF0festa og t\xEDmasetja "+at(gt.value+" "+(ht.value||"12:00")),ae.textContent=N?"\xDE\xFA breyttir f\xE6rslunni eftir a\xF0 h\xFAn var send inn. Sendu hana inn aftur svo breytingin ver\xF0i yfirfarin.":kt?"Yfirfer\xF0in st\xF3\xF0st ekki. Laga\xF0u \xFEa\xF0 sem er a\xF0 og sendu inn aftur.":W?"Allt \xED lagi. Sta\xF0festu til a\xF0 t\xEDmasetja; \xFEa\xF0 m\xE1 h\xE6tta vi\xF0 \xED bi\xF0r\xF6\xF0inni \xFEanga\xF0 til.":(h.some(function(K){return/^Instagram/.test(K.midill)})?h.some(function(K){return/^Facebook/.test(K.midill)})?"Facebook og Instagram eru":"Instagram er":"Facebook er")+" a\xF0 yfirfara. \xDEa\xF0 tekur allt a\xF0 5 m\xEDn\xFAtur, myndband stundum lengur. S\xED\xF0an uppf\xE6rist sj\xE1lf."}}return D.push(se),m.addEventListener("submit",function(h){h.preventDefault(),At.textContent="",At.classList.remove("vbt-msg--ok"),Tt.disabled=!0,k("birtingVista",{efni:g.id,midlar:Vt(),timi:gt.value+" "+ht.value,texti:B.value,mynd:V.value.trim(),prufa:!0,collab:bt("Instagram")?zt().join(","):""}).then(function(N){if(Tt.disabled=!1,!N.ok){At.textContent=N.villa||"T\xF3kst ekki.";return}u.hopur=N.hopur,u.snid=ie(),T(),p.birtingar=N.birtingar,et()})}),wt.addEventListener("click",function(){At.textContent="",wt.disabled=!0,k("birtingStadfesta",{hopur:u.hopur,timi:gt.value+" "+ht.value}).then(function(h){if(wt.disabled=!1,!h.ok){At.textContent=h.villa||"T\xF3kst ekki.";return}u.hopur=null,u.skilabod="T\xEDmasett. F\xE6rslan s\xE9st \xED bi\xF0r\xF6\xF0inni efst og m\xE1 h\xE6tta vi\xF0 \xFEar.",T(),p.birtingar=h.birtingar,z()})}),u.texti!=null?(B.value=u.texti,ct()):tt(),X}U("gate").addEventListener("submit",function(g){g.preventDefault(),A=U("lykill").value.trim(),ot(f,A),U("gate-villa").textContent="",S("hledur"),H()}),U("uppfaera").addEventListener("click",function(){H()}),U("utskra").addEventListener("click",function(){A="",ot(f,""),S("gate")});var pt=0;setInterval(function(){if(!(!A||U("app").hidden||document.hidden)){pt++;var g=p.birtingar&&p.birtingar.some(function(u){return u.prufa&&(u.stada==="Prufa"||u.stada==="B\xED\xF0ur Instagram")});(g||pt%3===0)&&H(!0)}},2e4),A?(S("hledur"),H()):S("gate")}var Le=`<div class="vp" id="vp-admin">
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
</div>
`;function Te(l){l.innerHTML=Le;var r="vogor-promo-key",f={en:{pressa:`Your personal promo page (stream, download, press kit):
{pressa}

Direct links:
`,beint:`Listen (private stream): {stream}
Download: {download} (MP3, FLAC or WAV)`},is:{pressa:`\xDE\xEDn pers\xF3nulega promo-s\xED\xF0a (streymi, ni\xF0urhal, pressuefni):
{pressa}

Beinir hlekkir:
`,beint:`Hlusta (loka\xF0 streymi): {stream}
S\xE6kja: {download} (MP3, FLAC e\xF0a WAV)`}};function i(a){return document.getElementById(a)}var L={},G=null,w=vt(r);function Y(a,n){return yt(Object.assign({action:a,key:w},n||{})).then(function(s){if(s.rangtLeyniord&&(w="",ot(r,""),Z(!1)),!s.ok)throw new Error(s.villa||"\xD3\xFEekkt villa");return s})}function Z(a){i("vp-gate").hidden=a,i("vp-app").hidden=!a}function q(a){return{pressa:L.press_page?L.press_page+"?k="+a:"",stream:L.private_stream||"",download:L.redeem?L.redeem+"?code="+a:""}}function _(a,n){return a.replace(/\{(\w+)\}/g,function(s,v){return n[v]})}function J(a,n){G=a;var s=q(a.kodi),v=f[i("vp-mal").value];i("vp-titill").textContent=a.vidtakandi+": "+a.kodi+(n?" ("+n+")":""),i("vp-blokk").value=(s.pressa?_(v.pressa,s):"")+_(v.beint,s),i("vp-afrita-hlekk").hidden=!s.pressa,i("vp-forskodun").hidden=!s.pressa,s.pressa&&(i("vp-forskodun").href=s.pressa+"&preview=1"),i("vp-nidurstada").hidden=!1}function O(a,n){var s=document.createElement("td");s.textContent=n||"-",a.appendChild(s)}function U(a){L=a.stillingar||{},i("vp-samtals").textContent=a.linur.length+" \xFAthluta\xF0, "+a.lausir+" lausir af "+a.alls;var n=i("vp-tafla").tBodies[0];n.textContent="",a.linur.forEach(function(s){var v=document.createElement("tr");O(v,s.vidtakandi),O(v,s.kodi),O(v,s.uthlutad),O(v,s.opnadSidast),O(v,s.opnanir?String(s.opnanir):""),O(v,s.hlusta),O(v,s.saekja),v.addEventListener("click",function(){J(s)}),n.appendChild(v)})}function j(){return Y("stada").then(U).catch(function(a){i("vp-samtals").textContent="Villa: "+a.message})}var A=["midill","tengilidur","netfang","flokkur","leid","fra","hver","mal","stada","efni","meginmal","notur"],k={leid:"P\xF3stur",mal:"en",stada:"Dr\xF6g"},S={Sent:"sent",Svara\u00F0:"svarad",Skoppa\u00F0i:"skoppadi",Sleppt:"sleppt"},$=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,at=/\[(BLOKK|PRESSUHLEKKUR)\]/,d=null;function c(a){return i("vp-p-"+a)}function p(a){i("vp-p-status").textContent=a||""}function M(a){return a?a.slice(0,10):""}function F(a,n){a.options.length||n.forEach(function(s){var v=document.createElement("option");v.value=s,v.textContent=s||"\u2013",a.appendChild(v)})}function T(a,n){var s=Array.prototype.some.call(a.options,function(C){return C.value===n});if(!s){var v=document.createElement("option");v.value=n,v.textContent=n,a.appendChild(v)}a.value=n}function D(a){L=a.stillingar||L,F(c("stada"),a.stodur),F(c("hver"),[""].concat(a.band)),F(c("flokkur"),[""].concat(a.flokkar||[]));var n={};a.postar.forEach(function(I){n[I.stada]=(n[I.stada]||0)+1});var s=a.stodur.filter(function(I){return n[I]}).map(function(I){return n[I]+" "+I.toLowerCase()});i("vp-postar-samtals").textContent=a.postar.length?a.postar.length+" vi\xF0takendur: "+s.join(", "):"Enginn vi\xF0takandi skr\xE1\xF0ur enn";var v=i("vp-postar").tBodies[0];v.textContent="";var C=null;a.postar.forEach(function(I){if((I.flokkur||"")!==C){C=I.flokkur||"";var B=document.createElement("tr");B.className="vp-flokkur";var tt=document.createElement("th");tt.colSpan=7,tt.textContent=C||"\xD3flokka\xF0",B.appendChild(tt),v.appendChild(B)}var R=document.createElement("tr");S[I.stada]&&(R.className="vp-st-"+S[I.stada]),O(R,I.midill),O(R,I.stada),O(R,I.hver),O(R,I.leid),O(R,I.sent),O(R,I.opnad?M(I.opnad)+(I.opnanir>1?" ("+I.opnanir+"\xD7)":""):""),O(R,M(I.hlusta)),R.addEventListener("click",function(){Q(I)}),v.appendChild(R)})}function H(){return Y("postar").then(D).catch(function(a){i("vp-postar-samtals").textContent="Villa: "+a.message})}function z(){var a=d||{};i("vp-post-titill").textContent=a.id?a.midill+(a.kodi?" \xB7 k\xF3\xF0i "+a.kodi:" \xB7 enginn k\xF3\xF0i"):"N\xFDr vi\xF0takandi",i("vp-p-gefa").hidden=!!a.kodi;var n=a.kodi?q(a.kodi).pressa:"";i("vp-p-forskodun").hidden=!n,n&&(i("vp-p-forskodun").href=n+"&preview=1");var s=c("leid").value==="P\xF3stur";i("vp-p-opna").textContent=s?"Opna \xED p\xF3stforriti":"Afrita og opna sl\xF3\xF0",i("vp-p-eml").hidden=!s}function et(a){for(var n="",s=0;s<a.length;s++)n+=String.fromCharCode(a[s]);return btoa(n)}function dt(a,n){if(/^[\x20-\x7e]*$/.test(n))return a+": "+n;var s=new TextEncoder,v=[],C=[];return Array.from(n).forEach(function(I){var B=Array.from(s.encode(I));C.length+B.length>39&&(v.push("=?UTF-8?B?"+et(C)+"?="),C=[]),C=C.concat(B)}),C.length&&v.push("=?UTF-8?B?"+et(C)+"?="),a+": "+v.join(`\r
 `)}function mt(a,n,s,v){var C=["To: "+a];$.test(n)&&C.push("From: "+n),C.push(dt("Subject",s)),C.push("X-Unsent: 1","MIME-Version: 1.0","Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64");var I=et(new TextEncoder().encode(v.replace(/\r?\n/g,`\r
`)));return C.join(`\r
`)+`\r
\r
`+I.replace(/(.{76})/g,`$1\r
`)+`\r
`}function pt(a,n,s){var v=URL.createObjectURL(new Blob([n],{type:s})),C=document.createElement("a");C.href=v,C.download=a,document.body.appendChild(C),C.click(),C.remove(),setTimeout(function(){URL.revokeObjectURL(v)},1e3)}var g={};function u(a){A.forEach(function(n){var s=c(n),v=a[n]||k[n]||"";s.tagName==="SELECT"?T(s,v):s.value=v,g[n]=s.value})}function Q(a){d=a,u(a),p(t()?"Hlekkir vi\xF0takandans eru komnir inn \xED textann. \u201EVista\u201C geymir hann \xFEannig.":""),z(),i("vp-post").hidden=!1,i("vp-post").scrollIntoView({block:"nearest"})}function X(){var a=!(d&&d.id),n={};return A.forEach(function(s){var v=c(s).value;(a||v!==g[s])&&(n[s]=v)}),n}function it(){var a=X();return d&&d.id&&(a.id=d.id),p("Vista..."),Y("postVista",{post:a}).then(function(n){return d=n.postar[0],u(d),t(),z(),p("Vista\xF0"),H().then(function(){return d})})}function x(){var a=c("meginmal").value;if(!at.test(a))return a;var n=d&&d.kodi;if(!n)return null;var s=q(n),v=f[c("mal").value]||f.en,C=(s.pressa?_(v.pressa,s):"")+_(v.beint,s);return a.split("[BLOKK]").join(C).split("[PRESSUHLEKKUR]").join(s.pressa)}function t(){var a=x();return a===null||a===c("meginmal").value?!1:(c("meginmal").value=a,!0)}function o(a){var n=x();if(n===null){p("Gef\xF0u k\xF3\xF0a fyrst: p\xF3sturinn notar [BLOKK] e\xF0a [PRESSUHLEKKUR].");return}a(n)}function b(a){p("Villa: "+a.message)}function y(a,n){a.disabled=!0,n().catch(b).then(function(){a.disabled=!1})}i("vp-post-nyr").addEventListener("click",function(){Q({})}),i("vp-p-loka").addEventListener("click",function(){d=null,i("vp-post").hidden=!0}),c("leid").addEventListener("change",z),i("vp-post").addEventListener("submit",function(a){a.preventDefault(),y(i("vp-p-vista"),it)}),i("vp-p-gefa").addEventListener("click",function(){y(this,function(){return it().then(function(a){return Y("postGefa",{id:a.id})}).then(function(a){L=a.stillingar||L,d=a.post,z();var n=a.nyr?"N\xFDr k\xF3\xF0i: "+a.post.kodi:"Mi\xF0illinn \xE1tti k\xF3\xF0a fyrir: "+a.post.kodi,s=t();return(s?it():Promise.resolve()).then(function(){return p(n+(s?". Hlekkirnir eru komnir inn \xED textann.":"")),Promise.all([j(),H()])})})})}),i("vp-p-opna").addEventListener("click",function(){var a=this;o(function(n){var s=c("netfang").value.trim(),v=c("fra").value;if(c("leid").value!=="P\xF3stur"){St(n,a);var C=/^https?:\/\//i.test(s)?s:"";C&&window.open(C,"_blank","noopener"),p(C?"Meginm\xE1li\xF0 er afrita\xF0 og sl\xF3\xF0in opnu\xF0.":"Meginm\xE1li\xF0 er afrita\xF0. Engin sl\xF3\xF0 er skr\xE1\xF0.");return}if(!$.test(s)){p("Netfang vantar e\xF0a er ekki gilt.");return}var I="mailto:"+s+"?subject="+encodeURIComponent(c("efni").value)+"&body="+encodeURIComponent(n.replace(/\r?\n/g,`\r
`));p((v?"Sendu fr\xE1 "+v+". ":"")+(I.length>1900?"Langur p\xF3stur: ef meginm\xE1li\xF0 kemur klippt inn, nota\xF0u \u201ES\xE6kja sem dr\xF6g\u201C e\xF0a \u201EAfrita meginm\xE1l\u201C.":"")),location.href=I})}),i("vp-p-eml").addEventListener("click",function(){o(function(a){var n=c("netfang").value.trim();if(!$.test(n)){p("Netfang vantar e\xF0a er ekki gilt.");return}var s="Nafir - "+c("midill").value.trim().replace(/[\\/:*?"<>|]+/g," ")+".eml";pt(s,mt(n,c("fra").value,c("efni").value,a),"message/rfc822"),p("Opna\xF0u skr\xE1na "+s+": h\xFAn \xE1 a\xF0 opnast sem \xF3sendur p\xF3stur \xED p\xF3stforritinu.")})}),i("vp-p-afrita-efni").addEventListener("click",function(){St(c("efni").value,this)}),i("vp-p-afrita-meginmal").addEventListener("click",function(){var a=this;o(function(n){St(n,a)})}),i("vp-p-sent").addEventListener("click",function(){y(this,function(){return it().then(function(a){return Y("postStada",{id:a.id,stada:"Sent"})}).then(function(a){return d=a.post,u(a.post),z(),p("Merkt sent "+a.post.sent),H()})})});function m(){return Promise.all([j(),H()])}i("vp-gate").addEventListener("submit",function(a){a.preventDefault(),w=i("vp-key").value.trim(),ot(r,w),i("vp-key").value="",Z(!0),m()}),i("vp-gefa").addEventListener("submit",function(a){a.preventDefault();var n=i("vp-gefa-btn"),s=i("vp-status");n.disabled=!0,s.textContent="S\xE6ki k\xF3\xF0a...",Y("gefa",{vidtakandi:i("vp-nafn").value,netfang:i("vp-netfang").value}).then(function(v){return L=v.stillingar||L,J(v.lina,v.nyr?"n\xFDr k\xF3\xF0i":"\xE1tti k\xF3\xF0a fyrir"),s.textContent="",i("vp-nafn").value="",i("vp-netfang").value="",j()}).catch(function(v){s.textContent="Villa: "+v.message}).then(function(){n.disabled=!1})}),i("vp-mal").addEventListener("change",function(){G&&J(G)}),i("vp-afrita-blokk").addEventListener("click",function(){St(i("vp-blokk").value,this)}),i("vp-afrita-hlekk").addEventListener("click",function(){St(q(G.kodi).pressa,this)}),i("vp-uppfaera").addEventListener("click",m),i("vp-flytja-btn").addEventListener("click",function(){var a=this;a.disabled=!0,Y("flytjaInn",{texti:i("vp-innflutningur").value}).then(function(n){return i("vp-innflutningur").value="B\xE6tti vi\xF0 "+n.nyir+" k\xF3\xF0um (sett "+n.sett+"). Alls "+n.alls+".",j()}).catch(function(n){i("vp-innflutningur").value="Villa: "+n.message}).then(function(){a.disabled=!1})}),Z(!!w),w&&m()}var Ie=`<div class="vpp" data-mal-bidur>
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
</div>
`;function Pe(w){w.innerHTML=Ie;var r=new URLSearchParams(location.search),f=(r.get("k")||"").trim().toLowerCase(),i=r.has("preview");function L(k){return Array.prototype.slice.call(document.querySelectorAll(k))}var G="nafir-press-mal",w=document.querySelector(".vpp");function Y(k){return k==="is"||k==="en"?k:""}function Z(){try{return Y(localStorage.getItem(G))}catch{return""}}var q=Y(r.get("mal"))||Z();function _(k){w.setAttribute("data-mal",k),w.setAttribute("lang",k),w.removeAttribute("data-mal-bidur"),L("[data-mal-val]").forEach(function(S){S.setAttribute("aria-pressed",String(S.getAttribute("data-mal-val")===k))}),L("[data-alt-"+k+"]").forEach(function(S){S.alt=S.getAttribute("data-alt-"+k)})}L("[data-mal-val]").forEach(function(k){k.addEventListener("click",function(){q=k.getAttribute("data-mal-val");try{localStorage.setItem(G,q)}catch{}_(q)})});function J(){return/^is\b/i.test(navigator.language||"")?"is":"en"}q&&_(q),setTimeout(function(){w.hasAttribute("data-mal-bidur")&&_(J())},4e3);function O(k){L("[data-promo-state]").forEach(function(S){S.hidden=S.getAttribute("data-promo-state")!==k})}function U(k,S){return fetch(Kt,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(k),keepalive:!!S})}function j(k,S,$){L('[data-promo="'+k+'"]').forEach(function(at){at.href=S,!i&&at.addEventListener("click",function(){U({action:"smellur",k:f,hvad:$},!0).catch(function(){})})})}function A(k,S){w.hasAttribute("data-mal-bidur")&&_(Y(S)||J()),O(k)}if(!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(f)){A("invalid");return}O("loading"),U({action:"pressa",k:f,forskodun:i}).then(function(k){return k.json()}).then(function(k){if(!k.ok){A(k.villa?"error":"invalid");return}L('[data-promo="name"]').forEach(function(S){S.textContent=k.vidtakandi}),L('[data-promo="code"]').forEach(function(S){S.textContent=k.kodi}),j("listen",k.stream,"hlusta"),j("download",k.download,"saekja"),A("ok",k.mal||"en")}).catch(function(){A("error")})}var He="T\xF3nab\xED\xF3 \xB7 laugardaginn 12.&nbsp;desember kl.&nbsp;20";function xt(l){return String(l??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Zt(l){return xt(l).replace(/(kl\.|\b\d+\.) (?=[a-záðéíóúýþæö\d])/g,"$1&nbsp;")}function aa(l){let r=/[.?!] /.exec(l);return r?"<b>"+Zt(l.slice(0,r.index+1))+"</b> "+Zt(l.slice(r.index+2)):Zt(l)}function Me(l,{saga:r=!1,plakat:f=""}={}){let i=String(l.meginmal||"").trim(),L=String(l.undirskrift||"").trim(),G=String(l.heimild||"").trim(),w=r&&f?` style="--plakat: url('${xt(f)}')"`:"";return`<div class="spj${r?" spj--saga":""}"${w}><div class="urklippa"><div class="haus">Sm\xE1augl\xFDsingar <small>A\xF0venta 2026</small></div><div class="flokkur">${xt(l.flokkur)}</div><div class="rammi"><p class="meginmal${i.length>=260?" meginmal--langt":""}">${aa(i)}</p>`+(L?`<p class="undirskrift">${xt(L)}</p>`:"")+"</div>"+(G?`<p class="heimild">${xt(G)}</p>`:"")+`<div class="hvar-saga">${He}</div></div><div class="merki"><div class="per">Per: Segulsvi\xF0</div><div class="stund">A\xF0ventustund</div><div class="hvar">${He}</div></div></div>`}var Re=`<div class="yl">
  <div class="yl-innri">
    <header class="yl-haus">
      <h1>Sm\xE1augl\xFDsingar Per</h1>
      <p class="yl-undir">Yfirlestur fyrir A\xF0ventustundina 2026</p>
      <p class="yl-inngangur">\xDEetta eru augl\xFDsingarnar sem fara \xE1 s\xED\xF0u Per:Segulsvi\xF0s fram a\xF0 12. desember, \xED \xFEeirri r\xF6\xF0 sem \xFE\xE6r birtast. Laga\xF0u textann eins og \xFE\xE9r s\xFDnist; spjaldi\xF0 breytist um lei\xF0. \xDDttu \xE1 Vista \xFEegar \xFE\xFA ert s\xE1ttur. Allar breytingar eru skr\xE1\xF0ar, svo \xFEa\xF0 er \xF3h\xE6tt a\xF0 pr\xF3fa sig \xE1fram.</p>
      <div class="yl-hver" data-yl="hver" hidden><span>Hver ert \xFE\xFA?</span></div>
    </header>
    <p class="yl-stada" data-yl="stada">S\xE6ki augl\xFDsingarnar \u2026</p>
    <div data-yl="listi"></div>
  </div>
</div>
`;var ze=`/* \xDAtlit sm\xE1augl\xFDsingaspjaldsins hj\xE1 Per. Sama skr\xE1 teiknar spjaldi\xF0 \xE1
   yfirlestrars\xED\xF0unni (yfirlestur.js) og PNG-in (per-jolatonleikar/spjold/
   smaauglysingar.py, gegnum dist/per-spjald.js), svo breyting h\xE9r gildir \xE1
   b\xE1\xF0um st\xF6\xF0um. Allt er undir .spj svo st\xEDlar Webflow n\xE1i ekki inn.
   Spjaldi\xF0 er 1080 punktar \xE1 breidd; .spj--saga er Stories-\xFAtg\xE1fan (9:16). */
.spj {
  --graent: #9ab89c; --doppur: #4f8d60; --rautt: #a8183a; --gult: #e9b64c;
  --pappir: #f2ead8; --blek: #1d1a17;
  position: relative; box-sizing: border-box; width: 1080px; height: 1350px; overflow: hidden;
  background-color: var(--graent);
  background-image: radial-gradient(circle, var(--doppur) 1.5px, transparent 2.1px);
  background-size: 10px 10px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 44px; padding: 70px 0;
  font-family: 'Roboto Condensed', sans-serif; font-size: 30px; line-height: 1.3;
  color: var(--blek); text-align: left;
}
.spj * { margin: 0; box-sizing: border-box; }
.spj .urklippa {
  position: relative;
  width: 860px; background: var(--pappir); padding: 34px 40px 30px;
  transform: rotate(-1.4deg);
  box-shadow: 0 2px 0 rgba(0,0,0,.08), 10px 14px 0 rgba(40,60,45,.35);
}
.spj .urklippa::before, .spj .urklippa::after {
  content: ""; position: absolute; top: -22px; width: 150px; height: 46px;
  background: rgba(236,226,196,.78); box-shadow: 0 1px 2px rgba(0,0,0,.12);
}
.spj .urklippa::before { left: -30px; transform: rotate(-24deg); }
.spj .urklippa::after { right: -30px; transform: rotate(21deg); }
.spj .haus {
  background: var(--rautt); color: var(--pappir);
  font: 700 46px/1 'Oswald', sans-serif; letter-spacing: .06em; text-transform: uppercase;
  padding: 14px 20px 16px; display: flex; justify-content: space-between; align-items: baseline;
}
.spj .haus small { font-size: 24px; font-weight: 500; letter-spacing: .04em; }
.spj .flokkur {
  font: 700 34px/1 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: .05em;
  border-bottom: 3px solid var(--blek); padding: 22px 0 10px; margin-bottom: 18px;
}
.spj .rammi { border: 2px solid var(--blek); padding: 24px 28px 22px; }
.spj .meginmal { font-size: 40px; line-height: 1.32; hyphens: auto; white-space: pre-line; }
.spj .meginmal--langt { font-size: 36px; }
.spj .meginmal b { font-weight: 700; }
.spj .undirskrift { font-weight: 700; font-size: 30px; text-align: right; margin-top: 16px; }
.spj .heimild { font-style: italic; font-size: 24px; margin-top: 14px; opacity: .8; }
.spj .merki { text-align: center; line-height: 1; }
.spj .merki .per { font: 700 50px/1 'Oswald', sans-serif; letter-spacing: .01em; }
.spj .merki .stund {
  font: 400 150px/1.05 'Yellowtail', cursive; color: var(--rautt);
  text-shadow: 5px 5px 0 var(--gult); margin-top: -4px;
}
.spj .merki .hvar { font: 500 34px/1.2 'Oswald', sans-serif; letter-spacing: .04em; margin-top: 10px; }
.spj .hvar-saga { display: none; }

/* Stories: \xFArklippan l\xEDmd ne\xF0st \xE1 plakati\xF0, merki\xF0 er \xE1 plakatinu sj\xE1lfu.
   Sl\xF3\xF0 plakatsins kemur \xED --plakat \xE1 spjaldinu. Ne\xF0stu ~200 punktarnir eru
   undir svarreit og link-sticker \xED Story, svo \xFArklippan stendur ofar. */
.spj--saga {
  height: 1920px; justify-content: flex-start; padding: 0;
  /* Plakati\xF0 hli\xF0ra\xF0 upp svo merki\xF0 standi ofan vi\xF0 \xFArklippuna, og st\xE6kka\xF0
     um 130 punkta svo \xFEa\xF0 n\xE1i samt alla lei\xF0 ni\xF0ur */
  background: var(--plakat) center -130px / 1154px auto no-repeat var(--graent);
}
.spj--saga .merki { display: none; }
.spj--saga .urklippa {
  position: absolute; left: 50%; bottom: 210px;
  transform: translateX(-50%) rotate(1.6deg) scale(.8); transform-origin: bottom center;
}
.spj--saga .hvar-saga {
  display: block; margin-top: 18px; text-align: center;
  background: var(--rautt); color: var(--pappir); padding: 10px 20px 12px;
  font: 500 36px/1.2 'Oswald', sans-serif; letter-spacing: .04em;
}
`;var Ne=`/* Yfirlestrars\xED\xF0an \xE1 /per/auglysingar (yfirlestur.js). Spjaldi\xF0 sj\xE1lft er \xED spjald.css. */
.yl {
  --graent: #9ab89c; --doppur: #4f8d60; --rautt: #a8183a; --gult: #e9b64c;
  --pappir: #f2ead8; --blek: #1d1a17; --dauft: #6b645a; --lina: #cfc4ab;
  font-family: 'Roboto Condensed', sans-serif; font-size: 18px; line-height: 1.45; color: var(--blek);
  background-color: var(--graent);
  background-image: radial-gradient(circle, var(--doppur) 1.2px, transparent 1.7px);
  background-size: 9px 9px;
  min-height: 100vh; padding: 32px 16px 80px; box-sizing: border-box;
}
.yl *, .yl *::before, .yl *::after { box-sizing: border-box; }
.yl p, .yl h1, .yl h2 { margin: 0; }
.yl-innri { max-width: 1100px; margin: 0 auto; }
.yl-haus { background: var(--pappir); padding: 28px 28px 24px; margin-bottom: 28px; box-shadow: 8px 10px 0 rgba(40,60,45,.35); }
.yl-haus h1 { font: 700 40px/1.05 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: .04em; color: var(--rautt); }
.yl-haus .yl-undir { font: 500 20px/1.3 'Oswald', sans-serif; letter-spacing: .03em; margin-top: 6px; }
.yl-haus p.yl-inngangur { margin-top: 16px; max-width: 70ch; }
.yl-hver { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 18px; }
.yl-hver span { font-weight: 700; }
.yl button { font: inherit; cursor: pointer; }
.yl-hnappur {
  border: 2px solid var(--blek); background: transparent; color: var(--blek);
  padding: 6px 16px; font-family: 'Oswald', sans-serif !important; font-weight: 500; letter-spacing: .04em;
}
.yl-hnappur[aria-pressed="true"], .yl-hnappur--adal { background: var(--rautt); border-color: var(--rautt); color: var(--pappir); }
.yl-hnappur:disabled { opacity: .4; cursor: default; }
.yl-hnappur:focus-visible, .yl input:focus-visible, .yl textarea:focus-visible, .yl select:focus-visible { outline: 3px solid var(--gult); outline-offset: 2px; }
.yl-stada { background: var(--pappir); padding: 18px 22px; }
.yl-villa { color: var(--rautt); font-weight: 700; }

.yl-augl { background: var(--pappir); margin-bottom: 28px; box-shadow: 8px 10px 0 rgba(40,60,45,.35); }
.yl-augl-haus {
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 14px;
  padding: 14px 22px; border-bottom: 2px solid var(--blek);
}
.yl-augl-haus h2 { font: 700 24px/1.2 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: .04em; }
.yl-dags { color: var(--dauft); font-weight: 700; }
.yl-merki { margin-left: auto; font: 500 15px/1 'Oswald', sans-serif; letter-spacing: .05em; text-transform: uppercase; padding: 5px 10px; background: #ddd3bd; }
.yl-merki[data-stada="Sam\xFEykkt"] { background: #3f7d4f; color: #fff; }
.yl-merki[data-stada="P\xF3sta\xF0"] { background: var(--blek); color: var(--pappir); }
.yl-merki[data-stada="Sleppa"] { background: transparent; text-decoration: line-through; }
.yl-augl-efni { display: grid; grid-template-columns: minmax(0, 440px) minmax(0, 1fr); gap: 28px; padding: 22px; }
.yl-forskodun { position: relative; width: 100%; overflow: hidden; }
.yl-forskodun .spj { position: absolute; top: 0; left: 0; transform-origin: top left; }
/* Flokkurinn P\xF3stur: p\xF3stur \xE1n spjalds, bara textinn eins og hann fer \xFAt */
.yl-posttexti { white-space: pre-wrap; overflow-wrap: anywhere; background: #fff; color: #1c1e21; border-radius: 8px; padding: 16px 18px; font: 16px/1.5 -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; box-shadow: 0 1px 4px rgba(0,0,0,.25); }
.yl-posttexti small { display: block; margin-bottom: 8px; font-size: 13px; color: #65676b; }
.yl-form { display: grid; gap: 14px; align-content: start; }
.yl-form label { display: grid; gap: 4px; font-weight: 700; font-size: 16px; }
.yl-form label small { font-weight: 400; color: var(--dauft); }
.yl-tvennt { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.yl input, .yl textarea, .yl select {
  font: 18px/1.4 'Roboto Condensed', sans-serif; color: var(--blek); width: 100%;
  background: #fffaf0; border: 2px solid var(--lina); border-radius: 0; padding: 8px 10px; margin: 0;
}
.yl textarea { resize: vertical; }
.yl-adgerdir { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.yl-adgerdir p { color: var(--dauft); font-size: 16px; }
.yl-adgerdir p.yl-obreytt { color: var(--rautt); font-weight: 700; }

@media (max-width: 760px) {
  .yl { padding: 16px 16px 60px; }
  .yl-haus h1 { font-size: 30px; }
  .yl-augl-efni { grid-template-columns: minmax(0, 1fr); padding: 16px; }
  .yl-tvennt { grid-template-columns: minmax(0, 1fr); }
}
`;var sa="https://script.google.com/macros/s/AKfycbzQ-oaSyVQpcWQO2UkB0BkZToo-RlIdZR2Ap3iYBsb7BnAH4wkpNlWotDb_b9rdFHnG/exec",Oe="per-yfirlestur-lykill",De="per-yfirlestur-hver",oa="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&family=Yellowtail&display=swap",la=["sun","m\xE1n","\xFEri","mi\xF0","fim","f\xF6s","lau"],Ue=["jan","feb","mar","apr","ma\xED","j\xFAn","j\xFAl","\xE1g\xFA","sep","okt","n\xF3v","des"],Ut=["flokkur","meginmal","undirskrift","heimild","postur","birta","stada","athugasemd"];function da(){if(document.getElementById("per-yfirlestur-css"))return;let l=document.createElement("link");l.rel="stylesheet",l.href=oa,document.head.appendChild(l);let r=document.createElement("style");r.id="per-yfirlestur-css",r.textContent=ze+`
`+Ne,document.head.appendChild(r)}function rt(l,r,f){let i=document.createElement(l);return r&&(i.className=r),f!=null&&(i.textContent=f),i}function pa(l){let r=/^(\d{4})-(\d\d)-(\d\d)$/.exec(l||"");if(!r)return"";let f=new Date(Number(r[1]),Number(r[2])-1,Number(r[3]));return la[f.getDay()]+" "+f.getDate()+". "+Ue[f.getMonth()]}function ua(l){let r=/^(\d{4})-(\d\d)-(\d\d) (\d\d:\d\d)/.exec(l||"");return r?Number(r[3])+". "+Ue[Number(r[2])-1]+" kl. "+r[4]:""}function Be(l){da(),l.innerHTML=Re;let r=j=>l.querySelector('[data-yl="'+j+'"]'),{lykill:f}=Ct("k",Oe),i=vt(De),L={auglysingar:[],stodur:[],nofn:[]},G={};function w(j,A){let k=r("stada");k.hidden=!j,k.textContent=j||"",k.classList.toggle("yl-villa",!!A)}function Y(j){return Ot(sa,{...j,k:f}).then(A=>(A.rangurLykill&&ot(Oe,""),A))}function Z(j){let A=j.querySelector(".spj");if(!A){j.style.height="";return}let k=j.clientWidth/1080;j.style.height=Math.round(1350*k)+"px",A.style.transform="scale("+k+")"}let q=typeof ResizeObserver=="function"?new ResizeObserver(j=>j.forEach(A=>Z(A.target))):null;function _(){let j=r("hver");for(j.hidden=!1;j.children.length>1;)j.removeChild(j.lastChild);L.nofn.forEach(A=>{let k=rt("button","yl-hnappur",A);k.type="button",k.setAttribute("aria-pressed",String(A===i)),k.addEventListener("click",()=>{i=A,ot(De,A),_()}),j.appendChild(k)})}function J(j,A,k){let S=rt("label");return S.appendChild(document.createTextNode(j)),k&&S.appendChild(rt("small","",k)),S.appendChild(A),S}function O(j){let A=j,k=rt("article","yl-augl"),S=rt("div","yl-augl-haus"),$=rt("h2"),at=rt("span","yl-dags"),d=rt("span","yl-merki");S.append(at,$,d),k.appendChild(S);let c=rt("div","yl-augl-efni"),p=rt("div","yl-forskodun");p.setAttribute("aria-label","Forsko\xF0un spjaldsins"),c.appendChild(p);let M=rt("form","yl-form"),F={};function T(x,t,o){let b=rt(t);return o&&(b.type=o),t==="textarea"&&(b.rows=x==="meginmal"?7:x==="postur"?5:2),F[x]=b,b}M.appendChild(J("Flokkur",T("flokkur","input","text")));let D=J("Augl\xFDsingin",T("meginmal","textarea"),"Fyrsta setningin ver\xF0ur feitletru\xF0");M.appendChild(D);let H=rt("div","yl-tvennt");H.appendChild(J("Undirskrift",T("undirskrift","input","text"),"Ne\xF0st til h\xE6gri, m\xE1 vera t\xF3m")),H.appendChild(J("Sm\xE1tt letur undir",T("heimild","input","text"),"M\xE1 vera t\xF3mt")),M.appendChild(H),M.appendChild(J("Texti me\xF0 p\xF3stinum",T("postur","textarea"),"Fer \xE1 Facebook og Instagram me\xF0 myndinni"));let z=rt("div","yl-tvennt");z.appendChild(J("Fer \xED lofti\xF0",T("birta","input","date")));let et=T("stada","select");L.stodur.forEach(x=>{let t=rt("option","",x);t.value=x,et.appendChild(t)}),z.appendChild(J("Sta\xF0a",et)),M.appendChild(z),M.appendChild(J("Athugasemd",T("athugasemd","textarea"),"Til \xD3la, fer ekki \xE1 spjaldi\xF0"));let dt=rt("div","yl-adgerdir"),mt=rt("button","yl-hnappur yl-hnappur--adal","Vista");mt.type="submit";let pt=rt("button","yl-hnappur","Afturkalla");pt.type="button";let g=rt("p");g.setAttribute("aria-live","polite"),dt.append(mt,pt,g),M.appendChild(dt),c.appendChild(M),k.appendChild(c);function u(){let x={};return Ut.forEach(t=>x[t]=F[t].value),x}function Q(){let x=u();return Ut.filter(t=>x[t]!==(A[t]||""))}function X(x){let t=u();$.textContent=t.flokkur||A.nafn,at.textContent=pa(t.birta)||"Engin dagsetning",d.textContent=t.stada,d.setAttribute("data-stada",t.stada);let o=t.flokkur.trim()==="P\xF3stur";D.hidden=H.hidden=o,p.innerHTML=o?'<div class="yl-posttexti"><small>P\xF3stur \xE1n spjalds'+(t.athugasemd.trim()?". "+xt(t.athugasemd.trim()):"")+"</small>"+xt(t.postur)+"</div>":Me(t),Z(p);let b=Q();G[A.nafn]=b.length>0,mt.disabled=pt.disabled=!b.length,x?(g.textContent=x,g.className=""):b.length?(g.textContent="\xD3vista\xF0ar breytingar",g.className="yl-obreytt"):(g.textContent=A.breytt&&A.breyttAf?"S\xED\xF0ast vista\xF0 "+ua(A.breytt)+" af "+A.breyttAf:"",g.className="")}function it(x){Ut.forEach(t=>F[t].value=x[t]||"")}return it(j),Ut.forEach(x=>{F[x].addEventListener(x==="stada"||x==="birta"?"change":"input",()=>X())}),pt.addEventListener("click",()=>{it(A),X()}),M.addEventListener("submit",x=>{if(x.preventDefault(),!i){X("Veldu fyrst hver \xFE\xFA ert, efst \xE1 s\xED\xF0unni."),g.className="yl-obreytt",r("hver").scrollIntoView({behavior:"smooth",block:"center"});return}let t={};Q().forEach(o=>t[o]=F[o].value),mt.disabled=pt.disabled=!0,g.textContent="Vista \u2026",Y({action:"vista",nafn:A.nafn,hver:i,breytt:A.breytt,reitir:t}).then(o=>{if(o.arekstur){A=o.auglysing,X(o.villa),g.className="yl-obreytt";return}if(!o.ok)throw new Error(o.rangurLykill?"Hlekkurinn gildir ekki lengur.":o.villa);A=o.auglysing,it(A),X()}).catch(o=>{X("T\xF3kst ekki a\xF0 vista. "+o.message),g.className="yl-obreytt"})}),q&&q.observe(p),setTimeout(X,0),k}function U(){let j=r("listi");j.innerHTML="";let A=S=>S.birta||"9999",k=L.auglysingar.slice().sort((S,$)=>A(S)<A($)?-1:A(S)>A($)?1:0);k.forEach(S=>j.appendChild(O(S))),w(k.length?"":"Engar augl\xFDsingar komnar inn enn\xFE\xE1.")}if(window.addEventListener("beforeunload",j=>{Object.values(G).some(Boolean)&&(j.preventDefault(),j.returnValue="")}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>l.querySelectorAll(".yl-forskodun").forEach(Z)),!f){w("\xDEessi s\xED\xF0a opnast me\xF0 hlekknum sem \xD3li sendi. Biddu hann um hlekkinn.",!0);return}Y({action:"lesa"}).then(j=>{if(!j.ok){w(j.rangurLykill?"Hlekkurinn gildir ekki. Biddu \xD3la um n\xFDjan.":"Villa: "+j.villa,!0);return}L=j,L.nofn.indexOf(i)===-1&&(i=""),_(),U()}).catch(j=>w(j.message+" Reyndu a\xF0 endurhla\xF0a s\xED\xF0una.",!0))}var fa={stada:ye,birta:Ae,stjorn:Te,pressa:Pe,yfirlestur:Be},ma={stada:!0,birta:!0,stjorn:!0,yfirlestur:!0},ca={stada:!0,birta:!0,pressa:!0};function Fe(){let l=document.querySelectorAll("[data-nafir]");if(l.length){if(!document.getElementById("nafir-css")){let r=document.createElement("style");r.id="nafir-css",r.textContent=ue,document.head.appendChild(r)}document.querySelector('[data-verkefni]:not([data-verkefni="nafir"])')||he(),l.forEach(function(r){let f=r.getAttribute("data-nafir"),i=fa[f];if(!(!i||r.hasAttribute("data-nafir-raest"))&&(r.setAttribute("data-nafir-raest",""),ca[f]&&document.body.classList.add("nafir-beige"),i(r),ma[f])){let L=r.getAttribute("data-verkefni")==="per"?"per":"nafir";(r.querySelector(".yl-innri")||r.firstElementChild||r).prepend(be(L))}})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fe):Fe();})();
//# sourceMappingURL=nafir.js.map
