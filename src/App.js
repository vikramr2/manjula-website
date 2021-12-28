import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Books from './Books';
import Book from './Book';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Story from './Story';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/blog">
            <Navbar current="blog"/>
            <Blog/>
          </Route>
          <Route path="/stories">
            <Navbar current="stories"/>
            <Story/>
          </Route>
          <Route path="/books">
            <Navbar current="books"/>
            <Books/>
          </Route>
          <Route path="/about">
            <Navbar current="about"/>
            <About/>
          </Route>
          <Route path="/devyani">
            <Navbar current="books"/>
            <Book current="devyani"/>
          </Route>
          <Route path="/azad">
            <Navbar current="books"/>
            <Book current="azad"/>
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
