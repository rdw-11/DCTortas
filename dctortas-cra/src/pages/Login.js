import React from "react";

function Login(props) {
  return (
    <>
      <div className="login-header">
        <p>Sign-In to MyDCTortas!</p>
      </div>
      <form className="login-form">
        <label className="label-email">
          Email:
          <input type="email" name="Email" placeholder="johnsmith@gmail.com" />
        </label>
        <label className="label-pw">
          Password:
          <input type="password" name="Password" placeholder="Password" />
        </label>
        <div className="loginButton">
          {" "}
          <button>Log In</button>
          <p className="forgot-pw-ptag">
            <a href="/ForgotPw">Forgot password?</a>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
