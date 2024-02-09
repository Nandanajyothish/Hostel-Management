// ParentNotify.jsx

import React, { useEffect, useState } from 'react';
import { getNotifications } from '../../../Service/ParentApi';

import './parentNotify.css';

const ParentNotify = () => {
  const [notifications, setNotifications] = useState([]);

  // const fetchNotifications = async () => {
  //   try {
  //     const parentToken = localStorage.getItem('parentToken');
  //     console.log("parent Token:", parentToken);

  //     if (parentToken) {
  //       const response = await getNotifications(parentToken);
        
  //       if (response && response.notify) {
  //         const notify = response.notify || [];
  //         setNotifications(notify);
  //       } else {
  //         console.error('Notification not available', response);
  //       }
  //     } else {
  //       console.error('Parent token not found'); 
  //     }
  //   } catch (error) {
  //     console.error('Error fetching notifications:', error);
  //   }
  // };
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
      <div className="notify-container">
        {notifications.map((notification) => (
          <div key={notification._id} className="notify-card">
            <h3>{notification.title}</h3>
            <p>{notification.content}</p>
            <p>{new Date(notification.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParentNotify;
