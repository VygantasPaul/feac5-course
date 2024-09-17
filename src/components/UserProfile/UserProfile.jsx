import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null); // Pradinė būsenos reikšmė yra null
    const [loading, setLoading] = useState(true); // Naudojamas įkrovimo būsenai
    const [error, setError] = useState(null); // Naudojamas klaidų atvejui

    useEffect(() => {
        // Asinchroninis duomenų gavimo funkcija
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);


    if (loading) {
        return <p>Loading...</p>;
    }


    if (error) {
        return <p>Error: {error.message}</p>;
    }


    if (user) {
        return (
            <div>
                <h1>User Profile</h1>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                {/* Įtraukite kitus laukus, jei reikia */}
            </div>
        );
    }


    return <p>No user data found</p>;
};

export default UserProfile;
