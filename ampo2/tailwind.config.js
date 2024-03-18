/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        micolor: "#C6D3C4",
      },

      fontFamily: {
        robot: ['Roboto', 'ui-sans-serif', 'system-ui'],
        title: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}