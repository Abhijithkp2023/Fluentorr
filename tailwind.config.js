/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        black: 900,
      },
      colors: {
        customYellow: '#FFFED3',
        skyBlue: '#96C9F4',
        logoBlue: '#050C9C',
        fontColor: '#333333',
        bggray: '#F0F2F4',
      },
    },
  },
  plugins: [],
}
