// import React from 'react'
// import Home from './Home'
// import New from './Comp/New'
// const App = () => {
//   let count=0
//   return (
//     <>  
//       <h1> hello {count}</h1>
//       <p> hiii</p>
//       <Home/>
   
//       </>

  
//   )
// }

// export default App


// import React from 'react'
// import './App.css'
// const App = () => {
//   let arr=[1,2,3,4,56,7,8]
//   return (
//     <div  className=''>
//        {
//         arr.map((a)=>{
//           return(<>
//           <li>  a  </li>
//           </>)
//         })
//        }
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// const App = () => {
//      let [count,SetCount]=    useState(0)
//       let [color,SetColor]=    useState('red')
//   // let count=0
//   function fun1(){
//     // console.log('hello');
//     SetCount(count+1)      
//     SetColor('green')
//   }
//   return (
//     <div style={{backgroundColor:color,height:'100vh',width:"100vw"}}>
//       <p>{count}</p>
//      <button onClick={fun1}>click</button>
//      <button onClick={fun1}> color green</button>
//       {/* <Home   data={user}/> */}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Clock from './Clock'
// import Input from './Input'

// const App = () => {
//   return (
//     <div>
//       {/* <Clock/> */}
//       <Input/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Todo from './todo'


// const App = () => {
//   return (
//     <div>
// <Todo/>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   let [city,SetCity]=useState('bhopal')
//   let [api,SetApi]=useState([])
//   useEffect(()=>{
//     console.log('hellooo');
//     fetch('https://dummyjson.com/recipes').then((res)=>{
//       return  res.json()
  
//     }).then((data)=>{
//       console.log(data.recipes,"hehe");
//       SetApi(data.recipes)
//       // console.log(api,"heheheheheheh");
      

      
//     })
//   },[])
  
//   function fun1(){
//     SetCount(count+1)
//   }
//   function done(){
//     SetCity('Delhi')
//   }
//   return (
//     <div>
//       <p> {count}</p>
//       <button onClick={fun1}>click</button>

//       <h3>{city}</h3>
//       <button onClick={done}>change</button>

// {
//   api.map((a)=>{
//     // console.log(a.name,"kya mil rha haiii ");
//     return (<>
//     <h2> {a.id}</h2>
//     <p>{a.name  }</p>
//     </>)
    

//   })
// }



//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {

//   let [Api,SetApi]=useState([])

//   useEffect( ()=>{

//     fetch('https://dummyjson.com/recipes').then((res)=>{
//       return res.json()

//     }).then((data)=>{
//       console.log(data.recipes,"heheheheh");
//       SetApi(data.recipes)

//     })
//   },[])
//   return (
//     <div>
//       {
//         Api.map((val)=>{

//           return (<>
//           <h3> {val.id}</h3>
//           <p>{val.name}</p>
//           <img   height='100px'  src={val.image}/>
//           </>)

//         })
//       }
//     </div>
//   )
// }

// export default App



// import React from 'react'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import SignUp from './SignUp'
// import Login from './Login'
// const App = () => {
//   return (
//     <div>
//        <Router>   

//       <Routes>
//         <Route    path='/'  element={<SignUp/>} />
//         <Route    path='/login'  element={<Login/>} />
//       </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import NavBar from './NavBar'
// import C from './C'

// const App = () => {
//   return (
//     <div>
//       {/* <NavBar/>
//       <C/> */}

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   let [input,SetInput]=useState({
//     name:"",
//     email:"",
//     password:""

//   })
//   function fun1(e){
//     let {name,value}=   e.target
//     // console.log(e.target.value);
//     SetInput({...input,[name]:value})
//     // console.log(input,"dekhoo");
    
    
//   }

//   function done(e){
//     e.preventDefault()
//     console.log('heheheh',input);
    
//   }
//   return (
//     <div>
//     {/* <h1> Form</h1> */}


//     <fieldset>   
//       <legend> Form</legend>
//     <form   onSubmit={done}> 
//       <input  type='text' name='name' value={input.name}   onChange={fun1}  placeholder='Enter your name'/>
//       <br></br>
//       <br></br>

//       <input  type='email' name='email' value={input.email}  onChange={fun1}  placeholder='Enter your email'/>
//       <br></br>
//       <br></br>

//       <input  type='password'  name='password'  value={input.password}  onChange={fun1} placeholder='Enter your passWord'/>
// <button  type='submit'> save</button>
//     </form>
//     </fieldset>
//     </div>
//   )
// }

// export default App



// import React, { useReducer } from 'react'
//  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// // import SignUp from './SignUp'
// // import Login from './Login'
// // const App = () => {
// //   return (
// //     <div>
// //       <Router>
// //    <Routes>
// //     <Route   path='/'  element={<SignUp/>}/>
// //     <Route   path='/login'  element={<Login/>}/>

// //    </Routes>
// //       </Router>
// //     </div>
// //   )
// // }

// // export default App

// // useReducer

// // import React from 'react'
// // import Multer from './Multer'

// // const App = () => {
// //   return (
// //     <div>
// //       <Multer/>
// //     </div>
// //   )
// // }

// // export default App



// // import React, { useReducer } from 'react'

// // const App = () => {
// //   function reduser(count,action){
// //     if(action.type==='incre'){
// //       return count+=1
// //     }

// //   }
// //   let [count,dispatch]  =  useReducer(reduser,0)
// //   function fun1(){
// //     dispatch({type:"incre"})
// //   }
// //   return (
// //     <div>

// //       <h2>{count}</h2>
// //       <button onClick={fun1}> click</button>
// //     </div>
// //   )
// // }

// // export default App


// // import React, { useReducer } from 'react'
// // const App = () => {
// //     function reduser(count,action){
// //         if(action.type==='incre'){
// //             return count+=1
// //         }
// //         else if(action.type==='deccc'){
// //             return count-=1
// //         }
// //         else{
// //             return count
// //         }
// //     }
// //       let [count,dispatch]=  useReducer(reduser,0)                   
// //     //   function fun1(){
// //     //     dispatch({type:"incre"})

// //     //   }
// //   return ( 
// //     <div>
// //       <h3> {count}</h3>
// //       <button onClick={()=>dispatch({type:"incre"})}> ++ </button>
// //       <button onClick={()=>dispatch({type:"deccc"})}> __ </button>

// //     </div>
// //   )
// // }

// // export default App


// // import React from 'react'
// // import Home from './Home'

// // const App = () => {
// //   return (
// //     <div>
// //         <Home/>
// //     </div>
// //   )
// // }

// // export default App


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUp from './SignUp';
// import Login from './Login'; 
// import Home from './Home';
// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* Define your routes here */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />

//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React from 'react'
import Api from './Api'


const App = () => {
  return (
    <div>
        <Api/>
    </div>
  )
}

export default App
