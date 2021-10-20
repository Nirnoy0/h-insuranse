import React from 'react';
import { Link } from 'react-router-dom'; 
import './Register.css';

const Register = () => {
    return (
        <div>
            <h2 className="register">Please Register</h2>
            <form>
                <input type="text" className="input" placeholder="Enter your name"/>
                <br />
                <input type="email" className="input" placeholder="Enter your email"/>
                <br />
                <input type="email" className="input" placeholder="Re-type email"/>
                <br />
                <input type="password" className="input" placeholder="Enter your password"/>
                <br />
                <input type="submit" value="Submit" className="btn"/>
            </form>
            <p>
                Already Registerd?
                <Link to="/login" className="log-in">
                    Log in
                </Link>
            </p>
        </div>
    );
};

export default Register;