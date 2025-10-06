import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">Let's Get In Touch</h2>
      <p className="cta-description">
        We're here to answer your questions and help you find your next property.
      </p>
      <div className="cta-form-container">
        <input
          type="email"
          className="email-input"
          placeholder="Your email id"
        />
        <button className="cta-button">Notify Me</button>
      </div>
    </section>
  );
};

export default ContactSection;