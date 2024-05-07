/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "512px",
      },
      backgroundImage: {
        "deals-bg": "url('/src/assets/images/dealsBackground.png')",
        "pinkyBinders-bg": "url('/src/assets/images/pinkyBindersBg.jpg')",
        "newsLetter-bg": "url('/src/assets/images/newsLetterBg.jpg')",
      },
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        lightRed: "#DBDBDB",
        black: "#000000",
        white: "#FFFFFF",
        lightGray: "#484848",
        veryLightGray: "#E0E0E0",
        whiteGray: "#8A8A8A",
        grayWhite: "#FAFAFA",
        lightGrayWhite: "#8A8A8A",
        pinkyBinder: "#DADADA",
        testimonialIimageBg: "#D9D9D9",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
