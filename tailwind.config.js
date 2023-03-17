/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["assets/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "skiing-pattern": "url('/assets/skiing.jpg')",
        "beach-pattern": "url('/assets/beach.jpg')",
        "food-pattern": "url('/assets/food.jpg')",
      },
    },
  },
  plugins: [],
}
