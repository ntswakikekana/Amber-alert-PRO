import React from 'react';
import { render, screen } from '@testing-library/react';
import FormComponent from './FormComponent';

test('renders form component with fields and submit button', () => {
  render(<FormComponent />);
  // Check if the name input field is rendered
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  // Check if the email input field is rendered
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  // Check if the age input field is rendered
  expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
  // Check if the submit button is rendered
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
