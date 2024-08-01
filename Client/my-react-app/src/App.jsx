// import React from 'react'
// import Headers from './Components/Headers'

// import { Route, Routes } from 'react-router-dom'
// import Signup from './Components/Signup.jsx';
// import Login from './Components/Login.jsx';
// const App = () => {

  
//   return (
//     <div>
      
//      <Headers/>
//      <Routes>
//       <Route  path='/'  element={<Signup/>}/>
//       <Route  path='/login'  element={<Login/>}/>

//      </Routes>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Dummy from './Dummy'
const App = () => {
  return (
    <div>
      <Routes>
        <Route   path='/' element={<Home/>} />
        <Route   path='/:data' element={<Dummy/>} />
      </Routes>
    </div>
  ) 
}

export default App