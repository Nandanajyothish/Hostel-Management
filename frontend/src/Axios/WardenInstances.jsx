import axios from 'axios'

const WardenInstances = axios.create({
    baseURL: "http://localhost:8080/warden",
    headers:{
        Authorization:`Bearer ${localStorage.getItem('wardenToken')}`
    },
    
})

export {WardenInstances};