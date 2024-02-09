import { createSlice } from "@reduxjs/toolkit";



export const wardenDetailsSlice =createSlice({
    name:"Warden",
    initialState:{},
    reducers:{
        setWardenDetails:(state,action)=>{
            state.value=action.payload
        },
        LoginWarden:(state,action)=>{
            state.warden=action.payload;

        },
        LogoutWarden:(state)=>{
            state.warden=null;
            state.value=null
        }

    }
})

export const {setWardenDetails,LoginWarden,LogoutWarden}= wardenDetailsSlice.actions

export const selectWarden=(state)=>state.warden.warden

export default wardenDetailsSlice.reducer
