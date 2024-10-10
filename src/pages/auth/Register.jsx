import React from 'react'
import '../../assets/scss/_login.scss'

const Register = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
    <h1 className="my-5">Register </h1>
    
      <form className='form-page'>
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
              <label className="form-label">Date of birth</label>
              <input type="date" className="form-control"   />
          </div>
        <div className="mb-3">
              <label  className="form-label">Phone number</label>
              <input type="tel" className="form-control"   />
          </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn mt-3">Register</button>
      </form>
    </div>
  
  )
}

export default Register