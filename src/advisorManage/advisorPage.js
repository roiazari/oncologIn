import React from 'react'
import Footer from '../compsGeneral/footer'
import AdvisorListManage from './advisorListManage'
import NavAdvisor from './navAdvisor'
import StripAdvisor from './stripAdvisor'

export default function AdvisorPage() {
  return (
    <React.Fragment>
        <StripAdvisor/>
        <NavAdvisor/>
        <AdvisorListManage/>
        <Footer/>

    </React.Fragment>
  )
}
