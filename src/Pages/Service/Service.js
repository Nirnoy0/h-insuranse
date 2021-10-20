import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {service} =props;
    const {id,name, img, catagory, covarage, premium, details} = service;
    return (
        <>
            <div className="container cards">
                <div classname="card">
                    <img classname="card-img-top" src={img} height="230px" width="250px" alt="images" />
                    <div classname="card-body">
                        <h5 classname="card-title name">{name}</h5>
                        <p classname="card-text">Catagory: {catagory}</p>
                        <p classname="card-text">Covarage: {covarage}</p>
                        <p classname="card-text">Subscription: {premium} TK</p>
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-outline-dark">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;