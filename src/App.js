import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/blog">
            <Navbar current="blog"/>
            <About/>
          </Route>
          <Route path="/stories">
            <Navbar current="stories"/>
            <About/>
          </Route>
          <Route path="/books">
            <Navbar current="books"/>
            <About/>
          </Route>
          <Route path="/about">
            <Navbar current="about"/>
            <About/>
          </Route>
          <Route exact path="/">
            <Navbar current="home"/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
