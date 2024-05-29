import React from "react";

function ProjectCard({ project }) {
    return (
        <div className="w-80 h-fixed mb-8 mx-auto">
            <div className="bg-gray-300 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 flex justify-center">
                    <a href={project.whiteboard} target="_blank" rel="noopener noreferrer">
                        <img 
                            src={project.whiteboard} 
                            alt="Whiteboard" 
                            className="w-72 h-full object-cover rounded-lg"
                        />
                    </a>
                </div>
                <h2 className="text-xl mb-2 text-center">
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline">
                        {project.projectTitle}
                    </a>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">{project.shortDesc}</p>
                <h4 className="text-gray-700 dark:text-gray-300 mb-2 text-center">
                    <a href={project.gitHubRepo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        GitHub Repo
                    </a>
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-bold mb-4 text-center">User Story: {project.userStory}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
