import React, { SetStateAction, Dispatch, useState } from 'react';
import './Navigation.css';

import { IState as Props2 } from '../../App';
interface IProps {
  page: Props2['page'];
  setPage: Dispatch<SetStateAction<IProps['page']>>;
}

export const Navigation: React.FC<IProps> = ({ page, setPage }) => {

  return (
    <div>
      <nav className="nav-container">
        <button className={page == 'users'? 'user-change': 'button'} onClick={() => setPage('users')}>
          Users
        </button>
        <button className={page == 'privacy'? 'privacy-change': 'button'} onClick={() => setPage('privacy')}>
          Privacy
        </button>
        <button className={page == 'done'? 'done-change': 'button'} onClick={() => setPage('done')}>
          Done
        </button>
      </nav>
    </div>
  );
};
