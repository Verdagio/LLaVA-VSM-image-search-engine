/** @type {import('tailwindcss').Config} */

import { colors } from 'tailwindcss/colors';

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    }
  },
  plugins: [],
};