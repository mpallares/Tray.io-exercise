import { useState, useEffect } from 'react';


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
    // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    // const name = event.target.name;
    const { name, value} = event.target;
    setUsers((prev) =>  ({...prev, [name]: value}));

    

    //setUsers({ ...user, name: e.target.value, role: e.target.value, email: e.target.value, password: e.target.value, firstCheckbox:e.target.checked, secondCheckbox: e.target.checked });
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
