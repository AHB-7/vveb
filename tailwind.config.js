/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          to: { 'background-position': '200% center' },
        },
      },
      colors: {
        brand: {
          50: '#ecfffe',
          100: '#cffefd',
          200: '#a5fbfc',
          300: '#66f6fa',
          400: '#21e8ef',
          500: '#05cbd5',
          600: '#07a2b3',
          700: '#0d8191',
          800: '#156775',
          900: '#134b57',
          950: '#083944',
        },
      },
    },
  },
  plugins: [],
}
