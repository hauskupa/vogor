// Hleðsla Nafir-síðnanna: sækir dist/nafir.js FESTA á nýjasta commit á main.
//
// jsDelivr getur verið klukkutímum á eftir með @main, jafnvel eftir purge, en
// @<sha> er alltaf rétt og óbreytanlegt. Þessi skrá spyr GitHub hvert nýjasta
// commit-ið er og hleður þá útgáfu. Hún er sjálf fest á commit í embed-inu og
// á aldrei að þurfa að breytast:
//   <div data-nafir="stada"></div>
//   <script src="https://cdn.jsdelivr.net/gh/hauskupa/vogor@<sha>/dist/nafir-hledsla.js"></script>
//
// ?nafir=<sha> aftan á slóðinni hleður ákveðna útgáfu, t.d. til að prófa eða
// fara til baka. Ef GitHub svarar ekki er @main notað.
(function () {
  if (window.__nafirHledsla) return;
  window.__nafirHledsla = true;

  var CDN = "https://cdn.jsdelivr.net/gh/hauskupa/vogor@";
  var GEYMSLA = "nafir-sha";
  var MINUTUR = 2;   // GitHub leyfir 60 fyrirspurnir á klst. frá hverri IP-tölu

  function hlada(ref) {
    var s = document.createElement("script");
    s.src = CDN + ref + "/dist/nafir.js";
    document.head.appendChild(s);
  }

  var valin = new URLSearchParams(location.search).get("nafir");
  if (valin && /^[0-9a-f]{7,40}$|^main$/.test(valin)) return hlada(valin);

  try {
    var g = JSON.parse(sessionStorage.getItem(GEYMSLA) || "null");
    if (g && Date.now() - g.t < MINUTUR * 60000) return hlada(g.sha);
  } catch (e) {}

  fetch("https://api.github.com/repos/hauskupa/vogor/commits/main", { headers: { Accept: "application/vnd.github.sha" } })
    .then(function (r) { return r.ok ? r.text() : Promise.reject(r.status); })
    .then(function (sha) {
      sha = sha.trim();
      if (!/^[0-9a-f]{40}$/.test(sha)) throw sha;
      try { sessionStorage.setItem(GEYMSLA, JSON.stringify({ sha: sha, t: Date.now() })); } catch (e) {}
      hlada(sha);
    })
    .catch(function () { hlada("main"); });
})();
