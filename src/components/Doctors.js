
import React, { useState } from 'react';
import './App.css';
import { FaFacebookF, FaInstagram, FaHeart, FaTwitter } from 'react-icons/fa';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

// Import images from src/assets/
import doctor1 from '../assets/doctor-1.jpg';
import doctor2 from '../assets/doctor-2.jpg';
import doctor3 from '../assets/doctor-3.jpg';
import doctor4 from '../assets/doctor-4.jpg';
import doctor5 from '../assets/doctor-5.jpg';
import doctor6 from '../assets/doctor-6.jpg';
const doctorData = [
  {
    name: 'Dr. Emily Smith',
    specialty: 'Cardiologist',
    image: doctor1,
  },
  {
    name: 'Dr. James Anderson',
    specialty: 'Neurosurgeon',
    image: doctor2,
  },
  {
    name: 'Dr. Michael Lee',
    specialty: 'Dermatologist',
    image: doctor3,
  },
  {
    name: 'Dr. Sarah Thomas',
    specialty: 'Pediatrician',
    image: doctor4,
  },
  {
    name: 'Dr. Robert Brown',
    specialty: 'Orthopedic Surgeon',
    image: doctor5,
  },
  {
    name: 'Dr. Aisha Khan',
    specialty: 'Gynecologist',
    image: doctor6,
  },
];

const Doctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const doctorsToShow = 3;
  const maxIndex = doctorData.length - doctorsToShow;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="section__container doctors__container" id="doctors">
      <div className="doctors__header">
        <h2 className="section__header">Our Special Doctors</h2>
        <div className="doctors__nav">
          <span onClick={handlePrev}><TiArrowLeftThick /></span>
          <span onClick={handleNext}><TiArrowRightThick /></span>
        </div>
      </div>

      <div className="doctors__grid">
        {doctorData.slice(currentIndex, currentIndex + doctorsToShow).map((doctor, index) => (
          <div className="doctors__card" key={index}>
            <div className="doctors__card__image">
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctors__socials">
                <span><FaInstagram /></span>
                <span><FaFacebookF /></span>
                <span><FaHeart /></span>
                <span><FaTwitter /></span>
              </div>
            </div>
            <h4>{doctor.name}</h4>
            <p>{doctor.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
