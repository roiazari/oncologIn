import React,{ useEffect, useState } from 'react'
import InputAdvisors from './inputAdvisors'
import ListAdvisors from './listAdvisors'
import StripAdvisors from './stripAdvisors'
import Nav from '../compsGeneral/nav';
import "./advisors.css"
import Footer from '../compsGeneral/footer';

export default function Advisors() {
  const [ar,setAr]=useState([]);
  useEffect(()=>{
     
      doApi();
  },[]);
  const doApi= async()=>{
    let url ="http://localhost:3002/advisors";
    let resp =await fetch(url);
    let data =await resp.json();
    console.log(data);
    setAr(data);
}

  return (
    <React.Fragment>
        <StripAdvisors/>
        <Nav/>
        <InputAdvisors/>
        <ListAdvisors advisors_ar={ar}/>
        <Footer/>
    </React.Fragment>
  )
}
