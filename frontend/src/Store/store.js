import {configureStore} from "@reduxjs/toolkit"
import  useReducer from "../Features/setUser"
import  adminReducer from "../Features/setAdmin"
import  parentReducer from '../Features/setParent'
import  wardenReducer from "../Features/setWarden"






export default configureStore({
    reducer:{
        user:useReducer,
        admin:adminReducer,
        parent:parentReducer,
        warden:wardenReducer,
    }
})
