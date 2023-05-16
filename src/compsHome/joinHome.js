import React from 'react'
import { Link } from 'react-router-dom';
export default function JoinHome() {
  return (
    <div class="join container-fluid py-3 d-flex text-center" data-aos="zoom-out-down">
        <div class="container">
            <h2 class=" display-5 text-center">Share us with your problems</h2>
            <p class="lead text-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
                officia ipsa voluptatum nisi autem
                architecto ad fuga dicta modi assumenda aperiam, magnam nihil. Est temporibus sit, alias repellendus
                odit facilis reprehenderit veritatis cupiditate impedit!</p>
           <Link to="/register"> <button class=" btn btn-info">Register now</button></Link>
        </div>
    </div>
  )
}
