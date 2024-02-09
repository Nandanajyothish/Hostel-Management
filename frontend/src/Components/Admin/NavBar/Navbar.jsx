// Navbar.jsx
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { LoginAdmin, LogoutAdmin, selectAdmin } from '../../../Features/setAdmin';

import { useDispatch, useSelector } from 'react-redux';
import { adminHeader } from '../../../Service/AdminApi';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const admin=useSelector(selectAdmin)


  // const handleSignIn = () => {
  //   navigate('/admin/adminlogin');
  // };

  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    adminHeader()
      .then((res) => {
        dispatch(LoginAdmin(res.data.admin));
      })
      .catch((error) => {
        console.log('Error fetching admin data', error);
      });
  }, [dispatch]);

  const handleLogout = () => {
   
    navigate('/admin/adminlogin');
    dispatch(LogoutAdmin());
  };

  return (
    <div>
      <nav className='NavbItems'>
        <div>
          <h1 className='nav-logo'>BackPack</h1>
        </div>
        <div className='menu-ico' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul
          onClick={handleClick}
          className={click ? 'n-menu active' : 'n-menu'}
        >
          <li>
          
              <Link to="/admin/addwarden" className="nav-lin">
                Add Warden
              </Link>
            
          </li>
          <li>
          
              <Link to="/admin/userlist" className="nav-lin">
                Student List
              </Link>
            
          </li>
          <li>
            <button className='button1' onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
