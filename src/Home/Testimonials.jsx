import React, { useState, useEffect } from "react";
import './Testimonials.css';

const Testimonials = () => {
    
  return (
    <div id="reviews">
      

      {/* Testimonials Section */}
      <h1 className="sub-title1">What Our Client's Say About US</h1>
      <div id="testimonials-container" className="testimonials-container">
        <div className="testimonials-cards-wrapper">
          <div id="card1" className="testimonial-card">
            <p>"This service is amazing! Highly recommend it to everyone."</p>
            <h4>John Doe</h4>
          </div>
          <div id="card2" className="testimonial-card">
            <p>"A great experience. Customer service was top-notch!"</p>
            <h4>Jane Smith</h4>
          </div>
          <div id="card3" className="testimonial-card">
            <p>"Absolutely loved it! Will come back again."</p>
            <h4>Sam Wilson</h4>
          </div>
          <div id="card4" className="testimonial-card">
            <p>"Efficient, reliable, and great results."</p>
            <h4>Emily Davis</h4>
          </div>
          <div id="card5" className="testimonial-card">
            <p>"The best decision I made this year!"</p>
            <h4>Michael Brown</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;