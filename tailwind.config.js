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
        xsm: "350px",
        tablet: "750px",
      },
    },

    fontFamily: {
      SansPro: ["Source Sans Pro", "sans-pro"],
      JetMono: ["JetBrains Mono", "jetbrains-mono"],
    },
  },
  plugins: [],
};
