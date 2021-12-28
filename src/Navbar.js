import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <Router>
            <nav class="navbar navbar-expand-lg navbar-light">
                <p class="navbar-brand" href="#">Manjula Tekal</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Switch>
                            <Route exact path="/">
                                <li class="nav-item active">
                                    <Link class="nav-link" to=""><p>Home</p></Link><span class="sr-only">(current)</span>
                                </li>
                            </Route>
                            <Route>
                                <li class="nav-item">
                                    <Link class="nav-link" to=""><p>Home</p></Link>
                                </li>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/about">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="about"><p>About</p></Link><span class="sr-only">(current)</span>
                                </li>
                            </Route>
                            <Route>
                                <li class="nav-item">
                                    <Link class="nav-link" to="about"><p>About</p></Link>
                                </li>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/books">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="books"><p>Books</p></Link><span class="sr-only">(current)</span>
                                </li>
                            </Route>
                            <Route>
                                <li class="nav-item">
                                    <Link class="nav-link" to="books"><p>Books</p></Link>
                                </li>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/stories">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="stories"><p>Stories and Articles</p></Link><span class="sr-only">(current)</span>
                                </li>
                            </Route>
                            <Route>
                                <li class="nav-item">
                                    <Link class="nav-link" to="stories"><p>Stories and Articles</p></Link>
                                </li>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/blog">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="blog"><p>Blog</p></Link><span class="sr-only">(current)</span>
                                </li>
                            </Route>
                            <Route>
                                <li class="nav-item">
                                    <Link class="nav-link" to="blog"><p>Blog</p></Link>
                                </li>
                            </Route>
                        </Switch>
                    </ul>
                </div>
            </nav>
        </Router>
    );
}

export default Navbar;