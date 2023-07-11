import axios from 'axios';
import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FormSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visibilityPassword, setVisibilityPassword] = useState('password');
  const [iconPassword, setIconPassword] = useState('bx bx-low-vision');
  const navigate = useNavigate();

  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  const regist = (event) => {
    event.preventDefault();
    try {
      axios.post('https://64670f90ba7110b663ae7915.mockapi.io/pengguna', newUser);
      alert();
    } catch (error) {
      console.log(error);
    }
  };

  const alert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Success!',
        text: 'Berhasil membuat akun!',
        icon: 'success',
        confirmButtonColor: '#096dd9',
        confirmButtonText: 'OK',
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
  };

  const leakPassword = () => {
    if (visibilityPassword === 'password') {
      setIconPassword('bx bx-show');
      setVisibilityPassword('text');
    } else {
      setIconPassword('bx bx-low-vision');
      setVisibilityPassword('password');
    }
  };

  return (
    <div className="container-form">
      <form onSubmit={regist} name="form" className="mt-5">
        <div className="mb-3">
          <label htmlFor="regist_name" className="form-label fw-semibold">
            Full Name
          </label>
          <input type="text" minLength={5} autoComplete="off" required={true} className="form-control" id="regist_name" name="regist_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Full Name here" />
        </div>
        <div className="mb-3">
          <label htmlFor="regist_email" className="form-label fw-semibold">
            Email
          </label>
          <input type="email" minLength={12} autoComplete="off" required={true} className="form-control" id="regist_email" name="regist_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email here" />
        </div>
        <div className="mb-3">
          <label htmlFor="regist_password" className="form-label fw-semibold">
            Password
          </label>
          <InputGroup>
            <Form.Control
              type={visibilityPassword}
              minLength={8}
              autoComplete="off"
              required={true}
              className="form-control"
              id="regist_password"
              name="regist_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password here"
            />
            <InputGroup.Text onClick={leakPassword} className="icon-eye">
              <i className={iconPassword}></i>
            </InputGroup.Text>
          </InputGroup>
        </div>

        <button type="submit" className="btn btn-form w-100 mt-4 fw-bold">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default FormSignUp;
