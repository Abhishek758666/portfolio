/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Helvetica"],
        head: ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
