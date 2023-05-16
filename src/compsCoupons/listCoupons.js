import React from 'react'
import ItemCoupons from './itemCoupons'
import Pagenation from './pagenation'

export default function ListCoupons(props) {
  return (
    <div className='container-fluid py-5'>
        <div className='container'>
            <div className='row'>
              {props.coupons_ar.map(item=>{
                return(
                  <ItemCoupons key={item._id}  item={item} />
                )

              })}
            </div>
           
       
          
         

        </div>
    </div>
  )
}
