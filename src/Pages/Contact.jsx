import React, { useEffect, useState } from 'react';
import './Contact.css'; // CSS for styling
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Location icon and other icons
import Footer from '../Home/Footer';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false); 
    
    const handlePhoneClick = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleEmailClick = (email) => {
        window.location.href = `mailto:${email}`;
    };

    // IntersectionObserver to detect when elements are in the viewport
    useEffect(() => {
        if (window.scrollY !== 0) {
            window.scrollTo(0, 0);
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is in view
        );
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleScroll = () => {
            if (window.scrollY > 0) {
              setShowScrollButton(true); // Show button if scrolled down
            } else {
              setShowScrollButton(false); // Hide button if at the top
            }
          };
        
          // Scroll to top function when footer is visible or button clicked
          const handleScrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          };
        
          // Add scroll event listener when the component mounts
          useEffect(() => {
            window.addEventListener('scroll', handleScroll); // Add scroll event listener
        
            // Cleanup event listener on component unmount
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);

    return (
        <>
        <div className="contact-us-container">
            <div className="content">
                {/* Reach Out to Us Heading */}
                <h2 className="react-out-heading">Reach Out to Us</h2>
                <p className="intro-text">
                    If you have any questions, need assistance, or want to share feedback, we’re here to help! Whether you're experiencing an issue or just need more information about our services, don’t hesitate to reach out. We believe in providing the best support to all our users and are committed to addressing your concerns as quickly as possible.
                </p>
                <p className="intro-text">
                    For any inquiries, please feel free to contact us via email at <strong>support@ai4bazaar.com</strong>. Our dedicated support team is ready to assist you and ensure that your experience with us is seamless and enjoyable. We're happy to hear from you, so reach out anytime!
                </p>

                <div className={`right-section fade-in ${isVisible ? 'show' : ''}`}>
                    <div className="location-cards">
                        <div className="location-card">
                            <h3><FaMapMarkerAlt className="location-icon" /> US Location</h3>
                            <p>8751 Collin McKinney Pkwy, Suite 1102, McKinney, TX 75070</p>
                        </div>
                        <div className="location-card">
                            <h3><FaMapMarkerAlt className="location-icon" /> India Location</h3>
                            <h3>Main Branch:</h3>
                            <p>Raheja Mindspace, Survey No.64, Building Number 9, 13th Floor, Madhapur, Hyderabad, Telangana 500081</p>
                            <h3>Field Office:</h3>
                            <p>PLOT NO 16 H NO 5-5-1298 SAHEB NAGAR, INDIRA NAGAR COLONY VANASTHALIPURAM, RANGAREDDY, Telangana, India, 500070</p>
                        </div>
                    </div>

                    <div className="contact-card text-align-center">
                        <h3>Contact Details</h3>
                        <p style={{}}>
                            <FaEnvelope className="contact-icon" /> 
                            <span onClick={() => handleEmailClick('support@ai4bazaar.com')} className="contact-detail">
                            support@ai4bazaar.com
                            </span>
                        </p>
                        {/* <p>
                            <FaEnvelope className="contact-icon" />
                            <span onClick={() => handleEmailClick('registration@visyscloudtech.com')} className="contact-detail">
                                registration@visyscloudtech.com
                            </span>
                        </p> */}
                        <p>
                            <FaEnvelope className="contact-icon" />
                            <span onClick={() => handleEmailClick('helpdesk@visyscloudtech.com')} className="contact-detail">
                                helpdesk@visyscloudtech.com
                            </span>
                        </p>
                        <p>
                            <FaPhone className="contact-icon" />
                            <span onClick={() => handlePhoneClick('123-456-7890')} className="contact-detail">
                                +1 - 469-214-4477
                            </span>
                        </p>
                        <p>
                            <FaPhone className="contact-icon" />
                            <span onClick={() => handlePhoneClick('987-654-3210')} className="contact-detail">
                                +91 9392014678
                            </span>
                        </p>
                        <p>
                            <FaPhone className="contact-icon" />
                            <span onClick={() => handlePhoneClick('987-654-3210')} className="contact-detail">
                                +1-844-300-5430 (For USA only)
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        {showScrollButton && (
        <button 
          className="scroll-to-top" 
          onClick={handleScrollToTop} 
          style={{
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            padding: '10px 15px',
            fontSize: "21px", 
            borderRadius: '50%', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer'
          }}
        >
          ↑
        </button>
      )}
        </>
    );
};

export default Contact;
