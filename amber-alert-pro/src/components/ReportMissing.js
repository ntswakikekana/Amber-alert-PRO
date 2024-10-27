import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for redirection
import NavBar from './NavBar';

const ReportMissing = () => {
  const navigate = useNavigate();

  // Authentication logic (this is a placeholder)
  useEffect(() => {
    const isAuthenticated = false; // Update this with real authentication logic
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  // State to handle the form inputs
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    description: '',
    contactInfo: '',
    image: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Placeholder: replace with actual form submission logic
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-500 min-h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-col items-center text-white my-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Report Missing Person</h1>

        {/* Short paragraph explaining the purpose */}
        <p className="italic text-lg text-center mb-6 max-w-3xl">
          Amber Alert PRO is dedicated to helping families and communities locate missing persons quickly and efficiently. 
          Our platform aims to create an interconnected system that brings awareness, resources, and assistance to those 
          searching for their loved ones.
        </p>

        {/* Report missing person form */}
        <div className="w-full max-w-xl bg-white bg-opacity-10 p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg font-semibold mb-2" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg font-semibold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white"
                rows="4"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg font-semibold mb-2" htmlFor="contactInfo">
                Contact Information
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg font-semibold mb-2" htmlFor="image">
                Attach Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-blue-600 w-full py-6 text-center text-white mt-auto">
        <p>© 2024 Amber-alert PRO. All rights reserved.</p>
        <p>Contact us at: info@amberalertpro.com</p>
      </footer>
    </div>
  );
};

export default ReportMissing;

