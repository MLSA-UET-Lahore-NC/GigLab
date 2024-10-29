// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Looks for Tailwind classes in React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
