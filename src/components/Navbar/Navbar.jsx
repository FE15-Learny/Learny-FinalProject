import React from 'react';
import NavGuest from './navGuest.jsx';
import NavUser from './navUser.jsx';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state);
  const dataUser = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : undefined;

  const handleRenderNav = () => {
    if (user?.email || dataUser)     return <NavUser />

    return  <NavGuest />
  }

  console.log(user, 'user')
  
  return (
    <header className="header">
      <nav className="navbar">
        {handleRenderNav()}
      </nav>
    </header>
  );
};

export default Navbar;
