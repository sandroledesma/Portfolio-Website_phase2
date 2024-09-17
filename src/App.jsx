import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

//Components
import NavBar from './components/NavBar';

// TailwindCSS
import './index.css';

function App() {
  return (
    <div className="bg-black">
      <header><NavBar /></header>
          <main>
              <Outlet />
          </main>
    </div>
  );
}

export default App;
