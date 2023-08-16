import React from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom'



const Carousel = () => {
  return (
    <div className="coner">
    <h1 className="cb-link">CB-LINK LTD</h1>
    <p className="cb-link-description">
      Cb-link Ltd is an IT company initiated to provide different software
      solutions to the private and public business sectors. We primarily
      focused on management softwares in order to equip businesses with strong
      management tools so that they can grow based on their data reports
      analysis.

    </p>

    <a href="About" className="discover-link">
      Discover more <span className="arrow">→</span> 
    </a>
  </div>
  );
};

export default Carousel;