import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../Signup';

describe('Signup Page', () => {
  it('renders the Signup page', () => {
    render(<Signup />);
    const signupHeading = screen.getByText('Create a New Account');
    expect(signupHeading).toBeInTheDocument();
  });

  it('contains username, email, and password fields', () => {
    render(<Signup />);
    const usernameField = screen.getByLabelText('Username');
    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    expect(usernameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('submits the signup form when the signup button is clicked', () => {
    const mockSubmit = jest.fn();
    render(<Signup onSubmit={mockSubmit} />);
    const signupButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signupButton);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
