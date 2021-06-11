import React from "react";
import Logo from "../../assets/Group 225.png";
import Fb from "../../assets/Group 99.png";
import Insta from "../../assets/Group 100.png";
import Linkdn from "../../assets/Group 105.png";
function Footer() {
  return (
    <footer>
      <div className='general'>
        <div className='footer-logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <div className='footer-description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </p>
        </div>
        <div className='copyright'>
          <p>© Copyright 2020 Nature</p>
        </div>
      </div>
      <div className='information'>
        <p>Information</p>
        <ul>
          <li>About us</li>
          <li>Products</li>
          <li>Contact us</li>
          <li>Term of service</li>
          <li>About us</li>
          <li>Products</li>
        </ul>
      </div>
      <div className='follow-us'>
        <p>Follow us</p>
        <div className='social-logo'>
          <img src={Fb} alt='Facebook' />
          <img src={Insta} alt='Instagram' />
          <img src={Linkdn} alt='Linkdin' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
