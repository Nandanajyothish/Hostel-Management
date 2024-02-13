import React from 'react';
import UserList from '../../Components/Admin/Home/UserList';
import Navbar from '../../Components/Admin/NavBar/Navbar';

const UserlistPage = () => {
  return (
    <div>
      <Navbar/><br/><br/><br/>
      <UserList/>
    </div>
  );
}

export default UserlistPage;
