import flowbite from 'flowbite-react/tailwind';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'bg-black-soft': '#000000a8',
        'dark': '#1e1e1e',
        'green-sena': '#00AF00',
        'green-sena-medium': '#096856',
        'green-sena-hard': '#004028',
      },
      backgroundImage: {
        'auth-bg': 'url("assets/auth-bg.jpg")'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}