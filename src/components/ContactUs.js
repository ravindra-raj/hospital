import React, { useState } from 'react';
import './App.css'; // Make sure to create and import this CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact__container" id="contact">
      <h2 className="contact__title">Contact Us</h2>

      <div className="contact__content">
        <div className="contact__left">
          <form onSubmit={handleSubmit} className="contact__form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn">Send Message</button>
          </form>

          <div className="contact__info">
            <h3>Get in Touch</h3>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> contact@hospital.com</p>
            <p><strong>Address:</strong> 123 Health St, Wellness City, USA</p>
          </div>
        </div>

        <div className="contact__map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2958503372373!2d-122.4194154846819!3d37.77492927975937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5fdb1a6b%3A0x47e90ee9f67d711f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1684979012345!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
