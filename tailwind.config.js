/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        fg: '#e0e0e0',
        accent: '#d97706',
        muted: '#666666',
        link: '#33ff33',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'Fira Code', 'monospace'],
        serif: ['IBM Plex Serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
