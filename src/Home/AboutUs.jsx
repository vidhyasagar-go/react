import React from "react";
import aboutusimg from '../assets/aboutus.jpg';
import './AboutUs.css';
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* About Us Text */}
          <div className="about-col-2">
            <p
              className="infop"
              style={{
                color: "#35d0f0",
                fontWeight: "600",
                marginBottom: "0px",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              About Us
            </p>
            <h1
              style={{
                fontWeight: "600",
                marginBottom: "45px",
              }}
              className="sub-title"
            >
              Architecting the Digital Future
            </h1>
          </div>

          <div className="about-section">
            <div className="about-col-1">
              <img
                className="mm"
                src={aboutusimg}
                alt="AI Concept"
              />
            </div>

            <div className="aboutusright">
              <p className="pp">
                We provide website development and software solutions tailored for small vendors and local businesses like tea stalls, retail shops, and small-scale enterprises. Our mission is to make technology accessible, helping businesses grow and thrive in the digital era.

                We create user-friendly, professional websites that establish a strong online presence, showcase products and services, and make it easy for customers to connect.

                Our customized software solutions are designed to simplify daily operations, including inventory management, sales tracking, and billing. These tools save time, reduce manual effort, and enhance efficiency, allowing vendors to focus on serving their customers.

                We understand the unique challenges faced by small businesses and prioritize simplicity and affordability in our solutions. By leveraging our expertise, small vendors can embrace digital transformation, improve customer engagement, and achieve sustainable growth. Our goal is to empower small businesses with the tools they need to succeed.
              </p>

              {/* Updated Link for Button */}
              <div 
                style={{
                  display: 'flex', 
                  justifyContent: 'center',  // Center horizontally
                  marginTop: '20px' // Optional: add some space above the button
                }}
              >
                <Link 
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)} 
                  style={{
                    backgroundColor: "green", 
                    padding: "14px 25px", // Adjust padding for button size
                    textAlign: 'center', 
                    textDecoration: 'none', 
                    color: 'white', 
                    borderRadius: '5px',
                    width: 'auto' // This ensures the button size is adjusted to its content
                  }}
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
