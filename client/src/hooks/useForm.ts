import { useState } from 'react';

type Callback = {
    onSubmit:() => void
}
const useForm = (submit: Callback['onSubmit']) => {
  const [values, setValues] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    submit()
  }

  return {
      handleChange,
      handleSubmit,
      values
  }
};

export default useForm
