import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Privacy } from '../Privacy';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import store from '../../../redux/store';

const MockPrivacy = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <MockPrivacy />
        </Switch>
      </Router>
    </Provider>
  );
};

test('renders button on screen', async () => {
  render(<MockPrivacy />);
  const linkElement = await screen.findAllByRole('input');
  expect(linkElement.length).toBe(2);
});

// test('renders h3 tag in the DOM', () => {
//   render(<MockPrivacy />);
//   const linkElement = screen.getByText(/users/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders h3 tag in the DOM', () => {
//   render(<MockPrivacy />);
//   const inputElement = screen.getByRole('input');
//   fireEvent(inputElement,{ target: { value: 'Go Grocery shopping' } })
//   expect(inputElement).toBeInTheDocument();
// });

const mockedSetTodo = jest.fn();

//using getBy
// describe('AddInput', () => {
//   it('should render input element', async () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />)
//     const inputEl = screen.getByPlaceholderText(/Add a new task here.../i)
//     expect(inputEl).toBeInTheDocument()
//   })
//   it('should be able to type in input', async () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />)
//     const inputEl = screen.getByPlaceholderText(/Add a new task here.../i)
//     fireEvent.change(inputEl, { target: { value: 'Go Grocery shopping' } })
//     expect(inputEl.value).toBe('Go Grocery shopping')
//   })
//   it('should have empty input when add button is clicked', async () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />)
//     const inputEl = screen.getByPlaceholderText(/Add a new task here.../i)
//     const buttonEl = screen.getByRole('button', { name: /Add/i })
//     fireEvent.change(inputEl, { target: { value: 'Go Grocery shopping' } })
//     fireEvent.click(buttonEl)
//     expect(inputEl.value).toBe('')
//   })
// })
