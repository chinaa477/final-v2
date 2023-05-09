/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'secondary': '#e75a4b',
        'primary': '#1ab69d',
        'primary-dark': '#224E89',
        'muted': '#54595f',
        'dark-muted': '#1d1d23',
        'paragraph-color': '#6F6B80',
        'red': '#EF4646',
        'dark': '#1c1d20',
        'light': '#f7f7f7',
        'tsl-black': '#221638',
        'tsl-blue': '#65C2F9',
        'tsl-dark-blue': '#6440FB',
        'tsl-orange': '#fab550',
        'tsl-dark-orange': '#F86F03',
        'tsl-light-black': '#181818',
      },
    },
  },
  plugins: [],
}

