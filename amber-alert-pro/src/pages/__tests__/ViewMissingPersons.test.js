import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ViewMissing from '../ViewMissing';

describe('ViewMissing Component', () => {
  const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

  it('renders the Missing Persons page heading', () => {
    renderWithRouter(<ViewMissing />);
    const heading = screen.getByText(/Missing Persons/i);
    expect(heading).toBeInTheDocument();
  });

  it('displays missing persons information when data is provided', async () => {
    const mockData = [
      {
        id: 1,
        name: 'Miria Ackerman',
        age: 35,
        lastSeen: 'Near Central Park',
        description: 'Last seen wearing a blue jacket and jeans.',
        dateReported: '2024-10-01',
        contactInfo: 'Contact local police at (123) 456-7890',
        image: './images/missin-person2.jpg',
      },
      {
        id: 2,
        name: 'Robert Rivers',
        age: 28,
        lastSeen: 'Near the city park',
        description: 'Last seen wearing a yellow dress.',
        dateReported: '2024-10-03',
        contactInfo: 'Contact the police at (987) 654-3210',
        image: './images/missin-person1.jpg',
      },
    ];

    jest.spyOn(React, 'useEffect').mockImplementationOnce((fn) => fn());
    jest.spyOn(React, 'useState').mockReturnValue([mockData, jest.fn()]);

    renderWithRouter(<ViewMissing />);
    
    // Check for each piece of data for each person
    mockData.forEach(person => {
      expect(screen.getByText(person.name)).toBeInTheDocument();
      expect(screen.getByText(`Age: ${person.age}`)).toBeInTheDocument();
      expect(screen.getByText(new RegExp(person.lastSeen, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(person.description, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(person.dateReported, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(person.contactInfo, 'i'))).toBeInTheDocument();
    });
  });

  it('displays a message when no missing persons are available', () => {
    jest.spyOn(React, 'useState').mockReturnValue([[], jest.fn()]);
    renderWithRouter(<ViewMissing />);
    const noDataMessage = screen.getByText(/No missing persons reported at this time./i);
    expect(noDataMessage).toBeInTheDocument();
  });

  it('displays "Go Back to Home" button with correct link', () => {
    renderWithRouter(<ViewMissing />);
    const backButton = screen.getByRole('button', { name: /Go Back to Home/i });
    expect(backButton).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Go Back to Home/i })).toHaveAttribute('href', '/home');
  });
});
