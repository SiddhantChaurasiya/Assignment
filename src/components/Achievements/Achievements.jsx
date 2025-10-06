import React from 'react'
import './Achievements.css'
import awardLogo from '/src/assets/awards/logo.png';
import awardsBanner from '/src/assets/awards/awards-banner.png';

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h2 className="achievements-title">Our Achievements</h2>
      <div className="logos-container">
        <img src={awardLogo} alt="REIWA Awards Logo" className="award-logo-single" />
        <img src={awardsBanner} alt="Row of REIWA Awards" className="award-logo-banner" />
      </div>
    </section>
  )
}

export default Achievements