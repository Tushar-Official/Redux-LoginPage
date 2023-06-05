import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from '../app/slice'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
export const Create = () => {
const user=useSelector((state)=>state.user)
const dispatch=useDispatch()
const navigate=useNavigate()
const handleChange=()=>{
    
    dispatch(addItem({
        name:name,
        email:email,
       id:user[user.length].id-1
  
    }))
    navigate("/data")
    
}

    const [name,setName]=useState([])
    const [email,setEmail]=useState([])
  return (
    <div className='bg-slate-100'>
    <div className='m-10 '>
    <h2 className='font-extrabold py-2 text-xl'>FIND YOUR DATA</h2>
   
    <Button variant="contained" color="success"
    className='bg-green-950 font-semibold font-sans px-2 py-2 text-white text-center rounded-md text-l' onClick={()=>handleChange()}>
    CREATE+</Button>
    </div>

    <div className='m-64'>
    <form className='grid grid-rows-2 grid-cols-1 gap-y-2  justify-center px-36 pb-24  h-64'>
    <h3 className='font-bold text-xl mb-12 '>ADD YOUR DETAILS HERE</h3>

    <input type="text" placeholder='Your Name'  
    className='text-center h-12 text-l   border-2 border-slate-500'
    value={name} onChange={(e)=>setName(e.target.value)} />

    <input type="email" placeholder='Your Email' 
    className='text-center h-12 text-l mt-4   border-2 border-slate-500'
    value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
    </form>
    </div>
    </div>
  )
}
