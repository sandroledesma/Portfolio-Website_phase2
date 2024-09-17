import React from "react";
import LogoName from '../files/Sandro.png';

export default function About() {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="w-full h-full overflow-hidden">
                <img src={LogoName} alt="Sandro Ledesma" className="object-cover object-center mx-auto" />
            </div>
        </div>
    );
}