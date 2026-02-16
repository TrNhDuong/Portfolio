/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'slate': '#8892b0',
        'light-slate': '#a8b2d1',
        'white': '#e6f1ff',
        'green': '#64ffda',
        'blue-accent': '#007bff',
        'purple-accent': '#6f42c1',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}
