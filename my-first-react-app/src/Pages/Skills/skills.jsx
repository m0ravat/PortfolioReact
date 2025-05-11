import Navbar from "../../Components/navbar"
import useFetch from "../useFetch";
import { DbList, BackList, FrontList, ToolsList } from "./skillsList";

export default function Skills() {
    const { data: tools, isPending: toolsPending, error: toolsError } = useFetch("http://localhost:8000/tools");
    const { data: frontend, isPending: frontendPending, error: frontendError } = useFetch("http://localhost:8000/frontend");
    const { data: backend, isPending: backendPending, error: backendError } = useFetch("http://localhost:8000/backend");
    const { data: databases, isPending: databasesPending, error: databasesError } = useFetch("http://localhost:8000/databases");

    return (
        <div className="bg-black min-h-screen w-full text-slate-200 pb-12">
            <Navbar />
            <div className="h-20 w-full"></div> {/* Spacer for Navbar */}
            <div className="px-4 sm:px-10 lg:px-20"> {/* Responsive padding */}

                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Frontend</h2>
                {frontendPending && <div className="text-white text-large">Loading...</div>}
                {frontend && <FrontList frontend={frontend} />}
                {frontendError && <p className="text-red-500">{frontendError}</p>}

                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Backend</h2>
                {backendPending && <div className="text-white text-large">Loading...</div>}
                {backend && <BackList backend={backend} />}
                {backendError && <p className="text-red-500">{backendError}</p>}

                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Databases</h2>
                {databasesPending && <div className="text-white text-large">Loading...</div>}
                {databases && <DbList databases={databases} />}
                {databasesError && <p className="text-red-500">{databasesError}</p>}

                <h2 className="text-large text-cyan-500 text-center border-b-2 border-cyan-300 pb-2 font-semibold mb-6">Tools</h2>
                {toolsPending && <div className="text-white text-large">Loading...</div>}
                {tools && <ToolsList tools={tools} />}
                {toolsError && <p className="text-red-500">{toolsError}</p>}

            </div>
        </div>
    );
}
