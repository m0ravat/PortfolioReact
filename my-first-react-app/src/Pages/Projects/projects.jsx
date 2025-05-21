import Navbar from "../../Components/navbar";
import ProjectList from "./projectsList";
import { useState } from "react";
import {useFetch} from "../useFetch";
const Projects = () => {
  const [modalImage, setModalImage] = useState(null);
  const {data: projects, isPending, error} = useFetch("https://jsonbackend-7liy.onrender.com/projects")

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
      {isPending && <div className="text-white text-large">Loading...</div>}
      {error && <div className="text-large pl-20">{ error }</div>}
      {projects && <ProjectList projects = {projects} handleImage={handleImage} />}
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