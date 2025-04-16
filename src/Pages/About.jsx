import React, { useEffect,useState, useRef } from "react";
import "./About.css"; // External CSS file
import aboutpageImg from "../assets/aboutpage (2).jpg"; // Image for the about page
import Footer from "../Home/Footer";

const About = () => {
  const sectionsRef = useRef([]); // Reference to all sections
  const [showScrollButton, setShowScrollButton] = useState(false); 
  // Scroll to top on page load or refresh
  useEffect(() => {
    // Scroll to top
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add 'visible' class when in view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    // Observe each section
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // Cleanup observer
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
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
      <div id="aboutpage" className="aboutus-container">
        <div className="aboutus-header">
          <h2>About Us</h2>
        </div>
        <div className="aboutus-content">
          <section
            className="aboutus-main section"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <div className="aboutus-text">
              <div className="aboutus-image-container">
                <img
                  src={aboutpageImg}
                  alt="About Us"
                  className="aboutus-image"
                />
              </div>
              <p>
                We believe Indian Bazaars, the hub of local and small businesses,
                are vital to the nation’s economy and cultural identity, playing a
                crucial role in local and national economies. But today, bazaars
                face several challenges that can significantly affect their
                growth, competitiveness, and reach. Moreover, local businesses
                are vulnerable to disruptions, like pandemics, which can generate
                a problematic situation. Unlike digitalized businesses that
                continue serving their customers online.
              </p>
              <p>
                Therefore, AI4Bazaar is a forward-thinking initiative to
                digitalize local/small businesses of Indian Bazaars with immediate
                website deployment with additional solutions of e-commerce,
                digital marketing integration, and data insights.
              </p>
            </div>
          </section>

          <section
            className="section"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <h3>Visys Cloud Technologies</h3>
            <p>
              Visys Cloud Technologies initiated AI4Bazaar, dedicated to
              leveraging the power of Artificial Intelligence and other digital
              solutions to bring transformation to Indian Bazaars. As a leading
              innovator in the tech industry, Visys Cloud Technologies empowers
              businesses of diverse ranges to thrive in the digital age. With
              AI4Bazaar, Visys Cloud Technologies extends its expertise to support
              local and small businesses, providing them with the tools and
              solutions to adapt, grow, and succeed in future consumer behavior.
            </p>
          </section>

          <section
            className="section"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <h3>Vision</h3>
            <p>
              We envision that AI4Bazaar will change the way local/small
              businesses operate in Indian Bazaars. It will bridge the gap between
              traditional local commerce and the rising digital economy, to ensure
              every local entrepreneur and businessman of the bazaar will thrive
              with the tools and knowledge to succeed in a tech-driven world,
              creating a thriving, competitive, and inclusive environment for all.
            </p>
          </section>

          <section
            className="section"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <h3>Mission</h3>
            <p>
              We are driven to empower local/small businesses with fast, efficient
              website creation and immediate deployment that will be tailored to
              their specific needs. An online digital store that enhances business
              efficiency, increases profits, and establishes a 24*7 virtual store
              for customers.
            </p>
          </section>

          <section
            className="section"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <h3>Our Board of Directors and Management</h3>
            <p>
              Our Board of Directors and management team are composed of highly
              skilled professionals who bring their expertise and vision to drive
              AI4Bazaar’s mission forward. Together, they guide the organization
              towards achieving its goals and transforming Indian Bazaars into
              thriving digital ecosystems.
            </p>
          </section>

          <section
            className="section"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <h3>Our Success Stories</h3>
            <p>
              Over the years, we have successfully collaborated with numerous
              local businesses, helping them transition to the digital world. From
              increasing their reach to enhancing their customer experience, our
              initiatives have made a lasting impact, enabling businesses to thrive
              in an ever-evolving market.
            </p>
          </section>
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

export default About;
