module.exports = {
  purge: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: '#5964E0',
          light: '#939BF4'
        },
        blue: {
          DEFAULT: '#121721',
          dark: '#19202D'
        },
        gray: {
          DEFAULT: '#9DAEC2',
          light: '#F4F6F8',
          dark: '#6E8098'
        }
      },
    },
  },
  plugins: [],
}
