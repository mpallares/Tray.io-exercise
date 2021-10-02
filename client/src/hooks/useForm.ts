import { useState } from 'react';

type Callback = {
    onSubmit:() => void
}
const useForm = (submit: Callback['onSubmit']) => {
  const [user, setUsers] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUsers({ ...user, [name]: value });
  };

  const submitHandler= (event: React.FormEvent) => {
    event.preventDefault()
    submit()
  }

  return {
      changeHandler,
      submitHandler,
      user
  }
};

export default useForm
