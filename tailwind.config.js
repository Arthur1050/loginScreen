/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'bolder': '0px 0px 9px rgb(0 0 0 / 0.75)'
      }
    },
  },
  plugins: [],
}

