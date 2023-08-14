import React from 'react';
import backgroundImage from '../images/bg.webp'; // Update the path
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="relative flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt="Background" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="z-10 text-center relative">
          <h2 className="text-4xl font-semibold text-white mb-4">Welcome to Our Library!</h2>
          <p className="text-white text-lg mb-6">
            Explore our vast collection of books and manage your reading interests with ease.
          </p>
          <Link to="/books">
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                Get Started
            </button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-700 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Library Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
