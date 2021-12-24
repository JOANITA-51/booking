import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar title = 'Schotrix'/>
        <Switch>
          <Route exact path = "/" component = {Home} />
        </Switch>
      </Router>
     
                
    </div>
  );
}

export default App;
