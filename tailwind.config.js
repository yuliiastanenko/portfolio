/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f5f3ef",
        ink: "#1f2421",
        "ink-soft": "#4a4f4c",
        teal: "#3b6e68",
        "teal-light": "#e8efec",
        ochre: "#b8863c",
        border: "#e4dfd6",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};