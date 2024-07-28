import React, { useContext } from 'react'
import Context from './Context'
const Home = () => {
  let data=   useContext(Context)
  console.log(data,"mujhe dekhnaaa");
  return (
   <>
   <p>{data}</p>
   </>
  )
}

export default Home