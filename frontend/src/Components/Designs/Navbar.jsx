import React, { useEffect, useState} from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser, LogoutUser, selectUser } from '../../Features/setUser';
import { useDispatch, useSelector } from 'react-redux';
import { userHeader } from '../../Service/UserApi';
const Navbar = () => {

    const [click , setClickes] = useState("")
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const user=useSelector(selectUser)
    // const handleSignIn = () =>{
    //   navigate('/login');
    // }

    const handleClick = () => {
        setClickes(!click)
    }
    useEffect(() => {
    
      userHeader()
        .then((res) => {
         
          dispatch(LoginUser(res.data));;
        })
        .catch((error) => {
          console.log('Error fetching user data', error);
        });
    }, [dispatch]);
  
    const handleLogout = () => {
     
      navigate('/userlogin');
      dispatch(LogoutUser(null));
    };
    return (
        <div>
              <nav className='NavbarItems'>
        <div>
        <h1 className='navbar-logo'>BackPack
          </h1>
           
        </div>
        <div className="menu-icons" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
       <ul onClick={handleClick}
          className={click ? 'nav-menu active' : 'nav-menu'}>

        <li>
           <Link to="/userhome" className="nav-links">
            Home
            </Link>
            </li>
        <li>
      <Link to="/attend/attendencelist" className="nav-links">
            Attendance
            </Link>
            </li>
            <li>
            <Link to="/viewmenu" className="nav-links">
            FoodMenu
            </Link>
            </li>
            
            <li>
            <Link to="/feeslist" className="nav-links">
              FeesList
            </Link>
            </li>
            <li>
            <Link to="/usernotify" className="nav-links">
              Notifications
            </Link>
            </li>
           
            <li>
            <button className='button7' onClick={handleLogout}>Logout</button>
          </li>
       </ul>

      </nav>
        </div>
    )
}

export default Navbar
