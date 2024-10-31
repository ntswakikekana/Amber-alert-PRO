import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Button from '../components/Button';

const Report = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the report submission
  };

  return (
    <div>
      <Navbar />
      <h1>Report a Missing Person</h1>
      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="Person's Name" required />
        <input type="text" placeholder="Last Seen Location" required />
        <Button type="submit" label="Submit Report" />
      </Form>
    </div>
  );
};

export default Report;
