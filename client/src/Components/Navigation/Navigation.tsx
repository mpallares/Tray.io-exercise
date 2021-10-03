import React, { SetStateAction, Dispatch } from 'react';
import './Navigation.css';

import { IState as Props2 } from '../../App';
interface IProps {
  page: Props2['page'];
  setPage: Dispatch<SetStateAction<IProps['page']>>;
}

export const Navigation: React.FC<IProps> = ({ page, setPage }) => {
  console.log('foysal');
  return (
    <div>
      <nav className="nav-container">
        <button className="button" onClick={() => setPage('users')}>
          Users
        </button>
        <button className="button" onClick={() => setPage('privacy')}>
          Privacy
        </button>
        <button className="button" onClick={() => setPage('done')}>
          Done
        </button>
      </nav>
    </div>
  );
};
