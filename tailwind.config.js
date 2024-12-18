/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#34719c',
        'primary-text': '#166291',
        'secondary-hover': '#bbcede',
        'secondary-active': '#a4bfd3'
      }
    },
  },
  plugins: [],
}

