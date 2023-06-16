import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../style/Contact.css';
import '../index.css';

function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    navigate("/contact");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    if (!name || !city || !email || !message || !status) {
      alert('Please fill in all required fields');
      return;
    }

    // Set submitting to true before sending the request
    setSubmitting(true);

    // Perform any additional logic or actions here

    // Clear input fields
    setName('');
    setCity('');
    setEmail('');
    setMessage('');

    // Clear checkbox
    setStatus(false);

    // Simulate request delay
    setTimeout(() => {
      // Reset submitting after the request is complete
      setSubmitting(false);
      // Show success message
      alert('Email sent successfully');
      // Reset the form
      formRef.current.reset();
    }, 2000);
  };

  return (
    <section id="contact">
      <Container>
        <Row id="contact-sec">
          <Col md={6} id="contact-img">
            <img src="https://i.ibb.co/QJTD5TN/hero-banner.png" alt="Contact" className="img-fluid" />
          </Col>
          <Col md={6}>
            <div className="text-center" id="desc">
              <span id="title-1">CONTACT</span>
              <span id="title-2"> US</span>
            </div>

            <form id="form" ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                id="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="status"
                  checked={status}
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <label htmlFor="status" id="check">
                The information provided in this form is true and correct.
                </label>
              </div>

              <Button type="submit" id="submit-form" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </Button>

              <div id="warning"></div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
