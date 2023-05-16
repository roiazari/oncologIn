import React from 'react'

export default function ItemPosts(props) {
  let item=props.item;
  return (
    <div className='border rounded-2  col-md-6 p-2 '>
        <img  src={item.img_url} className='img-fluid  h-50 w-100'/>
        <h3 className='text-secondary' >{item.title}</h3>
        <div>{item.info}</div>
    </div>
  )
}
