const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.amber,
      lime: colors.lime,
      green: colors.emerald,
      emerald: colors.emerald,
      teal: colors.teal,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      'solid-blue': '#1374F0',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
