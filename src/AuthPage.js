import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (email, password) => {
    // Add your login logic here
    console.log('Login:', email, password);
  };

  const handleSignUp = (email, password) => {
    // Add your signup logic here
    console.log('Sign Up:', email, password);
  };

  const switchToLogin = () => setIsLogin(true);
  const switchToSignUp = () => setIsLogin(false);

  return (
    <>
      {isLogin ? (
        <LoginPage onLogin={handleLogin} switchToSignUp={switchToSignUp} />
      ) : (
        <SignUpPage onSignUp={handleSignUp} switchToLogin={switchToLogin} />
      )}
    </>
  );
};

export default AuthPage;
