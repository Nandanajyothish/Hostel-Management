// MainHome.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainHome.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='home-container'>
        <h1 className='hostel'> WELCOME TO BACK-PACK</h1>
        <div className='home-buttons'>
          <button type='button' className='mainb' onClick={() => navigate('warden/login')}>
            Warden Login
          </button>
          <br /><br />
          <button type='button' className='mainb' onClick={() => navigate('admin/adminlogin')}>
            Admin Login
          </button>
          <br /><br />
          <button type='button' className='mainb' onClick={() => navigate('/userlogin')}>
            User Login
          </button>
          <br /><br />
          <button type='button' className='mainb' onClick={() => navigate('parent/login')}>
            Parent Login
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
