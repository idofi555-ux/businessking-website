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
          DEFAULT: '#D4A853',
          50: '#FBF5E8',
          100: '#F5E8C8',
          200: '#EDDA9F',
          300: '#E3C876',
          400: '#D4A853',
          500: '#D4A853',
          600: '#BF933A',
          700: '#A67D2E',
          800: '#8C6823',
          900: '#735418',
        },
        background: '#162B22',
        surface: '#1D3A2C',
        elevated: '#254A36',
        primary: '#F5F5F7',
        secondary: '#8B8FA3',
        tertiary: '#5C6070',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.06)',
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
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
