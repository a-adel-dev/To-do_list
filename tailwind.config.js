/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/source.html"],
  theme: {
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
