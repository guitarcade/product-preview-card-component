/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    colors: {
      'dark-cyan-400':'hsl(158, 36%, 37%)',
      'dark-cyan-700':'hsl(158, 36%, 17%)',
      'cream':'hsl(30, 38%, 92%)',
      'very-dark-blue': 'hsl(212, 21%, 14%)',
      'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {
      fontFamily: {
        'montserrat'  : ['Montserrat', 'sans-serif'],
        'fraunces'  : ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}

