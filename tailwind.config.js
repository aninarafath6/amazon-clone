module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#37475a",
          DEFAULT: "#232f3e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
