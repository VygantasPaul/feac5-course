// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
