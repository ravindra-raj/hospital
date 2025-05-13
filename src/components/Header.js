import React, { useState } from 'react';

const Header = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, address, phone } = formData;

    if (firstName && lastName && address && phone) {
      setSuccessMessage('Appointment booked successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        phone: ''
      });

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <header id="home">
      <div className="section__container header__container">
        <div className="header__content">
          <h1>Providing an Exceptional Patient Experience</h1>
          <p>Welcome, where exceptional patient experiences are our priority...</p>
          <a href="#service">
            <button className="btn">See Services</button>
          </a>
        </div>
        <div className="header__form">
          <form onSubmit={handleSubmit}>
            <h4>Book Now</h4>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn form__btn">Book Appointment</button>

            {successMessage && (
              <div className="success__message">{successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
