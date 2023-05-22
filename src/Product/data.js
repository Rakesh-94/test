import React from "react";

const Data = (props)=>{
    return (
        <div>
        <h1>Hello</h1>
        {props.state.map((e)=>{
            return(
                <div>
                    <h2>{e.price}</h2>

                </div>
            )
        })}
        </div>
    )
}

export default Data;