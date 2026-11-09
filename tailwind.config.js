/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#FFF9EE',
        body: '#3A3A3A',
        comic: {
          red: '#D62828',
          'red-dark': '#A61E1E',
          yellow: '#FFD23F',
          blue: '#2B59C3',
        },
      },
      fontFamily: {
        display: ['Bangers', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'comic-sm': '3px 3px 0 #111111',
        comic: '5px 5px 0 #111111',
        'comic-lg': '10px 10px 0 #111111',
      },
      maxWidth: { site: '1160px' },
    },
  },
  plugins: [],
};
