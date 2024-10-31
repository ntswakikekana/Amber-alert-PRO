import React from 'react';
import { render, screen } from '@testing-library/react';
import SomeComponent from '../SomeComponent';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('SomeComponent', () => {
  it('displays "Please log in." when user is not logged in', () => {
    const store = mockStore({
      auth: { user: null, isLoggedIn: false },
    });

    render(
      <Provider store={store}>
        <SomeComponent />
      </Provider>
    );

    const loginMessage = screen.getByText('Please log in.');
    expect(loginMessage).toBeInTheDocument();
  });

  it('displays welcome message with user email when logged in', () => {
    const store = mockStore({
      auth: { user: { email: 'testuser@example.com' }, isLoggedIn: true },
    });

    render(
      <Provider store={store}>
        <SomeComponent />
      </Provider>
    );

    const welcomeMessage = screen.getByText('Welcome, testuser@example.com!');
    expect(welcomeMessage).toBeInTheDocument();
  });
});
