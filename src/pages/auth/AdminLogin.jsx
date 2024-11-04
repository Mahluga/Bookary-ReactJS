import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../../supabase/clientSupabase';
import Swal from 'sweetalert2';
import ScrolltoTop from '../../components/ScrolltoTop';
import BreadCrumb from '../../components/BreadCrumb';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';


const adminuser = {
  email: "mjalil@gmail.com",
  password: "jalil24"
}
const AdminLogin = () => {
  const [lang] = useContext(LangContext)
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();

  const loginSubmited = (e) => {
    e.preventDefault();

    if (!emailRef.current.value || !passRef.current.value) {
      Swal.fire('Please, fill in both email and password', '', 'warning');
      return;
    }

    if (emailRef.current.value === adminuser.email && passRef.current.value === adminuser.password) {
      localStorage.setItem('adminlogin', 'true');
      localStorage.setItem('login', 'false');
      Swal.fire('Admin login successful!', '', 'success');
      setTimeout(() => {
        navigate('/dashboard');
        window.location.reload();
      }, 1000);
    } else {
      const checkuser = async () => {
        const { data, error } = await supabase.from('users').select();

        if (error) {
          console.log(error);
          Swal.fire('An error occurred during login', '', 'error');
          return;
        }

        const userfind = data?.find((p) => p.email === emailRef.current.value);

        if (!userfind) {
          Swal.fire('Email or password is incorrect!', '', 'error');
        } else if (userfind.password === passRef.current.value) {
          localStorage.setItem('login', 'true');
          localStorage.setItem('adminlogin', 'false');
          localStorage.setItem('username', userfind.fullname);
          Swal.fire('This is not admin gmail!', '', 'error');

        } else {
          Swal.fire('Email or password is incorrect!', '', 'error');
        }
      };

      checkuser();
    }
  };

  return (
    <>
 <ScrolltoTop />
 <BreadCrumb page={lang === "en" ? "Admin Login" : "Admin Girişi"} />
      <div className="hero">
        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <div className="col-4 my-5">
            <form onSubmit={loginSubmited}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input ref={emailRef} type="email" className="form-control" />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={passRef} type="password" className="form-control" />
              </div>
              <div className="d-flex flex-column">
                <button type="submit" className="dashboard-btn btn mt-4">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;