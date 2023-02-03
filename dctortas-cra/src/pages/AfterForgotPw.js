import React from "react";
import { Button } from "react-bootstrap";

function AfterForgotPw(props) {
  return (
    <div>
      <img
        className="forgot-pw-img"
        src="https://images.pexels.com/photos/1011848/pexels-photo-1011848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="key handoff"
        width="320"
        height="400"
      ></img>
      <div className="reset-pw-div">Your password is now reset</div>
      <div className="mb-2">
        <Button className="afterpw-button"variant="primary" size="lg">
          Start an order
        </Button>{" "}
      </div>
    </div>
  );
}

export default AfterForgotPw;
