module.exports = {
  purge: { enabled: true, content: ["./src/**/*.html"] },
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1245px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "idea-blue": "#2D9CDB",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "idea-pink": "#EB5757",
      "idea-gray": "#4F4F4F",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};