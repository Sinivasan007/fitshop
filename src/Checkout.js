import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ total }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Order placed:', { name, address, location, paymentMode });
    setOrderPlaced(true);
    // Handle order placement logic here
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {orderPlaced ? (
        <div className="order-success">
          <h2>Order placed successfully!</h2>
          <p>Thank you for your purchase!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMode">Payment Mode:</label>
            <select id="paymentMode" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>
          <div className="form-group">
            <label>Total Bill: ${total}</label>
          </div>
          <button type="submit" className="submit-button">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
