// ViewMenu.js

import React, { useState, useEffect } from 'react';
import { getFoodMenu } from '../../../Service/UserApi';
import './ViewMenu.css';

const ViewMenu = () => {
  const [userMenu, setUserMenu] = useState([]);

  useEffect(() => {
    fetchUserMenu();
  }, []);

  const fetchUserMenu = async () => {
    try {
      const userToken = localStorage.getItem('userToken');
      console.log('user Token:', userToken);
      if (userToken) {
        const data = await getFoodMenu(userToken);
        if (Array.isArray(data)) {
          setUserMenu(data);
        } else {
          console.error("Data is not an array:", data);
          // Handle the situation when data is not an array, e.g., setUserMenu([])
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
    <div className='fudmenu'>
      <h1 className='fudhed'>Today's Menu</h1>
      <ul className='fud'>
        
        {userMenu.map((item) => (
          <li key={item._id}>
            <span>Category:</span> <strong>{item.category}</strong><br />
            <span>Dishes:</span> <strong>{item.foodname}</strong><br />
            <span>Time:</span> <strong>{item.time}</strong>
          </li>
        ))}
      </ul>
      <h2 className='quote'>“Hostel food is like a<br/> gourmet surprise every day.”</h2>
    </div>
    </div>
  );
}

export default ViewMenu;
