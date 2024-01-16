/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'poppins': 'poppins',
        'roboto':'roboto',
      },
      backgroundSize: {
        'size':'100% 100%'
      },
      backgroundImage: {
        'boxgradient':'linear-gradient(270deg, #8C939B 0%, #243040 100%)'

      }
    },
  },
  plugins: [],
}
