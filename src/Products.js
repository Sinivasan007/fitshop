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
            At Fitness Freak, we are dedicated to providing top-notch fitness equipment and accessories. Our services include personalized workout plans, expert fitness advice, and a range of products that are carefully selected to meet your fitness goals. Whether you’re a beginner or a seasoned athlete, our team is here to support you every step of the way.
          </p>
          <p>
            We offer flexible shipping options to ensure your products reach you promptly, and our customer support team is always available to assist you with any queries or concerns. Our goal is to help you achieve your fitness aspirations with the best products and services available.
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
