import Navbar from "../../Components/Navbar/navbar"
export default function Skills(){
    const frontend=[
        {
            img:"/skills/frontend/html.svg",
            name:"HTML",
            desc:"Leading markup language for defining website structure",
        },
        {
            img:"/skills/frontend/css.svg",
            name:"CSS",
            desc:"Style sheet language for creating intuitive GUIs",
        },
        {
            img:"/skills/frontend/tailwind.svg",
            name:"Tailwind CSS",
            desc: "CSS framework to make responsive design easier and quicker",
        },
        {
            img:"/skills/frontend/react.svg",
            name:"React",
            desc:"Component based library used for creating large scale UIs.",
        },
    ];
    const backend =[
        {
            img: "/skills/backend/java.svg",
            name: "Java",
            desc: "Object Oriented Programming Language",
        },
        {
            img: "/skills/backend/js.svg",
            name:"JavaScript",
            desc: "Leading language for implementing web functionality"
        },
        {
            img:"/skills/backend/node.svg",
            name:"Node.js",
            desc:"JavaScript runtime",
        },
        {
            img:"/skills/backend/express.svg",
            name:"Express",
            desc:"Backend framework for JavaScript applications"
        },
    ];
    const databases = [
        {
            img:"/skills/db/mysql.svg",
            name:"MySQL",
            desc:"Relational Database",
        },
        {
            img:"/skills/db/mongo.svg",
            name:"MongoDB",
            desc:"NoSQL Database",
        },
    ];
    const tools =[
        {
            img:"/skills/tools/vercel.svg",
            name:"Vercel",
            desc:"Used for deploying web applications"
        },
        {
            img:"/skills/tools/draw.io.svg",
            name:"draw.io",
            desc:"Used for creating logical ERDs for optimized database structure",
        },
        {
            img:"/skills/tools/github.svg",
            name:"GitHub",
            desc:"Used for Version Control & collabaration",
        },
        {
            img:"/skills/tools/koyeb.jpeg",
            name:"Koyeb",
            desc:"Used for deploying Express applications",
        }
    ];
    return(
        <div className="bg-black min-h-screen w-full text-slate-200 pb-12">
            <Navbar />
            <div className="h-20 w-full"></div> {/* Spacer for Navbar */}
            <div className="px-4 sm:px-10 lg:px-20"> {/* Responsive padding */}
            <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Frontend</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {frontend.map((skill, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-lg hover:glow-cyan transform transition-transform hover:scale-105 flex flex-col items-center text-center">
                            <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4" /> {/* 32x32 pixels */}
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-gray-400">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Backend Skills */}
                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Backend</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {backend.map((skill, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-lg hover:glow-cyan transform transition-transform hover:scale-105 flex flex-col items-center text-center">
                            <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4" /> {/* 32x32 pixels */}
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-gray-400">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Databases */}
                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Databases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {databases.map((skill, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-lg hover:glow-cyan transform transition-transform hover:scale-105 flex flex-col items-center text-center">
                            <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4" /> {/* 32x32 pixels */}
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-gray-400">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tools */}
                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tools.map((skill, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-lg hover:glow-cyan transform transition-transform hover:scale-105 flex flex-col items-center text-center">
                            <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4" /> {/* 32x32 pixels */}
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-gray-400">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}