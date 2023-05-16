import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../services/apiServices';
import { Link , useNavigate } from 'react-router-dom';
import NavAdmin from '../compsGeneral/‏‏navAdmin';
import StripAdmin from './stripAdmin';

export default function PostsAdmin() {
  const nav = useNavigate();
  const [ar,setAr]=useState([]);
  useEffect(()=>{
       
      doApi();
  },[]);
  const doApi= async()=>{
    let url =API_URL+"/posts";
    let resp =await fetch(url);
    let data =await resp.json();
    console.log(data);
    setAr(data);
}

  const deletePost= async(_idDel)=>{
    if(!window.confirm("Delete item?")){
      return;
    }
    try{
        const url = API_URL+"/posts/"+_idDel;
        const resp =await fetch({
          url:url,
          method:"DELETE",
          data:{}
        })
        if(resp.data.deletedCount){
          doApi();
        }
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
      <h2 className='display-2 text-center p-2'>Posts List:</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>User Name</th>
            <th>Del/edit</th>
          </tr>
        </thead>
        <tbody>
        {ar.map((item,i) => {
          return (
            <tr key={item._id}>
              <td>{i+1}</td>
              <td>{item.title}</td>
              <td >{item.user_name}</td>
              <td><button onClick={()=>{
                deletePost(item._id);
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
