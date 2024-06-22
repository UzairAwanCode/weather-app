/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  // content: ["./App.{js,jsx,ts,tsx}", "/app/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        customColor1: '#3E2D8F',
        customColor2: '#9D52AC',
      },
      backgroundColor: {
        'black-20':'rgb(0,0,0,0.7)',
      }
    },
  },
  plugins: [],
}

