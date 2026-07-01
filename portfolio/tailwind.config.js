/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1220',
          light: '#121A2B',
          border: '#243049',
        },
        paper: {
          DEFAULT: '#F6F3EC',
          dim: '#EDE8DC',
        },
        amber: {
          DEFAULT: '#FF7A3D',
          soft: '#FFA574',
        },
        teal: {
          DEFAULT: '#4FD1C5',
          soft: '#8FE3DA',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
