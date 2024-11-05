// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoleManager from './RoleManager';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:5000/users', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            {users.map(user => (
                <RoleManager key={user._id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
