/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: 
           '#2C5364', // Use a single # for the hex code
        
        secondary: '#203a43', // Ensure this is terminated correctly
        third:'#F5F5F5'
      },
      
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

