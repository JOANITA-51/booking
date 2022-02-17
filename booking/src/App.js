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
import Success from './components/pages/Success'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar title = 'chotrix'/>
        <Routes>
         
          <Route path = "/" element={<Home/>} />
          <Route path = "/features" element= {<Features/>} />
          <Route path = "/steps" element = {<Steps/>} />
          <Route path ="/log-in" element = {<LogIn/>} />
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/book-now"  element={<BookNow/>} />
          <Route path="/submit/:id" element={<Submit/>} />
          <Route path="/edit/:id" elementt={<EditBookNow/>}  />
          <Route path="/list" element={<BookNowList/>} />
          <Route path="/users-list" element={<Users/>}/>
          <Route path="/success" element={<Success/>}/>
        </Routes>
      </Router>
     
                
    </div>
  );
}

export default App;
