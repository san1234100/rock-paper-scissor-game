/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:"#333A73",
        midBlue:"#387ADF",
        lightBlue:"#50C4ED",
        yellow:"#FBA834",
      }
    },
  },
  plugins: [],
}

