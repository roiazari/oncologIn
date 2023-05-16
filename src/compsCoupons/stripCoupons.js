import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuthRedirect from '../services/hooks/auth';


export default function StripCoupons() {
  const isUserSignIn= useAuthRedirect(false);
  const[menu ,setMenu ] =useState([]); 
  useEffect(()=>{
   if(menu.length==0)
    getMenuByUserType();
    console.log(menu);
  },[menu]);
 
  const returnLogOutOrSignIn = ()=>{
     
      if(isUserSignIn){
       localStorage.removeItem("token");
       localStorage.removeItem("user_type");
      
      }
  } 
  const getMenuByUserType=()=>{
   let userType=localStorage.getItem("user_type");
   if(userType=="user"){
     setMenu([ <Link className='p-2' to="/userPage">userPage</Link>]);
   }
   else if(userType=="advisor"){
     setMenu([ <Link className='p-2' to="/advisorPage">advisorPage</Link> ]);
   }
   else if(userType=="business"){
     setMenu([ <Link className='p-2' to="/couponsPage">couponsPage</Link>]);
   }
   else{
     setMenu([ <Link className='p-2' to="/signIn">Dashboard</Link>]);
   }
   
 
  }
  console.log(localStorage.getItem("user_type"));
  return (
    <React.Fragment>
      <div className='links'>
      <Link className='p-2' to= "/signIn" onClick={returnLogOutOrSignIn}> {isUserSignIn? "Logout" : "Sign In"}</Link>
          
      {menu.map((item)=>{
          return item;
        })}
      </div>
      <div class="strip container-fluid d-flex align-items-center" >
        <div class="container">
          <h1 class="display-3 text-center" >Coupons</h1>
        </div>
 
        
    
      </div>
    </React.Fragment>
  )
}
