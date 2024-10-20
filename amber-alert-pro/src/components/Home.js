<<<<<<< HEAD
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Amber Alert PRO</h1>
      <p className="text-center mt-4">
        Welcome to Amber Alert PRO. Your safety is our priority. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="card">
          <h2 className="text-2xl font-semibold">Report Missing Person</h2>
          <p>Fill out a form to report a missing person.</p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold">View Missing Persons</h2>
          <p>Browse missing persons by location.</p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold">Contact Local Police</h2>
          <p>Get in touch with local authorities.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
=======
// src/components/Home.js
import React from 'react';

// Home component that displays the main content of the homepage
const Home = () => {
    return (
        <div id="main-content">
            <div id="alert-box">
                <h1>Amber Alert!!!</h1> {/* Alert title */}
                <p id="alert-message">This is an Amber Alert notification.</p> {/* Alert message */}
            </div>
        </div>
    );
};

export default Home; // Export Home component

>>>>>>> 798dcd9861966878eef651e1a4be2b4d862f2160
