const holidays = [
  { key: "summer", title: "Letní prázdniny", days: 62, ratio: 0.5 },
  { key: "christmas", title: "Vánoční prázdniny", days: 10, ratio: 0.5 },
  { key: "spring", title: "Jarní prázdniny", days: 7, ratio: 0.5 },
  { key: "autumn", title: "Podzimní prázdniny", days: 5, ratio: 0.5 }
];

const CZECH_NAME_FALLBACK = [
  "Adam", "Adela", "Adéla", "Albert", "Alena", "Aleš", "Alex", "Alexandr", "Alice", "Amálie",
  "Aneta", "Anežka", "Anna", "Antonín", "Barbora", "Beáta", "Běla", "Benedikt", "Blanka",
  "Bohdan", "Bohdana", "Boleslav", "Boris", "Bořek", "Božena", "Bruno", "Cecílie", "Ctirad",
  "Cyril", "Dalibor", "Dalimil", "Dana", "Daniel", "Daniela", "David", "Denisa", "Diana",
  "Dominik", "Dominika", "Dorota", "Drahomíra", "Dušan", "Edita", "Eduard", "Eliška", "Ema",
  "Ema", "Emil", "Ester", "Eva", "Filip", "František", "Gabriela", "Hana", "Helena", "Hugo",
  "Hynek", "Irena", "Iva", "Ivana", "Ivan", "Jakub", "Jana", "Jarmila", "Jaromír", "Jaroslav",
  "Jitka", "Jiří", "Jolana", "Jonáš", "Josef", "Josefína", "Julie", "Justýna", "Kamil",
  "Kamila", "Karel", "Karolína", "Kateřina", "Klára", "Kristýna", "Kryštof", "Ladislav",
  "Laura", "Lea", "Lenka", "Leona", "Libor", "Linda", "Lucie", "Lukáš", "Magdalena",
  "Marek", "Marie", "Marika", "Martin", "Martina", "Matěj", "Matyáš", "Michael", "Michaela",
  "Michal", "Mikuláš", "Milan", "Milena", "Miroslav", "Miroslava", "Monika", "Natálie",
  "Nela", "Nikola", "Nina", "Oldřich", "Oliver", "Olga", "Ondřej", "Patrik", "Pavel",
  "Pavla", "Petr", "Petra", "Radek", "Radim", "Radka", "Radmila", "Renata", "Richard",
  "Robert", "Robin", "Roman", "Rostislav", "Rudolf", "Sabina", "Samuel", "Sandra", "Sára",
  "Sebastian", "Sebastián", "Silvie", "Simona", "Sofie", "Stanislav", "Šimon", "Štěpán",
  "Tadeáš", "Tamara", "Tereza", "Tomáš", "Vanda", "Vendula", "Veronika", "Viktor",
  "Viktorie", "Vilém", "Vít", "Vladimír", "Vojtěch", "Zdeněk", "Zuzana"
].filter((name, index, names) => names.indexOf(name) === index).sort((a, b) => a.localeCompare(b, "cs"));

const appState = {
  wizardStep: 0,
  lastScore: 0,
  completedQuests: new Set(),
  toastTimer: null,
  interactive: false,
  children: [],
  nameSuggestions: [...CZECH_NAME_FALLBACK]
};

const kc = new Intl.NumberFormat("cs-CZ", {
  style: "currency",
  currency: "CZK",
  maximumFractionDigits: 0
});

const num = new Intl.NumberFormat("cs-CZ", {
  maximumFractionDigits: 1
});

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function valueOf(selector, fallback = 0) {
  const value = Number($(selector).value);
  return Number.isFinite(value) ? value : fallback;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalizeChildName(name) {
  const trimmed = String(name || "").trim().replace(/\s+/g, " ");
  if (!trimmed) return "";
  return trimmed.slice(0, 1).toUpperCase() + trimmed.slice(1).toLowerCase();
}

function roleInfo() {
  const isMother = $("input[name='userRole']:checked").value === "mother";
  return {
    myRole: isMother ? "maminka" : "tatínek",
    otherRole: isMother ? "tatínek" : "maminka",
    myLabel: isMother ? "Vy jako maminka" : "Vy jako tatínek",
    otherLabel: isMother ? "Druhý rodič: tatínek" : "Druhý rodič: maminka"
  };
}

function renderChildren() {
  $("#childrenWrap").innerHTML = "";

  if (appState.children.length === 0) {
    $("#childrenWrap").innerHTML = `<div class="empty-children">Přidejte první ratolest nahoře v rychlém startu. Stačí jméno a věk.</div>`;
    renderChildTags();
    calculateAndRender();
    return;
  }

  appState.children.forEach((child, index) => {
    const rowTitle = child.name?.trim() ? child.name.trim() : `Ratolest ${index + 1}`;
    const row = document.createElement("div");
    row.className = "child-row";
    row.innerHTML = `
      <label>
        ${escapeHtml(rowTitle)}
        <input class="child-name" data-child-index="${index}" type="text" name="childName${index}" list="czechNameOptions" autocomplete="name" spellcheck="false" maxlength="32" value="${escapeHtml(child.name)}">
      </label>
      <label>
        Věk
        <input class="child-age" data-child-index="${index}" type="number" name="childAge${index}" min="0" max="26" value="${escapeHtml(child.age)}">
      </label>
    `;
    $("#childrenWrap").appendChild(row);
  });
  renderChildTags();
  calculateAndRender();
}

function children() {
  return appState.children.map((child, index) => ({
    name: child.name.trim() || `Ratolest ${index + 1}`,
    age: clamp(Number(child.age) || 0, 0, 26)
  }));
}

function renderNameOptions() {
  $("#czechNameOptions").innerHTML = appState.nameSuggestions
    .map((name) => `<option value="${escapeHtml(name)}"></option>`)
    .join("");
}

async function loadNameSuggestions() {
  try {
    const response = await fetch("czech-names.json", { cache: "no-store" });
    if (!response.ok) return;
    const loaded = await response.json();
    if (!Array.isArray(loaded)) return;
    const cleaned = loaded
      .map((name) => String(name || "").trim())
      .filter((name) => name.length > 1 && name.length <= 32)
      .filter((name, index, names) => names.indexOf(name) === index)
      .sort((a, b) => a.localeCompare(b, "cs"));
    if (cleaned.length > 0) {
      appState.nameSuggestions = cleaned;
      renderNameOptions();
    }
  } catch {}
}

function renderChildTags() {
  $("#childTagList").innerHTML = appState.children.map((child, index) => `
    <span class="child-tag">
      ${escapeHtml(child.name)}${child.age ? `, ${escapeHtml(child.age)} let` : ""}
      <button type="button" aria-label="Odebrat ${escapeHtml(child.name)}" data-remove-child="${index}">×</button>
    </span>
  `).join("");
}

function addChildFromQuickStart() {
  const nameInput = $("#childNameInput");
  const ageInput = $("#childAgeInput");
  const name = normalizeChildName(nameInput.value);
  const age = Number(ageInput.value);

  if (!name || !Number.isFinite(age) || age < 0) {
    showBoost("Doplňte jméno a věk", "Aby výpočet dával smysl, potřebujeme u ratolesti jméno i věk.");
    return;
  }
  if (appState.children.length >= 3) {
    showBoost("Maximum jsou 3 ratolesti", "Tahle kalkulačka je připravená pro nejvýše 3 ratolesti.");
    return;
  }
  if (appState.children.some((child) => child.name.toLowerCase() === name.toLowerCase())) {
    showBoost("Jméno už je přidané", `Ratolest ${name} už v seznamu je. Když potřebujete, upravte věk níže.`);
    return;
  }

  appState.children.push({ name, age: clamp(age, 0, 26) });
  nameInput.value = "";
  ageInput.value = "";
  renderChildren();
  showBoost("Ratolest přidána", `${name} je v odhadu. Můžete přidat další nebo pokračovat příjmy.`);
  nameInput.focus();
}

function renderHolidays() {
  const wrap = $("#holidayWrap");
  wrap.innerHTML = "";
  holidays.forEach((holiday) => {
    const daysMe = Math.round(holiday.days * holiday.ratio * 2) / 2;
    const row = document.createElement("div");
    row.className = "holiday-row";
    row.innerHTML = `
      <div>
        <strong>${holiday.title}</strong>
        <small>Dny v období</small>
      </div>
      <label>
        Celkem
        <input class="holiday-total" data-key="${holiday.key}" type="number" min="0" max="90" step="0.5" value="${holiday.days}">
      </label>
      <label>
        U vás
        <input class="holiday-me" data-key="${holiday.key}" type="number" min="0" max="${holiday.days}" step="0.5" value="${daysMe}">
      </label>
      <div>
        <strong class="holiday-split">0 / 0</strong>
        <small>u vás / u druhého rodiče</small>
      </div>
    `;
    wrap.appendChild(row);
  });
  updateHolidayLabels();
}

function updateHolidayLabels() {
  $$(".holiday-row").forEach((row) => {
    const totalInput = row.querySelector(".holiday-total");
    const meInput = row.querySelector(".holiday-me");
    const total = Math.max(0, Number(totalInput.value) || 0);
    const me = clamp(Number(meInput.value) || 0, 0, total);
    meInput.max = total;
    meInput.value = me;
    row.querySelector(".holiday-split").textContent = `${num.format(me)} / ${num.format(total - me)}`;
  });
  updateCareReview();
}

function applyCarePreset() {
  setCarePreset($("#careType").value);
}

function setCarePreset(careType) {
  const days = careType === "mostlyMe" ? 10 : careType === "mostlyOther" ? 4 : 7;
  const ratio = careType === "mostlyMe" ? 0.65 : careType === "mostlyOther" ? 0.35 : 0.5;
  $("#careType").value = careType;
  $("#regularDaysMe").value = days;
  holidays.forEach((holiday) => {
    holiday.ratio = ratio;
  });
  $$(".preset-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.carePreset === careType);
  });
  renderHolidays();
  updateRegularLabel();
  calculateAndRender();
}

function updateRegularLabel() {
  const daysMe = Number($("#regularDaysMe").value);
  $("#regularDaysLabel").textContent =
    `${num.format(daysMe)} dní u vás / ${num.format(14 - daysMe)} dní u druhého rodiče`;
  updateCareReview();
}

function careSummary() {
  const year = valueOf("#calcYear", new Date().getFullYear());
  const daysInYear = new Date(year, 1, 29).getMonth() === 1 ? 366 : 365;
  const holidayRows = $$(".holiday-row").map((row) => {
    const total = Math.max(0, Number(row.querySelector(".holiday-total").value) || 0);
    const me = clamp(Number(row.querySelector(".holiday-me").value) || 0, 0, total);
    return { total, me };
  });
  const totalHolidayDays = holidayRows.reduce((sum, item) => sum + item.total, 0);
  const holidayDaysMe = holidayRows.reduce((sum, item) => sum + item.me, 0);
  const regularPool = Math.max(0, daysInYear - totalHolidayDays);
  const regularShareMe = Number($("#regularDaysMe").value) / 14;
  const daysMe = regularPool * regularShareMe + holidayDaysMe;
  const daysOther = daysInYear - daysMe;

  return {
    year,
    daysInYear,
    daysMe,
    daysOther,
    percentMe: daysMe / daysInYear,
    percentOther: daysOther / daysInYear,
    monthlyMe: daysMe / 12,
    monthlyOther: daysOther / 12
  };
}

function supportResult(kids, income, careDaysWithPayerPerMonth) {
  if (kids.length === 0 || income <= 0) {
    return { distributable: 0, perChild: [] };
  }

  const percentageTable = {
    0: { single: 14, oneMore: 12, twoMore: 10, threeMore: 8 },
    6: { single: 16, oneMore: 14, twoMore: 12, threeMore: 10 },
    11: { single: 18, oneMore: 16, twoMore: 14, threeMore: 12 },
    16: { single: 20, oneMore: 18, twoMore: 16, threeMore: 14 }
  };

  function ageRange(age) {
    if (age <= 5) return 0;
    if (age <= 10) return 6;
    if (age <= 15) return 11;
    return 16;
  }

  const totalChildren = kids.length;
  const percentages = kids.map((child) => {
    const range = ageRange(child.age);
    if (totalChildren === 1) return percentageTable[range].single;
    if (totalChildren === 2) return percentageTable[range].oneMore;
    if (totalChildren === 3) return percentageTable[range].twoMore;
    return percentageTable[range].threeMore;
  });

  const totalPercentage = percentages.reduce((sum, item) => sum + item / 100, 0);
  const totalSupportAmount = income * totalPercentage;
  const safeCareDays = clamp(careDaysWithPayerPerMonth, 0, 30.4);

  const preliminary = kids.map((child, index) => {
    const individualPercentage = percentages[index];
    return ((totalSupportAmount / totalPercentage) * (individualPercentage / 100)) *
      ((30.4 - safeCareDays) / 30.4);
  });

  const preliminarySum = preliminary.reduce((sum, item) => sum + item, 0);
  const shares = preliminary.map((amount) => preliminarySum > 0 ? amount / preliminarySum : 0);

  const C5 = 4860;
  const C6 = 15597;
  const C15 = 2;
  const C8 = ((C5 + C6) / 3) * 2;
  const C9 = Math.max(0, (income - C8) - ((C5 + C6) * C15));
  const C10 = (income - C8) > ((C5 + C6) * C15)
    ? (((C5 + C6) * C15) * 0.3334) + C9
    : ((income - C8) * 0.3334) + C9;
  const C13 = Math.floor(Math.min(income, income - C10));
  const orientationalAmount = income - C13;

  let controlPercent;
  if (totalChildren === 2) {
    controlPercent = Math.max(1 - 0.66, totalPercentage);
  } else if (totalChildren === 3) {
    controlPercent = Math.max(1 - 0.55, totalPercentage);
  } else {
    controlPercent = 1;
  }

  const controlAmount = income * controlPercent;
  const afterControl = Math.min(orientationalAmount, controlAmount);
  const distributable = Math.min(afterControl, preliminarySum);
  const perChild = shares.map((share, index) => ({
    ...kids[index],
    percentage: percentages[index],
    amount: distributable * share
  }));

  return { distributable, perChild };
}

function resultMode(care) {
  const careType = $("#careType").value;
  if (careType === "mostlyMe" || care.percentMe >= 0.68) return "receiveOnly";
  if (careType === "mostlyOther" || care.percentMe <= 0.32) return "payOnly";
  return "twoWay";
}

function directionCopy(mode, roles) {
  if (mode === "receiveOnly") {
    return {
      heroLabel: "Orientačně byste mohli dostávat",
      heroText: `Ratolesti jsou převážně u vás. Hlavní směr platby je proto od druhého rodiče (${roles.otherRole}) k vám.`,
      resultTitle: "Co by mělo chodit vám na ratolesti"
    };
  }
  if (mode === "payOnly") {
    return {
      heroLabel: "Orientačně byste platili",
      heroText: `Ratolesti jsou převážně u druhého rodiče. Hlavní směr platby je proto od vás k druhému rodiči (${roles.otherRole}).`,
      resultTitle: "Co by mělo chodit druhému rodiči na ratolesti"
    };
  }
  return {
    heroLabel: "Směr k vám ve společné péči",
    heroText: "Níže vidíte i samostatný směr k druhému rodiči. Částky neodečítáme, aby bylo jasné, z čeho výpočet vychází.",
    resultTitle: "Co může dostávat každý rodič"
  };
}

function calculateAndRender() {
  if (!$("#holidayWrap").children.length) return;

  const roles = roleInfo();
  const kids = children();
  const care = careSummary();
  const myIncome = valueOf("#myIncome", 0);
  const otherIncome = valueOf("#otherIncome", 0);
  const meToOther = supportResult(kids, myIncome, care.monthlyMe);
  const otherToMe = supportResult(kids, otherIncome, care.monthlyOther);
  const mode = resultMode(care);
  const copy = directionCopy(mode, roles);

  $("#myCareLabel").textContent = roles.myLabel;
  $("#otherCareLabel").textContent = roles.otherLabel;
  $("#myCareDays").textContent = `${num.format(care.daysMe)} dní`;
  $("#otherCareDays").textContent = `${num.format(care.daysOther)} dní`;
  $("#myCarePercent").textContent = `${(care.percentMe * 100).toFixed(1)} % roku`;
  $("#otherCarePercent").textContent = `${(care.percentOther * 100).toFixed(1)} % roku`;
  $("#myCareFill").style.width = `${(care.percentMe * 100).toFixed(1)}%`;

  if (kids.length === 0) {
    $("#resultContext").textContent = "Začněte přidáním ratolestí";
    $("#mainAmount").textContent = kc.format(0);
    $("#mainVerdict").textContent = "Přidejte nahoře jméno a věk. Výpočet se potom automaticky rozepíše po jménech.";
    $("#resultTitle").textContent = "Výsledek se připraví po přidání ratolestí";
    $("#paymentSummary").innerHTML = `
      <article class="story-card quiet">
        <small>Čekáme na jména</small>
        <strong>0 Kč</strong>
        <p>Jakmile přidáte první ratolest, uvidíte relevantní směr platby a částku po jménu.</p>
      </article>
    `;
    $("#childResults").innerHTML = `<div class="empty-children">Po přidání ratolestí tady uvidíte částku rozepsanou po jménech.</div>`;
    updateCareReview();
    updateMomentum();
    return;
  }

  const heroAmount = mode === "payOnly" ? meToOther.distributable : otherToMe.distributable;
  $("#resultContext").textContent = copy.heroLabel;
  $("#mainAmount").textContent = kc.format(heroAmount);
  $("#mainVerdict").textContent = copy.heroText;
  $("#resultTitle").textContent = copy.resultTitle;

  renderPaymentSummary(mode, otherToMe, meToOther, roles);
  renderChildResults(mode, otherToMe, meToOther, roles);

  updateCareReview();
  updateMomentum();
}

function renderPaymentSummary(mode, otherToMe, meToOther, roles) {
  const receiveCard = `
    <article class="story-card ${mode !== "payOnly" ? "primary" : ""}">
      <small>Směr k vám</small>
      <strong>${kc.format(otherToMe.distributable)}</strong>
      <p>Kolik by podle zadaných údajů mohl platit druhý rodič (${roles.otherRole}) vám na ratolesti.</p>
    </article>
  `;
  const payCard = `
    <article class="story-card ${mode === "payOnly" ? "primary" : ""}">
      <small>Směr k druhému rodiči</small>
      <strong>${kc.format(meToOther.distributable)}</strong>
      <p>Kolik by podle zadaných údajů mohlo vycházet z vaší strany směrem k druhému rodiči.</p>
    </article>
  `;
  const contextCard = `
    <article class="story-card quiet">
      <small>Jak to číst</small>
      <strong>${mode === "twoWay" ? "2 směry" : "1 směr"}</strong>
      <p>${mode === "twoWay"
        ? "Ve společné nebo střídavé péči má smysl vidět oba směry samostatně. Nejde o automatické započtení."
        : "U převážné nebo výlučné péče ukazujeme jen směr, který odpovídá tomu, kde ratolesti hlavně jsou."}</p>
    </article>
  `;

  if (mode === "receiveOnly") {
    $("#paymentSummary").innerHTML = receiveCard + contextCard;
  } else if (mode === "payOnly") {
    $("#paymentSummary").innerHTML = payCard + contextCard;
  } else {
    $("#paymentSummary").innerHTML = receiveCard + payCard + contextCard;
  }
}

function renderChildResults(mode, otherToMe, meToOther, roles) {
  if (mode === "payOnly") {
    $("#childResults").innerHTML = meToOther.perChild.map((child) => childResultCard(
      child,
      `část vaší orientační povinnosti směrem k druhému rodiči (${roles.otherRole})`
    )).join("");
    return;
  }

  if (mode === "receiveOnly") {
    $("#childResults").innerHTML = otherToMe.perChild.map((child) => childResultCard(
      child,
      `část povinnosti druhého rodiče (${roles.otherRole}) směrem k vám`
    )).join("");
    return;
  }

  $("#childResults").innerHTML = `
    <section class="direction-breakdown">
      <h3>Směr k vám</h3>
      <div class="child-results-grid">
        ${otherToMe.perChild.map((child) => childResultCard(child, `část povinnosti druhého rodiče (${roles.otherRole}) směrem k vám`)).join("")}
      </div>
    </section>
    <section class="direction-breakdown">
      <h3>Směr k druhému rodiči</h3>
      <div class="child-results-grid">
        ${meToOther.perChild.map((child) => childResultCard(child, `část vaší orientační povinnosti směrem k druhému rodiči`)).join("")}
      </div>
    </section>
  `;
}

function childResultCard(child, label) {
  return `
    <article class="child-result-card">
      <small>${child.name}, ${child.age} let, tabulkově ${child.percentage} %</small>
      <strong>${kc.format(child.amount)}</strong>
      <span>${label}</span>
    </article>
  `;
}

function updateCareReview() {
  if (!$("#holidayWrap").children.length) return;
  const roles = roleInfo();
  const care = careSummary();
  $("#reviewMeLabel").textContent = roles.myLabel;
  $("#reviewOtherLabel").textContent = roles.otherLabel;
  $("#reviewMeDays").textContent = `${num.format(care.daysMe)} dní`;
  $("#reviewOtherDays").textContent = `${num.format(care.daysOther)} dní`;
  $("#reviewMePercent").textContent = `${(care.percentMe * 100).toFixed(1)} % roku`;
  $("#reviewOtherPercent").textContent = `${(care.percentOther * 100).toFixed(1)} % roku`;
}

function showWizardStep(step) {
  appState.wizardStep = clamp(step, 0, 2);
  $$(".wizard-step").forEach((panel, index) => {
    panel.classList.toggle("is-active", index === appState.wizardStep);
  });
  $$(".step-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === appState.wizardStep);
  });
  $("#wizardPrev").hidden = appState.wizardStep === 0;
  $("#wizardNext").hidden = appState.wizardStep === 2;
  $("#wizardSave").hidden = appState.wizardStep !== 2;
  updateCareReview();
}

function openWizard() {
  $("#wizardOverlay").hidden = false;
  showWizardStep(0);
  $("#careType").focus();
}

function closeWizard() {
  $("#wizardOverlay").hidden = true;
}

function gamificationStatus() {
  const kids = children();
  const care = careSummary();
  const roleDone = Boolean($("input[name='userRole']:checked"));
  const incomeDone = valueOf("#myIncome", 0) > 0 && valueOf("#otherIncome", 0) > 0;
  const childrenDone = kids.length > 0 && kids.every((child) => child.name && child.age > 0);
  const careDone = care.daysMe > 0 && care.daysOther > 0;
  const quests = {
    role: roleDone,
    income: incomeDone,
    children: childrenDone,
    care: careDone
  };
  const weights = { role: 15, income: 30, children: 30, care: 25 };
  const score = Object.entries(quests).reduce((sum, [key, done]) => sum + (done ? weights[key] : 0), 0);
  return { quests, score };
}

function updateMomentum() {
  const { quests, score } = gamificationStatus();
  $("#clarityScore").textContent = `${score} %`;
  $(".score-ring").style.setProperty("--score", `${score * 3.6}deg`);

  Object.entries(quests).forEach(([key, done]) => {
    const item = $(`.quest-item[data-quest="${key}"]`);
    if (!item) return;
    item.classList.toggle("is-complete", done);
    if (done && !appState.completedQuests.has(key)) {
      appState.completedQuests.add(key);
      if (appState.interactive) {
        showBoost("Krok hotový", boostTextForQuest(key));
      }
    }
  });

  if (score >= 100) {
    $("#boostMessage").textContent = "Máte doplněné hlavní údaje pro orientační odhad. Výsledek teď může sloužit jako klidný podklad pro další rozhovor.";
  } else if (score >= 75) {
    $("#boostMessage").textContent = "Odhad už stojí na většině důležitých údajů. Detail péče a prázdnin ho ještě zpřesní.";
  } else if (score >= 45) {
    $("#boostMessage").textContent = "Základ už je vyplněný. Doplňte ratolesti a péči, aby částka lépe odpovídala vaší situaci.";
  } else {
    $("#boostMessage").textContent = "Začněte základními údaji. Každý doplněný krok pomáhá udělat výsledek srozumitelnější.";
  }

  if (appState.interactive && score >= 100 && appState.lastScore < 100) {
    celebrate("Odhad je doplněný", "Hlavní údaje jsou vyplněné a výsledek je připravený k orientačnímu posouzení.");
  } else if (appState.interactive && score > appState.lastScore && score >= 75) {
    pulseResult();
  }
  appState.lastScore = score;
}

function boostTextForQuest(key) {
  const messages = {
    role: "Výsledek se teď čte z vašeho pohledu.",
    income: "Příjmy jsou doplněné a odhad je o něco přesnější.",
    children: "Ratolesti a věk jsou doplněné.",
    care: "Péče je nastavená a výsledek počítá čas u obou rodičů."
  };
  return messages[key] || "Výsledek je o něco srozumitelnější.";
}

function showBoost(title, text) {
  const toast = $("#boostToast");
  $("#boostTitle").textContent = title;
  $("#boostText").textContent = text;
  toast.hidden = false;
  window.clearTimeout(appState.toastTimer);
  appState.toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 3000);
}

function celebrate(title, text) {
  showBoost(title, text);
  pulseResult();
  launchConfetti();
}

function pulseResult() {
  const target = $(".result-hero");
  target.classList.remove("pulse-win");
  window.requestAnimationFrame(() => {
    target.classList.add("pulse-win");
  });
}

function launchConfetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = $("#confettiLayer");
  const colors = ["#175cd3", "#0e9384", "#c11574", "#f79009", "#12b76a"];
  layer.innerHTML = "";
  for (let index = 0; index < 34; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty("--drift", `${(Math.random() * 180) - 90}px`);
    piece.style.animationDelay = `${Math.random() * 160}ms`;
    layer.appendChild(piece);
  }
  window.setTimeout(() => {
    layer.innerHTML = "";
  }, 1300);
}

function resetDemo() {
  $("input[name='userRole'][value='mother']").checked = true;
  $("#myIncome").value = 38000;
  $("#otherIncome").value = 56000;
  appState.children = [
    { name: "Eliška", age: 7 },
    { name: "Jakub", age: 12 }
  ];
  $("#regularDaysMe").value = 7;
  holidays.forEach((holiday) => {
    holiday.ratio = 0.5;
  });
  setCarePreset("shared");
  renderChildren();
}

function init() {
  renderNameOptions();
  loadNameSuggestions();
  renderChildren();
  renderHolidays();
  updateRegularLabel();
  showWizardStep(0);
  calculateAndRender();
  appState.interactive = true;

  document.addEventListener("input", (event) => {
    if (event.target.matches("#myIncome, #otherIncome, .child-name, .child-age, #calcYear")) {
      if (event.target.matches(".child-name, .child-age")) {
        const index = Number(event.target.dataset.childIndex);
        if (appState.children[index]) {
          if (event.target.matches(".child-name")) appState.children[index].name = normalizeChildName(event.target.value);
          if (event.target.matches(".child-age")) appState.children[index].age = clamp(Number(event.target.value) || 0, 0, 26);
          renderChildTags();
        }
      }
      calculateAndRender();
    }
    if (event.target.matches("#regularDaysMe")) {
      updateRegularLabel();
      calculateAndRender();
    }
    if (event.target.matches(".holiday-total, .holiday-me")) {
      updateHolidayLabels();
      calculateAndRender();
    }
  });

  $$("input[name='userRole']").forEach((input) => {
    input.addEventListener("change", calculateAndRender);
  });

  $("#addChildBtn").addEventListener("click", addChildFromQuickStart);
  $("#childNameInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if ($("#childAgeInput").value) {
        addChildFromQuickStart();
      } else {
        $("#childAgeInput").focus();
      }
    }
  });
  $("#childAgeInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addChildFromQuickStart();
    }
  });
  $("#childTagList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-child]");
    if (!button) return;
    appState.children.splice(Number(button.dataset.removeChild), 1);
    renderChildren();
  });
  $("#careType").addEventListener("change", applyCarePreset);
  $$(".preset-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      setCarePreset(chip.dataset.carePreset);
      showBoost("Péče nastavena", "Rychlá volba upravila běžný režim i prázdniny. Detail můžete kdykoliv doladit.");
    });
  });
  $("#openWizard").addEventListener("click", openWizard);
  $("#closeWizard").addEventListener("click", closeWizard);
  $("#wizardOverlay").addEventListener("click", (event) => {
    if (event.target === $("#wizardOverlay")) closeWizard();
  });
  $("#wizardPrev").addEventListener("click", () => showWizardStep(appState.wizardStep - 1));
  $("#wizardNext").addEventListener("click", () => showWizardStep(appState.wizardStep + 1));
  $$(".step-dot").forEach((dot) => {
    dot.addEventListener("click", () => showWizardStep(Number(dot.dataset.wizardStep)));
  });
  $("#careForm").addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAndRender();
    closeWizard();
    celebrate("Péče je uložená", "Výpočet teď pracuje i s prázdninami a rozdělením dní.");
  });
  $("#resetDemo").addEventListener("click", resetDemo);
  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) return;
    if (event.key === "Escape" && !$("#wizardOverlay").hidden) closeWizard();
    if (event.key === "Enter" && event.target.matches("input")) {
      const fields = $$("input, select, button").filter((field) => !field.hidden && !field.disabled && field.offsetParent !== null);
      const index = fields.indexOf(event.target);
      const next = fields[index + 1];
      if (next && next.tagName !== "BUTTON") {
        event.preventDefault();
        next.focus();
      }
    }
  });
  document.addEventListener("focusin", (event) => {
    if (event.target.matches("input[type='number']")) {
      event.target.select();
    }
  });
}

init();
