# Projektdokumentation

**Navn:** Kostiantyn 

**Hold:** WU14

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Tekniske Skole

[Link til min applikaton](https://projekt-newsify-overlordka-ocxpmo9l7-kostiakas-projects.vercel.app)


## Teknologier

-   HTML
-   CSS
-   JavaScript
-   React (ReactRouter)
-	Vite
-   Sass


---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

(Hvilke node-pakker har du installeret for at dit projekt virker? Beskriv kort hvilket "problem" hver pakke løser.)

.SASS - Til at style min side

React Router - Til at forbedre navigationen på app

Vite Test - Til at teste API fetch som en krav

React Icon - Til at få icons til min app


---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

(Hvilke overvejelser har du gjort dig, fx. i forbindelse med dit valg af animationer)

Forståeligt og struktureret code der alle kan forstå

Simpel animationer og slider bar der kan jeg forstå

Meget components som hver inholder sin information

---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

(Hvad gik godt. Hvor prioriterede du forkert. Klagesange fra de varme lande om halvfærdigt produkt, på grund af manglende nattesøvn, fordi din kæle-skildpadde havde tandpine er IKKE interessante.)

Alt gik godt. Jeg har brugt alt mine kompetencer til at låse den opgave, nu alt er virker og jeg glad for det. Jeg har provet at fobedre strukrur fordi i starten der var ikke nok files til at lave idielt struktur 

---
### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Jeg har meget arbejtet med Apil match og link med api, for det jeg har brugt mest tid i min projekt

Du kan vise kode i markdown på følgende måder: 
```js
import { useNews } from "../../script/hooks/useNews.js"
 
 export function matchCategory(){

    const articles = useNews() || [];

    const matchCategory = (article, keyword) => {
        const section = article.section_name?.toLowerCase() || ""
        const words = Array.isArray(keyword) ? keyword : [keyword]


        const subsection = article.subsection_name?.toLowerCase() || ""

        return words.some((word) => {
            const hasSubSection = subsection.includes(word)
            const hasSection = section.includes(word)
            const hasKeyword = article.keywords?.some(
                (k) =>
                    (k.name.toLowerCase() === "subject" || k.name.toLowerCase() === "location") &&
                    k.value.toLowerCase().includes(word.toLowerCase())

            ) || false

            return hasSection || hasKeyword || hasSubSection

        })
    }

    const grouped = {
        sport: articles.filter((a) => matchCategory(a, "sport")),
        health: articles.filter((a) => matchCategory(a, ["health", "sugar"])),
        travel: articles.filter((a) => matchCategory(a, "travel")),
        europe: articles.filter((a) => matchCategory(a, "europe")),
        business: articles.filter((a) => matchCategory(a, ["business", "economy", "market", "finance", "briefing"])),

    }

    return grouped
 }
```

```sass
@use '../../style/variables' as var

.label-swich
    position: relative
    display: inline-block
    width: 50px
    height: 28px

.input-swich
    opacity: 0
    width: 0
    height: 0

.swich-slider
    position: absolute
    cursor: pointer
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: var.$add-grey-color
    transition: 0.4s
    border-radius: 34px

.swich-slider:before
    position: absolute
    content: ""
    height: 20px
    width: 20px
    left: 26px
    bottom: 4px
    background-color: var.$color-text-white
    transition: 0.4s
    border-radius: 50%

.input-swich:checked + .swich-slider
    background-color: var.$secondary-green-color


.input-swich:checked + .swich-slider:before
    transform: translateX(-22px)
```

