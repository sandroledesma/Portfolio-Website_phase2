import React, { useState } from "react";
import profileImage from '../files/profileimage.jpg';
import resumePdf from '../files/Sandro Ledesma_CV_August 2024.pdf';
import resumePdf2 from '../files/Sandro Ledesma_CV_NT_2024.pdf';

function Experience() {
    const [isTechnicalOpen, setTechnicalOpen] = useState(false);
    const [isNonTechnicalOpen, setNonTechnicalOpen] = useState(false);

    const toggleSection = (section) => {
        if (section === 'technical') setTechnicalOpen(!isTechnicalOpen);
        if (section === 'nonTechnical') setNonTechnicalOpen(!isNonTechnicalOpen);
    };

    return (
        <div className="container mx-auto pt-18 p-8">
            {/* Profile Image Section */}
            <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mr-4">
                    <img src={profileImage} alt="Sandro Ledesma" className="w-full h-full object-cover object-top"/>
                </div>
            </div>
            
            {/* Name & Links */}
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-1 text-center">Sandro Ledesma</h3>
                <br />
                <a href="https://www.linkedin.com/in/sandroledesma" className="text-blue-500 text-center block">www.linkedin.com/in/sandroledesma</a> 
                <a href="https://www.github.com/sandroledesma" className="text-blue-500 text-center block">www.github.com/sandroledesma</a>
                <br />
            </div>

            {/* Technical Resume Dropdown */}
            <div className="mt-8">
                <button
                    onClick={() => toggleSection('technical')}
                    className="w-full text-left font-bold text-lg bg-gray-200 p-2 rounded-lg hover:bg-gray-300 focus:outline-none"
                >
                    Technical Resume
                </button>
                {isTechnicalOpen && (
                    <div className="bg-white p-4 mt-2 rounded-lg shadow-md" style={{ width: '300%' }}>
                        <iframe 
                            className="w-full h-96 border-none" 
                            title="Technical Resume" 
                            src={resumePdf}
                            style={{ width: '80%', height: '500px' }} 
                        />
                        <a 
                            href={resumePdf} 
                            download="Alessandro_M_Ledesma_Resume_Technical.pdf"
                            className="inline-block px-4 py-2 bg-gray-600 text-black rounded hover:bg-gray-800 transition">
                            Download Technical Resume
                        </a>
                    </div>
                )}
            </div>

            {/* Non-Technical Resume Dropdown */}
            <div className="mt-4">
                <button
                    onClick={() => toggleSection('nonTechnical')}
                    className="w-full text-left font-bold text-lg bg-gray-200 p-2 rounded-lg hover:bg-gray-300 focus:outline-none"
                >
                    Non-Technical Resume
                </button>
                {isNonTechnicalOpen && (
                    <div className="bg-white p-4 mt-2 rounded-lg shadow-md">
                        <iframe 
                            className="w-full h-96 border-none" 
                            title="Non-Technical Resume" 
                            src={resumePdf2}
                            style={{ width: '200%', height: '500px' }}  
                        />
                        <a 
                            href={resumePdf2} 
                            download="Alessandro_M_Ledesma_Resume_NonTechnical.pdf"
                            className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-800 transition">
                            Download Non-Technical Resume
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Experience;
