import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import NavBar from './NavBar';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NavBar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex-grow bg-gradient-to-r from-blue-500 to-orange-500 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-4">Welcome to Amber-alert PRO</h1>
        <p className="text-white text-lg mb-8">Your go-to platform for reporting and finding missing persons.</p>
        <Link to="/home">
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300">
            Get Started
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 w-full py-6 text-center text-white mt-auto">
        <p>© 2024 Amber-alert PRO. All rights reserved.</p>
        <p>Contact us at: info@amberalertpro.com</p>
      </footer>
    </div>
  );
};

export default LandingPage;
