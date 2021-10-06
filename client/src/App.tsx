import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { UsersForm } from './Components/UsersForm/UsersForm';
import { Done } from './Components/Done/Done';
import { Privacy } from './Components/Privacy/Privacy';

import './App.css';
import { Navigation } from './Components/Navigation/Navigation';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={UsersForm} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/done" exact component={Done} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
