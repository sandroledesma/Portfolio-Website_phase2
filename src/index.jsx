//Vite
import React from 'react';
import ReactDOM from 'react-dom/client';

//React Router
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

//Tailwind CSS
import './index.css';


//Components
import App from './App.jsx';
import About from './components/About.jsx';
import Blog from './components/Blog.jsx';
import Error from './components/Error.jsx';
import Experience from './components/Experience.jsx';
import NavBar from './components/NavBar.jsx';
import Projects from './components/Projects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "experience",
        element: <Experience />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "projects",
        element: <Projects />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );
