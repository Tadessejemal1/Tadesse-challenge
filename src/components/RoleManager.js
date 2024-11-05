// src/components/RoleManager.js
import React, { useState } from 'react';
import axios from 'axios';

const RoleManager = ({ user }) => {
    const [role, setRole] = useState(user.role);

    const handleChangeRole = async (newRole) => {
        try {
            const response = await axios.put('http://localhost:5000/auth/updateRole', {
                userId: user._id,
                newRole
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setRole(newRole);
            alert('Role updated successfully');
        } catch (error) {
            alert('Failed to update role');
            console.error(error);
        }
    };

    return (
        <div>
            <p>{user.username} - Current Role: {role}</p>
            <button onClick={() => handleChangeRole('Collaborator')}>Set as Collaborator</button>
            <button onClick={() => handleChangeRole('Author')}>Set as Author</button>
        </div>
    );
};

export default RoleManager;