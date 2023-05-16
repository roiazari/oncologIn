import React from 'react'
import UserDetails from './myDetails'
import NavUser from './navUser'
import StripUser from './stripCoupons'

export default function UserPage() {
  return (
    <React.Fragment>
        <StripUser/>
        <NavUser/>
        <UserDetails/>
    </React.Fragment>
  )
}
