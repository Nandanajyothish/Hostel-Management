import { createSlice } from "@reduxjs/toolkit";



export const userDetailsSlice =createSlice({
    name:"User",
    initialState:{},
    reducers:{
        setUserDetails:(state,action)=>{
            state.value=action.payload
        },
        LoginUser:(state,action)=>{
            state.user=action.payload;
        },
        LogoutUser:(state)=>{
            state.user=null;
        }

    }
})

export const {setUserDetails,LoginUser,LogoutUser}= userDetailsSlice.actions

export const selectUser=(state)=>state.user.user

export default userDetailsSlice.reducer