import React from "react";
import profileImage from '../files/profileimage.jpg';

export default function About() {
    return (
        <div className="text-center">
        <br/>
        <div className="w-64 h-64 rounded-full overflow-hidden mx-auto">
            <img src={profileImage} alt="Sandro Ledesma" className="w-64 h-64 object-cover object-top" />
        </div> 
        <br />
        <h1 className="text-2xl font-bold mb-4">Sandro Ledesma</h1>
        <br />
        <h2 className="text-xl underline">Welcome to my Portfolio!</h2>
        <br />
    </div>
    )
}
