// Promo-kóðar: pressusíða í Nafir-lúkkinu. Límt í Embed-element á /nafir/press
// (noindex, ekki í valmynd). API bendir á /exec-slóð Apps Script-deploymentsins
// (sjá LESTU.md).
//
// Efnið (bio, lagalisti, textar, credits) er afrit: bio er ENGLISH — press og
// ÍSLENSKA — pressa úr nafir/docs/bio.md, lagalisti úr release.yml, textar úr
// textar.md, credits úr bandcamp.md.
// Breytist það þar þarf að uppfæra það hér líka.
//
// Síðan er á íslensku og ensku. Allur texti sem er til á báðum málum stendur
// tvisvar, með data-mal="en" og data-mal="is", og CSS sýnir þann sem passar við
// data-mal á .vpp. Alt-textar eru í data-alt-en / data-alt-is. Málið ræðst af,
// í þessari röð: ?mal=is|en í slóðinni, vali lesandans á rofanum (localStorage),
// máli póstsins sem kóðinn fór með (bakendinn skilar mal), annars ensku.
// Dymo-miðarnir (|ABOUT| o.s.frv.) eru eins á báðum málum.
//
// Forsíðan er sótt beint af Bandcamp. Ef forsíðunni er skipt út þar breytist
// slóðin; þá þarf að uppfæra src og niðurhalshlekkina hér. Hljómsveitarmyndin
// er í Assets í Webflow; frumskrárnar eru í nafir/photo/.
//
// Scriptið leitar að data-promo-eigindum á ALLRI síðunni:
// data-promo-state="loading | ok | invalid | error"   sýnt eftir stöðu
// data-promo="name"       nafn viðtakanda (texti)
// data-promo="code"       niðurhalskóðinn (texti)
// data-promo="listen"     <a> á private stream
// data-promo="download"   <a> á Bandcamp með kóðann fylltan inn
//
// Embed: <div data-nafir="pressa"></div> og dist/nafir.js FEST Á COMMIT
// (@<sha>), því miðlar eru með hlekkina. Sjá LESTU.md.
import { API } from "./sameiginlegt.js";

const MARKUP = "<div class=\"vpp\" data-mal-bidur>\n  <div class=\"vpp-head\">\n    <div class=\"vpp-dymo vpp-dymo--red\">|NAFIR|PROMO|COPY|</div>\n    <div class=\"vpp-head-right\">\n      <div class=\"vpp-mal\" role=\"group\" aria-label=\"Tungumál / Language\">\n        <button type=\"button\" data-mal-val=\"is\" lang=\"is\" aria-pressed=\"false\">ÍS</button>\n        <button type=\"button\" data-mal-val=\"en\" lang=\"en\" aria-pressed=\"false\">EN</button>\n      </div>\n      <div class=\"vpp-counter\">VR046</div>\n    </div>\n  </div>\n\n  <div class=\"vpp-top\">\n    <div class=\"vpp-screen\">\n      <img src=\"https://f4.bcbits.com/img/a3515151154_10.jpg\" width=\"1200\" height=\"1200\"\n           alt=\"Nafir cover: a sunlit workshop wall covered in painted portraits, with guitars and a drum kit in front of it\"\n           data-alt-en=\"Nafir cover: a sunlit workshop wall covered in painted portraits, with guitars and a drum kit in front of it\"\n           data-alt-is=\"Umslag Nafir: sólbjartur veggur í vinnustofu, þakinn máluðum andlitsmyndum, og gítarar og trommusett fyrir framan\">\n    </div>\n\n    <div class=\"vpp-info\">\n      <p class=\"vpp-artist\">Stafrænn Hákon</p>\n      <h1 class=\"vpp-title\">Nafir</h1>\n\n      <dl class=\"vpp-meta\">\n        <div><dt><span data-mal=\"en\">Label</span><span data-mal=\"is\">Útgáfa</span></dt><dd>Vogor Records</dd></div>\n        <div><dt><span data-mal=\"en\">Release</span><span data-mal=\"is\">Dagsetning</span></dt><dd><span data-mal=\"en\">27 November 2026</span><span data-mal=\"is\">27. nóvember 2026</span></dd></div>\n        <div><dt><span data-mal=\"en\">Pre-order</span><span data-mal=\"is\">Forsala</span></dt><dd><span data-mal=\"en\">30 October 2026</span><span data-mal=\"is\">30. október 2026</span></dd></div>\n        <div><dt><span data-mal=\"en\">Length</span><span data-mal=\"is\">Lengd</span></dt><dd><span data-mal=\"en\">8 songs, 30 minutes</span><span data-mal=\"is\">8 lög, 30 mínútur</span></dd></div>\n      </dl>\n\n      <div class=\"vpp-personal\">\n        <div data-promo-state=\"loading\">\n          <p class=\"vpp-status\"><span class=\"vpp-led vpp-led--wait\"></span><span data-mal=\"en\">Loading your links</span><span data-mal=\"is\">Sæki hlekki..</span></p>\n        </div>\n\n        <div data-promo-state=\"ok\" hidden>\n          <p class=\"vpp-status\"><span class=\"vpp-led vpp-led--ok\"></span><span data-mal=\"en\">Promo copy for</span><span data-mal=\"is\">Kynningareintak fyrir</span><span data-promo=\"name\"></span></p>\n          <div class=\"vpp-keys\">\n            <a class=\"vpp-key\" data-promo=\"listen\" target=\"_blank\" rel=\"noopener\"><span data-mal=\"en\">Listen</span><span data-mal=\"is\">Hlusta</span></a>\n            <a class=\"vpp-key\" data-promo=\"download\" target=\"_blank\" rel=\"noopener\"><span data-mal=\"en\">Download</span><span data-mal=\"is\">Sækja</span></a>\n          </div>\n          <p class=\"vpp-note\"><span data-mal=\"en\">Download as MP3, FLAC or WAV. Your code is already filled in:</span><span data-mal=\"is\">Sækja sem MP3, FLAC eða WAV. Kóðinn þinn er þegar fylltur inn:</span>\n            <span class=\"vpp-counter vpp-counter--code\" data-promo=\"code\"></span></p>\n          <p class=\"vpp-note\"><span data-mal=\"en\">Please don't share before 27 November 2026.</span><span data-mal=\"is\">Vinsamlegast ekki deila fyrir 27. nóvember 2026.</span></p>\n        </div>\n\n        <div data-promo-state=\"invalid\" hidden>\n          <p class=\"vpp-status\"><span class=\"vpp-led vpp-led--stop\"></span><span data-mal=\"en\">Personal link needed</span><span data-mal=\"is\">Hlekkinn þinn vantar...</span></p>\n          <p class=\"vpp-note\" data-mal=\"en\">The stream and download open with the personal link from the email you received. Reply to that email and we'll send you a new one.</p>\n          <p class=\"vpp-note\" data-mal=\"is\">Streymi og niðurhal opnast með þínum hlekk sem þú fékkst sent í vefpósti. Svaraðu þeim pósti og við sendum þér nýjan.</p>\n        </div>\n\n        <div data-promo-state=\"error\" hidden>\n          <p class=\"vpp-status\"><span class=\"vpp-led vpp-led--stop\"></span><span data-mal=\"en\">Couldn't load your links</span><span data-mal=\"is\">Ekki tókst að sækja hlekkina</span></p>\n          <p class=\"vpp-note\" data-mal=\"en\">Please reload the page, or reply to the email you received.</p>\n          <p class=\"vpp-note\" data-mal=\"is\">Endurhlaða síðuna, eða svaraðu póstinum sem þú fékkst.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <section class=\"vpp-section\">\n    <div class=\"vpp-dymo\">|ABOUT|</div>\n    <div class=\"vpp-prose\" data-mal=\"is\" lang=\"is\">\n      <p><strong>Nafir</strong> á upptök sín í heimsókn til Árna Þórs Árnasonar í Tjörnarp í Svíþjóð. Í vinnustofu Árna, B-húsinu, urðu lausleg drög að plötunni að veruleika. Þar skapaðist ákveðinn hljóðgrunnur sem varð svo að rauðri línu í gegnum plötuna.</p>\n      <p>Kassabassi og lágt strömmaður nylon-gítar urðu að einskonar grunntóni sem einkenndi lögin. Bassi Árna Þórs og trommur Róberts Más Runólfssonar fléttast saman í hryggjarsúlu laganna, sem allt annað hvílir á. Á lágstemmdan grunninn byggði hljómsveitin lögin smám saman og heildarsvipur tók að myndast. Þegar hinn einkennandi flæðandi gítarhljómur, sem lengi hefur verið stór hluti af hljóðheimi Stafræns Hákons, var orðinn hluti af lögunum tóku þau á sig kunnuglegan brag. Gítarlínur Ólafs og Lárusar tala saman og vefjast hvor um aðra eins og lifandi skepnur sem mynda stóra heild.</p>\n      <p>Á <strong>Nafir</strong> stígur Magnús Freyr Gíslason fram sem texta- og lagahöfundur sveitarinnar. Hráar skissur hans voru unnar áfram og fullmótaðar af sveitinni í sameiningu. Rödd hans verður sem samofinn vefur sem leiðir plötuna til enda. Magnús syngur alfarið á íslensku og textarnir færast á milli hversdagslegra smáatriða, húmors, nándar og einhvers enn dularfyllra, en söngurinn helst ofinn inn í tónlistina frekar en að sitja ofan á henni. <strong>Nafir</strong> er fyrsta plata Stafræns Hákons með söng frá upphafi til enda.</p>\n      <blockquote class=\"vpp-quote\"><p>„Lögin á Nafir eru samin á tímabili sem einkenndist af ókyrrð, efa og höfnun, en líka þeirri uppgötvun að fátt skiptir nógu miklu máli til að láta sér líða illa yfir því. Það sem amar að er oft sjálfskapað og minna mál en það virðist í augnablikinu. Það er hvort sem er enginn að spá svo mikið í manni, allir eru uppteknir af því hvað öðrum finnst um þá. Nafir eru þessar ystu nafir sem maður getur staðið á alveg að ástæðulausu. En það er allavega gott útsýni þaðan.“</p><footer>Magnús Freyr Gíslason</footer></blockquote>\n      <p>Platan var tekin upp í Vogor Studios, fyrir utan bassann sem Árni Þór tók upp í vinnustofunni í Tjörnarp. Ólafur Josephsson hljóðblandaði plötuna hægt og rólega, með hléum yfir rúmt ár, og leyfði lögunum að finna sitt eigið jafnvægi milli lágstemmdrar nálgunar og þunga.</p>\n      <p>Átta lög á rúmum hálftíma. <strong>Nafir</strong> er hlý, nálæg og lágstemmd í grunninn, með stærri, andrúmsloftskenndum hljóðheimi Stafræns Hákons sem opnast smám saman utan um hana.</p>\n    </div>\n    <div class=\"vpp-prose\" data-mal=\"en\" lang=\"en\">\n      <p><strong>Nafir</strong> began during a visit to Árni Þór Árnason’s workshop in Tjörnarp, Sweden. A weekend of demoing ideas turned into a sound that became the foundation for the record.</p>\n      <p>Acoustic bass replaced electric bass, while a gently strummed acoustic guitar became a bed beneath the drums. Árni Þór’s bass and Róbert Már Runólfsson’s drums lock together into the backbone of the songs, the part everything else rests on. Around that quieter, understated foundation, Stafrænn Hákon gradually built the songs outward, bringing in the atmospheric guitar sound that has long been part of the band’s identity. Ólafur’s and Lárus’s guitar lines talk to each other and wind around one another like organic beings, becoming part of a wider texture.</p>\n      <p>On <strong>Nafir</strong>, Magnús Freyr Gíslason steps forward as the band’s lyricist and songwriter. His rough sketches were developed further and shaped by the band together. His voice becomes a constant thread through the record from beginning to end. Sung entirely in Icelandic, the lyrics shift between everyday detail, humour, intimacy, something darker and even mysterious, while the singing stays woven into the music rather than sitting above it. It is the first Stafrænn Hákon record with vocals from start to finish.</p>\n      <blockquote class=\"vpp-quote\"><p>“The songs on Nafir were written during a period of unrest, doubt and rejection, but also with the realisation that very little is worth making yourself miserable over. The things that bother us are often of our own making, and less of a big deal than they seem at the time. Nobody’s thinking about you that much anyway, everyone’s busy wondering what other people think of them. Nafir refers to those edges we sometimes find ourselves standing on for no good reason. At least the view is good.”</p><footer>Magnús Freyr Gíslason</footer></blockquote>\n      <p>The album was recorded largely at Vogor Studios, with Árni Þór recording his bass parts in Tjörnarp. Ólafur Josephsson mixed the record slowly, on and off, over the course of a year, letting the songs find their own balance between restraint and weight.</p>\n      <p>Eight songs and just over half an hour, <strong>Nafir</strong> is warm, close and understated at its core, with the wider atmospheric sound of Stafrænn Hákon gradually opening around it.</p>\n    </div>\n  </section>\n\n  <section class=\"vpp-section vpp-sides\">\n    <div>\n      <div class=\"vpp-dymo\">|SIDE|A|</div>\n      <ol class=\"vpp-tracks\">\n        <li><details>\n          <summary><span>Nafir</span><span>3:25</span></summary>\n          <div class=\"vpp-lyric\" lang=\"is\">\n            <p>Hún lætur renna í bað<br>hún veit að það er eitthvað að<br>Ég fylgist grunlaus með,<br>með báðar hendurnar<br>Hún leiðir mig á betri stað<br>því ég þurfti það</p>\n            <p>Hún kyndir kuldann burt<br>hún finnur þegar er napurt<br>Ég fylgist þögull með,<br>með báðar fæturnar<br>Hún lætur mig hlaupa af stað<br>Nú er allt upphitað</p>\n            <p>Hún leysir vandamál<br>Með taugar eins og stál<br>Hún leysir vandamál<br>Hún ræktar stundum kál<br>Hún leysir vandamál<br>Tendrar fallegt bál</p>\n          </div>\n        </details></li>\n        <li><details>\n          <summary><span>Óminni</span><span>4:24</span></summary>\n          <div class=\"vpp-lyric\" lang=\"is\">\n            <p>Veit, ég á allt<br>ég fann það í dag.<br>Veit, hvað er að<br>Ég skapaði það.</p>\n            <p>Ég mun deyfa, tilfinningarnar.<br>Myndi deyja, til að finna þær.</p>\n            <p>Hey, það er kalt<br>ég fann það í dag.<br>Hey, hvað með það<br>orsakaði það.</p>\n            <p>Ég vil teygja<br>eiga stundina<br>Ég finn eitthvað<br>Treð því svo í kaf</p>\n            <p>Ég á nýja skó, nýja skó<br>En ég hef gengið nóg, gengið nóg<br>Þó að dyrnar, dyrnar<br>Standi galopnar, galopnar</p>\n          </div>\n        </details></li>\n        <li><details>\n          <summary><span>Djákninn</span><span>3:31</span></summary>\n          <div class=\"vpp-lyric\" lang=\"is\">\n            <p>Hún veipar í inniskóm<br>og leitar að nýjum tón<br>Ég reika inní skóg<br>ég raula út í tóm</p>\n            <p>Heilir, hálfir, sleipir, smáir, veikir, háðir, steypir, sáir<br>Hugmyndir, fráveita, inniskór, hjáveita.<br>Kveikir, bálið, steikir, sálir, leysir, málið, kveikir, bálið<br>Heildarmynd, steypibað, norðanvind, heyri það</p>\n            <p>Það heyrist hátt í vindinum<br>Það leynist fátt i huganum</p>\n          </div>\n        </details></li>\n        <li><details>\n          <summary><span>Fín</span><span>3:24</span></summary>\n          <div class=\"vpp-lyric\" lang=\"is\">\n            <p>Djöfull er hún góð<br>Djöfull er hún fín<br>Hún er stúlkan mín<br>Semur stundum ljóð<br>Drekkur stundum vín<br>Hún er stúlkan mín</p>\n          </div>\n        </details></li>\n      </ol>\n    </div>\n    <div>\n      <div class=\"vpp-dymo\">|SIDE|B|</div>\n      <ol class=\"vpp-tracks\" start=\"5\">\n        <li><details>\n          <summary><span>Jafnari</span><span>3:14</span></summary>\n          <div class=\"vpp-lyric\" lang=\"is\">\n            <p>Holdið hlaðið<br>svona líður mér oft í lendunum<br>Foldin falin<br>þetta lifandi loft í lungunum</p>\n            <p>Ég glefsa oft í neyð<br>Hugsa allt of seint<br>Gliðnar leiðin greið<br>Ekki vera reið</p>\n            <p>Holdið hlaðið<br>svona líður mér oft í lendunum<br>Foldin falin<br>þetta lifandi loft í lungunum</p>\n          </div>\n        </details></li>\n        <li><details>\n          <summary><span>Línurnar</span><span>4:38</span></summary>\n          <div class=\"vpp-lyric\" lang=\"is\">\n            <p>Ég teikna, reyni að ráða í línurnar<br>Ég reikna, er að mæla göturnar<br>Við dyrnar, stend og bíð en ekkert svar<br>Það kviknar, ljós en engin bíður þar</p>\n            <p>En eitt, lítið svar<br>Það leysir þrautina<br>Í eitt, andartak<br>Ég gæti fundið það</p>\n            <p>Ég reika, er að horfa á stjörnurnar<br>Ég ryða, er að gefa upp öndina<br>Ég hrasa, er að missa fæturnar<br>Þú svarar, réttir mér svo höndina</p>\n            <p>En eitt, lítið svar<br>Það leysir þrautina<br>Í eitt, andartak<br>Ég gæti fundið það</p>\n          </div>\n        </details></li>\n        <li><details>\n          <summary><span>Kúbein</span><span>3:18</span></summary>\n          <div class=\"vpp-lyric\" lang=\"is\">\n            <p>Ég veit ekki hvað<br>ég er óskrifað blað<br>Legg af stað engin veit, enginn veit<br>Ég veit ekki hvað<br>ég læt renna í bað<br>Legg af stað<br>engin veit, enginn veit</p>\n            <p>Í dimman dal, má ég leiða þig heim<br>Í dimman dal, og ég rata þessa leið<br>Í dimman dal, komdu heim komdu heim<br>Í dimman dal, komdu heim</p>\n            <p>Ég sá þig í dag<br>en skildi ekki hvað<br>Hvað er að<br>engin veit, enginn veit<br>Ég veit ekki hvað<br>en læt reyna á það<br>Legg af stað<br>engin veit, enginn veit</p>\n            <p>Í dimman dal, viltu leiða mig heim<br>Í dimman dal, og ég rata ekki heim<br>Í dimman dal, förum heim förum heim<br>Í dimman dal, förum heim</p>\n          </div>\n        </details></li>\n        <li><details>\n          <summary><span>Maskína</span><span>4:22</span></summary>\n          <div class=\"vpp-lyric\" lang=\"is\">\n            <p>Hún tifar eins og lítil maskína<br>Og hreyfir alla stóru vísana<br>Eins og jörðin snýst í kringum þúfuna<br>Hún vefur mér um fingur sér eins og sírena</p>\n            <p>Hún teymir heilan her<br>Með tár á vanga sér<br>Hún syrgir heilan her<br>Hún er ei lengur hér<br>Með himinskautum fer</p>\n            <p>Eins og norðurstjarna vísar leiðina<br>Hún er varðan yfir dimma heiðina<br>Jarðýta á grýtta leiðina<br>Hún heldur mér í örmum sér eins og hafalda</p>\n            <p>Hún teymir heilan her<br>Með tár á vanga sér<br>Hún syrgir heilan her<br>Hún er ei lengur hér<br>Með himinskautum fer</p>\n          </div>\n        </details></li>\n      </ol>\n    </div>\n  </section>\n\n  <p class=\"vpp-small vpp-hint\"><span data-mal=\"en\">Select a song to read its lyrics. All lyrics are in Icelandic.</span><span data-mal=\"is\">Veldu lag til að lesa textann.</span></p>\n\n  <section class=\"vpp-section vpp-sides\">\n    <div>\n      <div class=\"vpp-dymo\">|CREDITS|</div>\n      <ul class=\"vpp-credits\">\n        <li>Árni Þór Árnason<span data-mal=\"en\">acoustic bass</span><span data-mal=\"is\">kassabassi</span></li>\n        <li>Lárus Sigurðsson<span data-mal=\"en\">electric guitar</span><span data-mal=\"is\">rafgítar</span></li>\n        <li>Magnús Freyr Gíslason<span data-mal=\"en\">vocals</span><span data-mal=\"is\">söngur</span></li>\n        <li>Ólafur Josephsson<span data-mal=\"en\">guitar, nylon-string guitar, piano, organ, percussion, drums on Óminni</span><span data-mal=\"is\">gítar, kassagítar, píanó, orgel, slagverk, trommur í laginu Óminni</span></li>\n        <li>Róbert Már Runólfsson<span data-mal=\"en\">drums</span><span data-mal=\"is\">trommur</span></li>\n        <li>Nói Steinn Einarsson<span data-mal=\"en\">drums on Línurnar and Maskína</span><span data-mal=\"is\">trommur í lögunum Línurnar og Maskína</span></li>\n        <li>Fjalar Sigurðsson<span data-mal=\"en\">tuba on Maskína</span><span data-mal=\"is\">túba í laginu Maskína</span></li>\n      </ul>\n      <p class=\"vpp-small\" data-mal=\"en\">Demos recorded at B-húsið, Tjörnarp. Recorded at Vogor Studios; bass recorded by Árni Þór in Tjörnarp. Mixed by Ólafur Josephsson. Mastered by Justin Pizzoferrato at Sonelab. Artwork by Árni Þór Árnason.</p>\n      <p class=\"vpp-small\" data-mal=\"is\">Prufuupptökur í B-húsinu, Tjörnarp. Tekið upp í Vogor Studios; Árni Þór tók bassann upp í Tjörnarp. Hljóðblöndun: Ólafur Josephsson. Hljómjöfnun: Justin Pizzoferrato í Sonelab. Umslag: Árni Þór Árnason.</p>\n    </div>\n    <div>\n      <div class=\"vpp-dymo\">|PRESS|KIT|</div>\n      <a href=\"https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5866a4e56a4ade30b085_shakon-live-tjornarp-press.jpg\" target=\"_blank\" rel=\"noopener\"><img class=\"vpp-photo\" src=\"https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5864a44f525f940c8f37_shakon-live-tjornarp-web.jpg\" width=\"2000\" height=\"1110\" loading=\"lazy\"\n           alt=\"Stafrænn Hákon on a small stage in Tjörnarp: five musicians in front of a star map backdrop, the singer in the light at the centre\"\n           data-alt-en=\"Stafrænn Hákon on a small stage in Tjörnarp: five musicians in front of a star map backdrop, the singer in the light at the centre\"\n           data-alt-is=\"Stafrænn Hákon á litlu sviði í Tjörnarp: fimm tónlistarmenn fyrir framan stjörnukort, söngvarinn í ljósinu fyrir miðju\"></a>\n      <ul class=\"vpp-links\">\n        <li><a href=\"https://f4.bcbits.com/img/a3515151154_0.jpg\" target=\"_blank\" rel=\"noopener\"><span data-mal=\"en\">Cover art</span><span data-mal=\"is\">Umslag</span>, 3000 × 3000 (JPG, 5 MB)</a></li>\n        <li><a href=\"https://f4.bcbits.com/img/a3515151154_10.jpg\" target=\"_blank\" rel=\"noopener\"><span data-mal=\"en\">Cover art</span><span data-mal=\"is\">Umslag</span>, 1200 × 1200 (JPG)</a></li>\n        <li><a href=\"https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5866a4e56a4ade30b085_shakon-live-tjornarp-press.jpg\" target=\"_blank\" rel=\"noopener\"><span data-mal=\"en\">Band photo</span><span data-mal=\"is\">Hljómsveitarmynd</span>, 3119 × 1731 (JPG, 1 MB)</a></li>\n        <li><a href=\"https://cdn.prod.website-files.com/598cdb87c327c10001ec59c2/6acd5864a44f525f940c8f37_shakon-live-tjornarp-web.jpg\" target=\"_blank\" rel=\"noopener\"><span data-mal=\"en\">Band photo</span><span data-mal=\"is\">Hljómsveitarmynd</span>, 2000 × 1110 (JPG)</a>\n          <span data-mal=\"en\">Stafrænn Hákon live in Tjörnarp, Sweden, 11 April 2025. Photo: Hjörleifur Jónsson.</span>\n          <span data-mal=\"is\">Stafrænn Hákon á tónleikum í Tjörnarp í Svíþjóð, 11. apríl 2025. Ljósmynd: Hjörleifur Jónsson.</span></li>\n      </ul>\n      <div class=\"vpp-dymo\">|ARTWORK|</div>\n      <!-- Íslenska útgáfan er bráðabirgðaþýðing (18. okt) þar til Árni Þór samþykkir eða leiðréttir.\n           Sami texti er í nafir/docs/bio.md. -->\n      <blockquote class=\"vpp-quote vpp-quote--kit\" data-mal=\"is\" lang=\"is\"><p>„Plötuumslagið fyrir Nafir vann ég í vinnustofunni minni, B-húsinu í Tjörnarp, þar sem fyrstu lagahugmyndir plötunnar kviknuðu. Platan var þá fullunnin, textarnir komnir og plötuheitið líka, og ég vann verkin í spunaflæði með hana að leiðarljósi og leyfði einstökum myndum að skarast og mynda stærri heild. Ég vildi að ljósmyndin fangaði andrúmsloftið í B-húsinu, kyrrðina og hlýjuna, eins og langri og eftirminnilegri upptökulotu væri nýlokið.“</p><footer>Árni Þór Árnason</footer></blockquote>\n      <blockquote class=\"vpp-quote vpp-quote--kit\" data-mal=\"en\" lang=\"en\"><p>“I created the cover artwork for Nafir in my workshop, B-húsið, in Tjörnarp, where the first ideas for the album originally took shape. Inspired by the finished music, lyrics and album title, I worked spontaneously, letting the individual pieces overlap and form a larger whole. I wanted the photograph to capture the atmosphere of the space, with a sense of warmth and stillness, as if a long and memorable session had just come to an end.”</p><footer>Árni Þór Árnason</footer></blockquote>\n      <div class=\"vpp-dymo\">|CONTACT|</div>\n      <p class=\"vpp-small\">Ólafur Josephsson, Vogor Records<br>\n        <a href=\"mailto:vogorrecords@vogorrecords.com\">vogorrecords@vogorrecords.com</a></p>\n    </div>\n  </section>\n</div>";

export function pressa(rot) {
  rot.innerHTML = MARKUP;


  var params = new URLSearchParams(location.search);
  var k = (params.get("k") || "").trim().toLowerCase();
  // ?preview=1: eigin skoðun, telst hvorki sem opnun né smellur
  var forskodun = params.has("preview");

  function all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  // Mál síðunnar: ?mal= > val lesandans á rofanum > mál póstsins (frá bakenda) > enska
  var MAL_LYKILL = "nafir-press-mal";
  var rot = document.querySelector(".vpp");
  function gildMal(m) { return m === "is" || m === "en" ? m : ""; }
  function geymtMal() { try { return gildMal(localStorage.getItem(MAL_LYKILL)); } catch (e) { return ""; } }
  var validMal = gildMal(params.get("mal")) || geymtMal();

  function setjaMal(mal) {
    rot.setAttribute("data-mal", mal);
    rot.setAttribute("lang", mal);
    rot.removeAttribute("data-mal-bidur");
    all("[data-mal-val]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-mal-val") === mal));
    });
    all("[data-alt-" + mal + "]").forEach(function (img) { img.alt = img.getAttribute("data-alt-" + mal); });
  }

  all("[data-mal-val]").forEach(function (b) {
    b.addEventListener("click", function () {
      validMal = b.getAttribute("data-mal-val");
      try { localStorage.setItem(MAL_LYKILL, validMal); } catch (e) {}
      setjaMal(validMal);
    });
  });

  // Ekkert svar frá bakenda (ógildur kóði eða villa): mál vafrans ræður
  function malVafrans() { return /^is\b/i.test(navigator.language || "") ? "is" : "en"; }

  if (validMal) setjaMal(validMal);
  // Textinn er falinn meðan beðið er eftir máli; lengur en þetta bíður hann ekki
  setTimeout(function () { if (rot.hasAttribute("data-mal-bidur")) setjaMal(malVafrans()); }, 4000);

  function stada(nafn) {
    all("[data-promo-state]").forEach(function (n) {
      n.hidden = n.getAttribute("data-promo-state") !== nafn;
    });
  }

  function kalla(body, keepalive) {
    return fetch(API, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body),
      keepalive: !!keepalive
    });
  }

  function tengja(nafn, href, hvad) {
    all('[data-promo="' + nafn + '"]').forEach(function (a) {
      a.href = href;
      if (forskodun) return;
      a.addEventListener("click", function () {
        kalla({ action: "smellur", k: k, hvad: hvad }, true).catch(function () {});
      });
    });
  }

  // Lokastaða, og mál ef lesandinn hefur ekki valið: annað hvort póstsins eða vafrans
  function ljuka(nafn, mal) {
    if (rot.hasAttribute("data-mal-bidur")) setjaMal(gildMal(mal) || malVafrans());
    stada(nafn);
  }

  if (!/^[a-z0-9]{4}-[a-z0-9]{4}$/.test(k)) {
    ljuka("invalid");
    return;
  }

  stada("loading");
  kalla({ action: "pressa", k: k, forskodun: forskodun })
    .then(function (r) { return r.json(); })
    .then(function (r) {
      if (!r.ok) {
        // villa = eitthvað brotnaði í Apps Script; engin villa = kóðinn er ekki gildur
        ljuka(r.villa ? "error" : "invalid");
        return;
      }
      all('[data-promo="name"]').forEach(function (n) { n.textContent = r.vidtakandi; });
      all('[data-promo="code"]').forEach(function (n) { n.textContent = r.kodi; });
      tengja("listen", r.stream, "hlusta");
      tengja("download", r.download, "saekja");
      // Eldri bakendi skilar ekki mal: þá enska, eins og áður
      ljuka("ok", r.mal || "en");
    })
    .catch(function () { ljuka("error"); });
}
