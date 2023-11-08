/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      dm: ["DM"],
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: ["dark"],
  },
};
