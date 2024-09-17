import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/UserContext/UserContext';
import styles from './Login.module.css'; // Import the CSS module

const Login = () => {
    const { loginUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateInputs = () => {
        const errors = {};
        if (!username) errors.username = "Username is required";
        if (!password) errors.password = "Password is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateInputs();
        if (Object.keys(formErrors).length === 0) {
            const userData = { username };
            loginUser(userData);
            navigate('/');
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className={styles.loginPage}>
            <h2 className={styles.title}>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                    />
                    {errors.username && <span className={styles.error}>{errors.username}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                    {errors.password && <span className={styles.error}>{errors.password}</span>}
                </div>
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default Login;
