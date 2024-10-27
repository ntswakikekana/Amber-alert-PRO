import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../Form';

describe('Form Component', () => {
  const mockOnSubmit = jest.fn((e) => e.preventDefault());

  it('renders the Form component', () => {
    render(<Form onSubmit={mockOnSubmit} />);
    const formElement = screen.getByTestId('form-element');
    expect(formElement).toBeInTheDocument();
  });

  it('calls onSubmit when the form is submitted', () => {
    render(<Form onSubmit={mockOnSubmit} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
