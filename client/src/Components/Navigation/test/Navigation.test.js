import React from 'react';
import store from '../../../redux/store'
import { render, screen } from '@testing-library/react';
import {Navigation} from '../Navigation'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

const MockNavigation = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation/>
        </Router>
      </Provider>
  )
}

describe('Navigation component', () => {
  test('renders button on screen', async () => {
    render(<MockNavigation />);
    const linkElement = await screen.findAllByRole('button');
    expect(linkElement.length).toBe(3);
  });
  
  test('renders correct text in the DOM', () => {
    render(<MockNavigation />);
    const items = screen.getByText(/users/i);
    expect(items).toBeInTheDocument();
  });
  
  test('renders text contained in HTML button', () => {
    render(<MockNavigation />);
    const items = screen.getByText(/users/i);
    expect(items).toContainHTML('button');
  });
})

