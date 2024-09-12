/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors:{
        'hunt1': 'rgb(12, 12, 12)',
        'hunt2': 'rgb(72, 30, 20)',
        'hunt3': 'rgb(155, 57, 34)',
        'hunt4': 'rgb(225, 0, 51)',
        'hunt5': 'rgb(245, 237, 237)',
        'hunt6': 'rgb(37, 25, 28)',
        'hunt7': 'rgb(25, 27, 31)',
        'hunt8': 'rgb(37, 39, 42)',
      },
      boxShadow:{
        'full': '0 0 15px 5px rgba(0, 0, 0, 0.3)',
      },
      fontFamily:{
        'karla': '"Karla", sans-serif',
        'dm': '"DM Sans", sans-serif',
        'tajawal' : '"Tajawal", sans-serif',
        'handjet': '"Handjet", sans-serif',
        'pixelify': '"Pixelify Sans", sans-serif',
      },
      zIndex:{
        '5': '5',
        '35': '35',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        spinSlow:{
          'from': { transform: 'rotate(0deg) translateX(225px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(225px) rotate(-360deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, 
        },
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
        marquee2: 'marquee2 5s linear infinite',
        marquee3: 'marquee3 30s linear infinite',
        marquee4: 'marquee4 30s linear infinite',
        spinSlow: 'spinSlow 10s linear infinite',  
        wave: 'wave 2s steps(2, jump-both) infinite',
      },
      textShadow:{
        'custom-hunt': '2px 2px 4px rgba(225, 0, 51)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

