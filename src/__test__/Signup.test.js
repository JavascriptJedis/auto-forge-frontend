import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter is used for testing react-router components
import Signup from '../pages/Signup';

describe('Signup Component', () => {
  test('renders signup form with Email, Password, and Confirm Password fields', () => {
    render(
      <MemoryRouter>
        <Signup signup={() => {}} />
      </MemoryRouter>
    );
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const submitButton = screen.getByText('Submit');

    expect(emailInput).toBeInTheDocument('Email');
    expect(passwordInput).toBeInTheDocument('Password');
    expect(confirmPasswordInput).toBeInTheDocument('Confirm Password');
    expect(submitButton).toBeInTheDocument('submit');
  });

  test('updates Email, Password, and Confirm Password fields on input change', () => {
    render(
      <MemoryRouter>
        <Signup signup={() => {}} />
      </MemoryRouter>
    );
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'testPassword' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('testPassword');
    expect(confirmPasswordInput.value).toBe('testPassword');
  });

  test('submits the form with correct Email, Password, and Confirm Password values', () => {
    render(
      <MemoryRouter>
        <Signup signup={() => {}} />
      </MemoryRouter>
    );
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'testPassword' } });
    fireEvent.click(submitButton);

    // You may need to implement a mock signup function and assert its usage
    // For example: expect(mockSignupFunction).toHaveBeenCalledWith({ email: 'test@example.com', password: 'testPassword' });
  });
});
