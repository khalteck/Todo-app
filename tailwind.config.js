/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        jose: "'Josefin Sans', sans-serif"
      }
    },
  },
  plugins: [],
}
