import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Features from './components/Features';
import Steps from './components/Steps';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import BookNow from './components/pages/BookNow';
import './App.css'
import NavBar from './components/NavBar';
import Submit from './components/pages/Submit'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar title = 'chotrix'/>
        <Switch>
         
          <Route exact path = "/" component = {Home} />
          <Route path = "/features" component = {Features} />
          <Route path = "/steps" component = {Steps} />
          <Route path ="/log-in" component = {LogIn} />
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/book-now"  component={BookNow}/>
          <Route path="/submit/:id" ><Submit /></Route>
          
        </Switch>
      </Router>
     
                
    </div>
  );
}

export default App;
