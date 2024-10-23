module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans all files in the src folder for classes
    './public/index.html',        // Scans the index.html file
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#f8f9fa',
      },
      fontFamily: {
        primary: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
