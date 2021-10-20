import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Deatils of: </h2>
            <p>{serviceId}</p>
            <p>{Details}</p>
        </div>
    );
};

export default Details;