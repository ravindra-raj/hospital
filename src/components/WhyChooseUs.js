import React from 'react';
import './App.css';

const WhyChooseUs = () => {
  return (
    <section className="section__container why__container" id="blog">
      <div className="why__image">
        <img src="assets/choose-us.jpg" alt="why choose us" />
      </div>
      <div className="why__content">
        <h2 className="section__header">Why Choose Us</h2>
        <p>
          With a steadfast commitment to your well-being, our team of highly
          trained healthcare professionals ensures that you receive nothing
          short of exceptional patient experiences.
        </p>
        {/* Add more content as needed */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
