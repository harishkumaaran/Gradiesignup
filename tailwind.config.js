module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradie': "url('/img/Background.png')",
      }),
      colors: {
        'primary': '#013243',
        'secondary': '#86bfd3',
      },
      spacing: {
        '54': '13.5rem',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
