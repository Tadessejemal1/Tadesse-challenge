// src/components/Auth/Signup.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-bold mb-4">Sign Up</h2>
        <input
          name="name"
          onChange={handleChange}
          placeholder="Name"
          className="border border-gray-300 p-2 w-full mb-4 rounded"
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 p-2 w-full mb-4 rounded"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 w-full mb-4 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
