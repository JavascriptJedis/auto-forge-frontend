import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';

describe('Login Component', () => {
  test('renders login form with email and password fields', () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const loginButton = screen.getByText('Login');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('updates email and password fields on input change', () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('testPassword');
  });

  test('submits the form with correct email and password values', () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    });
});
