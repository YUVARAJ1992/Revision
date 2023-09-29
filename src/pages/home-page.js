import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const nav = useNavigate();

    const clickToLogout = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("password");
        nav('/');
    }
    return (
        <div>
            <h1>HomePage Component</h1>
            <br></br>
            <button onClick={()=> clickToLogout()}>Logout</button>
        </div>
    );
};

export default HomePage;