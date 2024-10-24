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
<<<<<<< HEAD

=======
>>>>>>> add0763fd0aa509c55be5d6a12a250ab9d085b3c
