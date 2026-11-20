/* ============================================================
   PENGATURAN FIN BETTA FARM
   Ubah nilai di bawah ini tanpa menyentuh kode lain.
   ============================================================ */
window.FBF = {
  // Nomor WhatsApp, format internasional tanpa tanda +
  wa: '6285720680879',
  instagram: 'https://www.instagram.com/finbetta.official/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Finbetta+Farm+Sumedang',

  // Link CSV dari Google Sheets (File > Bagikan > Publikasikan ke web > CSV).
  // Kalau kosong atau gagal dimuat, katalog memakai data cadangan di bawah.
  sheetCsv: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjQ0gPTWG01sly8ttTy6EvyUYT1HoFjwqmxJKTvGCgZoGB6R2glX-50cfDqzkiwEfsbxAYV1OniFZm/pub?gid=0&single=true&output=csv',

  // Tab "Testimoni" di Google Sheets (kolom: nama, kota, isi). Kosongkan jika belum ada.
  testimoniCsv: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjQ0gPTWG01sly8ttTy6EvyUYT1HoFjwqmxJKTvGCgZoGB6R2glX-50cfDqzkiwEfsbxAYV1OniFZm/pub?gid=1001&single=true&output=csv',

  // Jaminan dari mitra, misalnya garansi ikan hidup sampai tujuan. Kosong = tidak ditampilkan.
  garansi: '',

  // ID pengukuran Google Analytics 4 (format G-XXXXXXX). Kosong = tracking mati.
  ga4: 'G-NGJ83G1N66',

  // Email penerima salinan pesanan dari formulir (lewat FormSubmit). Kosong = hanya WhatsApp.
  formEmail: '',

  // Batas "sisa sedikit"
  stokSedikit: 2,
  // Jumlah stok yang dianggap toples penuh
  stokPenuh: 10,

  // Data cadangan (dipakai jika Google Sheets tidak bisa dimuat)
  katalog: [
    { nama: 'Halfmoon Orange Dragon', jenis: 'Halfmoon', warna: '#E8743B', harga: 35000, stok: 4, foto: '/foto/halfmoon-orange-dragon.webp' },
    { nama: 'Halfmoon Black Copper', jenis: 'Halfmoon', warna: '#7A5A3A', harga: 50000, stok: 2, foto: '/foto/halfmoon-black-copper.webp' },
    { nama: 'Halfmoon Big Ear Multicolor Copper', jenis: 'Halfmoon', warna: '#4C8FC4', harga: 50000, stok: 1, foto: '/foto/halfmoon-big-ear-multicolor-copper.webp' },
    { nama: 'Halfmoon Yellow', jenis: 'Halfmoon', warna: '#F2C94C', harga: 30000, stok: 6, foto: '/foto/halfmoon-yellow.webp' },
    { nama: 'Halfmoon Blue Red', jenis: 'Halfmoon', warna: '#C83A3A', harga: 30000, stok: 3, foto: '/foto/halfmoon-blue-red.webp' },
    { nama: 'Halfmoon Nemo Copper', jenis: 'Halfmoon', warna: '#D9783A', harga: 40000, stok: 5, foto: '/foto/halfmoon-nemo-copper.webp' },
    { nama: 'Crowntail White Platinum', jenis: 'Crowntail', warna: '#E9E6DF', harga: 25000, stok: 3, foto: '/foto/crowntail-white-platinum.webp' },
    { nama: 'Plakat Koi Galaxy', jenis: 'Plakat', warna: '#E46A4F', harga: 45000, stok: 0, foto: '/foto/plakat-koi-galaxy.webp' },
    { nama: 'Plakat Nemo Galaxy', jenis: 'Plakat', warna: '#C2304A', harga: 40000, stok: 5, foto: '/foto/plakat-nemo-galaxy.webp' },
    { nama: 'Halfmoon Super Red', jenis: 'Halfmoon', warna: '#D23B3B', harga: 35000, stok: 4, foto: '/foto/halfmoon-super-red.webp' },
    { nama: 'Double Tail Blue Red', jenis: 'Double Tail', warna: '#3A5BA8', harga: 35000, stok: 3, foto: '/foto/doubletail-blue-red.webp' },
    { nama: 'Double Tail Dark Blue', jenis: 'Double Tail', warna: '#1F3A7A', harga: 30000, stok: 4, foto: '/foto/doubletail-dark-blue.webp' },
    { nama: 'Double Tail Green Red', jenis: 'Double Tail', warna: '#2E8C6A', harga: 45000, stok: 2, foto: '/foto/doubletail-green-red.webp' },
    { nama: 'Halfmoon Orange', jenis: 'Halfmoon', warna: '#D9622B', harga: 30000, stok: 5, foto: '/foto/halfmoon-orange.webp' },
    { nama: 'Halfmoon Red Dragon', jenis: 'Halfmoon', warna: '#C0392B', harga: 45000, stok: 2, foto: '/foto/halfmoon-red-dragon.webp' },
    { nama: 'Halfmoon Black Red', jenis: 'Halfmoon', warna: '#8E1F1F', harga: 40000, stok: 3, foto: '/foto/halfmoon-black-red.webp' },
    { nama: 'Plakat Blue Pastel', jenis: 'Plakat', warna: '#5B7FD6', harga: 30000, stok: 4, foto: '/foto/plakat-blue-pastel.webp' },
    { nama: 'Plakat Green Pastel', jenis: 'Plakat', warna: '#5FA88C', harga: 30000, stok: 3, foto: '/foto/plakat-green-pastel.webp' },
    { nama: 'Plakat Blue Red', jenis: 'Plakat', warna: '#3B4D8F', harga: 35000, stok: 5, foto: '/foto/plakat-blue-red.webp' },
    { nama: 'Crowntail Black Red', jenis: 'Crowntail', warna: '#B02A2A', harga: 25000, stok: 4, foto: '/foto/crowntail-black-red.webp' },
    { nama: 'Crowntail Orange Red', jenis: 'Crowntail', warna: '#D9622B', harga: 20000, stok: 6, foto: '/foto/crowntail-orange-red.webp' },
    { nama: 'Crowntail Green Blue', jenis: 'Crowntail', warna: '#2A9D9A', harga: 25000, stok: 3, foto: '/foto/crowntail-green-blue.webp' },
  ],
};
