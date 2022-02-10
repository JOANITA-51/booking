import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Features from './components/Features';
import Steps from './components/Steps';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import BookNow from './components/pages/BookNow';
import './App.css'
import NavBar from './components/NavBar';
import Submit from './components/pages/Submit'
import EditBookNow from './components/pages/EditBookNow';
import BookNowList from './components/pages/BookNowList';
import Users from './components/pages/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar title = 'chotrix'/>
        <Routes>
         
          <Route exact path = "/" component = {Home} />
          <Route path = "/features" component = {Features} />
          <Route path = "/steps" component = {Steps} />
          <Route path ="/log-in" component = {LogIn} />
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/book-now"  component={BookNow} />
          <Route path="/submit/:id" ><Submit /></Route>
          <Route path="/edit/:id" ><EditBookNow /></Route>
          <Route path="/list" ><BookNowList/></Route>
          <Route path="/users" ><Users/></Route>
          
        </Routes>
      </Router>
     
                
    </div>
  );
}

export default App;
