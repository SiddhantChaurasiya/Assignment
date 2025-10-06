import React from 'react'
import './Achievements.css'

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h2 className="achievements-title">Our Achievements</h2>
      <div className="logos-container">
        <img src='/src/assets/awards/logo.png' alt="REIWA Awards Logo" className="award-logo-single" />
        <img src='/src/assets/awards/awards-banner.png' alt="Row of REIWA Awards" className="award-logo-banner" />
      </div>
    </section>
  )
}

export default Achievements