/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Red_Hat_Text": ['"Red Hat Text"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "red" : "#c73a0f",
        "green" : "#1ea475",
        "rose50" : "#fcf9f7",
        "rose100" : "#f4edeb",
        "rose300" : "#c9aea6",
        "rose400" : "#ad8985",
        "rose500" : "#87635a",
        "rose900" : " #260f08" 
      }
    },
  },
  plugins: [],
}
 