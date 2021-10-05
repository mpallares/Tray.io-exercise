import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import {useHistory} from 'react-router-dom'
import { ActionType } from '../../redux/actions/actionTypes';
import './Privacy.css';

export const Privacy: React.FC<{}> = (): JSX.Element => {
  const history = useHistory()
  const [checked, setChecked] = useState({
    firstCheckbox: false,
    secondCheckbox: false,
  });
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: ActionType.CREATE__CHECKBOX, payload: checked });
    history.push('/done')
    dispatch({type: ActionType.CREATE__PAGE, payload: 'done'})
  };

  return (
    <div className="privacy-container">
      <form className="checkbox-form-container" onSubmit={submitHandler}>
        <div className="checkbox-container">
          <label className="label-checkbox-container">
            Receive updates about Tray.io product by email
            <input
              checked={checked.firstCheckbox}
              type="checkbox"
              onChange={(e) =>
                setChecked({ ...checked, firstCheckbox: e.target.checked })
              }
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="checkbox-container">
          <label className="label-checkbox-container">
            Receive communication by email for other products created by the
            Tray.io team
            <input
              checked={checked.secondCheckbox}
              type="checkbox"
              onChange={(e) =>
                setChecked({ ...checked, secondCheckbox: e.target.checked })
              }
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="button-checkbox-container">
          <button className="submit-button-checkbox">Submit</button>
        </div>
      </form>
    </div>
  );
};
