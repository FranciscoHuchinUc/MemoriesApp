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
        'primary': '#F00073',
        'background': '#FEFAFA',
        'black': '#444444',
        'stroke': '#DBDBDB',
      }
    }
  },
  plugins: [],
}
