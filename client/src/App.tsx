import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { UsersForm } from './Components/UsersForm/UsersForm';
import { Done } from './Components/Done/Done';
import { Privacy } from './Components/Privacy/Privacy';

import './App.css';
import { Navigation } from './Components/Navigation/Navigation';

// export interface IState {
//   page: 'users' | 'privacy' | 'done';
// }
const App = () => {
 

  // const renderPage = (): JSX.Element => {
  //   if (page === 'users') return <UsersForm />;
  //   else if (page === 'privacy') return <Privacy />;
  //   else return <Done />;
  // };
  return (
      <Router>
        <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={UsersForm} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/done" exact component={Done} />
          {/* <span>{renderPage()}</span> */}
        </Switch>
      </div>
      </Router>
      
   
  );
};

//<Route path="/checkout" component={Library} />
export default App;
