/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esta línea le dice a Tailwind dónde buscar tus clases
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}