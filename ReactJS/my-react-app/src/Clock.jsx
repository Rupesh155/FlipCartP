import React, { useState } from 'react'

const Clock = () => {
    let [time,SetTime]=useState()
    setInterval(()=>{
        let samay=   new Date().toLocaleTimeString()
        SetTime(samay)

    })

  return (
    <div>
        <h1>{time}</h1>
    </div>
  )
}

export default Clock