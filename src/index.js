// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main application component
import './index.css'; // Tailwind CSS styles
import { BrowserRouter } from 'react-router-dom'; // For routing
import AuthProvider from './context/AuthContext'; // Authentication context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
