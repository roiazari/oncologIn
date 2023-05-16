import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header class="container-fluid d-flex  align-items-center text-center">
    <div class="container ">
        <div class="burger"><i id="burger_btn" class="fa fa-bars" aria-hidden="true" ></i>
        </div>
        <nav id="nav_open">
            <Link to="/">Home</Link>
            <Link to="/advisors">Advisors</Link>
            <Link to="/coupons">Coupons</Link>
            {/* <Link to="/posts">Posts</Link> */}
            <Link to="">Contact Us</Link>
        </nav>

    </div>
</header>
  )
}
