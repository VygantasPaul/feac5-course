import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ServicesPage.module.css'; // Import the CSS module
import { categories } from '../../data/categoriesData';

const ServicePage = () => {
    const { slug } = useParams(); // Get the service slug from URL parameters
    const [service, setService] = useState(null); // State to store service data
    const [loading, setLoading] = useState(true); // State to indicate loading
    const [error, setError] = useState(null); // State to store error

    useEffect(() => {
        console.log(categories); // Debug to check data structure
        const serviceData = categories.find(cat => cat.slug === slug);
        console.log(serviceData);
        if (serviceData) {
            setService(serviceData);
        } else {
            setError('Service not found');
        }
        setLoading(false); // Update state to indicate loading is complete
    }, [slug]);

    // Display loading indicator while data is being fetched
    if (loading) {
        return <p>Loading...</p>;
    }

    // Display error message if there was an issue fetching data
    if (error) {
        return <p>{error}</p>;
    }

    // Display the service data once it is fetched
    return (
        <div className={styles.servicePage}>
            <h1>{service?.name}</h1>
            <img src={service?.url} alt={service?.name} />
            <p>{service?.body}</p>
        </div>
    );
};

export default ServicePage;
