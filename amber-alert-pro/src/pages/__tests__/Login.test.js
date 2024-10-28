import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';

describe('Login Page', () => {
  it('renders the Login page', () => {
    render(<Login />);
    const loginHeading = screen.getByText('Login to Your Account');
    expect(loginHeading).toBeInTheDocument();
  });

  it('contains username and password fields', () => {
    render(<Login />);
    const usernameField = screen.getByLabelText('Username');
    const passwordField = screen.getByLabelText('Password');
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('submits the login form when the login button is clicked', () => {
    const mockSubmit = jest.fn();
    render(<Login onSubmit={mockSubmit} />);
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
