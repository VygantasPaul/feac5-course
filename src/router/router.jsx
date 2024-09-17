import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.jsx';
import UserList from '../pages/UserList/UserList.jsx';
import AboutUs from "../pages/AboutUs/AboutUs.jsx";
import UserProfile from "../components/UserProfile/UserProfile.jsx";
import Services from '../pages/Services/Services.jsx';
import ServicePage
    from "../pages/Services/ServicePage.jsx";
import Login
    from "../pages/Login/Login.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/users',
        element: <UserList />,
    },
    {
        path: '/user/:userId',
        element: <UserProfile />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/service/:serviceId',
        element: <ServicePage />,
    },
    {
        path: '/about-us',
        element: <AboutUs />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
