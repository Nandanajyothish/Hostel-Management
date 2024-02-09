import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './parentNav.css'
import { LoginParent, LogoutParent, selectParent } from '../../../Features/setParent';
import { useDispatch, useSelector } from 'react-redux';
import { parentHeader } from '../../../Service/ParentApi';
const ParentNav = () => {
    
    const [click , setClickes] = useState("")
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const parent=useSelector(selectParent)
    // const handleSignIn = () =>{
    //   navigate('/parent/parentlogin');
    // }

    const handleClick = () => {
        setClickes(!click)
    }
    useEffect(() => {
      parentHeader()
        .then((res) => {
          dispatch(LoginParent(res.data));;
        })
        .catch((error) => {
          console.log('Error fetching parent data', error);
        });
    }, [dispatch]);
  
    const handleLogout = () => {
     
      
      dispatch(LogoutParent(null))
      navigate('/parent/login');
    };

  return (
    <div>
      <nav className='PNavbarItems'>
        <div>
        <h1 className='Pnavbar-logo'> BackPack
          </h1>
           
        </div>
        <div className="menu-icons" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
       <ul onClick={handleClick}
          className={click ? 'Pnav-menu active' : 'Pnav-menu'}>
              <li>    
         <Link to="/parent/home" className="Pnav-links">
            Home
            </Link>
            </li>
         <li>    
         <Link to="/parent/attendencelist" className="Pnav-links">
            Attendence
            </Link>
            </li>
        <li>
       <Link to="/parent/notify" className="Pnav-links">
            Notification
            </Link>
            </li>
            <li>
            <Link to="/parent/payment" className="Pnav-links">
            Payment
            </Link>
            </li>
            
            
            <li>
            <button className='button3' onClick={handleLogout}>Logout</button>
          </li>
       </ul>

      </nav>
    </div>
  );
}

export default ParentNav;

