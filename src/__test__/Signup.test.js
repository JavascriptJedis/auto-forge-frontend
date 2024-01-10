import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter is used for testing react-router components
import Signup from '../pages/Signup';

describe('Signup Component', () => {
  test('renders signup form with email, password, and confirm password fields', () => {
    render(
      <MemoryRouter>
        <Signup signup={() => {}} />
      </MemoryRouter>
    );
    
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const confirmPasswordInput = screen.getByPlaceholderText('confirm password');
    const submitButton = screen.getByText('Submit');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('updates email, password, and confirm password fields on input change', () => {
    render(
      <MemoryRouter>
        <Signup signup={() => {}} />
      </MemoryRouter>
    );
    
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const confirmPasswordInput = screen.getByPlaceholderText('confirm password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'testPassword' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('testPassword');
    expect(confirmPasswordInput.value).toBe('testPassword');
  });

  test('submits the form with correct email, password, and confirm password values', () => {
    render(
      <MemoryRouter>
        <Signup signup={() => {}} />
      </MemoryRouter>
    );
    
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const confirmPasswordInput = screen.getByPlaceholderText('confirm password');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'testPassword' } });
    fireEvent.click(submitButton);

    // You may need to implement a mock signup function and assert its usage
    // For example: expect(mockSignupFunction).toHaveBeenCalledWith({ email: 'test@example.com', password: 'testPassword' });
  });
});
