import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/UserContext/UserContext';

const Login = () => {
    const { loginUser } = useContext(UserContext); // Get loginUser from UserContext
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Input validation
    const validateInputs = () => {
        const errors = {};
        if (!username) errors.username = "Username is required";
        if (!password) errors.password = "Password is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateInputs(); // Validate form inputs
        if (Object.keys(formErrors).length === 0) {
            const userData = { username }; // Save user data (you can add more fields if needed)
            loginUser(userData); // Call loginUser to update UserContext and localStorage
            navigate('/'); // Redirect to home page after successful login
        } else {
            setErrors(formErrors); // Set validation errors
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <span>{errors.username}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
