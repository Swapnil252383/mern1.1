import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our College</h1>
      <p>
        Our college is known for its exceptional academics and vibrant student life.
        We offer a variety of programs to help students succeed.
      </p>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>To provide world-class education and develop leaders for the future.</p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>Empowering students with knowledge and values to create a better tomorrow.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
