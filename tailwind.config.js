module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'secondary': '#47B5FF',
        'primary': '#db9423',
        'primary-dark': '#224E89',
        'muted': '#697B98',
        'dark-muted': '#001533',
        'pragraph-color': '#7895B2',
        'red': '#EF4646',
        'dark': '#1c1d20',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
