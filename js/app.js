(function () {
  const T = {
    cs: {
      searchPh: 'Hledat', vinCta: 'VIN', vinPh: 'VIN 17 znak\u016f', vinWait: 'Na\u010d\u00edt\u00e1m VIN\u2026', vinFail: 'VIN se nepoda\u0159ilo na\u010d\u00edst.',
      carName: 'Vozidlo', engineL: 'Motor', gearL: 'P\u0159evodovka', srcL: 'Zdroj',
      tabHome: 'Dom\u016f', tabCat: 'Katalogy', tabAcc: 'P\u0159ihl\u00e1sit', tabOrd: 'Objedn\u00e1vky', tabCart: 'Ko\u0161\u00edk',
      homeTitle: 'N\u00e1hradn\u00ed d\u00edly v internetov\u00e9m obchod\u011b MVP Parts', catalogs: 'Katalogy',
      catTO: 'D\u00edly pro servis', catOE: 'Origin\u00e1ln\u00ed d\u00edly', catOil: 'Oleje a kapaliny', catTire: 'Pneumatiky a disky',
      catChem: 'Autochemie', catAcc: 'Autodopl\u0148ky', catTool: 'N\u00e1\u0159ad\u00ed', catLight: 'Osv\u011btlen\u00ed',
      brandsTitle: 'Vyberte zna\u010dku', modelsTitle: 'Autod\u00edly pro', years: 'Ve v\u00fdrob\u011b', groupsTitle: 'Skupiny d\u00edl\u016f',
      emptyParts: 'Katalog d\u00edl\u016f se p\u0159ipoj\u00ed p\u0159es API.', shopSoon: 'Polo\u017eky se na\u010dtou z API.',
      garage: 'Va\u0161e vozidlo', clearCar: 'Zm\u011bnit', vinH: 'VIN', cart: 'Ko\u0161\u00edk', cartEmpty: 'Ko\u0161\u00edk je pr\u00e1zdn\u00fd.',
      contactH: 'Kontakt', shipH: 'Doprava', shipT: 'Praha \u2014 kur\u00fdr den v den.',
      accH: 'P\u0159ihl\u00e1\u0161en\u00ed', accP: '\u00da\u010det p\u0159ipoj\u00edme pozd\u011bji.', ordH: 'Objedn\u00e1vky', ordP: 'Seznam objedn\u00e1vek po API.',
      catsTitle: 'Katalog'
    },
    ru: {
      searchPh: '\u041f\u043e\u0438\u0441\u043a', vinCta: 'VIN', vinPh: 'VIN 17 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432', vinWait: '\u0427\u0438\u0442\u0430\u044e VIN\u2026', vinFail: '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c VIN.',
      carName: '\u0410\u0432\u0442\u043e', engineL: '\u041c\u043e\u0442\u043e\u0440', gearL: '\u041a\u043e\u0440\u043e\u0431\u043a\u0430', srcL: '\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a',
      tabHome: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f', tabCat: '\u041a\u0430\u0442\u0430\u043b\u043e\u0433\u0438', tabAcc: '\u0412\u043e\u0439\u0442\u0438', tabOrd: '\u0417\u0430\u043a\u0430\u0437\u044b', tabCart: '\u041a\u043e\u0440\u0437\u0438\u043d\u0430',
      homeTitle: '\u0417\u0430\u043f\u0447\u0430\u0441\u0442\u0438 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 MVP Parts', catalogs: '\u041a\u0430\u0442\u0430\u043b\u043e\u0433\u0438',
      catTO: '\u0417\u0430\u043f\u0447\u0430\u0441\u0442\u0438 \u0434\u043b\u044f \u0422\u041e', catOE: '\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u043f\u0447\u0430\u0441\u0442\u0438', catOil: '\u041c\u0430\u0441\u043b\u0430 \u0438 \u0436\u0438\u0434\u043a\u043e\u0441\u0442\u0438', catTire: '\u0428\u0438\u043d\u044b \u0438 \u0434\u0438\u0441\u043a\u0438',
      catChem: '\u0410\u0432\u0442\u043e\u0445\u0438\u043c\u0438\u044f', catAcc: '\u0410\u0432\u0442\u043e\u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438', catTool: '\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442', catLight: '\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435',
      brandsTitle: '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0430\u0440\u043a\u0443', modelsTitle: '\u0417\u0430\u043f\u0447\u0430\u0441\u0442\u0438 \u0434\u043b\u044f', years: '\u0413\u043e\u0434\u044b', groupsTitle: '\u0413\u0440\u0443\u043f\u043f\u044b',
      emptyParts: '\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 API.', shopSoon: '\u0422\u043e\u0432\u0430\u0440\u044b \u0438\u0437 API.',
      garage: '\u0412\u0430\u0448\u0435 \u0430\u0432\u0442\u043e', clearCar: '\u0421\u043c\u0435\u043d\u0438\u0442\u044c', vinH: 'VIN', cart: '\u041a\u043e\u0440\u0437\u0438\u043d\u0430', cartEmpty: '\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430.',
      contactH: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b', shipH: '\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430', shipT: '\u041f\u0440\u0430\u0433\u0430 \u2014 \u043a\u0443\u0440\u044c\u0435\u0440 \u0434\u0435\u043d\u044c \u0432 \u0434\u0435\u043d\u044c.',
      accH: '\u0412\u0445\u043e\u0434', accP: '\u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043c \u043f\u043e\u0437\u0436\u0435.', ordH: '\u0417\u0430\u043a\u0430\u0437\u044b', ordP: '\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 API.',
      catsTitle: '\u041a\u0430\u0442\u0430\u043b\u043e\u0433'
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
    const q = {}; new URLSearchParams(qs || '').forEach((v, k) => { q[k] = v; });
    return { parts, q };
  }
  function go(h) { location.hash = h; }
  function renderChrome() {
    const tr = t();
    $$('[data-i18n]').forEach((el) => { if (tr[el.getAttribute('data-i18n')]) el.textContent = tr[el.getAttribute('data-i18n')]; });
    $$('[data-i18n-placeholder]').forEach((el) => { if (tr[el.getAttribute('data-i18n-placeholder')]) el.placeholder = tr[el.getAttribute('data-i18n-placeholder')]; });
    $$('[data-set-lang]').forEach((b) => b.classList.toggle('on', b.dataset.setLang === store.lang));
    const garage = $('#garage-chip');
    if (garage) {
      const car = store.car;
      if (car) {
        garage.hidden = false;
        garage.innerHTML = '<b>' + tr.garage + ':</b> ' + (car.name || '') + ' <button type="button" id="clear-car">' + tr.clearCar + '</button>';
        const btn = $('#clear-car'); if (btn) btn.onclick = () => { store.car = null; render(); };
      } else garage.hidden = true;
    }
    const first = hash().parts[0] || '';
    const tabMap = { '': 'home', katalogy: 'cat', ucet: 'acc', objednavky: 'ord', kosik: 'cart' };
    const tab = tabMap[first] || (first === 'znacka' || first === 'kategorie' ? 'cat' : 'home');
    document.querySelectorAll('.tabbar a').forEach((a) => a.classList.toggle('on', a.getAttribute('data-tab') === tab));
    document.documentElement.lang = store.lang === 'ru' ? 'ru' : 'cs';
  }
  function crumb(items) {
    return '<nav class="crumbs">' + items.map((it, i) => (it.href && i < items.length - 1) ? '<a href="' + it.href + '">' + it.label + '</a>' : '<span>' + it.label + '</span>').join('<i>/</i>') + '</nav>';
  }
  function homeView() {
    const tr = t();
    const cards = [
      ['#/kategorie/to', '\uD83D\uDD27', 'catTO'],
      ['#/kategorie/oe', '\uD83D\uDCA1', 'catOE'],
      ['#/kategorie/oleje', '\uD83E\uDDEA', 'catOil'],
      ['#/kategorie/pneu', '\uD83D\uDE97', 'catTire'],
      ['#/kategorie/autochemie', '\uD83E\uDDF4', 'catChem'],
      ['#/kategorie/doplnky', '\u26A0\uFE0F', 'catAcc'],
      ['#/kategorie/naradi', '\uD83D\uDEE0\uFE0F', 'catTool'],
      ['#/kategorie/zarovky', '\uD83D\uDCA1', 'catLight']
    ];
    return '<h1 class="hero-title">' + tr.homeTitle + '</h1><div class="sec-head"><span>' + tr.catalogs + ' \u203a</span></div><div class="cat-grid">' +
      cards.map((c) => '<a class="cat-card" href="' + c[0] + '"><div class="art">' + c[1] + '</div><span>' + tr[c[2]] + '</span></a>').join('') + '</div>';
  }
  function catalogHub() {
    const logos = MVP_DATA.brands.map((b) => '<a class="brand-tile" href="#/znacka/' + b.id + '"><b>' + b.name + '</b></a>').join('');
    return '<section class="pad"><h1>' + t().tabCat + '</h1><div class="brand-grid">' + logos + '</div></section>';
  }
  function brandView(id) {
    const b = brandBy(id); if (!b) return homeView();
    const list = modelsOf(id).map((m) => '<a class="row-link" href="#/znacka/' + id + '/' + m.id + '"><span>' + m.name + '</span><em>' + m.years + '</em></a>').join('');
    return crumb([{ label: t().brandsTitle, href: '#/katalogy' }, { label: b.name }]) + '<section class="pad"><h1>' + b.name + '</h1>' + list + '</section>';
  }
  function modelView(bid, mid) {
    const b = brandBy(bid); const m = modelBy(bid, mid); if (!b || !m) return brandView(bid);
    store.car = { brandName: b.name, modelName: m.name, name: b.name + ' ' + m.name };
    const groups = MVP_DATA.groups.map((g) => '<a class="group-tile" href="#/znacka/' + bid + '/' + mid + '/' + g.id + '">' + (store.lang === 'ru' ? g.nameRu : g.name) + '</a>').join('');
    return crumb([{ label: b.name, href: '#/znacka/' + bid }, { label: m.name }]) + '<section class="pad"><h1>' + m.name + '</h1><div class="group-grid">' + groups + '</div></section>';
  }
  function groupView(bid, mid, gid) {
    const g = MVP_DATA.groups.find((x) => x.id === gid);
    const title = g ? (store.lang === 'ru' ? g.nameRu : g.name) : gid;
    return '<section class="pad"><h1>' + title + '</h1><div class="empty-box"><p>' + t().emptyParts + '</p></div></section>';
  }
  function catView(id) {
    return '<section class="pad"><h1>' + id + '</h1><div class="empty-box"><p>' + t().shopSoon + '</p></div></section>';
  }
  const WMI = { TMB: '\u0160koda', WVW: 'Volkswagen', WBA: 'BMW', WAU: 'Audi', W0L: 'Opel', WF0: 'Ford' };
  function wmiName(vin) { return WMI[String(vin||'').slice(0,3).toUpperCase()] || ''; }
  async function decodeVinRemote(vin) {
    const clean = String(vin||'').toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g,'');
    if (clean.length !== 17) throw new Error('len');
    let row = {};
    try {
      const data = await (await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/' + encodeURIComponent(clean) + '?format=json')).json();
      row = (data.Results && data.Results[0]) || {};
    } catch (e) { row = {}; }
    const make = row.Make || wmiName(clean);
    const name = [make, row.Model, row.ModelYear].filter(Boolean).join(' ') || make || ('VIN ' + clean);
    const engine = [row.DisplacementL ? row.DisplacementL + 'L' : '', row.FuelTypePrimary].filter(Boolean).join(' \u00b7 ') || '\u2014';
    const gear = row.TransmissionStyle || '\u2014';
    return { vin: clean, name, engine, gear, make, model: row.Model, year: row.ModelYear, source: 'NHTSA' };
  }
  function vinResultView() {
    const tr = t(); const car = store.car;
    if (!car || !car.vin) return '<section class="pad"><h1>VIN</h1></section>';
    return '<section class="pad"><div class="vin-card"><div class="k">VIN</div><div class="v">' + car.vin + '</div><div class="k">' + tr.carName + '</div><div class="v">' + car.name + '</div><div class="k">' + tr.engineL + '</div><div class="v">' + car.engine + '</div><div class="k">' + tr.gearL + '</div><div class="v">' + car.gear + '</div></div><h2>' + tr.groupsTitle + '</h2><div class="group-grid">' + MVP_DATA.groups.map((g) => '<a class="group-tile" href="#/vin/' + car.vin + '/' + g.id + '">' + (store.lang==='ru'?g.nameRu:g.name) + '</a>').join('') + '</div></section>';
  }
  function render() {
    renderChrome();
    const { parts, q } = hash(); const root = $('#app'); if (!root) return;
    let html = homeView();
    if (parts[0] === 'znacka' && parts[3]) html = groupView(parts[1], parts[2], parts[3]);
    else if (parts[0] === 'znacka' && parts[2]) html = modelView(parts[1], parts[2]);
    else if (parts[0] === 'znacka') html = brandView(parts[1]);
    else if (parts[0] === 'katalogy') html = catalogHub();
    else if (parts[0] === 'kategorie') html = catView(parts[1]);
    else if (parts[0] === 'vin' && parts[2]) html = '<section class="pad"><h1>' + parts[2] + '</h1><div class="empty-box"><p>' + t().shopSoon + '</p></div></section>';
    else if (parts[0] === 'vin') html = vinResultView();
    else if (parts[0] === 'kosik') html = '<section class="pad"><h1>' + t().tabCart + '</h1><div class="empty-box"><p>' + t().cartEmpty + '</p></div></section>';
    else if (parts[0] === 'ucet') html = '<section class="pad"><h1>' + t().accH + '</h1><div class="empty-box"><p>' + t().accP + '</p></div></section>';
    else if (parts[0] === 'objednavky') html = '<section class="pad"><h1>' + t().ordH + '</h1><div class="empty-box"><p>' + t().ordP + '</p></div></section>';
    else if (parts[0] === 'kontakt') html = '<section class="pad"><h1>' + t().contactH + '</h1><p>MVP Parts<br>+420 773 079 737</p></section>';
    else if (parts[0] === 'hledat') html = '<section class="pad"><h1>' + (q.q||'') + '</h1><div class="empty-box"><p>' + t().emptyParts + '</p></div></section>';
    root.innerHTML = html;
    bindForms();
  }
  async function runVinSearch(vinRaw) {
    try {
      const decoded = await decodeVinRemote(vinRaw);
      store.car = decoded; go('#/vin'); render();
    } catch (e) {
      const root = $('#app'); if (root) root.innerHTML = '<section class="pad"><p>' + t().vinFail + '</p></section>';
    }
  }
  function bindForms() {
    const search = $('#site-search');
    if (search) search.onsubmit = (e) => { e.preventDefault(); go('#/hledat?q=' + encodeURIComponent(search.querySelector('input').value.trim())); };
    const vinForm = $('#vin-search');
    if (vinForm) vinForm.onsubmit = (e) => { e.preventDefault(); runVinSearch(vinForm.querySelector('[name="vin"]').value); };
  }
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-set-lang]');
    if (langBtn) { store.lang = langBtn.getAttribute('data-set-lang'); render(); }
  });
  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', render);
})();
