import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
      <div className="footer-content">
        <h3>For Enquiries</h3><br/><br/>
        <ul className='aa'>
          <li className='aa'><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;Contact&nbsp;&nbsp;:&nbsp;&nbsp;0000000000</li><br/>
          <li className='aa'><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;Email&nbsp;&nbsp;:&nbsp;&nbsp;backpack@gmail.com</li><br/>
          
        </ul>
       
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#"> BackPack</a>{" "}
        </p>
       
      </div>
    </footer> 
    </div>
  );
}

export default Footer;
