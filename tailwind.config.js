/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          100: "#088395",
          200: "#4c3bcf",
          300: "#7d8abc",
          400: "#304463"
        }
      }
    },
  },
  plugins: [],
}