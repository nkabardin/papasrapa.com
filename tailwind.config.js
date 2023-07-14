/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      chakra: ["Chakra Petch", "sans-serif"],
    },
    screens: {
      sm: "640px",
      tablet: "768px",
    },
    extend: {},
  },
  plugins: [],
};
