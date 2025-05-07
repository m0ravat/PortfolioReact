import Navbar from "../../Components/navbar"
import { DbList, BackList, FrontList, ToolsList } from "./skillsList";
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
            <FrontList frontend={frontend}/>

                {/* Backend Skills */}
                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Backend</h2>
                <BackList backend={backend}/>

                {/* Databases */}
                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Databases</h2>
                <DbList databases={databases}/>

                {/* Tools */}
                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Tools</h2>
                <ToolsList tools={tools}/>
            </div>
        </div>
    )
}