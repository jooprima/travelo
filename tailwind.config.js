module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/container/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#105387",
          white: "#ffffff",
          black: "#050d18",
        },
        secondary: {
          yellow: "#eba41f",
          red: "#eb1f2b",
        },
        color: {
          primary: "#050d18",
          secondary: "#50555d",
        },
        white: "#ffffff",
        black: "#000000",
        yellow: {
          10: "#fdf5e8",
          30: "#f9e3bb",
          50: "#f5d18f",
          70: "#f1bf62",
          100: "#eba41f",
        },
        red: {
          10: "#fde8e9",
          30: "#f9bbbf",
          50: "#f58f95",
          70: "#f1626a",
          100: "#eb1f2b",
        },
        blue: {
          10: "#e7edf7",
          30: "#b7cbe9",
          50: "#87a9db",
          70: "#5786cc",
          100: "#105387",
        },
        gray: {
          10: "#e6e6e7",
          30: "#b4b6b9",
          50: "#82868b",
          70: "#50555d",
          100: "#050d18",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
