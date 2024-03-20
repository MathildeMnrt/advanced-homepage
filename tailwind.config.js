/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#5DB082',
        'violet': {
          100: '#CAD4FA',
          200: '#6281F7',
          300: '#6D4AE5',
          400: '#161739'
        },
        'yellow': '#F5C044',
        'grey-100': '#F6F7FB',
        'grey-200': '#737F8B',
        'grey-300': '#333333',
      },
      backgroundImage: {
        'bg-1': "url('bg-1.svg')"
      },
    },
  },
plugins: [],
}