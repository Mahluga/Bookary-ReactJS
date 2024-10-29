import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import supabase from "../../supabase/clientSupabase";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ScrolltoTop from '../../components/ScrolltoTop';
import BreadCrumb from '../../components/BreadCrumb';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';


const Register = () => {
  const navigate = useNavigate();
  const [lang] = useContext(LangContext);

  const fullnameRef = useRef(null);
  const birthdayRef = useRef(null);
  const telRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const confirmPassRef = useRef(null);

  const registerSubmited = async (e) => {
    e.preventDefault();
    if (!fullnameRef.current.value ||
      !birthdayRef.current.value ||
      !telRef.current.value ||
      !emailRef.current.value ||
      !passRef.current.value ||
      !confirmPassRef.current.value
    ) {
      Swal.fire('Please, fill in all inputs', '', 'warning');
      return;
    }

    if (passRef.current.value !== confirmPassRef.current.value) {
      Swal.fire('Passwords are not the same!', '', 'error');
      return;
    }

    const { data, error: selectError } = await supabase.from('users').select().eq('email', emailRef.current.value);

    if (selectError) {
      console.log(selectError);
      Swal.fire("Something is wrong!", "", "error");
      return;
    }

    if (data && data.length > 0) {
      Swal.fire('This email is already in use!', '', 'error');
      return;
    }

    const { error } = await supabase.from('users').insert({
      fullname: fullnameRef.current.value,
      birthday: birthdayRef.current.value,
      tel: telRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value
    });

    if (error) {
      console.log(error);
      Swal.fire("Something is wrong!", "", "error");

    } else {
      Swal.fire("New user account has been created!", "", "success");
      navigate('/login')
    }
  }

  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "Register" : "Qeydiyyat"} />
      <section className='page-img'>
        <div className="container">
          <h1 className='text-center mt-5'>{lang === "en" ? "Register" : "Qeydiyyat"}</h1>
        </div>
      </section>
      <div className="hero">
        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <div className="col-5 my-5">
            <form onSubmit={registerSubmited}>
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input ref={fullnameRef} type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Date of birth</label>
                <input ref={birthdayRef} type="date" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone number</label>
                <input ref={telRef} type="tel" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input ref={emailRef} type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={passRef} type="password" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input ref={confirmPassRef} type="password" className="form-control" />
              </div>
              <div className="d-flex flex-column">
                <button type="submit" className="dashboard-btn btn mt-4">Register</button>
                <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                  <p className='mt-2'>Already have an account.</p>
                  <Link to='/login' type="submit" className="dashboard-btn btn ms-3 ">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register