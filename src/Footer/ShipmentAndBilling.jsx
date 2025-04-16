import React from "react";
import './ShipmentAndBilling.css'; // Import the CSS file for styling
import Footer from "../Home/Footer";

const ShipmentAndBilling = () => {
  return (
    <>
    <div className="shipment-billing-container">
      <h2 style={{textAlign: 'center', color: '#35CFEF', margin: '30px'}}>Your AI4Bazaar Shipping and Billing Process</h2>
      <div className="section11">
        <h2>Billing Information and Process</h2>
        <p>
          Upon purchasing any service from AI4Bazaar, you will receive an invoice that clearly outlines the details of the service provided, including the scope of work, fees, and applicable taxes. The invoice will be sent to the email address registered with your account.
        </p>
        <p>
          Invoices are generated as soon as the payment is processed and can be accessed anytime via your AI4Bazaar account dashboard.
        </p>
      </div>

      <div className="section11">
        <h2>Payment Methods</h2>
        <p>
          We accept payments through a variety of secure online methods, including credit/debit cards, net banking, and Razorpay wallet. The payment process is handled through Razorpay to ensure safety and reliability.
        </p>
        <p>
          For all payments made through Razorpay, a transaction receipt will be sent to you, confirming the successful payment and providing details such as the amount paid, payment date, and method used.
        </p>
        <p>
          Please ensure that the billing information provided during the payment process is accurate, as it is used to process invoices and any refund or billing issues. AI4Bazaar will not be responsible for delays or issues caused by incorrect billing details.
        </p>
      </div>

      <div className="section11">
        <h2>Payment Schedule</h2>
        <p>
          For services that are billed on a subscription basis (e.g., monthly or annual digital marketing or e-commerce plans), payments will be charged at the start of each billing cycle. You will receive an email reminder before the renewal date, and payment will be automatically processed unless canceled before the renewal date.
        </p>
        <p>
          For one-time services (e.g., website development), payment is due at the time of service agreement signing or before the commencement of the project, as specified in the service contract.
        </p>
      </div>

      <div className="section11">
        <h2>Currency and Taxes</h2>
        <p>
          All payments are processed in Indian Rupees (INR) unless otherwise specified. Any applicable taxes, including Goods and Services Tax (GST), will be included in the invoice amount as per the current tax regulations.
        </p>
        <p>
          If your business is registered under GST, please provide your GSTIN at the time of purchase, and the tax invoice will reflect the applicable GST charges.
        </p>
      </div>

      <div className="section11">
        <h2>Shipment/Delivery Information</h2>
        <p>
          AI4Bazaar is a digital service provider, so there is no physical shipment of products. Instead, all services are delivered online, such as website development, e-commerce platform integration, or digital marketing campaigns.
        </p>
        <p>
          For website development or e-commerce platform projects, the delivery is typically made once the website is fully designed, developed, and approved by the client. A live version of your website will be available for access as soon as deployment is completed.
        </p>
        <p>
          For digital marketing services, campaigns will be launched and tracked based on the schedule provided in the service contract. Clients can track the progress and performance of campaigns via their AI4Bazaar dashboard.
        </p>
      </div>

      <div className="section11">
        <h2>Timeline for Service Delivery</h2>
        <p>
          The time required for service delivery depends on the scope of the project and will be discussed and agreed upon at the time of purchase. Generally, for standard website development projects, delivery will be made within 10-14 business days from the project start date.
        </p>
        <p>
          Digital marketing campaigns or e-commerce setups may require additional time for strategy planning, design, and implementation, with an estimated timeline provided during the initial consultation phase.
        </p>
      </div>

      <div className="section11">
        <h2>Shipping of Physical Products</h2>
        <p>
          For clients who purchase any additional physical products, such as branded merchandise or hardware (if applicable), the shipping of these products will follow standard procedures. You will be notified of any shipping charges, estimated delivery times, and tracking information once the items are dispatched.
        </p>
        <p>
          For any physical shipments, AI4Bazaar partners with reliable courier services to ensure timely delivery. Please ensure that the delivery address is correct at the time of purchase to avoid shipping delays or issues.
        </p>
      </div>

      <div className="section11">
        <h2>Delivery Delays</h2>
        <p>
          While we make every effort to deliver services and products on time, delays can occasionally occur due to unforeseen circumstances such as technical issues, third-party service delays, or global disruptions. In such cases, we will inform you promptly and provide an updated timeline.
        </p>
        <p>
          AI4Bazaar is not responsible for any delays caused by external factors like network outages or courier service delays for physical products. However, we remain committed to resolving any issues that affect the timely delivery of services or products.
        </p>
      </div>

      <div className="section11">
        <h2>Tracking and Updates</h2>
        <p>
          For digital services, you will receive regular updates via email or through the AI4Bazaar dashboard on the progress of your website development, e-commerce integration, or marketing campaigns.
        </p>
        <p>
          For any physical products or hardware that require shipping, you will receive a tracking number to monitor the shipment's progress. You can use the tracking number on the respective courier's website to check delivery status.
        </p>
      </div>

      <div className="section11">
        <h2>Refunds and Cancellations</h2>
        <p>
          If there are any issues with the payment or service delivery, please refer to our Refund and Cancellation Policy for detailed instructions on how to request a refund or cancel services. Refunds for services will be processed in accordance with the terms outlined in the refund policy.
        </p>
      </div>

      <div className="section11">
        <h2>Conclusion</h2>
        <p>
          AI4Bazaar is committed to providing a seamless billing and service delivery experience for all our clients. Whether you're adopting our digital solutions for your business or seeking e-commerce or digital marketing services, we aim to deliver high-quality services with transparency, security, and ease of use. If you have any questions about your billing or service delivery, please feel free to reach out to our support team at <a href="mailto:support@ai4bazaar.com" style={{ color: '#35CFEF', textDecoration: 'none' }}>
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

export default ShipmentAndBilling;

