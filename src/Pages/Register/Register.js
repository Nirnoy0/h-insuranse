import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Register.css';

const Register = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({...userRegistration, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...userRegistration, id:new Date().getTime().toString()}

        setRecords([...records, newRecord])
    }

    return (
        <div>
            <h2 className="register">Please Register</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Fullname</label>
                <br />
                <input type="text" 
                className="input" 
                placeholder="Enter your name"
                autoComplete="off"
                value={userRegistration.username}
                onChange={handleInput}/>
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" 
                className="input" 
                placeholder="Enter your email"
                autoComplete="off"
                value={userRegistration.email}
                onChange={handleInput}/>
                <br />
                <label htmlFor="email">Re-enter Email</label>
                <br />
                <input type="email" 
                className="input" 
                placeholder="Re-type email"
                autoComplete="off"
                value={userRegistration.email}
                onChange={handleInput}/>
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" 
                className="input" 
                placeholder="Enter your password"
                autoComplete="off"
                value={userRegistration.password}
                onChange={handleInput}/>
                <br />
                <input type="submit" value="Register" className="btn"/>
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