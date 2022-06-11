import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/Logo2.png'
import useForm from './useForm';
import loginRight from '../../assets/img/loginRight.svg'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import login from '../../redux/login/Action';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate()

  // const dispatch = useDispatch();
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
    navigate("/dashboard")
  }
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
  // const handle = () => {
  //   if (useForm.email == "paulaxel.marie@gmail.com" && useForm.pwd == "Richa12345") {
  //     navigate("/dashboard")
  //   }
  //   else {
  //     alert("Please enter correct details");
  //   }
  //  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(login({ username: 'raj', password: 'abc@123' }))
  // }
  // useEffect(()=>{
  //   axios.post("https://reqres.in/api/login",{
  //     "email": "eve.holt@reqres.in",
  //     "password": "cityslicka"
  // }).then((response)=>{console.log(response)})
  // })

  // const handleClick = ()=>{
  //   if(response.status===200)
  //   {
  //     navigate("/dashboard")
  //   }
  //   else{
  //     alert("not ok")
  //   }
  // }

  const data = useSelector((state) => state?.LoginReducer);
  console.log(data, 'data---')
  return (
    <div className="login-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
            <div className="container">
              <div className="login-left">
                <div className="logo-login text-center pt-4 pb-4">
                  <img src={logo} />
                </div>
                <div className="login-heading">
                  <h2>Login</h2>
                  <p className="pb-4">Welcome back, please login your account</p>
                </div>
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                      <label htmlFor="email">Email</label>
                      <div className="inputBx">
                        <input type="email" className="form-control" id="email" name="email"
                          value={useForm.email}
                          // onChange={(e) => { setEmail(e.target.value) }}
                          onChange={handleChange}
                        />
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </div>
                      {
                        errors.email && <p style={{color:"red",fontSize:"12px"}}>{errors.email}</p>
                      }
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pwd">Password</label>
                      <div className="inputBx">
                        <input type="password" className="form-control" id="password" name="password"
                          value={useForm.pwd}
                          onChange={handleChange}
                        // onChange={(e) => { setPwd(e.target.value) }}
                        />
                        <i className="fa fa-lock" aria-hidden="true" />
                      </div>
                      {
                        errors.password && <p style={{color:"red",fontSize:"12px"}}>{errors.password}</p>

                      }

                      <div className="form-check mb-3">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" name="remember" />
                          Remember
                        </label>
                        <a href="#"> Forgot password ?</a>
                      </div>
                      <button type="submit" className="btn btn-primary" 
                      // onClick={handle}

                      >Login</button>
                      {/* <button
                        onClick={handleSubmit}

                      >Login</button> */}
                      <p className="message text-center mt-3">
                        Don’t have an account?
                        <a href="#">Register your company here</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12  col-md-12 col-lg-6 col-xxl-6">
            <div className=" login-right ">
              <img src={loginRight} />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-md-12 ">
            <div className="img-footer ">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;