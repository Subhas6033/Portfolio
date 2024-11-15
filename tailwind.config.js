/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        city: '#ff40a1',
        ski: '#279eb2',
        beach: '#fa7f67',
        camping: '#00b97d',
      },

      gradientColorStops: {
        city: ['#ff73b9', '#ff40a1'],
        ski: ['#47c2d7', '#279eb2'],
        beach: ['#fb9b88', '#f86647'],
        camping: ['#00db93', '#00b97d'],
      },

      width: {
        '98': '26rem',
        '99': '28rem',
        '100': '30rem',
        '101': '32rem',
        '102': '34rem',
        '103': '36rem',
        '104': '38rem',
        '105': '40rem',
        '106': '42rem',
        '107': '44rem',
        '108': '46rem',
      },

      boxShadow: {
        '3xl': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
        'line': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
        'simple': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);',
      },
      fontFamily: {
        'cursive': ['"Edu AU VIC WA NT Pre", cursive'],
        'cursive2': ['"Dancing Script", cursive'],
        'kode': '"Kode Mono", monospace',
      },

    },
  },
  plugins: [

  ],
}