import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { deleteItem } from '../app/slice';



export const Data = () => {
    const item=useSelector((state)=>state.user)

    const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch(deleteItem())

    }

    
    const navigate=useNavigate()
    const handleChange=()=>{
        navigate("/")
    }
    
  return (
    <div className='m-40 '>
    {
        item.map((items,index)=>(
            <div key={index} className='flex justify-between space-x-2 space-y-2 bg-slate-200 my-2 px-2 py-2 font-medium text-xl '>
            <h2>{items.id}</h2>
           <h2 >{items.name}</h2>
           <h3>{items.email}</h3>
           <div className='flex justify-around space-x-2  '>
           <Button variant="contained" color="success" className=''>Edit</Button>
           <Button variant="contained" color="error" className='' onClick={()=>handleDelete()}>Delete</Button>
           </div>
           </div>
            

        ))

    }
    <Button variant="contained"  className='' onClick={()=>handleChange()}>ADD MORE DATA
    </Button>
        

    </div>
  )
}
