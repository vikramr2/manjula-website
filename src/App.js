import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <p className='centercenter'>Manjula Tekal</p>
    </div>
  );
}

export default App;
