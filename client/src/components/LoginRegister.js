import React, { useRef } from 'react';
import axios from 'axios';

export default function LoginRegister(props) {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.push('/users');
            })
            .catch(err => {
                console.log(err);
            })
    }

    const register = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/register', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
            .then(res => {
                console.log('ok')
                usernameRef.current.value = "";
                passwordRef.current.value = "";
            })
            .catch(err => {
                console.log(err.response.data.message);
            })
    }

    return (
        <div className="login">
            <form>
                <input ref={usernameRef} type="text" placeholder="username"/>
                <input ref={passwordRef} type="password" placeholder="password"/>
                <button onClick={e => login(e)}>Login</button>
                <button onClick={e => register(e)}>Register</button>
            </form>
        </div>
    )
}