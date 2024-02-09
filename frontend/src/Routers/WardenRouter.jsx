import React from 'react'
import { Route, Routes } from 'react-router-dom'



import WardenloginPage from '../Pages/Warden/WardenloginPage'
import WardenattendencePage from '../Pages/Warden/WardenattendencePage'
import WardenfoodmenuPage from '../Pages/Warden/WardenfoodmenuPage'
import WardenViewuserPage from '../Pages/Warden/WardenViewuserPage'

import WardenNotificationPage from '../Pages/Warden/WardenNotificationPage'
import WardenFeesListPage from '../Pages/Warden/WardenFeesListPage'

const WardenRouter = () => {
    return (
        <div>
           <Routes>
            <Route path='/login' element={<WardenloginPage/>}/>
            <Route path='/attendence' element={<WardenattendencePage/>}/>
            <Route path='/foodmenu' element={<WardenfoodmenuPage/>}/>
            <Route path='/userlist' element={<WardenViewuserPage/>}/>
            {/* <Route path='/home' element={<WardenHomePage/>}/> */}
            <Route path='/notification' element={<WardenNotificationPage/>}/>
            <Route path='/feeslist' element={<WardenFeesListPage/>}/>
            </Routes> 
        </div>
    )
}

export default WardenRouter
