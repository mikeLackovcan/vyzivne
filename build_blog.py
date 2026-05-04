import os

articles = [
    {
        "id": "1",
        "slug": "vypocet-vyzivneho",
        "tag": "Právo a finance",
        "title": "Jak se počítá výživné (2026)? Orientace v tabulkách bez stresu",
        "desc": "Vysvětlení principu doporučujících tabulek Ministerstva spravedlnosti a proč slouží jen jako výchozí vodítko pro dohodu rodičů.",
        "img": "assets/hero-compass.png",
        "content": """
        <h2>O čem jsou tabulky Ministerstva spravedlnosti?</h2>
        <p>V roce 2026 se výživné stále určuje podle orientačních tabulek, které ale <strong>nejsou právně závazné</strong>. Jsou to spíše "vodítka", jak si představit férovou částku. Tabulka pracuje s procentuálním podílem z vašeho čistého příjmu v závislosti na věku dětí.</p>
        <p>Pokud se rodiče dohodnou, mohou si dohodnout v podstatě jakoukoliv smysluplnou částku, kterou soud schválí. Výpočetní tabulky jsou tu hlavně pro ty, kteří se nemohou shodnout.</p>
        <blockquote>"Nejdůležitější je nestavět na číslech jako na dogmatu. Jde o životní úroveň dítěte."</blockquote>
        <p>Soud při rozhodování zohledňuje i péči (pokud má dítě jeden z rodičů na víkendy, snižuje to výživné, neboť péče už sama o sobě stojí peníze) a další faktory jako hypotéky nebo nové vyživovací povinnosti.</p>
        """
    },
    {
        "id": "2",
        "slug": "conflict-resolution",
        "tag": "Psychologie",
        "title": "Výživné a Conflict Resolution: Jak se dohodnout bez boje",
        "desc": "Oddělte emoce od problému. Zjistěte, jak se přestat dohadovat o pozicích a začít hledat řešení založená na skutečných zájmech.",
        "img": "assets/hero-mediation.png",
        "content": """
        <h2>Peníze často maskují bolest</h2>
        <p>Podle přístupu Conflict Resolution (řešení konfliktů) je spor o peníze při rozchodu zřídka jenom o penězích. Často je za tím snaha "potrestat" druhého za rozpad vztahu, nebo strach ze ztráty kontroly.</p>
        <h3>Oddělte lidi od problému</h3>
        <p>Zlaté pravidlo mediace zní: buďte tvrdí na problém, ale měkcí na lidi. Útoky typu "jsi nezodpovědný" nikam nevedou. Místo toho zkuste: "Potřebujeme vyřešit, z čeho se zaplatí lyžařský výcvik."</p>
        <ul>
            <li><strong>Zaměřte se na zájmy, ne na pozice:</strong> Místo "chci po tobě 10 000 Kč" (pozice) řekněte "potřebuji zajistit, aby dcera mohla dál chodit na gymnastiku" (zájem).</li>
            <li><strong>Hledejte objektivní kritéria:</strong> Použijte naši kalkulačku jako neutrální třetí stranu pro začátek vyjednávání.</li>
        </ul>
        """
    },
    {
        "id": "3",
        "slug": "dite-na-prvnim-miste",
        "tag": "Rodina",
        "title": "Dítě na prvním místě: Jak odstínit ratolesti od sporů o peníze",
        "desc": "Praktické rady psychologů, jak komunikovat s dětmi o změnách v rodině a proč je nikdy nevtahovat do finančních hádek.",
        "img": "assets/hero-child.png",
        "content": """
        <h2>Největší zátěž nenesou rodiče, ale děti</h2>
        <p>Finanční hádky rodičů patří k nejvíce stresujícím faktorům pro vývoj dítěte. Psychologové varují před takzvaným "syndromem zavrženého rodiče" nebo vytvářením pocitu viny u dětí.</p>
        <h3>Základní pravidla komunikace</h3>
        <ol>
            <li><strong>Zákaz "vzkazování":</strong> Nikdy neposílejte dítě k druhému rodiči s větou "Řekni tátovi, ať už konečně pošle peníze".</li>
            <li><strong>Neshazujte druhého rodiče:</strong> I když jste frustrovaní, před dětmi o druhém rodiči mluvte s respektem.</li>
            <li><strong>Dejte jim pocit bezpečí:</strong> Dítě musí vědět, že se o něj oba postarají, ať se děje cokoliv.</li>
        </ol>
        <p>Pamatujte, že každá koruna utracená za advokáty ve zbytečné bitvě, je koruna, kterou byste mohli utratit společně za své dítě.</p>
        """
    },
    {
        "id": "4",
        "slug": "zabavovani-ridicaku-nefunguje",
        "tag": "Světová data",
        "title": "Zabavování řidičáků nefunguje: Co skutečně pomáhá?",
        "desc": "Hluboká rešerše celosvětových programů. Důkazy ukazují, že represe selhává a mnohem lépe funguje mediace a pomoc s hledáním práce.",
        "img": "https://placehold.co/800x400/1e3a5f/ffffff?text=Global+Research",
        "content": """
        <h2>Proč tvrdé tresty zklamaly?</h2>
        <p>Hluboká analýza systémů po celém světě ukazuje, že odebírání řidičských průkazů nebo posílání rodičů do vězení funguje jen na úzkou skupinu lidí. Většina neplatičů patří do skupiny, která by platila, ale nemá z čeho.</p>
        <h3>Co ukázaly studie z Texasu a Austrálie?</h3>
        <p>Program "NCP Choices" integroval pomoc v nezaměstnanosti přímo do procesu sjednávání výživného. Místo soudů a trestů pomohl sociální pracovník rodiči najít práci. Výsledek? Skokový nárůst pravidelných plateb.</p>
        <p>Dalším pilířem je <strong>Procedurální spravedlnost</strong>. Pokud se rodič cítí při stanovování výživného slyšen a systém mu připadá spravedlivý, je násobně vyšší šance, že bude platit dobrovolně. Nesmyslně "přestřelené" dlužné částky naopak vedou k tomu, že rodič rezignuje a přejde do šedé ekonomiky.</p>
        """
    },
    {
        "id": "5",
        "slug": "mimosoudni-dohoda",
        "tag": "Právo",
        "title": "Mimosoudní dohoda: Proč je lepší než soudní bitva",
        "desc": "Výhody dohody schválené soudem oproti tvrdému sporu. Ušetříte čas, peníze a hlavně nervy vaše i vašich dětí.",
        "img": "https://placehold.co/800x400/eef2f7/1e3a5f?text=Dohoda",
        "content": """
        <h2>Soudní boj nemá vítěze</h2>
        <p>Pokud nedojde k dohodě, soudní spor se může táhnout roky. Advokáti, znalecké posudky a soudní poplatky vás mohou stát víc, než o kolik se soudíte.</p>
        <p><strong>Výhody dohody:</strong></p>
        <ul>
            <li><strong>Kontrola:</strong> O osudu vašich peněz rozhodujete vy, ne soudce, který vás vidí poprvé v životě.</li>
            <li><strong>Rychlost:</strong> Dohoda, kterou jen podáte k soudu ke schválení (pokud máte nezletilé děti), může být hotová za měsíc.</li>
            <li><strong>Zachování vztahů:</strong> Jakmile jednou u soudu "perete špinavé prádlo", návrat k normální komunikaci je velmi těžký.</li>
        </ul>
        """
    },
    {
        "id": "6",
        "slug": "mimoradne-vydaje",
        "tag": "Finance",
        "title": "Mimořádné výdaje: Co (ne)pokrývá běžné výživné",
        "desc": "Jak si rozdělit větší výdaje férově a vyhnout se hádkám o to, kdo zaplatí lyžák nebo rovnátka.",
        "img": "https://placehold.co/800x400/33b8a5/ffffff?text=Výdaje",
        "content": """
        <h2>Co je běžné a co už je mimořádné?</h2>
        <p>Běžné výživné pokrývá každodenní náklady: stravu, běžné oblečení, základní školní pomůcky a chod domácnosti. Často ale dojde na situace jako jsou nová rovnátka, škola v přírodě nebo drahý kroužek.</p>
        <p>Zákon sice neříká, že by jeden rodič musel automaticky platit polovinu, ale v praxi se k mimořádným a odůvodněným nákladům přihlíží. Ideální je se na těchto výdajích dohodnout předem a rozdělit si je poměrově k příjmům.</p>
        """
    },
    {
        "id": "7",
        "slug": "nova-rodina-a-deti",
        "tag": "Právo",
        "title": "Nová rodina a další děti: Jak ovlivňují výši alimentů?",
        "desc": "Pravidla pro výpočet, když si jeden z rodičů založí novou rodinu a narodí se mu další potomek.",
        "img": "https://placehold.co/800x400/e8f9f7/248c7c?text=Nová+Rodina",
        "content": """
        <h2>Všechny děti mají stejná práva</h2>
        <p>Pokud se vám po rozvodu narodí další dítě v novém vztahu, jedná se z právního hlediska o "novou vyživovací povinnost". Všechny vaše děti – ty z prvního manželství i ty současné – mají stejné právo sdílet vaši životní úroveň.</p>
        <p>Soud v takovém případě (nebo naše kalkulačka) obvykle sníží procento z příjmu připadající na první dítě, protože nyní se váš příjem musí dělit mezi více dětí. Není to ale automatické – musíte požádat soud o snížení výživného z důvodu změny poměrů.</p>
        """
    },
    {
        "id": "8",
        "slug": "plnoletost",
        "tag": "Finance",
        "title": "Plnoletost neznamená konec: Pravidla pro studenty",
        "desc": "Do kdy trvá vyživovací povinnost a jak se mění role plnoletého studenta ve vztahu k výživnému.",
        "img": "https://placehold.co/800x400/1e3a5f/33b8a5?text=Studenti",
        "content": """
        <h2>18. narozeninami to nekončí</h2>
        <p>Mýtus: "V osmnácti už platit nemusím." Skutečnost je taková, že vyživovací povinnost rodičů k dítěti trvá do doby, než je dítě "schopno se samo živit".</p>
        <p>Typicky to znamená, že pokud dítě studuje prezenčně střední nebo vysokou školu (tzv. se připravuje na budoucí povolání), povinnost platit trvá dál, často až do 26 let. Jediný rozdíl je, že po dovršení 18 let by se peníze měly posílat přímo na účet dospělého dítěte, nikoliv k rukám druhého rodiče.</p>
        """
    },
    {
        "id": "9",
        "slug": "kdyz-druhy-rodic-neplati",
        "tag": "Právo",
        "title": "Když druhý rodič neplatí: Klidná a efektivní řešení",
        "desc": "Jak postupovat před tím, než se zavolá exekutor. Asertivní komunikace a mediace v praxi.",
        "img": "https://placehold.co/800x400/eef2f7/64748B?text=Řešení",
        "content": """
        <h2>Nereagujte hned agresivně</h2>
        <p>Vynechání platby je obrovský stres. Dříve než poběžíte k exekutorovi, zjistěte proč. Ztráta zaměstnání? Nemoc? Otevřená komunikace může zabránit dlouhodobé válce.</p>
        <p>Pokud komunikace nefunguje, můžete využít služeb mediátora. Teprve po vyčerpání těchto "měkkých" možností přichází na řadu exekuce. Nově také existuje "Zálohové výživné", kdy za neplatiče (při splnění podmínek) platí úřad práce.</p>
        """
    },
    {
        "id": "10",
        "slug": "stridava-pece",
        "tag": "Právo",
        "title": "Střídavá péče a výživné: Znamená to nulu?",
        "desc": "Nejčastější mýtus o střídavé péči a vysvětlení nutnosti vyrovnání životní úrovně u obou rodičů.",
        "img": "https://placehold.co/800x400/33b8a5/1e3a5f?text=Střídavá+péče",
        "content": """
        <h2>Mýtus o výživném 0 Kč</h2>
        <p>Panuje přesvědčení, že při střídavé péči (50:50) nikdo nikomu nic neplatí. To je pravda POUZE v případě, že mají oba rodiče naprosto totožné příjmy.</p>
        <p>Pokud jeden rodič vydělává 80 000 Kč a druhý 30 000 Kč, dítě by u jednoho jedlo krevety a u druhého suchý rohlík. Zákon ale říká, že dítě má právo podílet se na životní úrovni OBOCH rodičů. Proto bohatší rodič platí výživné (nebo alespoň doplatek) chudšímu rodiči, aby se životní úroveň srovnala.</p>
        """
    }
]

template = """<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title} | Rodičovský Kompas</title>
    <meta name="description" content="{desc}">
    <link rel="stylesheet" href="styles.css?v=2">
    <script defer src="/_vercel/insights/script.js"></script>
    <style>
      .article-container {{
        max-width: 800px;
        margin: 0 auto;
        padding: 40px 20px;
      }}
      .nav-back {{
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--blue);
        text-decoration: none;
        font-weight: 700;
        margin-bottom: 30px;
      }}
      .nav-back:hover {{ color: var(--teal); }}
      .article-tag {{
        font-size: 0.85rem;
        font-weight: 800;
        text-transform: uppercase;
        color: var(--teal);
        margin-bottom: 12px;
        display: block;
        letter-spacing: 0.05em;
      }}
      h1 {{
        font-size: 2.5rem;
        color: var(--blue);
        margin-bottom: 24px;
        line-height: 1.2;
      }}
      .article-img {{
        width: 100%;
        height: auto;
        border-radius: 16px;
        margin-bottom: 40px;
        box-shadow: 0 10px 30px rgba(30, 58, 95, 0.1);
      }}
      .article-content {{
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--ink);
      }}
      .article-content h2 {{
        color: var(--blue);
        margin-top: 40px;
        margin-bottom: 16px;
      }}
      .article-content h3 {{
        color: var(--blue);
        margin-top: 24px;
        margin-bottom: 12px;
      }}
      .article-content blockquote {{
        border-left: 4px solid var(--teal);
        padding-left: 20px;
        margin: 30px 0;
        font-style: italic;
        color: #475467;
        font-size: 1.25rem;
      }}
      .article-content ul, .article-content ol {{
        margin-bottom: 24px;
        padding-left: 20px;
      }}
      .article-content li {{ margin-bottom: 10px; }}
    </style>
  </head>
  <body>
    <main class="app-shell" style="max-width: 1000px;">
      <div class="article-container">
        <a href="clanky.html" class="nav-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Zpět na přehled článků
        </a>
        <span class="article-tag">{tag}</span>
        <h1>{title}</h1>
        <img src="{img}" alt="{title}" class="article-img">
        <div class="article-content">
          {content}
        </div>
      </div>
    </main>
  </body>
</html>
"""

# Generate index clanky.html cards
cards_html = ""
for a in articles:
    cards_html += f"""
        <a href="clanek-{a['id']}-{a['slug']}.html" class="blog-card">
          <img src="{a['img']}" alt="{a['title']}" class="blog-card-img">
          <div class="blog-card-content">
            <span class="blog-tag">{a['tag']}</span>
            <h2>{a['title']}</h2>
            <p>{a['desc']}</p>
            <div class="read-more">Číst článek <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </div>
        </a>
"""

index_html = f"""<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Články a průvodce | Rodičovský Kompas</title>
    <meta name="description" content="Edukativní články o výživném, střídavé péči a řešení konfliktů.">
    <link rel="stylesheet" href="styles.css?v=2">
    <script defer src="/_vercel/insights/script.js"></script>
    <style>
      .blog-header {{ text-align: center; padding: 60px 20px; background: var(--soft); border-radius: 24px; margin-bottom: 40px; }}
      .blog-header h1 {{ font-size: 2.5rem; color: var(--blue); margin-bottom: 16px; }}
      .blog-header p {{ font-size: 1.1rem; color: var(--ink); max-width: 600px; margin: 0 auto; }}
      .blog-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }}
      .blog-card {{ background: #ffffff; border: 1px solid var(--line); border-radius: 16px; overflow: hidden; transition: transform 0.2s ease, box-shadow 0.2s ease; display: flex; flex-direction: column; text-decoration: none; color: inherit; }}
      .blog-card:hover {{ transform: translateY(-4px); box-shadow: 0 12px 24px rgba(30, 58, 95, 0.1); }}
      .blog-card-img {{ width: 100%; height: 200px; background: #eef2f7; object-fit: cover; }}
      .blog-card-content {{ padding: 20px; flex: 1; display: flex; flex-direction: column; }}
      .blog-tag {{ font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--teal); margin-bottom: 8px; letter-spacing: 0.05em; }}
      .blog-card h2 {{ font-size: 1.25rem; margin: 0 0 12px 0; color: var(--blue); line-height: 1.4; }}
      .blog-card p {{ font-size: 0.9rem; color: #64748B; line-height: 1.6; margin-bottom: 20px; flex: 1; }}
      .read-more {{ font-weight: 700; color: var(--teal); display: flex; align-items: center; gap: 6px; }}
      .nav-back {{ display: inline-flex; align-items: center; gap: 8px; color: var(--blue); text-decoration: none; font-weight: 700; margin-bottom: 20px; }}
    </style>
  </head>
  <body>
    <main class="app-shell" style="max-width: 1000px;">
      <a href="index.html" class="nav-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Zpět na kalkulačku
      </a>
      
      <div class="blog-header">
        <h1>Články a průvodce</h1>
        <p>Praktické rady, jak řešit výživné a péči o děti v klidu, bez zbytečných soudních bojů a s důrazem na to nejdůležitější – pohodu vašich dětí.</p>
      </div>
      <div class="blog-grid">
        {cards_html}
      </div>
    </main>
  </body>
</html>
"""

with open("clanky.html", "w", encoding="utf-8") as f:
    f.write(index_html)

for a in articles:
    html = template.format(**a)
    with open(f"clanek-{a['id']}-{a['slug']}.html", "w", encoding="utf-8") as f:
        f.write(html)
