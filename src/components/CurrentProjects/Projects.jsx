import React from 'react';
import './Projects.css';
import project1 from '../../assets/Rectangle1.png';
import project2 from '../../assets/Rectangle2.png';
import project3 from '../../assets/Rectangle3.png';
import project4 from '../../assets/Rectangle4.png';
import project5 from '../../assets/Rectangle5.png';

const projectImages = [
  project1, project2, project3, project4, project5
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Current Development Projects</h2>
      <div className="projects-grid">
        {projectImages.map((imageSrc, index) => (
          <div key={index} className="project-card">
            <img src={imageSrc} alt={`Project ${index + 1}`} />
          </div>
        ))}
        <div className="project-card view-more-card">
          <button className="view-more-projects-btn">
            View more &gt;&gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
