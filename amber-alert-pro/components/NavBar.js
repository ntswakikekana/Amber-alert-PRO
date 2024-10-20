import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-between">
        <li><a href="/" className="text-white">Home</a></li>
        <li><a href="/report" className="text-white">Report</a></li>
        <li><a href="/missing" className="text-white">View Missing Persons</a></li>
        <li><a href="/login" className="text-white">Login/Sign-up</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
