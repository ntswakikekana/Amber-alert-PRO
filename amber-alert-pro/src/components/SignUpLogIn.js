import React, { useState } from 'react';

const SignUpLogIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="container mx-auto p-4">
      {isLogin ? (
        <div>
          <h1 className="text-3xl font-bold">Log In</h1>
          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Log In</button>
          </form>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Sign Up</button>
          </form>
        </div>
      )}
      <button onClick={toggleForm} className="mt-4 underline">
        {isLogin ? 'Create an account' : 'Already have an account? Log in'}
      </button>
    </div>
  );
};

export default SignUpLogIn;

