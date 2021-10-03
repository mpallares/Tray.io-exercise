import { useState, useEffect } from 'react';
import validate from '../helpers/validate';

type Callback = {
  onSubmit: () => void;
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
   
  }, [errors]);

  return {
    changeHandler,
    submitHandler,
    user,
    errors,
    setUsers
  };
};

export default useForm;
