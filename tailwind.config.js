/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeInUp 1s ease-out forwards',
        'fade-left': 'fadeInLeft 1s ease-out forwards',
        'fade-right': 'fadeInRight 1s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'slide-up': 'slideInFromBottom 0.8s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};