import React from 'react';
import './PropertiesPage.css';
import img1 from '../../assets/properties/1.png';
import img2 from '../../assets/properties/2.png';
import img3 from '../../assets/properties/3.png';
import img4 from '../../assets/properties/4.png';
import img5 from '../../assets/properties/5.png';
import img6 from '../../assets/properties/6.png';
import img7 from '../../assets/properties/7.png';
import img8 from '../../assets/properties/8.png';
import img9 from '../../assets/properties/9.png';
import img10 from '../../assets/properties/10.png';
import img11 from '../../assets/properties/11.png';
import img12 from '../../assets/properties/12.png';

const PropertiesPage = () => {
  return (
    <div className="properties-container">
      <div className="properties-grid">
        <div className="property-card">
          <img src={img1} alt="Property 1" />
        </div>
        <div className="property-card">
          <img src={img2} alt="Property 2" />
        </div>
        <div className="property-card">
          <img src={img3} alt="Property 3" />
        </div>
        <div className="property-card">
          <img src={img4} alt="Property 4" />
        </div>
        <div className="property-card">
          <img src={img5} alt="Property 5" />
        </div>
        <div className="property-card">
          <img src={img6} alt="Property 6" />
        </div>
        <div className="property-card">
          <img src={img7} alt="Property 7" />
        </div>
        <div className="property-card">
          <img src={img8} alt="Property 8" />
        </div>
        <div className="property-card">
          <img src={img9} alt="Property 9" />
        </div>
        <div className="property-card">
          <img src={img10} alt="Property 10" />
        </div>
        <div className="property-card">
          <img src={img11} alt="Property 11" />
        </div>
        <div className="property-card">
          <img src={img12} alt="Property 12" />
        </div>
      </div>
      <button className="view-more-btn">
        View more &rarr;
      </button>
    </div>
  );
};

export default PropertiesPage;
