/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'background': '#f2f7f5',
        'headline-primary': '#00473e',
        'headline-secondary': '#036659',
        'main-text-color': '#475d5b',
        'subtitle-color': '#668582',
        'button-primary-color': '#faae2b',
        'button-text-primary': '#00473e',
        'button-secondary': '#faae2b',
        'alert-color': '#FF3131',
        'warn-color': '#FFC000',
        'success-color': '#50C878',
        'info-color': '#0096FF',
      },
      fontFamily: {
        'text-regular': ['Roboto', 'sans-serif'],
        'text-light': ['Roboto-Light', 'sans-serif'],
        'text-bold': ['Roboto-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

