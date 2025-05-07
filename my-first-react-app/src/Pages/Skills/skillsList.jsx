import PropTypes from 'prop-types';

// Skill PropType shape
const skillPropType = PropTypes.shape({
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
});

export const FrontList = ({ frontend }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    {frontend.map((skill, index) => (
      <div
        key={index}
        className="p-6 bg-gray-800 rounded-lg hover:glow-cyan transform transition-transform hover:scale-105 flex flex-col items-center text-center"
      >
        <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
        <p className="text-gray-400">{skill.desc}</p>
      </div>
    ))}
  </div>
);

FrontList.propTypes = {
  frontend: PropTypes.arrayOf(skillPropType).isRequired,
};

export const BackList = ({ backend }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    {backend.map((skill, index) => (
      <div
        key={index}
        className="p-6 bg-gray-800 rounded-lg hover:glow-cyan transform transition-transform hover:scale-105 flex flex-col items-center text-center"
      >
        <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
        <p className="text-gray-400">{skill.desc}</p>
      </div>
    ))}
  </div>
);

BackList.propTypes = {
  backend: PropTypes.arrayOf(skillPropType).isRequired,
};

export const ToolsList = ({ tools }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {tools.map((skill, index) => (
      <div
        key={index}
        className="p-6 bg-gray-800 rounded-lg hover:glow-cyan transform transition-transform hover:scale-105 flex flex-col items-center text-center"
      >
        <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
        <p className="text-gray-400">{skill.desc}</p>
      </div>
    ))}
  </div>
);

ToolsList.propTypes = {
  tools: PropTypes.arrayOf(skillPropType).isRequired,
};

export const DbList = ({ databases }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    {databases.map((skill, index) => (
      <div
        key={index}
        className="p-6 bg-gray-800 rounded-lg hover:glow-cyan transform transition-transform hover:scale-105 flex flex-col items-center text-center"
      >
        <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
        <p className="text-gray-400">{skill.desc}</p>
      </div>
    ))}
  </div>
);

DbList.propTypes = {
  databases: PropTypes.arrayOf(skillPropType).isRequired,
};

