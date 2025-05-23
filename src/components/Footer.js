import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="section__container footer__container">
      <div class="footer__col">
        <h3>Hospital<span>logo</span></h3>
        <p>
          We are honored to be a part of your healthcare journey and committed
          to delivering compassionate, personalized, and top-notch care every
          step of the way.
        </p>
        <p>
          Trust us with your health, and let us work together to achieve the
          best possible outcomes for you and your loved ones.
        </p>
      </div>
      <div class="footer__col">
        <h4>About Us</h4>
        <p>Home</p>
        <p>About Us</p>
        <p>Work With Us</p>
        <p>Our Blog</p>
        <p>Terms & Conditions</p>
      </div>
      <div class="footer__col">
        <h4>Services</h4>
        <p>Search Terms</p>
        <p>Advance Search</p>
        <p>Privacy Policy</p>
        <p>Suppliers</p>
        <p>Our Stores</p>
      </div>
      <div class="footer__col">
        <h4>Contact Us</h4>
        <p>
          <i class="ri-map-pin-2-fill"></i> 123, London Bridge Street, London
        </p>
        <p><i class="ri-mail-fill"></i> support@care.com</p>
        <p><i class="ri-phone-fill"></i> (+012) 3456 789</p>
      </div>
    </div>
    <div class="footer__bar">
      <div class="footer__bar__content">
        <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
        <div class="footer__socials">
          <span><i class="ri-instagram-line"></i></span>
          <span><i class="ri-facebook-fill"></i></span>
          <span><i class="ri-heart-fill"></i></span>
          <span><i class="ri-twitter-fill"></i></span>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
