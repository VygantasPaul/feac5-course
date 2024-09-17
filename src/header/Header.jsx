import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../components/UserContext/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const { user, logoutUser } = useContext(UserContext); // Get user and logoutUser from context
    const navigate = useNavigate(); // Declare navigate function
    const [loading, setLoading] = useState(true); // Initialize state for loading
    const [error, setError] = useState(null); // Initialize state for error

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    };

    useEffect(() => {
        try {
            // Simulate loading
            setTimeout(() => {
                setLoading(false);
            }, 500); // Simulate loading delay
        } catch (error) {
            setError(error); // Update state with error
        }
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={ styles.container }>
                    <h1 className={ styles.logo }>
                        <Link to="/">MyApp</Link>
                    </h1>

                    <nav className={ styles.navigation }>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About Us</Link>
                            </li>

                        </ul>
                    </nav>
                    <div className={styles.userInfo}>
                        { user ? (
                            <div>
                                <span className={styles.username}>Welcome, { user.username }</span>
                                <button onClick={ handleLogout }>Logout</button>
                            </div>
                        ) : (
                            <button onClick={ () => navigate( '/login' ) }>Login</button>
                        ) }
                    </div>
                </div>
            </div>
            <div className={ styles.container }>
                <div className={ styles.grid }>
                    <div className={ styles.card }>
                        <i className={ styles.icon }>🔌</i> {/* Example icon */ }
                        <p>Electric</p>
                    </div>
                    <div className={ styles.card }>
                        <i className={ styles.icon }>🧹</i> {/* Example icon */ }
                        <p>Cleaning</p>
                    </div>
                    <div className={styles.card}>
                        <i className={styles.icon}>🌿</i> {/* Example icon */}
                        <p>Gardening</p>
                    </div>
                    <div className={styles.card}>
                        <i className={styles.icon}>🛠️</i> {/* Example icon */}
                        <p>Maintenance</p>
                    </div>
                    <div className={styles.card}>
                        <i className={styles.icon}>🛠️</i> {/* Example icon */}
                        <p>Painting</p>
                    </div>
                    <div className={styles.card}>
                        <i className={styles.icon}>🛠️</i> {/* Example icon */}
                        <p>Plumbing</p>
                    </div>
                    {/* Add more cards as needed */}
                </div>
            </div>
        </header>
    );
};

export default Header;
