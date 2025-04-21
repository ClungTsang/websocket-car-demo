/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        active: '#1c1c1c',
        navBg: '#1c1c1c',
        hover: '#000000',
        primary: '#d7174a'
      },
      spacing: {
        footerHeight: '80px',
        iconSize: '50px',
        navHeight: '60px',
        sidebarWidth: '80px',
        navWidth: '60px',
        testWidth: '500px',
        testOffset: '540px'
      },
      transitionDuration: {
        DEFAULT: '300ms'
      }
    }
  },
  plugins: []
}
