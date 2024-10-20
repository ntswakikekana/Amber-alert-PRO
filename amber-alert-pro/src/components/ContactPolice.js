<<<<<<< HEAD
import React, { useState } from 'react';

const ContactPolice = () => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for contacting police
    console.log('Contacting police for location:', location);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Contact Local Police</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Contact Police</button>
      </form>
    </div>
  );
};

export default ContactPolice;
=======
// src/components/ContactPolice.js
import React from 'react';

// ContactPolice component for contacting local police
const ContactPolice = () => {
    return (
        <div id="main-content">
            <div id="contact-form">
                <h1>Contact Local Police Station</h1>
                <div id="alert-box-background">
                    <h2>Instructions:</h2>
                    <p>Please fill out the form below to contact your local police station. Provide as much detail as possible to help us assist you better.</p>
                </div>
                {/* Form for contacting police */}
                <form id="contact-police-form" action="submit_contact.php" method="POST">
                    {/* Input for your name */}
                    <label htmlFor="name">Your Name:</label><br />
                    <input type="text" id="name" name="name" required /><br /><br />

                    {/* Input for your email */}
                    <label htmlFor="email">Your Email:</label><br />
                    <input type="email" id="email" name="email" required /><br /><br />

                    {/* Input for your phone number */}
                    <label htmlFor="phone">Your Phone Number:</label><br />
                    <input type="tel" id="phone" name="phone" required /><br /><br />

                    {/* Dropdown for your location */}
                    <label htmlFor="location">Your Location:</label><br />
                    <select id="location" name="location" required>
                        <option value="">Select Location</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Houston">Houston</option>
                        <option value="Phoenix">Phoenix</option>
                    </select><br /><br />

                    {/* Text area for message */}
                    <label htmlFor="message">Message:</label><br />
                    <textarea id="message" name="message" rows="4" required></textarea><br /><br />

                    {/* Submit button for sending message */}
                    <button type="submit">Submit</button>
                </form>
                <div id="form-message" style={{ display: 'none', marginTop: '20px', color: 'green' }}>
                    Your message has been sent successfully! {/* Confirmation message */}
                </div>
            </div>
        </div>
    );
};

export default ContactPolice; // Export ContactPolice component

>>>>>>> 798dcd9861966878eef651e1a4be2b4d862f2160
