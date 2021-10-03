import React, { useState } from 'react';
import {UsersForm} from './Components/UsersForm/UsersForm';
import {Done} from './Components/Done/Done';
import {Privacy} from './Components/Privacy/Privacy';

import './App.css';
import { Navigation } from './Components/Navigation/Navigation';

export interface IState {
  page: 'users' | 'privacy' | 'done';
}
const App = () => {
  const [page, setPage] = useState<IState['page']>('users');

  const renderPage = (): JSX.Element => {
    if (page === 'users') return <UsersForm  />;
    else if (page === 'privacy') return <Privacy />;
    else return <Done />;
  };
  return (
    <div className="App">
      <Navigation page={page} setPage={setPage} />
      <span>{renderPage()}</span>
    </div>
  );
};

export default App;
