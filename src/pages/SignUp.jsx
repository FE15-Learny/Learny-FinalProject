/* eslint-disable react-hooks/exhaustive-deps */
import { Container, ToggleButton, ToggleButtonGroup, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import FormSignUp from '../components/FormSignUp';
import '../style/LoginSignup.css';
import img from '../assets/img/hero-banner.png';

const SignUp = () => {
  const navigate = useNavigate();
  let verifyLogin = localStorage.getItem('user-info');

  useEffect(() => {
    if (verifyLogin) {
      navigate('/home');
    }
  }, []);

  return (
    <section>
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Row>
          <Col xs={12} lg={4} className="d-none d-lg-flex">
            <img src={img} alt="hero-banner" className="w-100 img-fluid" />
          </Col>
          <Col xs={12} lg={8}>
            <div className="toggle-section text-center d-flex justify-content-center flex-column">
              {/* <p className="fw-bold fs-3">Get started with our app, just create an account and enjoy the experience.</p> */}
              <ToggleButtonGroup type="checkbox" defaultValue={[2]} className="mb-2 toggle-group">
                <ToggleButton id="tbg-check-1" className="btn-toggle" value={1}>
                  <Link to="/login" className="text-decoration-none fw-semibold">
                    Login
                  </Link>
                </ToggleButton>
                <ToggleButton id="tbg-check-2" className="btn-toggle-active fw-semibold" value={2}>
                  SignUp
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <FormSignUp />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp;
