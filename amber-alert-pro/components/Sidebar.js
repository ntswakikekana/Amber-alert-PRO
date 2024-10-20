import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-orange-500 fixed flex flex-col p-6">
      {/* Menu Links */}
      <Link to="/report-missing-person" className="mb-6 hover:text-white">
        Report Missing Person
      </Link>
      <Link to="/contact-police" className="mb-6 hover:text-white">
        Contact Local Police Station
      </Link>
      <Link to="/view-missing-persons" className="mb-6 hover:text-white">
        View Missing Persons by Location
      </Link>
      <Link to="/contact-us" className="mb-6 hover:text-white">
        Contact Us
      </Link>
      <Link to="/sign-up" className="mb-6 hover:text-white">
        Sign-Up
      </Link>
      <Link to="/login" className="hover:text-white">
        Log In
      </Link>
    </div>
  );
};

export default Sidebar;
