# Album mixer — Webflow uppsetning

Hvernig plata er sett í 4-track mixerinn án þess að snerta kóða.

Frá og með þessu les [src/albumMixer.js](src/albumMixer.js) lagalistann úr DOM-inu.
Webflow CMS er þar með sannleiksgildið fyrir spilarann. Innbyggði listinn í
[src/albumMixerSongs.js](src/albumMixerSongs.js) er eingöngu varaleið fyrir eldri
síður og keyrir aðeins ef ekkert `[data-mixer-songs]` finnst.

Í console sérðu hvor leiðin varð ofan á:

```
album-mixer: 8 lög úr webflow
album-mixer: 9 lög úr bundled
```

---

## 1. CMS Collection

Búðu til collection, t.d. `Mixer Songs`. Svæði:

| Svæði | Tegund | Skylda | Athugasemd |
| --- | --- | --- | --- |
| Name | Plain text | já | lagatitill eins og hann á að birtast |
| Side | Plain text eða Option | já | `A` eða `B` |
| Side index | Number | já | röð á plötunni, 1–8 |
| Stem 1 URL … Stem 5 URL | Link eða Plain text | 1 nauðsyn | beinar hljóðslóðir |
| Stem 1 label … Stem 5 label | Plain text | nei | sleppanlegt ef merkingarnar eru eins á allri plötunni — sjá kaflann um sjálfgefin gildi |
| Album | Reference eða Option | nei | ef fleiri en ein plata deila collection |

Ef merkingarnar eru þær sömu á allri plötunni þarftu ekki fimm label-svæði —
skrifaðu þau bara beint inn sem fasta texta í attribute-gildin.

## 2. Markupið á síðunni

Collection List Wrapper fær `data-mixer-songs`. Collection Item fær `data-song`
og attribute-in hér að neðan, bundin á CMS-svæðin gegnum *Add custom attribute →
Get value from → field*.

```html
<div data-album-mixer data-album-title="Nafir" data-main-channels="4">

  <!-- Collection List Wrapper -->
  <div data-mixer-songs>
    <!-- Collection Item -->
    <div data-song
         data-song-title="Nafir"
         data-song-side="A"
         data-song-index="1"
         data-stem-1="https://…"
         data-stem-2="https://…"
         data-stem-3="https://…"
         data-stem-4="https://…"
         data-stem-5="https://…"></div>
  </div>

  … resten af mixernum (strimlar, kassetta, transport) …
</div>
```

Listinn er alltaf `display: none` — hann er gögn, ekki útlit. Þú þarft ekki að
fela hann handvirkt.

Fullbúið dæmi til að afrita: [albummixer-nafir.html](albummixer-nafir.html).

### Attribute á `[data-album-mixer]`

| Attribute | Sjálfgefið | Hvað það gerir |
| --- | --- | --- |
| `data-album-title` | tómt | plötuheitið á kassettumiðanum |
| `data-main-channels` | `4` | hvar aðalrásirnar enda og AUX byrjar |

### Attribute á `[data-song]`

| Attribute | Skylda | Athugasemd |
| --- | --- | --- |
| `data-song-title` | já | |
| `data-song-id` | nei | slug myndast úr titlinum ef sleppt |
| `data-song-side` | nei | `A` eða `B`, sjálfgefið `A` |
| `data-song-index` | nei | röð á hliðinni, annars röðin í listanum |
| `data-stem-1` … `data-stem-6` | 1 nauðsyn | hljóðslóð |
| `data-stem-N-label` | nei | fullt heiti strimilsins, birtist neðst |
| `data-stem-N-short` | nei | stutt merking, birtist efst í stærra letri |
| `data-stem-N-role` | nei | `main` eða `aux`, yfirtekur sjálfgefna reglu |
| `data-aux` / `data-aux-label` | nei | stuttleið fyrir aukarásina sem sér CMS-svæði |

### Sjálfgefin gildi fyrir alla plötuna

Ef merkingarnar eru þær sömu á öllum lögunum skaltu setja þær **einu sinni** á
`[data-album-mixer]` í stað þess að endurtaka þær í hverjum CMS-hlut:

```html
<div data-album-mixer
     data-album-title="Nafir"
     data-main-channels="4"
     data-stem-1-label="Normal Guitar"    data-stem-1-short="N"
     data-stem-2-label="Acoustic Bass"    data-stem-2-short="A"
     data-stem-3-label="Falsetto Vocals"  data-stem-3-short="F"
     data-stem-4-label="Intense Drums"    data-stem-4-short="I"
     data-stem-5-label="Random Rock"      data-stem-5-short="R"
     data-stem-5-role="aux">
```

`-label`, `-short` og `-role` virka öll svona. Stakt lag má alltaf yfirtaka
sína rás með sínu eigin attribute. Gildin hanga á **slot-númerinu**, ekki stöðu
strimilsins, svo `data-stem-5-role="aux"` heldur AUX á sinni rás þótt stem
vanti annars staðar í laginu og strimlarnir þjappist saman.

Tóm CMS-svæði skila tómum attribute. Þau eru síuð burt og rásirnar þjappast
saman — lag með stem 1, 2 og 4 fær þrjá strimla, ekki gat í miðjunni.

## 3. Rásirnar og AUX

Sjálfgefið eru fyrstu fjórar rásirnar `main` og allar umfram það `aux`.
Aux-strimillinn fær `.tm4-strip--aux`, rautt `AUX`-merki og lóðrétta línu
(`.tm4-aux-divider`) á undan sér.

Fyrir Nafir stafa rásirnar fimm nafn plötunnar. Stutta merkingin stendur efst á strimlinum
svo **N A F I R** lesist þvert yfir borðið, fulla heitið neðst.

| Rás | Stutt | Heiti | Reaper bus |
| --- | --- | --- | --- |
| 1 | N | Normal Guitar | `nafir_n` |
| 2 | A | Acoustic Bass | `nafir_a` |
| 3 | F | Falsetto Vocals | `nafir_f` |
| 4 | I | Intense Drums | `nafir_i` |
| AUX | R | Random Rock | `nafir_r` |

Söngurinn er á rás 3, ekki á AUX — aukarásin er villta lagið, sem er einmitt það
sem aux return er. Sjá [4TRACK_STEM_TEMPLATE.md](4TRACK_STEM_TEMPLATE.md) fyrir
almennu hlutverkin fjögur; Nafir víkur frá þeim viljandi.

Viltu fimm jafna strimla í staðinn? Settu `data-main-channels="5"`, eða
`data-stem-5-role="main"` á stök lög. Enginn kóði breytist.

### Layoutið er í Webflow

[src/albumMixer.css](src/albumMixer.css) inniheldur bara dial-ana, mælana,
kassettuna og aux-merkinguna. Sjálft strimlagridið býr í Webflow designer.
JS setur tvær CSS-breytur á `[data-album-mixer]` við hvert lagaskipti svo
gridið geti fylgt rásafjöldanum:

```css
--tm4-channels: 5;        /* allar rásir */
--tm4-main-channels: 4;   /* án AUX */
```

Notaðu þær í Webflow ef strimlarnir eiga að vera í grid:

```css
grid-template-columns: repeat(var(--tm4-channels, 4), minmax(0, 1fr));
```

Í flexbox þarf ekkert — strimlarnir raða sér sjálfir og `.tm4-aux-divider`
sest á milli.

Það er líka `data-channel-count="5"` á container ef þú vilt stílsetja eftir
fjölda í Webflow.

## 4. Að skipta um plötu

Ný plata = ný Collection eða nýtt `Album`-filter á Collection List. Ekkert
build, ekkert deploy, engin jsDelivr-purge. Slóðirnar í mixernum eru læstar á
`@main` svo þær breytast aldrei.

---

## Tvennt sem á eftir að leysa

**Dropbox-slóðirnar eru til bráðabirgða.** Test-stemin í
[DROPBOX_AUDIO_LINKS.md](DROPBOX_AUDIO_LINKS.md) eru `dropbox.com/scl/fi/…?st=…`
og fara gegnum `audio-proxy.stafraennhakon.workers.dev`. `st`-parameterinn er
skammlífur token. Fyrir spilara sem á að standa á vogorrecords.com/nafir
mánuðum saman þurfa stemin stöðugar slóðir — R2, Bunny eða sambærilegt.

**Preload-kostnaðurinn.** [albumMixerEngine.js](src/albumMixerEngine.js) smíðar
`new Audio()` með `preload="auto"` fyrir hvert lag við init, ekki bara það sem
er valið. Nafir með 5 rásum verður 40 media elements í einu. Það er svipað og
gamla platan gerir nú þegar (36), en rétta lagfæringin er að smíða rásir per lag
við val í stað þess að gera það allt fyrirfram.

---

## jsDelivr og `@main` — lesist fyrir næsta deploy

Síðurnar hlaða `@main`, sem er grein en ekki tag. jsDelivr heldur upplausn
greinar í nokkrar klukkustundir og **purge á skráarslóð hreinsar það ekki**.
Purge-API-ið svarar `status: finished` með `CF: true, FY: true` og skilar samt
gömlu skránni. Það er ekki purge sem klikkaði heldur upplausnin sem situr eftir.

Þetta getur bitið ójafnt: 19. ágúst 2026 uppfærðist `albumMixer.css` strax en
`main.js` sat tveimur commitum á eftir í marga klukkutíma, úr sama commiti.

Til að prófa strax skaltu benda Webflow á SHA-læsta slóð:

```
https://cdn.jsdelivr.net/gh/hauskupa/vogor@<stutt-sha>/dist/main.js
```

Hún er alltaf fersk því SHA er óbreytanlegt. **Mundu að skipta til baka í
`@main`** — annars frýstu síðuna á því commiti og næsti deploy sést aldrei.

Staðfesting á hvor útgáfan er í loftinu:

```bash
node -e 'const{execSync}=require("child_process");const n=s=>s.replace(/\r\n/g,"\n");
(async()=>{const t=n(execSync("git show HEAD:dist/main.js").toString());
const j=n(await(await fetch("https://cdn.jsdelivr.net/gh/hauskupa/vogor@main/dist/main.js?cb="+Date.now())).text());
console.log(j===t?"@main er nyjast":"@main er a eftir");})()'
```
