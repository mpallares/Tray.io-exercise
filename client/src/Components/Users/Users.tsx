import React, { useState } from 'react';


interface User {
  person: {
    name: string;
    role: string;
    email: string;
    password: string;
  };
}

export const Users: React.FC<{}> = (): JSX.Element => {

  const initialUser = {
    name: '',
    role: '',
    email: '',
    password: ''
  }
  const [user, setUser] = useState(initialUser);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(initialUser);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
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
            type="text"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={changeHandler}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
