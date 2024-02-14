import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div>
       <footer className='main-footer'>
      <div className='footer-content'>
        <div className='contact-info'>
          <p>Contact Number: +1 123 456 7890</p>
          <p>Email: example@example.com</p>
        </div>
        <div className='copyright'>
          <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
