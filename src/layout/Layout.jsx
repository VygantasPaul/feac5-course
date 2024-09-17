// eslint-disable-next-line no-unused-vars
import React
    from 'react';
import Header
    from '../header/Header';
import Footer
    from '../footer/Footer';

// eslint-disable-next-line react/prop-types
const Layout = ( { children } ) => {
    return (
        <>
            <Header/>
            <main>

                { children }

            </main>
            {/* Content from different routes */ }
            <Footer/>
        </>
    );
};

export default Layout;
