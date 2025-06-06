import { Link } from 'react-router-dom';
import MR from "/react-1.svg";
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full h-20 flex items-center justify-between px-4 z-10 text-standard text-cyan-500 bg-black">
      <ul className="float-left">
        <li>
          <span className="flex items-center gap-4 font-bold round">
            <img src={MR} alt="Logo" className="h-16 dark:bg-white text-white rounded-2xl p-1" />
            Muhammad Ravat
          </span>
        </li>
      </ul>


            {/* Mobile Menu Button */}
            <button className=" text-cyan-500" onClick={toggleMenu} aria-label="Toggle menu">
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
      className={`fixed top-20 right-0 h-screen w-full text-center bg-black transform transition-transform duration-300 ease-in-out z-20 
          ${isMenuOpen ? "right-0" : "right-[-100%]"}`}
      >
      <ul className="flex flex-col space-y-6 p-6">
          <li>
          <Link to="/" className="block py-2 border-b-2 border-cyan-600 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
          </Link>
          </li>
          <li>
          <Link to="/projects" className="block py-2 border-b-2 border-cyan-600 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Projects
          </Link>
          </li>
          <li>
          <Link to="/skills" className="block py-2 border-b-2 border-cyan-600 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Skills
          </Link>
          </li>
      </ul>
    </div>

    {/* Overlay */}
    {isMenuOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setIsMenuOpen(false)} />
    )}

    </nav>
  )
}
export function HomeNavbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
    return(
        <nav className="fixed w-full h-20 flex items-center justify-between px-4 z-10 text-standard text-cyan-500 bg-black">
        <ul className='float-left'>
            <li><span to="/" className="flex items-center gap-4 font-bold round" onClick={toggleMenu}>
              <img src={MR} alt="Logo" className='h-16 dark:bg-white text-white rounded-2xl  p-1 ' /> Muhammad Ravat</span>
            </li>
        </ul>
      {/* Mobile Menu Button */}
      <button className=" text-cyan-500" onClick={toggleMenu} aria-label="Toggle menu">
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
      className={`fixed top-20 right-0 h-screen w-full text-center bg-black transform transition-transform duration-300 ease-in-out z-20 
          ${isMenuOpen ? "right-0" : "right-[-100%]"}`}
      >
      <ul className="flex flex-col space-y-6 p-6">
          <li>
          <Link to="/" className="block py-2 border-b-2 border-cyan-600 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
          </Link>
          </li>
          <li>
          <Link to="/projects" className="block py-2 border-b-2 border-cyan-600 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Projects
          </Link>
          </li>
          <li>
          <Link to="/skills" className="block py-2 border-b-2 border-cyan-600 hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Skills
          </Link>
          </li>
      </ul>
    </div>

    {/* Overlay */}
    {isMenuOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setIsMenuOpen(false)} />
    )}
    </nav>
    )
}