/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf7fb',
          100: '#f3edf6',
          200: '#e9dced',
          300: '#d8c0df',
          400: '#c297cd',
          500: '#A52C67',
          600: '#8f2355',
          700: '#7A264C',
          800: '#651e3e',
          900: '#541a33',
        },
        secondary: {
          50: '#f9f6f8',
          100: '#f2edf0',
          200: '#e6dae1',
          300: '#d4bec9',
          400: '#bd97a8',
          500: '#3F1127',
          600: '#380e22',
          700: '#2f0c1d',
          800: '#260a18',
          900: '#1f0815',
        },
        accent: {
          50: '#fefbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#D4AF37',
          600: '#b8860b',
          700: '#92600a',
          800: '#78500f',
          900: '#654213',
        },
        text: {
          primary: '#7A264C',
          secondary: '#65364F',
          light: '#9B5C7A',
          dark: '#5D1D3A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #A52C67 0%, #3F1127 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #8f2355 0%, #2f0c1d 100%)',
        'gradient-primary-light': 'linear-gradient(135deg, #c297cd 0%, #bd97a8 100%)',
      }
    },
  },
  plugins: [],
}