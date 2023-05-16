import React,{ useEffect, useState } from 'react'
import Nav from '../compsGeneral/nav';
import Footer from '../compsGeneral/footer';
import StripPosts from './stripPosts';
import ListPosts from './listPosts';
import { API_URL } from '../services/apiServices';
import useAuthRedirect from '../services/hooks/auth';
export default function Posts() {
  const [ar,setAr]=useState([]);
  useAuthRedirect();
  useEffect(()=>{
     
      doApi();
  },[]);

  const doApi= async()=>{
    let url = API_URL+"/posts";
    let resp =await fetch(url);
    let data =await resp.json();
    console.log(data);
    setAr(data);
  }

  return (
    <React.Fragment>
        <StripPosts/>
        <Nav/>
        <ListPosts posts_ar={ar}/>
        <Footer/>
    </React.Fragment>
  )
}
