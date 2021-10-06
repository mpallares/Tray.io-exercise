import React from 'react';
import { render, screen } from '@testing-library/react';
import {Done} from '../Done'

const MockDone = () => {
  return (
    <Provider store={store}>
      <Router>
        <Done/>
        </Router>
      </Provider>
  )
}
test('renders h3 tag in the DOM', () => {
  render(<Done />);
  const linkElement = screen.getByText(/users/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders h3 tag in the DOM', () => {
  render(<UsersForm />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toBeInTheDocument();
});