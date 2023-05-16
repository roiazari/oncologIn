import React from 'react'
import { Pagination } from 'antd';



export default function Pagenation() {

    const onChange2=(page, pageSize)=>{
        console.log("page: " ,page);
        console.log("pageSize: " ,pageSize);

    }

  return (
    <Pagination showSizeChanger={false} pageSize={6} onChange={onChange2} defaultCurrent={1} total={60} />
  )
}
