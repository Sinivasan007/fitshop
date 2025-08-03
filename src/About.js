import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
        <h1>About Us</h1>
      <section className="content">
        <h2>Our Mission</h2>
        <p>
          At Fitness Products Sales, our mission is to empower you to achieve your fitness goals. 
          We provide high-quality fitness equipment and accessories designed to enhance your workout experience.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded in 2024, we started with a simple vision: to make fitness accessible and enjoyable for everyone. 
          Over the years, we have expanded our product range to include the latest in fitness technology, 
          ensuring that our customers have everything they need to stay fit and healthy.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>High-Quality Products</li>
          <li>Expert Advice and Support</li>
          <li>Competitive Prices</li>
          <li>Fast Shipping and Delivery</li>
        </ul>
        <h2>Meet Our Developers</h2>
      </section>
        <div className="developers">
          <div className="developer">
            <h3>SINIVASAN-S</h3>
            <p>Full Stack Developer</p>
            <p>Sinivasan works on both frontend and backend tasks, bridging the gap between design and functionality.</p>
          </div>
        </div>
    </div>
  );
};

export default AboutUs;
