import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Books() {
    return (
        <div class="slide row center2">
            <div class="col">
                <Link to="/devyani"><img class="book-img" src="https://m.media-amazon.com/images/I/51+6e5U1HML._SY346_.jpg" width='40px' height='auto'/></Link>
            </div>
            <div class="col">
                <Link to="/azad"><img class="book-img" src="https://m.media-amazon.com/images/I/41imKMm7cgL._AC_SY780_.jpg" width='40px' height='auto'/></Link>
            </div>
        </div>
    )
}

export default Books;