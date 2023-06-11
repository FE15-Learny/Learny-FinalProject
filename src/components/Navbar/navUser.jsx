import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

import "./Navbar.css";

const NavUser = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleHamburgerClick = () => {
      const hamburgerMenu = document.querySelector(".hamburger-menu");
      const navbar = document.querySelector(".navbar");
      const navLinks = document.querySelector(".nav-links");

      hamburgerMenu.classList.toggle("active");
      navbar.classList.toggle("show-menu");
      navLinks.classList.toggle("show-menu");
    };

    const handleProfileButtonClick = () => {
      const dropdownMenu = document.querySelector(".profile-dropdown-menu");
    };

    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const profileButton = document.querySelector("#profile");

    if (hamburgerMenu) {
      hamburgerMenu.addEventListener("click", handleHamburgerClick);
    }

    if (profileButton) {
      profileButton.addEventListener("click", handleProfileButtonClick);
    }

    return () => {
      if (hamburgerMenu) {
        hamburgerMenu.removeEventListener("click", handleHamburgerClick);
      }

      if (profileButton) {
        profileButton.removeEventListener("click", handleProfileButtonClick);
      }
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="src/assets/img/logo.png" alt="Learny logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/video">Category</Link>
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
          alt="username"
        />
        <p>Skilvul - FE 15</p>
      </div>

      <Dropdown.Menu>
        <Dropdown.Item href="/editprofile">Edit Profile</Dropdown.Item>
        <Dropdown.Item href="/">Log Out</Dropdown.Item>
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
