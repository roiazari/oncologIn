import React from 'react'

export default function ItemCoupons(props) {
  let item=props.item;
  return (
    <div className='border rounded-2  col-md-4 p-2 '>
        <img  src={item.img_url} className='img-fluid  h-50 w-100'/>
        <h3 className='text-secondary' >{item.title}</h3>
        <div>{item.info}</div>
        <div>{item.adress}</div>
        <div><a target={'_blank'} href={item.link_url}>{item.link_url}</a></div>
        <button className='btn btn-info me-2 mt-2'>Add to cart</button>
        <button className='btn btn-primary mt-2'>Buy now</button>

    </div>
  )
}
