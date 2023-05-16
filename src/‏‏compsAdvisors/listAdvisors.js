import React from 'react'
import ItemAdvisors from './itemAdvisors'

export default function ListAdvisors(props) {
  return (
    <div className='container-fluid py-5'>
        <div className='container'>
            <div className='row'>
              {props.advisors_ar.map(item=>{
                return(
                  <ItemAdvisors key={item._id}  item={item} />
                )
              })}
          
            </div>
         

        </div>
    </div>
  )
}
