import React from 'react';
import ParentNav from '../../Components/Parents/ParentNavbar/ParentNav';
import ParentHome from '../../Components/Parents/ParentHome/ParentHome';
// import Footer from '../../Components/Footer/Footer';

const ParentHomePage = () => {
  return (
    <div>
      <ParentNav/><br/><br/>
      <ParentHome/>
      {/* <Footer/> */}
      
    </div>
  );
}

export default ParentHomePage;
