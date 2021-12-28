import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar({ current }) {
    var home = current == "home" ? "active" : "";
    var about = current == "about" ? "active" : "";
    var books = current == "books" ? "active" : "";
    var stories = current == "stories" ? "active" : "";
    var blog = current == "blog" ? "active" : "";

    return (
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="p-4">
                    <span class="text-muted"><Link class="nav-link" to=""><p>Home</p></Link></span>
                    <span class="text-muted"><Link class="nav-link" to="about"><p>About</p></Link></span>
                    <span class="text-muted"><Link class="nav-link" to="books"><p>Books</p></Link></span>
                    <span class="text-muted"><Link class="nav-link" to="stories"><p>Stories</p></Link></span>
                    <span class="text-muted"><Link class="nav-link" to="blog"><p>Blog</p></Link></span>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <p class="navbar-brand" href="#">ಮಂಜುಳ</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class={"nav-item " + home}>
                            <Link class="nav-link" to=""><p>Home</p></Link>
                        </li>
                        <li class={"nav-item " + about}>
                            <Link class="nav-link" to="about"><p>About</p></Link>
                        </li>
                        <li class={"nav-item " + books}>
                            <Link class="nav-link" to="books"><p>Books</p></Link>
                        </li>
                        <li class={"nav-item " + stories}>
                            <Link class="nav-link" to="stories"><p>Stories and Articles</p></Link>
                        </li>
                        <li class={"nav-item " + blog}>
                            <Link class="nav-link" to="blog"><p>Blog</p></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;