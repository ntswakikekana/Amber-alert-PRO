// src/components/SideNav.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

// SideNav component for the navigation menu
const SideNav = () => {
    return (
        <div className="sidenav">
            {/* Navigation links to different pages */}
            <Link to="/">Home</Link>
            <Link to="/report-missing">Report Missing Person</Link>
            <Link to="/contact-police">Contact Local Police Station</Link>
            <Link to="/view-missing">View Missing Persons by Location</Link>
            <Link to="/about-us">Contact Us</Link>
            <Link to="/sign-up">Sign-Up</Link>
            <Link to="/log-in">Log In</Link>
        </div>
    );
};

export default SideNav; // Export SideNav component

