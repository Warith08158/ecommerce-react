/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
      },
      colors: {
        lightRed: "#DBDBDB",
        black: "#000000",
        white: "#FFFFFF",
        lightGray: "#484848",
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
