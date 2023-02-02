import React from "react";
import { Button } from "react-bootstrap";

function Logout(props) {
  return (
    <>
      <div className="logout-header">
        <p>Successfully logged out.</p>
      </div>
      <span className="logout-farewell">
        <p>See you next time!</p>
        <p>Our next food donation will be..</p>
      </span>
      <div className="mb-2">
        <Button variant="secondary" size="sm">
          Return to homepage
        </Button>
      </div>
    </>
  );
}

export default Logout;
