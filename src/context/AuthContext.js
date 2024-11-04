// src/context/AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:3001/login', credentials);
      if (response.data && response.data.token) {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
      } else {
        throw new Error('Invalid login credentials');
      }
    } catch (error) {
      console.error('Login error:', error.response);
      // Handle the error (e.g., display a message)
    }
  };  

  const signup = async (userData) => {
    const response = await axios.post('http://localhost:3001/users', userData);
    setUser(response.data);
    localStorage.setItem('token', response.data.token); // Store the token
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Remove the token
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        // Validate token and fetch user data if necessary
        const response = await axios.get('http://localhost:3001/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
