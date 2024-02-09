// Notification.js
import React, { useEffect, useState } from 'react';
import { createNotification, getNotifications, deleteNotification } from '../../../Service/WardenApi';
import './Notify.css';

const Notification = () => {
  const [notificationData, setNotificationData] = useState({
    title: '',
    content: '',
  });
  const [notifications, setNotifications] = useState([]);

  const handleInputChange = (e) => {
    setNotificationData({
      ...notificationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateNotification = async () => {
    try {
      const createdNotification = await createNotification(notificationData);
      console.log('Notification created:', createdNotification);
      fetchNotifications();
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };

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

  const handleDeleteNotification = async (id) => {
    try {
      await deleteNotification(id);
      fetchNotifications();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="notification-container">
      <div className="not-form">
        <h2>Create Notification</h2>
        <form>
          <label>Title:</label>
          <input
            type="text"
            className="not-input"
            name="title"
            value={notificationData.title}
            onChange={handleInputChange}
          />

          <label>Content:</label>
          <textarea
            name="content"
            className="not-input"
            value={notificationData.content}
            onChange={handleInputChange}
          ></textarea>

          <button type="button" className="not-button" onClick={handleCreateNotification}>
            Create Notification
          </button>
        </form>
      </div>

      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification._id} className="notification-card">
            <h3>{notification.title}</h3>
            <p>{notification.content}</p>
            <p>{new Date(notification.createdAt).toLocaleString()}</p>
            <button type="button" onClick={() => handleDeleteNotification(notification._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
