// src/Home/Templates.jsx
import React from 'react';
import './Templates.css';

const Templates = ({ handleTemplateChange, selectedTemplate }) => {
  return (
    <div style={{ width: "70%", margin: "auto" }} className="text-center my-5" id="designs">
      <p
        style={{
          color: "#35d0f0",
          fontWeight: "600",
          textAlign: "center",
          textTransform: "uppercase",
        }}
        className="services-section-title"
      >
        HUGE Gallery
      </p>
      <h1 style={{ fontWeight: "600" }} className="services-section-heading">
        Our Recent Designs
      </h1>

      <div style={{ marginTop: "20px" }} className="template-links">
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "center",
            fontSize: "18px",
            padding: 0,
          }}
        >
          {/* Static Link */}
          <li id= "temp1" style={{ marginRight: "30px" }}>
            <a
              onClick={() => handleTemplateChange('static')}
              className={selectedTemplate === 'static' ? 'active' : ''}
              style={{ cursor: "pointer" }}
            >
              Static
            </a>
          </li>

          {/* Dynamic Link */}
          <li id= "temp1" style={{ marginRight: "30px" }}>
            <a
              onClick={() => handleTemplateChange('dynamic')}
              className={selectedTemplate === 'dynamic' ? 'active' : ''}
              style={{ cursor: "pointer" }}
            >
              Dynamic
            </a>
          </li>

          {/* Responsive Link */}
          <li id= "temp1" style={{ marginRight: "30px" }}>
            <a
              onClick={() => handleTemplateChange('responsive')}
              className={selectedTemplate === 'responsive' ? 'active' : ''}
              style={{ cursor: "pointer" }}
            >
              Responsive
            </a>
          </li>

          {/* Personalized Link */}
          <li id= "temp1" style={{ marginRight: "30px" }}>
            <a
              onClick={() => handleTemplateChange('personalized')}
              className={selectedTemplate === 'personalized' ? 'active' : ''}
              style={{ cursor: "pointer" }}
            >
              Personalised
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Templates;
