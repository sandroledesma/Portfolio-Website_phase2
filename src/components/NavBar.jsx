import React from "react";
import { Link } from "react-router-dom";

// Create a <NavBar> that links to About.jsx, Experience.jsx and Projects.jsx
function NavBar() {
    return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 h-20 z-10 flex justify-center dark:bg-blue-900">
        <ul className="flex space-x-4 text-white">
            <li className="inline-block">
                <button className="bg-black-500 hover:bg-black-600 active:bg-black-700 focus:outline-none 
                    focus:ring focus:ring-black-300"><Link to="/">Home</Link></button>
            </li>
            <li className="inline-block">
                <button className="bg-black-500 hover:bg-black-600 active:bg-black-700 focus:outline-none 
                    focus:ring focus:ring-black-300"><Link to="/experience">Experience</Link></button>
            </li>
            <li className="inline-block">
                <button className="bg-black-500 hover:bg-black-600 active:bg-black-700 focus:outline-none 
                    focus:ring focus:ring-black-300"><Link to="/blog">Blog</Link></button>
            </li>
            <li className="inline-block">
                <button className="bg-black-500 hover:bg-black-600 active:bg-black-700 focus:outline-none 
                    focus:ring focus:ring-black-300"><Link to="/projects">Project Request</Link></button>
            </li>
            <li className="inline-block">
                <button className="bg-black-500 hover:bg-black-600 active:bg-black-700 focus:outline-none 
                    focus:ring focus:ring-black-300"><Link to="/portfolio">Portfolio</Link></button>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;
