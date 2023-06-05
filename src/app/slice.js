import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload)
        },
        deleteItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.id)
        }
    }
})
export const {addItem,deleteItem}=userSlice.actions
export default userSlice.reducer