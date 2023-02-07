import React from "react";
import {useForm} from 'react-hook-form';

//1. create re usable component for form//


// designspiration //
//use a re-usable form component for the Signup and Login//
//use component FormInput //



function Login(props) {

const {register, handleSubmit} = useForm();

  const onSubmitHandler = function(){
    console.log("submitted")
  }

  return (
    <>
      <div className="login-header">
        <p>Log-In to MyDCTortas!</p>
      </div>
      <form onSubmit={handleSubmit(){onSubmitHandler} className="login-form">
        <SignInLabel />
        <SignInLabel />
        <div className="loginButton">
          {" "}
          <button type="submit">Log In</button>
          <p className="forgot-pw-ptag">
            <a href="/ForgotPw">Forgot password?</a>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
