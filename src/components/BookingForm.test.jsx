import React from "react"
import {render, screen, fireEvent} from "@testing-library/react"
import BookingForm from "./BookingForm";

const mockAvailableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
const mockDispatch =  jest.fn();
const mockSubmitForm = jest.fn();

test('renders BookingForm component', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );
  
    // Check if form fields render with correct labels
    expect(screen.getByLabelText('Choose Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose Time:')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests:')).toBeInTheDocument();
    expect(screen.getByLabelText('Occassion:')).toBeInTheDocument();
  
    // Check if the submit button renders
    expect(screen.getByDisplayValue(/confirm reservation/i)).toBeInTheDocument();
  });
  
test('renders available times in the select dropdown',()=>{
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            dispatch={mockDispatch}
            submitForm={mockSubmitForm}
            />
    );

    // Open dropdown and check options
    const timeDropdown = screen.getByLabelText('Choose Time:');
    fireEvent.click(timeDropdown);

    mockAvailableTimes.forEach(time=>{
        expect(screen.getByText(time)).toBeInTheDocument();
    });
});

test('updates date and calls dispatch function',()=>{
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            dispatch={mockDispatch}
            submitForm={mockSubmitForm}
        />
    );

    const dateInput = screen.getByLabelText('Choose Date');
    fireEvent.change(dateInput, {target: {value: '2024-12-26'}});

    expect(mockDispatch).toHaveBeenCalledWith('2024-12-26')
});

test('submits the form successfully', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch} 
        submitForm={mockSubmitForm} 
      />
    );
  
    // Simulate filling out the form
    fireEvent.change(screen.getByLabelText('Choose Date'), { target: { value: '2023-12-25' } });
    fireEvent.change(screen.getByLabelText('Choose Time:'), { target: { value: mockAvailableTimes[0] } });
    fireEvent.change(screen.getByLabelText('Number of Guests:'), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText('Occassion:'), { target: { value: 'Birthday' } });
  
    // Simulate form submission
    fireEvent.click(screen.getByDisplayValue(/confirm reservation/i));
  
    expect(mockSubmitForm).toHaveBeenCalled();
  });
  