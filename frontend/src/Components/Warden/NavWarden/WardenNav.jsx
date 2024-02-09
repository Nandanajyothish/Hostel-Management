import React, { useEffect } from 'react';
import { useState } from 'react';
import './WardenNav.css';
import { Link, useNavigate } from 'react-router-dom';
import { wardenHeader } from '../../../Service/WardenApi';
import { LoginWarden, LogoutWarden, selectWarden } from '../../../Features/setWarden';
import { useDispatch, useSelector } from 'react-redux';


const WardenNav = () => {
    const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const warden=useSelector(selectWarden)
  

  // const handleSignIn = () => {
  //   navigate('/warden/login');
  // };

  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    
    wardenHeader()
      .then((res) => {
       
        dispatch(LoginWarden(res.data.warden));;
      })
      .catch((error) => {
        console.log('Error fetching user data', error);
      });
  }, [dispatch]);

  const handleLogout = () => {
   
    navigate('/warden/login');
    dispatch(LogoutWarden(null));
  };
  return (
    <div>
       <nav className='NavingItems'>
        <div>
          <h1 className='naving-logo'>BackPack</h1>
        </div>
        <div className='menus-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul
          onClick={handleClick}
          className={click ? 'naving-menu active' : 'naving-menu'}
        >
          <li>
          
              <Link to="/warden/userlist" className="naving-lin">
                Manage Students
              </Link>
            
          </li>
          <li>
          
              <Link to="/warden/foodmenu" className="naving-lin">
                FoodMenu
              </Link>
            
          </li>
          <li>
          
              <Link to="/warden/attendence" className="naving-lin">
                Attendance
              </Link>
            
          </li>
          <li>
          
              <Link to="/warden/notification" className="naving-lin">
                Notification
              </Link>
            
          </li>
          <li>
          
          <Link to="/warden/feeslist" className="naving-lin">
            Fees List
          </Link>
        
      </li>
          
          <li>
            <button className='button2' onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default WardenNav;
