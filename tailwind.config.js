/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EAE7E2', // off-white levemente mais escuro/acinzentado
          dark: '#0A0A0A',    // preto quase absoluto
          graphite: '#1F1F1F', // grafite mais profundo
          gold: '#B8935A',     // dourado quente
          champagne: '#B8938A', // rosé/champanhe mais sóbrio
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'fluid-h1': 'clamp(2.5rem, 8vw, 4.5rem)',
        'fluid-h2': 'clamp(1.75rem, 5vw, 3rem)',
        'fluid-body': 'clamp(1rem, 2vw, 1.125rem)',
      },
      animation: {
        'ken-burns': 'kenburns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-2%, -2%)' },
        },
      },
    },
  },
  plugins: [],
}
