/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-650': '#FF3DF0',
        'green-650': '#39FF14',
        'black-650': '#263238',
        'black-750': '#1B1C1E',
      },
    },
    screens: {
      xxxs: '270px',
      xxs: '350px',
      xs: '475px',
      sm: '640px',
      md: '768px',
      tb: '960px',
      lg: '1024px',
      lp: '1199px',
      xl: '1280px',
    },
  },
  plugins: [
    flowbite
  ],
}
