// Services.jsx
import React from "react";
import "../assets/css/Services.css";
import image from "../assets/images/Branding.svg";
import cool from "../assets/images/UiDesign.svg";
import product from "../assets/images/Product.svg";
const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Service</h2>
      <div className="service-cards">
        <div className="service-card">
          <i className="icon branding-icon"></i>
          <img src={image} alt="" width={40} height={40} />
          <h3>Branding</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-card">
          <i className="icon uiux-icon"></i>
          <img src={cool} alt="" width={40} height={40} />
          <h3>UI/UX</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-card">
          <i className="icon design-icon"></i>
          <img src={product} alt="" width={40} height={40} />
          <h3>Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
