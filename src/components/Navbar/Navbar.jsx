import React, { useState, useEffect } from 'react';
import NavGuest from './navGuest.jsx';
import NavUser from './navUser.jsx';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };  

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('user-info');
    console.log('userLoggedIn:', userLoggedIn);
    setIsLoggedIn(userLoggedIn !== null);
  }, []);
  

  return (
    <header className="header">
      <nav className="navbar">
        {isLoggedIn ? <NavUser /> : <NavGuest />}
      </nav>
      <button onClick={handleLoginStatus}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Navbar;
