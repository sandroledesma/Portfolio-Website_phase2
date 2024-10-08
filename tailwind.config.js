/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.jsx", 
    "./App.jsx",
    "./src/components/About.jsx",
    "./src/components/Blog.jsx",
    "./src/components/Error.jsx",
    "./src/components/Experience.jsx",
    "./src/components/NavBar.jsx",
    "./src/component/Portfolio.jsx",
    "./src/components/Projects.jsx",
    "./src/components/ProjectCard.jsx"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    colors: {
      'black': '#000000',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Helvetica', 'sans-serif']
    }
  },
  plugins: [],
}

