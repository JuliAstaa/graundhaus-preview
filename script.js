/* GROUNDHAUS one-page site.
   Language toggle, hash router for the page views, dialogs, revenue calculator,
   mobile menu, WhatsApp links, copy buttons and scroll reveal. */
'use strict';

const SITE = {
  name: 'GROUNDHAUS',
  url: 'https://www.groundhaus.co',
  whatsapp: '6281511820806',   // +62 815 1182 0806, from the deck; confirm with client
  email: 'hello@groundhaus.co',
};

/* ---------- Copy ---------- */

// English strings that are not in the markup (index.html holds the rest).
const EN = {
  'meta.title': 'GROUNDHAUS | Property Operations & Growth',
  'ui.copied': 'Copied',
  'wa.general': 'Hi GROUNDHAUS, I would like to talk about my property in Bali.',
  'wa.person': 'Hi GROUNDHAUS, I would like to talk to {name} about my property in Bali.',
  'wa.calc': 'Hi GROUNDHAUS, I would like a full estimate for my villa.\nPlan: {plan}\nPublished rate: {rate}\nVilla unit: {units}\nOccupancy: {occupancy}\nOTA commission: {ota}\nOwner income (estimate): {income}',
  'calc.fee': '{pct}% MANAGEMENT FEE',
  // Plan names are service names: English in both languages.
  'calc.plan.full': 'Full management 15%',
  'calc.plan.sales': 'Room sales only 10%',
};

// Bahasa Indonesia, keyed like the data-i18n attributes in index.html.
// Script lines, service names and table heads stay in English and have no key.
// DRAFT: pending client approval
// TODO: Bahasa Indonesia needs client approval before launch.
const I18N = {
  id: {
    'meta.title': 'GROUNDHAUS | Operasional & Pertumbuhan Properti',
    'meta.description': 'Pendekatan manajemen properti yang komprehensif, dirancang untuk mengoptimalkan operasional, meningkatkan pengalaman tamu, serta memaksimalkan kinerja dan nilai jangka panjang properti Anda.',

    'ui.skip': 'Langsung ke konten',
    'ui.language': 'Bahasa',
    'ui.whatsapp': 'WhatsApp kami',
    'ui.menu': 'Menu',
    'ui.menu.open': 'Buka menu',
    'ui.menu.close': 'Tutup menu',
    'ui.back': 'Kembali ke Layanan Kami',
    'ui.close': 'Tutup',
    'ui.copy': 'Salin',
    'ui.copied': 'Disalin',
    'wa.general': 'Halo GROUNDHAUS, saya ingin berdiskusi tentang properti saya di Bali.',

    'nav.label': 'Utama',
    'nav.insight': 'Wawasan',
    'nav.services': 'Layanan',
    'nav.portofolio': 'Portofolio',
    'nav.calculator': 'Kalkulator',
    'nav.team': 'Tim',

    'hero.title': 'Operasional &amp; Pertumbuhan Properti',
    'hero.lead': 'MARI BANGUN BISNIS HOSPITALITAS YANG BERKINERJA LEBIH BAIK, DARI FONDASI HINGGA PERTUMBUHAN.',
    'hero.by': 'OLEH:',
    'hero.intro': 'PENDEKATAN MANAJEMEN PROPERTI YANG KOMPREHENSIF, DIRANCANG UNTUK MENGOPTIMALKAN OPERASIONAL, MENINGKATKAN PENGALAMAN TAMU, SERTA MEMAKSIMALKAN KINERJA DAN NILAI JANGKA PANJANG PROPERTI ANDA.',
    'hero.photo.alt': 'Gugusan tebing karang kapur di lepas pantai yang tenang',

    'welcome.title': 'Selamat Datang',
    'welcome.body': 'HAI! KAMI ADALAH GROUNDHAUS UNTUK OPERASIONAL HOSPITALITAS. <strong>KAMI MEMBANTU MEMBAWA BISNIS DARI FONDASI HINGGA PERTUMBUHAN.</strong> MENCAKUP SEMUANYA, MULAI DARI IDE AWAL, KONSEP, BRANDING, DAN PENGEMBANGAN PROPERTI HINGGA OPERASIONAL HARIAN, PENJUALAN, PEMASARAN, DAN PENGALAMAN TAMU. PEKERJAAN KAMI MENGHUBUNGKAN SEMUA BAGIAN PROPERTI YANG BERGERAK MENJADI SATU PERJALANAN, MEMADUKAN PEMIKIRAN KREATIF, SISTEM OPERASIONAL, DAN STRATEGI KOMERSIAL UNTUK MEMBANGUN BISNIS HOSPITALITAS YANG BERJALAN BAIK, TERASA TEPAT, DAN TERUS BERTUMBUH.',
    'welcome.photo.alt': 'Sebuah keluarga Bali tersenyum dalam pakaian adat upacara',

    'insight.title': 'Wawasan',
    'insight.caption': 'TREN OKUPANSI BALI 2025',
    'insight.chart.label': 'Okupansi Bali 2025: terendah 46.61% pada Maret, tertinggi 69.54% pada Agustus',
    'insight.low.title': 'MUSIM SEPI',
    'insight.low.text': 'Jan - Mar (Fokus pada visibilitas &amp; penciptaan permintaan)',
    'insight.normal.title': 'MUSIM RAMAI HINGGA NORMAL',
    'insight.normal.text': 'Apr &ndash; Jun &middot; Okt &ndash; Des (Menyeimbangkan okupansi dengan harga yang optimal)',
    'insight.peak.title': 'MUSIM PUNCAK',
    'insight.peak.text': 'Jul &ndash; Sep (Memaksimalkan ADR, nilai inventaris &amp; pendapatan)',
    'month.jan': 'Jan',
    'month.feb': 'Feb',
    'month.mar': 'Mar',
    'month.apr': 'Apr',
    'month.may': 'Mei',
    'month.jun': 'Jun',
    'month.jul': 'Jul',
    'month.aug': 'Agu',
    'month.sep': 'Sep',
    'month.oct': 'Okt',
    'month.nov': 'Nov',
    'month.dec': 'Des',

    'approach.title': 'Pendekatan Strategis Kami',
    'approach.label': 'Enam tahap, dari landasan hingga pertumbuhan',
    'approach.grounding': 'LANDASAN',
    'approach.insight': 'WAWASAN',
    'approach.strategy': 'STRATEGI',
    'approach.deliver': 'EKSEKUSI',
    'approach.evaluate': 'EVALUASI',
    'approach.growth': 'PERTUMBUHAN',

    'services.eyebrow': 'OPERASIONAL &amp; PERTUMBUHAN PROPERTI',
    'services.title': '<em>Layanan</em> Kami',
    'services.lead': 'Pendekatan manajemen hospitalitas yang komprehensif, dirancang untuk mengoptimalkan operasional, meningkatkan pengalaman tamu, serta memaksimalkan kinerja dan nilai jangka panjang properti Anda.',
    'services.villa.sub': 'Pengelolaan profesional mencakup OTA, operasional, pengalaman tamu, dan pemeliharaan properti.',
    'services.development.sub': 'Dari konsep hingga selesai, kami mengembangkan properti yang dirancang untuk nilai jangka panjang.',
    'services.revenue.sub': 'Menciptakan peluang pendapatan baru melalui pengalaman pilihan dan layanan bernilai tambah.',

    'calc.eyebrow': 'Kalkulator Pendapatan Villa Anda Ada di Sini!',
    'calc.title': 'Hitung Sendiri!',
    'calc.units': 'UNIT VILLA',
    'calc.rate': 'TARIF PUBLIKASI',
    'calc.rate.error': 'Masukkan tarif publikasi minimal IDR 100.000.',
    'calc.occupancy': 'OKUPANSI',
    'calc.ota': 'KOMISI OTA',
    'calc.plan': 'PAKET MANAJEMEN',
    'calc.costs': 'BIAYA OPERASIONAL BULANAN (OPSIONAL)',
    'calc.costs.row': 'BIAYA OPERASIONAL BULANAN',
    'calc.income': 'PENDAPATAN PEMILIK',
    'calc.payout': 'PAYOUT',
    'calc.fee': 'BIAYA MANAJEMEN {pct}%',
    'calc.disclaimer': 'Ini adalah estimasi penjualan berdasarkan data saat ini.',
    'calc.cta': 'Dapatkan estimasi lengkap via WhatsApp',
    'wa.calc': 'Halo GROUNDHAUS, saya ingin estimasi lengkap untuk villa saya.\nPaket: {plan}\nTarif publikasi: {rate}\nUnit villa: {units}\nOkupansi: {occupancy}\nKomisi OTA: {ota}\nPendapatan pemilik (estimasi): {income}',

    'portofolio.title': 'Portofolio Kami',
    'portofolio.tiss.alt': 'TISS Valley Villa dilihat dari atas, kamar-kamar berkolam di punggung bukit hutan',
    'portofolio.tiss.tag': 'Studi kasus',
    'portofolio.tiss.rooms': '6 kamar',
    'portofolio.tiss.pools': 'Kolam renang pribadi',
    'portofolio.tiss.view': 'Pemandangan lembah',
    'portofolio.taka.type': 'Restoran',
    'portofolio.taka.seats': '200 kursi',
    'portofolio.taka.interior': 'Interior Jepang',

    'team.alt.idot': 'Potret Idot',
    'team.alt.nita': 'Potret Nita',
    'team.alt.antan': 'Potret Antan',
    'team.alt.brandon': 'Potret Brandon',
    'team.alt.rizki': 'Potret Rizki',
    'team.talk': 'Chat dengan',
    'team.talk.wa': 'via WhatsApp',
    'team.back': 'Kembali ke tim',
    'wa.person': 'Halo GROUNDHAUS, saya ingin berbicara dengan {name} tentang properti saya di Bali.',

    'contact.title': 'Mari Terhubung!',
    'contact.body': 'TERIMA KASIH TELAH MELUANGKAN WAKTU UNTUK MENGENAL PERJALANAN DAN CARA KERJA KAMI. KAMI PERCAYA SETIAP BISNIS HOSPITALITAS YANG HEBAT BERAWAL DARI FONDASI YANG TEPAT DAN TUMBUH MELALUI STRATEGI YANG MATANG, SISTEM YANG KUAT, DAN PENGALAMAN YANG BERMAKNA. <strong>MARI BANGUN LANGKAH BERIKUTNYA, DARI FONDASI HINGGA PERTUMBUHAN — BERSAMA.</strong>',
    'contact.cta': 'Chat via WhatsApp',
    'contact.photo.alt': 'Gerbang candi bentar dengan latar langit pucat',
    'footer.rights': 'Hak cipta dilindungi.',
    'footer.tagline': 'Operasional &amp; Pertumbuhan Properti',

    'case.title': 'Studi Kasus',
    'case.alt.terraces': 'Terasering sawah dilihat dari atas',
    'case.alt.grass': 'Rumpun padi yang tinggi',
    'case.heading': 'DARI FONDASI HINGGA PERTUMBUHAN<br>PENGEMBANGAN HOSPITALITAS',
    'case.body': 'DARI IDE PERTAMA HINGGA BISNIS HOSPITALITAS YANG BEROPERASI PENUH, STUDI KASUS KAMI MENCERMINKAN CARA KAMI MENYATUKAN SETIAP BAGIAN PROPERTI. KONSEP, MEREK, PENGEMBANGAN, OPERASIONAL, PENJUALAN, DAN PENGALAMAN TAMU. SEBUAH PERJALANAN YANG DIBANGUN DARI DASAR, DIBENTUK DENGAN TUJUAN, DAN TERUS DIKEMBANGKAN UNTUK BERTUMBUH.',
    'case.mission.title': 'MISI KAMI',
    'case.mission': 'MEMBANGUN BISNIS HOSPITALITAS YANG LEBIH KUAT DENGAN MENGHUBUNGKAN STRATEGI, MANUSIA, SISTEM, DAN PENGALAMAN. MENCIPTAKAN FONDASI YANG KOKOH, OPERASIONAL YANG LEBIH BAIK, DAN PELUANG PERTUMBUHAN YANG BERKELANJUTAN.',
    'villa.alt.aerial': 'TISS Valley Villa di tepi lembah, dilihat dari atas',
    'villa.statement': '<strong>TISS VALLEY VILLA ADALAH VILLA PRIBADI EKSKLUSIF DI SEBATU, TEGALLALANG, DIKELILINGI ALAM DAN MENGHADAP LANSKAP LEMBAH YANG TERBUKA. DIRANCANG SEBAGAI TEMPAT PELARIAN YANG TENANG, PROPERTI INI MEMILIKI ENAM KAMAR PRIBADI, MASING-MASING DENGAN KOLAM RENANG PRIBADI DAN TERHUBUNG LANGSUNG DENGAN KEHIJAUAN DI SEKITARNYA.</strong>',
    'villa.fact.opened': 'Reservasi sejak',
    'villa.fact.opened.value': '14 September',
    'villa.fact.rooms': 'Kamar dijual saat peluncuran',
    'villa.fact.occupancy': 'Okupansi bulan pertama',
    'villa.alt.built': 'TISS Valley Villa dari atas, setelah dibangun dan ditanami',
    'growth.title': 'Dari Fondasi Hingga Pertumbuhan',
    'details.title': 'Detailnya',
    'details.body': 'DARI PEMBUATAN MEREK HINGGA PENERAPAN NYATA, KAMI MEMBANGUN TISS VALLEY SEBAGAI SATU PENGALAMAN YANG UTUH. MENERJEMAHKAN IDENTITASNYA KE DALAM SETIAP DETAIL, DARI ELEMEN VISUAL DAN INTERIOR HINGGA KETERHUBUNGANNYA DENGAN ALAM, BUDAYA, DAN KENYAMANAN YANG TENANG.',
    'gallery.label': 'Galeri TISS Valley Villa',
    'gallery.lobby': 'LOBI<span class="site-caption-sub">RAMAH | TERBUKA | MENYATU DENGAN ALAM</span>',
    'gallery.interior': 'DETAIL INTERIOR KAMAR<span class="site-caption-sub">SENTUHAN BUDAYA | DETAIL ARTISTIK | DIBUAT DENGAN CERMAT</span>',
    'gallery.bedroom': 'KAMAR TIDUR<span class="site-caption-sub">HIJAU KHAS | TENANG | TERINSPIRASI ALAM</span>',
    'gallery.bathroom': 'KAMAR MANDI',
    'gallery.view': 'PEMANDANGAN DARI KAMAR',
    'gallery.pool': 'KOLAM RENANG PRIBADI',
    'gallery.alt.lobby': 'TISS Valley Villa, lobi',
    'gallery.alt.interior': 'TISS Valley Villa, interior kamar dengan ranjang berkanopi menghadap lembah',
    'gallery.alt.bedroom': 'TISS Valley Villa, kamar tidur dengan bantal hijau',
    'gallery.alt.bathroom': 'TISS Valley Villa, kamar mandi dengan cermin ukir bundar',
    'gallery.alt.view': 'TISS Valley Villa, pohon palem terlihat dari balik tirai kamar',
    'gallery.alt.pool': 'TISS Valley Villa, kolam renang pribadi dengan daybed',
    'launch.label': 'Peluncuran',
    'launch.body': 'TISS VALLEY VILLA MULAI MENERIMA RESERVASI PADA 14 SEPTEMBER, DENGAN LIMA KAMAR YANG TERSEDIA UNTUK DIJUAL. DALAM WAKTU KURANG DARI SATU BULAN BEROPERASI, PROPERTI INI MENCAPAI TINGKAT OKUPANSI KESELURUHAN SEBESAR 48.3%. AWAL YANG BAIK UNTUK PELUNCURANNYA DI PASAR.',

    'host.reviews': 'Ulasan',
    'host.rating': 'Penilaian',
    'host.years': 'Tahun menjadi host',
    'ota.platform': 'PENYIAPAN &amp; PENGELOLAAN PROFESIONAL DI BOOKING.COM, AIRBNB, DAN OTA REGIONAL TERKEMUKA.',
    'ota.listing': 'MENINGKATKAN SKOR KUALITAS LISTING, ALGORITMA PERINGKAT, DAN POSISI KONTEN UNTUK MERAIH VISIBILITAS MAKSIMAL DI PLATFORM.',
    'ota.support': 'PENGELOLAAN RESERVASI YANG LANCAR, SINKRONISASI TARIF DAN KETERSEDIAAN, SERTA KOMUNIKASI TAMU YANG RESPONSIF 24/7.',
    'pricing.dynamic': 'PEMBARUAN HARGA DINAMIS BERBASIS ALGORITMA DAN PASAR, BERDASARKAN MUSIM, PERMINTAAN, DAN LONJAKAN ACARA LOKAL.',
    'pricing.parity': 'MENGELOLA STRUKTUR TARIF DI SEMUA KANAL UNTUK MENCEGAH PERBEDAAN HARGA DAN MENJAGA NILAI MEREK.',
    'pricing.competitor': 'PEMANTAUAN BERKELANJUTAN ATAS TARIF KOMPETITOR, TREN OKUPANSI, SERTA STRATEGI PROMOSI &amp; DISKON KHUSUS.',
    'ops.sop': 'HOUSEKEEPING, PEMELIHARAAN, RESERVASI, CHECK-IN/OUT, PENANGANAN TAMU, DAN ALUR ESKALASI.',
    'ops.housekeeping': 'DAFTAR PERIKSA KEBERSIHAN, KESIAPAN KAMAR, LINEN, AMENITAS, INSPEKSI, DAN TINDAK LANJUT PERBAIKAN.',
    'ops.maintenance': 'PEMERIKSAAN PROPERTI TERJADWAL, CATATAN PEMELIHARAAN, PRIORITAS PERBAIKAN, DAN KOORDINASI VENDOR.',
    'ops.expense': 'LAUNDRY, AMENITAS, PERLENGKAPAN, PERBAIKAN, PERSETUJUAN, DAN KEBUTUHAN OPERASIONAL RUTIN.',
    'ops.journey': 'STANDAR PRA-KEDATANGAN, KEDATANGAN, SELAMA MENGINAP, KEBERANGKATAN, DAN PENANGANAN MASALAH.',
    'ops.reporting': 'PELAPORAN OPERASIONAL, PELACAKAN MASALAH BERULANG, VISIBILITAS BAGI PEMILIK, DAN PENYEMPURNAAN SOP.',
    'management.title': 'Solusi Manajemen',
    'management.full': 'MANAJEMEN PENJUALAN DAN LISTING OTA, OPERASIONAL PROPERTI KHUSUS, HOUSEKEEPING, PEMELIHARAAN, LAUNDRY, AMENITAS, KOORDINASI PERBAIKAN, STANDAR RESERVASI, DAN KONTROL OPERASIONAL.',
    'management.rooms': 'MANAJEMEN KOMERSIAL BERFOKUS OTA, MENCAKUP LISTING, PEMANTAUAN KANAL, INVENTARIS, HARGA, DAN DUKUNGAN RESERVASI. OPERASIONAL PROPERTI TETAP DIKELOLA PEMILIK.',
    'management.qc': 'DUKUNGAN STAF FLEKSIBEL UNTUK HOUSEKEEPING, KEBERSIHAN, VILLA ATTENDANT, DAN PERAN PROPERTI LAINNYA - TERSEDIA SESUAI KEBUTUHAN OPERASIONAL.',
    'comparison.title': 'Perbandingan Cakupan',
    'comparison.included': 'Termasuk',
    'comparison.excluded': 'Tidak termasuk',

    'development.concept': 'MENENTUKAN KONSEP, POSITIONING, ARAH PENGEMBANGAN, DAN POTENSI BISNIS PROPERTI SEJAK IDE AWAL.',
    'development.design': 'MENGEMBANGKAN TATA LETAK DAN RENCANA RUANG PROPERTI UNTUK MENYEIMBANGKAN FUNGSI, ESTETIKA, KEBUTUHAN OPERASIONAL, DAN POTENSI PENGEMBANGAN.',
    'development.construction': 'MENGELOLA KONTRAKTOR, PROGRES KONSTRUKSI, ANGGARAN, JADWAL, DAN KONTROL KUALITAS UNTUK MEMASTIKAN PROPERTI DISERAHKAN SESUAI RENCANA.',
    'taka.statement': 'DENGAN MENGUBAH STRUKTUR BANGUNAN YANG ADA, PARA DESAINER RESTORAN BERKAPASITAS 200 KURSI INI MENCIPTAKAN SUASANA JEPANG YANG ELEGAN DAN MEWAH. KUNCI KEBERHASILANNYA TERLETAK PADA PENATAAN RUANG YANG CERMAT UNTUK MEMENUHI KEINGINAN PEMILIK AKAN INTERIOR YANG SEDIKIT LEBIH GELAP NAMUN TETAP BERKELAS. UNTUK ITU, INTERIORNYA MENGHADIRKAN FURNITUR MEWAH DENGAN AKSEN PANEL MARMER GIOK DAN BLACK GOLD, MEWUJUDKAN VISI PEMILIK SECARA CANGGIH DAN BERKELAS.',
    'taka.alt.facade': 'Fasad restoran Taka Bassura pada malam hari',
    'taka.alt.entrance': 'Pintu masuk Taka Bassura dengan panel logo dan taman bambu',
    'taka.alt.room': 'Ruang makan Taka Bassura dengan meja panggang dan lampion',
    'taka.alt.plan': 'Denah lantai Taka Bassura',
    'taka.alt.isometric': 'Tata letak isometrik Taka Bassura',
    'taka.alt.i1': 'Taka Bassura, area makan dengan meja panggang',
    'taka.alt.i2': 'Taka Bassura, meja resepsionis di bawah plafon kayu melengkung',
    'taka.alt.i3': 'Taka Bassura, taman pintu masuk dengan bambu dan tempat duduk',
    'taka.alt.i4': 'Taka Bassura, konter dapur terbuka di bawah lampu cincin',
    'taka.alt.i5': 'Taka Bassura, area makan dengan lampion kertas',
    'taka.alt.i6': 'Taka Bassura, resepsionis dengan bambu dan rak pajangan',

    'revenue.activities': 'AKTIVITAS TAMU DAN PENGALAMAN LOKAL PILIHAN, TERMASUK PENGALAMAN BUDAYA, PETUALANGAN, WELLNESS, DAN REKREASI, DENGAN KOORDINASI PEMESANAN DAN MITRA PIHAK KETIGA TEPERCAYA.',
    'revenue.transport': 'PENGATURAN TRANSPORTASI PRIBADI DAN AKOMODASI, TERMASUK ANTAR-JEMPUT BANDARA, SOPIR PRIBADI, SERTA SEWA MOBIL DAN MOTOR.',
    'revenue.wellness': 'LAYANAN WELLNESS DAN KECANTIKAN SESUAI PERMINTAAN YANG LANGSUNG DIANTAR KE VILLA, TERMASUK PIJAT, PERAWATAN SPA, MANIKUR, PEDIKUR, NAIL ART, DAN PERAWATAN DIRI PERSONAL LAINNYA.',
  },
};

/* ---------- Language ---------- */

const LANGS = ['en', 'id'];
const LANG_KEY = 'gh-lang';
const IS_DEV = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);

let currentLang = 'en';
let missingLogged = false;
const enText = new Map();   // element -> original English innerHTML
const enAttrs = new Map();  // element -> { attribute: original English value }

function readStoredLang() {
  try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
}

function storeLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* storage blocked: keep the choice for this visit only */ }
}

function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;
  const stored = readStoredLang();
  return LANGS.includes(stored) ? stored : 'en';
}

// Text for keys that live only in script.js (WhatsApp messages and the like).
function t(key) {
  if (currentLang === 'id' && key in I18N.id) return I18N.id[key];
  return EN[key];
}

function swapText(dict, missing) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (!enText.has(el)) enText.set(el, el.innerHTML);
    const key = el.dataset.i18n;
    if (dict && key in dict) {
      el.innerHTML = dict[key];
    } else {
      el.innerHTML = enText.get(el);
      if (dict) missing.push(key);
    }
  });
}

// data-i18n-attr="alt:key" or "aria-label:key;title:key2"
function swapAttrs(dict, missing) {
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    if (!enAttrs.has(el)) enAttrs.set(el, {});
    const saved = enAttrs.get(el);
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (!(attr in saved)) saved[attr] = el.getAttribute(attr);
      if (dict && key in dict) {
        el.setAttribute(attr, decodeEntities(dict[key]));
      } else {
        el.setAttribute(attr, saved[attr]);
        if (dict) missing.push(key);
      }
    });
  });
}

const entityBox = document.createElement('textarea');
function decodeEntities(html) {
  entityBox.innerHTML = html;
  return entityBox.value;
}

function syncUrl(lang) {
  try {
    const url = new URL(location.href);
    if (lang === 'en') url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    history.replaceState(history.state, '', url);
  } catch (e) { /* file:// or old browser: leave the URL alone */ }
}

function applyLang(lang) {
  currentLang = lang;
  const dict = lang === 'en' ? null : I18N[lang];
  const missing = [];

  // English is already in the markup; only touch the DOM once a switch has happened.
  if (dict || enText.size) {
    swapText(dict, missing);
    swapAttrs(dict, missing);
  }

  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
  renderCalc();
  updateWhatsAppLinks();
  updateTitle();

  if (IS_DEV && missing.length && !missingLogged) {
    missingLogged = true;
    console.warn(`[i18n] ${missing.length} key(s) missing for "${lang}", showing English:`, [...new Set(missing)]);
  }
}

function initLanguage() {
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      applyLang(lang);
      storeLang(lang);
      syncUrl(lang);
    });
  });
  applyLang(initialLang());
}

/* ---------- WhatsApp ---------- */

function waHref(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

// The message for a [data-wa] link, in the current language.
function waMessage(a) {
  const key = a.dataset.wa;
  if (key === 'wa.calc') return calcMessage();
  if (key === 'wa.person') return t(key).replace('{name}', a.dataset.waName);
  return t(key);
}

function updateWhatsAppLinks(selector = '[data-wa]') {
  document.querySelectorAll(selector).forEach((a) => {
    a.href = waHref(waMessage(a));
  });
}

/* ---------- Revenue calculator ("Simple Sales Forcast") ---------- */

function calcForecast({ rate, units, occupancy, otaPct, plan, monthlyCosts = 0 }) {
  const roomRevenue = rate * units * 30 * occupancy;
  const otaCommission = roomRevenue * otaPct;
  const payout = roomRevenue - otaCommission;
  const fee = payout * (plan === 'full' ? 0.15 : 0.10);
  return { roomRevenue, otaCommission, payout, fee, ownerIncome: payout - fee - monthlyCosts };
}

const MIN_RATE = 100000;
const idr = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 });
const money = (value) => `IDR ${idr.format(Math.round(value))}`;
const digitsOf = (value) => Number(String(value).replace(/\D/g, '')) || 0;
const calcForm = document.getElementById('calc-form');

function readCalc() {
  const f = calcForm.elements;
  return {
    rate: digitsOf(f.rate.value),
    units: digitsOf(f.units.value),
    occupancy: Number(f.occupancy.value) / 100,
    otaPct: Number(f.ota.value) / 100,
    plan: f.plan.value === 'full' ? 'full' : 'sales',
    monthlyCosts: digitsOf(f.costs.value),
  };
}

function calcMessage() {
  if (!calcForm) return t('wa.general');
  const input = readCalc();
  const result = calcForecast(input);
  return t('wa.calc')
    .replace('{plan}', t(input.plan === 'full' ? 'calc.plan.full' : 'calc.plan.sales'))
    .replace('{rate}', money(input.rate))
    .replace('{units}', String(input.units))
    .replace('{occupancy}', `${Math.round(input.occupancy * 100)}%`)
    .replace('{ota}', `${Math.round(input.otaPct * 100)}%`)
    .replace('{income}', money(result.ownerIncome));
}

function renderCalc() {
  if (!calcForm) return;
  const input = readCalc();
  const result = calcForecast(input);
  const $ = (id) => document.getElementById(id);

  $('calc-occupancy-out').textContent = `${Math.round(input.occupancy * 100)}%`;
  $('calc-ota-out').textContent = `${Math.round(input.otaPct * 100)}%`;

  // Flag a low rate, but never block typing.
  const rateField = calcForm.elements.rate;
  const tooLow = input.rate < MIN_RATE;
  rateField.setAttribute('aria-invalid', String(tooLow));
  $('calc-rate-error').hidden = !tooLow;

  $('calc-payout').textContent = money(result.payout);
  $('calc-fee-label').textContent = t('calc.fee').replace('{pct}', input.plan === 'full' ? '15' : '10');
  $('calc-fee').textContent = money(result.fee);
  $('calc-costs-row').hidden = !input.monthlyCosts;
  $('calc-costs-out').textContent = money(input.monthlyCosts);
  $('calc-income').textContent = money(result.ownerIncome);
  $('calc-income-total').textContent = money(result.ownerIncome);
  updateWhatsAppLinks('[data-wa="wa.calc"]');
}

function initCalc() {
  if (!calcForm) return;
  calcForm.addEventListener('submit', (e) => e.preventDefault());
  calcForm.addEventListener('input', renderCalc);
  calcForm.addEventListener('change', renderCalc);

  // Digits only. Money fields keep id-ID grouping (1.500.000) while typing, with the caret
  // kept after the same digit; villa unit stays plain digits.
  ['units', 'rate', 'costs'].forEach((name) => {
    const field = calcForm.elements[name];
    const grouped = name !== 'units';

    field.addEventListener('input', () => {
      const caret = field.selectionStart ?? field.value.length;
      const digitsBefore = field.value.slice(0, caret).replace(/\D/g, '').length;
      const next = groupDigits(field.value, grouped);
      if (next === field.value) return;
      field.value = next;
      let pos = 0;
      for (let seen = 0; pos < next.length && seen < digitsBefore; pos++) {
        if (/\d/.test(next[pos])) seen++;
      }
      field.setSelectionRange(pos, pos);
    });

    if (!grouped) return;
    // Backspace or Delete next to a dot removes the digit beyond it, not the dot alone.
    field.addEventListener('keydown', (e) => {
      const { selectionStart: start, selectionEnd: end, value } = field;
      if (start !== end) return;
      if (e.key === 'Backspace' && value[start - 1] === '.') field.setSelectionRange(start - 1, start - 1);
      if (e.key === 'Delete' && value[start] === '.') field.setSelectionRange(start + 1, start + 1);
    });
  });
  renderCalc();
}

// "0012500" -> "12.500". BigInt keeps long numbers exact.
function groupDigits(value, grouped) {
  const digits = value.replace(/\D/g, '').replace(/^0+(?=\d)/, '');
  if (!digits || !grouped) return digits;
  return idr.format(BigInt(digits));
}

/* ---------- Copy email and phone ---------- */

function legacyCopy(text) {
  const box = document.createElement('textarea');
  box.value = text;
  box.setAttribute('readonly', '');
  box.style.position = 'fixed';
  box.style.opacity = '0';
  document.body.append(box);
  box.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  box.remove();
  return ok;
}

function initCopy() {
  const status = document.querySelector('.site-copy-status');
  let clearTimer;
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      let ok;
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch (e) {
        ok = legacyCopy(text);
      }
      if (!status || !ok) return;
      status.textContent = `${t('ui.copied')}: ${text}`;
      clearTimeout(clearTimer);
      clearTimer = setTimeout(() => { status.textContent = ''; }, 3000);
    });
  });
}

/* ---------- Page views (hash router) ---------- */

// Each <main data-view> is one page. A hash that names a view, or any element inside one,
// shows that view (#villa-management, #taka-bassura); everything else shows home.
const views = [...document.querySelectorAll('[data-view]')];
let currentView = null;

function viewEl(name) {
  return views.find((v) => v.dataset.view === name);
}

function viewForId(id) {
  const el = id && document.getElementById(id);
  const view = el && el.closest('[data-view]');
  return view ? view.dataset.view : 'home';
}

// Home keeps the site title; service views use their h1, which stays English in both languages.
function updateTitle() {
  if (!currentView || currentView === 'home') {
    document.title = t('meta.title');
    return;
  }
  const h1 = viewEl(currentView).querySelector('h1');
  document.title = `${h1.textContent.trim()} | ${SITE.name}`;
}

function focusWithoutScroll(el) {
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

function showView(name) {
  views.forEach((v) => { v.hidden = v.dataset.view !== name; });
  currentView = name;
  updateTitle();
  updateNavCurrent();
}

/* ---------- Nav: mark the section in view ---------- */

// Home sections in page order, each with the nav link it belongs to (null: no link).
// Approach sits under Insight, as in the design system's page map.
const NAV_SECTIONS = [
  ['hero', null], ['welcome', null], ['insight', 'insight'], ['approach', 'insight'],
  ['services', 'services'], ['calculator', 'calculator'], ['portofolio', 'portofolio'], ['team', 'team'],
];
const navLinks = [...document.querySelectorAll('.gh-nav a, .site-menu__links a')];
let navCurrent;

function sectionInView() {
  // The three service views are Services pages.
  if (currentView && currentView !== 'home') return 'services';
  // The contact band closes every view and has no link of its own.
  const contact = document.getElementById('contact');
  const line = window.innerHeight * 0.4;
  if (contact && contact.getBoundingClientRect().top < line) return null;
  let key = null;
  for (const [id, navKey] of NAV_SECTIONS) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= line) key = navKey;
  }
  return key;
}

function updateNavCurrent() {
  const key = sectionInView();
  if (key === navCurrent) return;
  navCurrent = key;
  navLinks.forEach((a) => {
    if (key && a.getAttribute('href') === `#${key}`) a.setAttribute('aria-current', 'location');
    else a.removeAttribute('aria-current');
  });
}

function initNavCurrent() {
  let queued = false;
  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; updateNavCurrent(); });
  };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  updateNavCurrent();
}

function route(initial = false) {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = id ? document.getElementById(id) : null;

  // Dialog hashes (#tiss-valley, #team-antan) open over the home view.
  if (target && target.matches('dialog.site-dialog')) {
    if (currentView !== 'home') {
      showView('home');
      revealIn(viewEl('home'));
    }
    const card = cardFor(target);
    if (initial && card) card.scrollIntoView({ block: 'center', behavior: 'instant' });
    openDialog(target);
    return;
  }
  // Back or forward away from a dialog hash closes the dialog.
  if (openDialogEl) openDialogEl.close();

  const name = viewForId(id);
  const changed = name !== currentView;

  // Same view: the browser has already scrolled to the anchor.
  if (!changed) return;
  showView(name);

  if (target && !target.matches('[data-view]')) {
    // 'instant': a smooth scroll would start from the previous view's position.
    target.scrollIntoView({ block: 'start', behavior: 'instant' });
    if (!initial) focusWithoutScroll(target.querySelector('h1, h2') || target);
  } else if (!initial) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    focusWithoutScroll(viewEl(name).querySelector('h1'));
  }
  revealIn(viewEl(name));
}

function initRouter() {
  if (!views.length) return;
  route(true);
  window.addEventListener('hashchange', () => route());

  // The skip link targets whichever view is showing.
  const skip = document.querySelector('.site-skip');
  if (skip) {
    skip.addEventListener('click', (e) => {
      e.preventDefault();
      const h1 = viewEl(currentView).querySelector('h1');
      h1.scrollIntoView({ block: 'start' });
      focusWithoutScroll(h1);
    });
  }
}

/* ---------- Scroll lock (menu and dialogs) ---------- */

function lockScroll(on) {
  document.documentElement.classList.toggle('is-locked', on);
}

/* ---------- Dialogs (TISS Valley, team profiles) ---------- */

let openDialogEl = null;

// The card on the home view that opens this dialog; focus goes back to it on close.
function cardFor(dialog) {
  return document.querySelector(`[data-view="home"] a[href="#${dialog.id}"]`);
}

function openDialog(dialog) {
  if (openDialogEl === dialog) return;
  if (openDialogEl) openDialogEl.close();
  dialog.showModal();
  dialog.scrollTop = 0;
  openDialogEl = dialog;
  lockScroll(true);
}

function initDialogs() {
  document.querySelectorAll('dialog.site-dialog').forEach((dialog) => {
    dialog.querySelectorAll('[data-dialog-close]').forEach((btn) => {
      btn.addEventListener('click', () => dialog.close());
    });
    // Close button, Esc, or leaving the hash: restore the section hash, unlock, refocus the card.
    dialog.addEventListener('close', () => {
      if (openDialogEl === dialog) openDialogEl = null;
      lockScroll(false);
      if (location.hash === `#${dialog.id}`) {
        const url = new URL(location.href);
        url.hash = dialog.dataset.return;
        history.replaceState(history.state, '', url);
      }
      const card = cardFor(dialog);
      if (card) card.focus();
    });
  });
}

/* ---------- Mobile menu ---------- */

function initMenu() {
  const menu = document.getElementById('site-menu');
  const openBtn = document.querySelector('[data-menu-open]');
  if (!menu || !openBtn || typeof menu.showModal !== 'function') return;

  // Unlock before the link's own scroll happens, so the jump is not blocked.
  const close = () => {
    if (menu.open) menu.close();
    lockScroll(false);
  };

  openBtn.addEventListener('click', () => {
    menu.showModal();
    lockScroll(true);
    openBtn.setAttribute('aria-expanded', 'true');
  });
  menu.addEventListener('close', () => {
    lockScroll(false);
    openBtn.setAttribute('aria-expanded', 'false');
  });
  menu.querySelector('[data-menu-close]').addEventListener('click', close);
  menu.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', close));
  matchMedia('(min-width: 1101px)').addEventListener('change', (e) => {
    if (e.matches) close();
  });
}

/* ---------- Scroll reveal ---------- */

// Sections already on screen stay put; only those below the fold fade up once.
// Runs per view, the first time that view is shown.
const revealIO = ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches)
  ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('is-pending');
      revealIO.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' })
  : null;

function revealIn(root) {
  if (!revealIO || !root || root.dataset.revealReady) return;
  root.dataset.revealReady = 'true';
  root.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add('is-pending');
    revealIO.observe(el);
  });
}

/* ---------- Start ---------- */

initDialogs();
initCalc();
initCopy();
initLanguage();
initMenu();
initRouter();
initNavCurrent();
revealIn(document.getElementById('contact'));
