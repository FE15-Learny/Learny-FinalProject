import React from "react";
import './footer.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div id="logo">
              <img src='https://i.ibb.co/r6G9mgz/logo.png' alt="logo" border="0" />
              <h3>
                An Online Platform That Aims To Improve Students Literacy
                Skills
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div id="menu" className="row">
              <div className="col-sm-6 col-md-4">
                <h2>Pages</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="./landpage.html#home">Home</a>
                  </li>
                  <li>
                    <a href="./landpage.html#category">Category</a>
                  </li>
                  <li>
                    <a href="./landpage.html#about">About</a>
                  </li>
                  <li>
                    <a href="./landpage.html#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4">
                <h2>Category</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="./landpage.html#category">E-Book</a>
                  </li>
                  <li>
                    <a href="./landpage.html#category">Article</a>
                  </li>
                  <li>
                    <a href="./landpage.html#category">Video</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-4">
                <h2>Contact</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="./landpage.html#contact">(021) 444-6254</a>
                  </li>
                  <li>
                    <a href="./landpage.html#contact">learny@gmail.com</a>
                  </li>
                  <li>
                    <a href="./landpage.html#contact">Jakarta, Indonesia</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 text-center">
            <div id="partner">
              <h2 style={{ whiteSpace: 'nowrap' }}>Challenge Partner</h2>
              <a href="https://skilvul.com">
                <img src='https://i.ibb.co/LJYLSYW/logo-skilvul.png' alt="logo-skilvul" border="0" />
              </a>
              <div className="d-flex justify-content-center w-100">
                <a href="https://skilvul.com" className="w-100 mx-auto text-center">
                  Skilvul
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row copyright-text">
          <p>&copy; 2023 Learny. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;