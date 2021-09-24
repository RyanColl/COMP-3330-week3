import logo from '../logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { addBug, removeBug, resolveBug } from "../Redux/actions";
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
function App() {
  return (
    <div className="App">
      <div className="App-header">
          <Nav />
          <div className='content'>
          <Switch>
            <Route path='/' exact={true}>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
