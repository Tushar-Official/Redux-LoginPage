import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../app/slice'

export const Logout = () => {
    const user=useSelector(selectUser);

    const dispatch=useDispatch()

    const setHandle=(e)=>{
        e.preventDefault();

        dispatch(logout())
    }
  return (
    <div className=' m-40 px-5 py-5 text-center grid grid-cols-1 items:centre grid-rows-2 gap-1'>
    <h1 className='font-bold text-2xl text-blue-600'> Welcome {user.name}</h1>
    <button 
    className='bg-green-600 rounded text-2xl  text-white hover:bg-green-700'
    onClick={(e)=>setHandle(e)}
    >LOGOUT</button>
    
    </div>
  )
}
