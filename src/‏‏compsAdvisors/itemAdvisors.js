import React from 'react'

export default function ItemAdvisors(props) {
  let item=props.item;
  return (
    <div className='border rounded-2 mx-auto  col-md-4 p-2 '>
        <img  src={item.img_url} className='img-fluid  h-50 w-100'/>
        <h3 className='text-secondary text-center' >{item.name}</h3>
        <div className='d-flex'><h5>location: </h5><div className='ps-2'>{item.location}</div> </div>
        <div className='d-flex'><h5>experience years: </h5> <div className='ps-2'> {item.exprinced_year}</div></div>
        <div className='d-flex'><h5> info: </h5> <div className='ps-2'>{item.info}</div></div>
        <div className='d-flex'><h5> phone: </h5> <div className='ps-2'>{item.phone}</div></div>
      
  
    </div>
  )
}
