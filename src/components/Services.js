import React from 'react';
import './App.css';

const Services = () => {
  return (
    <section className="section__container service__container" id="service">
      <div className="service__header">
        <div className="service__header__content">
          <h2 className="section__header">Our Special Service</h2>
          <p>
            Beyond simply providing medical care, our commitment lies in
            delivering unparalleled service tailored to your unique needs.
          </p>
        </div>
        <button className="service__btn">Ask A Service</button>
      </div>
      <div className="service__grid">
        <div className="service__card">
          <span><i className="ri-microscope-line"></i></span>
          <h4>Laboratory Test</h4>
          <p>
            Accurate Diagnostics, Swift Results: Experience top-notch Laboratory
            Testing at our facility.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="service__card">
          <span><i className="ri-mental-health-line"></i></span>
          <h4>Health Check</h4>
          <p>
            Our thorough assessments and expert evaluations help you stay
            proactive about your health.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="service__card">
          <span><i className="ri-hospital-line"></i></span>
          <h4>General Dentistry</h4>
          <p>
            Experience comprehensive oral care with Dentistry. Trust us to keep
            your smile healthy and bright.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
