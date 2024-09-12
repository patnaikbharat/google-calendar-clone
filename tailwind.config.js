/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/components',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

