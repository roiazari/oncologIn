import React from 'react'
import { Link } from 'react-router-dom';
import useAuthRedirect from '../services/hooks/auth';
export default function StripCoupons() {
  const isUserSignIn= useAuthRedirect(false);
 const returnLogOutOrSignIn = ()=>{
    
  if(isUserSignIn){
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
   
   }
 } 
  return (
    <React.Fragment>
          <div className='links'>
          <Link className='p-2' to= "/signIn" onClick={returnLogOutOrSignIn}> {isUserSignIn? "Logout" : "Sign In"}</Link>
          </div>
      <div class="strip container-fluid d-flex align-items-center" >
        <div class="container">
          <h1 class="display-3 text-center" >Coupons Manage Page</h1>
        </div>
      </div>
    </React.Fragment>
  )
}
