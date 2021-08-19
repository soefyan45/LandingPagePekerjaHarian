module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ijo-1': '#00AA13',
        'ijo-2': '#78D974',
        'ungu-1': '#482256',
        'pink-1': '#CA292C'
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      fontSize: {
        'note': '.60rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
        '7xl': '5rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
