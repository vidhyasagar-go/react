import React, { useState, useEffect } from "react";
import img1 from "../../assets/img10.jpeg";
import img2 from "../../assets/img11.jpeg";
import img3 from "../../assets/img12.jpeg";
import img7 from "../../assets/img13.jpeg";
import img8 from "../../assets/img14.jpeg";
import img9 from "../../assets/img15.jpeg";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import "./Static.css"; // Ensure the CSS file is linked

const Dynamic = () => {
  const cardImages = [img1, img2, img3, img7, img8, img9];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the card transition every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="unique-main-card">
        {/* Desktop view */}
        <div className="unique-desktop-view">
          <CardGroup className="unique-card-group">
            <Card className="unique-img-card">
              <Card.Img variant="top" src={img1} className="unique-img-display" />
            </Card>
            <Card className="unique-img-card">
              <Card.Img variant="top" src={img2} className="unique-img-display" />
            </Card>
            <Card className="unique-img-card">
              <Card.Img variant="top" src={img3} className="unique-img-display" />
            </Card>
          </CardGroup>

          <CardGroup className="unique-card-group">
            <Card className="unique-img-card">
              <Card.Img variant="top" src={img8} className="unique-img-display" />
            </Card>
            <Card className="unique-img-card">
              <Card.Img variant="top" src={img7} className="unique-img-display" />
            </Card>
            <Card className="unique-img-card">
              <Card.Img variant="top" src={img9} className="unique-img-display" />
            </Card>
          </CardGroup>
        </div>

        {/* Mobile view - One card at a time with automatic transitions */}
        <div className="unique-mobile-view">
          <div className="unique-mobile-card">
            <Card className="unique-img-card">
              <Card.Img
                variant="top"
                src={cardImages[currentIndex]}
                className="unique-img-display"
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dynamic;
