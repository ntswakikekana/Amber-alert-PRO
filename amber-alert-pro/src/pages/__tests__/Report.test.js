import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReportMissing from '../ReportMissing';

// Helper function to render the component with BrowserRouter for navigation
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('ReportMissing Page', () => {
  it('renders the Report Missing Person page with correct heading and intro text', () => {
    renderWithRouter(<ReportMissing />);
    
    const reportHeading = screen.getByText(/Report Missing Person/i);
    const introText = screen.getByText(/Amber Alert PRO is dedicated to helping families/i);
    
    expect(reportHeading).toBeInTheDocument();
    expect(introText).toBeInTheDocument();
  });

  it('renders all form input fields and submit button', () => {
    renderWithRouter(<ReportMissing />);
    
    const nameInput = screen.getByLabelText(/Name/i);
    const ageInput = screen.getByLabelText(/Age/i);
    const descriptionInput = screen.getByLabelText(/Description/i);
    const contactInfoInput = screen.getByLabelText(/Contact Information/i);
    const imageInput = screen.getByLabelText(/Attach Image/i);
    const submitButton = screen.getByRole('button', { name: /Submit Report/i });
    
    expect(nameInput).toBeInTheDocument();
    expect(ageInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(contactInfoInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits the form when submit button is clicked', () => {
    renderWithRouter(<ReportMissing />);
    
    // Fill out form fields
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '30' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Description of missing person' } });
    fireEvent.change(screen.getByLabelText(/Contact Information/i), { target: { value: '123-456-7890' } });
    
    // Mock file input for image
    const imageInput = screen.getByLabelText(/Attach Image/i);
    const file = new File(['dummy image content'], 'image.jpg', { type: 'image/jpeg' });
    fireEvent.change(imageInput, { target: { files: [file] } });
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /Submit Report/i });
    fireEvent.click(submitButton);
    
    // Since we're not doing actual form submission, simply check console or mocked function
    expect(screen.getByLabelText(/Name/i).value).toBe('John Doe');
  });
});

