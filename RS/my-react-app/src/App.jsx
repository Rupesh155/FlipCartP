// // import React from 'react'

// // import { useRef } from 'react'


// // const App = () => {
// //   // let [state,SetState]=useState('')
// //    let data=   useRef()
  
// //    console.log(data.current,"data");
   
// //   //  console.log(data,"dataaaa");
   
// //   // let [data,SetData]=useState(0)

// // // useEffect(()=>{
// // //   // SetData(data+1)
// // //   // data.current=data.current+1

// // // }
// // // )
// //   return (
// //     <div>
// //       {/* <h3> appp</h3>
// //       <Home/> */}
// //       <h1   ref={data}> mujhe select kroo</h1>
// //       {/* <input type='text' placeholder='Enter your data'  onChange={(e)=>SetState(e.target.value)}/> */}
// //      {/* <p>{data.current}</p> */}
// //     </div>
// //   )
// // }

// // export default App


// // // import React from 'react'
// // // import { useEffect } from 'react'
// // // import { useRef } from 'react'
// // // import { useState } from 'react'

// // // const App = () => {
// // //   let [input,SetInput]=useState('')
// // //  let data=   useRef(1)
// // //  console.log(data,"heh");
// // //  useEffect(()=>{
// // //   data.current=data.current+1
// // //  })
 
// // //   return (
// // //     <div>
// // //       <input  type='text' placeholder='Enter your name' onChange={(e)=>SetInput(e.target.value)}/>
// // //       <h2>{data.current}</h2>
// // //     </div>
// // //   )
// // // }

// // // export default App

// import React from 'react'
// import Home from './Home'

// // propsss
// const App = () => {

// let user='rahul'
//   return (

//     <div>
//       {/* jsx */}
//       {/* <h1> hell0  {user}</h1> */}
//       <Home a={user}  />
//     </div>
//   )
// }


// export default App


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   let [color,SetColor]=useState('green')
//     // let [data,SetData]=   useState(0)
//   // let count=0
//   // function done(){
//     // console.log('hello');
//     // count=count+1
//     // console.log(count,'heheh');
//     // SetData(data+1)
//   // }
//   // function a(){
//   //   SetData(data-1)
//   // }
//   // function b(){
//   //   SetData(0)
//   // }
//   function change(){
//     SetColor('red')
  
// //   return (
// //     <div   style={{backgroundColor:color,height:'400px'}} >
  
// //            {/* <button onClick={done} >  click</button> */}
// //            <button onClick={change}> red</button>
// //            {/* <button onClick={a} >  -</button>
// //            <button onClick={b} >  Reset</button> */}


// //     </div>
// //   )
// // }

// // export default App


// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   let [color,SetColor]=useState(false)
//   function done(){
//     if(color===true){
//       SetColor(false)

//     }else{
//       SetColor(true)
//     }
//   }
//   return (
//     <div style={color?{backgroundColor:'green',height:"300px"}:{backgroundColor:"red"}}>
//  hello
//  <button onClick={done}>click</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react';
// const App = () => {  
//   let [time,SetTime]=useState()
//   setInterval(()=>{
//     let date=   new Date().toLocaleTimeString()
//     console.log(date,"datatat");
//     SetTime(date)
//   })
  
//   return (
//     <div>
//       {time} mai samay hu 
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react';
// const App = () => {
//    let [data,SetData]=    useState('')
//   function done(e){
//     console.log(e.target.value);
//     SetData(e.target.value)
    
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//           <input  onChange={done} type='text' placeholder='Enter your nameee'/>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useState } from 'react'


const App = () => {
  let [input,SetInput]=useState({
    name:"",
    pass:""

  })
  function done(e){
       let {name,value}=    e.target
    SetInput({...input,[name]:value})
    console.log(input,"kya mil rha");
    
  }
  return (
    <div>
  <fieldset>   
      <form> 
        <input  type='text' name='name'  value= {input.name} onChange={done}  placeholder='Enter your name'/>
        <br></br>
        <br></br>
        <input  type='password'  name='pass' value={input.pass} onChange={done} placeholder='Enter your pass'/>
        <br></br>
        <br></br>
       <button> save</button>
      </form>
      </fieldset>
    </div>
  )
}

export default App


// let obj={
//   id:1,
//   name:"raul"
// }
// let {id,name}=obj
// console.log(id);


