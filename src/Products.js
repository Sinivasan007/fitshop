import React, { useEffect, useState } from 'react';
import './Products.css';

const carouselImages = [
  'pexels-cottonbro-4325451.jpg', // Add paths to your images here
  'pexels-karolina-grabowska-4397841.jpg',
  'pexels-goumbik-669582.jpg',
  'pexels-willpicturethis-1954524.jpg'

];

const Products = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="products-container">
      <main className="main">
        <h1 className="headline">
          Explore Our <span className="highlight">Products</span>
        </h1>
        <p className="subtext">
          Discover a range of fitness products that cater to all your workout needs. From dumbbells to treadmills, we have everything you need to stay fit and healthy.
        </p>

        {/* Carousel Section */}
        <section className="carousel-section">
          <div className="carousel">
            <img
              src={carouselImages[currentImageIndex]}
              alt="Product"
              className="carousel-image"
            />
          </div>
        </section>

        <section className="service-details">
          <h2>Our Services</h2>
              <p>
            At Fitness Freak, we are dedicated to providing top-notch fitness equipment and accessories. Our services include:
          </p>
          <ul>
            <li>Personalized workout plans tailored to your fitness goals</li>
            <li>Expert fitness advice both online and in store</li>
            <li>Extensive product range carefully selected for quality and effectiveness</li>
            <li>Flexible shipping and easy return policies</li>
            <li>24/7 customer support to assist with any queries</li>
            <li>Member-only access to live workout sessions and fitness webinars</li>
            <li>Discounts and loyalty programs rewarding your commitment</li>
          </ul>
          <p>
            Our goal is to help you achieve your fitness aspirations with the best products and supportive services available.
          </p>
        </section>

        <section className="product-reviews">
          <h2>Customer Reviews</h2>
          <div className="review">
            <h3>John D.</h3>
            <p>
              "The dumbbell set I purchased is fantastic. The quality is top-notch and it has really enhanced my home workout routine. Highly recommend!"
            </p>
          </div>
          <div className="review">
            <h3>Jane S.</h3>
            <p>
              "I bought the yoga mat and it’s exactly what I needed. Comfortable and non-slip, it has made my yoga sessions much more enjoyable."
            </p>
          </div>
          <div className="review">
            <h3>Mike R.</h3>
            <p>
              "The resistance bands are great for varied workouts. They are durable and come in different resistance levels. Perfect addition to my fitness gear!"
            </p>
          </div>
        </section>

        {/* Add your product listings here */}
      </main>
    </div>
  );
};

export default Products;
