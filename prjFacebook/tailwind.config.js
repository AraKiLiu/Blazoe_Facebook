const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './**/*.html',
      './**/*.razor'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme:[],
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}