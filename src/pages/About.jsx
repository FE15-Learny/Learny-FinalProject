import React from "react";
import "../style/About.css";

function About() {
  return (
    <div>
      <div className="sub-header"></div>
      <div className="container about">
        <div className="row">
          <div className="about-left">
            <h3>ABOUT US</h3>
            <p>
              Welcome to Learny! We are an online platform that aims to improve
              students' literacy skills by providing easy and fast access to
              various literacy resources.
            </p>
            <br />
            <p>
              At Learny, we believe that literacy is the key to success in
              studies and in life. That's why we are committed to providing a
              collection of high-quality and varied literacy resources to help
              students gain a better understanding of the material they are
              studying.
            </p>
            <br />
            <p>
              Our collection includes a wide variety of literacy resources, such
              as e-books, scientific journals, papers, articles and learning
              video. We also try to update our collections regularly, so
              students can access the latest and most trusted literacy
              resources.
            </p>
            <br />
            <p>
              We understand that gaining access to quality literacy resources
              can be difficult and time consuming. Therefore, we strive to
              simplify this process by providing an accessible and easy-to-use
              platform. Students can access our collections from various
              devices, such as desktops, laptops, tablets or smartphones,
              anytime and anywhere.
            </p>
            <br />
            <p>
              We always try to improve our quality and service. If you have any
              suggestions or feedback to improve our platform, please feel free
              to contact us at the email address provided on our website.
            </p>
          </div>
          <div className="about-right">
            <img src="https://i.ibb.co/cbgZZj1/Untitled-design-10.png" alt="Untitled-design-10" border="0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
