/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'background': '#1a1a1a',
          'card': '#2c2c2c',
          'primary': '#e5a00d',
          'border': '#444',
          'text-primary': '#e0e0e0',
          'text-secondary': '#b0b0b0',
          'primary-color': '#963d24'
        },
        fontFamily: {
          'sans': ['Roboto', 'sans-serif'],
          'serif': ['Merriweather', 'serif'],
        },
      },
    },
    plugins: [],
  }