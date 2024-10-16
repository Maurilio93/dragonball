// tailwind.config.js
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      'primary-blue': '#001E23',
      'secondary-gray': '#868686',
      'secondary-green': '#C1FF72',
      'blurred-glass': '#94B7BD',
      'light-blue-shadow': '#01282F',
      'dark-blue-shadow': '#01181B',
      'hover-buttons-shadow': '#FF7272',
      'activated-card': '#00333B',
    },
    boxShadow: {
      card: '4px 4px 8px #01181b, -4px -4px 8px #01282f;',
      'card-click': 'inset 4px 4px 8px #01181b, inset -4px -4px 8px #01282f',
    },
    fontFamily: {
      nowalt: ['NowAlt', 'sans-serif'],
      now: ['Now', 'sans-serif'],
    },
  },
};
export const plugins = [require('@tailwindcss/forms')];
