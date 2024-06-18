/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        island: ['Playwrite IS'] 
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}