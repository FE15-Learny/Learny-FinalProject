/* eslint-disable react-hooks/exhaustive-deps */
import { Container, ToggleButton, ToggleButtonGroup, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import FormLogin from '../components/FormLogin';
import '../style/LoginSignup.css';
import img from '../assets/img/hero-banner.png';


const Login = () => {
  const navigate = useNavigate();
  let verifyLogin = localStorage.getItem('user-info');

  useEffect(() => {
    if (verifyLogin) {
      navigate('/');
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
              <ToggleButtonGroup type="checkbox" defaultValue={[1]} className="mb-2 toggle-group">
                <ToggleButton id="tbg-check-1" className="btn-toggle-active fw-semibold" value={1}>
                  Login
                </ToggleButton>
                <ToggleButton id="tbg-check-2" className="btn-toggle fw-semibold" value={2}>
                  <Link to="/signup" className="text-decoration-none">
                    SignUp
                  </Link>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <FormLogin />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
