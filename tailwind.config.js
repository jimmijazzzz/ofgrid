/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          800: '#1A1D2E',
        },
        'green': {
          500: '#4CAF50',
          600: '#45a049',
        },
        'yellow': {
          400: '#FFB400',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
      }
    },
  },
  plugins: [],
};