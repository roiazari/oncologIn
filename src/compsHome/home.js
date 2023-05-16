import React,{ useEffect, useState } from 'react';
import Footer from '../compsGeneral/footer';
import Nav from '../compsGeneral/nav';
import AboutHome from './aboutHome';
import JoinHome from './joinHome';
import MainHome from './mainHome';
import StripHome from './stripHome';
import TeamHome from './teamHome';

export default function Home() {
  
    return (
      <React.Fragment>
       
        <StripHome/>
        <Nav/>
        <AboutHome/>
        <TeamHome/>
        <JoinHome/>
        <MainHome/>
        <Footer/>
      </React.Fragment>
    )
  }