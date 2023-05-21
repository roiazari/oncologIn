import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function NavCoupons() {
  const nav = useNavigate();
  return (
    <React.Fragment>
    <div className='d-flex text-center justify-content-center mx-auto container display-6  gap-16'>
        <div className='link ' onClick={()=>{nav("/coupons?s=pizza")}} > Pizza | </div>
        <div className='link' onClick={()=>{nav("/coupons?s=burger")}}> Hamburger | </div>
        <div className='link' onClick={()=>{nav("/coupons?s=ice Cream")}}> Ice Cream | </div>
        <div className='link' onClick={()=>{nav("/coupons?s=sushi")}}> Sushi  </div>
    </div>
    </React.Fragment>
  )
}
