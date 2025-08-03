import React, { useState } from 'react';
import './Home.css';

const products = [
  { id: 1, image: 'dd.webp', name: 'Dumbbell Set', description: 'High-quality dumbbells for your strength training.', price: 50.00 },
  { id: 2, image: 'ym.webp', name: 'Yoga Mat', description: 'Comfortable and non-slip yoga mat for all your poses.', price: 25.00 },
  { id: 3, image: 'pb.webp', name: 'Protein Powder', description: 'High-protein powder for muscle recovery and growth.', price: 30.00 },
  { id: 4, image: 'rb.webp', name: 'Resistance Bands', description: 'Set of resistance bands for versatile workouts.', price: 15.00 },
  { id: 5, image: 'tdm.webp', name: 'Treadmill', description: 'Compact and durable treadmill for home workouts.', price: 299.00 },
  { id: 6, image: 'kbs.webp', name: 'Kettlebell Set', description: 'Various weights of kettlebells for functional training.', price: 120.00 },
  { id: 7, image: 'dr.webp', name: 'Dumbbell Rack', description: 'Sturdy rack for organizing your dumbbell set.', price: 75.00 },
  { id: 8, image: 'jr.webp', name: 'Jump Rope', description: 'High-quality jump rope for cardio workouts.', price: 10.00 },
  { id: 9, image: 'fr.webp', name: 'Foam Roller', description: 'Foam roller for muscle recovery and stretching.', price: 20.00 },
  { id: 10, image: 'ym.webp', name: 'Yoga Block', description: 'Supportive yoga block for better flexibility.', price: 15.00 },
  { id: 11, image: 'ym.webp', name: 'Exercise Mat', description: 'Thick exercise mat for comfortable workouts.', price: 30.00 },
  { id: 12, image: 'rsb.jpg', name: 'Resistance Band Set', description: 'Set of resistance bands with different tensions.', price: 25.00 },
  { id: 13, image: 'pb.webp', name: 'Pull-Up Bar', description: 'Mountable pull-up bar for upper body training.', price: 40.00 },
  { id: 14, image: 'mb.webp', name: 'Medicine Ball', description: 'Versatile medicine ball for core and strength training.', price: 35.00 },
  { id: 15, image: 'rsb.jpg', name: 'Resistance Bands Set', description: 'Set of resistance bands with handles and ankle straps.', price: 30.00 },
  { id: 16, image: 'abr.webp', name: 'Ab Roller', description: 'Ab roller for effective core workouts.', price: 20.00 },
  { id: 17, image: 'ww.webp', name: 'Weighted Vest', description: 'Adjustable weighted vest for added resistance.', price: 60.00 },
  { id: 18, image: 'ym.webp', name: 'Yoga Mat Towel', description: 'Non-slip towel for your yoga mat.', price: 25.00 },
  { id: 19, image: 'sb.webp', name: 'Stability Ball', description: 'Exercise ball for core training and balance.', price: 30.00 },
  { id: 20, image: 'js.webp', name: 'Jumping Shoes', description: 'High-quality jumping shoes for plyometric workouts.', price: 80.00 },
  { id: 21, image: 'rm.webp', name: 'Rowing Machine', description: 'Efficient rowing machine for full-body workouts.', price: 250.00 },
  { id: 22, image: 'eb.webp', name: 'Elliptical Trainer', description: 'Smooth elliptical trainer for low-impact cardio.', price: 300.00 },
  { id: 23, image: 'Exercise Bike.webp', name: 'Exercise Bike', description: 'Compact exercise bike for indoor cycling.', price: 150.00 },
  { id: 24, image: 'pb.webp', name: 'Punching Bag', description: 'Durable punching bag for boxing workouts.', price: 90.00 },
  { id: 25, image: 'sl.webp', name: 'Speed Ladder', description: 'Speed ladder for agility and speed training.', price: 20.00 },
  { id: 26, image: 'gd.webp', name: 'Gliding Discs', description: 'Set of gliding discs for full-body workouts.', price: 10.00 },
  { id: 27, image: 'wjr.webp', name: 'Weighted Jump Rope', description: 'Weighted jump rope for enhanced cardio workouts.', price: 15.00 },
  { id: 28, image: 'br.webp', name: 'Battle Ropes', description: 'Heavy battle ropes for intense strength training.', price: 70.00 },
  { id: 29, image: 'gt.webp', name: 'Gym Timer', description: 'Digital gym timer for interval training.', price: 40.00 },
  { id: 30, image: 'ft.webp', name: 'Fitness Tracker', description: 'Advanced fitness tracker for monitoring your workouts.', price: 100.00 },
];

const Home = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantities, setQuantities] = useState(products.reduce((acc, product) => {
    acc[product.id] = 1;
    return acc;
  }, {}));

  const incrementQuantity = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const decrementQuantity = (id) => {
    setQuantities({ ...quantities, [id]: Math.max(1, quantities[id] - 1) });
  };

  const handleAddToCart = (product) => {
    addToCart(product, quantities[product.id]);
    alert(`${quantities[product.id] === 1 ? 'Item' : 'Items'} successfully added to cart`);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <header className="home-header">
        <h1>Fitness Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(product.id)}>-</button>
                <span>{quantities[product.id]}</span>
                <button onClick={() => incrementQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Home;
