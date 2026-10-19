# Æfingasíðan (permixer með köflum)

Lagalisti, kaflar með hljómum og texta, og mixer fyrir stemin á einni síðu.
Gerð fyrir æfingar fyrir jólatónleikana 12.12.2026. Kóðinn er
`src/permixer.js` (viðmót) og `src/stemEngine.js` (spilun og samstilling, sú
sama og gamla /permixer notar).

## Uppsetning í Webflow

Notar strúktúr-safnið (það sem /per-songstructure sýnir). Síðan þarf bara
CMS-listann; JS felur hann og teiknar viðmótið sjálft, svo ekkert þarf að
stíla í Designer.

1. **Tveir reitir í safninu**
   - **Rásir**: Plain text, multi-line. Ein rás á línu: `heiti: slóð`
     ```
     drums: https://dl.dropboxusercontent.com/…/DRUMS.mp3?rlkey=…&raw=1
     bass: https://…
     vocals: https://…
     ```
     Heitið má vera hvað sem er. Það ræður hópnum í mixernum (sjá neðar) og
     birtist sem `Guitar 1` fyrir `guitar1`.
   - **Kaflatímar**: Plain text. Byrjun hvers kafla í sömu röð og kaflarnir,
     `m:ss` aðskilið með kommu: `0:00, 0:40, 1:20, 2:00`. Valfrjálst; án þeirra
     virkar allt nema hopp á kafla og merking á núverandi kafla.

2. **Embed í collection-atriðinu** (hvar sem er inni í atriðinu). Hvert `[…]`
   er sett inn með **+ Add Field**:
   ```html
   <div hidden data-pm-song="[Slug]" data-pm-title="[Name]" data-pm-stems="[Rásir]" data-pm-times="[Kaflatímar]"></div>
   ```

   **Stemin í öðru safni (LiveParts):** í stað Rása-reitsins má setja
   Reference-reit í kaflasafnið sem vísar á lagið í LiveParts, og eitt
   `data-stem-<heiti>` á hverja rás, sett inn með + Add Field úr referenced
   item. Tómar rásir eru hunsaðar; heitið á eftir `data-stem-` ræður hópnum.
   ```html
   <div hidden data-pm-song="[Slug]" data-pm-title="[Name]" data-pm-times="[Kaflatímar]"
     data-stem-drums="[LivePart: Drums]"
     data-stem-perc="[LivePart: Perc]"
     data-stem-bass="[LivePart: Bass]"
     …></div>
   ```

3. **Kaflahólfin** sem fyrir eru í atriðinu eru lesin óbreytt. Hólf er
   foreldri `[data-chords]`-elementsins og í því eru:
   - fyrirsögn: fyrsta `h1`–`h4`
   - hljómar: `data-chords` (eða texti elementsins)
   - texti: `.w-richtext`
   - endurtekningar: síðasta barn `.kafli-repeat`, ef það er tala

   Hólf án hljóma og texta eru hunsuð.

4. **Staðsetning (valfrjálst)**: tómt `<div data-pm-app></div>` þar sem
   viðmótið á að koma. Annars fer það beint á undan CMS-listanum.

Lag án Rása sýnir bara kafla og hljóma. Slóð á lag: `/síðan#slug`.

## Hópar í mixernum

Fyrsta regla sem passar við heiti rásar (lágstafir) ræður:

| Hópur | Heiti sem passa |
|---|---|
| Taktur | drum, kick, snare, perc, bass |
| Kassagítarar | acoustic, akust, kassa |
| Rafgítarar | guit, gítar, gtr |
| Hljómborð | piano, keys, organ, synth, rhodes |
| Söngur | vocal, vox, voice, söng, rödd, kór, backing |
| Blástur | trombone, trumpet, sax, horn, brass |
| Annað | allt annað |

## Á síðunni

- Bilslá: play/pause
- Smellt á kafla (stikan eða fyrirsögn kaflans): hoppar þangað og spilar
- Transpose breytir hljómaheitunum, ekki hljóðinu
- Mix (styrkur, pan, mute, solo) geymist á meðan síðan er opin, per lag

## Deploy

`main.js` er sett inn site-wide í Site settings → Custom code → Footer code,
SHA-læst (`…/hauskupa/vogor@<sha>/dist/main.js`). Eftir push: skipta um SHA
þar og publish-a.
