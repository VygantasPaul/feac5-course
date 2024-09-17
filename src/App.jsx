import React
    from "react";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import HomePage
    from "./pages/HomePage/HomePage";
import UserList
    from "./pages/UserList/UserList";
import Layout
    from "./Layout/Layout";
import UserProfile
    from "./components/UserProfile/UserProfile.jsx";
import Services
    from "./pages/Services/Services.jsx";
import ServicePage
    from "./pages/Services/ServicePage.jsx";
import ErrorPage
    from "./pages/ErrorPage/ErrorPage.jsx"; // Ensure this component exists

import ROUTES
    from './router/constants';
import AboutUs
    from "./pages/AboutUs/AboutUs.jsx";
import Login
    from "./pages/Login/Login.jsx"; // Ensure the path and filename are correct

// Define the routes
const router = createBrowserRouter( [
    {
        path: "/",
        errorElement:
            <ErrorPage/>,
        children: [
            {
                path: "/",
                element:
                    <Layout><HomePage/></Layout>,
            },

            {
                path: ROUTES.USERS,
                element:
                    <Layout><UserList/></Layout>,
            },
            {
                path: ROUTES.USER_ID,
                element:
                    <Layout><UserProfile/></Layout>,
            },
            {
                path: ROUTES.SERVICES,
                element:
                    <Layout><Services/></Layout>,
            },
            {
                path: ROUTES.SERVICE_ID,
                element:
                    <Layout><ServicePage/></Layout>,
            },
            {
                path: ROUTES.ABOUT_US,
                element:
                    <Layout>
                        <AboutUs/>
                    </Layout>,
            },
            {
                path: ROUTES.LOGIN,
                element:
                    <Layout>
                        <Login/>
                    </Layout>,
            },
        ]
    }

    // Add more routes here if needed
] );

function App() {
    return <RouterProvider router={ router }/>;
}

export default App;
