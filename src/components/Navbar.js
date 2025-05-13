import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="section__container nav__container">
      <div className="nav__logo">
        Hospital<span>Logo</span>
      </div>
      <ul className="nav__links">
        <li className="link"><a href="#home">Home</a></li>
        <li className="link"><a href="#about">About Us</a></li>
        <li className="link"><a href="#service">Services</a></li>
        <li className="link"><a href="#doctors">Doctors</a></li>
        <li className="link"><a href="#blog">Blog</a></li>
      </ul>
      <button className="btn"><a href="#contact" className="btn">Contact Us</a></button>
    </nav>
  );
};

export default Navbar;
