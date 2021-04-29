const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./*.html'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: colors.green,
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-focus', 'focus-visible'],
      ringColor: ['group-focus', 'focus-visible'],
      ringOffsetColor: ['group-focus', 'focus-visible'],
      ringOffsetWidth: ['group-focus', 'focus-visible'],
      ringOpacity: ['group-focus', 'focus-visible'],
      ringWidth: ['group-focus', 'focus-visible'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
