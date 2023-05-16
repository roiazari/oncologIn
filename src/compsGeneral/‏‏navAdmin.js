import React from 'react'
import { Link } from 'react-router-dom';
import "./general.css";
export default function NavAdmin() {
  return (
    
    <header class="container-fluid d-flex  align-items-center text-center">
    <div class="container ">
        <div class="burger"><i id="burger_btn" class="fa fa-bars" aria-hidden="true" ></i>
        </div>
        <nav id="nav_open">
          
            <Link to="/advisorsAdmin">Advices List</Link>
            <Link to="/couponsAdmin">Coupons List</Link>
            {/* <Link to="/postsAdmin">Posts List</Link> */}
            <Link to="/usersAdmin">Users List</Link>
            |<Link to="/">Back to Home Page</Link>|
        </nav>
    </div>
</header>
  )
}
