import Navbar from "../../Components/Navbar/navbar";
const projects = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    description: "Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["JavaScript", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    description: "Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["JavaScript", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    description: "Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["JavaScript", "Express", "MongoDB", "hhnrowf", "nerfe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    description: "Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["JavaScript", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
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
                <h1 className="text-large text-cyan-500 font-bold mb-3">
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