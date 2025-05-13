import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import Footer from './components/Footer';
import Review from './components/Review';
import ContactUs from './components/ContactUs';
import './components/App.css';
import ScrollToTop from './components/ScrollToTop';

// Home page component to group sections
const Home = () => (
  <>
    <Header />
    <Services />
    <About />
    <WhyChooseUs />
    <Doctors />
    <Review />
    <ContactUs/>
    <ScrollToTop />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor" element={<Doctors />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
