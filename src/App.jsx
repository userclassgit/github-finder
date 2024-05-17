import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/reset.css';
import './css/style.css';
import Search from './components/Search';
import User from './components/User';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/user/:username">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;