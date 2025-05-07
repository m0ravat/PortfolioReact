import PropTypes from 'prop-types';

const ProjectList = ({projects, handleImage}) => {
    return(
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2">
        {projects.map((project, index) => (
            
            <div key={index}
            className="w-full hover:glow-cyan h-[30rem]  scrollable-container mb-4 border-4 border-slate-200 bg-gray-800 rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover border-b-4 border-b-slate-200
                cursor-pointer"
              onClick={() => handleImage(project.image)}
              />
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
        live: PropTypes.string, // optional
      })
    ).isRequired,
    handleImage: PropTypes.func.isRequired
};
  
export default ProjectList