import React from 'react';
import NavGuest from './navGuest.jsx';
import NavUser from './navUser.jsx';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state);
  
  return (
    <header className="header">
      <nav className="navbar">
        {user?.email ? <NavUser /> : <NavGuest />}
      </nav>
    </header>
  );
};

export default Navbar;
