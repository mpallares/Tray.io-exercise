import React, { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ActionType } from '../../redux/actions/actionTypes';
import useForm from '../../hooks/useForm'
import { Callback } from '../../types';

import passwordValidator from 'password-validator';
const schema = new passwordValidator();

schema
  .is()
  .min(10)
  .has()
  .uppercase(1)
  .has()
  .lowercase(1)
  .has()
  .digits(1)
  .has()
  .not()
  .spaces();

export const Users: React.FC<{}> = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const userStore = useAppSelector((state) => state.user);

  const submit = () => {
    dispatch({ type: ActionType.CREATE__USER, payload:  values})
  }
  
  const {handleChange, handleSubmit, values} = useForm(submit)
  console.log('user from redux', userStore);


  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.name === 'password') {
  //     const validate = schema.validate(e.target.value);
  //     if (validate) {
  //       setUser((previousState) => ({
  //         ...previousState,
  //         [e.target.name]: e.target.value,
  //       }));
  //     } else {
  //       console.log('invalid');
  //     }
  //   }
  //   setUser((previousState) => ({
  //     ...previousState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            required
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">role</label>
          <input
            type="text"
            name="role"
            value={values.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
};
