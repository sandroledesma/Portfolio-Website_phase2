import React from "react";
import profileImage from '../files/profileimage.jpg';
import resumePdf from '../files/Alessandro M Ledesma - CV 8.24.pdf'

function Experience() {
    return(
        <div className="container mx-auto pt-18 p-8">
            <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mr-4">
                    <img src={profileImage} alt="Sandro Ledesma" className="w-full h-full object-cover object-top"/>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-1 text-center">Sandro Ledesma</h3>
                <br />
                <a href="https://www.linkedin.com/in/sandroledesma" className="text-blue-500 text-center">www.linkedin.com/in/sandroledesma</a> 
                <a href="https://www.github.com/sandroledesma" className="text-blue-500 text-center">www.github.com/sandroledesma</a>
                <br />
            </div>
            <div className="mt-8 p-1 bg-gray-400 rounded-lg">
                <iframe className="w-auto h-auto border-none" style={{ height: "calc(125vw - 18rem", width: "calc(100vw - 18rem)" }} title="resume" src={resumePdf} />
            </div>
        </div>
    );
}

export default Experience;