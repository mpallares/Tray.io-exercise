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
    dispatch({ type: ActionType.CREATE__USER, payload:  user})
  }
  
  const {changeHandler, submitHandler, user} = useForm(submit)
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
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            required
            value={user.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="role">role</label>
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            required
            value={user.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            required
            value={user.password}
            onChange={changeHandler}
          />
        </div>
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
};
