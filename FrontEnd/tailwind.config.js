/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        over: ["overpass", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        // Terminal / code-editor theme
        primary: "#0a0e14",
        secondary: "#7ee787",
        tertiory: "#56d4dd",
        panel: "#10151d",
        "term-border": "#1c2430",
        "term-muted": "#8b949e",
        "primary-red":"#DC2626",
        "URL-Blue":"#1E90FF",
      },
    },
  },
  plugins: [],
};
