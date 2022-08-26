/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    color: { primary: "#80ced6", secondary: "#618685" },
    extend: {},
    fontFamily: {
      abc: ["Nunito", "sans-serif"],
      puff: ["DynaPuff", "cursive"],
      alumi: ["Alumni Sans", "sans-serif"],
      monts: ["Montserrat", " sans-serif"],
      poppins: ["Poppins", " sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
