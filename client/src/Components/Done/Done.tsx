import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import './Done.css';

export const Done: React.FC<{}> = (): JSX.Element => {
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
