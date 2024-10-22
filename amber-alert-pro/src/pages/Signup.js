import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Button from '../components/Button';

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up
  };

  return (
    <div>
      <Navbar />
      <h1>Sign up</h1>
      <Form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <Button type="submit" label="Sign up" />
      </Form>
    </div>
  );
};

export default Signup;
