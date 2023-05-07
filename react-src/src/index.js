import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/projects/:id',
        element: <Projects  />
    },
    {
        path: '/projects/all',
        element: <AllProjects />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
