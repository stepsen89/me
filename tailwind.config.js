module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBG: "#17171F",
        primary: "hsl(250, 66%, 75%)",
        primaryAlt: "hsl(250, 66%, 71%)",
        title: "hsl(219, 15%, 95%)",
        text: "hsl(219, 8%, 75%)",
        textLight: "hsl(219, 4%, 55%)",
        container: "hsl(219, 32%, 12%)",
        body: "hsl(219, 48%, 8%)",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
    container: { center: true },
  },
  plugins: [],
};
