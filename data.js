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

  // Batas "sisa sedikit"
  stokSedikit: 2,
  // Jumlah stok yang dianggap toples penuh
  stokPenuh: 10,

  // Data cadangan (dipakai jika Google Sheets tidak bisa dimuat)
  katalog: [
    { nama: 'Halfmoon Soft Pink', jenis: 'Halfmoon', warna: '#F2A7BE', harga: 35000, stok: 4 },
    { nama: 'Halfmoon Copper', jenis: 'Halfmoon', warna: '#C9824A', harga: 50000, stok: 2 },
    { nama: 'Halfmoon Blue Rim', jenis: 'Halfmoon', warna: '#6E9BD1', harga: 30000, stok: 6 },
    { nama: 'Plakat Koi Galaxy', jenis: 'Plakat', warna: '#E46A4F', harga: 45000, stok: 0 },
    { nama: 'Plakat Nemo', jenis: 'Plakat', warna: '#F08A3C', harga: 40000, stok: 5 },
    { nama: 'Plakat Fancy', jenis: 'Plakat', warna: '#9B7BD1', harga: 25000, stok: 3 },
    { nama: 'Giant Multicolor', jenis: 'Giant', warna: '#4BA3A0', harga: 50000, stok: 1 },
    { nama: 'Crowntail Red', jenis: 'Crowntail', warna: '#D23B3B', harga: 15000, stok: 8 },
  ],
};
