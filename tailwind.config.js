/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ms: '320px',
      ml: '425px',
      ff: '540px',
      sm: '640px',
      tb: '768px',
      lg: '1024px',
      xl: '1280px',
      dxl: '1536px',
      txl: '1920px',
    },
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}


