import React, { useState } from 'react';
import './Services.css'; // Ensure to create and link the CSS file

function Services() {
  const [boxes, setBoxes] = useState([1, 2, 3, 4]);

  const createBoxContent = (number) => {
    const boxData = {
      1: {
        imgSrc: 'https://www.aivariant.com/wp-content/uploads/2020/07/industries-we-operate-icons-32x32-px-1-3.png',
        title: 'DATA',
        description: 'Client Research & Requirements',
      },
      2: {
        imgSrc: 'https://www.aivariant.com/wp-content/uploads/2020/07/industries-we-operate-icons-32x32-px10.png',
        title: 'UI/UX DESIGN',
        description: 'Designing User-Centered Experiences',
      },
      3: {
        imgSrc: 'https://www.aivariant.com/wp-content/uploads/2020/07/industries-we-operate-icons-32x32-px3.png',
        title: 'WEBSITE DEVELOPMENT',
        description: 'Developing Dynamic and Static Websites',
      },
      4: {
        imgSrc: 'https://www.aivariant.com/wp-content/uploads/2020/07/industries-we-operate-icons-32x32-px7.png',
        title: 'DEPLOYMENT TEAM',
        description: 'Deploying the websites with security and authentication',
      },
    };

    return boxData[number] || {
      imgSrc: 'ADD IMAGE HERE',
      title: 'ADD TEXT HERE',
      description: 'ADD INFO HERE',
    };
  };

  // const addBox = () => {
  //   setBoxes([...boxes, boxes.length + 1]);
  // };

  return (
    <div className="container-fluid" id="fff">
      <div className="container" id="ff">
      <p className='dynamicp' style={{ color: "#35d0f0 ", fontWeight: "600", textTransform:"uppercase", textAlign: "center" }}>Our Services</p>
        <h1  className="sub-title1">IT Support & Services</h1>
        <p className="pp">
          We provide IT support in USA and INDIA and surrounding areas in the South West, the Midlands and Wales.
          <br />
          We specialise in tailored IT support towards your business needs and requirements.
        </p>
        <div id="container-block">
          {boxes.map((boxNumber) => {
            const { imgSrc, title, description } = createBoxContent(boxNumber);
            return (
              <div key={boxNumber} className="box">
                <img src={imgSrc} alt={title} />
                <h6>{title}</h6>
                <p style={{}}>{description}</p>
              </div>
            );
          })}
        </div>
        {/* <button type="button" id="button" className="btn btn-success" onClick={addBox}>
          ADD Content
        </button> */}
      </div>
    </div>
  );
}

export default Services;