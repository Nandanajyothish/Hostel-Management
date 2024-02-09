import React from 'react';
import AttendenceList from '../../Components/AttendenceShow/AttendenceList';
import Navbar from '../../Components/Designs/Navbar';

const UserAttendencePage = () => {
  return (
    <div>
      <Navbar/>
      <AttendenceList/>
    </div>
  );
}

export default UserAttendencePage;
