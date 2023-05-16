import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export default function InputAdvisors() {
  
  const searchRef = useRef();
  // can send the user manualy to another url/link
  const nav = useNavigate();
  return (
    <div className='container-fluid inputSearch p-2' >
        <div className='container '>
            <nav className='d-flex col-md-4  col-auto navSearch'>
                <input ref={searchRef}  type="search" className="form-control w-20" />
                <button onClick={() => {
                  nav("/advisors?s="+searchRef.current.value)
                }} className='btn btn-dark ms-2'>Search</button>
            </nav>
      
        </div>
    </div>
  )
}
