module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: "#ff6961",
        dark: "#161326",
        purple: "#9886f4",
        purple2: "#7e6bdb",
        light: "#1f1a32",
        black: "#110f1c",
      },
      spacing: {
        124: "31rem",
        "7/10": "70vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
