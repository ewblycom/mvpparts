(function () {
  const T = {
    cs: {
      vinTop: 'Hledat dle VIN', ship: 'Poštovné', contact: 'Kontakt', when: 'Kdy dostanu díl?',
      searchPh: 'Hledané číslo dílu, část názvu nebo EAN',
      fav: 'oblíbené', cart: 'můj košík',
      vinCta: 'Hledat VIN', vinPh: 'Zadejte VIN (17 znaků)', vinWait: 'Načítám VIN…',
      vinFail: 'VIN se nepodařilo načíst. Zkontrolujte kód.',
      carName: 'Vozidlo', engineL: 'Motor', gearL: 'Převodovka', srcL: 'Zdroj',
      brandsTitle: 'Vyberte značku vozu', catsTitle: 'Sortiment bez vozidla',
      modelsTitle: 'Autodíly pro', years: 'Ve výrobě', enginesTitle: 'Motorizace',
      groupsTitle: 'Skupiny dílů',
      emptyParts: 'Katalog dílů se připojí později přes API.',
      ask: 'Poptat díl', garage: 'Vaše vozidlo', clearCar: 'Změnit vozidlo',
      vinH: 'Vyhledat díl dle VIN', send: 'Odeslat poptávku', sending: 'Odesílám…',
      ok: 'Poptávka odeslána.', err: 'Nepodařilo se odeslat.',
      cartEmpty: 'Košík je prázdný.', contactH: 'Kontakt', shipH: 'Doprava',
      shipT: 'Praha — vlastní kurýr den v den.', noApi: 'Data dílů ještě nejsou napojená.',
      shopSoon: 'Položky této kategorie se načtou z API.'
    },
    ru: {
      vinTop: 'Поиск по VIN', ship: 'Доставка', contact: 'Контакты', when: 'Когда приедет деталь?',
      searchPh: 'Номер детали, название или EAN',
      fav: 'избранное', cart: 'корзина',
      vinCta: 'Искать VIN', vinPh: 'Введите VIN (17 символов)', vinWait: 'Читаю VIN…',
      vinFail: 'Не удалось расшифровать VIN.',
      carName: 'Авто', engineL: 'Мотор', gearL: 'Коробка', srcL: 'Источник',
      brandsTitle: 'Выберите марку', catsTitle: 'Каталог без авто',
      modelsTitle: 'Запчасти для', years: 'Годы выпуска', enginesTitle: 'Моторизации',
      groupsTitle: 'Группы деталей',
      emptyParts: 'Каталог деталей подключится позже через API.',
      ask: 'Запросить деталь', garage: 'Ваш автомобиль', clearCar: 'Сменить авто',
      vinH: 'Поиск детали по VIN', send: 'Отправить заявку', sending: 'Отправляем…',
      ok: 'Заявка отправлена.', err: 'Не удалось отправить.',
      cartEmpty: 'Корзина пуста.', contactH: 'Контакты', shipH: 'Доставка',
      shipT: 'Прага — свой курьер день в день.', noApi: 'Позиции ещё не подключены.',
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
    const tr = t();
    $$('[data-i18n]').forEach((el) => { if (tr[el.getAttribute('data-i18n')]) el.textContent = tr[el.getAttribute('data-i18n')]; });
    $$('[data-i18n-placeholder]').forEach((el) => { if (tr[el.getAttribute('data-i18n-placeholder')]) el.placeholder = tr[el.getAttribute('data-i18n-placeholder')]; });
    $$('[data-set-lang]').forEach((b) => b.classList.toggle('on', b.dataset.setLang === store.lang));
    const cartEl = $('#cart-sum'); if (cartEl) cartEl.textContent = store.cart.reduce((s,i)=>s+(i.price||0),0).toLocaleString('cs-CZ') + ' Kč';
    const favEl = $('#fav-count'); if (favEl) favEl.textContent = String(store.fav.length);
    const garage = $('#garage-chip');
    if (garage) {
      const car = store.car;
      if (car) {
        garage.hidden = false;
        garage.innerHTML = '<b>' + tr.garage + ':</b> ' + (car.name || ((car.brandName||'') + ' ' + (car.modelName||''))) +
          ' <button type="button" id="clear-car">' + tr.clearCar + '</button>';
        const btn = $('#clear-car'); if (btn) btn.onclick = () => { store.car = null; render(); };
      } else garage.hidden = true;
    }
    document.documentElement.lang = store.lang === 'ru' ? 'ru' : 'cs';
  }
  function crumb(items) {
    return '<nav class="crumbs">' + items.map((it, i) => (it.href && i < items.length - 1) ? '<a href="' + it.href + '">' + it.label + '</a>' : '<span>' + it.label + '</span>').join('<i>/</i>') + '</nav>';
  }
  function homeView() {
    const tr = t();
    const logos = MVP_DATA.brands.map((b) => '<a class="brand-tile" href="#/znacka/' + b.id + '"><span class="mark">' + b.name.slice(0, 2).toUpperCase() + '</span><small>' + b.name + '</small></a>').join('');
    const cats = MVP_DATA.shopCats.map((c) => '<a class="shop-tile" href="#/kategorie/' + c.id + '">' + (store.lang === 'ru' ? c.nameRu : c.name) + '</a>').join('');
    return '<section class="hero-slim"><h1>Náhradní díly online</h1><p>' + tr.noApi + '</p></section>' +
      '<section class="pad"><h2>' + tr.brandsTitle + '</h2><div class="brand-grid">' + logos + '</div></section>' +
      '<section class="pad"><h2>' + tr.catsTitle + '</h2><div class="shop-grid">' + cats + '</div></section>';
  }
  function brandView(id) {
    const b = brandBy(id); if (!b) return homeView();
    const list = modelsOf(id).map((m) => '<a class="row-link" href="#/znacka/' + id + '/' + m.id + '"><span>' + m.name + '</span><em>' + m.years + '</em></a>').join('');
    return crumb([{ label: t().brandsTitle, href: '#/' }, { label: b.name }]) +
      '<section class="pad"><h1>' + t().modelsTitle + ' ' + b.name + '</h1><div class="table-head"><span>Typ</span><span>' + t().years + '</span></div><div class="rows">' + list + '</div></section>';
  }
  function modelView(bid, mid) {
    const b = brandBy(bid); const m = modelBy(bid, mid); if (!b || !m) return brandView(bid);
    store.car = { brandId: bid, brandName: b.name, modelId: mid, modelName: m.name, years: m.years, name: b.name + ' ' + m.name };
    const groups = MVP_DATA.groups.map((g) => '<a class="group-tile" href="#/znacka/' + bid + '/' + mid + '/' + g.id + '">' + (store.lang === 'ru' ? g.nameRu : g.name) + '</a>').join('');
    return crumb([{ label: t().brandsTitle, href: '#/' }, { label: b.name, href: '#/znacka/' + bid }, { label: m.name }]) +
      '<section class="pad"><h1>' + b.name + ' — ' + m.name + '</h1><p class="muted">' + m.years + '</p><h2>' + t().groupsTitle + '</h2><div class="group-grid">' + groups + '</div></section>';
  }
  function groupView(bid, mid, gid) {
    const b = brandBy(bid); const m = modelBy(bid, mid); const g = MVP_DATA.groups.find((x) => x.id === gid);
    if (!b || !m || !g) return modelView(bid, mid);
    const title = store.lang === 'ru' ? g.nameRu : g.name;
    return crumb([{ label: 'Home', href: '#/' }, { label: b.name, href: '#/znacka/' + bid }, { label: m.name, href: '#/znacka/' + bid + '/' + mid }, { label: title }]) +
      '<section class="pad"><h1>' + title + ' — ' + b.name + ' ' + m.name + '</h1><div class="empty-box"><p>' + t().emptyParts + '</p></div></section>';
  }
  function catView(id) {
    const c = MVP_DATA.shopCats.find((x) => x.id === id);
    const name = c ? (store.lang === 'ru' ? c.nameRu : c.name) : id;
    return crumb([{ label: t().catsTitle, href: '#/' }, { label: name }]) +
      '<section class="pad"><h1>' + name + '</h1><div class="empty-box"><p>' + t().shopSoon + '</p></div></section>';
  }
  const WMI = { TMB: 'Škoda', WVW: 'Volkswagen', WVG: 'Volkswagen', WBA: 'BMW', WAU: 'Audi', WDD: 'Mercedes-Benz', WDB: 'Mercedes-Benz', W0L: 'Opel', W0V: 'Opel', WF0: 'Ford', VF1: 'Renault', TMA: 'Hyundai', VSS: 'SEAT' };
  function wmiName(vin) { const u = String(vin||'').toUpperCase(); return WMI[u.slice(0,3)] || WMI[u.slice(0,2)] || ''; }
  function mapDecode(row, vin) {
    const make = row.Make || row.Manufacturer || wmiName(vin);
    const model = row.Model || row.Series || '';
    const year = row.ModelYear || '';
    const name = [make, model, year].filter(Boolean).join(' ') || ('VIN ' + vin);
    const engine = [row.DisplacementL ? row.DisplacementL + 'L' : '', row.EngineCylinders ? row.EngineCylinders + ' válců' : '', row.EngineHP ? row.EngineHP + ' HP' : '', row.FuelTypePrimary].filter(Boolean).join(' · ') || '—';
    const gear = [row.TransmissionStyle, row.TransmissionSpeeds ? row.TransmissionSpeeds + ' st.' : ''].filter(Boolean).join(' · ') || '—';
    return { vin, name, engine, gear, make, model, year, source: 'NHTSA vPIC' };
  }
  async function decodeVinRemote(vin) {
    const clean = String(vin||'').toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g,'');
    if (clean.length !== 17) throw new Error('len');
    let row = {};
    try {
      const n = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/' + encodeURIComponent(clean) + '?format=json');
      const data = await n.json();
      row = (data.Results && data.Results[0]) || {};
    } catch (e) {
      try { row = await (await fetch('/.netlify/functions/vin?vin=' + encodeURIComponent(clean))).json(); } catch (e2) { row = {}; }
    }
    const mapped = mapDecode(row, clean);
    if (!row.Make && wmiName(clean)) mapped.name = wmiName(clean) + (row.ModelYear ? ' ' + row.ModelYear : '');
    return mapped;
  }
  function groupsHtml(prefix) {
    return MVP_DATA.groups.map((g) => '<a class="group-tile" href="' + prefix + '/' + g.id + '">' + (store.lang === 'ru' ? g.nameRu : g.name) + '</a>').join('');
  }
  function vinResultView() {
    const tr = t(); const car = store.car;
    if (!car || !car.vin) {
      return '<section class="pad narrow"><h1>' + tr.vinH + '</h1><form class="vin-search big" id="vin-search-page"><input name="vin" maxlength="17" placeholder="VIN"><button class="btn" type="submit">' + tr.vinCta + '</button></form></section>';
    }
    return '<section class="pad"><div class="vin-card">' +
      '<div class="k">VIN</div><div class="v">' + car.vin + '</div>' +
      '<div class="k">' + tr.carName + '</div><div class="v">' + (car.name || '—') + '</div>' +
      '<div class="k">' + tr.engineL + '</div><div class="v">' + (car.engine || '—') + '</div>' +
      '<div class="k">' + tr.gearL + '</div><div class="v">' + (car.gear || '—') + '</div>' +
      '<div class="k">' + tr.srcL + '</div><div class="v muted">' + (car.source || 'NHTSA') + '</div></div>' +
      '<h2>' + tr.groupsTitle + '</h2><div class="group-grid">' + groupsHtml('#/vin/' + encodeURIComponent(car.vin)) + '</div>' +
      '<p class="muted" style="margin-top:16px">' + tr.emptyParts + '</p></section>';
  }
  function vinGroupView(gid) {
    const g = MVP_DATA.groups.find((x) => x.id === gid);
    const title = g ? (store.lang === 'ru' ? g.nameRu : g.name) : gid;
    const car = store.car || {};
    return crumb([{ label: 'VIN', href: '#/vin' }, { label: title }]) +
      '<section class="pad"><h1>' + title + '</h1><p class="muted">' + (car.name || car.vin || '') + '</p><div class="empty-box"><p>' + t().shopSoon + '</p></div></section>';
  }
  function cartView() { return '<section class="pad narrow"><h1>' + t().cart + '</h1><div class="empty-box"><p>' + t().cartEmpty + '</p></div></section>'; }
  function contactView() { return '<section class="pad narrow"><h1>' + t().contactH + '</h1><p>MVP Parts<br>+420 773 079 737</p><p class="muted">' + t().shipT + '</p></section>'; }
  function shipView() { return '<section class="pad narrow"><h1>' + t().shipH + '</h1><p>' + t().shipT + '</p></section>'; }
  function searchView(q) { return '<section class="pad"><h1>„' + (q || '') + '”</h1><div class="empty-box"><p>' + t().emptyParts + '</p></div></section>'; }
  function render() {
    renderChrome();
    const { parts, q } = hash();
    const root = $('#app'); if (!root) return;
    let html = homeView();
    if (parts[0] === 'znacka' && parts[2] && parts[3]) html = groupView(parts[1], parts[2], parts[3]);
    else if (parts[0] === 'znacka' && parts[2]) html = modelView(parts[1], parts[2]);
    else if (parts[0] === 'znacka') html = brandView(parts[1]);
    else if (parts[0] === 'kategorie') html = catView(parts[1]);
    else if (parts[0] === 'vin' && parts[2]) html = vinGroupView(parts[2]);
    else if (parts[0] === 'vin') html = vinResultView();
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
      store.car = { vin: decoded.vin, name: decoded.name, brandName: decoded.make, modelName: decoded.model, year: decoded.year, engine: decoded.engine, gear: decoded.gear, source: decoded.source };
      go('#/vin'); render();
    } catch (e) {
      if (root) root.innerHTML = '<section class="pad"><div class="empty-box"><p>' + t().vinFail + '</p></div></section>';
    }
  }
  function bindForms() {
    const search = $('#site-search');
    if (search) search.onsubmit = (e) => { e.preventDefault(); go('#/hledat?q=' + encodeURIComponent(search.querySelector('input').value.trim())); };
    const vinForm = $('#vin-search');
    if (vinForm) vinForm.onsubmit = (e) => { e.preventDefault(); runVinSearch(vinForm.querySelector('[name="vin"]').value); };
    const vinPage = $('#vin-search-page');
    if (vinPage) vinPage.onsubmit = (e) => { e.preventDefault(); runVinSearch(vinPage.querySelector('[name="vin"]').value); };
  }
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-set-lang]');
    if (langBtn) { store.lang = langBtn.getAttribute('data-set-lang'); render(); }
  });
  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', render);
})();
