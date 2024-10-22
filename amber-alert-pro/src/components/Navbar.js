import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/report">Report</a></li>
        <li><a href="/missing">View Missing Persons</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
