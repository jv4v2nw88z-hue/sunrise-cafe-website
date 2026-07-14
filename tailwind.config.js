/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // "First light at the griddle" — dark-roast ink, daylight paper, one yolk accent.
        ink: {
          DEFAULT: '#211511',
          deep: '#170E09',
          soft: '#33231A',
        },
        umber: '#5E4530',
        paper: '#F7EFDF',
        crust: '#E7D9BF',
        yolk: {
          DEFAULT: '#F3A712',
          deep: '#C97F04',
        },
        brick: '#A03E22',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Arial Black', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        ticket: '0 2px 0 0 rgba(33, 21, 17, 0.9)',
        lift: '0 16px 40px -16px rgba(23, 14, 9, 0.35)',
      },
      maxWidth: {
        page: '76rem',
      },
      letterSpacing: {
        caps: '0.18em',
      },
    },
  },
  plugins: [],
}
