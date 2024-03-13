/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        robot: ['Roboto', 'ui-sans-serif', 'system-ui'],
        title: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}