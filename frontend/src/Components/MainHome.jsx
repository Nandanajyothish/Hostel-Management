// MainHome.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainHome.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='home-container'>
        <h1>WELCOME</h1>
        <div className='home-buttons'>
          <button type='button' onClick={() => navigate('warden/login')}>
            Warden Login
          </button>
          <br /><br />
          <button type='button' onClick={() => navigate('admin/adminlogin')}>
            Admin Login
          </button>
          <br /><br />
          <button type='button' onClick={() => navigate('/userlogin')}>
            User Login
          </button>
          <br /><br />
          <button type='button' onClick={() => navigate('parent/login')}>
            Parent Login
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
