import React from 'react';
import { render, screen, getByTestId } from '@testing-library/react';
import { Done } from '../Done';
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const MockDone = () => {
  return (
    <Provider store={store}>
      <Router>
        <Done />
      </Router>
    </Provider>
  );
};

test('renders h3 tag in the DOM', () => {
  render(<MockDone />);
  const inputEl = screen.getByTestId('p-content');
  expect(inputEl).toBeInTheDocument();
});

