// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-lg font-bold">Book Writer Platform</h1>
      <nav className="mt-2">
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/sections" className="ml-4">Sections</Link>
      </nav>
    </header>
  );
};

export default Header;
