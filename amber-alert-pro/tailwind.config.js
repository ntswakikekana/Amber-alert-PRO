module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],  // Ensure Tailwind scans your components
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
