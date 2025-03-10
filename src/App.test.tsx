import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router';

test('header should render', () => {
  render(<App />,{wrapper: BrowserRouter});
  const headerElement = screen.getByText(/Data Viewer App/i);
  expect(headerElement).toBeInTheDocument();
});
