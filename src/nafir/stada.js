// Yfirlit bandsins á /nafir/stada. Embed: <div data-nafir="stada"></div> og dist/nafir.js.
// Gögnin koma úr Sheet-inu "Nafir promo" (vinnusvaedi/vogor-releases/promo, LESTU.md).
import { MANUDIR, post, ny, afritaTakki, hlekkur, hrar } from "./sameiginlegt.js";

const MARKUP = "<div class=\"vst\">\n  <div class=\"vst-head\">\n    <div class=\"vst-dymo vst-dymo--red\">|NAFIR|YFIRLIT|</div>\n    <div class=\"vst-counts\">\n      <div class=\"vst-count\"><span class=\"vst-counter\" data-st=\"dagar-preorder\">--</span><span data-st=\"texti-preorder\">dagar í pre-order</span></div>\n      <div class=\"vst-count\"><span class=\"vst-counter\" data-st=\"dagar-utgafa\">--</span><span data-st=\"texti-utgafa\">dagar í útgáfu</span></div>\n    </div>\n  </div>\n\n  <p class=\"vst-status\" data-st-state=\"loading\"><span class=\"vst-led vst-led--wait\"></span>Sæki stöðuna</p>\n\n  <div data-st-state=\"invalid\" hidden>\n    <p class=\"vst-status\"><span class=\"vst-led vst-led--late\"></span>Hlekk vantar</p>\n    <p>Þessi síða opnast með hlekknum sem Óli sendi á bandið. Biddu hann um hlekkinn ef þú finnur hann ekki.</p>\n  </div>\n\n  <div data-st-state=\"error\" hidden>\n    <p class=\"vst-status\"><span class=\"vst-led vst-led--late\"></span>Náði ekki í stöðuna</p>\n    <p data-st=\"villa\">Prófaðu að endurhlaða síðuna.</p>\n  </div>\n\n  <div class=\"vst-body\" data-st-state=\"ok\" hidden>\n    <section class=\"vst-screen\">\n      <div class=\"vst-screen-row\">\n        <span class=\"vst-screen-label\">Verk lokið</span>\n        <span class=\"vst-screen-value\" data-st=\"hlutfall\"></span>\n      </div>\n      <div class=\"vst-meter\" data-st=\"maelir\" role=\"img\"></div>\n    </section>\n\n    <section>\n      <div class=\"vst-dymo\">|NÆST|Á|DAGSKRÁ|</div>\n      <p class=\"vst-small vst-hint\">Breyttu stöðu verks eða hver á það með fellilistunum. Breytingin vistast strax.</p>\n      <p class=\"vst-small vst-msg\" data-st=\"skilabod\" role=\"status\"></p>\n      <ul class=\"vst-list\" data-st=\"naest\"></ul>\n    </section>\n\n    <section data-st=\"meta-kafli\" hidden>\n      <div class=\"vst-dymo\">|FACEBOOK|INSTAGRAM|</div>\n      <div class=\"vst-counts vst-hint\" data-st=\"fylgjendur\"></div>\n      <div class=\"vst-scroll\">\n        <table class=\"vst-table\">\n          <thead><tr><th>Birt</th><th>Miðill</th><th>Tegund</th><th>Texti</th><th>Ná</th><th>Áhorf</th><th>Viðbrögð</th></tr></thead>\n          <tbody data-st=\"meta\"></tbody>\n        </table>\n      </div>\n      <p class=\"vst-small\">Sótt af síðunni og Instagram á 6 tíma fresti, síðast <span data-st=\"meta-sott\"></span>. Ná er hve margir sáu færsluna, viðbrögð eru líkar, ummæli, deilingar og vistanir. Stories lifa í sólarhring og sjást hér ef þær náðust.</p>\n    </section>\n\n    <section data-st=\"efni-kafli\" hidden>\n      <div class=\"vst-dymo\">|EFNI|</div>\n      <p class=\"vst-small vst-hint\">Textar, hlekkir og myndir til að deila. Smelltu á hnapp til að afrita. Færslur á samfélagsmiðla má laga hér og merkja þegar þær eru farnar út. Bio og lagatextar eru lagaðir hjá Óla.</p>\n      <label class=\"vst-small vst-eg\">Hver ert þú? <select data-st=\"eg\"></select></label>\n      <div class=\"vst-groups\" data-st=\"efni\"></div>\n    </section>\n\n    <section>\n      <div class=\"vst-dymo\">|ÖLL|VERKEFNI|</div>\n      <div class=\"vst-groups\" data-st=\"hopar\"></div>\n    </section>\n\n    <section>\n      <div class=\"vst-dymo\">|PRESSA|</div>\n      <div class=\"vst-scroll\">\n        <table class=\"vst-table\">\n          <thead><tr><th>Miðill</th><th>Staða</th><th>Hver</th><th>Sent</th><th>Opnaði síðuna</th><th>Hlustaði</th><th>Sótti</th></tr></thead>\n          <tbody data-st=\"pressa\"></tbody>\n        </table>\n      </div>\n      <p class=\"vst-small\">Markhópurinn: miðlar sem við ætlum að senda á og þeir sem hafa þegar fengið póst. Opnun, hlustun og niðurhal sjást hjá þeim sem fengu persónulegan hlekk á pressusíðuna.</p>\n    </section>\n\n    <section class=\"vst-foot\">\n      <ul class=\"vst-legend\">\n        <li><span class=\"vst-led vst-led--done\"></span>Lokið</li>\n        <li><span class=\"vst-led vst-led--work\"></span>Í vinnslu</li>\n        <li><span class=\"vst-led vst-led--hold\"></span>Bíður</li>\n        <li><span class=\"vst-led\"></span>Óbyrjað</li>\n        <li><span class=\"vst-led vst-led--late\"></span>Komið fram yfir frest</li>\n      </ul>\n      <div class=\"vst-keys\">\n        <a class=\"vst-key\" data-st=\"stream\" target=\"_blank\" rel=\"noopener\">Hlusta á plötuna</a>\n        <button class=\"vst-key\" type=\"button\" data-st=\"uppfaera\">Uppfæra</button>\n      </div>\n      <p class=\"vst-small\">Sótt <span data-st=\"uppfaert\"></span>. Frestum, heitum og nýjum verkum er breytt í Sheet-inu hjá Óla.</p>\n    </section>\n  </div>\n</div>";

export function stada(rot) {
  rot.innerHTML = MARKUP;

  var LYKILL = "vogor-band-key";
  var NAFN = "vogor-band-nafn";
  var LED = { "Lokið": "done", "Í vinnslu": "work", "Bíður": "hold" };
  var STODUR = ["Óbyrjað", "Í vinnslu", "Bíður", "Lokið"];
  // Litur línu í pressutöflunni eftir stöðu pósts; hinar stöðurnar eru ólitaðar
  var STADA_LITUR = { "Sent": "sent", "Svarað": "svarad", "Skoppaði": "skoppadi", "Sleppt": "sleppt" };

  function q(nafn) { return rot.querySelector('[data-st="' + nafn + '"]'); }

  function stada(nafn) {
    Array.prototype.forEach.call(rot.querySelectorAll("[data-st-state]"), function (n) {
      n.hidden = n.getAttribute("data-st-state") !== nafn;
    });
  }

  var b = new URLSearchParams(location.search).get("b") || "";
  if (!b) { try { b = localStorage.getItem(LYKILL) || ""; } catch (e) {} }

  // "2026-10-30" -> Date á miðnætti að staðartíma; annað (t.d. "nóv") -> null
  function dags(s) {
    var m = /^(\d{4})-(\d\d)-(\d\d)$/.exec(s || "");
    return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : null;
  }
  function stutt(s) {
    var d = dags(s);
    return d ? d.getDate() + ". " + MANUDIR[d.getMonth()] : (s || "");
  }
  var idag = new Date();
  idag.setHours(0, 0, 0, 0);
  function dagarTil(s) {
    var d = dags(s);
    return d ? Math.round((d - idag) / 86400000) : null;
  }

  function teljari(nafn, dagsetning, texti) {
    var n = dagarTil(dagsetning);
    if (n == null) return;
    q("dagar-" + nafn).textContent = n > 0 ? n : "0";
    q("texti-" + nafn).textContent = n > 1 ? "dagar í " + texti : n === 1 ? "dagur í " + texti : n === 0 ? texti + " í dag" : texti + " komið";
  }

  function lina(v) {
    var lokid = v.stada === "Lokið";
    var d = dagarTil(v.frestur);
    var seint = !lokid && d != null && d < 0;
    var li = ny("li", lokid ? "vst-lokid" : seint ? "vst-seint" : "");
    var led = ny("span", "vst-led" + (seint ? " vst-led--late" : LED[v.stada] ? " vst-led--" + LED[v.stada] : ""));
    led.title = seint ? v.stada + ", komið fram yfir frest" : v.stada;
    li.appendChild(led);
    var verk = ny("span", "vst-verk", v.verk);
    if (v.notur && !lokid) verk.appendChild(ny("small", "", v.notur));
    li.appendChild(verk);
    var val = ny("span", "vst-val");
    val.appendChild(velja(v, "stada", STODUR, "Staða verksins: "));
    val.appendChild(velja(v, "hver", [""].concat(gogn.band || []), "Hver á verkið: "));
    li.appendChild(val);
    li.appendChild(ny("span", "vst-frestur", stutt(v.frestur)));
    return li;
  }

  // Fellilisti fyrir einn reit verks: "stada" eða "hver"
  function velja(v, reitur, gildi, lysing) {
    var sel = ny("select");
    sel.setAttribute("aria-label", lysing + v.verk);
    if (gildi.indexOf(v[reitur]) === -1) gildi = gildi.concat([v[reitur]]);   // gildi utan listans helst sýnilegt
    gildi.forEach(function (g) {
      var o = ny("option", "", g || "Enginn");
      o.value = g;
      sel.appendChild(o);
    });
    sel.value = v[reitur];
    sel.addEventListener("change", function () { breyta(v, reitur, sel); });
    return sel;
  }

  function breyta(v, reitur, sel) {
    var beidni = { action: "bandBreyta", b: b, rod: v.rod, verk: v.verk };
    beidni[reitur] = sel.value;
    sel.disabled = true;
    q("skilabod").textContent = "";
    post(beidni)
      .then(function (r) {
        if (!r.ok) throw new Error(r.villa || "Hlekkurinn gildir ekki lengur.");
        v.hver = r.hver;
        v.stada = r.stada;
      })
      .catch(function (err) {
        q("skilabod").textContent = "Tókst ekki að vista: " + (err.message === "Failed to fetch" ? "ekkert samband." : err.message);
      })
      // Sama verk getur sést á tveimur stöðum og staðan hreyfir mælinn; teikna allt aftur
      .then(function () { teikna(gogn); });
  }

  var gogn = {};
  function teikna(r) {
    gogn = r;
    teljari("preorder", r.preorder, "pre-order");
    teljari("utgafa", r.utgafa, "útgáfu");

    var alls = r.verkefni.length;
    var lokid = r.verkefni.filter(function (v) { return v.stada === "Lokið"; }).length;
    q("hlutfall").textContent = lokid + " / " + alls;
    var maelir = q("maelir");
    maelir.textContent = "";
    maelir.setAttribute("aria-label", lokid + " af " + alls + " verkum lokið");
    for (var i = 0; i < alls; i++) maelir.appendChild(ny("span", i < lokid ? "on" : ""));

    // Næst: opin verk með dagsetningu, elsti frestur fyrst
    var naest = q("naest");
    naest.textContent = "";
    r.verkefni
      .filter(function (v) { return v.stada !== "Lokið" && dags(v.frestur); })
      .sort(function (a, c) { return dags(a.frestur) - dags(c.frestur); })
      .slice(0, 7)
      .forEach(function (v) { naest.appendChild(lina(v)); });
    if (!naest.children.length) naest.appendChild(ny("li", "", "Ekkert á dagskrá með fresti."));

    // Öll verkefni, í sömu röð og flokkum og í Sheet-inu
    var hopar = q("hopar");
    // Muna hvaða hópa notandinn opnaði eða lokaði, svo endurteikning breyti því ekki
    var opid = {};
    Array.prototype.forEach.call(hopar.children, function (d) { opid[d.getAttribute("data-flokkur")] = d.open; });
    hopar.textContent = "";
    var rod = [], eftir = {};
    r.verkefni.forEach(function (v) {
      var f = v.flokkur || "Annað";
      if (!eftir[f]) { eftir[f] = []; rod.push(f); }
      eftir[f].push(v);
    });
    rod.forEach(function (f) {
      var verk = eftir[f];
      var buid = verk.filter(function (v) { return v.stada === "Lokið"; }).length;
      var det = ny("details", "vst-group");
      det.setAttribute("data-flokkur", f);
      det.open = f in opid ? opid[f] : buid < verk.length;   // hópar sem eru alveg búnir byrja lokaðir
      var sum = ny("summary");
      sum.appendChild(ny("span", "", f));
      sum.appendChild(ny("span", "", buid + "/" + verk.length));
      det.appendChild(sum);
      var ul = ny("ul");
      verk.forEach(function (v) { ul.appendChild(lina(v)); });
      det.appendChild(ul);
      hopar.appendChild(det);
    });

    var pressa = q("pressa");
    pressa.textContent = "";
    // Bakendinn raðar eftir flokki; fyrirsagnarlína þar sem nýr flokkur byrjar.
    // Eldri bakendi skilar engum flokki og þá kemur engin fyrirsögn
    var flokkur = null;
    var flokkad = r.pressa.some(function (p) { return p.flokkur; });
    r.pressa.forEach(function (p) {
      if (flokkad && (p.flokkur || "") !== flokkur) {
        flokkur = p.flokkur || "";
        var haus = ny("tr", "vst-flokkur");
        var th = ny("th", "", flokkur || "Óflokkað");
        th.colSpan = 7;
        haus.appendChild(th);
        pressa.appendChild(haus);
      }
      var tr = ny("tr", STADA_LITUR[p.stada || "Sent"] ? "vst-st-" + STADA_LITUR[p.stada || "Sent"] : "");
      tr.appendChild(ny("td", "", p.midill));
      // Eldri bakendi skilar ekki stöðu: þá eru allar línur sendir hlekkir
      tr.appendChild(ny("td", "", p.stada || "Sent"));
      tr.appendChild(ny("td", "", p.hver || "–"));
      tr.appendChild(ny("td", "", stutt(p.sent) || "–"));
      tr.appendChild(ny("td", "", p.opnad ? stutt(p.opnad) + (p.opnanir > 1 ? " (" + p.opnanir + "×)" : "") : "–"));
      tr.appendChild(ny("td", "", stutt(p.hlusta) || "–"));
      tr.appendChild(ny("td", "", stutt(p.saekja) || "–"));
      pressa.appendChild(tr);
    });
    if (!r.pressa.length) {
      var tom = ny("td", "", "Enginn á markhópslistanum ennþá.");
      tom.colSpan = 7;
      pressa.appendChild(ny("tr")).appendChild(tom);
    }

    teiknaNofn(r.band || []);
    teiknaMeta(r.meta);
    teiknaEfni(r.efni || []);

    if (r.stream) q("stream").href = r.stream; else q("stream").hidden = true;
    q("uppfaert").textContent = r.uppfaert;
  }




  var MYND = /\.(jpe?g|png|gif|webp)$/i;
  var MYNDBAND = /\.(mp4|mov|m4v|webm)$/i;
  var FAERSLUR = "Samfélagsmiðlar";
  var EFNI_STODUR = ["Drög", "Samþykkt", "Póstað", "Sleppa"];
  var STADA_KLASI = { "Póstað": "postad", "Sleppa": "sleppa" };

  // Dropbox-hlekkur opnar vefsíðu; raw=1 skilar skránni sjálfri, svo hún sést sem mynd
  function slodSkra(slod) {
    try {
      var u = new URL(slod);
      return { nafn: decodeURIComponent(u.pathname.split("/").pop() || ""), dropbox: /(^|\.)dropbox\.com$/.test(u.hostname), u: u };
    } catch (e) { return { nafn: "", dropbox: false, u: null }; }
  }

  function slodHluti(x) {
    var s = slodSkra(x.slod);
    var box = ny("div", "vst-slod");
    if (MYND.test(s.nafn)) {
      var img = ny("img", "vst-mynd");
      img.src = hrar(x.slod);
      img.alt = x.heiti || "";
      img.loading = "lazy";
      var ramma = hlekkur(x.slod);
      ramma.appendChild(img);
      box.appendChild(ramma);
      box.appendChild(hlekkur(x.slod, "vst-afrita", "Opna í fullri stærð"));
    } else if (s.dropbox) {
      var heiti = /\/fo\//.test(s.u.pathname) ? "Mappa í Dropbox" : (MYNDBAND.test(s.nafn) ? "Myndband: " : "Dropbox: ") + s.nafn;
      box.appendChild(hlekkur(x.slod, "", heiti));
    } else {
      box.appendChild(hlekkur(x.slod, "", x.slod.replace(/^https?:\/\/(www\.)?/, "")));
    }
    box.appendChild(afritaTakki(x.slod, "Afrita hlekk"));
    return box;
  }

  function utbuinnTakki(texti, cls) {
    var t = ny("button", "vst-afrita" + (cls ? " " + cls : ""), texti);
    t.type = "button";
    return t;
  }

  function kalla(beidni) {
    beidni.b = b;
    return post(beidni)
      .catch(function (err) { return { ok: false, villa: err.message === "Failed to fetch" ? "Ekkert samband." : err.message }; });
  }

  function eg() { return q("eg").value; }

  // Setur nýju útgáfuna af bút í gögnin og teiknar kortið hans upp á nýtt
  function setjaBut(x, kort) {
    var listi = gogn.efni || [];
    for (var i = 0; i < listi.length; i++) if (listi[i].id === x.id) listi[i] = x;
    var nytt = butur(x);
    kort.parentNode.replaceChild(nytt, kort);
    return nytt;
  }

  function butur(x) {
    var faersla = x.flokkur === FAERSLUR;
    var breytanlegur = !/^md-/.test(x.id);
    var kort = ny("article", "vst-but" + (faersla && STADA_KLASI[x.stada] ? " vst-but-" + STADA_KLASI[x.stada] : ""));
    var haus = ny("div", "vst-but-haus");
    haus.appendChild(ny("span", "vst-but-heiti", x.heiti || "Án heitis"));
    var hlid = ny("span", "vst-but-hlid");
    if (x.birta) {
      var d = dagarTil(x.birta);
      var farin = x.stada === "Póstað" || x.stada === "Sleppa";
      var seint = faersla && !farin && d != null && d < 0;
      hlid.appendChild(ny("span", "vst-but-birta" + (d === 0 ? " vst-idag" : "") + (seint ? " vst-but-seint" : ""),
        d === 0 ? "Í dag" : stutt(x.birta) + (seint ? ", ekki póstað" : "")));
      if (d != null && d < 0 && (!faersla || farin)) kort.classList.add("vst-but-lidid");
    }
    // Bútur án birtingardags (t.d. planið) er ekki færsla og fær enga stöðu
    if (faersla && breytanlegur && x.birta) {
      var sel = ny("select");
      sel.setAttribute("aria-label", "Staða færslunnar " + (x.heiti || ""));
      EFNI_STODUR.forEach(function (s) { var o = ny("option", "", s); o.value = s; sel.appendChild(o); });
      sel.value = x.stada || EFNI_STODUR[0];
      sel.addEventListener("change", function () {
        if (!eg()) { sel.value = x.stada; villa(kort, "Veldu hver þú ert efst í Efni."); return; }
        sel.disabled = true;
        kalla({ action: "bandEfniVista", id: x.id, hver: eg(), reitir: { stada: sel.value } }).then(function (r) {
          if (r.ok) setjaBut(r.but, kort);
          else { sel.disabled = false; sel.value = x.stada; villa(kort, r.villa); }
        });
      });
      hlid.appendChild(sel);
    }
    if (breytanlegur) {
      var breyta = utbuinnTakki("Breyta", "vst-but-takki");
      breyta.addEventListener("click", function () { forma(x, kort); });
      hlid.appendChild(breyta);
    }
    haus.appendChild(hlid);
    kort.appendChild(haus);

    // Tölur af Facebook og Instagram, ef færslan fannst þar
    var birtar = gogn.meta ? gogn.meta.faerslur.filter(function (p) { return p.efni === x.id; }) : [];
    if (birtar.length) {
      var tolur = ny("p", "vst-but-meta");
      birtar.forEach(function (p) {
        tolur.appendChild(hlekkur(p.hlekkur, "", p.midill + ": " + (p.na != null ? "ná " + p.na + ", " : "") + p.vidbrogd + " viðbrögð"));
      });
      kort.appendChild(tolur);
    }

    if (x.slod) kort.appendChild(slodHluti(x));

    var mal = [["is", "Íslenska"], ["en", "English"]].filter(function (m) { return x[m[0]]; });
    if (mal.length) {
      var hlidar = ny("div", "vst-maltextar");
      mal.forEach(function (m) {
        var dalkur = ny("div", "vst-maltexti");
        if (mal.length > 1) dalkur.appendChild(ny("span", "vst-mal", m[1]));
        dalkur.appendChild(ny("pre", "vst-texti", x[m[0]]));
        dalkur.appendChild(afritaTakki(x[m[0]]));
        hlidar.appendChild(dalkur);
      });
      kort.appendChild(hlidar);
    }

    if (x.notur) kort.appendChild(ny("p", "vst-but-notur", x.notur));
    if (x.breyttAf && x.breytt) kort.appendChild(ny("p", "vst-but-breytt", "Síðast breytt af " + x.breyttAf + ", " + stutt(x.breytt.slice(0, 10)) + " kl. " + x.breytt.slice(11, 16)));
    return kort;
  }

  function villa(kort, texti) {
    var p = kort.querySelector(".vst-msg") || kort.appendChild(ny("p", "vst-small vst-msg"));
    p.textContent = texti || "";
  }

  // Kortið verður að eyðublaði. Við árekstur kemur nýjasta útgáfan inn sem grunnur
  // en textinn sem notandinn skrifaði helst í reitunum
  function forma(x, kort) {
    var faersla = x.flokkur === FAERSLUR;
    var grunnur = x;
    var form = ny("form", "vst-but vst-form vst-but-form");
    form.appendChild(ny("span", "vst-but-heiti", "Breyta: " + (x.heiti || "Án heitis")));

    function reitur(merki, nafn, tag, gildi, cls, hjalp) {
      var l = ny("label", "", merki);
      var inn = ny(tag, cls || "");
      if (tag === "input") inn.type = nafn === "birta" ? "date" : "text";
      inn.name = nafn;
      inn.value = gildi || "";
      l.appendChild(inn);
      if (hjalp) l.appendChild(ny("small", "", hjalp));
      return l;
    }
    form.appendChild(reitur("Heiti", "heiti", "input", x.heiti));
    var rod = ny("div", "vst-form-rod");
    rod.appendChild(reitur("Birta", "birta", "input", x.birta));
    if (faersla) {
      var l = ny("label", "", "Staða");
      var sel = ny("select");
      sel.name = "stada";
      EFNI_STODUR.forEach(function (s) { var o = ny("option", "", s); o.value = s; sel.appendChild(o); });
      sel.value = x.stada || EFNI_STODUR[0];
      l.appendChild(sel);
      rod.appendChild(l);
    }
    form.appendChild(rod);
    form.appendChild(reitur("Íslenska", "is", "textarea", x.is));
    form.appendChild(reitur("English", "en", "textarea", x.en));
    form.appendChild(reitur("Mynd eða myndband", "slod", "input", x.slod, "", "Dropbox-hlekkur á skrána eða möppuna, eða slóð á mynd."));
    form.appendChild(reitur("Nótur", "notur", "textarea", x.notur, "vst-stutt", "Hvaða mynd fylgir, hvar á að pósta, o.s.frv."));

    var takkar = ny("div", "vst-form-takkar");
    var vista = utbuinnTakki("Vista");
    vista.type = "submit";
    var haetta = utbuinnTakki("Hætta við", "vst-but-takki");
    takkar.appendChild(vista);
    takkar.appendChild(haetta);
    form.appendChild(takkar);
    var msg = form.appendChild(ny("p", "vst-small vst-msg"));

    haetta.addEventListener("click", function () { setjaBut(grunnur, form); });
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      msg.textContent = "";
      if (!eg()) { msg.textContent = "Veldu hver þú ert efst í Efni."; return; }
      var reitir = {};
      ["heiti", "birta", "stada", "is", "en", "slod", "notur"].forEach(function (n) {
        if (form.elements[n]) reitir[n] = form.elements[n].value;
      });
      vista.disabled = true;
      vista.textContent = "Vista...";
      kalla({ action: "bandEfniVista", id: x.id, hver: eg(), breytt: grunnur.breytt, reitir: reitir }).then(function (r) {
        vista.disabled = false;
        vista.textContent = "Vista";
        if (r.ok) { setjaBut(r.but, form); return; }
        if (r.arekstur && r.but) grunnur = r.but;
        msg.textContent = r.villa || "Tókst ekki að vista.";
      });
    });

    kort.parentNode.replaceChild(form, kort);
    form.elements.heiti.focus();
  }

  // Færslur raðast eftir birtingardegi, þær án dags fyrst (t.d. planið)
  function rodFaerslna(a, c) {
    return (a.birta ? 1 : 0) - (c.birta ? 1 : 0) || (a.birta < c.birta ? -1 : a.birta > c.birta ? 1 : 0);
  }

  // Bakendinn raðar eftir flokki. Hópar byrja lokaðir; þeir sem notandinn
  // opnar eru munaðir á milli heimsókna
  var EFNI_OPID = "vogor-efni-opid";
  function teiknaEfni(listi) {
    var box = q("efni");
    q("efni-kafli").hidden = !listi.length;
    if (!listi.length) return;
    // Opið eyðublað glatast ekki þótt síðan sæki stöðuna aftur
    if (box.querySelector(".vst-but-form")) return;
    var opid = {};
    try { opid = JSON.parse(localStorage.getItem(EFNI_OPID) || "{}") || {}; } catch (e) {}
    box.textContent = "";
    var rod = [], eftir = {};
    listi.forEach(function (x) {
      var f = x.flokkur || "Annað";
      if (!eftir[f]) { eftir[f] = []; rod.push(f); }
      eftir[f].push(x);
    });
    rod.forEach(function (f) {
      var det = ny("details", "vst-group");
      det.open = !!opid[f];
      var sum = ny("summary");
      sum.appendChild(ny("span", "", f));
      var fjoldi = String(eftir[f].length);
      if (f === FAERSLUR) {
        var dagsett = eftir[f].filter(function (x) { return x.birta && x.stada !== "Sleppa"; });
        var farnar = dagsett.filter(function (x) { return x.stada === "Póstað"; }).length;
        fjoldi = farnar + "/" + dagsett.length + " póstaðar";
        eftir[f].sort(rodFaerslna);
      }
      sum.appendChild(ny("span", "", fjoldi));
      det.appendChild(sum);
      var innan = ny("div", "vst-efni");
      eftir[f].forEach(function (x) { innan.appendChild(butur(x)); });
      if (f === FAERSLUR) {
        var nyr = utbuinnTakki("Ný færsla", "vst-but-takki");
        nyr.addEventListener("click", function () {
          if (!eg()) { nyr.textContent = "Veldu fyrst hver þú ert"; return; }
          nyr.disabled = true;
          kalla({ action: "bandEfniNytt", hver: eg(), flokkur: FAERSLUR }).then(function (r) {
            nyr.disabled = false;
            if (!r.ok) { nyr.textContent = r.villa || "Tókst ekki"; return; }
            gogn.efni.push(r.but);
            var kort = butur(r.but);
            innan.insertBefore(kort, nyr);
            forma(r.but, kort);
          });
        });
        innan.appendChild(nyr);
      }
      det.appendChild(innan);
      det.addEventListener("toggle", function () {
        opid[f] = det.open;
        try { localStorage.setItem(EFNI_OPID, JSON.stringify(opid)); } catch (e) {}
      });
      box.appendChild(det);
    });
  }

  // Facebook og Instagram: fylgjendur og allar færslur, nýjast efst
  function teiknaMeta(m) {
    q("meta-kafli").hidden = !m;
    if (!m) return;
    var f = m.fylgjendur || {}, box = q("fylgjendur");
    box.textContent = "";
    [["fb", "Facebook"], ["ig", "Instagram"]].forEach(function (x) {
      if (f[x[0]] == null) return;
      var c = ny("div", "vst-count");
      c.appendChild(ny("span", "vst-counter", String(f[x[0]])));
      var b = f[x[0] + "Breyting"];
      c.appendChild(ny("span", "", "fylgjendur á " + x[1] + (b != null ? " (" + (b >= 0 ? "+" : "") + b + " frá " + stutt(f.fra) + ")" : "")));
      box.appendChild(c);
    });
    var heiti = {};
    (gogn.efni || []).forEach(function (x) { heiti[x.id] = x.heiti; });
    var tb = q("meta");
    tb.textContent = "";
    m.faerslur.forEach(function (p) {
      var tr = ny("tr");
      tr.appendChild(ny("td", "", stutt(p.birt.slice(0, 10)) + " " + p.birt.slice(11, 16)));
      tr.appendChild(ny("td", "", p.midill));
      tr.appendChild(ny("td", "", p.tegund));
      var td = ny("td", "vst-meta-texti");
      var texti = heiti[p.efni] ? heiti[p.efni] : p.texti || p.tegund;
      td.appendChild(p.hlekkur ? hlekkur(p.hlekkur, "", texti) : ny("span", "", texti));
      td.title = p.texti;
      tr.appendChild(td);
      [p.na, p.ahorf, p.vidbrogd].forEach(function (v) { tr.appendChild(ny("td", "vst-tala", v == null ? "–" : String(v))); });
      tb.appendChild(tr);
    });
    if (!m.faerslur.length) {
      var tom = ny("td", "", "Engar færslur fundust frá 1. október.");
      tom.colSpan = 7;
      tb.appendChild(ny("tr")).appendChild(tom);
    }
    q("meta-sott").textContent = m.sott || "aldrei";
  }

  // Nafnalistinn kemur úr `band` í Stillingar; valið er munað í vafranum
  function teiknaNofn(nofn) {
    var sel = q("eg");
    var valid = sel.value;
    if (!valid) { try { valid = localStorage.getItem(NAFN) || ""; } catch (e) {} }
    sel.textContent = "";
    [""].concat(nofn.filter(function (n) { return n !== "Allir"; })).forEach(function (n) {
      var o = ny("option", "", n || "Veldu nafn");
      o.value = n;
      sel.appendChild(o);
    });
    sel.value = nofn.indexOf(valid) !== -1 ? valid : "";
  }
  q("eg").addEventListener("change", function () {
    try { localStorage.setItem(NAFN, this.value); } catch (e) {}
  });

  function saekja() {
    return post({ action: "bandStada", b: b })
      .then(function (r) {
        if (r.rangurLykill) { stada("invalid"); return; }
        if (!r.ok) { q("villa").textContent = r.villa || "Óþekkt villa."; stada("error"); return; }
        try { localStorage.setItem(LYKILL, b); } catch (e) {}
        teikna(r);
        stada("ok");
      })
      .catch(function () { stada("error"); });
  }

  q("uppfaera").addEventListener("click", function () {
    var btn = this;
    btn.disabled = true;
    saekja().then(function () { btn.disabled = false; });
  });

  if (!b) { stada("invalid"); return; }
  stada("loading");
  saekja();
}
