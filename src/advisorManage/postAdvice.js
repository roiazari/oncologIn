import React from 'react'
import Footer from '../compsGeneral/footer'
import NavAdvisor from './navAdvisor'
import PostAdviceForm from './postAdviceForm'
import StripAdvisor from './stripAdvisor'

export default function PostAdvice() {
  return (
    <React.Fragment>
        <StripAdvisor/>
        <NavAdvisor/>
        <PostAdviceForm/>
        <Footer/>
    </React.Fragment>

  )
}
