import React, { useState } from 'react';
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //  errors------------------------------------
  const [emailError, setEmailError] = useState(false)
  const [passError, setPassError] = useState(false)



  let data = {
    email: email,
    password: password
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    if (email.lenght > 4) {
      setEmailError(true)
    }
  }


  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }



  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      alert('fill data properly')
      return;
    }
    try {
      const response = await axios.post("https://reqres.in/api/login", data)
      console.log("response", response);
      if (response.status === 200) {
        navigate("/signup");
      } else {
        alert("error")
      }
    } catch (error) {
      console.log("kjbiuuyv");
    }
  }
  return (
    <>
      <div className='login_form'>
        <form className='main_form shadow-sm' onSubmit={submitHandler}>
          <div className="imgcontainer">
            <img src="../logo512.png" alt="Avatar" className="avatar" />
          </div>
          <div className="container">
            <label htmlFor="uname"><b>Email</b></label>
            <input type="email" placeholder="Enter email" name="email" value={email} onChange={emailHandler} />
            {emailError ? <span>email length should be between 8 to 36 characters.</span> : null}
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={passwordHandler} />
            <button type="submit">Login</button>
            <div className='d-flex justify-content-between forgot_pass'>
              <label htmlFor="remember">
                <input type="checkbox" checked="checked" name="remember" />Remember me
              </label>
              <button className="cancelbtn"><a href="#">Forgot password</a></button>
            </div>
          </div>
        </form>
      </div>
    </>

  )
}
export default LoginForm
