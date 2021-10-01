import React from 'react';
import useInput from '../../hooks/useInput'

interface User {
  person: {
    name: string;
    role: string;
    email: string;
    password: string;
  };
}

export const Users: React.FC<User['person']> = (person): JSX.Element => {
   const [name, bind, reset] = useInput(person)
   console.log(name)
  return (
    <div>
      <form>
        <div>
          <label>name</label>
          <input />
        </div>
        <div>
          <label>role</label>
          <input />
        </div>
        <div>
          <label>email</label>
          <input />
        </div>
        <label>email</label>
        <input />
        <div>
          <label>password</label>
          <input />
        </div>
        <button></button>
      </form>
    </div>
  );
};
