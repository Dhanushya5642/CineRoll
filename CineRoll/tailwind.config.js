module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "other": {'min': '340px', 'max': '1400px',
          }
        },
        colors: {
          darkbg: '#334155',
        },
        borderWidth: {
          3: '3px'
        }
      },
    },
    plugins: [],
  }