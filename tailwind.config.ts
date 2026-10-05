import type { Config } from 'tailwindcss';

/**
 * Dimension brand palette — derived from the "D + support hands" logo.
 *   Primary Blue #1687C9 · Deep Navy #063B70 · Light Blue #35A9E0
 *   Soft Blue #EAF6FC · Page #F5F9FC · Border #D9E8F1 · Text #102A43 · Muted #66788A
 *
 * Token names are kept from the previous theme so every page re-skins from here:
 *   navy   → deep navy family
 *   aqua   → light blue (DEFAULT, for use on dark) + primary blue shades
 *   accent → primary blue (CTAs, highlights)
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'system-ui', 'sans-serif']
      },
      colors: {
        navy: {
          DEFAULT: '#063B70',
          950: '#041F3D',
          900: '#062B50',
          800: '#05315E',
          700: '#0B4F8F',
          100: '#D6EAF7',
          50: '#EAF6FC'
        },
        aqua: {
          DEFAULT: '#35A9E0',
          600: '#1687C9',
          700: '#0F6FA8',
          100: '#CFEAF8',
          50: '#EAF6FC'
        },
        accent: {
          DEFAULT: '#1687C9',
          600: '#0F75B0',
          50: '#EAF6FC'
        },
        brand: {
          blue: '#1687C9',
          navy: '#063B70',
          light: '#35A9E0',
          soft: '#EAF6FC',
          deep: '#062B50'
        },
        primary: {
          DEFAULT: '#1687C9',
          dark: '#0F6FA8'
        },
        mist: '#66788A',
        muted: '#66788A',
        paper: '#F5F9FC',
        surface: '#F5F9FC',
        text: '#102A43',
        line: '#D9E8F1',
        border: '#D9E8F1',
        ink: '#102A43'
      },
      boxShadow: {
        soft: '0 1px 2px rgba(6,59,112,0.04), 0 8px 24px rgba(6,59,112,0.06)',
        lift: '0 2px 6px rgba(6,59,112,0.05), 0 20px 44px rgba(6,59,112,0.12)',
        ring: '0 0 0 1px rgba(22,135,201,0.35), 0 18px 40px rgba(22,135,201,0.14)'
      },
      maxWidth: {
        shell: '80rem'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        draw: {
          '0%': { strokeDashoffset: 'var(--dash, 1000)' },
          '100%': { strokeDashoffset: '0' }
        },
        'line-flow': {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-240' }
        },
        'node-pulse': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        draw: 'draw 2.2s cubic-bezier(0.65, 0, 0.35, 1) both',
        'line-flow': 'line-flow 14s linear infinite',
        'node-pulse': 'node-pulse 3.2s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
