// src/App.js
import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Signup';
import SectionManager from './components/Sections/SectionManager';
import { AuthProvider, useAuth } from './context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to Cloud Book Writer Platform</h1>
      {user ? (
                <>
                    <Link to="/sections">
                        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300">
                            Go to Section Manager
                        </button>
                    </Link>
                </>
      ) : (
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sections" element={<SectionManager />} />
          <Route path="*" element={<h1 className="text-2xl text-red-500 text-center mt-10">Page Not Found</h1>} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
