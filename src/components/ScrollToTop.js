import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <span className="scroll-to-top" onClick={scrollToTop} title="Back to Top">
        <FaArrowUp className="scroll-icon" />
      </span>
    )
  );
};

export default ScrollToTop;
