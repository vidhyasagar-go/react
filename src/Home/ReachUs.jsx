import React from 'react';
import './ReachUs.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const ReachUs = () => {
  return (
    <>
    <p style={{ color: "#35d0f0", fontWeight: "600", marginBottom: "0px", textTransform:"uppercase", textAlign: "center" }}>Reach Us</p>
    <h1 id="reachus" className="sub-title">Our Location</h1>
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.123456789!2d78.4455308!3d17.4345489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d9f9abcd01%3A0x9cdef12345!2sYour+Location+Name!5e0!3m2!1sen!2sin!4v1234567890123"
              className="map-frame"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          <div className="text-content">
            <h2 className="title">
              We Make it Easy to Connect With Users On Every Domain
            </h2>
            
            <p className="description">
              We provide end to end packaged services right from data collection strategies, data engineering in cloud,
              AI and IoT solutions with intuitive user interface. Users can access the data collected from sensors, insights
              on predictive maintenance and repair needs, analyse and improve product / machine performance, reduce total
              cost of ownership of products and improve asset utilisation
            </p>
            
            <Button
              variant="outline"
              size="lg"
              className="reach-button"
            >
              <Link to="/contact" onClick={() => {window.scrollTo(0, 0)}}>REACH US</Link>
              
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ReachUs;