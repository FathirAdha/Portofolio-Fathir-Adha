/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#b81414",
        secondary: "#8b7f64",
        dark: "#2a1d0f",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
