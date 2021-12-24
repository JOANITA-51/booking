import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Features from './components/Features';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar title = 'chotrix'/>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/features" component = {Features} />
          <Route path = "/steps" component = {Home} />
        </Switch>
      </Router>
     
                
    </div>
  );
}

export default App;
