/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#1798ff",
        secondary: "#ff6800",
        tertiary: "#fff100",
        "grey-a": "#a7a7a7",
        "grey-b": "#e6e6e6",
        text: "#595959",
        temp: "#f5f5f5",
      },
      fontFamily: {
        sans: [
          "Ubuntu",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
};
