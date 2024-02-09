import React, { useState } from 'react';
import { getNotifications  } from '../../../Service/UserApi';
import { useEffect } from 'react';
import './userNotify.css'
const UserNotify = () => { 
    const [notifications, setNotifications] = useState([]);
      const fetchNotifications = async () => {
        try {
          const notificationsData = await getNotifications();
          setNotifications(notificationsData);
        } catch (error) {
          console.error('Error fetching notifications:', error);
        }
      };
      
    
      useEffect(() => {
        fetchNotifications();
      }, []);
      
     
  return (
    <div>
       <h2>Notifications</h2>
      <div className="unotify-container">
        {notifications.map((notification) => (
          <div key={notification._id} className="unotify-card">
            <h3>{notification.title}</h3>
            <p>{notification.content}</p>
            <p>{new Date(notification.createdAt).toLocaleString()}</p>
           
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default UserNotify;
