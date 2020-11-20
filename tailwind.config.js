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
    extend: {
      width: {
        160: "40rem",
        216: "54rem",
      },
      backgroundColor: {
        "idea-blue": "#2D9CDB",
      },
      textColor: {
        "idea-pink": "#EB5757",
        "idea-gray": "#4F4F4F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
