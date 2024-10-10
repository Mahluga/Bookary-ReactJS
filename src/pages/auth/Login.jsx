import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/scss/_login.scss' 
import { useRef } from 'react'
import swal from 'sweetalert'

const adminuser = {
  email:"mahlugajalilova@gmail.com",
  password:"jalilova123"
}

const normaluserdata = localStorage.getItem('userdata');
const normaluser = JSON.parse(normaluserdata);

const Login = () => {

  const emailRef = useRef();
  const passRef = useRef();

// const loginSubmitted =(e)=>{
//   e.preventDefault();
//   if (!emailRef.current.value || !passRef.current.value) {
//     swal('Please, fill inputs','','warning');
// }else{
//     if (emailRef.current.value === adminuser.email && passRef.current.value === adminuser.password) {
//         localStorage.setItem('adminlogin','true');
//         localStorage.setItem('login','false');
//         swal('Admin login had been successfully','','success');
//         setTimeout(()=>{
//             window.location.reload();
//         },2000);
//     }else{
//         const createLogin = ()=>{
//             localStorage.setItem('login','true');
//             localStorage.setItem('adminlogin','false');
//         swal('User login had been successfully','','success');
//         setTimeout(()=>{
//             window.location.reload();
//         },2000);
//         }
//       }
//     }
  return (
    <div className='container-fluid text-center my-5'>
        <h1>Login</h1>
        <div className='d-flex flex-column align-items-center'>
     <form className='form-page'>
  <div className="mb-3 my-5">
    <label className="form-label">Username or email address</label>
    <input type="email" className="form-control" ref={emailRef} placeholder='Enter your username or email address...'/>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control"ref={passRef} placeholder='Enter your password...'/>
  </div>
  <button type="submit" className="btn">Log in</button>
  <p className='my-3'>Don't have an account?</p>
  <Link to='/register' type="submit" className="btn py-2">Register</Link>
</form>
</div>
    </div>
  )
}

export default Login





