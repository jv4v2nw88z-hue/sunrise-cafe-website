/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FFF7EC',
          200: '#FBEDD9',
          300: '#F5DFC0',
        },
        sunrise: {
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        honey: {
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
        },
        espresso: {
          500: '#6D4C41',
          600: '#5D4037',
          700: '#4E342E',
          800: '#3E2723',
          900: '#2B1B12',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(62, 39, 35, 0.12)',
        lift: '0 12px 40px -12px rgba(62, 39, 35, 0.22)',
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
}
