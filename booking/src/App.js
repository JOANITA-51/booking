import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Header title = 'Schotrix'/>
      <Home/>

      <Features/>

      
    </div>
  );
}

export default App;
