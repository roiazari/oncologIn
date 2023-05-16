import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../services/apiServices';
import { Link , useNavigate } from 'react-router-dom';
import NavAdmin from '../compsGeneral/‏‏navAdmin';
import StripAdmin from './stripAdmin';

export default function CouponsAdmin() {
  const nav = useNavigate();
  const [ar,setAr]=useState([]);
  useEffect(()=>{
       
      doApi();
  },[]);
  const doApi= async()=>{
    let url =API_URL+"/coupons";
    let resp =await fetch(url);
    let data =await resp.json();
    console.log(data);
    setAr(data);
}

  const deleteCoupon= async(_idDel)=>{
    if(!window.confirm("Delete item?")){
      return;
    }
    try{
        const url = API_URL+"/coupons/"+_idDel;
        const resp =await axios({
          url:url,
          headers: {
            "x-api-key": localStorage["token"],
          },
          method:"DELETE",
          data:{}
        })
        if(resp.data.deletedCount)

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
      <h2 className='display-2 text-center p-2'>Coupons List</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Buissnes</th>
            <th>Link</th>
            <th>Date</th>
            <th>Delet coupon</th>
          </tr>
        </thead>
        <tbody>
        {ar.map((item,i) => {
          return (
            <tr key={item._id}>
              <td>{i+1}</td>
              <td>{item.title}</td>
              <td >{item.link_url}</td>
              <td>{item.date_created.substring(0,10)}</td>
              <td><button onClick={()=>{
                deleteCoupon(item._id);
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
