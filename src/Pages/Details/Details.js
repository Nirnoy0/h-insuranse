import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} = useParams();
    const [service,setServicesDetails] = useState({})

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/Nirnoy0/FakeData/main/Services/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setServicesDetails(data.result));
    }, [])
   
    return (

        <div className="container">
            
                <h2>Packeage Number: {serviceId}</h2>    
                    <h5>Package Name: {service.name}</h5>
                    <p>Details: {service.details}</p>
                
            
            
        </div>
    );
};

export default Details;