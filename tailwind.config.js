/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        select: {
          '0%': { transform: 'rotate(0.0deg) scale(1)' },
          '10%': { transform: 'rotate(14deg) scale(1.1)' },
          '20%': { transform: 'rotate(-8deg) scale(1.1)' },
          '30%': { transform: 'rotate(14deg) scale(1.1)' },
          '40%': { transform: 'rotate(-4deg) scale(1.1)' },
          '50%': { transform: 'rotate(10.0deg) scale(1.1)' },
          '60%': { transform: 'rotate(0.0deg) scale(1.1)' },
          '100%': { transform: 'rotate(0.0deg) scale(1)' },
        },
      },
      animation: {
        'select': 'select 2s linear infinite',
      },
    },
  },
  plugins: [],
}