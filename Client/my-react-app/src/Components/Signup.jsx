import { Link } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    let [input,SetInput]=useState({
        name:"",
        email:"",
        passWord:""
    })

    function fun1(e){
      let {name,value} =   e.target
        SetInput({...input,[name]:value})
        console.log(input);

    }
    async  function done(e){
        e.preventDefault();
        console.log('chal rha');
        let res=  await  axios.post('http://localhost:4000/api/users',input)

    }



  return (
    <div>
        <form action=''  onSubmit={done}>  
        <input
      type='text'   name='name'  value={input.name}  onChange={fun1} placeholder='Enter your name'/>
        <br/>
        <br/>

        <input    name='email'  value={input.email}  onChange={fun1}  type='email' placeholder='Enter your email'/>

        <br/>
        <br/>
        <input   name='passWord'   value={input.passWord} onChange={fun1}   type='password' placeholder='Enter your password'/>
        <br/>
        <br/>
        <button  type='submit'> Signup</button>
        

        </form>
        <NavLink  to='/login'> Login</NavLink>
    </div>

    
  )
}

export default Signup