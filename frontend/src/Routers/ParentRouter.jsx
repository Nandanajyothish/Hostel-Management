import React from 'react'
import { Route, Routes } from 'react-router-dom'


import ParentloginPage from '../Pages/Parent/ParentloginPage'
import ParentregisterPage from '../Pages/Parent/ParentregisterPage'
import ParentattendencelistPage from '../Pages/Parent/ParentattendencelistPage'
import ParentNotificationPage from '../Pages/Parent/ParentNotificationPage'
import ParentHomePage from '../Pages/Parent/ParentHomePage'

import PaymentPage from '../Pages/Parent/PaymentPage'




const ParentRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<ParentloginPage/>}/>
                <Route path='/register' element={<ParentregisterPage/>}/>
                <Route path='/attendencelist' element={<ParentattendencelistPage/>}/>
                <Route path='/notify' element={<ParentNotificationPage/>}/>
                <Route path='/home' element={<ParentHomePage/>}/>
                <Route path='/payment' element={<PaymentPage/>}/>
                {/* <Route path='/paydetails' element={<PaymentDetailsPage/>}/> */}
                
            </Routes>
        </div>
    )
}

export default ParentRouter
