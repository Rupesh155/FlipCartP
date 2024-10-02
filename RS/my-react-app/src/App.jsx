// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'


// const App = () => {
//   let [state,SetState]=useState('')
//   let [data,SetData]=useState()

// useEffect(()=>{
//   SetData(data+1)

// }
// )

//   return (
//     <div>
//       {/* <h3> appp</h3>
//       <Home/> */}
//       <input type='text' placeholder='Enter your data'  onChange={(e)=>SetState(e.target.value)}/>
//      <p>{data}</p>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useEffect } from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// const App = () => {
//   let [input,SetInput]=useState('')
//  let data=   useRef(1)
//  console.log(data,"heh");
//  useEffect(()=>{
//   data.current=data.current+1
//  })
 
//   return (
//     <div>
//       <input  type='text' placeholder='Enter your name' onChange={(e)=>SetInput(e.target.value)}/>
//       <h2>{data.current}</h2>
//     </div>
//   )
// }

// export default App