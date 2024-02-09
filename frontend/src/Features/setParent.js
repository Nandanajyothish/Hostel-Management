import { createSlice } from "@reduxjs/toolkit";



export const parentDetailsSlice =createSlice({
    name:"Parent",
    initialState:{},
    reducers:{
        setParentDetails:(state,action)=>{
            state.value=action.payload;
            state.parent=action.payload;
        },
        LoginParent:(state,action)=>{
            state.parent=action.payload;
        },
        LogoutParent:(state)=>{
            state.parent=null;
            state.value=null;
        }

    }
})

export const {setParentDetails,LoginParent,LogoutParent}= parentDetailsSlice.actions

export const selectParent=(state)=>state.parent.parent

export default parentDetailsSlice.reducer