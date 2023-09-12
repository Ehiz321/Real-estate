/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary200: 'rgba(0, 128, 0, 0.20)',
      primary300: '#008000',
      secondary100: '#D9D9D9',
      secondary200: 'rgba(217, 217, 217, 0.30)',
      secondaryColor: '#808080',
      accentColor: '#303030',
      accent100: 'bg-[rgba(217, 217, 217, 0.5)]',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      listStyleImage: {
        checkmark: 'url("/src/assets/icons/check.svg")',
      },
      backgroundImage: {
        checkmark: 'url("/src/assets/icons/check.svg")',
      },
    },
  },
  plugins: [],
}
