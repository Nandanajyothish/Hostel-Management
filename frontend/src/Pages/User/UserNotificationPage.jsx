import React from 'react';
import UserNotify from '../../Components/User/Notification/UserNotify';
import Navbar from '../../Components/Designs/Navbar';
// import Footer from '../../Components/Footer/Footer';

const UserNotificationPage = () => {
  return (
    <div>
      <Navbar/><br/><br/><br/>
      <UserNotify/>
      {/* <Footer/> */}
    </div>
  );
}

export default UserNotificationPage;
