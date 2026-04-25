/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          mid: "#112240",
          light: "#1E3A5F",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96B",
          pale: "#F5E9C8",
        },
        cream: "#FAF7F0",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
