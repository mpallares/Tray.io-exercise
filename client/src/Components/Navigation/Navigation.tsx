import React, {SetStateAction, Dispatch} from 'react';

import { IState as Props2 } from '../../App'
interface IProps {
  page: Props2['page']
  setPage: React.Dispatch<React.SetStateAction<IProps['page']>>
}

// interface Props {
//   setPage: Dispatch<SetStateAction<string>>;
//   page: string
// }

export const Navigation:React.FC<IProps> = ({ page, setPage } ) => {
  return (
    <div>
      <nav className="links">
        <button className="button" onClick={() => setPage('users')}>Users</button>
        <button className="button" onClick={() => setPage('privacy')}>Privacy</button>
        <button className="button" onClick={() => setPage('done')}>Done</button>
      </nav>
    </div>
  );
}
