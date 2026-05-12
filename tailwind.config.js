/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#D62828',
          dark: '#A31D1D',
          light: '#FCEAEA',
        },
        courier: {
          ink: '#0f1419',
          muted: '#5c6670',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1280px',
      },
      spacing: {
        page: 'clamp(1.25rem, 5vw, 3rem)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(15, 20, 25, 0.08)',
        lift: '0 24px 56px rgba(15, 20, 25, 0.12)',
      },
      backgroundImage: {
        'mesh-courier':
          'radial-gradient(at 20% 20%, rgba(214,40,40,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(214,40,40,0.06) 0px, transparent 45%), radial-gradient(at 50% 100%, rgba(15,20,25,0.04) 0px, transparent 55%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
