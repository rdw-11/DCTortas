import React from "react";
import { Button } from "react-bootstrap";

function AfterForgotPw(props) {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/1011848/pexels-photo-1011848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="key handoff"
        width="320"
        height="400"
      ></img>
      <div>Your password is now reset</div>
      <div className="mb-2">
        <Button variant="primary" size="lg">
          Start an order
        </Button>{" "}
      </div>
    </div>
  );
}

export default AfterForgotPw;
