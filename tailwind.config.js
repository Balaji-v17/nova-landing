/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F5F2',
        ink: '#1B1D24',
        accent: '#4F3FF0',
        ember: '#F0A63B',
        slate: '#8B8D98',
        surface: '#101218',
      },
      fontFamily: {
        display: ['"General Sans"', '"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}