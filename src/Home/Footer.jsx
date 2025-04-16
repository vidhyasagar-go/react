import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Themes/ThemeContext"; // Make sure you import ThemeContext
import ailogolight from '../assets/ailogolight.png';
import ailogodark from '../assets/ailogodark.png';
import './Footer.css'; // Add a separate Footer CSS file for class-based styles

const Footer = () => {
  // Using context to get the current theme
  const { theme } = useContext(ThemeContext);
  // Define a color based on the current theme
  const linkColor = theme === 'dark' ? 'white' : 'black'; // Light theme -> Blue, Dark theme -> Light Gray


  return (
    <footer className="footer" style={{ padding: "30px 0" }}>
      {/* Social media section */}
      <section>
        <hr />
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            {/* Company info */}
            <Col md={3} lg={4} xl={3} className="mx-auto mb-3">
              {/* Dynamically render logo based on current theme */}
              <img
                className="ailogo1"
                src={theme === 'light' ? ailogolight : ailogodark} // Change logo based on theme
                alt="AI Logo"
                style={{ width: "150px",}}
              />
              <h6 style={{ fontWeight: "bold", textTransform: "uppercase" }} className="footer-text mb-4">
                Visys Cloud Technologies
              </h6>
              <p>
                Visys Cloud Technologies always aims at helping organizations gain a competitive edge by leveraging new technologies to drive innovation, manage scalability and explore new markets.
              </p>
              <div id="bp">
              
                <Button  id="b" variant="link" className="social-button" href="https://www.facebook.com/people/Cloud4CoolKids/61560383229805/" target="_blank">
                  <FaFacebookF />
                </Button>
                <Button id="b" variant="link" className="social-button" href="https://x.com/i/flow/login?redirect_after_login=%2Fcloud4coolkids" target="_blank">
                  <FaTwitter />
                </Button>
                <Button id="b" variant="link" className="social-button" href="https://visyscloudtech.com/" target="_blank">
                  <FaGoogle />
                </Button>
                <Button id="b" variant="link" className="social-button" href="https://www.instagram.com/cloud4coolkids/" target="_blank">
                  <FaInstagram />
                </Button>
                <Button id="b" variant="link" className="social-button" href="https://www.linkedin.com/company/cloud4coolkids/" target="_blank">
                  <FaLinkedin />
                </Button>
              </div>
            </Col>

            {/* Useful links */}
            <Col id="figg" md={3} lg={2} xl={2} className="mx-auto mb-4">
            <h6 style={{ fontWeight: "bold", textTransform: "uppercase" }} className="footer-text mb-4">
          Quick links
        </h6>
        <p><a href="/" className="footer-link" style={{ color: linkColor }}>Home</a></p>
        <p><a href="/#ourworks" className="footer-link" style={{ color: linkColor }}>Our Works</a></p>
        <p><a href="/#fff" className="footer-link" style={{ color: linkColor }}>Services</a></p>
        <p><a href="/#about" className="footer-link" style={{ color: linkColor }}>About Us</a></p>
        <p><a href="/#designs" className="footer-link" style={{ color: linkColor }}>Designs</a></p>
        <p><a href="/#main-section" className="footer-link" style={{ color: linkColor }}>Pricing</a></p>
        <p><a href="/#reachus" className="footer-link" style={{ color: linkColor }}>Reach Us</a></p>
        <p><a href="mailto:helpdesk@visyscloudtech.com" className="footer-link" style={{ color: linkColor }}>Help</a></p>
            </Col>

            <Col>
              <p style={{ marginTop: "43px" }}>
                <Link to="/terms-conditions" onClick={() => window.scrollTo(0, 0)} style={{ color: linkColor }} className="footer-link">Terms & Conditions</Link>
              </p>
              <p>
                <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} style={{ color: linkColor }} className="footer-link">Privacy Policy</Link>
              </p>
              <p>
                <Link to="/refund-cancellation" onClick={() => window.scrollTo(0, 0)} style={{ color: linkColor }} className="footer-link">Refund & Cancellation</Link>
              </p>
              <p>
                <Link to="/blog" onClick={() => window.scrollTo(0, 0)} style={{ color: linkColor }} className="footer-link">Blogs</Link>
              </p>
              <p id="shippingbtn">
                <Link to="/shipment-billing" onClick={() => window.scrollTo(0, 0)} style={{ color: linkColor }} className="footer-link">Shipment and Billing</Link>
              </p>
            </Col>

            {/* Contact */}
            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 style={{ fontWeight: "bold", textTransform: "uppercase" }} className="footer-text mb-4">Contact</h6>
              <div className="flexmap">
              <i class='bx bxs-map' ></i>
              <h6><b> &nbsp; USA Location</b></h6>
              </div>
              <br />
              <p>8751 Collin McKinney Pkwy, Suite 1102, McKinney, TX 75070</p>
              <br />
              <div className="flexmap">
              <i class='bx bxs-map' ></i>
              <h6><b> &nbsp; India Location</b></h6>
              </div>
              <br />
              <h6><b>Main Branch:</b></h6>
              {/* <br /> */}
              <p>Raheja Mindspace, Survey No.64, Building Number 9, 13th Floor, Madhapur, Hyderabad, Telangana 500081</p>
              <br />
              <h6><b>Field Office:</b></h6>
              {/* <br /> */}
              <p>PLOT NO 16 H NO 5-5-1298 SAHEB NAGAR, INDIRA NAGAR
              COLONY VANASTHALIPURAM, RANGAREDDY, Rangareddy, Telangana, India, 500070</p>
              <p><b>Contact No:</b>
              <a href="tel:+18443005430" style={{ color: linkColor }}>+1-844-300-5430</a>
               (For USA only) </p>
              <p>
                <FaPhone className="me-2" />
                <a href="tel:+14692144477" style={{ color: linkColor }} className="footer-link">+1 - 469-214-4477</a>
                
              </p>
              <p>
                <FaPhone className="me-2" />
                <a href="tel:+919392014678" style={{ color: linkColor }} className="footer-link">+91 9392014678</a>
              </p>
              {/* <p>
                <FaEnvelope className="me-2" />
                <a href="mailto:info@visyscloudtech.com" style={{ color: linkColor }} className="footer-link">info@visyscloudtech.com</a>
              </p> */}
              <p>
                <FaEnvelope className="me-2" />
                <a href="mailto:support@ai4bazaar.com" style={{ color: linkColor }} className="footer-link">support@ai4bazaar.com</a>
              </p>
              {/* <p>
                <FaEnvelope className="me-2" />
                <a href="mailto:registration@visyscloudtech.com" style={{ color: linkColor }} className="footer-link">registration@visyscloudtech.com</a>
              </p> */}
              <p>
                <FaEnvelope className="me-2" />
                <a href="mailto:helpdesk@visyscloudtech.com"style={{ color: linkColor }} className="footer-link">helpdesk@visyscloudtech.com</a>
              </p>

              {/* <p><FaHome className="me-2" />
                <a href="#" className="footer-link" style={{ color: linkColor }}>McKinney TX - 75070</a></p> */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Copyright */}
      <div className="text-center p-0">
        <hr />
        <span>Copyright © 2025, </span>
        <a href="https://visyscloudtech.com/" className="footer-link" style={{ fontWeight: "600", textDecoration: "none", color: "#35d0f0" }}>
          VISYS CLOUD TECHNOLOGIES INDIA.
        </a>
        <span> All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

