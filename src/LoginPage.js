import React, { useState } from 'react';
import './Auth.css'; // Assuming you have Auth.css for styling

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass email, password to the login handler function from parent
    onLogin(email, password);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p style={{ marginTop: '1rem' }}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
