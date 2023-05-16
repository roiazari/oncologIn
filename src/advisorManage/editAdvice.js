import React from 'react'
import Footer from '../compsGeneral/footer'
import EditAdviceForm from './editAdviceForm'
import NavAdvisor from './navAdvisor'
import StripAdvisor from './stripAdvisor'

export default function EditAdvice() {
  return (
    <React.Fragment>
        <StripAdvisor/>
        <NavAdvisor/>
        <EditAdviceForm/>
        <Footer/>
    </React.Fragment>

  )
}
