/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto"],
      playfair: ["Playfair"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gold: "#c99d36",
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: ["black"],
  },
};
