(function () {
  var C = window.FBF;
  var BETTA = '<path d="M60 35C78 12 104 10 116 22c-8 10-8 26 0 36-12 12-38 10-56-11z" fill="FILL" opacity=".75"/><path d="M30 31c6-17 24-21 34-7l-8 10z" fill="FILL" opacity=".8"/><path d="M28 48c8 18 26 24 36 10l-8-12z" fill="FILL" opacity=".8"/><path d="M14 40c4-9 20-12 36-9l12 5v10l-12 3c-16 3-32 0-36-9z" fill="FILL"/><path d="M70 30c12-4 26-4 38 0M70 40h40M70 50c12 4 26 4 38 0M40 22c6-2 12 0 16 6M40 60c6 2 12 0 16-6" stroke="#13324A" stroke-opacity=".18" stroke-width="1.5" fill="none"/><path d="M30 43c-2 7 3 10 7 5z" fill="#13324A" opacity=".15"/><circle cx="22" cy="38" r="2.6" fill="#13324A"/>';
  var rupiah = function (n) { return 'Rp' + Number(n).toLocaleString('id-ID'); };
  var waLink = function (text) { return 'https://wa.me/' + C.wa + '?text=' + encodeURIComponent(text); };

  // Tautan WhatsApp umum
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = waLink(a.getAttribute('data-wa') || 'Halo Fin Betta Farm, saya mau tanya stok cupang.');
    a.target = '_blank'; a.rel = 'noopener';
  });
  document.querySelectorAll('[data-ig]').forEach(function (a) { a.href = C.instagram; });
  document.querySelectorAll('[data-maps]').forEach(function (a) { a.href = C.maps; });

  function fishSvg(color) {
    return '<svg class="jar-fish" viewBox="0 0 120 80" aria-hidden="true">' + BETTA.replace(/FILL/g, color) + '</svg>';
  }

  function status(stok) {
    if (stok <= 0) return { cls: 'chip-out', label: 'Habis' };
    if (stok <= C.stokSedikit) return { cls: 'chip-low', label: 'Sisa sedikit' };
    return { cls: 'chip-ok', label: 'Tersedia' };
  }

  var items = [];
  var grid = document.getElementById('katalog-grid');
  var filters = document.getElementById('katalog-filter');
  var select = document.getElementById('f-varian');
  var aktif = 'Semua';

  function render() {
    var list = items.filter(function (i) { return aktif === 'Semua' || i.jenis === aktif; });
    grid.innerHTML = list.map(function (i) {
      var s = status(i.stok);
      var level = Math.max(8, Math.min(100, (i.stok / C.stokPenuh) * 100));
      var habis = i.stok <= 0;
      var pesan = habis
        ? 'Halo Fin Betta Farm, ' + i.nama + ' kapan ada lagi?'
        : 'Halo Fin Betta Farm, saya mau pesan ' + i.nama + ' (' + rupiah(i.harga) + '). Apakah masih ada?';
      return '<article class="flex flex-col">' +
        '<div class="jar' + (habis ? ' jar-empty' : '') + '">' +
          '<div class="jar-water" style="height:' + (habis ? 8 : level) + '%"></div>' +
          fishSvg(i.warna || '#D9567F') +
          '<span class="jar-level">' + (habis ? 'kosong' : i.stok + ' ekor') + '</span>' +
        '</div>' +
        '<div class="mt-4 flex flex-wrap items-start justify-between gap-x-3 gap-y-1">' +
          '<div><h3 class="text-lg font-bold leading-tight">' + i.nama + '</h3>' +
          '<p class="text-sm text-laut/70">' + i.jenis + '</p></div>' +
          '<p class="font-display text-lg font-bold whitespace-nowrap">' + rupiah(i.harga) + '</p>' +
        '</div>' +
        '<div class="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">' +
          '<span class="chip whitespace-nowrap ' + s.cls + '">' + s.label + '</span>' +
          '<a class="whitespace-nowrap text-sm font-semibold underline decoration-2 underline-offset-4 ' + (habis ? 'text-laut/60' : 'text-sirip') + '" target="_blank" rel="noopener" data-track="wa_katalog" href="' + waLink(pesan) + '">' +
            (habis ? 'Tanya kapan ada' : 'Pesan lewat WhatsApp') + '</a>' +
        '</div></article>';
    }).join('');
  }

  function renderFilters() {
    var jenis = ['Semua'].concat(items.map(function (i) { return i.jenis; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; }));
    filters.innerHTML = jenis.map(function (j) {
      return '<button type="button" class="filter-btn" aria-pressed="' + (j === aktif) + '" data-j="' + j + '">' + j + '</button>';
    }).join('');
    filters.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () { aktif = b.dataset.j; renderFilters(); render(); });
    });
  }

  function fillSelect() {
    select.innerHTML = '<option value="">Pilih varian</option>' + items.filter(function (i) { return i.stok > 0; }).map(function (i) {
      return '<option value="' + i.nama + '">' + i.nama + ' (' + rupiah(i.harga) + ')</option>';
    }).join('') + '<option value="Paket pemula">Paket pemula</option>';
  }

  function setItems(list, sumber) {
    items = list;
    var total = items.reduce(function (t, i) { return t + (i.stok > 0 ? 1 : 0); }, 0);
    document.getElementById('stok-ringkas').textContent = total + ' dari ' + items.length + ' varian tersedia';
    document.getElementById('stok-sumber').textContent = sumber;
    renderFilters(); render(); fillSelect();
  }

  function parseCsv(text) {
    var rows = [], row = [], cur = '', q = false;
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (q) { if (ch === '"' && text[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
      else if (ch === '"') q = true;
      else if (ch === ',') { row.push(cur); cur = ''; }
      else if (ch === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else if (ch !== '\r') cur += ch;
    }
    if (cur || row.length) { row.push(cur); rows.push(row); }
    var head = rows.shift().map(function (h) { return h.trim().toLowerCase(); });
    return rows.filter(function (r) { return r.join('').trim(); }).map(function (r) {
      var o = {}; head.forEach(function (h, k) { o[h] = (r[k] || '').trim(); });
      return { nama: o.nama, jenis: o.jenis, warna: o.warna, harga: parseInt(String(o.harga).replace(/\D/g, ''), 10) || 0, stok: parseInt(o.stok, 10) || 0 };
    }).filter(function (o) { return o.nama; });
  }

  setItems(C.katalog, 'Data contoh');
  if (C.sheetCsv) {
    fetch(C.sheetCsv + (C.sheetCsv.indexOf('?') > -1 ? '&' : '?') + 't=' + Date.now())
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (t) {
        var list = parseCsv(t);
        if (list.length) {
          var jam = new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
          setItems(list, 'Diperbarui dari catatan stok, ' + jam);
        }
      })
      .catch(function () { /* tetap pakai data cadangan */ });
  }

  // Formulir pesan: menyusun pesan WhatsApp
  var form = document.getElementById('form-pesan');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var err = document.getElementById('form-error');
    var nama = form.nama.value.trim(), varian = form.varian.value, jumlah = form.jumlah.value, lokasi = form.lokasi.value.trim(), cara = form.cara.value;
    if (!nama || !varian || !lokasi) {
      err.textContent = 'Isi nama, varian, dan kecamatan dulu supaya pesananmu bisa dicek.';
      err.hidden = false; return;
    }
    err.hidden = true;
    var teks = 'Halo Fin Betta Farm, saya ' + nama + '.\nSaya mau pesan: ' + varian + ' sebanyak ' + jumlah + ' ekor.\nLokasi: ' + lokasi + '\nPengambilan: ' + cara + '\nMohon info total dan cara bayarnya.';
    if (window.gtag) window.gtag('event', 'generate_lead', { method: 'whatsapp_form', item: varian });
    window.open(waLink(teks), '_blank', 'noopener');
    document.getElementById('form-ok').hidden = false;
  });

  // FAQ
  document.querySelectorAll('[data-faq]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      document.getElementById(btn.getAttribute('aria-controls')).hidden = open;
    });
  });

  document.getElementById('tahun').textContent = new Date().getFullYear();
})();
