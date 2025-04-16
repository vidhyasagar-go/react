import React from "react";
import './PrivacyPolicy.css'; // Import the CSS file for styling
import Footer from "../Home/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="shipment-billing-container">
        <h2 style={{ textAlign: 'center', color: '#35CFEF' }}>Privacy Policy</h2>
        
        <div className="section12">
          <h2>1. Information We Collect</h2>
          <p>
            We collect two types of information:
            <ul>
              <li><strong>Personal Information</strong>: When you sign up or engage with our services, we may collect personal information such as your name, email address, phone number, business details, and payment information.</li>
              <li><strong>Non-Personal Information</strong>: We may collect non-personal information, such as your browser type, IP address, pages visited on our website, and device details.</li>
            </ul>
          </p>
        </div>

        <div className="section12">
          <h2>2. How We Use Your Information</h2>
          <p>
            <ul>
              <li><strong>Service Delivery</strong>: We use your personal information to provide the services you request, including website development, e-commerce setup, and digital marketing.</li>
              <li><strong>Billing and Payments</strong>: Your payment details are processed securely through third-party payment gateways such as Razorpay.</li>
              <li><strong>Marketing and Communication</strong>: With your consent, we may send you marketing materials, newsletters, and updates regarding our services.</li>
              <li><strong>Improvement and Customization</strong>: Non-personal information is used to improve the functionality of our website and services, analyze trends, and personalize your experience.</li>
            </ul>
          </p>
        </div>

        <div className="section12">
          <h2>3. Data Sharing and Disclosure</h2>
          <p>
            AI4Bazaar will never sell, trade, or rent your personal information to third parties. However, we may share your data with trusted service providers who assist in operating our business.
          </p>
        </div>

        <div className="section12">
          <h2>4. Data Security</h2>
          <p>
            We employ industry-standard security measures to protect your personal information. This includes encryption, firewalls, and secure access controls.
          </p>
        </div>

        <div className="section12">
          <h2>5. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies, web beacons, and other tracking technologies to improve user experience.
          </p>
        </div>

        <div className="section12">
          <h2>6. Your Rights and Choices</h2>
          <p>
            <ul>
              <li><strong>Access and Correction</strong>: You have the right to request access to the personal information we hold about you.</li>
              <li><strong>Deletion</strong>: You can request the deletion of your personal information.</li>
              <li><strong>Opt-Out</strong>: You can opt-out of marketing communications at any time.</li>
            </ul>
          </p>
        </div>

        <div className="section12">
          <h2>7. Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their content or practices.
          </p>
        </div>

        <div className="section12">
          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            AI4Bazaar reserves the right to modify this Privacy Policy at any time. Any changes will be posted on this page.
          </p>
        </div>

        <div className="section12">
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:support@ai4bazaar.com" style={{ color: '#35CFEF', textDecoration: 'none' }}>
  <strong>support@ai4bazaar.com</strong>
</a>
.
          </p>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

