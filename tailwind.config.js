/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      devanagari: ['Noto Sans Devanagari', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#FF9933',    // Saffron
        secondary: '#138808',  // Green
        accent: '#000080',     // Blue
      },
    },
  },
  plugins: [],
}
