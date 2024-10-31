import React from 'react';
import { useSelector } from 'react-redux';

const SomeComponent = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="text-center mt-4">
      {isLoggedIn ? (
        <h2 className="text-xl text-green-500">Welcome, {user.email}!</h2>
      ) : (
        <h2 className="text-xl text-red-500">Please log in.</h2>
      )}
    </div>
  );
};

export default SomeComponent;
