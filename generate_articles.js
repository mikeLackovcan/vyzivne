const fs = require('fs');

const articles = [
    {
        id: "1",
        slug: "vypocet-vyzivneho",
        tag: "Právo a finance",
        title: "Jak se počítá výživné (2026)? Orientace v tabulkách bez stresu",
        desc: "Vysvětlení principu doporučujících tabulek Ministerstva spravedlnosti a proč slouží jen jako výchozí vodítko pro dohodu rodičů.",
        img: "assets/hero-compass.png",
        content: "<h2>O čem jsou tabulky Ministerstva spravedlnosti?</h2><p>V roce 2026 se výživné stále určuje podle orientačních tabulek, které ale <strong>nejsou právně závazné</strong>. Jsou to spíše vodítka, jak si představit férovou částku.</p><blockquote>Nejdůležitější je nestavět na číslech jako na dogmatu. Jde o životní úroveň dítěte.</blockquote><p>Pokud se rodiče dohodnou, mohou si dohodnout v podstatě jakoukoliv smysluplnou částku, kterou soud schválí. Soud při rozhodování zohledňuje i péči (pokud má dítě jeden z rodičů na víkendy, snižuje to výživné).</p>"
    },
    {
        id: "2",
        slug: "conflict-resolution",
        tag: "Psychologie",
        title: "Výživné a Conflict Resolution: Jak se dohodnout bez boje",
        desc: "Oddělte emoce od problému. Zjistěte, jak se přestat dohadovat o pozicích a začít hledat řešení založená na skutečných zájmech.",
        img: "assets/hero-mediation.png",
        content: "<h2>Peníze často maskují bolest</h2><p>Podle přístupu Conflict Resolution (řešení konfliktů) je spor o peníze při rozchodu zřídka jenom o penězích. Často je za tím snaha potrestat druhého za rozpad vztahu.</p><h3>Oddělte lidi od problému</h3><p>Zlaté pravidlo mediace zní: buďte tvrdí na problém, ale měkcí na lidi. Útoky typu jsi nezodpovědný nikam nevedou.</p><ul><li><strong>Zaměřte se na zájmy, ne na pozice:</strong> Místo 'chci po tobě 10 000 Kč' řekněte 'potřebuji zajistit dceři gymnastiku'.</li></ul>"
    },
    {
        id: "3",
        slug: "dite-na-prvnim-miste",
        tag: "Rodina",
        title: "Dítě na prvním místě: Jak odstínit ratolesti od sporů o peníze",
        desc: "Praktické rady psychologů, jak komunikovat s dětmi o změnách v rodině a proč je nikdy nevtahovat do finančních hádek.",
        img: "assets/hero-child.png",
        content: "<h2>Největší zátěž nenesou rodiče, ale děti</h2><p>Finanční hádky rodičů patří k nejvíce stresujícím faktorům pro vývoj dítěte. Psychologové varují před syndromem zavrženého rodiče.</p><h3>Základní pravidla komunikace</h3><ol><li><strong>Zákaz vzkazování:</strong> Nikdy neposílejte dítě k druhému rodiči pro peníze.</li><li><strong>Neshazujte druhého rodiče.</strong></li><li><strong>Dejte jim pocit bezpečí.</strong></li></ol><p>Každá koruna utracená za advokáty je koruna, kterou byste mohli utratit za své dítě.</p>"
    },
    {
        id: "4",
        slug: "zabavovani-ridicaku-nefunguje",
        tag: "Světová data",
        title: "Zabavování řidičáků nefunguje: Co skutečně pomáhá?",
        desc: "Hluboká rešerše celosvětových programů. Důkazy ukazují, že represe selhává a mnohem lépe funguje mediace a pomoc s hledáním práce.",
        img: "https://placehold.co/800x400/1e3a5f/ffffff?text=Global+Research",
        content: "<h2>Proč tvrdé tresty zklamaly?</h2><p>Analýza systémů po celém světě ukazuje, že odebírání řidičáků funguje jen na úzkou skupinu lidí. Většina neplatičů by platila, ale nemá z čeho.</p><h3>Co ukázaly studie?</h3><p>Program NCP Choices v Texasu integroval pomoc v nezaměstnanosti přímo do procesu sjednávání výživného. Místo soudů a trestů pomohl sociální pracovník rodiči najít práci. Výsledek? Skokový nárůst pravidelných plateb.</p><p>Dalším pilířem je <strong>Procedurální spravedlnost</strong>. Pokud se rodič cítí slyšen a systém mu připadá spravedlivý, je násobně vyšší šance, že bude platit.</p>"
    },
    {
        id: "5",
        slug: "mimosoudni-dohoda",
        tag: "Právo",
        title: "Mimosoudní dohoda: Proč je lepší než soudní bitva",
        desc: "Výhody dohody schválené soudem oproti tvrdému sporu. Ušetříte čas, peníze a hlavně nervy vaše i vašich dětí.",
        img: "https://placehold.co/800x400/eef2f7/1e3a5f?text=Dohoda",
        content: "<h2>Soudní boj nemá vítěze</h2><p>Soudní spor se může táhnout roky. Advokáti a soudní poplatky vás mohou stát víc, než o kolik se soudíte.</p><p><strong>Výhody dohody:</strong></p><ul><li><strong>Kontrola:</strong> O osudu vašich peněz rozhodujete vy, ne soudce.</li><li><strong>Rychlost:</strong> Dohoda schválená soudem může být hotová za měsíc.</li><li><strong>Zachování vztahů:</strong> Umožní to snazší rodičovskou komunikaci v budoucnu.</li></ul>"
    },
    {
        id: "6",
        slug: "mimoradne-vydaje",
        tag: "Finance",
        title: "Mimořádné výdaje: Co (ne)pokrývá běžné výživné",
        desc: "Jak si rozdělit větší výdaje férově a vyhnout se hádkám o to, kdo zaplatí lyžák nebo rovnátka.",
        img: "https://placehold.co/800x400/33b8a5/ffffff?text=Výdaje",
        content: "<h2>Co je běžné a co už je mimořádné?</h2><p>Běžné výživné pokrývá každodenní náklady: stravu, běžné oblečení, školní pomůcky. Často ale dojde na situace jako rovnátka nebo škola v přírodě.</p><p>Zákon neříká, že by jeden rodič musel automaticky platit polovinu, ale v praxi se k mimořádným a odůvodněným nákladům přihlíží. Ideální je se na výdajích dohodnout předem a rozdělit si je poměrově k příjmům.</p>"
    },
    {
        id: "7",
        slug: "nova-rodina-a-deti",
        tag: "Právo",
        title: "Nová rodina a další děti: Jak ovlivňují výši alimentů?",
        desc: "Pravidla pro výpočet, když si jeden z rodičů založí novou rodinu a narodí se mu další potomek.",
        img: "https://placehold.co/800x400/e8f9f7/248c7c?text=Nová+Rodina",
        content: "<h2>Všechny děti mají stejná práva</h2><p>Pokud se vám po rozvodu narodí další dítě, jedná se o novou vyživovací povinnost. Všechny vaše děti mají stejné právo sdílet vaši životní úroveň.</p><p>Soud v takovém případě obvykle sníží procento z příjmu připadající na první dítě. Není to ale automatické – musíte požádat soud o snížení výživného.</p>"
    },
    {
        id: "8",
        slug: "plnoletost",
        tag: "Finance",
        title: "Plnoletost neznamená konec: Pravidla pro studenty",
        desc: "Do kdy trvá vyživovací povinnost a jak se mění role plnoletého studenta ve vztahu k výživnému.",
        img: "https://placehold.co/800x400/1e3a5f/33b8a5?text=Studenti",
        content: "<h2>18. narozeninami to nekončí</h2><p>Mýtus: V osmnácti už platit nemusím. Skutečnost: vyživovací povinnost rodičů k dítěti trvá do doby, než je dítě schopno se samo živit.</p><p>Typicky to znamená, že pokud dítě studuje prezenčně (připravuje se na povolání), povinnost trvá dál, často až do 26 let. Peníze se po 18. roce posílají přímo dítěti.</p>"
    },
    {
        id: "9",
        slug: "kdyz-druhy-rodic-neplati",
        tag: "Právo",
        title: "Když druhý rodič neplatí: Klidná a efektivní řešení",
        desc: "Jak postupovat před tím, než se zavolá exekutor. Asertivní komunikace a mediace v praxi.",
        img: "https://placehold.co/800x400/eef2f7/64748B?text=Řešení",
        content: "<h2>Nereagujte hned agresivně</h2><p>Vynechání platby je stres. Dříve než poběžíte k exekutorovi, zjistěte proč. Ztráta zaměstnání? Nemoc?</p><p>Pokud komunikace nefunguje, využijte služeb mediátora. Teprve po vyčerpání možností přichází na řadu exekuce. Nově také existuje Zálohové výživné, kdy za neplatiče (při splnění podmínek) platí úřad práce.</p>"
    },
    {
        id: "10",
        slug: "stridava-pece",
        tag: "Právo",
        title: "Střídavá péče a výživné: Znamená to nulu?",
        desc: "Nejčastější mýtus o střídavé péči a vysvětlení nutnosti vyrovnání životní úrovně u obou rodičů.",
        img: "https://placehold.co/800x400/33b8a5/1e3a5f?text=Střídavá+péče",
        content: "<h2>Mýtus o výživném 0 Kč</h2><p>Panuje přesvědčení, že při střídavé péči (50:50) nikdo nikomu nic neplatí. To je pravda POUZE v případě, že mají oba rodiče naprosto totožné příjmy.</p><p>Zákon říká, že dítě má právo podílet se na životní úrovni OBOCH rodičů. Proto bohatší rodič platí výživné (nebo doplatek) chudšímu rodiči, aby se životní úroveň srovnala.</p>"
    }
];

const template = function(a) {
    return "<!doctype html>\n<html lang='cs'>\n  <head>\n    <meta charset='utf-8'>\n    <meta name='viewport' content='width=device-width, initial-scale=1'>\n    <title>" + a.title + " | Rodičovský Kompas</title>\n    <meta name='description' content='" + a.desc + "'>\n    <link rel='stylesheet' href='styles.css?v=2'>\n    <script defer src='/_vercel/insights/script.js'></script>\n    <style>\n      .article-container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }\n      .nav-back { display: inline-flex; align-items: center; gap: 8px; color: var(--blue); text-decoration: none; font-weight: 700; margin-bottom: 30px; }\n      .nav-back:hover { color: var(--teal); }\n      .article-tag { font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--teal); margin-bottom: 12px; display: block; letter-spacing: 0.05em; }\n      h1 { font-size: 2.5rem; color: var(--blue); margin-bottom: 24px; line-height: 1.2; }\n      .article-img { width: 100%; height: auto; border-radius: 16px; margin-bottom: 40px; box-shadow: 0 10px 30px rgba(30, 58, 95, 0.1); }\n      .article-content { font-size: 1.1rem; line-height: 1.8; color: var(--ink); }\n      .article-content h2 { color: var(--blue); margin-top: 40px; margin-bottom: 16px; }\n      .article-content h3 { color: var(--blue); margin-top: 24px; margin-bottom: 12px; }\n      .article-content blockquote { border-left: 4px solid var(--teal); padding-left: 20px; margin: 30px 0; font-style: italic; color: #475467; font-size: 1.25rem; }\n      .article-content ul, .article-content ol { margin-bottom: 24px; padding-left: 20px; }\n      .article-content li { margin-bottom: 10px; }\n    </style>\n  </head>\n  <body>\n    <main class='app-shell' style='max-width: 1000px;'>\n      <div class='article-container'>\n        <a href='clanky.html' class='nav-back'>\n          <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:20px;height:20px;'><path d='M19 12H5M12 19l-7-7 7-7'/></svg>\n          Zpět na přehled článků\n        </a>\n        <span class='article-tag'>" + a.tag + "</span>\n        <h1>" + a.title + "</h1>\n        <img src='" + a.img + "' alt='" + a.title + "' class='article-img'>\n        <div class='article-content'>\n          " + a.content + "\n        </div>\n      </div>\n    </main>\n  </body>\n</html>";
};

let cards_html = "";
for (const a of articles) {
    cards_html += "\n        <a href='clanek-" + a.id + "-" + a.slug + ".html' class='blog-card'>\n          <img src='" + a.img + "' alt='" + a.title + "' class='blog-card-img'>\n          <div class='blog-card-content'>\n            <span class='blog-tag'>" + a.tag + "</span>\n            <h2>" + a.title + "</h2>\n            <p>" + a.desc + "</p>\n            <div class='read-more'>Číst článek <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' style='width:16px;height:16px;'><path d='M5 12h14M12 5l7 7-7 7'/></svg></div>\n          </div>\n        </a>";
}

const index_html = "<!doctype html>\n<html lang='cs'>\n  <head>\n    <meta charset='utf-8'>\n    <meta name='viewport' content='width=device-width, initial-scale=1'>\n    <title>Články a průvodce | Rodičovský Kompas</title>\n    <meta name='description' content='Edukativní články o výživném, střídavé péči a řešení konfliktů.'>\n    <link rel='stylesheet' href='styles.css?v=2'>\n    <script defer src='/_vercel/insights/script.js'></script>\n    <style>\n      .blog-header { text-align: center; padding: 60px 20px; background: var(--soft); border-radius: 24px; margin-bottom: 40px; }\n      .blog-header h1 { font-size: 2.5rem; color: var(--blue); margin-bottom: 16px; }\n      .blog-header p { font-size: 1.1rem; color: var(--ink); max-width: 600px; margin: 0 auto; }\n      .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }\n      .blog-card { background: #ffffff; border: 1px solid var(--line); border-radius: 16px; overflow: hidden; transition: transform 0.2s ease, box-shadow 0.2s ease; display: flex; flex-direction: column; text-decoration: none; color: inherit; }\n      .blog-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(30, 58, 95, 0.1); }\n      .blog-card-img { width: 100%; height: 200px; background: #eef2f7; object-fit: cover; }\n      .blog-card-content { padding: 20px; flex: 1; display: flex; flex-direction: column; }\n      .blog-tag { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--teal); margin-bottom: 8px; letter-spacing: 0.05em; }\n      .blog-card h2 { font-size: 1.25rem; margin: 0 0 12px 0; color: var(--blue); line-height: 1.4; }\n      .blog-card p { font-size: 0.9rem; color: #64748B; line-height: 1.6; margin-bottom: 20px; flex: 1; }\n      .read-more { font-weight: 700; color: var(--teal); display: flex; align-items: center; gap: 6px; }\n      .nav-back { display: inline-flex; align-items: center; gap: 8px; color: var(--blue); text-decoration: none; font-weight: 700; margin-bottom: 20px; }\n    </style>\n  </head>\n  <body>\n    <main class='app-shell' style='max-width: 1000px;'>\n      <a href='index.html' class='nav-back'>\n        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:20px;height:20px;'><path d='M19 12H5M12 19l-7-7 7-7'/></svg>\n        Zpět na kalkulačku\n      </a>\n      <div class='blog-header'>\n        <h1>Články a průvodce</h1>\n        <p>Praktické rady, jak řešit výživné a péči o děti v klidu, bez zbytečných soudních bojů a s důrazem na to nejdůležitější – pohodu vašich dětí.</p>\n      </div>\n      <div class='blog-grid'>\n        " + cards_html + "\n      </div>\n    </main>\n  </body>\n</html>";

fs.writeFileSync("clanky.html", index_html);
for (const a of articles) {
    fs.writeFileSync("clanek-" + a.id + "-" + a.slug + ".html", template(a));
}
