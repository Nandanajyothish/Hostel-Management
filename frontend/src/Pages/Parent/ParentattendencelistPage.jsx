import React from 'react';
// import AttendenceList from '../../Components/AttendenceShow/AttendenceList';
import ParentNav from '../../Components/Parents/ParentNavbar/ParentNav';
// import Footer from '../../Components/Footer/Footer';
import ViewAttendence from '../../Components/Parents/Viewattendence/ViewAttendence';

const ParentattendencelistPage = () => {
  return (
    <div>
      <ParentNav/><br/><br/><br/>
      <ViewAttendence/>
      {/* <Footer/> */}
    </div>
  );
}

export default ParentattendencelistPage;
