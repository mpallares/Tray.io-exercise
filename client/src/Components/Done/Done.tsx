import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../redux/hooks';
import { ActionType } from '../../redux/actions/actionTypes';
import { BsCheckLg } from 'react-icons/bs';
import './Done.css';

export const Done: React.FC<{}> = (): JSX.Element => {

  const history = useHistory()
  const dispatch = useAppDispatch()
  

useEffect(() => {
  setTimeout(() => {
    history.push('/')
  dispatch({type: ActionType.CREATE__PAGE, payload: 'users'})
  }, 5000)
}, [])
  return (
    <div className="done-main-container">
      <div className="done-form-container">
        <div className="check-icon">
          {<BsCheckLg/>}
        </div>
        <p className="text-done">
          Please verify your email address, you should have received an email
          from us already!
        </p>
      </div>
    </div>
  );
};
