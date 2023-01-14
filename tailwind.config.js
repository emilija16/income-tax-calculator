/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'green-light': '#7ED957',
        'green-darker': '#60af3e',
        'blue-dark': '#0A1E36'
      },
      borderStyle: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
