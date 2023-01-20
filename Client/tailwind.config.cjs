/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],


daisyui: {
  themes: [
    {
      DeshTheme: {
        primary: "#F9D923",
        secondary: "#187498",
        accent: "#386641",
        neutral: "#36AE7C",
        orange: "#FF8D29",
        footer: "a7c957",
        "base-100": "#ffffff",
      },
    },
    "light",
    "cupcake",
  ],
}

}
