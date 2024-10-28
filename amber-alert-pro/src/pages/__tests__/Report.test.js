import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Report from '../Report';

describe('Report Page', () => {
  it('renders the Report page', () => {
    render(<Report />);
    const reportHeading = screen.getByText('Report a Missing Person');
    expect(reportHeading).toBeInTheDocument();
  });

  it('contains a form with a submit button', () => {
    render(<Report />);
    const submitButton = screen.getByRole('button', { name: /submit report/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('submits the form when the submit button is clicked', () => {
    const mockSubmit = jest.fn();
    render(<Report onSubmit={mockSubmit} />);
    const submitButton = screen.getByRole('button', { name: /submit report/i });
    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
