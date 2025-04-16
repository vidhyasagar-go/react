import React, { useEffect } from 'react';
import './TermsConditions.css'; // Assuming your styles are in this file
import Footer from '../Home/Footer'; // Assuming the Footer component

const TermsConditions = () => {

  // Ensuring scroll to top when the page is loaded or navigated to.
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top

    const handlePopState = () => {
      window.scrollTo(0, 0);  // Scroll to top when user navigates back
    };

    // Listening for popstate to capture back navigation
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);  // Clean up listener
    };
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <>
      <div className="terms-container">
        <div className="terms-header">
          <h1 className="terms-title">Terms and Conditions</h1>
        </div>

        <div className='lidiv'>
  <li></li>
  <div>
    <h2>Enrollment and Payment</h2>
    <p>
      You may need to create an account and enroll your child in the course.<br />
      Payment terms, including fees, payment methods, and refund policies, should be clearly stated.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Access and Duration</h2>
    <p>
      Information about the duration of the course, access periods, and any expiration dates for course materials will be provided.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Age Restrictions</h2>
    <p>
      Some courses may have age restrictions or recommended age ranges to ensure the content is appropriate for the child's skill level.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Privacy and Data Collection</h2>
    <p>
      The platform's privacy policy details how personal data and information will be collected, used, and protected.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Code of Conduct</h2>
    <p>
      Expectations for student behavior, including guidelines against plagiarism, cheating, or any form of disruptive behavior.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Intellectual Property</h2>
    <p>
      Information about who owns the course content and any restrictions on using or sharing course materials.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Technical Requirements</h2>
    <p>
      Information on the technical requirements, such as the required hardware, software, and internet connection speed.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Support and Communication</h2>
    <p>
      Details on how students and parents can communicate with instructors or support staff for questions and assistance.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Progress Tracking and Reporting</h2>
    <p>
      Information about how the child's progress will be tracked, assessed, and reported, including any certifications or badges earned.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Termination and Suspension</h2>
    <p>
      Circumstances under which the platform can terminate or suspend a student's access to the course, such as violating the code of conduct.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Dispute Resolution</h2>
    <p>
      Procedures for resolving disputes or issues between the platform and the student or parent.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Changes to Terms and Conditions</h2>
    <p>
      Information about the platform's right to modify the terms and conditions and how such changes will be communicated to users.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Liability and Disclaimer</h2>
    <p>
      A disclaimer outlining the platform's limitations of liability and any warranties or guarantees associated with the course.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Governing Law</h2>
    <p>
      The jurisdiction and laws that govern the terms and conditions.
    </p>
  </div>
</div>

<div className='lidiv'>
  <li></li>
  <div>
    <h2>Feedback and Testimonials</h2>
    <p>
      Information on how feedback and testimonials provided by students or parents may be used by the platform.
    </p>
  </div>
</div>

      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;

