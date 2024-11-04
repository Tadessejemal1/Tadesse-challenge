// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Section from './components/Sections/Section';
import Header from './components/Header';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sections" element={<Section />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
