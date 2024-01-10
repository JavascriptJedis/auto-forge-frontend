import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';
import { BrowserRouter } from 'react-router-dom';

describe("<About />", () => {
    const renderNew = () => {
      render(
          <BrowserRouter>
              <About />
          </BrowserRouter>
      )
  }
    it('renders all team members', () => {
    renderNew()
    
    expect(screen.getByText('Jackson Pruett')).toBeInTheDocument();
    expect(screen.getByText('Jonathan Raya')).toBeInTheDocument();
    expect(screen.getByText('Justin Pinkard')).toBeInTheDocument();
    expect(screen.getByText('Jean Aragon')).toBeInTheDocument();
    })
  })
  