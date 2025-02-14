import Navbar from "../../Components/Navbar/navbar";
const projects = [
  {
    title: "Mosque Learning Management Program",
    image: "/projects/madrasah.png", // Replace with actual image URL
    description: "A project which focuses on querying results from a database while implementing OOP principles",
    tools: ["Java", "MySQL", "IntelliJ"],
    github: "https://github.com/m0ravat/MadrasahPro",
  },
  {
    title: "MyNotesToDo (Project Management System)",
    image: "/projects/mynotes.png", // Replace with actual image URL
    description: "An app that allows you to create projects and keep track of tasks to do by storing data in localstorage",
    tools: ["JavaScript", "HTML/CSS", "OOP"],
    github: "https://github.com/m0ravat/MyNotesToDo",
    live: "https://www.mynotestodo.com",
  },
  {
    title: "Personal Portfolio",
    image: "/projects/portfolio.png", // Replace with actual image URL
    description: "Personal Portfolio designed to showcase my skills to employers and develop my frontend skills",
    tools: ["React", "TailwindCSS", "Vercel"],
    github: "https://github.com/m0ravat/PortfolioReact",
    live: "https://www.moravat.me",
  },
  {
    title: "Weather App",
    image: "/projects/weather.png", // Replace with actual image URL
    description: "Basic project I developed to create a mobile friendly UI and utilise APIs.",
    tools: ["HTML", "CSS", "JS", "GIPHY API", "VisualCrossing API"],
    github: "https://github.com/m0ravat/WeatherApp",
    live: "https://weather-app-steel-mu.vercel.app/",
  },
  {
    title: "CV Generator",
    image: "/projects/cv.png", // Replace with actual image URL
    description: "My first React project which helped me grasp core concepts with forms and state management.",
    tools: ["React"],
    github: "https://github.com/m0ravat/CVMaker",
    live: "https://cv-maker-vert-seven.vercel.app/",
  },
  {
    title: "Password Generator",
    image: "/projects/pass.png",
    description: "My first personal Python project which utilises many core concepts to allow people to create strong passwords",
    tools: ["Python"],
    github: "https://github.com/m0ravat/PasswordGen"
  },
  {
    title: "Calculator App",
    image: "/projects/calc.png",
    description: "My first JavaScript project which utilises string manipulation to create a basic calculator. Used HTML/CSS to create a basic look for it",
    tools: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/m0ravat/Calculator",
    live: "https://calculator-murex-omega.vercel.app/"
  }
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen w-full text-slate-200">
      <Navbar />
      <div className="h-20 w-full"></div> {/* Spacer for Navbar */}
      <div className="px-4 sm:px-10 lg:px-20"> {/* Responsive padding */}
        <h1 className="text-center text-4xl font-bold mb-12">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2">
          {projects.map((project, index) => (
            <div key={index}
            className="w-full hover:glow-cyan h-[30rem] overflow-y-scroll scrollable-container mb-4 border-4 border-slate-200 bg-gray-800 rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover border-b-4 border-b-slate-200"/>
              <div className="p-4 text-medium">
                <h1 className="text-xl text-cyan-500 font-bold mb-3">
                  {project.title}
                </h1>
                <span className="flex justify-around mb-2">
                  <a href={project.github}
                    className="border-2 border-cyan-500 p-1 rounded-lg hover:bg-cyan-500 hover:text-gray-800 transition-colors">
                    GitHub
                  </a>
                  <a href={project.live}
                    className="border-2 border-cyan-500 p-1 rounded-lg hover:bg-cyan-500 hover:text-gray-800 transition-colors">
                    Live Website
                  </a>
                </span>
                <p className="mb-2">{project.description}</p>
                <p className="text-gray-400 mb-4"> {/* Added margin-bottom (mb-4) */}
                    Tools used:{" "}
                    <span className="flex flex-wrap gap-2"> {/* Wrapper for tools with flex and wrap */}
                        {project.tools.map((tool, i) => (
                        <a
                            key={i}
                            href="#"
                            className="border-2 border-cyan-500 p-1 rounded-lg hover:bg-cyan-500 hover:text-gray-800 transition-colors"
                        >
                            {tool}
                        </a>
                        ))}
                    </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;