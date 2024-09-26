import React, {
    useContext
} from 'react';
import {
    UserContext
} from "../../components/UserContext/UserContext";
import styles
    from './HomePage.module.css'
import CategoryList
    from "../../components/category/CategoryList.jsx";

import CategoryCard
    from "../../components/category/CategoryCard.jsx";

export const HomePage = () => {
    const { user } = useContext( UserContext );

    return (
        <div className={ styles.homePage }>
            <div className="container">

                <section className="home-content">
                    <h1>Home Page</h1>
                    <CategoryList/>
                    <h2>Popular categories</h2>
                    <CategoryCard/>
                    { user ? (
                        <p>Welcome back, { user.username }!</p>
                    ) : (
                        <p>Please log in.</p>
                    ) }
                </section>
            </div>
        </div>
    );
};

export default HomePage;
