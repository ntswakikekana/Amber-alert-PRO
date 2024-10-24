import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Button from '../components/Button';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login
  };

  return (
    <div>
      <Navbar />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <Button type="submit" label="Login" />
      </Form>
    </div>
  );
};

export default Login;
