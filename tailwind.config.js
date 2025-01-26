/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        // Inter var,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji
      },
      colors: {
        "c-light": "#F8FAFC",
        "c-gray": "#8F9EB3",
        "c-dark1": "#1E2235",
        "c-dark2": "#0F172A",
        "c-dark3": "#0E1323",
        "c-purple1": "#BFABDD",
        "c-purple2": "#9F81CD",
      },
      gridTemplateColumns: {
        'auto-fit-minmax': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
}

