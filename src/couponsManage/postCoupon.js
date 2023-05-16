import React from 'react'
import Footer from '../compsGeneral/footer'
import NavCoupons from './navCoupons'
import PostCouponForm from './postCouponForm'
import StripCoupons from './stripCoupons'

export default function PostCoupon() {
  return (
    <React.Fragment>
        <StripCoupons/>
        <NavCoupons/>
        <PostCouponForm/>
        <Footer/>
    </React.Fragment>

  )
}
