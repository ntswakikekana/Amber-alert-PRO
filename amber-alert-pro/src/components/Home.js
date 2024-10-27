import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons
import NavBar from './NavBar'; // Ensure you have the NavBar component imported
import { Link } from 'react-router-dom'; // Import Link for navigation


const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-orange-500 flex flex-col items-center">
        {/* Introduction Section */}
        <div className="text-center text-white my-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to Amber-alert PRO</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Amber-alert PRO is your trusted platform for broadcasting missing person alerts. 
            Our mission is to create a centralized system where people can quickly report 
            and search for missing individuals, helping communities stay safe and informed.
          </p>
        </div>

         {/* Buttons Section */}
         <div className="flex flex-col space-y-4 mb-8">
          <Link to="/view-missing" className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
            View Missing
          </Link>
          <Link to="/report-missing" className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
            Report Missing
          </Link>
          <Link to="/contact-police" className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
            Contact Police
          </Link>
        </div>

        {/* Testimonials Section */}
        <div className="text-white my-12">
          <h2 className="text-3xl font-bold mb-6">What People Are Saying</h2>
          <div className="flex flex-col lg:flex-row justify-around gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <p className="text-xl italic">
                "Amber-alert PRO helped us reunite with a family member quickly. It's an amazing platform!"
              </p>
              <span className="block mt-4 font-bold">- Aemond Targaryen</span>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <p className="text-xl italic">
                "I feel much safer knowing there's a service like this available."
              </p>
              <span className="block mt-4 font-bold">- Arya Stark</span>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <p className="text-xl italic">
                "The alerts are timely and the system is easy to use!"
              </p>
              <span className="block mt-4 font-bold">- Jon Snow</span>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="my-8 text-center">
          <h3 className="text-2xl text-white mb-4">Follow Us on Social Media</h3>
          <div className="flex justify-center space-x-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-700 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-blue-600 w-full py-6 text-center text-white mt-auto">
          <p>© 2024 Amber-alert PRO. All rights reserved.</p>
          <p>Contact us at: info@amberalertpro.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
