import React,{ useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import InputCoupons from './inputCoupons';
import ListCoupons from './listCoupons';
import StripCoupons from './stripCoupons';
import Nav from '../compsGeneral/nav';
import "./coupons.css";
import Footer from '../compsGeneral/footer';
import NavCoupons from './navCoupons';

export default function Coupons() {
 
  const [ar,setAr]=useState([]);
  useEffect(()=>{
       
      doApi();
  },[]);
  const doApi= async()=>{
    let url ="http://localhost:3002/coupons";
    let resp =await fetch(url);
    let data =await resp.json();
    console.log(data);
    setAr(data);
}

  return (
    <React.Fragment>
      
        <StripCoupons/>
        <Nav/>
        <InputCoupons/>
        <NavCoupons/>
        <ListCoupons coupons_ar={ar}/>
        <Footer/>
    </React.Fragment>
  )
}
