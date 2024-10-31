import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Wrap in BrowserRouter for Link component
import SignUp from '../SignUp';

describe('SignUp Page', () => {
  const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  it('renders the SignUp page with correct heading', () => {
    renderWithRouter(<SignUp />);
    const signupHeading = screen.getByText(/Create Your Account/i);
    expect(signupHeading).toBeInTheDocument();
  });

  it('contains name, email, and password fields', () => {
    renderWithRouter(<SignUp />);
    const nameField = screen.getByLabelText(/Name/i);
    const emailField = screen.getByLabelText(/Email/i);
    const passwordField = screen.getByLabelText(/Password/i);
    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('contains Facebook and Google sign-up options', () => {
    renderWithRouter(<SignUp />);
    const facebookButton = screen.getByText(/Sign up with Facebook/i);
    const googleButton = screen.getByText(/Sign up with Google/i);
    expect(facebookButton).toBeInTheDocument();
    expect(googleButton).toBeInTheDocument();
  });

  it('contains a link to the login page', () => {
    renderWithRouter(<SignUp />);
    const loginLink = screen.getByRole('link', { name: /Log in here/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('submits the sign-up form with filled inputs', () => {
    renderWithRouter(<SignUp />);

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });

    // Find the sign-up button and simulate a click
    const signupButton = screen.getByRole('button', { name: /Sign Up/i });
    fireEvent.click(signupButton);

    // Verify the values entered
    expect(screen.getByLabelText(/Name/i).value).toBe('John Doe');
    expect(screen.getByLabelText(/Email/i).value).toBe('johndoe@example.com');
    expect(screen.getByLabelText(/Password/i).value).toBe('password123');
  });
});
