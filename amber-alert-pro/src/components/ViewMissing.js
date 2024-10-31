import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import NavBar from './NavBar';
import { useState, useEffect } from 'react';

const ViewMissing = () => {
  const [missingPersons, setMissingPersons] = useState([]);

  // Simulated fetch function to get missing persons data
  useEffect(() => {
    const fetchMissingPersons = async () => {
      // This is a placeholder. Replace it with your actual data fetching logic.
      const data = [
        {
          id: 1,
          name: 'Miria Ackerman',
          age: 35,
          lastSeen: 'Near Central Park',
          description: 'Last seen wearing a blue jacket and jeans.',
          dateReported: '2024-10-01',
          contactInfo: 'Contact local police at (123) 456-7890',
          image: './images/missin-person2.jpg',
        },
        {
          id: 2,
          name: 'Robert Rivers',
          age: 28,
          lastSeen: 'Near the city park',
          description: 'Last seen wearing a yellow dress.',
          dateReported: '2024-10-03',
          contactInfo: 'Contact the police at (987) 654-3210',
          image: './images/missin-person1.jpg',
        },
        // Add more entries as needed
      ];
      setMissingPersons(data);
    };

    fetchMissingPersons();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-500 min-h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-col items-center text-white my-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Missing Persons</h1>
        {missingPersons.length > 0 ? (
          <div className="w-full max-w-3xl">
            {missingPersons.map((person) => (
              <div key={person.id} className="bg-white bg-opacity-10 p-6 rounded-lg mb-4">
                <div className="flex flex-col lg:flex-row items-center">
                  <img src={person.image} alt={person.name} className="w-48 h-48 rounded-lg mb-4 lg:mb-0 lg:mr-6" />
                  <div className="text-left">
                    <h2 className="text-2xl font-semibold">{person.name}</h2>
                    <p className="text-lg">Age: {person.age}</p>
                    <p className="text-lg">Last seen: {person.lastSeen}</p>
                    <p className="text-lg">Description: {person.description}</p>
                    <p className="text-sm italic">Reported on: {person.dateReported}</p>
                    <p className="text-sm font-bold mt-2">Contact Information: {person.contactInfo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg">No missing persons reported at this time.</p>
        )}
        {/* "Go Back to Home" button */}
        <Link to="/home">
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300 mt-6">
            Go Back to Home
          </button>
        </Link>
      </div>

      <footer className="bg-blue-600 w-full py-6 text-center text-white mt-auto">
        <p>© 2024 Amber-alert PRO. All rights reserved.</p>
        <p>Contact us at: info@amberalertpro.com</p>
      </footer>
    </div>
  );
};

export default ViewMissing;
