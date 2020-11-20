module.exports = {
  purge: { enabled: true, content: ["./src/**/*.html"] },
  darkMode: false,
  theme: {
    screens: {
      xs: "470px",
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
        "idea-gray": "#2F2F2F",
      },
      textColor: {
        "idea-pink": "#EB5757",
        "idea-gray": "#808080",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
