import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ActionType } from '../../redux/actions/actionTypes';
import { BsCheckLg } from 'react-icons/bs';
import './Done.css';

export const Done: React.FC<{}> = (): JSX.Element => {
  const userStore = useAppSelector((state) => state.user);
  const checkboxStore = useAppSelector((state) => state.checkbox);
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
      dispatch({ type: ActionType.CREATE__PAGE, payload: 'users' });
      console.log('USER INFO', JSON.stringify(userStore));
      console.log('CHECKBOX INFO', JSON.stringify(checkboxStore));
    }, 5000);
  }, []);
  return (
    <div className="done-main-container">
      <div className="done-form-container">
        <div className="check-icon">{<BsCheckLg />}</div>
        <p data-testid="p-content" className="text-done">
          Please verify your email address, you should have received an email
          from us already!
        </p>
      </div>
    </div>
  );
};
