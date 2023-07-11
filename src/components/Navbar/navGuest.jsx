import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';


const NavGuest = () => { 
  const navigate = useNavigate();

  useEffect(() => {
    const handleHamburgerClick = () => {
      const hamburgerMenu = document.querySelector(".hamburger-menu");
      const navbar = document.querySelector(".navbar");
      const navLinks = document.querySelector(".nav-links");

      hamburgerMenu.classList.toggle("active");
      navbar.classList.toggle("show-menu");
      navLinks.classList.toggle("show-menu");
    };

    const handleLoginButtonClick = () => {
      navigate('/login');
    };

    const handleSignUpButtonClick = () => {
      navigate('/signup');
    };

    const hamburgerMenu = document.querySelector(".hamburger-menu");
    hamburgerMenu.addEventListener("click", handleHamburgerClick);

    const loginButton = document.getElementById("login");
    loginButton.addEventListener("click", handleLoginButtonClick);

    const signUpButton = document.getElementById("signup");
    signUpButton.addEventListener("click", handleSignUpButtonClick);

    return () => {
      hamburgerMenu.removeEventListener("click", handleHamburgerClick);
      loginButton.removeEventListener("click", handleLoginButtonClick);
      signUpButton.removeEventListener("click", handleSignUpButtonClick);
    };
  }, [navigate]);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="https://i.ibb.co/ng4XG2J/logo.png" alt="Learny logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-btn">
        

          <button id="signup">Sign Up</button>
          <button id="login">Log In</button>
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

export default NavGuest; 
