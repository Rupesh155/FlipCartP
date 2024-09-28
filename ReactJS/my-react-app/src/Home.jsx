import React, { useContext } from 'react'
import Context from './Context'
const Home = () => {
   let data=   useContext(Context)
  return (
    <div>
      {data}
    </div>
  )
}

export default Home        