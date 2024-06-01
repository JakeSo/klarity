/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold' : '#e1aa16',
        'white' : '#fefefe',
        
      }
    },
  },
  plugins: [],
}

