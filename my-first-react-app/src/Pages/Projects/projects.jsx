import Navbar from "../../Components/navbar";
import ProjectList from "./projectsList";
import { useState } from "react";
const projects = [
  {
    title: "Mosque Learning Management Program",
    image: "/projects/madrasah.png", // Replace with actual image URL
    description: "A project which focuses on querying results from a database while implementing OOP principles",
    github: "https://github.com/m0ravat/MadrasahPro",
  },
  {
    title: "MyNotesToDo (Project Management System)",
    image: "/projects/mynotes.png", // Replace with actual image URL
    description: "An app that allows you to create projects and keep track of tasks to do by storing data in localstorage",
    github: "https://github.com/m0ravat/MyNotesToDo",
    live: "https://www.mynotestodo.com",
  },
  {
    title: "Personal Portfolio",
    image: "/projects/portfolio.png", // Replace with actual image URL
    description: "Personal Portfolio designed to showcase my skills to employers and develop my frontend skills",
    github: "https://github.com/m0ravat/PortfolioReact",
    live: "https://www.moravat.me",
  },
  {
    title: "Weather App",
    image: "/projects/weather.png", // Replace with actual image URL
    description: "Basic project I developed to create a mobile friendly UI and utilise APIs.",
    github: "https://github.com/m0ravat/WeatherApp",
    live: "https://weather-app-steel-mu.vercel.app/",
  },
  {
    title: "CV Generator",
    image: "/projects/cv.png", // Replace with actual image URL
    description: "My first React project which helped me grasp core concepts with forms and state management.",
    github: "https://github.com/m0ravat/CVMaker",
    live: "https://cv-maker-vert-seven.vercel.app/",
  },
  {
    title: "Password Generator",
    image: "/projects/pass.png",
    description: "My first personal Python project which utilises many core concepts to allow people to create strong passwords",
    github: "https://github.com/m0ravat/PasswordGen"
  },
  {
    title: "Calculator App",
    image: "/projects/calc.png",
    description: "My first JavaScript project which utilises string manipulation to create a basic calculator. Used HTML/CSS to create a basic look for it",
    github: "https://github.com/m0ravat/Calculator",
    live: "https://calculator-murex-omega.vercel.app/"
  }
];
const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  const handleImage = (image) => {
    setModalImage(image)
  }
  const closeModal = () => {
    setModalImage(null)
  }
  return (
    <div className="bg-black min-h-screen w-full text-slate-200">
      <Navbar />
      <div className="h-20 w-full px-4 sm:px-10 lg:px-20"></div>
      <h1 className="text-center text-4xl font-bold mb-12">My Projects</h1>
      <ProjectList projects = {projects} handleImage={handleImage} />
      {/* <ProjectList projects = {projects.filter((project) => project.title === "Mosque")} /> */}
      {modalImage && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 text-white bg-gray-700 hover:bg-cyan-500 rounded-full px-2 py-1 z-50"
            >
              ✕
            </button>
            <img src={modalImage} alt="Modal" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;