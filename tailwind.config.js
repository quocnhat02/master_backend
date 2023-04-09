/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': `linear-gradient(
          90deg,
          rgba(244, 86, 232, 1) 0%,
          rgba(154, 253, 29, 1) 85%,
          rgba(69, 252, 198, 1) 100%
        );`,
      },
    },
  },
  plugins: [],
};
