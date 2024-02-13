import React from 'react';
import ParentNotify from '../../Components/Parents/Notification/ParentNotify';
import ParentNav from '../../Components/Parents/ParentNavbar/ParentNav';
// import Footer from '../../Components/Footer/Footer';

const ParentNotificationPage = () => {
  return (
    <div>
      <ParentNav/><br/><br/><br/>
      <ParentNotify/>
      {/* <Footer/> */}
    </div>
  );
}

export default ParentNotificationPage;
