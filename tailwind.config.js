/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors : {
        primary:'#14b8a6',
        dark:'#0f172a',
        pucat: '#64748b',
        red: '#b91c1c'
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

