import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "../style/Home.css";
import "../index.css";
import Navbar from '../components/Navbar/Navbar';


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
              src="src\assets\img\hero-banner.png"
              alt="hero-banner"
              className="img-fluid"
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
                    src="src/assets/img/ctg-e-book.png"
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
                    src="src/assets/img/ctg-article.png"
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
                    src="src/assets/img/ctg-video.png"
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
                      src="https://www.youtube.com/embed/o1IaduQICO0"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body>
                    <Card.Title>
                      JavaScript Full Course
                      <br />
                      JavaScript Tutorial For Beginners
                    </Card.Title>
                    <Card.Text>
                      This Edureka video on "JavaScript full course" is a
                      complete guide to JavaScript which covers in-depth
                      knowledge about data types, variables, functions, event
                      handling, form validation, etc.
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
                      src="https://www.youtube.com/embed/_oO4Qi5aVZs"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body>
                    <Card.Title>
                      Build and Deploy a Fully Responsive Website with Modern
                      UI/UX
                    </Card.Title>
                    <Card.Text>
                      Master modern web development by building a responsive
                      React JS application consisting of a stunning hero
                      section, high-quality assets, business status, and more!
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
                      src="https://www.youtube.com/embed/Q33KBiDriJY"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body>
                    <Card.Title>
                      Web Development Full Course - 10 Hours Learn Web
                      Development from Scratch
                    </Card.Title>
                    <Card.Text>
                      This Edureka Web Development Full Course video will help
                      you understand and learn Web Development in detail. This
                      Tutorial is ideal for beginners as well as professionals.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Link to="/Ebook" className="btn-more">
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
              <Card.Img variant="top" src="src/assets/img/art1.jpg" alt="..." />
              <Card.Body>
                <Card.Title>
                  Write Code that is Easy to Delete, Not Easy to Extend
                </Card.Title>
                <div className="user-info">
                  <img
                    src="src/assets/img/icon-profile.png"
                    alt="Circle-icons-profile-svg"
                    border="0"
                  />
                  <span>JAROT DIAN S.</span>
                  <span>Sep 14, 2020</span>
                </div>
                <Card.Text>
                  You don’t need to throw it all away but you will need to
                  delete some of it. Good code isn’t about getting it right the
                  first time. Good code is just legacy code that doesn’t get in
                  the way. Good code is easy to delete.
                </Card.Text>
                <Link to="/DetailArticle" className="btn-article">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/img/art2.jpg" alt="..." />
              <Card.Body>
                <Card.Title>The New Business of AI</Card.Title>
                <div className="user-info">
                  <img
                    src="src/assets/img/icon-profile.png"
                    alt="Circle-icons-profile-svg"
                    border="0"
                  />
                  <span>JAROT DIAN S.</span>
                  <span>Sep 14, 2020</span>
                </div>
                <Card.Text>
                  At a technical level, artificial intelligence seems to be the
                  future of software. AI is showing remarkable progress on a
                  range of difficult computer science problems, and the job of
                  software developers who now work with data as much as source
                  code is changing fundamentally.
                </Card.Text>
                <Link to ="/DetailArticle" className="btn-article">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/img/art3.jpg" alt="..." />
              <Card.Body>
                <Card.Title>When Front-End Means Full Stack</Card.Title>
                <div className="user-info">
                  <img
                    src="src/assets/img/icon-profile.png"
                    alt="Circle-icons-profile-svg"
                    border="0"
                  />
                  <span>JAROT DIAN S.</span>
                  <span>Sep 14, 2020</span>
                </div>
                <Card.Text>
                  Being a front-end developer puts us between the thing we’re
                  building and the people we’re building it for and that’s a
                  place some of us really enjoy being, even if it means taking
                  on ever-larger bundles of responsibility from that big
                  haystack of work. Weighty stuff, isn’t it?
                </Card.Text>

                <Link to="/DetailArticle" className="btn-article">
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
          <Container>
            <Row className="row-b">
              {/* Book 1 */}
              <Col className="col-b">
                <img src="src/assets/img/book1.jpg" alt="image-59" border="0" />
              </Col>

              {/* Book 2 */}
              <Col className="col-b">
                <img src="src/assets/img/book2.jpg" alt="image-59" border="0" />
              </Col>

              {/* Book 3 */}
              <Col className="col-b">
                <img src="src/assets/img/book4.jpg" alt="image-59" border="0" />
              </Col>
            </Row>
          </Container>
          <Link to="/Ebook" className="btn-more">
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
              src="src/assets/img/logo.png"
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
