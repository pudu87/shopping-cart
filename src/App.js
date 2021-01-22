import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
