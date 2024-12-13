/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A3FF',
          dark: '#0080FF',
          light: '#66C4FF'
        },
        secondary: {
          DEFAULT: '#7000FF',
          dark: '#5C00CC',
          light: '#9B4DFF'
        },
        background: {
          light: '#FAFBFF',
          dark: '#080B1A'
        },
        surface: {
          light: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(8, 11, 26, 0.9)'
        },
        text: {
          light: '#1A1A1A',
          dark: '#F8F9FA'
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.85)',
          dark: 'rgba(8, 11, 26, 0.85)'
        }
      },
      spacing: {
        section: '6rem',
        subsection: '4rem',
        element: '2rem'
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'spin-slow': 'spin 6s linear infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scale': 'scale 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite'
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px theme(colors.primary.DEFAULT / 50%)',
            filter: 'brightness(1)'
          },
          '50%': {
            boxShadow: '0 0 40px theme(colors.primary.DEFAULT / 75%)',
            filter: 'brightness(1.2)'
          }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'scale': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.6',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px'
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.DEFAULT), 0 0 20px theme(colors.primary.DEFAULT)',
        'neon-lg': '0 0 10px theme(colors.primary.DEFAULT), 0 0 40px theme(colors.primary.DEFAULT)',
        'glow': '0 0 20px theme(colors.primary.DEFAULT / 50%), 0 0 40px theme(colors.primary.DEFAULT / 25%)',
        'glow-lg': '0 0 40px theme(colors.primary.DEFAULT / 75%), 0 0 80px theme(colors.primary.DEFAULT / 35%)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 32px rgba(255, 255, 255, 0.05)'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};