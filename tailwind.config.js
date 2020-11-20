module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1245px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
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
