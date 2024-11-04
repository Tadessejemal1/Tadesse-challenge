// src/components/Auth/Login.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(''); // State to hold error messages

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      setError(''); // Clear error message on successful login
    } catch (err) {
      // Set error message based on the caught error
      setError(err.response ? err.response.data : 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
        <input
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 p-2 w-full mb-4 rounded"
          required
        />
        <input
          name="password"
          value={credentials.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 w-full mb-4 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
