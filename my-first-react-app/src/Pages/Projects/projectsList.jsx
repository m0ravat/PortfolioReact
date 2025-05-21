import PropTypes from 'prop-types';

const ProjectList = ({projects, handleImage}) => {
  return (
    <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full hover:glow-cyan h-auto scrollable-container mb-4 border-4 border-slate-200 bg-gray-800 rounded-lg overflow-hidden transform transition-transform hover:scale-105"
        >
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-40 object-cover border-b-4 border-b-slate-200 cursor-pointer"
            onClick={() => handleImage(project.image)}
          />
          <div className="p-4 text-medium">
            <h1 className="text-xl text-cyan-500 font-bold mb-3">{project.title}</h1>

            <span className="flex justify-around mb-2">
              <a
                href={project.github}
                className="border-2 border-cyan-500 p-1 rounded-lg hover:bg-cyan-500 hover:text-gray-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href={project.live || "#"}
                className="border-2 border-cyan-500 p-1 rounded-lg hover:bg-cyan-500 hover:text-gray-800 transition-colors"
              >
                Live Website
              </a>
            </span>

            <p className="mb-3 text-gray-300">{project.description}</p>

            {/* Languages */}
            <div className="mb-2">
              <h2 className="text-sm font-semibold text-cyan-400">Languages:</h2>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.lang.map((language, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs bg-gray-700 text-cyan-300 rounded-md">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            {project.frameworks && project.frameworks.length > 0 && (
              <div className="mb-2">
                <h2 className="text-sm font-semibold text-cyan-400">Frameworks:</h2>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.frameworks.map((framework, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-gray-700 text-cyan-300 rounded-md">
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools */}
            {project.tools && project.tools.length > 0 && (
              <div className="mb-2">
                <h2 className="text-sm font-semibold text-cyan-400">Tools:</h2>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-gray-700 text-cyan-300 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Database and Deployment */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <h2 className="text-sm font-semibold text-cyan-400">Deployed on:</h2>
                <span className="text-xs text-gray-300">{project.deployed}</span>
              </div>

              {project.db && (
                <div>
                  <h2 className="text-sm font-semibold text-cyan-400">Database:</h2>
                  <span className="text-xs text-gray-300">{project.db}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        lang: PropTypes.arrayOf(PropTypes.string).isRequired,
        tools: PropTypes.arrayOf(PropTypes.string),
        db: PropTypes.string,
        deployed: PropTypes.string.isRequired,
        frameworks: PropTypes.arrayOf(PropTypes.string),
        live: PropTypes.string, // optional
      })
    ).isRequired,
    handleImage: PropTypes.func.isRequired
};
  
export default ProjectList