window.MVP_DATA = (function () {
  const brands = [
    { id: 'alfa-romeo', name: 'Alfa Romeo' }, { id: 'audi', name: 'Audi' }, { id: 'bmw', name: 'BMW' },
    { id: 'citroen', name: 'Citroën' }, { id: 'cupra', name: 'Cupra' }, { id: 'dacia', name: 'Dacia' },
    { id: 'fiat', name: 'Fiat' }, { id: 'ford', name: 'Ford' }, { id: 'honda', name: 'Honda' },
    { id: 'hyundai', name: 'Hyundai' }, { id: 'chevrolet', name: 'Chevrolet' }, { id: 'jeep', name: 'Jeep' },
    { id: 'kia', name: 'Kia' }, { id: 'lexus', name: 'Lexus' }, { id: 'mazda', name: 'Mazda' },
    { id: 'mercedes-benz', name: 'Mercedes-Benz' }, { id: 'mini', name: 'MINI' }, { id: 'mitsubishi', name: 'Mitsubishi' },
    { id: 'nissan', name: 'Nissan' }, { id: 'opel', name: 'Opel' }, { id: 'peugeot', name: 'Peugeot' },
    { id: 'porsche', name: 'Porsche' }, { id: 'renault', name: 'Renault' }, { id: 'seat', name: 'SEAT' },
    { id: 'subaru', name: 'Subaru' }, { id: 'suzuki', name: 'Suzuki' }, { id: 'skoda', name: 'Škoda' },
    { id: 'tesla', name: 'Tesla' }, { id: 'toyota', name: 'Toyota' }, { id: 'volvo', name: 'Volvo' }, { id: 'vw', name: 'VW' }
  ];
  const models = {
    skoda: [
      { id: 'citigo', name: 'CITIGO (NF1)', years: '10.2011 – 08.2019' },
      { id: 'fabia-i', name: 'FABIA I (6Y)', years: '08.1999 – 03.2008' },
      { id: 'fabia-ii', name: 'FABIA II (542)', years: '12.2006 – 12.2014' },
      { id: 'fabia-iii', name: 'FABIA III (NJ)', years: '08.2014 – 06.2021' },
      { id: 'fabia-iv', name: 'FABIA IV (PJ)', years: '06.2021 –' },
      { id: 'kamiq', name: 'KAMIQ (NW4)', years: '07.2019 –' },
      { id: 'karoq', name: 'KAROQ (NU7)', years: '07.2017 –' },
      { id: 'kodiaq-i', name: 'KODIAQ I (NS)', years: '10.2016 –' },
      { id: 'octavia-i', name: 'OCTAVIA I (1U)', years: '09.1996 – 12.2010' },
      { id: 'octavia-ii', name: 'OCTAVIA II (1Z)', years: '02.2004 – 06.2013' },
      { id: 'octavia-iii', name: 'OCTAVIA III (5E / NL)', years: '11.2012 – 03.2021' },
      { id: 'octavia-iv', name: 'OCTAVIA IV (NX)', years: '01.2020 –' },
      { id: 'rapid', name: 'RAPID (NH)', years: '07.2012 – 03.2022' },
      { id: 'scala', name: 'SCALA (NW1)', years: '02.2019 –' },
      { id: 'superb-iii', name: 'SUPERB III (3V)', years: '03.2015 – 06.2024' },
      { id: 'yeti', name: 'YETI (5L)', years: '05.2009 – 12.2017' },
      { id: 'enyaq', name: 'ENYAQ iV', years: '10.2020 –' }
    ],
    vw: [
      { id: 'polo', name: 'Polo', years: '2009 –' }, { id: 'golf-7', name: 'Golf VII', years: '2012 – 2020' },
      { id: 'golf-8', name: 'Golf VIII', years: '2019 –' }, { id: 'passat-b8', name: 'Passat B8', years: '2014 – 2023' },
      { id: 'tiguan', name: 'Tiguan', years: '2007 –' }, { id: 'caddy', name: 'Caddy', years: '2010 –' }
    ],
    audi: [{ id: 'a3', name: 'A3', years: '2012 –' }, { id: 'a4', name: 'A4', years: '2008 –' }, { id: 'q5', name: 'Q5', years: '2008 –' }],
    bmw: [{ id: 'f30', name: 'Řada 3 (F30)', years: '2011 – 2019' }, { id: 'g30', name: 'Řada 5 (G30)', years: '2016 –' }, { id: 'x3', name: 'X3', years: '2010 –' }],
    ford: [{ id: 'focus', name: 'Focus', years: '2011 –' }, { id: 'mondeo', name: 'Mondeo', years: '2014 –' }, { id: 'kuga', name: 'Kuga', years: '2013 –' }],
    opel: [{ id: 'astra', name: 'Astra', years: '2009 –' }, { id: 'insignia', name: 'Insignia', years: '2008 –' }, { id: 'corsa', name: 'Corsa', years: '2006 –' }],
    hyundai: [{ id: 'i30', name: 'i30', years: '2012 –' }, { id: 'tucson', name: 'Tucson', years: '2015 –' }],
    'mercedes-benz': [{ id: 'c-class', name: 'C-Class', years: '2014 –' }, { id: 'e-class', name: 'E-Class', years: '2009 –' }, { id: 'sprinter', name: 'Sprinter', years: '2006 –' }]
  };
  const engines = {
    'octavia-iii': [
      { cc: '1197', kw: '77', hp: '105', cyl: '4/16', years: '11.2012 – 02.2017', fuel: 'benzin' },
      { cc: '1395', kw: '110', hp: '150', cyl: '4/16', years: '08.2014 – 10.2020', fuel: 'benzin' },
      { cc: '1968', kw: '110', hp: '150', cyl: '4/16', years: '11.2012 – 10.2020', fuel: 'diesel' }
    ]
  };
  const groups = [
    { id: 'filtry', name: 'Filtry', nameRu: 'Фильтры' },
    { id: 'brzdy', name: 'Brzdy', nameRu: 'Тормоза' },
    { id: 'podvozek', name: 'Podvozek a řízení', nameRu: 'Ходовая и рулевое' },
    { id: 'motor', name: 'Motor', nameRu: 'Двигатель' },
    { id: 'spojka', name: 'Spojka a převodovka', nameRu: 'Сцепление и КПП' },
    { id: 'chlazeni', name: 'Chlazení', nameRu: 'Охлаждение' },
    { id: 'vyfuk', name: 'Výfuk', nameRu: 'Выхлоп' },
    { id: 'elektro', name: 'Elektro a osvětlení', nameRu: 'Электрика и свет' },
    { id: 'karoserie', name: 'Karoserie', nameRu: 'Кузов' },
    { id: 'skla', name: 'Skla a stěrače', nameRu: 'Стёкла и дворники' },
    { id: 'klima', name: 'Topení a klima', nameRu: 'Отопление и климат' },
    { id: 'palivo', name: 'Palivová soustava', nameRu: 'Топливная система' }
  ];
  const shopCats = [
    { id: 'baterie', name: 'Baterie', nameRu: 'АКБ' },
    { id: 'oleje', name: 'Oleje', nameRu: 'Масла' },
    { id: 'autochemie', name: 'Autochemie', nameRu: 'Автохимия' },
    { id: 'zarovky', name: 'Žárovky', nameRu: 'Лампы' },
    { id: 'naradi', name: 'Nářadí', nameRu: 'Инструмент' },
    { id: 'vybava', name: 'Povinná výbava', nameRu: 'Обязательная комплектация' },
    { id: 'kapaliny', name: 'Provozní kapaliny', nameRu: 'Технические жидкости' },
    { id: 'doplnky', name: 'Autodoplňky', nameRu: 'Аксессуары' }
  ];
  brands.forEach((b) => { if (!models[b.id]) models[b.id] = [{ id: 'generic', name: b.name + ' — modely', years: 'katalog API' }]; });
  return { brands, models, engines, groups, shopCats };
})();
