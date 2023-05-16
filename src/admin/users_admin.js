import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { apiDelete, apiGet, API_URL } from '../services/apiServices';
import { Link , useNavigate } from 'react-router-dom';

import StripAdmin from './stripAdmin';
import NavAdmin from '../compsGeneral/‏‏navAdmin';



export default function UsersAdmin() {
  const nav = useNavigate();
  const [ar,setAr]=useState([]);
  useEffect(()=>{
       
     doApi();
  },[]);
  const doApi= async()=>{
    let url =API_URL+"/users";
    const data = await apiGet(url);
    console.log(data);
    setAr(data);
}

  const deleteUser= async(_idDel)=>{
    if(!window.confirm("Delete item?")){
      return;
    }
 
       const url = API_URL+"/users/"+_idDel;
       const data = await apiDelete(url);
       console.log(data);
       doApi();

  }
  return (
    <React.Fragment>
       <StripAdmin/>
      <NavAdmin/>
    <div className='container'>
      <h2 className='display-2 text-center p-2'>Users List</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Delete user</th>
          </tr>
        </thead>
        <tbody>
        {ar.map((item,i) => {
          return (
            <tr key={item._id}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td >{item.phone}</td>
              <td>{item.date_created.substring(0,10)}</td>
              <td><button onClick={()=>{
                
                deleteUser(item._id);
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
