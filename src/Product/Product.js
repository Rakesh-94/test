import axios from "axios";
import React, {useEffect, useState} from "react";

const Product = () => {
    
    const [state, setState] = useState([])

    useEffect(()=>{
        console.log(state)
         axios.get("https://fakestoreapi.com/carts").then((res)=> setState(res.data))    

    },[state])
    return (
        <div>
            {/* <h1>Product</h1> */}
            {state.map((e)=>{

                return(
                    <div>
                        <h2 style={{color:"red"}}>{e.id}</h2> 
                        <h2>{e.products.map((item)=>{
                            return (
                                <>
                                {/* <p>{item.productId}</p> */}
                                {/* <p>{item.quantity}</p> */}
                                </>
                            )
                        })}</h2>
                    </div>    
                )
            })}
        </div>
    )
}


export default Product;