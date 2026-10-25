(()=>{var l="T\xF3nab\xED\xF3 \xB7 laugardaginn 12.&nbsp;desember kl.&nbsp;20";function i(a){return String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function r(a){return i(a).replace(/(kl\.|\b\d+\.) (?=[a-záðéíóúýþæö\d])/g,"$1&nbsp;")}function u(a){let e=/[.?!] /.exec(a);return e?"<b>"+r(a.slice(0,e.index+1))+"</b> "+r(a.slice(e.index+2)):r(a)}function o(a,{saga:e=!1,plakat:t=""}={}){let s=String(a.meginmal||"").trim(),p=String(a.undirskrift||"").trim(),n=String(a.heimild||"").trim(),g=e&&t?` style="--plakat: url('${i(t)}')"`:"";return`<div class="spj${e?" spj--saga":""}"${g}><div class="urklippa"><div class="haus">Sm\xE1augl\xFDsingar <small>A\xF0venta 2026</small></div><div class="flokkur">${i(a.flokkur)}</div><div class="rammi"><p class="meginmal${s.length>=260?" meginmal--langt":""}">${u(s)}</p>`+(p?`<p class="undirskrift">${i(p)}</p>`:"")+"</div>"+(n?`<p class="heimild">${i(n)}</p>`:"")+`<div class="hvar-saga">${l}</div></div><div class="merki"><div class="per">Per: Segulsvi\xF0</div><div class="stund">A\xF0ventustund</div><div class="hvar">${l}</div></div></div>`}var d=`/* \xDAtlit sm\xE1augl\xFDsingaspjaldsins hj\xE1 Per. Sama skr\xE1 teiknar spjaldi\xF0 \xE1
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
`;window.perSpjald={teikna(a,e){let t=document.createElement("style");t.textContent=d,document.head.appendChild(t),document.body.innerHTML=o(a,e)}};})();
