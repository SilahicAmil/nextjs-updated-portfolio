/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        topnav: "#1f2428",
        sidebar: "#24292e",
        navigation: "#1f2428",
        files: "#1f2428",
        bottom: "#24292e",
        higlighted: "#15181c",
      },
      screens: {
        sm: "400px",
        md: "960px",
      },
    },

    fontFamily: {
      SansPro: ["Source Sans Pro", "sans-pro"],
    },
  },
  plugins: [],
};
