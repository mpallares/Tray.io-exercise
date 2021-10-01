import React, { useState } from 'react';
interface User {
  person: {
    name: string;
    role: string;
    email: string;
    password: string;
  };
}
function useInput(initialValue: User['person']) {
  const [value, setValue] = useState<User['person']>(initialValue);
  const reset = () => {
    setValue(value);
  };
const bind = {
  value, 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {setValue({...value, [e.target.name]: e.target.value})}
}
  return [value, bind, reset]
}

export default useInput;
