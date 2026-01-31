/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        fg: '#f5f5f5',
        accent: '#d4a574',
        muted: '#888888',
        link: '#d4a574',
        secondary: '#a0a0a0',
        subtle: '#666666',
      },
      fontFamily: {
        sans: ['Verdana', 'Geneva', 'sans-serif'],
        mono: ['Consolas', 'Monaco', 'monospace'],
        display: ['Verdana', 'Geneva', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
