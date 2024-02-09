import axios from 'axios'

const AttendenceInstances = axios.create({
    baseURL: "http://localhost:8080/attend"
})

export {AttendenceInstances}