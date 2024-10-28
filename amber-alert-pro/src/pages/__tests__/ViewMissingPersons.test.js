import React from 'react';
import { render, screen } from '@testing-library/react';
import ViewMissingPersons from '../ViewMissingPersons';

describe('View Missing Persons Page', () => {
  it('renders the View Missing Persons page', () => {
    render(<ViewMissingPersons />);
    const viewHeading = screen.getByText('List of Missing Persons');
    expect(viewHeading).toBeInTheDocument();
  });

  it('displays a list of missing persons', () => {
    const mockData = [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Smith', age: 30 },
    ];
    render(<ViewMissingPersons data={mockData} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});
