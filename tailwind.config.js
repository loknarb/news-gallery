module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '480px',
      'tablet': '768px',
      'desktop': '1280px',
      'breakDesktopXS': '1148px',      
      'breakDesktopXXS': '992px',      
    },
    letterSpacing: {
      tight: '-.015em'
    },
    extend: {
      height: {
        'half-screen': '50vh'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
