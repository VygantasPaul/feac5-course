// Service.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
//import './Service.css'; // Assuming you have some styles for this component

const Service = ( { name, body, color, url }) => {
    return (
        <div className="service-card" style={{ borderColor: color }}>
            <img src={url} alt={`${name} icon`} className="servic-icon" />
            <h2>{name}</h2>
            {body && <p>{body}</p>}
        </div>
    );
};

export default Service;
