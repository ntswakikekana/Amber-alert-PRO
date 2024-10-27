import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Amber Alert notification', () => {
  render(<App />);
  const alertElement = screen.getByText(/Amber Alert!!!/i);
  expect(alertElement).toBeInTheDocument();
});
