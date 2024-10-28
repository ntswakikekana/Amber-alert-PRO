import React from 'react';
import NavBar from './NavBar'; // Keep NavBar imported

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-500 min-h-screen flex flex-col items-center text-white p-6">
      {/* NavBar at the top */}
      <NavBar />

      <h1 className="text-4xl font-bold mt-8 mb-4">About Us</h1>
      <p className="max-w-3xl text-center mb-6 text-lg italic">
        Every day, thousands of people go missing around the world, with estimates suggesting that 
        over 800,000 individuals are reported missing annually in the United States alone. Globally, 
        this number reaches millions, and many of these cases involve vulnerable individuals, 
        including children and the elderly. This growing crisis has impacted countless families, 
        leaving them desperate for solutions and support.
      </p>
      <p className="max-w-3xl text-center mb-6 text-lg italic">
        Amber-alert PRO is designed to be a proactive platform aimed at increasing public awareness, 
        connecting families with communities, and streamlining the reporting and search process. By 
        bringing missing person reports directly to the public and fostering collaboration with local 
        authorities, we strive to reduce the time individuals remain missing and offer families the 
        resources they need in their search for loved ones. Our mission is to bring hope and quick action 
        to those who need it the most.
      </p>
    </div>
  );
};

export default AboutUs;
