import React from 'react'
import { Link } from 'react-router-dom';
// import "../general.css";
export default function NavUser() {
  return (
    <header class="container-fluid d-flex  align-items-center text-center">
    <div class="container ">
        <div class="burger"><i id="burger_btn" class="fa fa-bars" aria-hidden="true" ></i>
        </div>
        <nav id="nav_open">
            <Link to="/">Back Home Page</Link>
        </nav>

    </div>
</header>
  )
}
