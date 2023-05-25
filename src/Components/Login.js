import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../app/slice'
export const Login = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedin:true,
        }))
    }

  return (
    <div className=''>
    <form onSubmit={(e)=>handleSubmit(e)} className='grid grid-cols-1 grid-row-4 gap-1 m-40 px-5 py-5 text-center max-w-6xl h-72  bg-slate-400 shadow-lg shadow-black'>
    <h1>LOGIN HERE</h1>
    <input type="text" 
    value={name} placeholder='Name' 
    className='border-1 text-2xl border-slate-100 text-center font-medium'
    onChange={(e)=>{setName(e.target.value)}}/>

    <input type="email" 
    value={email} placeholder='Email' 
    className='border-1 text-2xl border-slate-100 text-center font-medium'
    onChange={(e)=>{setEmail(e.target.value)}}/>

    <input type="text" 
    value={password} placeholder='Password'
    className='border-1 text-2xl border-slate-100 text-center font-medium'
    onChange={(e)=>{setPassword(e.target.value)}}/>

    <button className='bg-green-600 text-2xl rounded text-white hover:bg-green-700' >SUBMIT</button>
    
    </form>
    </div>
  )
}
