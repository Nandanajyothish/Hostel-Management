import React from 'react'
import { Route, Routes } from 'react-router-dom'


import LoginPage from '../Pages/Admin/LoginPage'
import UserlistPage from '../Pages/Admin/UserlistPage'
import AddwardenPage from '../Pages/Admin/AddwardenPage'



const AdminRouter = () => {
    return (
        <div>
            <Routes>
    
                <Route path='/adminlogin' element={<LoginPage/>}/>


                <Route path='/userlist' element={<UserlistPage/>}/>
                <Route path='/addwarden' element={<AddwardenPage/>}/>
                
            </Routes>
        </div>
    )
}

export default AdminRouter
