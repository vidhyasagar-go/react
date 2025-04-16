import React, { useState, useEffect } from "react";
import "./FAQ.css";
import Footer from "../Home/Footer";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false); 

  const faqs = [
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.",
    },
    {
      question: "What are the different types of AI?",
      answer:
        "AI can be classified into three main types: Narrow AI, General AI, and Superintelligent AI.",
    },
    {
      question: "How does machine learning relate to AI?",
      answer:
        "Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.",
    },
    {
      question: "What are some common applications of AI?",
      answer:
        "Common applications include natural language processing, image recognition, autonomous vehicles, and recommendation systems.",
    },
    {
      question: "Is AI going to replace jobs?",
      answer:
        "AI may automate certain tasks, but it is also expected to create new jobs and enhance existing ones.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Scroll to top on page load or refresh
  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => observer.observe(item));

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
      <div className="faq-body">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3
                  onClick={() => toggleAnswer(index)}
                  className="faq-question"
                  style={{ cursor: "pointer" }}
                >
                  {faq.question}
                  <span className="faq-symbol">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </h3>
                {activeIndex === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
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

export default FAQ;
