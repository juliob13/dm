import React from "react";
export default function Results({total, scale}){
    if (scale==='pounds'){
        total/= 2.205
    }

    return (
    <div style = {(!total?{visibility:'hidden'}: {visibility:'visible'})}>
    <p id='response'>The total insulin is {Math.floor(total)}</p>

    {<p style={{backgroundColor:'white'} }>The split dose is {Math.floor(total/2)} units of long acting and {Math.floor(total/6)} units prandial</p>}
</div>)
}