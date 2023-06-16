import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../style/LoginSignup.css';
import { useDispatch } from 'react-redux';

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);
  const [visibilityPassword, setVisibilityPassword] = useState('password');
  const [icon, setIcon] = useState('bx bx-low-vision');

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get('https://64670f90ba7110b663ae7915.mockapi.io/pengguna');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const leakPassword = () => {
    if (visibilityPassword === 'password') {
      setIcon('bx bx-show');
      setVisibilityPassword('text');
    } else {
      setIcon('bx bx-low-vision');
      setVisibilityPassword('password');
    }
  };

  const successLogin = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Berhasil masuk!',
    });
  };

  const login = (e) => {
    e.preventDefault();
    const user = users.find((item) => item.email === email && item.password === password);
    if (user) {
      localStorage.setItem('user-info', JSON.stringify(user));
      dispatch({ type: 'add-user', payload: {...user} })
      successLogin();
      navigate('/');
    } else {
      setUserNotFound(true);
    }
  };
  return (
    <>
      <div className="container-form">
        <form onSubmit={login} name="form" className="mt-5">
          {userNotFound == false ? null : (
            <div className="text-center py-2">
              <Alert variant="danger">
                <span className="fw-semibold">Warning!</span> Pengguna tidak ditemukan!
              </Alert>
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input type="email" className="form-control" id="email" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email here" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <InputGroup>
              <Form.Control type={visibilityPassword} className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password here" />
              <InputGroup.Text onClick={leakPassword} className="icon-eye">
                <i className={icon}></i>
              </InputGroup.Text>
            </InputGroup>
          </div>

          <button type="submit" className="btn btn-form w-100 mt-4 fw-bold">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
