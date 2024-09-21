import React, { useState } from 'react'

const Input = () => {
    let [data,SetData]=useState()
    function fun1(e){
        // console.log(e.target.value);
        // SetData(e.target.value)
    }
  return (
    <div>
        <h2>{data }</h2>
        <input  onChange={fun1} placeholder='Enter your name'/>
        <button> save</button>
    </div>
  )
}

export default Input