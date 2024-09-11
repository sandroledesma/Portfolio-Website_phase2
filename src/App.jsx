import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

//Components
import NavBar from './components/NavBar';

// TailwindCSS
import './index.css';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";

function App() {

  const [ dark, setDark ] = useState();

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <div className="bg-black">
      <header><NavBar /></header>
      <main>
        <Outlet />
      </main>
      {/* <div className="bg-yellow-100 dark:bg-blue-900">
        <button onClick={() => darkModeHandler()}>
          {
            dark && <IoSunny />
          }
          {
            !dark && <IoMoon/>
          }
        </button> 
      </div> */}
    </div>
  );
}

export default App;
