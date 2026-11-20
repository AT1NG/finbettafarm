module.exports = {
  content: ['./index.html', './404.html', './app.js'],
  theme: {
    extend: {
      colors: {
        air: '#F5F8FB',
        laut: '#1C2B3A',
        lautmuda: '#33465A',
        sirip: '#B4493A',
        siripmuda: '#FBE4DD',
        lavender: '#B9A7E0',
        ketapang: '#8A5A2B',
        biru: '#C9DAEE',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['Figtree', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '72rem' },
    },
  },
  plugins: [],
};
