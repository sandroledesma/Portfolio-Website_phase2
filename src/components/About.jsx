import React from "react";
import LogoName from '../files/Sandro.png';

export default function About() {
    return (
        <div className="bg-black text-center">
        <br/>
        <div className="w-full h-full overflow-hidden mx-auto">
            <img src={LogoName} alt="Sandro Ledesma" className="w-128 h-128 object-cover object-top" />
        </div> 
        <br />
        {/* <h1 className="text-2xl font-bold mb-4">Sandro Ledesma</h1>
        <br />
        <h2 className="text-xl underline">Welcome to my Portfolio!</h2>
        <br /> */}
    </div>
    )
}
