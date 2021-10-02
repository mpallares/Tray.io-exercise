import { useState, useEffect } from 'react';
import validate from '../helpers/validate';

type Callback = {
  onSubmit: () => void;
  // validateUser: ({ name:string ,
  // role: string,
  // email: string,
  // password: string}) => {}
};
const useForm = (submit: Callback['onSubmit'], validate: any) => {
  const [user, setUsers] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUsers({ ...user, [name]: value });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setErrors(validate(user));
  };
  
  useEffect(() => {
    if (Object.keys(errors).length === 0) submit();
    setUsers({
      name: '',
      role: '',
      email: '',
      password: '',
    });
  }, [errors]);

  return {
    changeHandler,
    submitHandler,
    user,
    errors,
  };
};

export default useForm;
