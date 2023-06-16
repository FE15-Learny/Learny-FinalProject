import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import './Navbar.css';

const NavUser = () => {
  const user = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : {
    name: '',
    email: ''
  }
  // const [userData, setUserData] = useState({
  //   name: '',
  //   email: ''
  // })
  // const user = useSelector(state => state);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://64670f90ba7110b663ae7915.mockapi.io/pengguna'
        );
        if (response.data.length > 0) {
          const email = JSON.parse(localStorage.getItem('user-info'))?.email;
          setUsername(getUsernameByEmail(response.data, email));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    dispatch({ type: 'remove-user' })
    localStorage.removeItem('user-info')
    navigate('/');
  };

  useEffect(() => {
    const handleHamburgerClick = () => {
      const hamburgerMenu = document.querySelector('.hamburger-menu');
      const navbar = document.querySelector('.navbar');
      const navLinks = document.querySelector('.nav-links');

      hamburgerMenu.classList.toggle('active');
      navbar.classList.toggle('show-menu');
      navLinks.classList.toggle('show-menu');
    };

    const handleProfileButtonClick = () => {
      const dropdownMenu = document.querySelector('.profile-dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('show-menu');
      }
    };

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const profileButton = document.querySelector('#profile');

    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', handleHamburgerClick);
    }

    if (profileButton) {
      profileButton.addEventListener('click', handleProfileButtonClick);
    }

    return () => {
      if (hamburgerMenu) {
        hamburgerMenu.removeEventListener('click', handleHamburgerClick);
      }

      if (profileButton) {
        profileButton.removeEventListener('click', handleProfileButtonClick);
      }
    };
  }, []);

  const getUsernameByEmail = (data, email) => {
    const user = data.find((user) => user.email === email);
    return user ? user.name : '';
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="https://i.ibb.co/ng4XG2J/logo.png" alt="Learny logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-btn">
          <Dropdown show={showDropdown} onClick={toggleDropdown}>
            <div id="profile">
              <img
                src="src/assets/img/icon-profile.png"
                width={30}
                height={30}
                // alt="username"
              />
              <p id="username">{user.name}</p>
            </div>

            <Dropdown.Menu>
              <Dropdown.Item href="/editprofile">Edit Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item> {/* Menambahkan onClick handleLogout */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default NavUser;
