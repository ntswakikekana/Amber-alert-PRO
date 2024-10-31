import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Login from '../Login';

const mockStore = configureStore([]);
const store = mockStore({});

describe('Login Page', () => {
  it('renders the Login page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const headingElement = screen.getByText(/login to amber-alert pro/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('contains email and password fields', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const emailField = screen.getByPlaceholderText(/enter your email/i);
    const passwordField = screen.getByPlaceholderText(/enter your password/i);
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('submits the form when login button is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);

    // check the dispatch here.
    const actions = store.getActions();
    expect(actions[0].type).toBe('auth/login');
  });
});

