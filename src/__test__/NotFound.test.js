import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('NotFound Component', () => {
  test('renders NotFound message', () => {
    render(<NotFound />);
    
    const notFoundElement = screen.getByText('404 NotFound');

    expect(notFoundElement).toBeInTheDocument();
  });
});
