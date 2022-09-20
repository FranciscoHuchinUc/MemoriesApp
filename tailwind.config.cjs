/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins']
      },
      colors: {
        'primary': '#4A19A8',
        'secondary': '#F3EEFC',
        'black': '#444444',
        'hover': '#666666',
        'shadow': '#F2F2F2',
      }
    }
  },
  plugins: [],
}
