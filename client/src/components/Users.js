import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

export default function Users(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.setTimeout(() => {props.history.push('/loginregister')}, 2000);
        }
    },[]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err.response.data.message);
            })
    }, []);

    return (
        <div className="users">
            {
                localStorage.getItem('token')
                    ? users.map(user => (
                        <User key={user.id} user={user}/>
                    ))
                    : <p>You are not authed to see this page. Redirecting!</p>
            }
            
        </div>
    )
}