import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#FCB536',
          600: '#E6A020',
          700: '#CC8A10',
          800: '#B37400',
          900: '#995F00',
        },
        dark: {
          50: '#4a4a5a',
          100: '#3a3a4a',
          200: '#2e2e3e',
          300: '#242435',
          400: '#1c1c2e',
          500: '#161626',
          600: '#121220',
          700: '#0e0e1a',
          800: '#0a0a14',
          900: '#06060e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FCB536 0%, #FFD966 50%, #E6A020 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, #FCB536 0%, #FFD966 100%)',
        'dark-gradient': 'linear-gradient(180deg, #161626 0%, #1c1c2e 50%, #242435 100%)',
        'radial-gold': 'radial-gradient(ellipse at center, rgba(252,181,54,0.12) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(252,181,54,0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(252,181,54,0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
