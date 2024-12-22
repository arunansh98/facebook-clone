/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0866ff",
        green: "#42b72a",
        black: "#050505",
        grey: "#F0F2F5",
      },
      fontFamily: {
        primary: "Helvetica, Arial, sans-serif",
        secondary: "SFProDisplay-Regular, Helvetica, Arial, sans-serif;",
        homePrimary:
          "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",
      },
      fontSize: {
        lg: "32px",
        md: "20px",
        sm: "17px",
        primary: "15px",
      },
    },
  },
  plugins: [],
};
