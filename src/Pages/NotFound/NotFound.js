import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container text-center p-5">
            <h1 className="display-1">404</h1>
            <h4 className="p-3">OPPS! Page Not Found</h4>
            <Link to="/">
                <button className="btn btn-outline-dark">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;