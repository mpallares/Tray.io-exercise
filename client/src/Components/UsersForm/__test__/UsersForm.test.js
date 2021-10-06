import React from 'react';
import { render, screen } from '@testing-library/react';
import { UsersForm } from '../UsersForm';
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const MockUsersForm = () => {
  return (
    <Provider store={store}>
      <Router>
        <UsersForm />
      </Router>
    </Provider>
  );
};

describe('UsersForm component', () => {
  test('render email input', () => {
    render(<MockUsersForm />);

    const inputEl = screen.getByTestId('email-element');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'text');
  });

  test('text is on the form', () => {
    render(<MockUsersForm />);
    const linkElement = screen.getByText(/name/i);
    expect(linkElement).toBeInTheDocument();
  });
});
