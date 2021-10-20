import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2 className="log-in">Please Login</h2>
            <form>
                <input type="email" placeholder="email" className="input"/>
                <br />
                <input type="password" placeholder="password" className="input"/>
                <br />
                <button className="btn">
                    Log In
                </button>
            </form>
            <button onClick={signInUsingGoogle} className="btn">
                Google Sign In
                </button>
            <br />
            <p>
                New User?
                <Link 
                to="/register"
                className="register">
                    Register Now
                </Link>
            </p>
        </div>
    );
};

export default Login;