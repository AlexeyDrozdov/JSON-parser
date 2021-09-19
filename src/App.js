import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Login from './components/Login/Login';
import Parser from './components/Parser/Parser';

function App() {
    let savedUser = JSON.parse(localStorage.getItem('user'));
    savedUser = {
        login: savedUser?.login ?? '',
        password: savedUser?.password ?? ''
    };
    const [user, setUser] = useState(savedUser)
    const [isLogged, setIsLogged] =  useState(user.password && user.login)
   
    const handleChange = (event) => {
        const {value, name} = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.password && user.login) {
            setIsLogged(true);
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    if (!isLogged) {
        return (
            <Login
                user={user}
                onSubmit={handleSubmit}
                onChange={handleChange}
            />
        );
    }
    return (
        <Parser/>
    );
}

export default hot(module)(App);