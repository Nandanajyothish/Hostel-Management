import React from 'react'
import {Route,Routes} from 'react-router-dom'






import MainHome from '../Components/MainHome'
import UserloginPage from '../Pages/User/UserloginPage'
import UserregisterPage from '../Pages/User/UserregisterPage'
import UserAttendencePage from '../Pages/User/UserAttendencePage'
import UserhomePage from '../Pages/User/UserhomePage'
import ViewmenuPage from '../Pages/User/ViewmenuPage'
import UserNotificationPage from '../Pages/User/UserNotificationPage'
import FeesListPage from '../Pages/User/FeesListPage'


const UserRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainHome/>}/>
                <Route path='/userlogin' element={<UserloginPage/>}/>
                <Route path='/userregister' element={<UserregisterPage/>}/>
                <Route path='/attend/attendencelist' element={<UserAttendencePage/>}/>
                <Route path='/userhome' element={<UserhomePage/>}/>
                <Route path='/viewmenu' element={<ViewmenuPage/>}/>
                <Route path='/usernotify'element={<UserNotificationPage/>}/>
                <Route path='/feeslist' element={<FeesListPage/>}/>
                
            </Routes>
        </div>
    )
}

export default UserRouter
