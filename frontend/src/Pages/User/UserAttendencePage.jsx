import React from 'react';
import AttendenceList from '../../Components/AttendenceShow/AttendenceList';
import Navbar from '../../Components/Designs/Navbar';
// import Footer from '../../Components/Footer/Footer';

const UserAttendencePage = () => {
  return (
    <div>
      <Navbar/><br/><br/><br/>
      <AttendenceList/>
      {/* <Footer/> */}
    </div>
  );
}

export default UserAttendencePage;
