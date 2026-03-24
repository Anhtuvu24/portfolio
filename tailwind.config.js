/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#050810',
          900: '#080d1a',
          800: '#0d1526',
          700: '#121e34',
          600: '#1a2a44',
        },
        forest: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        star: {
          100: '#f0f4ff',
          200: '#c7d4f8',
          300: '#93aef0',
          400: '#6b90e8',
        },
        moss: {
          400: '#86efac',
          500: '#4ade80',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.8s ease forwards',
        'slideIn': 'slideIn 0.6s ease forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'meteor': 'meteor 8s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(74, 222, 128, 0.6)' },
        },
        meteor: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateX(-500px) translateY(500px)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
