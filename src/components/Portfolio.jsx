import React from "react";
import { useState, useEffect} from "react";
import ProjectCard from "./ProjectCard";

function Portfolio () {

    const [ portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/completedProjects")
        .then(response => response.json())
        .then(data => setPortfolio(data))
    }, []);

    return (
        <div className="p-8 bg-black">
            <h2 className="text-2xl font-bold mb-8 text-center">Completed Projects</h2>
            <div className="grid grid-cols-2 gap-8">
                {portfolio.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;