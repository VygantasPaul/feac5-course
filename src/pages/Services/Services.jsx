import React, {
    useEffect,
    useState
} from 'react';
import Service
    from '../../components/Service/Service';
import styles
    from './Services.module.css';
import {
    Link
} from 'react-router-dom';
import {
    categories
} from '../../data/categoriesData';

const Services = () => {
    const [services, setServices] = useState( [] ); // Initialize state for services
    const [loading, setLoading]   = useState( true ); // Initialize state for loading
    const [error, setError]       = useState( null ); // Initialize state for error

    useEffect( () => {
        // Directly set services since data is static
        try {
            setServices( categories ); // Update state with fetched data
        } catch ( error ) {
            setError( error ); // Update state with error
        } finally {
            setLoading( false ); // Update state to indicate loading is complete
        }
    }, [] ); // Empty dependency array means this runs once when the component mounts

    // Display loading indicator while data is being fetched
    if ( loading ) {
        return <p>Loading...</p>;
    }

    // Display error message if there was an issue fetching data
    if ( error ) {
        return <p>Error: { error.message }</p>;
    }

    // Display the services data once it is fetched
    return (

        <div className={ styles.services }>
            <div className="container">
                <h1>Our Services</h1>
                <div className={ styles.servicesGrid }>
                    { services.map( ( service ) => (
                        <Link to={ `/service/${ service.slug }` } key={ service.id } className={ styles.serviceItem }>
                            <Service
                                name={ service.name }
                                body={ service.body }
                                color={ service.color }
                                url={ service.url }
                            />
                        </Link>
                    ) ) }
                </div>
            </div>
        </div>
    );
};

export default Services;
