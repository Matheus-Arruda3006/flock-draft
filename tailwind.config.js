/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/img/hero-pattern.svg')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      }
    }
  },
  plugins: [],
}
