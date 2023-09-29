import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [user, setUser] = useState({ username: "", password: "" })
    const nav = useNavigate()

    const onHandleInput = (event) => {
        console.log(event.target.value)
        setUser({ ...user, [event.target.name]: event.target.value })
        
    }

    const clickToLogin = () => {
        // console.log(user)
        const user = document.getElementById('user').value;
        localStorage.setItem("name", user)
        const userPassword = document.getElementById('userPassword').value;
        localStorage.setItem("password", userPassword)
        nav("/home")
    }

    return (
        <div>
            {/* <h1>LoginPage</h1> */}
            <label>Enter the username/email ID here: </label>
            <input type='text' placeholder='Enter the username/email id here...' name='username' id="user" onChange={onHandleInput} />
            <br></br>
            <label>Enter the password: </label>
            <input type='password' placeholder='Enter the password here...' name='password' id='userPassword' onChange={onHandleInput} />
            <br></br>
            <button onClick={() => clickToLogin()}>Login</button>
        </div>
    );
};

export default LoginPage;