import React from 'react'
import Footer from '../compsGeneral/footer'
import Nav from '../compsGeneral/nav'
import StripHome from '../compsHome/stripHome'
import RegisterForm from './registerForm'

export default function Register() {
  return (
    <React.Fragment>
        <StripHome/>
        <Nav/>
        <RegisterForm/>
        <Footer/>
    </React.Fragment>

  )
}
