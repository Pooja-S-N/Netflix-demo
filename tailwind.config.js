/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#141414',
        netflixRed: '#e50914'
      }
    }
  },
  plugins: []
}
