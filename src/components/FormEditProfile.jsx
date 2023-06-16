import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const FormEditProfile = () => {
    const dataUser = JSON.parse(localStorage.getItem('user-info'));
    const [name, setName] =  useState(dataUser.name)
    const [email, setEmail] =  useState(dataUser.email)
    const navigate = useNavigate();

    console.log(dataUser, 'user')


    const newUser = {
        name: name,
        email: email,
       
      };

      const alert = () => {
        const swalWithBootstrapButtons = Swal.mixin({
          buttonsStyling: true,
        });
    
        swalWithBootstrapButtons
          .fire({
            title: 'Success!',
            text: 'Berhasil mengubah data!',
            icon: 'success',
            confirmButtonColor: '#096dd9',
            confirmButtonText: 'OK',
          })
          .then((result) => {
            if (result.isConfirmed) {
               localStorage.delete('user-info')
              navigate('/login');
            }
          });
      };

const Update = (event) => {
    event.preventDefault();
    try {
        axios.put(`https://64670f90ba7110b663ae7915.mockapi.io/pengguna/${dataUser.id}`, newUser)
      alert();
    } catch (error) {
      console.log(error);
    }
  };





  return (
    
    <div className="container-form2">
      <form onSubmit={Update} name="form" className="mt-5">
        <div className="mb-3">
          <label htmlFor="regist_name" className="form-label fw-semibold">
            Name
          </label>
          <input type="text" minLength={5} autoComplete="off" required={true} className="form-control" id="regist_name" name="regist_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Edit your Name here" />
        </div>
        <div className="mb-3">
          <label htmlFor="regist_email" className="form-label fw-semibold">
            Email
          </label>
          <input type="email" minLength={12} autoComplete="off" required={true} className="form-control" id="regist_email" name="regist_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Edit your Email here" />
        </div>
        <div className="mb-3">
          
        </div>

        <button type="submit" className="btn btn-form w-100 mt-4 fw-bold">
          Perbaruhi Data
        </button>
      </form>
    </div>
  );
  };

export default FormEditProfile;
