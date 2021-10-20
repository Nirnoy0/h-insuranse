import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} = useParams();
    return (
        <div className="container">
            <h2>Deatils of: </h2>
            <p>{serviceId}</p>
        </div>
    );
};

export default Details;