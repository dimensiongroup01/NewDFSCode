import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif']
      },
      colors: {
        navy: {
          DEFAULT: '#10284a',
          950: '#071427',
          900: '#0b1d36',
          700: '#1b3a63',
          50: '#eef3f9'
        },
        aqua: {
          DEFAULT: '#00B4D8',
          600: '#0096B7',
          700: '#007A96',
          50: '#e8f7fb'
        },
        accent: {
          DEFAULT: '#FF6900',
          600: '#e25c00',
          50: '#fff3ea'
        },
        primary: {
          DEFAULT: '#00B4D8',
          dark: '#007A96'
        },
        gold: '#FF6900',
        mist: '#64748B',
        paper: '#F6F7F9',
        surface: '#F6F7F9',
        text: '#0F172A',
        line: '#E3E8EF',
        border: '#E3E8EF',
        ink: '#1E293B'
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,40,74,0.04), 0 8px 24px rgba(16,40,74,0.06)',
        lift: '0 2px 4px rgba(16,40,74,0.04), 0 18px 40px rgba(16,40,74,0.12)'
      },
      maxWidth: {
        shell: '80rem'
      }
    }
  },
  plugins: []
};

export default config;
