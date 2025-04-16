import React, { useEffect, useRef, useState } from 'react';
import './Services.css'; // Include your styles here
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import Footer from "../Home/Footer";

const Services = () => {
  const [showScrollButton, setShowScrollButton] = useState(false); 
  const brandingRef = useRef(null);
  const contentCreationRef = useRef(null); // Added contentCreationRef
  const technologyRef = useRef(null);
  const deploymentRef = useRef(null); 

  // IntersectionObserver to trigger animations when elements come into view
  useEffect(() => {
    // Scroll to top
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class to animate
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    // Observe all the sections including Deployment section
    if (brandingRef.current) {
      observer.observe(brandingRef.current);
    }

    if (contentCreationRef.current) {
      observer.observe(contentCreationRef.current);
    }

    if (technologyRef.current) {
      observer.observe(technologyRef.current);
    }

    if (deploymentRef.current) {
      observer.observe(deploymentRef.current);
    }

    return () => {
      if (brandingRef.current) {
        observer.unobserve(brandingRef.current);
      }

      if (contentCreationRef.current) {
        observer.unobserve(contentCreationRef.current);
      }

      if (technologyRef.current) {
        observer.unobserve(technologyRef.current);
      }

      if (deploymentRef.current) {
        observer.unobserve(deploymentRef.current);
      }
    };
  }, []);

  // Scroll to top on page load or refresh
    useEffect(() => {
      // Scroll to top
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
      // Directly make branding section visible without any transition effects
    if (brandingRef.current) {
      brandingRef.current.classList.add('visible');
    }
    }, []); // Empty dependency array ensures this runs only once after the first render
    
    // Scroll to the top function when footer is visible or button clicked
   // Handle scroll event to show or hide the button
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
      <div className="services-container">
      {/* Main Heading */}
      <div className="main-heading">
        <h1>SERVICES</h1>
      </div>

      {/* Branding Section */}
      <section className="service-section" ref={brandingRef}>
        <div>
          <h2>Branding</h2>
          <p>
            Equipping Indian Bazaars with Creative, Immediate, and User-Friendly Websites. 
            AI4Bazaar specializes in creating compelling creative themes and logo designs for websites 
            with quality tech features to establish a unique brand with a strong online presence. Our 
            Website Deployment services generate immediate impact, helping local/small businesses to overcome 
            problems like competitive markets, pandemics, and future customer behavior.
          </p>
          {/* <button className="enquire-button">Enquire Now</button> */}
        </div>

        <section className='sections'>
          <div className="what-we-offer">
            <h3>What we offer?</h3>
            <ul>
              <li><strong>Immediate Website Deployment:</strong> We build and deploy fully functional websites customized to your business theme and requirements. With a great understanding of the Indian Market, we focus on single-day deployment to ensure your business is live online on the first day.</li>
              <li><strong>Custom Logo Design:</strong> We understand that a well-designed logo is key in representing your business identity. We create logos that level with your brand, adding values and principles, and giving your business a professional and distinctive touch.</li>
              <li><strong>Theme and Visual Identity:</strong> We generate unique and personalized themes for your website to reflect your business brand personality and values. From color schemes to typography, our UI/UX designs are tailored to engage your customers and make them reach out on a single impression.</li>
              <li><strong>Mobile Optimized:</strong> With an understanding of customer behavior, a significant portion are mobile users browsing with their smartphones. With rising customers online and buying behavior, we create tailored, mobile-responsive web designs that deliver a seamless and intuitive experience.</li>
            </ul>
          </div>
        </section>

        {/* What We Are Proud Of Section with Template Images */}
        <section className='sections'>
          <div className="template-slider">
            <h3>What We Are Proud Of:</h3>

            <div className="template-images">
              <img src={img1} alt="Template 1" className="template-img" />
              <img src={img2} alt="Template 2" className="template-img" />
              <img src={img3} alt="Template 3" className="template-img" />
            </div>
          </div>

          {/* Additional Content */}
          <div className="additional-content">
            <h3>We Craft Unique Brands for India's Growing Marketplace, the Bazaar.</h3>
            <p>Begin your journey now!</p>
            {/* <button className="enquire-button">Book a strategy call</button> */}
          </div>
        </section>
      </section>

      {/* Creative Content Creation Section */}
      <section className="service-section" ref={contentCreationRef}>
        <div>
          <h2>Creative Content Creation</h2>
          <p>
            We leverage quality and SEO-friendly Website Content guided by your imagination. 
            Our Website content creation ranges to diverse themes and personalities tailored to your 
            business requirements. Through our creative content development, we help define business 
            brand stories and engage customers to make them purchase products/services. Our team of 
            experts works with you to develop quality content development that defines your target 
            audience, key messages, and goals.
          </p>
        </div>

        {/* Our Content Creation Services Section */}
        <section className='sections'>
          <h3>Our Content Creation Services:</h3>
          <ul>
            <li>
              <strong>Web Page Content:</strong> In today’s market, the website is often the first contact between a business and its customers.
              We believe quality website content captures the attention, conveys the right messages, and prompts customer action. 
              We create compelling, informative, and SEO-friendly web content that reflects your business values while encouraging customers to explore and purchase.
              <ul>
                <li><strong>SEO-Optimized:</strong> Tailored to improve search engine rankings.</li>
                <li><strong>Tailored Messaging:</strong> Focus on creating content that speaks directly to your target audience.</li>
                <li><strong>Brand Story-telling:</strong> We develop your business’s unique story making your brand relatable and memorable.</li>
              </ul>
            </li>
            <li>
              <strong>Product Description:</strong> We develop product description content that highlights key benefits, features, and value of your offerings.
              <ul>
                <li><strong>Engaging & Persuasive:</strong> Creating descriptions that capture the essence of your product and persuade customers.</li>
                <li><strong>Clear & Short:</strong> Easy-to-understand descriptions with essential details.</li>
                <li><strong>Optimization for Purchase:</strong> Crafted to encourage purchases by potential buyers.</li>
              </ul>
            </li>
            <li>
              <strong>Blog and Articles Content:</strong> These types of content help you build authority and drive traffic to your website.
              <ul>
                <li><strong>Industry-relevant topics:</strong> Research-based content relevant to your business services/products.</li>
                <li><strong>SEO Optimized:</strong> Articles/blog content optimized to rank higher in Google search.</li>
                <li><strong>Value-Driven Content:</strong> Designed to educate, inform, and entertain readers, encouraging repeat visits.</li>
              </ul>
            </li>
            <li>
              <strong>Social Media Content:</strong> We develop social media content that captures attention, sparks conversation, and encourages sharing.
              <ul>
                <li><strong>Platform-specific Content:</strong> Tailored for platforms like Instagram, Facebook, YouTube, etc.</li>
                <li><strong>Engagement-Focused:</strong> Content designed to encourage interaction and build stronger connections.</li>
                <li><strong>Creative and Shareable:</strong> Crafted content that increases visibility and drives traffic.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Competitive Edge Paragraph */}
        <section className='sections'>
          <p>
            With our tailored content creation services, your business gets a competitive edge in the digital space. 
            We take the time to understand your brand, your audience, and your goals to deliver content that drives customers and profits.
          </p>
          {/* <button className="enquire-button">Enquire Now</button> */}
        </section>
      </section>

     {/* Technology Section */}
     <section className="service-section" ref={technologyRef}>
        <div>
          <h2>Technology</h2>
          <p>
            In today’s business market, technology is important for growth and competitiveness. We offer a
            range of tech solutions and services that help businesses streamline digital operations and
            provide a preeminent experience for customers. From Cloud Services, AI chatbots, and Data
            Centres to AI-generated templates.
          </p>
        </div>

        {/* Tech Services Section */}
        <section className="sections">
          <h3>Tech Services:</h3>
          <ul>
            <li><strong>Cloud Hosting:</strong> Reliable, secure cloud services that keep your website running smoothly at all times.</li>
            <li><strong>Chatbots:</strong> Provide 24/7 customer support with AI chatbots that answer queries and assist visitors automatically.</li>
            <li><strong>Data Storage:</strong> Protect your business data with our data centers, designed for security and scalability.</li>
            <li><strong>Smart Automation:</strong> Simplify your operations with tools that help you manage your business efficiently.</li>
          </ul>
        </section>

        {/* Competitive Edge Paragraph */}
        <section className="sections">
          <p>
            Leveraging the right technology allows you to improve customer engagement, boost efficiency,
            and future-proof your business. We ensure that you’re equipped with the latest tools to stay
            competitive in an evolving digital market.
          </p>
          {/* <button className="enquire-button">Enquire Now</button> */}
        </section>
      </section>

      {/* Deployment Services Section */}
      <section className="service-section" ref={deploymentRef}>
        <div>
          <h2>Deployment team</h2>
          <p>
          Transitioning to digital does not need to be complicated. Our team of experts at deploying
handles everything from website deployment to content creation to tech optimization, all on a
single day. Our Deployment team ensures that businesses can start engaging with their
customers immediately.
          </p>
        </div>
      <section className="sections">
          <h3>Deployment Services:</h3>
          <ul>
            <li><strong>Complete setup:</strong> Our team handles your website deployment, with both content and technology implementation, making sure the business is fully operational on day one.</li>
            <li><strong>Hassle-free Integration:</strong> Our team ensures our services are smoothly integrated into businesses be it tech features, content moderation, or UI/UX.</li>
            <li><strong>Smooth Transition:</strong> Whether you are moving from a traditional market or updating your digital presence, our group of expert team processes are fast, efficient, and stress-free.</li>
            <li><strong>Post-Deployment Support:</strong> The team remains available to provide ongoing support after website deployment to ensure everything runs smoothly.</li>
          </ul>
        </section>

        {/* Competitive Edge Paragraph */}
        <section className="sections">
          <p>
            In the fast-moving digital world, being able to deploy your services quickly can give you a
            significant advantage. With a dedicated deployment team, we ensure that your digital tools are
            up and running without delay, so you can start reaching customers and driving results right
            away.
          </p>
          {/* <button className="enquire-button">Enquire Now</button> */}
        </section>
        </section>
      

      {/* Other sections can go here */}
    </div>
    <Footer/>
    {/* Scroll to top button */}
    {/* Scroll to top button */}
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

export default Services;
