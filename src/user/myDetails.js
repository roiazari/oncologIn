import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../services/apiServices';
import { useNavigate } from 'react-router-dom';



export default function UserDetails() {
  const nav = useNavigate();
  const [ar,setAr]=useState([]);
  useEffect(()=>{
       
      doApi();
  },[]);
  const doApi= async()=>{
    let url =API_URL+"/users/private";
    console.log(localStorage["token"])
    let {data} =await axios({
       url,
       method:"GET",
       headers:{"x-api-key": localStorage["token"]}
    });
  
    console.log(data);
    
    data.length>0 && setAr(data) ;
    console.log(ar);
    }
  const deleteUser= async(_idDel)=>{
    if(!window.confirm("Delete item?")){
      return;
    }
    try{
        const url = API_URL+"/users/"+_idDel;
        console.log("url...: "+url);
        const resp =await axios({
          headers: {
            "x-api-key": "",
          },
          url:url,
          method:"DELETE",
        
          
        })
      
        if(resp.data.deletedCount){
          doApi();
        }
    }
    catch(err){
      console.log("err for yarden: "+err);

    }
  }
  return (
    <React.Fragment>
    <div className='container'>
      <h2 className='display-2 text-center p-2'>My Details</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Del/edit</th>
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
              <button onClick={()=>{
               nav("/home")
              }} className='bg-info ms-2'>Edit</button>
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
