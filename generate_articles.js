const fs = require('fs');

const articles = [
    {
        id: "1",
        slug: "vypocet-vyzivneho",
        tag: "Právo a finance",
        title: "Jak se počítá výživné (2026)? Orientace v tabulkách bez stresu",
        desc: "Vysvětlení principu doporučujících tabulek Ministerstva spravedlnosti a proč slouží jen jako výchozí vodítko pro dohodu rodičů.",
        img: "assets/hero-compass.png",
        content: `
<h2>O čem jsou tabulky Ministerstva spravedlnosti?</h2>
<p>V roce 2026 se výživné stále určuje podle orientačních tabulek, které vydává Ministerstvo spravedlnosti. Je ale naprosto klíčové pochopit jednu věc: <strong>tyto tabulky nejsou právně závazné</strong>. Jsou to spíše matematická vodítka, jak si představit férovou částku, aby nevznikaly extrémní rozdíly v rozhodování soudů napříč republikou.</p>
<blockquote>Nejdůležitější je nestavět na číslech jako na dogmatu. Cílem je zachování stejné životní úrovně dítěte, jakou mají jeho rodiče.</blockquote>
<h3>Jak tabulky technicky fungují?</h3>
<p>Výpočet vychází z <strong>čistého měsíčního příjmu</strong> povinného rodiče. Do tohoto příjmu se nezapočítává jen základní mzda, ale i případné prémie, třinácté platy nebo příjmy z pronájmu. Od tohoto čistého příjmu se odečítají pouze zákonné srážky (daně, pojištění), ale nikoliv vaše splátky hypotéky nebo leasingu na auto – výživné má totiž před ostatními dluhy absolutní přednost.</p>
<p>Z tohoto čistého příjmu se následně vypočítá procentuální podíl. Ten se liší podle dvou hlavních faktorů:</p>
<ul>
  <li><strong>Věk dítěte:</strong> Čím je dítě starší, tím vyšší jsou jeho objektivní potřeby. Tabulky proto pracují se 4 věkovými kategoriemi (0-5 let, 6-10 let, 11-15 let a 16 a více let). Procento roste s věkem.</li>
  <li><strong>Počet vyživovacích povinností:</strong> Pokud máte jedno dítě, je procento logicky vyšší, než když máte dětí pět. Soud (nebo tabulka) zohledňuje všechny vyživovací povinnosti, které rodič má – a to i ty z nových vztahů.</li>
</ul>
<h3>Kontrolní mechanismus: Aby zbylo na život</h3>
<p>Systém má zabudovanou pojistku, tzv. <em>kontrolní částku</em>. Jde o to, že povinnému rodiči musí po zaplacení výživného zůstat určitá částka k přežití. V praxi se často používá pravidlo, že nesmí klesnout pod nezabavitelné minimum, případně se určuje procentem z celkového příjmu (často kolem 50-70 %, které musí rodiči zůstat). Náš Rodičovský Kompas tento kontrolní mechanismus ve výpočtech zohledňuje, aby byly výsledky realistické.</p>
<h3>Závěr pro rodiče</h3>
<p>Pokud se oba rodiče dokážou dohodnout, mohou si stanovit v podstatě jakoukoliv smysluplnou částku, kterou soud ve zkráceném řízení velmi pravděpodobně schválí. Tabulky tak slouží primárně jako odrazový můstek pro vyjednávání, nikoliv jako diktát.</p>
`
    },
    {
        id: "2",
        slug: "conflict-resolution",
        tag: "Psychologie",
        title: "Výživné a Conflict Resolution: Jak se dohodnout bez boje",
        desc: "Oddělte emoce od problému. Zjistěte, jak se přestat dohadovat o pozicích a začít hledat řešení založená na skutečných zájmech.",
        img: "assets/hero-mediation.png",
        content: `
<h2>Peníze často maskují nezpracovanou bolest</h2>
<p>Podle přístupu <em>Conflict Resolution</em> (řešení konfliktů) je spor o peníze při rozchodu jen málokdy skutečně jenom o penězích. V mnoha případech finanční požadavky nebo naopak neochota platit maskují hlubší emocionální zranění, snahu potrestat druhého za rozpad vztahu, nebo touhu udržet si nad bývalým partnerem kontrolu.</p>
<h3>Oddělte lidi od problému</h3>
<p>Jedno ze základních pravidel slavného Harvardského negociačního projektu zní: <strong>buďte tvrdí na problém, ale měkcí na lidi</strong>. Jak to vypadá v praxi?</p>
<p>Pokud bývalému partnerovi řeknete: <em>"Zase jsi nezaplatil včas, jsi naprosto nezodpovědný otec/matka,"</em> útočíte na jeho identitu. Přirozenou reakcí bude obrana a protiútok. Zkuste místo toho oddělit problém (zpožděná platba) od člověka: <em>"Platba dorazila o pět dní později. Pro rozpočet domácnosti je to složité, můžeme najít způsob, jak zajistit, že to bude chodit vždy k patnáctému?"</em></p>
<h3>Zájmy místo pozic</h3>
<p>Lidé se často zablokují ve svých <strong>pozicích</strong> (např. "Chci po tobě 10 000 Kč" vs. "Dám ti maximálně 5 000 Kč"). Pokud budete bojovat o pozice, někdo musí prohrát. Zkuste se místo toho zaměřit na <strong>zájmy</strong> – tedy na to, co skutečně za tou částkou stojí.</p>
<ul>
  <li><strong>Zájem matky/otce pečujícího o dítě:</strong> Zajištění jistoty, že bude z čeho zaplatit kroužky, zdravé jídlo a školní výlety bez každoměsíčního stresu.</li>
  <li><strong>Zájem platícího rodiče:</strong> Jistota, že peníze jdou skutečně na potřeby dítěte a že mu po zaplacení zbude dostatek na vlastní bydlení a důstojný život.</li>
</ul>
<h3>Jak najít průsečík?</h3>
<p>Jakmile odhalíte tyto zájmy, otevírá se prostor pro kreativní řešení. Například platící rodič může souhlasit s nižší fixní částkou, ale zaváže se, že bude kroužky a obědy platit napřímo. Tím se uspokojí zájem o kontrolu toku peněz, a zároveň se uspokojí zájem druhého rodiče o to, že o tyto potřeby bude postaráno.</p>
<p>Pamatujte, že konflikt se stává neřešitelným ve chvíli, kdy přestanete naslouchat a začnete pouze připravovat své argumenty. Zastavte se, nadechněte se a zkuste vidět za bankovními převody reálné obavy a potřeby druhého člověka.</p>
`
    },
    {
        id: "3",
        slug: "dite-na-prvnim-miste",
        tag: "Rodina",
        title: "Dítě na prvním místě: Jak odstínit ratolesti od sporů o peníze",
        desc: "Praktické rady psychologů, jak komunikovat s dětmi o změnách v rodině a proč je nikdy nevtahovat do finančních hádek.",
        img: "assets/hero-child.png",
        content: `
<h2>Největší zátěž nenesou rodiče, ale děti</h2>
<p>Psychologické výzkumy se vzácně shodují na jednom: to, co dětem po rozvodu rodičů ubližuje nejvíce, není samotný fakt rozvodu, ale <strong>míra a intenzita rodičovského konfliktu</strong>, kterému jsou vystaveny. Finanční hádky patří k těm nejtoxičtějším, protože se často dotýkají základního pocitu bezpečí a přežití.</p>
<h3>Riziko parentifikace a konfliktu loajality</h3>
<p>Když dítě slyší stížnosti typu: <em>"Nemůžeme na dovolenou, protože tvůj otec nám neplatí,"</em> nebo <em>"Tvoje matka ze mě tahá všechny peníze,"</em> dostává se do takzvaného <strong>konfliktu loajality</strong>. Má pocit, že pokud bude mít rádo jednoho rodiče, zradí tím druhého. Navíc dochází k <em>parentifikaci</em> – dítěti je naloženo břemeno dospělých (řešení rodinného rozpočtu), na které psychicky nemá kapacitu.</p>
<h3>Základní pravidla ochrany dětí</h3>
<ol>
  <li><strong>Zákaz vzkazování přes dítě:</strong> Tohle je absolutní tabu. Nikdy, za žádných okolností, neposílejte dítě, aby druhému rodiči vyřídilo, že má poslat peníze, nebo se ho neptalo, kolik druhý rodič vydělává. Komunikace o penězích musí probíhat výhradně dospělý–dospělý.</li>
  <li><strong>Vysvětlujte bez obviňování:</strong> Pokud musíte snížit rodinný standard (např. zrušit drahý kroužek), řekněte to dítěti věcně: <em>"Naše rodinná situace se změnila a teď máme menší rozpočet. Tenhle kroužek teď nezvládneme, ale najdeme jinou aktivitu."</em> Nepřipojujte dodatek, čí je to vina.</li>
  <li><strong>Dejte jim pocit bezpečí:</strong> Děti nepotřebují drahé dárky, potřebují vědět, že jsou v bezpečí. Často opakujte: <em>"Jsme tu pro tebe oba. O dospělácké věci, jako jsou peníze a bydlení, se postaráme my."</em></li>
</ol>
<h3>Každá koruna za advokáta je koruna pro dítě</h3>
<p>Kdykoliv cítíte potřebu vyostřit spor o výživné a hnát ho k soudu kvůli stokorunovým rozdílům, uvědomte si matematiku soudních sporů. Měsíce stresu a desítky tisíc korun za právníky jsou energie a zdroje, které jste mohli věnovat přímo svému dítěti – ať už ve formě času, pozornosti, nebo úspor na jeho budoucnost.</p>
`
    },
    {
        id: "4",
        slug: "zabavovani-ridicaku-nefunguje",
        tag: "Světová data",
        title: "Zabavování řidičáků nefunguje: Co skutečně pomáhá?",
        desc: "Hluboká rešerše celosvětových programů. Důkazy ukazují, že represe selhává a mnohem lépe funguje mediace a pomoc s hledáním práce.",
        img: "https://placehold.co/800x400/1e3a5f/ffffff?text=Global+Research",
        content: `
<h2>Proč tvrdé tresty a represe zklamaly?</h2>
<p>Když se ve společnosti řeší problém neplatičů výživného, první instinktivně navrhovanou odpovědí bývají přísnější tresty: zabavování řidičských průkazů, odstavení bankovních účtů, či dokonce vězení. Analýza systémů a dat z USA, Austrálie a západní Evropy však ukazuje překvapivý fakt: <strong>u těch nejproblematičtějších neplatičů tyto represivní metody zcela selhávají</strong>.</p>
<p>Proč? Protože systém předpokládá, že neplatič peníze má, ale pouze je skrývá ("mrtvý brouk"). Realita u chronických neplatičů je ale mnohem častěji taková, že peníze skutečně nemají. Bojují s dlouhodobou nezaměstnaností, závislostmi nebo jsou v dluhové pasti exekucí, kde zabavení řidičáku situaci jen zhorší – znemožní jim totiž dojíždět za prací.</p>
<h3>Příklad z praxe: Texaský program NCP Choices</h3>
<p>Ve státě Texas v USA si uvědomili, že zavírat lidi bez práce do vězení nepřináší dětem žádné peníze. Zavedli proto program <em>NCP Choices</em>. Soudce neplatiči nabídl na výběr: buď vězení, nebo okamžitý nástup do intenzivního programu na hledání práce, kde dostane přiděleného kouče.</p>
<p>Výsledky byly ohromující. Skupina rodičů v tomto programu začala platit výživné <strong>o 50 % častěji a pravidelněji</strong> než kontrolní skupina vystavená pouze hrozbě trestu. Když stát pomohl rodiči postavit se na nohy a získat stabilní příjem, děti začaly své peníze dostávat. Ukázalo se, že bariérou nebyla zlovůle, ale reálná neschopnost.</p>
<h3>Teorie procedurální spravedlnosti</h3>
<p>Dalším silným poznatkem ze světových dat je princip tzv. <strong>Procedurální spravedlnosti</strong>. Psychologické studie ukazují, že lidé jsou mnohem ochotnější dodržovat rozhodnutí úřadů a soudů (i ta, která pro ně nejsou příznivá), pokud mají pocit, že samotný proces byl férový.</p>
<ul>
  <li>Dostali možnost se vyjádřit a byli vyslechnuti s respektem.</li>
  <li>Rozhodující autorita (soudce, mediátor) se chovala neutrálně.</li>
  <li>Systém se zajímal i o jejich životní situaci a nebral je jen jako "kalkulačku na peníze".</li>
</ul>
<p>Závěr z celosvětových rešerší je jasný: podpora, mediace a pomoc se zaměstnáním přinášejí rodinám násobně vyšší a stabilnější finanční přínos než výhrůžky, tresty a sociální ostrakizace neplatičů.</p>
`
    },
    {
        id: "5",
        slug: "mimosoudni-dohoda",
        tag: "Právo",
        title: "Mimosoudní dohoda: Proč je lepší než soudní bitva",
        desc: "Výhody dohody schválené soudem oproti tvrdému sporu. Ušetříte čas, peníze a hlavně nervy vaše i vašich dětí.",
        img: "https://placehold.co/800x400/eef2f7/1e3a5f?text=Dohoda",
        content: `
<h2>Soudní boj nemá vítěze, jen poražené</h2>
<p>Když se vztah rozpadne, je snadné podlehnout iluzi, že "soud vše vyřeší" a "soudce nám dá za pravdu". V realitě rodinného práva ale žádné triumfální výhry neexistují. Soudní spor se může táhnout dlouhé měsíce i roky. Pokaždé, když musíte k soudu nebo když vám přijde dopis od advokáta protistrany, hladina stresu vystřelí nahoru. Během tohoto procesu se původní zbytky rodičovského vztahu obvykle zcela zničí.</p>
<p>Proto je dnes moderním a soudy masivně podporovaným trendem <strong>mimosoudní dohoda rodičů</strong>.</p>
<h3>Jaké má dohoda výhody?</h3>
<ul>
  <li><strong>Máte věci pod kontrolou:</strong> Jakmile vstoupíte do soudní síně bez dohody, odevzdáváte kontrolu nad svou budoucností a budoucností svého dítěte cizímu člověku (soudci). V dohodě si sami určíte pravidla, která vyhovují vaší specifické situaci (např. platba části na účet a části ve formě nákupů oblečení).</li>
  <li><strong>Obrovská úspora peněz:</strong> Honoráře advokátů za zastupování ve sporném řízení mohou dosáhnout desítek tisíc korun na obou stranách. Tyto peníze pak rodině (a hlavně dětem) chybí.</li>
  <li><strong>Rychlost:</strong> Pokud na soud přinesete hotovou a rozumnou dohodu, soud ji obvykle schválí na prvním stání v řádu minut (tzv. nesporné řízení).</li>
  <li><strong>Psychologický efekt:</strong> Výzkumy jasně ukazují, že rodiče mnohem častěji dodržují ty povinnosti a pravidla, na kterých se <em>sami aktivně podíleli</em> a souhlasili s nimi, na rozdíl od pravidel, která jim byla autoritativně nařízena soudem proti jejich vůli.</li>
</ul>
<h3>Co by měla dobrá dohoda obsahovat?</h3>
<p>Kromě samotné částky výživného a data splatnosti (např. "do 15. dne v měsíci") by kvalitní dohoda měla pamatovat na budoucnost a řešit, jak si rodiče rozdělí mimořádné výdaje (školní lyžařský výcvik, zubař, dražší koníčky). Pomáhá to předcházet nedorozuměním v budoucnu. K sepsání dohody nepotřebujete nutně drahého advokáta – často stačí využít služeb zapsaného mediátora, který s vámi celou dohodu dojedná a formuluje tak, aby ji soud bez problému přijal.</p>
`
    },
    {
        id: "6",
        slug: "mimoradne-vydaje",
        tag: "Finance",
        title: "Mimořádné výdaje: Co (ne)pokrývá běžné výživné",
        desc: "Jak si rozdělit větší výdaje férově a vyhnout se hádkám o to, kdo zaplatí lyžák nebo rovnátka.",
        img: "https://placehold.co/800x400/33b8a5/ffffff?text=Výdaje",
        content: `
<h2>Běžné vs. mimořádné: Kde je hranice?</h2>
<p>Jeden z nejčastějších zdrojů konfliktů mezi rodiči po nastavení výživného začíná větou: <em>"A kdo zaplatí tohle?"</em> Je důležité si ujasnit, co vlastně měsíční částka výživného pokrývá a co už je takzvaný mimořádný náklad.</p>
<p><strong>Běžné výživné</strong> je určeno na pokrytí každodenních životních potřeb. Patří sem jídlo, běžné ošacení, podíl na bydlení, běžná drogerie, základní školní pomůcky (sešity, tužky) a běžné volnočasové aktivity mírného rozsahu.</p>
<p><strong>Mimořádné výdaje</strong> jsou naproti tomu nepravidelné, obvykle jednorázové a finančně náročnější položky. Typickými příklady jsou:</p>
<ul>
  <li>Rovnátka a nadstandardní zdravotní péče (brýle).</li>
  <li>Lyžařský výcvik, škola v přírodě.</li>
  <li>Drahé sportovní vybavení (pokud se dítě sportu věnuje závodně).</li>
  <li>Drahé letní tábory.</li>
</ul>
<h3>Jak se k mimořádným výdajům postavit?</h3>
<p>Zákon nikde neříká, že platící rodič musí automaticky hradit 50 % všech mimořádných výdajů nad rámec výživného. Na druhou stranu, soudy se ustálily v praxi, že pokud jde o výdaj objektivně odůvodněný a v zájmu dítěte (např. zdraví nebo vzdělání), měli by se na něm podílet oba rodiče.</p>
<p>Nejlepší a nejméně stresující přístup je uplatňovat <strong>princip předchozí shody</strong>. Pokud jeden rodič naplánuje pro dítě letní tábor za 15 000 Kč, aniž by se druhého zeptal na jeho finanční možnosti, nemůže automaticky očekávat zaplacení poloviny. Správný postup z pohledu respektující komunikace vypadá takto:</p>
<p><em>"Anička by ráda jela na tábor s koňmi, stojí to 8000 Kč. Myslíš, že bychom to zvládli rozdělit na poloviny, nebo na to teď nemáš prostor?"</em></p>
<p>Podíl na mimořádných výdajích by navíc neměl být vždy 50:50, ale měl by odpovídat poměru příjmů rodičů. Pokud jeden rodič vydělává trojnásobek toho, co druhý, je férové, aby se na nákupu drahých rovnátek podílel větším dílem.</p>
`
    },
    {
        id: "7",
        slug: "nova-rodina-a-deti",
        tag: "Právo",
        title: "Nová rodina a další děti: Jak ovlivňují výši alimentů?",
        desc: "Pravidla pro výpočet, když si jeden z rodičů založí novou rodinu a narodí se mu další potomek.",
        img: "https://placehold.co/800x400/e8f9f7/248c7c?text=Nová+Rodina",
        content: `
<h2>Všechny děti mají naprosto stejná práva</h2>
<p>Založení nové rodiny po rozvodu je přirozeným krokem, přináší s sebou ale spoustu emocí a také finančních otazníků. Jakmile se platícímu rodiči (povinnému) narodí další dítě v novém vztahu, často z druhé strany zazní obava: <em>"Přece kvůli tomu nesnížíte výživné na naše dítě, my za jeho novou rodinu nemůžeme!"</em></p>
<p>Český právní řád a judikatura soudů v tomto ohledu mluví naprosto jasně a nekompromisně: <strong>všechny děti daného rodiče, bez ohledu na to, z jakého jsou manželství či vztahu, mají stejné právo podílet se na jeho životní úrovni.</strong></p>
<h3>Jak to funguje v praxi?</h3>
<p>Narození dalšího dítěte objektivně znamená, že rodiči vznikla <strong>nová vyživovací povinnost</strong>. Balík peněz (příjem rodiče) je stále stejný, ale musí se z něj nyní uživit více krků. Jak jsme si ukázali u principu ministerských tabulek, jakmile se zvýší počet vyživovacích povinností, procentuální podíl pro každé jednotlivé dítě se logicky snižuje.</p>
<p>Příklad z praxe: Otec má z prvního manželství dvanáctiletého syna a platí na něj výživné odpovídající tomu, že je to jeho jediné dítě. Poté se ožení znovu a narodí se mu dvojčata. Otec nyní nevyživuje jedno, ale tři děti. Na syna z prvního manželství už logicky nemůže připadat tak vysoké procento jeho příjmu, jinak by byla ohrožena výživa nových dvojčat.</p>
<h3>Nic se neděje automaticky</h3>
<p>Je ale nutné upozornit, že narozením dalšího dítěte se výživné na předchozí děti nesníží "samo od sebe". Neexistuje žádný automatický mechanismus. Povinný rodič musí aktivně podat na soud návrh na snížení výživného z důvodu změny poměrů (pokud se s bývalým partnerem nedohodnou mimosoudně). Dokud soud o snížení pravomocně nerozhodne, je povinný platit původní, vyšší částku.</p>
<p>Zároveň platí, že soudci nevidí rádi, pokud si někdo "dělá děti, na které evidentně nemá peníze". Nicméně základní ústavní právo na založení rodiny má každý, a soud tak musí najít balanc, aby žádné z dětí nežilo v diametrálně odlišných podmínkách.</p>
`
    },
    {
        id: "8",
        slug: "plnoletost",
        tag: "Finance",
        title: "Plnoletost neznamená konec: Pravidla pro studenty",
        desc: "Do kdy trvá vyživovací povinnost a jak se mění role plnoletého studenta ve vztahu k výživnému.",
        img: "https://placehold.co/800x400/1e3a5f/33b8a5?text=Studenti",
        content: `
<h2>18. narozeninami to většinou nekončí</h2>
<p>Jedním z nejhouževnatějších mýtů v rodinném právu je tvrzení, že úderem 18. narozenin dítěte rodičům končí jakékoliv starosti a mohou přestat platit alimenty. <strong>To je zásadní omyl.</strong></p>
<p>Český občanský zákoník nikde neomezuje vyživovací povinnost věkem. Říká zcela srozumitelně, že vyživovací povinnost rodičů vůči dítěti trvá <strong>do doby, dokud dítě není schopno se samo živit</strong>.</p>
<h3>Doba studia jako prodloužené dětství</h3>
<p>V praxi to znamená, že pokud dítě po dosažení plnoletosti pokračuje ve studiu na střední, vyšší odborné, nebo vysoké škole (tzv. se soustavně připravuje na budoucí povolání), vyživovací povinnost trvá dál. Dítě totiž nemá objektivní možnost si vydělávat na plný úvazek.</p>
<p>Typicky tak vyživovací povinnost končí až ve chvíli, kdy potomek úspěšně absolvuje studium a získá schopnost nastoupit do zaměstnání (často ve 24 až 26 letech, po dokončení magisterského studia).</p>
<h3>Zásadní změny v plnoletosti</h3>
<p>I když placení nekončí, 18. narozeniny přece jen přinášejí obrovskou procesní a psychologickou změnu:</p>
<ul>
  <li><strong>Peníze jdou přímo dítěti:</strong> Dnem 18. narozenin se výživné přestává platit k rukám druhého rodiče (matky/otce) a začíná se platit <strong>přímo na bankovní účet zletilého dítěte</strong>.</li>
  <li><strong>Dítě je rovnocenným partnerem:</strong> Zletilé dítě jedná už samo za sebe. Pokud potřebuje výživné zvýšit, nepodává už žalobu jeho matka, ale podává ji zletilý student sám proti svému rodiči.</li>
  <li><strong>Ukončení povinnosti:</strong> Stejně jako výživné nekončí automaticky věkem, ani jeho případné ukončení (pokud např. dítě nechá školy a začne pracovat) není "automatické", pokud bylo určeno soudem. Platící rodič musí podat návrh na zrušení vyživovací povinnosti a doložit, že se dítě již samo živí.</li>
</ul>
<p>Soudy zároveň nejsou slepé k tzv. "věčným studentům". Pokud dítě nesmyslně střídá školy, úmyslně je protahuje nebo studium zjevně zanedbává, soud může konstatovat, že dítě sice studuje, ale vyživovací povinnost přesto zanikla, protože dítě nevyvíjí snahu stát se nezávislým.</p>
`
    },
    {
        id: "9",
        slug: "kdyz-druhy-rodic-neplati",
        tag: "Právo",
        title: "Když druhý rodič neplatí: Klidná a efektivní řešení",
        desc: "Jak postupovat před tím, než se zavolá exekutor. Asertivní komunikace a mediace v praxi.",
        img: "https://placehold.co/800x400/eef2f7/64748B?text=Řešení",
        content: `
<h2>Vynechaná platba je obrovský stres</h2>
<p>Když v den splatnosti nepřijdou peníze na účet, pro pečujícího rodiče to často znamená okamžitou paniku. Z čeho zaplatím školku? Za co nakoupím? První reakcí bývá často hněv a chuť začít hrozit policií a soudy. Pro klidný spánek vás i vašich dětí je ale lepší postupovat v logických krocích a neeskalovat situaci hned první den.</p>
<h3>Krok 1: Asertivní a klidné zjištění faktů</h3>
<p>Často může jít o lidskou chybu, zapomenutý trvalý příkaz po změně banky, nebo dočasný a řešitelný problém (např. dvoutýdenní neschopenka). Napište klidnou, faktickou zprávu bez výčitek:</p>
<p><em>"Ahoj, všimla jsem si, že tento měsíc zatím nedorazilo výživné. Zkontroluješ prosím u sebe v bance, jestli nedošlo k nějaké chybě? Díky."</em></p>
<h3>Krok 2: Pokud problém trvá – mediace a dohoda</h3>
<p>Pokud rodič nekomunikuje nebo rovnou oznámí, že přišel o práci a platit nemůže, hrozba exekutorem peníze nevykouzlí. Zkuste najít přechodné řešení, nebo využijte služeb <strong>rodinného mediátora</strong>. Můžete se dohodnout například na dočasném snížení částky se závazkem doplacení dlužného výživného, jakmile si druhý rodič najde práci. Je to mnohem lepší než dostat 0 Kč.</p>
<h3>Krok 3: Právní kroky (Exekuce a Zálohové výživné)</h3>
<p>Pokud selhaly všechny pokusy o dohodu, rodič nekomunikuje a záměrně se platbě vyhýbá (i když víte, že pracuje nebo majetek má), je načase chránit práva dítěte právní cestou:</p>
<ul>
  <li><strong>Předžalobní výzva:</strong> Poslední varování zaslané doporučeně (často pomůže, když je odesláno hlavičkovým papírem od advokáta).</li>
  <li><strong>Návrh na exekuci:</strong> Pokud máte soudní rozsudek (tzv. exekuční titul), stačí oslovit exekutora, který je schopen provést srážky ze mzdy dlužníka nebo mu blokovat účty (případně i ten řidičský průkaz).</li>
</ul>
<p><strong>Nová pomoc státu – Náhradní výživné:</strong> Od roku 2021 funguje v ČR systém tzv. náhradního výživného. Pokud vám druhý rodič neplatí a vy už jste celou věc předali exekutorovi (což je podmínka), můžete požádat Úřad práce, aby výživné vyplácel za dlužníka stát (aktuálně až do výše 3000 Kč měsíčně). Stát pak dlužné částky bude vymáhat po neplatiči sám.</p>
`
    },
    {
        id: "10",
        slug: "stridava-pece",
        tag: "Právo",
        title: "Střídavá péče a výživné: Znamená to nulu?",
        desc: "Nejčastější mýtus o střídavé péči a vysvětlení nutnosti vyrovnání životní úrovně u obou rodičů.",
        img: "https://placehold.co/800x400/33b8a5/1e3a5f?text=Střídavá+péče",
        content: `
<h2>Nebezpečný mýtus: "Máme to půl na půl, nikdo nic neplatí"</h2>
<p>Představa, že stanovení střídavé péče (např. systém týden / týden) automaticky znamená zrušení vyživovací povinnosti obou rodičů vůči sobě navzájem, je jedním z nejškodlivějších a nejčastějších mýtů v českém rodinném právu.</p>
<p>Soudy totiž neurčují výživné jen jako náhradu za čas, kdy o dítě rodič nepečuje. Hlavním principem zákona o rodině je, že <strong>dítě má právo podílet se na životní úrovni obou svých rodičů</strong>.</p>
<h3>Proč musí "bohatší" platit i při střídavé péči?</h3>
<p>Představte si extrémní, ale reálný scénář: Matka vydělává jako úřednice 25 000 Kč čistého měsíčně. Otec je manažer a jeho příjem je 100 000 Kč čistého. Soud stanoví střídavou péči týden u matky, týden u otce.</p>
<p>Kdyby nikdo nikomu nic neplatil, dítě by zažívalo těžkou schizofrenii. U otce v jeho týdnu by dítě jedlo lososa, chodilo do kina a žilo v luxusním domě. U matky by jedlo párky s chlebem a sdílelo malý byt. Zákon takovou situaci nedovoluje. Životní úroveň dítěte by měla být vyrovnaná bez ohledu na to, u koho zrovna spí.</p>
<p>Proto soud vypočítá teoretické výživné, které by matka platila otci, a teoretické výživné, které by otec platil matce (podle jejich odlišných příjmů). Poté tyto částky odečte a <strong>bohatší rodič musí doplácet rozdíl</strong> tomu chudšímu.</p>
<h3>A co náklady spojené se školou a zájmy?</h3>
<p>Střídavá péče vyžaduje mimořádně dobrou komunikaci rodičů, protože se musí shodnout na tom, kdo bude hradit ty výdaje, které se nedají snadno "rozdělit napůl" podle toho, kde dítě zrovna je. Kdo koupí zimní bundu? Kdo zaplatí obědy ve škole? Kdo kroužek, který se koná každý čtvrtek?</p>
<p>Často se to řeší tak, že se jeden z rodičů (tzv. "plátce stálých potřeb") pověří nákupem oblečení a platbou školy, a soudní výpočet výživného mu tento náklad kompenzuje tak, že druhý rodič mu na tyto fixní výdaje musí zasílat dohodnutý měsíční příspěvek. Proto u střídavé péče "nula Kč" opravdu vychází jen velmi vzácně – pouze v případě, kdy mají rodiče prakticky totožné platy i životní úroveň.</p>
`
    }
];

const template = function(a) {
    return "<!doctype html>\n<html lang='cs'>\n  <head>\n    <meta charset='utf-8'>\n    <meta name='viewport' content='width=device-width, initial-scale=1'>\n    <title>" + a.title + " | Rodičovský Kompas</title>\n    <meta name='description' content='" + a.desc + "'>\n    <link rel='stylesheet' href='styles.css?v=2'>\n    <script defer src='/_vercel/insights/script.js'></script>\n    <!-- Google tag (gtag.js) -->\n    <script async src='https://www.googletagmanager.com/gtag/js?id=G-5NG2Y6632T'></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n\n      gtag('config', 'G-5NG2Y6632T');\n    </script>\n    <style>\n      .article-container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }\n      .nav-back { display: inline-flex; align-items: center; gap: 8px; color: var(--blue); text-decoration: none; font-weight: 700; margin-bottom: 30px; }\n      .nav-back:hover { color: var(--teal); }\n      .article-tag { font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--teal); margin-bottom: 12px; display: block; letter-spacing: 0.05em; }\n      h1 { font-size: 2.5rem; color: var(--blue); margin-bottom: 24px; line-height: 1.2; }\n      .article-img { width: 100%; height: auto; border-radius: 16px; margin-bottom: 40px; box-shadow: 0 10px 30px rgba(30, 58, 95, 0.1); }\n      .article-content { font-size: 1.1rem; line-height: 1.8; color: var(--ink); }\n      .article-content h2 { color: var(--blue); margin-top: 40px; margin-bottom: 16px; }\n      .article-content h3 { color: var(--blue); margin-top: 24px; margin-bottom: 12px; }\n      .article-content blockquote { border-left: 4px solid var(--teal); padding-left: 20px; margin: 30px 0; font-style: italic; color: #475467; font-size: 1.25rem; }\n      .article-content ul, .article-content ol { margin-bottom: 24px; padding-left: 20px; }\n      .article-content li { margin-bottom: 10px; }\n    </style>\n  </head>\n  <body>\n    <main class='app-shell' style='max-width: 1000px;'>\n      <div class='article-container'>\n        <a href='clanky.html' class='nav-back'>\n          <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:20px;height:20px;'><path d='M19 12H5M12 19l-7-7 7-7'/></svg>\n          Zpět na přehled článků\n        </a>\n        <span class='article-tag'>" + a.tag + "</span>\n        <h1>" + a.title + "</h1>\n        <img src='" + a.img + "' alt='" + a.title + "' class='article-img'>\n        <div class='article-content'>\n          " + a.content + "\n        </div>\n      </div>\n    </main>\n  </body>\n</html>";
};

let cards_html = "";
for (const a of articles) {
    cards_html += "\n        <a href='clanek-" + a.id + "-" + a.slug + ".html' class='blog-card'>\n          <img src='" + a.img + "' alt='" + a.title + "' class='blog-card-img'>\n          <div class='blog-card-content'>\n            <span class='blog-tag'>" + a.tag + "</span>\n            <h2>" + a.title + "</h2>\n            <p>" + a.desc + "</p>\n            <div class='read-more'>Číst článek <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' style='width:16px;height:16px;'><path d='M5 12h14M12 5l7 7-7 7'/></svg></div>\n          </div>\n        </a>";
}

const index_html = "<!doctype html>\n<html lang='cs'>\n  <head>\n    <meta charset='utf-8'>\n    <meta name='viewport' content='width=device-width, initial-scale=1'>\n    <title>Články a průvodce | Rodičovský Kompas</title>\n    <meta name='description' content='Edukativní články o výživném, střídavé péči a řešení konfliktů.'>\n    <link rel='stylesheet' href='styles.css?v=2'>\n    <script defer src='/_vercel/insights/script.js'></script>\n    <!-- Google tag (gtag.js) -->\n    <script async src='https://www.googletagmanager.com/gtag/js?id=G-5NG2Y6632T'></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n\n      gtag('config', 'G-5NG2Y6632T');\n    </script>\n    <style>\n      .blog-header { text-align: center; padding: 60px 20px; background: var(--soft); border-radius: 24px; margin-bottom: 40px; }\n      .blog-header h1 { font-size: 2.5rem; color: var(--blue); margin-bottom: 16px; }\n      .blog-header p { font-size: 1.1rem; color: var(--ink); max-width: 600px; margin: 0 auto; }\n      .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }\n      .blog-card { background: #ffffff; border: 1px solid var(--line); border-radius: 16px; overflow: hidden; transition: transform 0.2s ease, box-shadow 0.2s ease; display: flex; flex-direction: column; text-decoration: none; color: inherit; }\n      .blog-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(30, 58, 95, 0.1); }\n      .blog-card-img { width: 100%; height: 200px; background: #eef2f7; object-fit: cover; }\n      .blog-card-content { padding: 20px; flex: 1; display: flex; flex-direction: column; }\n      .blog-tag { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--teal); margin-bottom: 8px; letter-spacing: 0.05em; }\n      .blog-card h2 { font-size: 1.25rem; margin: 0 0 12px 0; color: var(--blue); line-height: 1.4; }\n      .blog-card p { font-size: 0.9rem; color: #64748B; line-height: 1.6; margin-bottom: 20px; flex: 1; }\n      .read-more { font-weight: 700; color: var(--teal); display: flex; align-items: center; gap: 6px; }\n      .nav-back { display: inline-flex; align-items: center; gap: 8px; color: var(--blue); text-decoration: none; font-weight: 700; margin-bottom: 20px; }\n    </style>\n  </head>\n  <body>\n    <main class='app-shell' style='max-width: 1000px;'>\n      <a href='index.html' class='nav-back'>\n        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:20px;height:20px;'><path d='M19 12H5M12 19l-7-7 7-7'/></svg>\n        Zpět na kalkulačku\n      </a>\n      <div class='blog-header'>\n        <h1>Články a průvodce</h1>\n        <p>Praktické rady, jak řešit výživné a péči o děti v klidu, bez zbytečných soudních bojů a s důrazem na to nejdůležitější – pohodu vašich dětí.</p>\n      </div>\n      <div class='blog-grid'>\n        " + cards_html + "\n      </div>\n    </main>\n  </body>\n</html>";

fs.writeFileSync("clanky.html", index_html);
for (const a of articles) {
    fs.writeFileSync("clanek-" + a.id + "-" + a.slug + ".html", template(a));
}
