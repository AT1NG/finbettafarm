module.exports = {
  content: ['./index.html', './404.html', './app.js'],
  theme: {
    extend: {
      colors: {
        air: '#EEF4F7',
        laut: '#13324A',
        lautmuda: '#2C5470',
        sirip: '#D9567F',
        siripmuda: '#F6D3DF',
        lavender: '#B9A7E0',
        ketapang: '#8A5A2B',
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
