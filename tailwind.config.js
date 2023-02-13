/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs/', './public/js/*.js'],
  theme: {
    extend: {
      colors: {
        tangerine: '#F08700',
        gamboge: '#F49F0A',
        jonquil: '#EFCA08',
        'light-sea-green': '#00A6A6',
        'columbia-blue': '#BBDEF0',
      },
    },
  },
  plugins: [],
};
