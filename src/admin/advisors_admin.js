import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../services/apiServices';
import { Link , useNavigate } from 'react-router-dom';
import NavAdmin from '../compsGeneral/‏‏navAdmin';
import StripAdmin from './stripAdmin';

export default function AdvisorsAdmin() {
  const nav = useNavigate();
  const [ar,setAr]=useState([]);
  useEffect(()=>{
       
      doApi();
  },[]);
  const doApi= async()=>{
    let url =API_URL+"/advisors";
    let resp =await fetch(url);
    let data =await resp.json();
    console.log(data);
    setAr(data);
}

  const deleteAdvisor= async(_idDel)=>{
    if(!window.confirm("Delete item?")){
      return;
    }
    try{
        const url = API_URL+"/advisors/"+_idDel;
        const resp =await axios({
          url:url,
          headers: {
            "x-api-key": localStorage["token"],
          },
          method:"DELETE",
          data:{}
        })
          doApi();
        
    }
    catch(err){
      console.log(err);

    }
  }
  return (
    <React.Fragment>
      <StripAdmin/>
      <NavAdmin/>
    <div className='container'>
      <h2 className='display-2 text-center p-2'>Advices List:</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Info</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {ar.map((item,i) => {
          return (
            <tr key={item._id}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.info}</td>
              <td>{item.dateCreated.substring(0,10)}</td>
              <td><button onClick={()=>{
                deleteAdvisor(item._id);
              }} className='bg-danger'>X</button>
        
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>


    </div>
    </React.Fragment>
  )
}
