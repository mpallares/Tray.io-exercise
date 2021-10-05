import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {useAppDispatch} from '../redux/hooks'
import {ActionType} from '../redux/actions/actionTypes'

type Callback = {
  onSubmit: () => void;
};
export interface IState {
  page: 'users' | 'privacy' | 'done';
}
const useForm = (submit: Callback['onSubmit'], validate: any) => {
  const history = useHistory()
  const dispatch = useAppDispatch()
 
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
    const { name, value} = event.target;
    setUsers((prev) =>  ({...prev, [name]: value}));
  };

  const submitHandler = (event: React.FormEvent) => {
    
    event.preventDefault();
    setErrors(validate(user)); 
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      
      submit();
      history.push('/privacy')
      dispatch({ type: ActionType.CREATE__PAGE, payload: 'privacy' })
     
     }
     
  }, [errors]);

  return {
    changeHandler,
    submitHandler,
    user,
    errors,
    setUsers,
  };
};

export default useForm;
