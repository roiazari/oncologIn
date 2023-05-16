import React from 'react'
import Footer from '../compsGeneral/footer'
import Nav from '../compsGeneral/nav'
import StripHome from '../compsHome/stripHome'
import SignInForm from './signInForm'


export default function SignIn() {
  return (
    <React.Fragment>
        <StripHome/>
        <Nav/>
        <SignInForm/>
        <Footer/>
    </React.Fragment>

  )
}
