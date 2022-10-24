/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["black"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
