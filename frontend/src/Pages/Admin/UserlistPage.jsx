import React from 'react';
import UserList from '../../Components/Admin/Home/UserList';
import Navbar from '../../Components/Admin/NavBar/Navbar';

const UserlistPage = () => {
  return (
    <div>
      <Navbar/>
      <UserList/>
    </div>
  );
}

export default UserlistPage;
