import React, { useState } from 'react';
import {useAppDispatch} from '../../redux/hooks'
import { ActionType } from '../../redux/actions/actionTypes';
import './Privacy.css';

export const Privacy: React.FC<{}> = (): JSX.Element => {
  const [checked, setChecked] = useState({
    firstCheckbox: false,
    secondCheckbox: false,
  });
  const dispatch = useAppDispatch()

 const submitHandler = (e:React.FormEvent) => {
  e.preventDefault()
  dispatch({type: ActionType.CREATE__CHECKBOX, payload: checked})
 }

  return (
    <div className="privacy-container">
      <form className="checkbox-form-container" onSubmit={submitHandler} >
        <div className="checkbox-container">
          <input
            checked={checked.firstCheckbox}
            type="checkbox"
            onChange={(e) =>
              setChecked({ ...checked, firstCheckbox: e.target.checked })
            }
          />
          <label>Receive updates about Tray.io product by email</label>
        </div>
        <div className="checkbox-container">
          <input
            checked={checked.secondCheckbox}
            type="checkbox"
            onChange={(e) =>
              setChecked({ ...checked, secondCheckbox: e.target.checked })
            }
          />
          <label>
            Receive communication by email for other products created by the
            Tray.io team
          </label>
        </div>
        <div className="checkbox-container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
