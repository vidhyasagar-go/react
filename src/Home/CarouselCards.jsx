import React, { useState, useEffect } from "react";
import './CarouselCards.css';
import teastallImg from "../assets/teastall.jpg";
import vegetableStallImg from "../assets/vegetable.jpg";
import foodvendorImg from "../assets/food.jpg";
import generalstoreImg from "../assets/general.jpg";
import stationaryImg from "../assets/stationary.jpg";
import pharmacyImg from "../assets/pharmacy.jpg";
import parlorImg from "../assets/parlor.jpg";
import bakeryImg from "../assets/bakery.jpg";
import clinicImg from "../assets/clinic.jpg";
import flowerImg from "../assets/flower.jpg";
import vendorImg from "../assets/vendor.jpg";

const CarouselCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(5);
  
  // Check window width and adjust cards per slide dynamically
  const updateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width <= 600) {
      setCardsPerSlide(2); // 2 cards for mobile
    } else if (width <= 1024) {
      setCardsPerSlide(3); // 3 cards for tablet
    } else {
      setCardsPerSlide(5); // 5 cards for desktop
    }
  };

  // Initial check for cards per slide on component mount
  useEffect(() => {
    updateCardsPerSlide();
    const handleResize = () => updateCardsPerSlide();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    { id: 1, title: "Tea Stalls", text: "Simplifying inventory tracking and customer management for your tea business with our smart software tools.", img: teastallImg },
    { id: 2, title: "Vegetable Stalls", text: "Enabling streamlined sales, stock updates, and digital payment acceptance for vegetable vendors.", img: vegetableStallImg },
    { id: 3, title: "Pharmacies", text: "Automating stock tracking and prescription management for pharmacy owners.", img: pharmacyImg },
    { id: 4, title: "Salons and Beauty Parlors", text: "Organizing appointments, tracking services, and boosting customer satisfaction for salons.", img: parlorImg },
    { id: 5, title: "Bakery Shops", text: "Helping bakeries track fresh stock, manage special orders, and streamline billing operations.", img: bakeryImg },
    { id: 6, title: "Food Vendors", text: "Digitalizing orders, payments, and customer data for food vendors on the go.", img: foodvendorImg },
    { id: 7, title: "Flower Shops", text: "Helping florists manage orders, deliveries, and customer preferences efficiently with advanced solutions.", img: flowerImg },
    { id: 8, title: "General Stores", text: "Simplifying inventory and expense management for local general stores with tailored solutions.", img: generalstoreImg },
    { id: 9, title: "Clinics", text: "Simplifying patient records, appointments, and billing for local healthcare providers.", img: clinicImg },
    { id: 10, title: "Local Bookstores", text: "Enhancing book sales and inventory management for local bookstores with simple yet effective tools.", img: stationaryImg },
    { id: 11, title: "Street Vendors", text: "Providing simple tools for managing daily sales and digital payments on the move.", img: vendorImg },
  ];

  // Calculate number of slides based on cards length and cards per slide
  const numSlides = Math.ceil(cards.length / cardsPerSlide);

  // Logic for rendering specific range of cards
  const getCardsForSlide = (slideIndex) => {
    const start = slideIndex * cardsPerSlide;
    const end = start + cardsPerSlide;
    return cards.slice(start, end);
  };

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [numSlides]);

  return (
    <div id="ourworks">
      <div style={{ width: "70%", margin: "auto" }} className="text-center my-5">
        <p  className="corouselp">
          WHAT WE DO
        </p>
        <h1 className="allh1">
          Unlock the power of AI development tools designed with innovation, elegance, excellence, and imagination.
        </h1>
      </div>

      <div id="carouselExampleInfinite" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              {getCardsForSlide(currentSlide).map((card) => (
                <div className="card custom-card" key={card.id}>
                  <img src={card.img} className="card-img-top custom-card-img" alt={card.title} />
                  <div className="card-body">
                    <h3 className="custom-card-title">{card.title}</h3>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          {/* Buttons to select different slide ranges */}
          {[...Array(numSlides)].map((_, index) => (
            <button style={{padding: "10px 20px", borderRadius: "50px"}}
              key={index}
              className={`btn btn-primary mx-2 ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCards;
