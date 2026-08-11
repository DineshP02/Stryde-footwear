/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#16213E',
        'navy-dark': '#0B1120',
        cream: '#ECE6D8',
        amber: '#C2833F',
        'amber-dark': '#E0A659',
        'surface-dark': '#131A2E',
        'border-dark': '#26314A',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
