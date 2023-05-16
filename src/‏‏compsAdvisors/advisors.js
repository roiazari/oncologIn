import React,{ useEffect, useState  } from 'react'
import { useSearchParams } from 'react-router-dom';
import InputAdvisors from './inputAdvisors'
import ListAdvisors from './listAdvisors'
import StripAdvisors from './stripAdvisors'
import Nav from '../compsGeneral/nav';
import "./advisors.css"
import Footer from '../compsGeneral/footer';
import { API_URL } from '../services/apiServices';
import useAuthRedirect from '../services/hooks/auth';
import { Pagination } from 'antd';


export default function Advisors() {
  const [ar,setAr]=useState({data:[],count:0});
  const [query] = useSearchParams()
  // const [ar,setAr]=useState([]);
  useAuthRedirect();
  useEffect(()=>{
     
      doApi();
  },[query]);

  const doApi= async(skip=1 ,take=6)=>{
    let url =API_URL+"/advisors";
   
    if(query.get("s")){
      url =API_URL+"/advisors?s="+query.get("s")+`&skip=${skip}&take=${take}`;

    }
    else{url =API_URL+"/advisors"+`?skip=${skip}&take=${take}`};
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
     
        <StripAdvisors/>
        <Nav/>
        <InputAdvisors/>
        <ListAdvisors advisors_ar={ar.data}/>
        <div className='pagenationContainer'>
        {!!ar.data.length&&<Pagination showSizeChanger={false} pageSize={6} onChange={onChange2} defaultCurrent={1} total={ar.count}/>}
        </div>
        <Footer/>
    </React.Fragment>
  )
  
}
