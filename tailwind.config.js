/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },

    extend: {
      colors: {
        mandy: {
          50: "#fef2f3",
          100: "#fde6e7",
          200: "#fbd0d5",
          300: "#f7aab2",
          400: "#f27a8a",
          500: "#ea546c",
          600: "#d5294d",
          700: "#b31d3f",
          800: "#961b3c",
          900: "#811a39",
          950: "#48091a",
        },
        primarydark: "#0a0a0a",
        secondarydark: "#171717",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
  darkMode: "class",
};
