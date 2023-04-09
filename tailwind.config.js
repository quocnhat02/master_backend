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
        'secondary-gradient': `linear-gradient(
          90deg,
          rgba(86, 113, 244, 1) 0%,
          rgba(45, 238, 200, 1) 18%,
          rgba(187, 75, 227, 1) 85%
        );`,
      },
    },
  },
  plugins: [],
};
