/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  safelist: ["play", "pause", "timer", "stop", "speaker-none", "speaker-high"],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
