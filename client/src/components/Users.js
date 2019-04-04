import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

export default function Users(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            props.history.push('/loginregister');
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
                users.map(user => (
                    <User user={user}/>
                ))
            }
        </div>
    )
}