import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    let [input,SetInput]=useState({
        email:"",
        password:""
    })

    function fun1(e){
      let {name,value} =   e.target
        SetInput({...input,[name]:value})
        console.log(input);

    }
    function done(e){
        e.preventDefault();

    }
  return (
    <div>
        <form action=''  onSubmit={done}>  


        <input    name='email'  value={input.email}  onChange={fun1}  type='email' placeholder='Enter your email'/>

        <br/>
        <br/>
        <input   name='password'   value={input.password} onChange={fun1}   type='password' placeholder='Enter your password'/>
        <br/>
        <br/>
        <button  type='submit'> Login</button>

        <Link  to='/'>SigUp</Link>
        </form>
    </div>

    
  )
}

export default Login