import React,{ useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import InputCoupons from './inputCoupons';
import ListCoupons from './listCoupons';
import StripCoupons from './stripCoupons';
import Nav from '../compsGeneral/nav';
// import "./coupons.css";
import Footer from '../compsGeneral/footer';
import NavCoupons from './navCoupons';
import { API_URL } from '../services/apiServices';
import useAuthRedirect from '../services/hooks/auth';


import { Pagination } from 'antd';
export default function Coupons() {
 
  const [ar,setAr]=useState({data:[],count:0});
  // can collect query from end point like ?s=
  const [query] = useSearchParams()
  useAuthRedirect();
  useEffect(()=>{
       
      doApi();
  },[query]);
  
  const doApi= async(skip=1 ,take=6)=>{
    
    let url =API_URL+"/coupons";
    if(query.get("s")){
      url =API_URL+"/coupons?s="+query.get("s")+`&skip=${skip}&take=${take}`;
    }
    else {url =API_URL+"/coupons"+`?skip=${skip}&take=${take}`};
    let resp =await fetch(url);
    let data =await resp.json();
    console.log(data);
    setAr(data);
    
}

const onChange2=(page, pageSize)=>{
  doApi(page, pageSize);
  console.log("page: " ,page);
  console.log("pageSize: " ,pageSize);

}

  return (
    <React.Fragment>
      
        <StripCoupons/>
        <Nav/>
        <InputCoupons/>
        <NavCoupons/>
        <ListCoupons coupons_ar={ar.data}/>
        <div className='pagenationContainer'>
        {!!ar.data.length&&<Pagination showSizeChanger={false} pageSize={6} onChange={onChange2} defaultCurrent={1} total={ar.count}/>}
        </div>
        <Footer/>
    </React.Fragment>
  )
}
