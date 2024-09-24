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
        'dark': '#1e1e1e'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}