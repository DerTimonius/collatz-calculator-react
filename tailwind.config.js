/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        darkBlue: '#0B1D51',
        textWhite: 'white',
        textOffWhite: 'rgba(255,255,255,0.65)',
        orange: '#FFC051',
        orangeHover: '#FF8262',
        gradient1: '#4148d1',
        gradient2: '#5ffbf1',
        tableBackground: 'rgba(0,0,0,0.1)',
      },
      fontSize: {
        h1: '48px',
        p: '16px',
      },
    },
  },
  plugins: [],
};
