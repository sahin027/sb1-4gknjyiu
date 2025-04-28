/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9e8',
          100: '#daf1ca',
          200: '#b8e39b',
          300: '#97d36d',
          400: '#7CB342', // Primary pistachio green
          500: '#589e2a',
          600: '#438020',
          700: '#2E5B16', // Deep forest green
          800: '#224211',
          900: '#172a0c',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      backgroundImage: {
        'pistachio-pattern': "url('https://images.pexels.com/photos/1437591/pexels-photo-1437591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};