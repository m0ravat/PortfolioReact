import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import MR from "/react-1.svg";
export default function Navbar(){
    return(
        <nav className="fixed w-full h-20 flex items-center justify-between px-4 z-10 text-standard text-cyan-500 bg-black">
            <ul className='float-left'>
            <li><Link to="/" className="flex items-center gap-4 font-bold round"><img src={MR} alt="Logo" className='h-16 dark:bg-white text-white rounded-2xl  p-1 ' /> Muhammad Ravat</Link></li>
            </ul>
            <ul className="flex space-x-10  max-[1100px]:hidden">
            <li><ScrollLink to="home" smooth={true} duration={500}>Overview</ScrollLink></li>
            <li><ScrollLink to="projects" smooth={true} duration={500}>Coding History</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
            <ul className="flex space-x-[10%] max-[1100px]:hidden right-0 pr-16">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link>Skills</Link></li>
            </ul>
        </nav>
    )
}