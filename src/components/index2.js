import React, { useEffect, useState } from 'react'
import Card2 from './Card2'


export default function Product (props) {
  const [state,setState] = useState([])
  useEffect(()=>{
    setState(props.state)
  },[props])
    return (
      <div className='container my-1'>
        <h1>ALL Product</h1>
        <div className='row'>
          {state.map((item,index)=>{
              return(
              <div className='col-md-3' key={index}>
                <Card2 title={item.title} description={`${item.price} $`} image={item?.image} id={item.id}/>
              </div>
      )

          })}
        </div>
      </div>
    )
  
}
