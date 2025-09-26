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
          Founded in 2025, we started with a simple vision: to make fitness accessible and enjoyable for everyone.
          Over the years, we have expanded our product range to include the latest in fitness technology,
          ensuring that our customers have everything they need to stay fit and healthy.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>High-Quality Products curated from top manufacturers</li>
          <li>Expert Advice and Support from certified fitness specialists</li>
          <li>Competitive Prices ensuring best value for customers</li>
          <li>Fast Shipping and Delivery backed by reliable logistics</li>
          <li>Customer Satisfaction as our top priority</li>
          <li>Innovative, User-Centric AI-powered features to enhance fitness experience</li>
        </ul>

        <h2>Our Achievements</h2>
        <ul>
          <li>1000+ satisfied customers across multiple countries</li>
          <li>Certified by Fitness Retail Association 2025</li>
          <li>Innovator of AI-powered fitness coaching tools</li>
        </ul>

        <h2>Meet the Developer</h2>
        <div className="developer">
          <h3>SINIVASAN S</h3>
          <p>Full Stack Developer</p>
          <p>
            Sinivasan leads the development of the platform, focusing on integrating cutting-edge AI and machine learning capabilities.
            He has architected personalized workout recommendation engines, intelligent fitness chatbots, and threat intelligence automation systems.
            He's passionate about bridging technology and fitness to deliver transformative solutions.
          </p>
        </div>

        <h2>Contact Information</h2>
        <address>
          <p>Email: support@fitnessproductsales.com</p>
          <p>Phone: +1 555 123 4567</p>
          <p>Address: 1234 Fitness Blvd, Workout City, Health State, 56789</p>
        </address>
      </section>
    </div>
  );
};

export default AboutUs;
