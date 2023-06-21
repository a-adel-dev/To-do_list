/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/source.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      orange: colors.orange,
      slate: colors.slate,
      blue: colors.blue,
      red: colors.red,
      accent: "#0C788F",
    },
    extend: {
      height: {
        screen: ["100vh", "100dvh"],
        "screen-small": ["100vh", "100svh"],
        "screen-large": ["100vh", "100lvh"],
      },
    },
  },
  plugins: [],
};

// content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
