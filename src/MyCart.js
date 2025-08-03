import React from 'react';
import './MyCart.css';

const MyCart = ({ cart, updateCartQuantity, removeFromCart, calculateTotal, setRoute }) => {
  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="cart-price">${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
        
      </div>
    </div>
  );
};

export default MyCart;
