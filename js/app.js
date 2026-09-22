(function () {
  const T = {
    cs: {
      vinTop: 'Hledat dle VIN', when: 'Kdy dostanu díl?', terms: 'Obchodní podmínky', ship: 'Poštovné', contact: 'Kontakt',
      login: 'Přihlásit se', reg: 'Nový zákazník',
      searchPh: 'Hledané číslo dílu, část názvu nebo EAN',
      fav: 'oblíbené', hist: 'historie', cart: 'můj košík',
      vinBar: 'Nejste si jistí správným výběrem dílu? Vyhledáme jej za vás dle VIN.',
      vinCta: 'Hledat podle VIN',
      vinPh: 'Zadejte VIN-kód vozidla',
      vinHint: '17 znaků kódu VIN vozidla',
      vinWait: 'Načítám VIN…',
      vinFail: 'VIN se nepodařilo načíst. Zkontrolujte kód.',
      carName: 'Vozidlo',
      engineL: 'Motor',
      gearL: 'Převodovka',
      srcL: 'Zdroj',
      tabHome: 'Domů', tabCat: 'Katalogy', tabAcc: 'Přihlásit', tabOrd: 'Objednávky', tabCart: 'Košík',
      homeTitle: 'Náhradní díly v internetovém obchodě MVP Parts',
      catalogs: 'Katalogy',
      catTO: 'Díly pro servis', catOE: 'Originální díly', catOil: 'Oleje a kapaliny',
      catTire: 'Pneumatiky a disky', catChem: 'Autochemie', catAcc: 'Autodoplňky',
      catTool: 'Nářadí', catLight: 'Osvětlení',
      accH: 'Přihlášení', accP: 'Účet připojíme později. Zatím posílejte poptávku.',
      ordH: 'Objednávky', ordP: 'Seznam objednávek se objeví po napojení API.',
      brandsTitle: 'Vyberte značku vozu',
      allBrands: 'všechny značky',
      catsTitle: 'Sortiment bez vozidla',
      modelsTitle: 'Autodíly pro',
      years: 'Ve výrobě',
      enginesTitle: 'Motorizace',
      groupsTitle: 'Skupiny dílů',
      emptyParts: 'Katalog dílů se připojí později přes API. Zatím můžete poslat poptávku dle VIN.',
      ask: 'Poptat díl',
      garage: 'Vaše vozidlo',
      clearCar: 'Změnit vozidlo',
      vinH: 'Vyhledat díl dle VIN',
      vinP: 'Pošlete VIN a co potřebujete. Najdeme díl a ozveme se s nabídkou.',
      auto: 'Vozidlo', vin: 'VIN', name: 'Jméno', phone: 'Telefon', comment: 'Jaký díl',
      send: 'Odeslat poptávku', sending: 'Odesílám…',
      ok: 'Poptávka odeslána. Ozveme se vám.',
      err: 'Nepodařilo se odeslat.',
      cartEmpty: 'Košík je prázdný. Díly z API sem přijdou později.',
      contactH: 'Kontakt',
      shipH: 'Doprava',
      shipT: 'Praha a okolí — vlastní kurýr den v den. Zbytek ČR — PPL / Balíkovna podle dohody.',
      noApi: 'Data dílů ještě nejsou napojená. Struktura e-shopu už funguje jako u Motora.',
      cc: 'Objem', kw: 'kW / HP', cyl: 'Válce',
      shopSoon: 'Položky této kategorie se načtou z API.'
    },
    ru: {
      vinTop: 'Поиск по VIN', when: 'Когда приедет деталь?', terms: 'Условия', ship: 'Доставка', contact: 'Контакты',
      login: 'Войти', reg: 'Регистрация',
      searchPh: 'Номер детали, название или EAN',
      fav: 'избранное', hist: 'история', cart: 'корзина',
      vinBar: 'Не уверены в детали? Подберём по VIN.',
      vinCta: 'Найти по VIN',
      vinPh: 'Введите VIN-код автомобиля',
      vinHint: '17 символов кода VIN автомобиля',
      vinWait: 'Читаю VIN…',
      vinFail: 'Не удалось расшифровать VIN.',
      carName: 'Авто',
      engineL: 'Мотор',
      gearL: 'Коробка',
      srcL: 'Источник',
      tabHome: 'Главная', tabCat: 'Каталоги', tabAcc: 'Войти', tabOrd: 'Заказы', tabCart: 'Корзина',
      homeTitle: 'Запчасти в интернет-магазине MVP Parts',
      catalogs: 'Каталоги',
      catTO: 'Запчасти для ТО', catOE: 'Оригинальные запчасти', catOil: 'Масла и жидкости',
      catTire: 'Шины и диски', catChem: 'Автохимия', catAcc: 'Автопринадлежности',
      catTool: 'Инструмент', catLight: 'Освещение',
      accH: 'Вход', accP: 'Личный кабинет подключим позже. Пока можно отправить заявку.',
      ordH: 'Заказы', ordP: 'Список заказов появится после API.',
      brandsTitle: 'Выберите марку',
      allBrands: 'все марки',
      catsTitle: 'Каталог без авто',
      modelsTitle: 'Запчасти для',
      years: 'Годы выпуска',
      enginesTitle: 'Моторизации',
      groupsTitle: 'Группы деталей',
      emptyParts: 'Каталог деталей подключится позже через API. Пока можно отправить заявку по VIN.',
      ask: 'Запросить деталь',
      garage: 'Ваш автомобиль',
      clearCar: 'Сменить авто',
      vinH: 'Поиск детали по VIN',
      vinP: 'Отправьте VIN и что нужно. Подберём и напишем с ценой.',
      auto: 'Авто', vin: 'VIN', name: 'Имя', phone: 'Телефон', comment: 'Какая деталь',
      send: 'Отправить заявку', sending: 'Отправляем…',
      ok: 'Заявка отправлена.',
      err: 'Не удалось отправить.',
      cartEmpty: 'Корзина пуста. Позиции появятся после API.',
      contactH: 'Контакты',
      shipH: 'Доставка',
      shipT: 'Прага — свой курьер день в день. По Чехии — PPL / Balíkovna.',
      noApi: 'Позиции ещё не подключены. Сценарий магазина уже как у Motora.',
      cc: 'Объём', kw: 'кВт / л.с.', cyl: 'Цилиндры',
      shopSoon: 'Товары категории подгрузятся из API.'
    }
  };

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const store = {
    get lang() { return localStorage.getItem('mvp_lang') || 'cs'; },
    set lang(v) { localStorage.setItem('mvp_lang', v); },
    get car() { try { return JSON.parse(localStorage.getItem('mvp_car') || 'null'); } catch { return null; } },
    set car(v) { localStorage.setItem('mvp_car', JSON.stringify(v)); },
    get cart() { try { return JSON.parse(localStorage.getItem('mvp_cart') || '[]'); } catch { return []; } },
    set cart(v) { localStorage.setItem('mvp_cart', JSON.stringify(v)); },
    get fav() { try { return JSON.parse(localStorage.getItem('mvp_fav') || '[]'); } catch { return []; } },
    set fav(v) { localStorage.setItem('mvp_fav', JSON.stringify(v)); }
  };

  function t() { return T[store.lang] || T.cs; }
  function brandBy(id) { return MVP_DATA.brands.find((b) => b.id === id); }
  function modelsOf(id) { return MVP_DATA.models[id] || []; }
  function modelBy(bid, mid) { return modelsOf(bid).find((m) => m.id === mid); }

  function hash() {
    const raw = (location.hash || '#/').replace(/^#/, '');
    const [path, qs] = raw.split('?');
    const parts = path.split('/').filter(Boolean);
    const q = {};
    new URLSearchParams(qs || '').forEach((v, k) => { q[k] = v; });
    return { parts, q };
  }
  function go(h) { location.hash = h; }

  function renderChrome() {
    const lang = store.lang;
    const tr = t();
    const cart = store.cart;
    const sum = cart.reduce((s, i) => s + (i.price || 0), 0);
    const car = store.car;
    $$('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (tr[k]) el.textContent = tr[k];
    });
    $$('[data-i18n-placeholder]').forEach((el) => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (tr[k]) el.placeholder = tr[k];
    });
    $$('[data-set-lang]').forEach((b) => b.classList.toggle('on', b.dataset.setLang === lang));
    const cartEl = $('#cart-sum');
    if (cartEl) cartEl.textContent = sum.toLocaleString('cs-CZ') + ' Kč';
    const favEl = $('#fav-count');
    if (favEl) favEl.textContent = String(store.fav.length);
    const garage = $('#garage-chip');
    if (garage) {
      if (car) {
        garage.hidden = false;
        garage.innerHTML = '<b>' + tr.garage + ':</b> ' + car.brandName + ' ' + car.modelName +
          ' <button type="button" id="clear-car">' + tr.clearCar + '</button>';
        const btn = $('#clear-car');
        if (btn) btn.onclick = () => { store.car = null; render(); };
      } else garage.hidden = true;
    }
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'cs';
    const tabMap = { '': 'home', katalogy: 'cat', ucet: 'acc', objednavky: 'ord', kosik: 'cart' };
    const first = hash().parts[0] || '';
    const tab = tabMap[first] || (first === 'znacka' || first === 'kategorie' ? 'cat' : 'home');
    document.querySelectorAll('.tabbar a').forEach((a) => a.classList.toggle('on', a.getAttribute('data-tab') === tab));

  }

  function crumb(items) {
    return '<nav class="crumbs">' + items.map((it, i) => {
      if (it.href && i < items.length - 1) return '<a href="' + it.href + '">' + it.label + '</a>';
      return '<span>' + it.label + '</span>';
    }).join('<i>/</i>') + '</nav>';
  }

  function homeView() {
    const tr = t();
    return '<h1 class="hero-title">' + tr.homeTitle + '</h1>' +
      '<div class="sec-head"><span>' + tr.catalogs + ' ›</span><a href="#/katalogy">' + tr.tabCat + '</a></div>' +
      '<div class="cat-grid">' +
      '<a class="cat-card" href="#/kategorie/to"><div class="art"><img src="img/cats/to.jpg" alt=""></div><span>' + tr.catTO + '</span></a>' +
      '<a class="cat-card" href="#/kategorie/oe"><div class="art"><img src="img/cats/oe.jpg" alt=""></div><span>' + tr.catOE + '</span></a>' +
      '<a class="cat-card" href="#/kategorie/oleje"><div class="art"><img src="img/cats/oleje.jpg" alt=""></div><span>' + tr.catOil + '</span></a>' +
      '<a class="cat-card" href="#/kategorie/pneu"><div class="art"><img src="img/cats/pneu.jpg" alt=""></div><span>' + tr.catTire + '</span></a>' +
      '<a class="cat-card" href="#/kategorie/autochemie"><div class="art"><img src="img/cats/autochemie.jpg" alt=""></div><span>' + tr.catChem + '</span></a>' +
      '<a class="cat-card" href="#/kategorie/doplnky"><div class="art"><img src="img/cats/doplnky.jpg" alt=""></div><span>' + tr.catAcc + '</span></a>' +
      '<a class="cat-card" href="#/kategorie/naradi"><div class="art"><img src="img/cats/naradi.jpg" alt=""></div><span>' + tr.catTool + '</span></a>' +
      '<a class="cat-card" href="#/kategorie/zarovky"><div class="art"><img src="img/cats/zarovky.jpg" alt=""></div><span>' + tr.catLight + '</span></a>' +
      '</div>';
  }

  function brandView(id) {
    const b = brandBy(id);
    if (!b) return homeView();
    const all = modelsOf(id);
    const groups = [];
    const map = {};
    all.forEach((m) => {
      const fam = m.family || m.name;
      if (!map[fam]) { map[fam] = []; groups.push(fam); }
      map[fam].push(m);
    });
    const list = groups.map((fam) => {
      const rows = map[fam].map((m) =>
        '<a class="row-link" href="#/znacka/' + id + '/' + encodeURIComponent(m.id) + '"><span>' + m.name + '</span><em>' + m.years + '</em></a>'
      ).join('');
      return '<div class="fam"><div class="fam-h">' + fam + '</div>' + rows + '</div>';
    }).join('');
    return crumb([{ label: t().brandsTitle, href: '#/katalogy' }, { label: b.name }]) +
      '<section class="pad"><h1>' + t().modelsTitle + ' ' + b.name + '</h1>' +
      '<p class="muted">' + all.length + ' ' + (t().modelsN || 'modelů') + '</p>' +
      '<input class="filter-models" data-filter-brand="' + id + '" placeholder="' + (t().filterModels || 'Filtrovat model') + '" />' +
      '<div class="table-head"><span>Typ</span><span>' + t().years + '</span></div>' +
      '<div class="rows" id="model-rows">' + list + '</div></section>';
  }

  function modelView(bid, mid) {
    const b = brandBy(bid);
    const m = modelBy(bid, mid);
    if (!b || !m) return brandView(bid);
    store.car = { brandId: bid, brandName: b.name, modelId: mid, modelName: m.name, years: m.years };
    const eng = (MVP_DATA.engines[mid] || []).map((e) =>
      '<div class="eng"><b>' + e.cc + ' ccm</b><span>' + e.kw + ' kW / ' + e.hp + ' HP</span><span>' + e.cyl + '</span><em>' + e.years + '</em></div>'
    ).join('');
    const groups = MVP_DATA.groups.map((g) =>
      '<a class="group-tile" href="#/znacka/' + bid + '/' + mid + '/' + g.id + '">' + (store.lang === 'ru' ? g.nameRu : g.name) + '</a>'
    ).join('');
    return crumb([
      { label: t().brandsTitle, href: '#/' },
      { label: b.name, href: '#/znacka/' + bid },
      { label: m.name }
    ]) +
      '<section class="pad"><h1>' + b.name + ' — ' + m.name + '</h1><p class="muted">' + m.years + '</p>' +
      (eng ? '<h2>' + t().enginesTitle + '</h2><div class="eng-grid">' + eng + '</div>' : '') +
      '<h2>' + t().groupsTitle + '</h2><div class="group-grid">' + groups + '</div></section>';
  }

  function groupView(bid, mid, gid) {
    const b = brandBy(bid);
    const m = modelBy(bid, mid);
    const g = MVP_DATA.groups.find((x) => x.id === gid);
    if (!b || !m || !g) return modelView(bid, mid);
    const title = store.lang === 'ru' ? g.nameRu : g.name;
    return crumb([
      { label: 'Home', href: '#/' },
      { label: b.name, href: '#/znacka/' + bid },
      { label: m.name, href: '#/znacka/' + bid + '/' + mid },
      { label: title }
    ]) +
      '<section class="pad"><h1>' + title + ' — ' + b.name + ' ' + m.name + '</h1>' +
      '<div class="empty-box"><p>' + t().emptyParts + '</p>' +
      '<a class="btn" href="#/vin">' + t().ask + '</a></div></section>';
  }


  const BRAND_LOGO = {
    'alfa-romeo': 'img/brands/alfa-romeo.svg',
    audi: 'img/brands/audi.svg',
    bmw: 'img/brands/bmw.svg',
    citroen: 'img/brands/citroen.svg',
    cupra: 'img/brands/cupra.svg',
    dacia: 'img/brands/dacia.svg',
    fiat: 'img/brands/fiat.svg',
    ford: 'img/brands/ford.png',
    honda: 'img/brands/honda.png',
    hyundai: 'img/brands/hyundai.svg',
    chevrolet: 'img/brands/chevrolet.png',
    jeep: 'img/brands/jeep.svg',
    kia: 'img/brands/kia.svg',
    lexus: 'img/brands/lexus.png',
    mazda: 'img/brands/mazda.svg',
    'mercedes-benz': 'img/brands/mercedes.svg',
    mini: 'img/brands/mini.svg',
    mitsubishi: 'img/brands/mitsubishi.svg',
    nissan: 'img/brands/nissan.svg',
    opel: 'img/brands/opel.svg',
    peugeot: 'img/brands/peugeot.svg',
    porsche: 'img/brands/porsche.svg',
    renault: 'img/brands/renault.svg',
    seat: 'img/brands/seat.svg',
    subaru: 'img/brands/subaru.png',
    suzuki: 'img/brands/suzuki.svg',
    skoda: 'img/brands/skoda.svg',
    tesla: 'img/brands/tesla.svg',
    toyota: 'img/brands/toyota.svg',
    volvo: 'img/brands/volvo.svg',
    vw: 'img/brands/vw.svg'
  };

  function catalogHub() {
    const tr = t();
    const logos = MVP_DATA.brands.map((b) => {
      const src = BRAND_LOGO[b.id];
      const mark = src
        ? '<img src="' + src + '" alt="">'
        : '<span class="mark">' + b.name.slice(0, 1) + '</span>';
      return '<a class="brand-tile" href="#/znacka/' + b.id + '">' + mark + '<b>' + b.name + '</b><small>' + (MVP_DATA.models[b.id] || []).length + '</small></a>';
    }).join('');
    return '<section class="pad"><h1>' + tr.brandsTitle + '</h1><div class="brand-grid">' + logos + '</div></section>';
  }
  function accountView() {
    const tr = t();
    return '<section class="pad narrow"><h1>' + tr.accH + '</h1>' +
      '<div class="acc-card"><p>' + tr.accP + '</p>' +
      '<div class="acc-actions">' +
      '<button class="btn" type="button">' + tr.login + '</button>' +
      '<button class="btn-ghost" type="button">' + tr.reg + '</button>' +
      '</div></div></section>';
  }
  function ordersView() {
    return '<section class="pad narrow"><h1>' + t().ordH + '</h1><div class="empty-box"><p>' + t().ordP + '</p></div></section>';
  }
  function catView(id) {
    const c = MVP_DATA.shopCats.find((x) => x.id === id);
    const name = c ? (store.lang === 'ru' ? c.nameRu : c.name) : id;
    return crumb([{ label: t().catsTitle, href: '#/' }, { label: name }]) +
      '<section class="pad"><h1>' + name + '</h1>' +
      '<div class="empty-box"><p>' + t().shopSoon + '</p><a class="btn" href="#/vin">' + t().ask + '</a></div></section>';
  }

  const WMI = {
    TMB: 'Škoda', TMK: 'Škoda', WVW: 'Volkswagen', WVG: 'Volkswagen', WV1: 'Volkswagen',
    WBA: 'BMW', WBS: 'BMW', WBY: 'BMW', WAU: 'Audi', WUA: 'Audi', TRU: 'Audi',
    WDD: 'Mercedes-Benz', WDB: 'Mercedes-Benz', W1K: 'Mercedes-Benz', W0L: 'Opel', W0V: 'Opel',
    WF0: 'Ford', VF1: 'Renault', VF3: 'Peugeot', VF7: 'Citroën', U5Y: 'Kia', KMH: 'Hyundai',
    TMA: 'Hyundai', JHM: 'Honda', JT: 'Toyota', YV1: 'Volvo', ZFA: 'Fiat', VSS: 'SEAT',
    UU: 'Dacia', W0LGT: 'Opel'
  };

  function wmiName(vin) {
    const u = String(vin || '').toUpperCase();
    if (WMI[u.slice(0, 5)]) return WMI[u.slice(0, 5)];
    if (WMI[u.slice(0, 3)]) return WMI[u.slice(0, 3)];
    if (WMI[u.slice(0, 2)]) return WMI[u.slice(0, 2)];
    return '';
  }

  function mapDecode(row, vin) {
    const make = row.Make || row.Manufacturer || wmiName(vin);
    const model = row.Model || row.Series || '';
    const year = row.ModelYear || '';
    const name = [make, model, year].filter(Boolean).join(' ') || ('VIN ' + vin);
    const engine = [row.DisplacementL ? row.DisplacementL + 'L' : '', row.EngineCylinders ? row.EngineCylinders + ' válců' : '', row.EngineHP ? row.EngineHP + ' HP' : '', row.FuelTypePrimary, row.EngineModel]
      .filter(Boolean).join(' · ') || '—';
    const gear = [row.TransmissionStyle, row.TransmissionSpeeds ? row.TransmissionSpeeds + ' st.' : '']
      .filter(Boolean).join(' · ') || '—';
    return {
      vin, name, engine, gear,
      make, model, year,
      source: 'NHTSA vPIC (zdarma)',
      raw: row
    };
  }

  async function decodeVinRemote(vin) {
    const clean = String(vin || '').toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
    if (clean.length !== 17) throw new Error('len');
    let row = {};
    try {
      const n = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/' + encodeURIComponent(clean) + '?format=json');
      const data = await n.json();
      row = (data.Results && data.Results[0]) || {};
    } catch (e) {
      row = {};
    }
    const mapped = mapDecode(row, clean);
    if (!row.Make && !row.Model) mapped.name = [wmiName(clean), clean.slice(9, 10) === 'A' ? '' : ''].filter(Boolean).join(' ') || mapped.name;
    if (!row.Make && wmiName(clean)) mapped.name = wmiName(clean) + (row.ModelYear ? ' ' + row.ModelYear : '');
    return mapped;
  }

  function groupsHtml(prefix) {
    return MVP_DATA.groups.map((g) =>
      '<a class="group-tile" href="' + prefix + '/' + g.id + '">' + (store.lang === 'ru' ? g.nameRu : g.name) + '</a>'
    ).join('');
  }

  function vinResultView() {
    const tr = t();
    const car = store.car;
    if (!car || !car.vin) {
      return '<section class="pad narrow"><h1>' + tr.vinH + '</h1>' +
        '<form class="vin-row" id="vin-search-page">' +
        '<input name="vin" maxlength="17" placeholder="' + tr.vinPh + '">' +
        '<button class="btn" type="submit">' + tr.vinCta + '</button></form>' +
        '<p class="vin-hint">' + tr.vinHint + '</p></section>';
    }
    return '<section class="pad">' +
      '<div class="vin-card">' +
      '<div class="k">VIN</div><div class="v">' + car.vin + '</div>' +
      '<div class="k">' + tr.carName + '</div><div class="v">' + (car.name || car.brandName || '—') + '</div>' +
      '<div class="k">' + tr.engineL + '</div><div class="v">' + (car.engine || '—') + '</div>' +
      '<div class="k">' + tr.gearL + '</div><div class="v">' + (car.gear || '—') + '</div>' +
      '<div class="k">' + tr.srcL + '</div><div class="v muted">' + (car.source || 'NHTSA') + '</div>' +
      '</div>' +
      '<h2>' + tr.groupsTitle + '</h2>' +
      '<div class="group-grid">' + groupsHtml('#/vin/' + encodeURIComponent(car.vin)) + '</div>' +
      '<p class="muted" style="margin-top:16px">' + tr.emptyParts + '</p></section>';
  }

  function vinGroupView(gid) {
    const g = MVP_DATA.groups.find((x) => x.id === gid);
    const title = g ? (store.lang === 'ru' ? g.nameRu : g.name) : gid;
    const car = store.car || {};
    return crumb([{ label: 'VIN', href: '#/vin' }, { label: title }]) +
      '<section class="pad"><h1>' + title + '</h1>' +
      '<p class="muted">' + (car.name || car.vin || '') + '</p>' +
      '<div class="empty-box"><p>' + t().shopSoon + '</p></div></section>';
  }

  function vinView() {
    return vinResultView();
  }

  function cartView() {
    return '<section class="pad narrow"><h1>' + t().cart + '</h1><div class="empty-box"><p>' + t().cartEmpty + '</p></div></section>';
  }

  function contactView() {
    return '<section class="pad narrow"><h1>' + t().contactH + '</h1>' +
      '<p>MVP Parts<br>+420 773 079 737</p>' +
      '<p class="muted">' + t().shipT + '</p></section>';
  }

  function shipView() {
    return '<section class="pad narrow"><h1>' + t().shipH + '</h1><p>' + t().shipT + '</p></section>';
  }

  function searchView(q) {
    return '<section class="pad"><h1>„' + (q || '') + '”</h1>' +
      '<div class="empty-box"><p>' + t().emptyParts + '</p><a class="btn" href="#/vin">' + t().ask + '</a></div></section>';
  }

  function render() {
    renderChrome();
    const { parts, q } = hash();
    const root = $('#app');
    if (!root) return;
    let html = homeView();
    if (parts[0] === 'znacka' && parts[2] && parts[3]) html = groupView(parts[1], parts[2], parts[3]);
    else if (parts[0] === 'znacka' && parts[2]) html = modelView(parts[1], parts[2]);
    else if (parts[0] === 'znacka') html = brandView(parts[1]);
    else if (parts[0] === 'katalogy') html = catalogHub();
    else if (parts[0] === 'ucet') html = accountView();
    else if (parts[0] === 'objednavky') html = ordersView();
    else if (parts[0] === 'kategorie') html = catView(parts[1]);
    else if (parts[0] === 'vin' && parts[2]) html = vinGroupView(parts[2]);
    else if (parts[0] === 'vin') html = vinView();
    else if (parts[0] === 'kosik') html = cartView();
    else if (parts[0] === 'kontakt') html = contactView();
    else if (parts[0] === 'dodani') html = shipView();
    else if (parts[0] === 'hledat') html = searchView(q.q);
    root.innerHTML = html;
    bindForms();
  }

  async function runVinSearch(vinRaw) {
    const vin = String(vinRaw || '').toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
    const root = $('#app');
    if (root) root.innerHTML = '<section class="pad"><p>' + t().vinWait + '</p></section>';
    try {
      const decoded = await decodeVinRemote(vin);
      store.car = {
        vin: decoded.vin,
        name: decoded.name,
        brandName: decoded.make,
        modelName: decoded.model,
        year: decoded.year,
        engine: decoded.engine,
        gear: decoded.gear,
        source: decoded.source
      };
      go('#/vin');
      render();
    } catch (e) {
      if (root) root.innerHTML = '<section class="pad"><div class="empty-box"><p>' + t().vinFail + '</p></div></section>';
    }
  }

  function bindForms() {
    const form = $('#order-form');
    if (form) form.addEventListener('submit', sendOrder);
    const search = $('#site-search');
    if (search) {
      search.onsubmit = (e) => {
        e.preventDefault();
        const v = search.querySelector('input').value.trim();
        go('#/hledat?q=' + encodeURIComponent(v));
      };
    }
    const vinForm = $('#vin-search');
    if (vinForm) {
      vinForm.onsubmit = (e) => {
        e.preventDefault();
        runVinSearch(vinForm.querySelector('[name="vin"]').value);
      };
    }
    const vinPage = $('#vin-search-page');
    if (vinPage) {
      vinPage.onsubmit = (e) => {
        e.preventDefault();
        runVinSearch(vinPage.querySelector('[name="vin"]').value);
      };
    }
  }

  async function sendOrder(e) {
    e.preventDefault();
    const form = e.target;
    const status = form.querySelector('.status');
    const btn = form.querySelector('button[type="submit"]');
    const fd = new FormData(form);
    if (fd.get('website')) return;
    const payload = {
      auto: fd.get('auto'), vin: fd.get('vin'), jmeno: fd.get('jmeno'),
      telefon: fd.get('telefon'), komentar: fd.get('komentar'),
      jazyk: store.lang === 'ru' ? 'RU' : 'CS'
    };
    btn.disabled = true;
    btn.textContent = t().sending;
    try {
      if (location.protocol === 'file:') throw new Error('file');
      const res = await fetch('/.netlify/functions/order', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error('fail');
      status.className = 'status ok';
      status.textContent = t().ok;
      form.reset();
    } catch {
      status.className = 'status err';
      status.textContent = t().err;
    } finally {
      btn.disabled = false;
      btn.textContent = t().send;
    }
  }

  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-set-lang]');
    if (langBtn) {
      store.lang = langBtn.getAttribute('data-set-lang');
      render();
    }
  });
  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', render);
})();
