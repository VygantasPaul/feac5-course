import React, {
    useContext
} from 'react';
import {
    UserContext
} from "../../components/UserContext/UserContext";
import styles from './HomePage.module.css'
export const HomePage = () => {
    const { user } = useContext( UserContext );

    return (
        <div className={styles.homePage}>
            <div className="container">
                <section className="home-content">
                    <h1>Home Page</h1>
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
