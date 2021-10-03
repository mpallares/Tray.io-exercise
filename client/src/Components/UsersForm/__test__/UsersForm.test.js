import React from 'react';
import { render, screen } from '@testing-library/react';
import {Users} from '../Users';

test('renders h3 tag in the DOM', () => {
  render(<UsersForm />);
  const linkElement = screen.getByText(/users/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders h3 tag in the DOM', () => {
  render(<UsersForm />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toBeInTheDocument();
});
