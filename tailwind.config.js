module.exports = {
  purge: [],
  darkMode: false,
  theme: {
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
