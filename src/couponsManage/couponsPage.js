import React from 'react'
import Footer from '../compsGeneral/footer'
import CouponsListManage from './couponsListManage'
import NavCoupons from './navCoupons'

import StripCoupons from './stripCoupons'

export default function CouponsPage() {
  return (
    <React.Fragment>
        <StripCoupons/>
        <NavCoupons/>
        <CouponsListManage/>
        <Footer/>

    </React.Fragment>
  )
}
