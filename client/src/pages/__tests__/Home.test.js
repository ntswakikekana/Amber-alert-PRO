import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home Page', () => {
  it('renders the Home page', () => {
    render(<Home />);
    const homeElement = screen.getByText('Welcome to Amber Alert PRO');
    expect(homeElement).toBeInTheDocument();
  });

  it('contains a button to report a missing person', () => {
    render(<Home />);
    const reportButton = screen.getByRole('button', { name: /report missing person/i });
    expect(reportButton).toBeInTheDocument();
  });
});
