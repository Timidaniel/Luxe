// Hero.jsx
import React from "react";
import "../assets/css/Hero.css";
import image from "../assets/images/image.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p>Hi, there!</p>
        <h1>
          <span className="brand">Luxe</span> IS HERE TO BE <br /> YOUR
          ASSISTANCE
        </h1>
        <p className="subtitle">
          I am here ready to help you in making creative digital products
        </p>
        <button className="cta-btn">Let's Discuss</button>
      </div>
      <div className="hero-image">
        <img src={image} alt="image" />
      </div>
    </section>
  );
};

export default Hero;
