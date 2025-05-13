import React from 'react';
import './App.css';

const About = () => {
  return (
    <section className="section__container about__container" id="about">
      <div className="about__content">
        <h2 className="section__header">About Us</h2>
        <p>
          Welcome to our healthcare website, your one-stop destination for
          reliable and comprehensive health care information. We are committed
          to promoting wellness and providing valuable resources to empower you
          on your health journey.
        </p>
        {/* Add more content as needed */}
      </div>
      <div className="about__image">
        <img src="assets/about.jpg" alt="about" />
      </div>
    </section>
  );
};

export default About;
