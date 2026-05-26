import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-body)'],
        display: ['var(--font-display)']
      },
      colors: {
        primary: {
          DEFAULT: '#00B4D8',
          dark: '#007A96'
        },
        accent: '#FF6900',
        aqua: '#00B4D8',
        gold: '#FF6900',
        mist: '#64748B',
        surface: '#F8FAFB',
        text: '#0F172A',
        border: '#E2E8F0',
        ink: '#111827'
      },
      boxShadow: {
        glow: '0 0 90px rgba(0, 180, 216, 0.2)'
      },
      fontSize: {
        'xs': ['0.64rem', { lineHeight: '1.4' }],
        'sm': ['0.74rem', { lineHeight: '1.5' }],
        'base': ['0.82rem', { lineHeight: '1.6' }],
        'lg': ['0.92rem', { lineHeight: '1.6' }],
        'xl': ['1rem', { lineHeight: '1.5' }],
        '2xl': ['1.12rem', { lineHeight: '1.4' }],
        '3xl': ['1.26rem', { lineHeight: '1.3' }],
        '4xl': ['1.44rem', { lineHeight: '1.2' }],
        '5xl': ['1.62rem', { lineHeight: '1.15' }],
        '6xl': ['1.8rem', { lineHeight: '1.1' }]
      }
    }
  },
  plugins: []
};

export default config;
