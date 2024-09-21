import React, { useState } from 'react'

const Todo = () => {
  let [input,SetInput]=useState('')
  let  [data,SetData]=useState([])
  function fun1(a){
    SetInput(a.target.value)

  }
  function done(){
    SetData([...data,input])
    // SetData('')
    SetInput('')
    
  }

  function remove(id){
    // console.log(id);
    let newData=  data.filter((x,y)=>{
      return y!=id

    })
    SetData(newData)

    


  }
  return (
    <div>
      <h2> Todo list</h2>
      <input  value={input} onChange={fun1}/> 
      <button onClick={done}> add</button>
      {
        data.map((a,b)=>{
          return (<> 
          <li key={b}>{a}</li>
          <button  onClick={()=>remove(b)}> deletttttt</button> 
          </>)

        })
      }
    </div>
  )
}

export default Todo