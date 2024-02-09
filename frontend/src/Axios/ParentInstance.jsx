import axios from 'axios'

const ParentInstances = axios.create({
    baseURL: "http://localhost:8080/parent",
    headers:{
        Authorization:`Bearer ${localStorage.getItem('parentToken')}`
    }
})

export {ParentInstances}