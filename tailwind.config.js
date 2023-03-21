const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./output/*{.html,.js}"],
  theme: {
    screens: {
      xs: "420px",
      md_lg: "980px",
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        "menu-open": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },

      animation: {
        "menu-open": "menu-open 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
