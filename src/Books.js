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
                <Link to="/devyani"><img class="book-img" src="https://garudabooks.com/cache/large/product/9742/Devyani-Front-cover.jpg"/></Link>
            </div>
            <div class="col">
                <Link to="/azad"><img class="book-img" src="https://garudabooks.com/cache/large/product/9805/s7E28kKSpzdBrx5OGANpqDqYYOnr1JjlxKYCSeo1.jpeg"/></Link>
            </div>
        </div>
    )
}

export default Books;