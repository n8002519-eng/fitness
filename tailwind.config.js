/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00FF66',
          400: '#34d399',
          500: '#00FF66',
          600: '#00dd55',
          glow: 'rgba(0, 255, 102, 0.4)',
        },
        dark: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#111111',
          800: '#171717',
          750: '#1f1f1f',
          700: '#262626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 102, 0.35)',
        'neon-strong': '0 0 35px rgba(0, 255, 102, 0.65)',
        'neon-sm': '0 0 10px rgba(0, 255, 102, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

