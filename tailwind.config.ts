import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'retro-pink': '#FF1493',
        'retro-pink-light': '#FF69B4',
        'retro-pink-dark': '#C71585',
        'neon-pink': '#FF10F0',
        'neon-blue': '#00F0FF',
        'neon-green': '#39FF14',
        'arcade-black': '#0A0A0A',
        'arcade-gray': '#1A1A1A',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'retro': ['"Orbitron"', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 10px #FF1493, 0 0 20px #FF1493, 0 0 30px #FF1493',
        'neon-blue': '0 0 10px #00F0FF, 0 0 20px #00F0FF',
        'pixel': '4px 4px 0px rgba(0, 0, 0, 0.5)',
        'pixel-pink': '4px 4px 0px #FF1493',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 0.5s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
