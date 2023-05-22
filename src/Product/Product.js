import React, {useEffect, useState} from "react";

const Product = () => {
    
    const [state, setState] = useState([])

    useEffect(()=>{

        const getData = async ()=>{
            const res = await fetch("https://fakestoreapi.com/carts");
            const data = await res.json();
            setState(data);
        }
        getData();

    },[])

    return (
        <div>
            <h1>Product</h1>
            {state.map((e)=>{

                return(
                    <div>
                        <h2>{e.id}</h2>
                    </div>    
                )
            })}
        </div>
    )
}


export default Product;