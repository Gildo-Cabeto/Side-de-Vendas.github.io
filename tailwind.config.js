/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [],
  theme: {
    extend: {
      colors: {
        brand: {
          100 : "#f8a832",
          200: "#faba44",
          300: "#fccc56",
          400: "#fdde68",
          500:"#fff07a",
          600: "#3e20dc",
          700: "#2e18b9",
          800: "#1f1096",
          900: "#0f0872",
          1000: "#00004f"
        },
      },
      fontFamily:{
        josefin : "Josefin Sans",
        lexend : "Lexend",
      },
      backgroundImage:{
        escola:{
          url:'screen1.jpg'
        }
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%" : {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%" : {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%" : {
            transform: "translate(-20px, 20%) scale(0.9)"
          },
          "100%" : {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
};
