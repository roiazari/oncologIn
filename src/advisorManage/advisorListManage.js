import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../services/apiServices';
import { Link , useNavigate } from 'react-router-dom';

export default function AdvisorListManage() {
  const nav = useNavigate();
  const [ar,setAr]=useState([]);
  useEffect(()=>{
       
      doApi();
  },[]);
  const doApi= async()=>{
    let url =API_URL+"/advisors/private";
    let {data} =await axios({
       url,
       method:"GET",
       headers:{"x-api-key": localStorage["token"]}
    });
    console.log(data); 
    data.length>=0 && setAr(data) ;
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
  console.log({ar});
  return (
    <React.Fragment>

    <div className='container'>
      <h2 className='display-2 text-center p-2 text-success'>My Advices:</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th className=' text-success'>#</th>
            <th className=' text-success'>Name</th>
            <th className=' text-success'>Phone</th>
            <th className=' text-success'>Info</th>
            <th className=' text-success'>Date</th>
            <th className=' text-success'>Del/edit</th>
          </tr>
        </thead>
        <tbody>
        {ar.map((item,i) => {
         console.log({item});
          return (
            <tr key={item._id}>
              <td >{i+1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.info}</td>
              <td>{item.dateCreated.substring(0,10)}</td>
              <td><button onClick={()=>{
                deleteAdvisor(item._id);
              }} className='bg-danger'>X</button>
              <button onClick={()=>{
               nav(`/editAdvice/${item._id}`)
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
