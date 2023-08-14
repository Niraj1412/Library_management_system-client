import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-700 text-white p-4 sticky top-0">
        
        <div className="container mx-auto">
        <Link to="/">
        <h1 className="text-xl font-semibold">Library Management System</h1>
        </Link>
          
        </div>
        <nav className="container mx-auto">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="/books"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/members"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Members
            </Link>
          </li>
          
          <li>
            <Link
              to="/import-books"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Import Books
            </Link>
          </li>
        </ul>
      </nav>
      </header>
  );
};

export default Header;
