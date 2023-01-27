// tailwind.config.js
module.exports = {
    future: {},
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
           'secondary': '#47B5FF',
           'primary': '#2F76D9',
           'primary-dark': '#224E89',
           'muted': '#697B98',
           'dark-muted': '#001533',
           'pragraph-color': '#7895B2',
           'red': '#EF4646'
        },
      },
    },
    variants: {},
    plugins: [
    ],
  }