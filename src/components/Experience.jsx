import React from "react";
import profileImage from '../files/profileimage.jpg';
import resumePdf from '../files/Alessandro M Ledesma - CV 8.24.pdf'

function Experience() {
    return(
        <div className="flex items-center justify-center">
            <div className="flex items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mr-4">
                    <img src={profileImage} alt="Sandro Ledesma" className="w-full h-full object-cover object-top"/>
                </div>
            </div>
            <div className="ml=4">
                <h3 className="text-2xl font-bold mb-1">Sandro Ledesma</h3>
                <a href="https://www.linkedin.com/in/sandroledesma" className="text-blue-500">www.linkedin.com/in/sandroledesma</a> 
                <br />
                <a href="https://www.github.com/sandroledesma" className="text-blue-500">www.github.com/sandroledesma</a>
                <br />
                <a href={resumePdf} className="text-blue-500">Download Resume</a>
            </div>
        </div>
    );
}

export default Experience;