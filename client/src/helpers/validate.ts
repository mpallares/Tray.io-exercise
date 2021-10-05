import { User, Errors } from '../types';

export default function validate(values: User) {
  const validPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{10,})$/;
  let errors: Errors = {};

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (!validPassword.test(values.password)) {
    errors.password =
      'Password needs to be a minimum of 10 characters, at least: 1 uppercase, 1 lowercase, 1 number';
  }

  return errors;
}
