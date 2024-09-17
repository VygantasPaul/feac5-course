import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Function to login a user
    const loginUser = (userData) => {
        setUser(userData); // Update state with user data
        localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
    };

    // Function to logout a user
    const logoutUser = () => {
        setUser(null); // Clear user state
        localStorage.removeItem('user'); // Remove user data from localStorage
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
