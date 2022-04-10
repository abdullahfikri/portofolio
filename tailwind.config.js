module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        med: '#64748b',
        alter: '#00C9B0'
      },
      screen: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
