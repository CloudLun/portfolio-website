/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#191919",
        "font-gray": "#b2b2b2",
      },
      keyframes: {
        show: {
          '0%': {transform: 'translateY(40px)'},
          '100%':{transform: 'translateY(0px)'},
        }
      },
    },
  },
  plugins: [],
};
