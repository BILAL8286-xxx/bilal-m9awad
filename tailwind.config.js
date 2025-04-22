/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B0F1A',
          dark: '#070A12',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B3BE',
          muted: '#9CA3AF',
        },
        accent: {
          purple: '#B14EFF',
          pink: '#FF4E9F',
          neon: '#7B2FE0',
          violet: '#5D1DB1',
          yellow: '#FFB800',
        },
        border: '#1F2937',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'],
      },
      backgroundImage: {
        'tech-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B14EFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};