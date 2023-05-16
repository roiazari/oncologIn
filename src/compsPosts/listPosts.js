import React from 'react'
import ItemPosts from './itemPosts'

export default function ListPosts(props) {
  return (
    <div className='container-fluid py-5'>
        <div className='container'>
            <div className='row'>
              {props.posts_ar.map(item=>{
                return(
                  <ItemPosts key={item._id}  item={item} />
                )

              })}
          
            </div>
         

        </div>
    </div>
  )
}
