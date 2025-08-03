import React, { useState } from 'react';
import './App.css';
import About from './About';
import Home from './Home';
import Contactus from './Contactus';
import Products from './Products';
import MyCart from './MyCart';
import Checkout from './Checkout';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const App = () => {
  const [route, setRoute] = useState('/Products');
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const productExists = cart.find(item => item.id === product.id);
    if (productExists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const updateCartQuantity = (id, quantity) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const renderComponent = () => {
    switch (route) {
      case '/LogIn':
        return <LoginPage />;
      case '/Signup':
        return <SignUpPage />;
      case '/About':
        return <About />;
      case '/Products':
        return <Products addToCart={addToCart} />;
      case '/Contactus':
        return <Contactus />;
      case '/MyCart':
        return (
          <MyCart
            cart={cart}
            updateCartQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
            calculateTotal={calculateTotal}
          />
        );
      case '/Checkout':
        return <Checkout total={calculateTotal()} />;
      default:
        return <Home addToCart={addToCart} />;
    }
  };

  return (
    <div>
      <nav>
        <div className='c1'>
          <div className="nav-logo">
            <img src="ff.png" alt="Fitness Gear" />
          </div>
          <button className='h' onClick={() => setRoute('/Products')}>Home</button>
          <button className='h' onClick={() => setRoute('/')}>Products</button>
          <button className='h' onClick={() => setRoute('/Contactus')}>Contact Us</button>
          <button className='h' onClick={() => setRoute('/About')}>About Us</button>
        </div>
        <div className='c2'>
          <button className='h' onClick={() => setRoute('/LogIn')}>Log In</button>
          <button className='h' onClick={() => setRoute('/Signup')}>Sign Up</button>
          <button className='h' onClick={() => setRoute('/MyCart')}>My Cart</button>
          <button className='h' onClick={() => setRoute('/Checkout')}>Checkout</button>
        </div>
      </nav>
      {renderComponent()}
      <section className="footer">
        <div className="foot">
          <div className="footer-content">
            <div className="footlinks">
              <div className="social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-facebook' />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-instagram' />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-twitter' />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-linkedin' />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="end">
          <p>Copyright 2024 GyM All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
