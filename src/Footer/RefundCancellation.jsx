import React from 'react';
import './RefundCancellation.css'; // We'll define the styles here
import Footer from '../Home/Footer';

const RefundCancellation = () => {
  return (
    <>
      <div className="policy-container">
      {/* Refund Policy Section */}
      <h2 style={{textAlign: 'center', color: '#35CFEF', margin: '30px'}}>Refund and Cancellation Policy for AI4Bazaar.</h2>
      <div className="intro-section" >
        <p>
          At <a href="https://ai4bazaar.com/" style={{color: 'inherit'}}><b>AI4Bazaar</b></a>, we aim to provide a seamless digital transformation for small and local businesses. Our goal is to make the process of adopting digital solutions as smooth as possible. However, we understand that sometimes circumstances change, and you may need to cancel or request a refund. Below are the details of our refund and cancellation policy, which complies with industry standards and Razorpay’s requirements.
        </p>
      </div>
      <div className="policy-section">
        <h4 className="policy-heading">Refund Policy</h4>
        <p className="policy-paragraph">
          Our refund policy is designed to ensure that customers who are dissatisfied with our services or products can request a refund within a reasonable timeframe. We aim to build trust with all businesses that choose to work with us and provide them with the necessary support to make their digital transformation successful.
        </p>
        <div className='lidiv'><li></li>
          <div>
          <b>Website Development Services</b>
        <p>
          Customers can request a full refund within 14 days of the website deployment if no additional services such as e-commerce integration or digital marketing solutions have been used. If additional services were utilized, a partial refund will be processed based on the value of services rendered. Refunds will be processed back to the original payment method used during the transaction.
        </p>
          </div>
        </div>
        
        <div className='lidiv'>
  <li></li>
  <div>
    <b>E-commerce and Digital Marketing Solutions</b>
    <p>
      If the service has not been initiated within 30 days of purchase, customers can request a full refund. If services such as e-commerce setup or digital marketing campaigns have already been initiated, refunds will be prorated based on the work completed at the time of the cancellation. Digital marketing campaigns once started are non-refundable.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <b>Non-Refundable Items</b>
    <p>
      Any administrative, setup, or integration fees that are non-refundable due to the nature of the work completed will be deducted from any refunds. If any service is fully rendered or accessed (e.g., marketing campaigns, data insights), it will not be eligible for a refund.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <b>Refund Process</b>
    <p>
      To request a refund, please contact our support team at support@ai4bazaar.com within the eligible refund period. The request must include details of the purchase, the reason for the refund, and any supporting documentation. Once the refund request is received, we will process it within 7 business days, and the refund will be issued through the original payment method.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <b>Chargebacks and Disputes</b>
    <p>
      In the case of a chargeback or payment dispute initiated through Razorpay, we will work closely with Razorpay to resolve the issue. All disputes will be handled according to our standard procedures, which may include providing transaction records or other documentation as needed. Please note that any service that has been completed or delivered is not eligible for chargeback claims.
    </p>
  </div>
</div>

      </div>

      {/* Cancellation Policy Section */}
      <div className="policy-section">
        <h2 className="policy-heading">Cancellation Policy</h2>
        <div className='lidiv'>
  <li></li>
  <div>
    <b>Website Development Cancellation</b>
    <p>
      If you wish to cancel your website development service before deployment, a full refund will be provided. If the website is deployed and operational for less than 14 days, a partial refund will be issued, deducting any costs for work already completed. To cancel, you must notify us via email within 7 days of purchase.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <b>E-commerce and Digital Marketing Services</b>
    <p>
      For e-commerce and digital marketing subscriptions, cancellations can be requested within the first 30 days. If services have already been rendered, a prorated refund will be issued based on the value of services completed at the time of cancellation. Cancellations beyond the 30-day period will not be refunded.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <b>Subscription-Based Services</b>
    <p>
      For subscription-based services, customers can cancel at any time before the next billing cycle. If the service is canceled before the renewal date, no further charges will be applied.
    </p>
  </div>
</div>

      </div>

      {/* Mode of Refund Section */}
      <div className="policy-section">
        <h2 className="policy-heading">Mode of Refund</h2>
        <p>
          Refunds will be processed back to the original payment method used during the transaction (credit card, Razorpay wallet, etc.), subject to Razorpay's policies.
        </p>
      </div>

      {/* Final Decision Section */}
      <div className="policy-section">
        <h2 className="policy-heading">Final Decision</h2>
        <p>
          AI4Bazaar reserves the right to review all refund and cancellation requests on a case-by-case basis and to make a final decision in line with our policies. All decisions are final, but we aim to provide fair solutions to our customers.
        </p>
      </div>

      {/* Contact Section */}
      <div className="policy-section">
        <h2 className="policy-heading">Contact Us</h2>
        <p>
          If you have any questions or need further clarification regarding this policy, please contact our customer support team at <a href="mailto:support@ai4bazaar.com" style={{ color: '#35CFEF', textDecoration: 'none' }}>
  <strong>support@ai4bazaar.com</strong>
</a>
.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default RefundCancellation;

