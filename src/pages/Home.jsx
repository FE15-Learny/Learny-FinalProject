import React, { useEffect } from "react";
// import heroBannerImg from "../assets/Img/hero-banner.png";
// import categoryEbook from "../assets/Img/ctg-ebook.png";
// import categoryArticle from "../assets/Img/ctg-article.png";
// import categoryVideo from "../assets/Img/ctg-video.png";
// import heroBannerImg from "../assets/Img/hero-banner.png";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "../style/Home.css";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div>
      <section id="hero">
        <Container className="d-flex align-items-center">
          <div className="hero-content">
            <h1 className="hero-title">
              <span id="title-1">EXPLORE YOUR KNOWLEDGE</span>
              <br />
              <span id="title-2">WITH LEARNY</span>
            </h1>

            <p className="hero-text">Using various learning methods.</p>
          </div>

          <div className="hero-banner">
            <img
              src="https://i.ibb.co/QJTD5TN/hero-banner.png " alt="hero-banner" className="img-fluid"
            />
          </div>
        </Container>
      </section>

      <section id="category">
        <Container>
          <div className="category-content">
            <h1 className="category-title">
              <span id="title-1">LEARNING</span>
              <span id="title-2">CATEGORY</span>
            </h1>
            <p className="category-desc">
              Learny Provides 3 learning Categories
            </p>
          </div>
        </Container>

        <div className="learning-categories">
          <Container>
            <Row>
              <Col>
                <div className="category-item">
                  <img
                    src= "https://i.ibb.co/rvFFQtw/ctg-e-book.png"
                    alt="E-book"
                    className="category-item-img"
                  />
                  <div className="category-item-desc">
                    <h2 className="category-item-title">E-Book</h2>
                    <p className="category-item-desc">
                      Explore our extensive collection of E-Books on various
                      topics.
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div className="category-item">
                  <img
                    src="https://i.ibb.co/yBKf7MX/ctg-article.png"
                    alt="Article"
                    className="category-item-img"
                  />
                  <div className="category-item-desc">
                    <h2 className="category-item-title">Article</h2>
                    <p className="category-item-desc">
                      Read informative and educational articles written by
                      experts.
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div className="category-item">
                  <img
                    src="https://i.ibb.co/Ny5mpcw/ctg-video.png"
                    alt="Videos"
                    className="category-item-img"
                  />
                  <div className="category-item-desc">
                    <h2 className="category-item-title">Video</h2>
                    <p className="category-item-desc">
                      Watch instructional videos to enhance your learning
                      experience.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section id="pop-videos">
        <Container>
          <div className="pop-vid-cont">
            <div className="popvid-title">
              <h1>OUR POPULAR VIDEOS</h1>
            </div>

            <Row className="row-vid">
              {/* Video 1 */}
              <Col md={4} className="col-vid">
                <Card>
                  <div className="card-img-top">
                    <iframe
                      width="100%"
                      height="auto"
                      src="https://www.youtube.com/embed/oYRda7UtuhA"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body>
                    <Card.Title id="vid-card-title">
                    <Link to="/video/7" style={{ textDecoration: 'none' }}>
                      How To Make Website Using HTML & CSS Multi Page Website Design
                      
                      </Link>
                    </Card.Title>
                    <Card.Text>
                    In this comprehensive video tutorial, you will gain hands-on 
                    experience in creating a complete website design using HTML and CSS. 
                    We will guide step by step through the process.

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Video 2 */}
              <Col md={4} className="col-vid">
                <Card>
                  <div className="card-img-top">
                    <iframe
                      width="100%"
                      height="auto"
                      src="https://www.youtube.com/embed/qz0aGYrrlhU"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body>
                    <Card.Title id="vid-card-title">
                    <Link to="/video/5" style={{ textDecoration: 'none' }}>
                    HTML Tutorial for Beginners: HTML Crash Course
                      </Link>
                    </Card.Title>
                    <Card.Text>
                    Welcome to the HTML Tutorial for Beginners! In this crash course, 
                    we will take you on an exciting journey through the world of HTML 
                    (Hypertext Markup Language).
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Video 3 */}
              <Col md={4} className="col-vid">
                <Card>
                  <div className="card-img-top">
                    <iframe
                      width="100%"
                      height="auto"
                      src="https://www.youtube.com/embed/_oO4Qi5aVZs"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body>
                    <Card.Title id="vid-card-title">
                    <Link to="/video/6" style={{ textDecoration: 'none' }}>
                      Build and Deploy a Fully Responsive Website with Modern
                      UI/UX
                      </Link>
                    </Card.Title>
                    <Card.Text>
                      Master modern web development by building a responsive
                      React JS application consisting of a stunning hero
                      section, high-quality assets, business status, and more!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
              

            <Link to="/video" className="btn-more">
              See More
            </Link>
          </div>
        </Container>
      </section>

      <section id="rec-articles">
        <Container>
          <div className="articles-content">
            <h1 className="article-title">
              <span id="title-1"> OUR </span>
              <span id="title-2"> RECOMMENDED </span>
              <span id="title-3"> ARTICLE </span>
            </h1>
          </div>
        </Container>

        <Row className="row-cols-1 row-cols-md-3 g-4" id="card-art">
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="https://i.ibb.co/RCW5mSB/art8.jpg" alt="art3" border="0" />
              <Card.Body>
                <Card.Title>
                When Front-End Means Full Stack
                </Card.Title>
                <div className="user-info">
                  <img
                    src="https://i.ibb.co/LtHH2BW/download.jpg" 
                    alt="Circle-icons-profile-svg"
                    border="0"
                  />
                  <span>Chris Coyier</span>
                  <span>May 20, 2020</span>
                </div>
                <Card.Text>
                Frontend development is at the intersection of art and logic, 
                business and expression, left brain and right brain, design and 
                nerdery.
                <br/>
                <br/>

                </Card.Text>
                <Link to="/article/4" className="btn-article">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="https://i.ibb.co/6ZBHQG7/art4.jpg" />
              <Card.Body>
                <Card.Title>Hierarchy Strips in User Interfaces</Card.Title>
                <div className="user-info">
                  <img
                    src="https://i.ibb.co/ygRPwbZ/download.jpg"
                    alt="Circle-icons-profile-svg"
                    border="0"
                  />
                  <span>Michal Malewicz</span>
                  <span>Dec 13, 2022</span>
                </div>
                <Card.Text>
                Presenting your work is essential on every stage of your design career. 
                Whether you’re working with developers, clients, stakeholders or just trying 
                to get your portfolio to have the most impact.
                </Card.Text>
                <Link to="/article/3" className="btn-article">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="https://i.ibb.co/wKRw2GH/art2.jpg" />
              <Card.Body>
                <Card.Title>Dear Junior UI/UX Designer</Card.Title>
                <div className="user-info">
                  <img
                    src="https://i.ibb.co/gRRZFdc/download.jpg"
                    alt="Circle-icons-profile-svg"
                    border="0"
                  />
                  <span>Ruqayyah Yaro</span>
                  <span>July 20, 2022</span>
                </div>
                <Card.Text>
                If you feel lost and overwhelmed and have been looking for 
                a guide or a little pick me up, this post is for you and I hope 
                it gives you the clarity and answers you need.
                </Card.Text>

                <Link to="/article/2" className="btn-article">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="pop-books">
        <div className="pop-books-cont">
          <div className="popbook-title">
            <h1>OUR POPULAR E-BOOKS</h1>
          </div>
          <div className="container">
            <Row className="row-b">
              {/* Book 1 */}
              <Col className="col-b">
                <Link to="/e-book/1">
                  <img src="https://i.ibb.co/MpyFxcy/book1.png" alt="image-59" border="0" />
                </Link>
              </Col>

              {/* Book 2 */}
              <Col className="col-b">
              <Link to="/e-book/2">
                <img src="https://i.ibb.co/0ZzXgT1/book2.jpg" alt="image-59" border="0" />
              </Link>
              </Col>

              {/* Book 3 */}
              <Col className="col-b">
              <Link to="/e-book/6">
                <img src="https://i.ibb.co/kDJmPsH/book6.png" alt="image-59" border="0" />
              </Link>
              </Col>
            </Row>
          </div>
          <Link to="/e-book" className="btn-more">
            See More
          </Link>
        </div>
      </section>

      <section id="about">
        <Container>
          <div className="about-title">
            <span className="blue-text"> WHAT </span>
            <span className="black-text"> IS </span>
            <img
              src="https://i.ibb.co/ng4XG2J/logo.png"
              alt="Learny logo"
              className="logo-about"
            />
            <span className="black-text"> ? </span>
          </div>
        </Container>

        <p id="description">
          “Learny is an online platform that aims to improve students' literacy
          skills by providing easy
          <br />
          and fast access to various literacy resources. At Learny, we believe
          that literacy is the key <br />
          to success in studies and in life. That's why we are committed to
          providing a collection of <br />
          high-quality and varied literacy resources to help students gain a
          better understanding of <br />
          the material they are studying.”
        </p>
      </section>
    </div>
  );
}

export default Home;
