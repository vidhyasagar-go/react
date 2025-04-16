import React, { useState, useEffect } from 'react';
import './Home.css'; // Include the CSS file where the underline effect will be styled
import Services from '../Home/Services';
import About from '../Home/AboutUs';
import Pricing from '../Home/Pricing';
import Testimonials from '../Home/Testimonials';
import ReachUs from '../Home/ReachUs';
import Footer from '../Home/Footer';
import Templates from '../Home/Templates';
import CarouselCards from '../Home/CarouselCards';
import Static from '../Home/Templates/Static';
import Dynamic from '../Home/Templates/Dynamic';
import Responsive from '../Home/Templates/Responsive';
import Personalized from '../Home/Templates/Personalised';
import { ReactTyped } from 'react-typed';

function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState('static');

  // Function to update the selected template
  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
  };

  // Scroll to top on page load or refresh
  useEffect(() => {
    // Scroll to top
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []); // Empty dependency array ensures this runs only once after the first render

  return (
    <>
      <div id="header">
        {/* Header content */}
      </div>

      <div className="header-text">
        <h1>The <span>Future</span> of AI<br />
          is Generating</h1>
        <p id="uitext" className="typing-text">
          <ReactTyped style={{color: "#3CD2F1"}}
            strings={["UI's Dynamically"]}
            typeSpeed={150}
            backSpeed={50}
            backDelay={1000}
            startDelay={500}
            loop
            className="typed-text"
          />
        </p>
      </div>

      <CarouselCards />
      <Services />

      {/* Pass selectedTemplate state to Templates for active link styling */}
      <Templates 
        handleTemplateChange={handleTemplateChange} 
        selectedTemplate={selectedTemplate}
      />

      {/* Render Templates dynamically based on selected template */}
      {selectedTemplate === 'static' && <Static />}
      {selectedTemplate === 'dynamic' && <Dynamic />}
      {selectedTemplate === 'responsive' && <Responsive />}
      {selectedTemplate === 'personalized' && <Personalized />}

      <About />
      <Pricing />
      <Testimonials />
      <ReachUs />
      <Footer />
    </>
  );
}

export default Home;
