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
        <h2 className="underline decoration-dotted">Welcome to my Portfolio!</h2>
        <br />
        <p className="text-balance">
            Utilizing over a decade of Product and Category Leadership experience across diverse industries, 
            I'm currently advancing my skills through the Software Engineering bootcamp at Flatiron School, 
            focusing on a transition to Technical Product Management. With a background spanning the entire 
            product lifecycle, from development to maturity and decline, I'm driven by a passion for innovation. 
            My objective is to apply my extensive expertise in Product, alongside strategic and analytical skills, 
            to effect meaningful and adaptable change in the tech space.
        </p>
    </div>
    )
}
