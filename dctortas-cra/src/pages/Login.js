import React from "react";
import { useForm } from "react-hook-form";

//1. create re usable component for form//

// designspiration //
//use a re-usable form component for the Signup and Login//
//use component FormInput //

function Login(props) {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className="login-header">
        <p>Log-In to MyDCTortas!</p>
      </div>

      <form>
        <label for="email">Email:</label>
        <input
          type="email"
          placeholder="john_smith@me.com"
          id="login-email"
          name="email"
        />
        <label for="password">Password:</label>
        <input
          type="password"
          placeholder="Your password"
          id="login-email"
          name="password"
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
