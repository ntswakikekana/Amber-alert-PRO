import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Amber-alert PRO</Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/home" className="text-white hover:text-orange-400">Home</Link>
          <Link to="/reportmissing" className="text-white hover:text-orange-400">Report Missing</Link>
          <Link to="/contactpolice" className="text-white hover:text-orange-400">Contact Police</Link>
          <Link to="/login" className="text-white hover:text-orange-400">Login</Link>
          <Link to="/signup" className="text-white hover:text-orange-400">SignUp</Link>
          <Link to="/about" className="text-white hover:text-orange-400">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
