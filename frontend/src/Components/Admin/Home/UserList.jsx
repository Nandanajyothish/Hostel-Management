import React, { useState, useEffect } from 'react';
import { getAdminUserList } from '../../../Service/AdminApi';

import './userlist.css'
const UserList = () => {
  const [userList, setUserList] = useState([]);

  const fetchUserList = async () => {
    try {
      
      const adminToken = localStorage.getItem('adminToken');
      console.log('Admin Token:', adminToken);

      
      if (adminToken) {
      
        const response = await getAdminUserList(adminToken);

        
        if (response && response.users) {
          const users = response.users || [];
          setUserList(users);
        } else {
          console.error('User list not available in the response:', response);
        }
      } else {
        console.error('Admin Token not found in local storage');
      }
    } catch (error) {
      console.error('Error fetching user list:', error.message);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <table border={1} className='tab' width={500}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
