/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mr-image': "url('./Components/MR.png')",
      },
      fontSize: {
        small: 'calc(9px + 0.390625vw)', // For small text
        standard: 'calc(15px + 0.390625vw)', // For standard text
        large: 'calc(25px + 0.390625vw)', // For large text
      },
      colors: {
        // Add custom colors for dark mode if needed
        'dark-bg': '#1a1a1a', // Example color
        'dark-text': '#f5f5f5', // Example color
      },
    },
  },
  plugins: [],
}


