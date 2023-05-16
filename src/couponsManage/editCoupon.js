import React from 'react'
import Footer from '../compsGeneral/footer'
import EditCouponForm from './editCouponForm'
import NavCoupons from './navCoupons'
import StripCoupons from './stripCoupons'
export default function EditCoupon() {
  return (
    <React.Fragment>
        <StripCoupons/>
        <NavCoupons/>
        <EditCouponForm/>
        <Footer/>
    </React.Fragment>

  )
}
