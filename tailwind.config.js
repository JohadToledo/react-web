/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   'white': '#FBF7FF',
      //   'purple': '#C6B9F8',
      //   
      //   'teal': '#00C89B',
      //   'blue': '#2D909C',
      //   'silver': '#DEF5F8',
      //   'indigo50': '#9182EC',
      //   'squash': '#00455D',
      //   'indigo900':'#312e81',
      //   'indigo950': '#172554',
  
        transparent: 'transparent',
        current: 'currentColor',
        'bordo':"#6E2D62",
        'red':'#A74167',
        'lorange':'#D56262',
        'orange':'#F48E5A',
        'orayellow':'#FFC25A',
        'yellow':'#F9F871',
        'lblue':'#5B4F95',

        'petroleo':'#27617C',
        'darkpetro': '#243C58',
        'indigo': '#1b1b32',
        'lightindi':'#1b1b32d7',
        'cel': '#328899',
        'darkgrey':'#484660',
        'aqua': '#83D6BB',
        'card': '#2b2a4d',
        'lightcard':'#2d2d53',
        'bg-dark': '#0e1016'
      },
      fontFamily: {
        'display': 'Inter',
        'displayy':['-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'],
        'body': "Open Sans",
      },
    extend: {},
  },
  plugins: []
}
