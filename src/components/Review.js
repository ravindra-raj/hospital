import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
const reviews = [
    {
      name: "Dr. John Matthews",
      feedback: "The staff was incredibly caring and professional. My surgery went smoothly and recovery was quick!",
      rating: 5
    },
    {
      name: "Anita Desai",
      feedback: "Emergency services were quick to respond. The doctors explained everything clearly and calmly.",
      rating: 4
    },
    {
      name: "Rajesh Kumar",
      feedback: "I had a great experience during my health checkup. Clean facility and polite nurses.",
      rating: 5
    },
    {
      name: "Emily Thomas",
      feedback: "Excellent pediatric care for my son. Doctors were very friendly and knowledgeable.",
      rating: 4
    }
  ];
  

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="review-container">
      <h2>Patients Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="review-card">
              <h4>{review.name}</h4>
              <p>"{review.feedback}"</p>
              <p>⭐ {review.rating} / 5</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Review;

