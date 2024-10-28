import React from 'react';
import { Link } from 'react-router-dom'; // Keep Link import for navigation
import NavBar from './NavBar';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-500 min-h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-col items-center justify-center flex-grow text-white">
        <h1 className="text-4xl font-bold mb-8">Create Your Account</h1>

        {/* Sign-Up Form */}
        <div className="w-full max-w-md bg-white bg-opacity-20 p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-6">
              <label className="block text-lg mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded bg-white bg-opacity-20 text-white focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-white bg-opacity-20 text-white focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded bg-white bg-opacity-20 text-white focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded hover:bg-white hover:text-orange-500 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Social sign-up options */}
          <div className="flex justify-center space-x-4 mt-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center">
              <FaFacebook className="mr-2" />
              Sign up with Facebook
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-full flex items-center">
              <FaGoogle className="mr-2" />
              Sign up with Google
            </button>
          </div>

          {/* Login link */}
          <div className="mt-8 text-center">
            <p className="text-lg">Already have an account?</p>
            <Link
              to="/login"
              className="text-blue-300 hover:underline font-semibold"
            >
              Log in here
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-blue-600 w-full py-6 text-center text-white">
        <p>© 2024 Amber-alert PRO. All rights reserved.</p>
        <p>Contact us at: info@amberalertpro.com</p>
      </footer>
    </div>
  );
};

export default SignUp;
