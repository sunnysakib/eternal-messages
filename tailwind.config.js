/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': '#002FD1',
        'primary-20': '#D4DCFD',
        'gray-2': '#D0D5DD',
        'white': "#FCFCFD",
        'green': '#26BF94'
      }
    },
  },
  plugins: [require('preline/plugin'), require('@tailwindcss/forms')],
}

