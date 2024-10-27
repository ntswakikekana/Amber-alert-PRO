import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card Component', () => {
  it('renders the Card component', () => {
    render(<Card title="Test Card" content="This is a test" />);
    const cardTitle = screen.getByText('Test Card');
    const cardContent = screen.getByText('This is a test');
    expect(cardTitle).toBeInTheDocument();
    expect(cardContent).toBeInTheDocument();
  });
});
