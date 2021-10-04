import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ActionType } from '../../redux/actions/actionTypes';
import useForm from '../../hooks/useForm';
import validate from '../../helpers/validate';
import './UsersForm.css';


export const UsersForm: React.FC<{}> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const userStore = useAppSelector((state) => state.user);

  console.log('USERSSSS', userStore)

  const submit = () => {
    dispatch({ type: ActionType.CREATE__USER, payload: user });
    setUsers({
      name: '',
      role: '',
      email: '',
      password: '',
    });
  };
  const { changeHandler, submitHandler, user, errors, setUsers } = useForm(
    submit,
    validate
  );
  console.log('user from redux', userStore);

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={submitHandler}>
        <div className="name-field">
          <label className="required label-title" htmlFor="name">
            name:{' '}
          </label>
          <input
            type="text"
            name="name"
            required
            value={user.name}
            onChange={changeHandler}
          />
        </div>
        <div className="name-field">
          <label className="label-title" htmlFor="role">
            role:{' '}
          </label>
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={changeHandler}
          />
        </div>
        <div className="name-field">
          <label className="required label-title" htmlFor="email">
            email:{' '}
          </label>
          <input
            type="text"
            name="email"
            required
            value={user.email}
            onChange={changeHandler}
          />
          {errors.email && <p className="email-error">{errors.email}</p>}
        </div>
        <div className="name-field">
          <label className="required label-title" htmlFor="password">
            password:{' '}
          </label>
          <input
          className="asterisk"
            type="password"
            name="password"
            required
            value={user.password}
            onChange={changeHandler}
          />
          {errors.password && <p className="password-error">{errors.password}</p>}
        </div>
        <div className="name-field">
          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};
