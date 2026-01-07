/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{njk,html,js}",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        milwaukee: {
          red: '#E31837',
          black: '#1A1A1A',
          gray: '#2B2B2B'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
