/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        mancity: '#6CADDE',
        liverpool: '#D10127',
        chelsea: '#01318A',
        arsenal: '#9D824A',
        manutd: '#F8C240',
        westham: '#60213A',
      },
      fontFamily: {
        primary: ['Inconsolata']
      },
    },
  },
  plugins: [],
}
