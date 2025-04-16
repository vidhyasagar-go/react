import React from "react";
import './Pricing.css';
import premium from '../assets/premium.jpeg';
import advanced from '../assets/advanced.jpeg';
import basic from '../assets/basic.jpeg';
import minimal from '../assets/minimal.jpeg';

function Pricing() {
  return (
    <div id="main-section">
      <div className="container">
        <p style={{ color: "#35d0f0", fontWeight: "600", marginBottom: "0px", textTransform: "uppercase", textAlign: "center" }}>What We Enroll</p>
        <h1  className="sub-title">Enrollment Options</h1>
        <h4 style={{textAlign: "center "}}>Packages We Offer</h4>
        <div className="service-list">
  {/* Package A */}
  <div className="package">
    <img
      className="icon"
      src={minimal}
      alt="Package A"
    />
    <h2 className="package-title">Minimal Basic</h2>
    <p className="package-description">
      Combined savings of over $1100 compared to purchase of 7 individual courses, books, and exam review.
    </p>
    <ul className="package-details">
      <li>21-month Online Access</li>
      <li>Books Included</li>
      <li>7 Courses</li>
    </ul>
    <p className="price">
      <strong>$4,995</strong>
    </p>
    <button className="enroll-button">ENROLL NOW</button>
  </div>

  {/* Package B */}
  <div className="package">
    <img
      className="icon"
      src={basic}
      alt="Package B"
    />
    <h2 className="package-title">Basic</h2>
    <p className="package-description">
      Combined savings of over $1100 compared to purchase of 7 individual courses, books, and exam review.
    </p>
    <ul className="package-details">
      <li>21-month Online Access</li>
      <li>Books Included</li>
      <li>7 Courses</li>
    </ul>
    <p className="price">
      <strong>$4,995</strong>
    </p>
    <button className="enroll-button">ENROLL NOW</button>
  </div>

  {/* Package C */}
  <div className="package">
    <img
      className="icon"
      src={advanced}
      alt="Package C"
    />
    <h2 className="package-title">Advanced</h2>
    <p className="package-description">
      Combined savings of over $1100 compared to purchase of 7 individual courses, books, and exam review.
    </p>
    <ul className="package-details">
      <li>21-month Online Access</li>
      <li>Books Included</li>
      <li>7 Courses</li>
    </ul>
    <p className="price">
      <strong>$4,995</strong>
    </p>
    <button className="enroll-button">ENROLL NOW</button>
  </div>

  {/* Package D */}
  <div className="package">
    <img
      className="icon"
      src={premium}    alt="Package D"
    />
    <h2 className="package-title">Premium</h2>
    <p className="package-description">
      Combined savings of over $1100 compared to purchase of 7 individual courses, books, and exam review.
    </p>
    <ul className="package-details">
      <li>21-month Online Access</li>
      <li>Books Included</li>
      <li>7 Courses</li>
    </ul>
    <p className="price">
      <strong>$4,995</strong>
    </p>
    <button className="enroll-button">ENROLL NOW</button>
  </div>
</div>
      </div>
    </div>
  );
}

export default Pricing;
