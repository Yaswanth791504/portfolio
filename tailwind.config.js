/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mori: ["Mori", "sans-serif"],
        hand: ["Great Vibes", "cursive"],
        base: ["Cookie", "cursive"],
      },
    },
  },
  plugins: [],
};
