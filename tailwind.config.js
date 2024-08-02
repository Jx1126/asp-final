/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/css/**/*.{jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

